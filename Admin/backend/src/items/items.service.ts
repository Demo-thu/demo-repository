import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as QRCode from 'qrcode';
import { AuditService } from '../audit/audit.service';
import { ITEM_TRANSITIONS, MOVABLE_ITEM_STATUSES, assertTransition } from '../common/domain';
import { AuthenticatedUser } from '../common/types';
import { definedJson, pageArgs, paginate } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { WarehousesService } from '../warehouses/warehouses.service';
import { QueryItemDto, UpdateItemDto } from './dto';
import { itemInclude } from './item-include';

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
      ...(query.status ? { status: query.status } : {}),
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
