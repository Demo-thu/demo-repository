import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { MOVABLE_ITEM_STATUSES, TRANSFER_TRANSITIONS, assertTransition } from '../common/domain';
import { AuthenticatedUser } from '../common/types';
import { dailyCode, formatYmd, pageArgs, paginate, withUniqueRetry } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { WarehousesService } from '../warehouses/warehouses.service';
import { CreateTransferDto, QueryTransferDto } from './dto';

const MANIFEST_ACTION = 'STOCK_TRANSFER_MANIFEST';

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
          },
          include: { sourceWarehouse: true, targetWarehouse: true },
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
    return { ...transfer, itemIds: uniqueIds };
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
        include: { sourceWarehouse: true, targetWarehouse: true },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.stockTransferOrder.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  async get(id: string) {
    const transfer = await this.prisma.stockTransferOrder.findUnique({
      where: { id },
      include: { sourceWarehouse: true, targetWarehouse: true },
    });
    if (!transfer) {
      throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
    }
    const itemIds = await this.manifest(id);
    const items = await this.prisma.resourceItem.findMany({
      where: { id: { in: itemIds } },
      select: { id: true, qrCode: true, name: true, category: true, status: true, warehouseId: true },
    });
    return { ...transfer, items };
  }

  async dispatch(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const transfer = await this.require(id);
    assertTransition(transfer.status as 'PENDING', 'IN_TRANSIT', TRANSFER_TRANSITIONS, 'Lệnh điều chuyển');
    const updated = await this.prisma.stockTransferOrder.update({
      where: { id },
      data: { status: 'IN_TRANSIT', dispatchedAt: new Date() },
      include: { sourceWarehouse: true, targetWarehouse: true },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'STOCK_TRANSFER_DISPATCHED',
      resource: 'StockTransferOrder',
      details: { transferId: id, code: transfer.code },
      ipAddress,
    });
    return updated;
  }

  async receive(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const updated = await this.prisma.$transaction(async (tx) => {
      const transfer = await tx.stockTransferOrder.findUnique({ where: { id } });
      if (!transfer) {
        throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
      }
      assertTransition(transfer.status as 'IN_TRANSIT', 'RECEIVED', TRANSFER_TRANSITIONS, 'Lệnh điều chuyển');
      const itemIds = await this.manifest(id, tx);
      await this.warehouses.assertCapacity(tx, transfer.targetWarehouseId, itemIds.length);
      const moved = await tx.resourceItem.updateMany({
        where: { id: { in: itemIds }, warehouseId: transfer.sourceWarehouseId },
        data: { warehouseId: transfer.targetWarehouseId, binLocation: null },
      });
      if (moved.count !== itemIds.length) {
        throw new BadRequestException('Một số tài nguyên không còn ở kho nguồn nên không thể nhận điều chuyển');
      }
      return tx.stockTransferOrder.update({
        where: { id },
        data: { status: 'RECEIVED', receivedAt: new Date() },
        include: { sourceWarehouse: true, targetWarehouse: true },
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'STOCK_TRANSFER_RECEIVED',
      resource: 'StockTransferOrder',
      details: { transferId: id, code: updated.code },
      ipAddress,
    });
    return updated;
  }

  async cancel(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const transfer = await this.require(id);
    assertTransition(transfer.status as 'PENDING', 'CANCELLED', TRANSFER_TRANSITIONS, 'Lệnh điều chuyển');
    const updated = await this.prisma.stockTransferOrder.update({
      where: { id },
      data: { status: 'CANCELLED' },
      include: { sourceWarehouse: true, targetWarehouse: true },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'STOCK_TRANSFER_CANCELLED',
      resource: 'StockTransferOrder',
      details: { transferId: id, code: transfer.code },
      ipAddress,
    });
    return updated;
  }

  private async require(id: string) {
    const transfer = await this.prisma.stockTransferOrder.findUnique({ where: { id } });
    if (!transfer) {
      throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
    }
    return transfer;
  }

  private async nextCode(tx: Prisma.TransactionClient): Promise<string> {
    const head = `TR-${formatYmd(new Date())}-`;
    const count = await tx.stockTransferOrder.count({ where: { code: { startsWith: head } } });
    return dailyCode('TR', count + 1);
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
