import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus, Prisma } from '@prisma/client';
import * as QRCode from 'qrcode';
import { AuditService } from '../../../../Admin/backend/src/audit/audit.service';
import { ITEM_TRANSITIONS, MOVABLE_ITEM_STATUSES, assertTransition } from '../../../../Admin/backend/src/common/domain';
import { AuthenticatedUser } from '../../../../Admin/backend/src/common/types';
import { definedJson, pageArgs, paginate } from '../../../../Admin/backend/src/common/utils';
import { PrismaService } from '../../../../Admin/backend/src/prisma/prisma.service';
import { WarehousesService } from '../warehouses/warehouses.service';
import { QueryItemDto, UpdateItemDto } from './dto';
import { itemInclude } from './item-include';

/** Hiện vật đang nằm trong kho (còn chiếm sức chứa): chưa xuất đi, chưa giao, chưa tái chế. */
export const IN_STOCK_STATUSES: ItemStatus[] = ['PENDING_INTAKE', 'INSPECTED', 'REFURBISHING', 'READY_FOR_ALLOCATION', 'ALLOCATED'];

@Injectable()
export class ItemsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly warehouses: WarehousesService,
  ) {}

  async list(query: QueryItemDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.ResourceItemWhereInput = {
      ...(query.status ? { status: query.status } : query.inStock ? { status: { in: IN_STOCK_STATUSES } } : {}),
      ...(query.reserve ? { pledgeItem: { pledge: { reserveStock: true } } } : {}),
      ...(query.category ? { category: query.category } : {}),
      ...(query.warehouseId ? { warehouseId: query.warehouseId } : {}),
      ...(query.qrCode ? { qrCode: { equals: query.qrCode, mode: 'insensitive' } } : {}),
      ...(query.search
        ? {
            OR: [
              { name: { contains: query.search, mode: 'insensitive' } },
              { qrCode: { contains: query.search, mode: 'insensitive' } },
              { binLocation: { contains: query.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.resourceItem.findMany({
        where,
        include: itemInclude,
        orderBy: { updatedAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.resourceItem.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  /** Số liệu tồn kho tính trực tiếp từ database ở mọi lần gọi (không lưu cache), dùng cho màn Danh sách tồn kho. */
  async summary() {
    const [byStatus, byCategory, reserveByCategory] = await Promise.all([
      this.prisma.resourceItem.groupBy({ by: ['status'], _count: { _all: true } }),
      this.prisma.resourceItem.groupBy({ by: ['category', 'status'], where: { status: { in: IN_STOCK_STATUSES } }, _count: { _all: true } }),
      this.prisma.resourceItem.groupBy({
        by: ['category', 'status'],
        where: { status: { in: IN_STOCK_STATUSES }, pledgeItem: { pledge: { reserveStock: true } } },
        _count: { _all: true },
      }),
    ]);
    const statusCount = (status: ItemStatus) => byStatus.find((row) => row.status === status)?._count._all ?? 0;
    const status = Object.fromEntries((Object.keys(ITEM_TRANSITIONS) as ItemStatus[]).map((key) => [key, statusCount(key)])) as Record<ItemStatus, number>;
    const total = byStatus.reduce((sum, row) => sum + row._count._all, 0);
    const inStock = IN_STOCK_STATUSES.reduce((sum, key) => sum + status[key], 0);
    const categories = new Map<string, { category: string; inStock: number; ready: number; reserve: number; reserveReady: number }>();
    const row = (category: string) => {
      const current = categories.get(category) ?? { category, inStock: 0, ready: 0, reserve: 0, reserveReady: 0 };
      categories.set(category, current);
      return current;
    };
    for (const group of byCategory) {
      row(group.category).inStock += group._count._all;
      if (group.status === 'READY_FOR_ALLOCATION') row(group.category).ready += group._count._all;
    }
    for (const group of reserveByCategory) {
      row(group.category).reserve += group._count._all;
      if (group.status === 'READY_FOR_ALLOCATION') row(group.category).reserveReady += group._count._all;
    }
    const all = [...categories.values()];
    return {
      total,
      inStock,
      status,
      reserve: { total: all.reduce((sum, item) => sum + item.reserve, 0), ready: all.reduce((sum, item) => sum + item.reserveReady, 0) },
      byCategory: all,
    };
  }

  async get(id: string) {
    const item = await this.prisma.resourceItem.findUnique({
      where: { id },
      include: { ...itemInclude, inspections: { orderBy: { inspectedAt: 'desc' } } },
    });
    if (!item) {
      throw new NotFoundException('Không tìm thấy tài nguyên');
    }
    return item;
  }

  async findByQr(qrCode: string) {
    const item = await this.prisma.resourceItem.findUnique({
      where: { qrCode },
      include: { ...itemInclude, inspections: { orderBy: { inspectedAt: 'desc' } } },
    });
    if (!item) {
      throw new NotFoundException('Không tìm thấy mã QR');
    }
    return item;
  }

  async qrPng(id: string): Promise<Buffer> {
    const item = await this.prisma.resourceItem.findUnique({ where: { id }, select: { qrCode: true, name: true } });
    if (!item) {
      throw new NotFoundException('Không tìm thấy tài nguyên');
    }
    return QRCode.toBuffer(item.qrCode, { type: 'png', width: 360, margin: 1, errorCorrectionLevel: 'M' });
  }

  async update(actor: AuthenticatedUser, id: string, dto: UpdateItemDto, ipAddress: string | null) {
    const item = await this.get(id);
    if (dto.warehouseId && dto.warehouseId !== item.warehouseId) {
      if (!MOVABLE_ITEM_STATUSES.includes(item.status)) {
        throw new BadRequestException('Tài nguyên đang trên lộ trình phân bổ, không đổi kho trực tiếp');
      }
      await this.prisma.$transaction(async (tx) => {
        await this.warehouses.assertCapacity(tx, dto.warehouseId as string, 1);
        await tx.resourceItem.update({
          where: { id },
          data: {
            warehouseId: dto.warehouseId,
            name: dto.name?.trim(),
            binLocation: dto.binLocation,
            specifications: definedJson(dto.specifications) ?? undefined,
          },
        });
      });
    } else {
      await this.prisma.resourceItem.update({
        where: { id },
        data: {
          name: dto.name?.trim(),
          binLocation: dto.binLocation,
          specifications: definedJson(dto.specifications) ?? undefined,
        },
      });
    }
    await this.audit.log({
      userId: actor.id,
      action: 'ITEM_UPDATED',
      resource: 'ResourceItem',
      details: { itemId: id, qrCode: item.qrCode },
      ipAddress,
    });
    return this.get(id);
  }

  async refurbish(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const item = await this.get(id);
    assertTransition(item.status, 'REFURBISHING', ITEM_TRANSITIONS, 'Tài nguyên');
    const updated = await this.prisma.resourceItem.update({
      where: { id },
      data: { status: 'REFURBISHING' },
      include: itemInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'ITEM_REFURBISH_STARTED',
      resource: 'ResourceItem',
      details: { itemId: id, qrCode: item.qrCode },
      ipAddress,
    });
    return updated;
  }

  async completeRefurbish(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const item = await this.get(id);
    if (!item.grade || item.grade === 'REJECTED') {
      throw new BadRequestException('Cần hạng chất lượng A/B/C trước khi hoàn tất sửa chữa');
    }
    assertTransition(item.status, 'READY_FOR_ALLOCATION', ITEM_TRANSITIONS, 'Tài nguyên');
    const updated = await this.prisma.resourceItem.update({
      where: { id },
      data: { status: 'READY_FOR_ALLOCATION' },
      include: itemInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'ITEM_REFURBISH_COMPLETED',
      resource: 'ResourceItem',
      details: { itemId: id, qrCode: item.qrCode, grade: item.grade },
      ipAddress,
    });
    return updated;
  }
}
