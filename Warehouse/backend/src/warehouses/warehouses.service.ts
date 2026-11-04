import { BadRequestException, Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { ItemStatus, Prisma } from '@prisma/client';
import { AuditService } from '../../../../Admin/backend/src/audit/audit.service';
import { AuthenticatedUser } from '../../../../Admin/backend/src/common/types';
import { pageArgs, paginate } from '../../../../Admin/backend/src/common/utils';
import { PrismaService } from '../../../../Admin/backend/src/prisma/prisma.service';
import { CreateWarehouseDto, QueryWarehouseDto, UpdateWarehouseDto } from './dto';

const OCCUPYING_STATUSES: ItemStatus[] = [
  'PENDING_INTAKE',
  'INSPECTED',
  'REFURBISHING',
  'READY_FOR_ALLOCATION',
  'ALLOCATED',
];

/** Hệ thống chỉ dùng một kho xuất duy nhất. Giữ mã WH-HAN để không làm hỏng dữ liệu cũ, chỉ đổi tên hiển thị. */
export const CENTRAL_WAREHOUSE_CODE = 'WH-HAN';
export const CENTRAL_WAREHOUSE_NAME = 'Tổng kho Miền Trung';

@Injectable()
export class WarehousesService implements OnModuleInit {
  private readonly logger = new Logger(WarehousesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async onModuleInit() {
    try {
      const existing = await this.prisma.warehouse.findUnique({ where: { code: CENTRAL_WAREHOUSE_CODE } });
      const central = existing
        ? existing.name === CENTRAL_WAREHOUSE_NAME
          ? existing
          : await this.prisma.warehouse.update({
              where: { id: existing.id },
              data: { name: CENTRAL_WAREHOUSE_NAME, address: 'Hải Châu, Đà Nẵng', city: 'Đà Nẵng' },
            })
        : await this.prisma.warehouse.create({
            data: { code: CENTRAL_WAREHOUSE_CODE, name: CENTRAL_WAREHOUSE_NAME, address: 'Hải Châu, Đà Nẵng', city: 'Đà Nẵng', capacity: 5000 },
          });
      const moved = await this.prisma.resourceItem.updateMany({
        where: { warehouseId: { not: null }, NOT: { warehouseId: central.id } },
        data: { warehouseId: central.id },
      });
      if (moved.count > 0) {
        this.logger.log(`Đã gom ${moved.count} hiện vật về ${CENTRAL_WAREHOUSE_NAME}.`);
      }
    } catch (error) {
      this.logger.warn(`Không đồng bộ được kho trung tâm: ${(error as Error).message}`);
    }
  }

  async create(actor: AuthenticatedUser, dto: CreateWarehouseDto, ipAddress: string | null) {
    const warehouse = await this.prisma.warehouse.create({
      data: {
        code: dto.code.trim().toUpperCase(),
        name: dto.name.trim(),
        address: dto.address.trim(),
        city: dto.city.trim(),
        managerId: dto.managerId,
        capacity: dto.capacity ?? 1000,
      },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'WAREHOUSE_CREATED',
      resource: 'Warehouse',
      details: { warehouseId: warehouse.id, code: warehouse.code },
      ipAddress,
    });
    return warehouse;
  }

  async list(query: QueryWarehouseDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.WarehouseWhereInput = {
      ...(query.city ? { city: { equals: query.city, mode: 'insensitive' } } : {}),
      ...(query.search
        ? {
            OR: [
              { name: { contains: query.search, mode: 'insensitive' } },
              { code: { contains: query.search, mode: 'insensitive' } },
              { city: { contains: query.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.warehouse.findMany({ where, orderBy: { code: 'asc' }, skip, take: limit }),
      this.prisma.warehouse.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  async get(id: string) {
    const warehouse = await this.prisma.warehouse.findUnique({ where: { id } });
    if (!warehouse) {
      throw new NotFoundException('Không tìm thấy kho');
    }
    return warehouse;
  }

  async update(actor: AuthenticatedUser, id: string, dto: UpdateWarehouseDto, ipAddress: string | null) {
    await this.get(id);
    const warehouse = await this.prisma.warehouse.update({
      where: { id },
      data: {
        name: dto.name?.trim(),
        address: dto.address?.trim(),
        city: dto.city?.trim(),
        managerId: dto.managerId,
        capacity: dto.capacity,
      },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'WAREHOUSE_UPDATED',
      resource: 'Warehouse',
      details: { warehouseId: id },
      ipAddress,
    });
    return warehouse;
  }

  async stock(id: string) {
    const warehouse = await this.get(id);
    const grouped = await this.prisma.resourceItem.groupBy({
      by: ['status', 'category'],
      where: { warehouseId: id },
      _count: { _all: true },
    });
    const occupied = await this.prisma.resourceItem.count({
      where: { warehouseId: id, status: { in: OCCUPYING_STATUSES } },
    });
    return {
      warehouse,
      occupied,
      availableCapacity: Math.max(0, warehouse.capacity - occupied),
      utilizationRate: warehouse.capacity === 0 ? 0 : Math.round((occupied / warehouse.capacity) * 1000) / 10,
      breakdown: grouped.map((row) => ({
        status: row.status,
        category: row.category,
        count: row._count._all,
      })),
    };
  }

  async assertCapacity(tx: Prisma.TransactionClient, warehouseId: string, incoming: number): Promise<void> {
    const warehouse = await tx.warehouse.findUnique({ where: { id: warehouseId } });
    if (!warehouse) {
      throw new NotFoundException('Không tìm thấy kho');
    }
    const occupied = await tx.resourceItem.count({
      where: { warehouseId, status: { in: OCCUPYING_STATUSES } },
    });
    if (occupied + incoming > warehouse.capacity) {
      throw new BadRequestException(`Kho ${warehouse.code} không đủ sức chứa (còn ${Math.max(0, warehouse.capacity - occupied)})`);
    }
  }
}
