import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { MOVABLE_ITEM_STATUSES, TRANSFER_TRANSITIONS, assertTransition } from '../common/domain';
import { AuthenticatedUser } from '../common/types';
import { nextSerial, pageArgs, paginate, publicUserSelect, shortCode, withUniqueRetry } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { WarehousesService } from '../warehouses/warehouses.service';
import { CreateTransferDto, QueryTransferDto } from './dto';

const MANIFEST_ACTION = 'STOCK_TRANSFER_MANIFEST';

const transferInclude = {
  sourceWarehouse: true,
  targetWarehouse: true,
  volunteers: { include: { volunteer: { select: publicUserSelect } } },
  items: {
    include: {
      resourceItem: { select: { id: true, qrCode: true, name: true, category: true, status: true, warehouseId: true } },
    },
  },
} satisfies Prisma.StockTransferOrderInclude;

@Injectable()
export class TransfersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly warehouses: WarehousesService,
  ) {}

  async create(actor: AuthenticatedUser, dto: CreateTransferDto, ipAddress: string | null) {
    if (dto.sourceWarehouseId === dto.targetWarehouseId) {
      throw new BadRequestException('Kho nguồn và kho đích phải khác nhau');
    }
    const uniqueIds = [...new Set(dto.resourceItemIds)];
    const volunteerIds = [...new Set(dto.volunteerIds)];
    await this.assertVolunteers(volunteerIds);
    const transfer = await withUniqueRetry(() =>
      this.prisma.$transaction(async (tx) => {
        const [source, target] = await Promise.all([
          tx.warehouse.findUnique({ where: { id: dto.sourceWarehouseId } }),
          tx.warehouse.findUnique({ where: { id: dto.targetWarehouseId } }),
        ]);
        if (!source || !target) {
          throw new NotFoundException('Không tìm thấy kho nguồn hoặc kho đích');
        }
        const items = await tx.resourceItem.findMany({ where: { id: { in: uniqueIds } } });
        if (items.length !== uniqueIds.length) {
          throw new BadRequestException('Có tài nguyên không tồn tại');
        }
        for (const item of items) {
          if (item.warehouseId !== source.id) {
            throw new BadRequestException(`Tài nguyên ${item.qrCode} không nằm ở kho nguồn`);
          }
          if (!MOVABLE_ITEM_STATUSES.includes(item.status) || item.status === 'REFURBISHING') {
            throw new BadRequestException(`Tài nguyên ${item.qrCode} chưa sẵn sàng điều chuyển`);
          }
        }
        const code = await this.nextCode(tx);
        const created = await tx.stockTransferOrder.create({
          data: {
            code,
            sourceWarehouseId: source.id,
            targetWarehouseId: target.id,
            createdById: actor.id,
            status: 'PENDING',
            itemsCount: items.length,
            recipientName: dto.recipientName.trim(),
            recipientPhone: dto.recipientPhone.trim(),
            recipientNote: dto.recipientNote?.trim(),
            volunteers: { create: volunteerIds.map((volunteerId) => ({ volunteerId })) },
            items: { create: uniqueIds.map((resourceItemId) => ({ resourceItemId })) },
          },
          include: transferInclude,
        });
        await tx.auditLog.create({
          data: {
            userId: actor.id,
            action: MANIFEST_ACTION,
            resource: 'StockTransferOrder',
            details: { transferId: created.id, itemIds: uniqueIds },
            ipAddress,
          },
        });
        return created;
      }),
    );
    return this.present(transfer);
  }

  async list(query: QueryTransferDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.StockTransferOrderWhereInput = {
      ...(query.status ? { status: query.status } : {}),
      ...(query.code ? { code: { contains: query.code, mode: 'insensitive' } } : {}),
      ...(query.warehouseId
        ? { OR: [{ sourceWarehouseId: query.warehouseId }, { targetWarehouseId: query.warehouseId }] }
        : {}),
      ...(query.search ? { code: { contains: query.search, mode: 'insensitive' } } : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.stockTransferOrder.findMany({
        where,
        include: transferInclude,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.stockTransferOrder.count({ where }),
    ]);
    return paginate(data.map((row) => this.present(row)), total, page, limit);
  }

  async get(id: string) {
    const transfer = await this.prisma.stockTransferOrder.findUnique({
      where: { id },
      include: transferInclude,
    });
    if (!transfer) {
      throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
    }
    return this.present(transfer);
  }

  async dispatch(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const updated = await this.prisma.$transaction(async (tx) => {
      const transfer = await tx.stockTransferOrder.findUnique({ where: { id } });
      if (!transfer) {
        throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
      }
      assertTransition(transfer.status, 'RECEIVED', TRANSFER_TRANSITIONS, 'Lệnh điều chuyển');
      const itemIds = await this.itemIds(id, tx);
      await this.warehouses.assertCapacity(tx, transfer.targetWarehouseId, itemIds.length);
      const moved = await tx.resourceItem.updateMany({
        where: { id: { in: itemIds }, warehouseId: transfer.sourceWarehouseId },
        data: { warehouseId: transfer.targetWarehouseId, binLocation: null },
      });
      if (moved.count !== itemIds.length) {
        throw new BadRequestException('Một số tài nguyên không còn ở kho nguồn nên không thể xuất điều chuyển');
      }
      const now = new Date();
      return tx.stockTransferOrder.update({
        where: { id },
        data: { status: 'RECEIVED', dispatchedAt: transfer.dispatchedAt ?? now, receivedAt: now },
        include: transferInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'STOCK_TRANSFER_DISPATCHED',
      resource: 'StockTransferOrder',
      details: { transferId: id, code: updated.code, status: 'RECEIVED' },
      ipAddress,
    });
    return this.present(updated);
  }

  async receive(_actor: AuthenticatedUser, _id: string, _ipAddress: string | null) {
    throw new BadRequestException('Xuất kho đã hoàn tất việc nhận hàng. Không cần xác nhận nhận tại điểm đến.');
  }

  async cancel(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const transfer = await this.require(id);
    assertTransition(transfer.status as 'PENDING', 'CANCELLED', TRANSFER_TRANSITIONS, 'Lệnh điều chuyển');
    const updated = await this.prisma.stockTransferOrder.update({
      where: { id },
      data: { status: 'CANCELLED' },
      include: transferInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'STOCK_TRANSFER_CANCELLED',
      resource: 'StockTransferOrder',
      details: { transferId: id, code: transfer.code },
      ipAddress,
    });
    return this.present(updated);
  }

  private async require(id: string) {
    const transfer = await this.prisma.stockTransferOrder.findUnique({ where: { id } });
    if (!transfer) {
      throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
    }
    return transfer;
  }

  private async nextCode(tx: Prisma.TransactionClient): Promise<string> {
    const rows = await tx.stockTransferOrder.findMany({ select: { code: true } });
    return shortCode('DC', nextSerial(rows.map((row) => row.code), 'DC'));
  }

  private present<T extends { volunteers: Array<{ volunteer: unknown }>; items: Array<{ resourceItem: unknown }> }>(transfer: T) {
    return {
      ...transfer,
      volunteers: transfer.volunteers.map((link) => link.volunteer),
      items: transfer.items.map((line) => line.resourceItem),
    };
  }

  private async assertVolunteers(userIds: string[]): Promise<void> {
    const users = await this.prisma.user.findMany({ where: { id: { in: userIds } } });
    const valid = new Set(users.filter((user) => user.role === Role.VOLUNTEER && user.status === 'ACTIVE').map((user) => user.id));
    if (userIds.some((id) => !valid.has(id))) {
      throw new BadRequestException('Mọi người đi cùng lệnh điều chuyển phải là tình nguyện viên đang hoạt động');
    }
  }

  private async itemIds(transferId: string, tx: Prisma.TransactionClient | PrismaService = this.prisma): Promise<string[]> {
    const lines = await tx.stockTransferItem.findMany({
      where: { transferId },
      select: { resourceItemId: true },
    });
    if (lines.length > 0) {
      return lines.map((line) => line.resourceItemId);
    }
    return this.manifest(transferId, tx);
  }

  private async manifest(transferId: string, tx: Prisma.TransactionClient | PrismaService = this.prisma): Promise<string[]> {
    const log = await tx.auditLog.findFirst({
      where: {
        action: MANIFEST_ACTION,
        resource: 'StockTransferOrder',
        details: { path: ['transferId'], equals: transferId },
      },
      orderBy: { createdAt: 'desc' },
    });
    const details = log?.details;
    if (!isManifest(details)) {
      throw new BadRequestException('Không tìm thấy danh sách tài nguyên của lệnh điều chuyển');
    }
    return details.itemIds;
  }
}

function isManifest(value: Prisma.JsonValue | undefined): value is { transferId: string; itemIds: string[] } {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }
  const record = value as Record<string, Prisma.JsonValue>;
  return typeof record.transferId === 'string' && Array.isArray(record.itemIds) && record.itemIds.every((id) => typeof id === 'string');
}
