import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ItemCategory, Prisma, Role } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { REQUISITION_TRANSITIONS, assertTransition } from '../common/domain';
import { AuthenticatedUser } from '../common/types';
import { isUniqueConflict, pageArgs, paginate, publicUserSelect } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import { QueryAllocationDto } from './dto';

const planInclude = {
  requisition: {
    include: {
      school: { select: publicUserSelect },
      items: true,
    },
  },
  items: {
    include: {
      resourceItem: {
        select: {
          id: true,
          qrCode: true,
          name: true,
          category: true,
          grade: true,
          status: true,
          warehouseId: true,
          binLocation: true,
        },
      },
    },
  },
  waybill: { select: { id: true, code: true, status: true } },
} satisfies Prisma.AllocationPlanInclude;

@Injectable()
export class AllocationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly audit: AuditService,
  ) {}

  async match(actor: AuthenticatedUser, requisitionId: string, ipAddress: string | null) {
    const plan = await this.redis.withLock(`lock:allocation:${requisitionId}`, 30, () =>
      this.prisma.$transaction(async (tx) => this.matchInside(tx, actor.id, requisitionId), {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
        timeout: 20_000,
      }),
    );
    await this.audit.log({
      userId: actor.id,
      action: 'ALLOCATION_MATCHED',
      resource: 'AllocationPlan',
      details: { planId: plan.id, requisitionId, totalItems: plan.totalItems },
      ipAddress,
    });
    return plan;
  }

  async list(query: QueryAllocationDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const readyForWaybill: Prisma.AllocationPlanWhereInput | undefined = query.readyForWaybill
      ? {
          status: 'CONFIRMED',
          adminConfirmedAt: { not: null },
          waybill: { is: null },
        }
      : undefined;
    const where: Prisma.AllocationPlanWhereInput = {
      ...(query.status && !query.readyForWaybill ? { status: query.status } : {}),
      ...(query.requisitionId ? { requisitionId: query.requisitionId } : {}),
      ...readyForWaybill,
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.allocationPlan.findMany({
        where,
        include: planInclude,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.allocationPlan.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  async get(id: string) {
    const plan = await this.prisma.allocationPlan.findUnique({ where: { id }, include: planInclude });
    if (!plan) {
      throw new NotFoundException('Không tìm thấy phương án phân bổ');
    }
    return plan;
  }

  async confirm(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    if (actor.role !== Role.ADMIN) {
      throw new ForbiddenException('Chỉ quản trị viên được xác nhận phương án phân bổ');
    }
    const current = await this.get(id);
    if (current.status !== 'PROPOSED') {
      throw new BadRequestException('Chỉ xác nhận được phương án đang đề xuất');
    }
    if (current.totalItems === 0) {
      throw new BadRequestException('Phương án chưa có tài nguyên');
    }
    const plan = await this.prisma.allocationPlan.update({
      where: { id },
      data: {
        status: 'CONFIRMED',
        approvedById: actor.id,
        adminConfirmedAt: new Date(),
        adminConfirmedById: actor.id,
      },
      include: planInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'ALLOCATION_CONFIRMED',
      resource: 'AllocationPlan',
      details: { planId: id, totalItems: plan.totalItems },
      ipAddress,
    });
    return plan;
  }

  async cancel(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    if (actor.role !== Role.ADMIN) {
      throw new ForbiddenException('Chỉ quản trị viên được hủy phương án phân bổ');
    }
    const plan = await this.prisma.$transaction(async (tx) => {
      const current = await tx.allocationPlan.findUnique({
        where: { id },
        include: { waybill: true, items: true },
      });
      if (!current) {
        throw new NotFoundException('Không tìm thấy phương án phân bổ');
      }
      if (current.waybill && current.waybill.status !== 'PENDING_PICKUP' && current.waybill.status !== 'FAILED') {
        throw new BadRequestException('Vận đơn đã rời kho, không hủy phân bổ');
      }
      if (current.waybill?.status === 'PENDING_PICKUP') {
        await tx.waybill.delete({ where: { id: current.waybill.id } });
      }
      const itemIds = current.items.map((item) => item.resourceItemId);
      if (itemIds.length > 0) {
        await tx.resourceItem.updateMany({
          where: { id: { in: itemIds }, status: { in: ['ALLOCATED', 'IN_TRANSIT'] } },
          data: { status: 'READY_FOR_ALLOCATION' },
        });
        await tx.allocationItem.deleteMany({ where: { allocationPlanId: id } });
      }
      await tx.supportRequisition.update({
        where: { id: current.requisitionId },
        data: { status: 'APPROVED' },
      });
      return tx.allocationPlan.update({
        where: { id },
        data: { status: 'CANCELLED', totalItems: 0 },
        include: planInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'ALLOCATION_CANCELLED',
      resource: 'AllocationPlan',
      details: { planId: id },
      ipAddress,
    });
    return plan;
  }

  private async matchInside(tx: Prisma.TransactionClient, actorId: string, requisitionId: string) {
    const requisition = await tx.supportRequisition.findUnique({
      where: { id: requisitionId },
      include: { items: true, allocationPlans: { orderBy: { createdAt: 'desc' }, take: 1, include: { waybill: true } } },
    });
    if (!requisition) {
      throw new NotFoundException('Không tìm thấy yêu cầu hỗ trợ');
    }
    if (requisition.status !== 'APPROVED' && requisition.status !== 'ALLOCATING') {
      throw new BadRequestException('Yêu cầu phải được duyệt trước khi phân bổ');
    }
    const latest = requisition.allocationPlans[0] ?? null;
    // Dot giao truoc da xong (da ky nhan) nhung yeu cau chua du: bat dau dot moi, giu nguyen lich su dot cu.
    const previousRoundDone = latest?.waybill?.status === 'DELIVERED';
    const existing = previousRoundDone ? null : latest;
    if (existing?.waybill && existing.waybill.status !== 'FAILED') {
      throw new BadRequestException('Yêu cầu đã có vận đơn, không ghép thêm');
    }
    if (existing && existing.status === 'CONFIRMED') {
      throw new BadRequestException('Phương án đã chốt. Hủy phương án trước khi ghép lại');
    }
    if (existing && existing.status === 'DISPATCHED' && existing.waybill?.status !== 'FAILED') {
      throw new BadRequestException('Phương án đã xuất kho');
    }

    const plan = existing
      ? await tx.allocationPlan.update({
          where: { id: existing.id },
          data: { status: 'PROPOSED', approvedById: actorId },
        })
      : await tx.allocationPlan.create({
          data: { requisitionId, approvedById: actorId, status: 'PROPOSED', totalItems: 0 },
        });

    for (const line of requisition.items) {
      const planned = await tx.allocationItem.count({
        where: { allocationPlanId: plan.id, resourceItem: { category: line.category } },
      });
      const need = line.quantityNeeded - line.quantityFulfilled - planned;
      if (need <= 0) {
        continue;
      }
      const candidates = await tx.resourceItem.findMany({
        where: {
          category: line.category,
          status: 'READY_FOR_ALLOCATION',
          grade: { in: ['GRADE_A', 'GRADE_B', 'GRADE_C'] },
          warehouseId: { not: null },
          allocationItem: { is: null },
        },
        orderBy: [{ grade: 'asc' }, { receivedAt: 'asc' }],
        take: need,
      });
      for (const candidate of candidates) {
        if (!candidate.warehouseId) {
          continue;
        }
        try {
          await tx.allocationItem.create({
            data: {
              allocationPlanId: plan.id,
              resourceItemId: candidate.id,
              fromWarehouseId: candidate.warehouseId,
            },
          });
          await tx.resourceItem.update({
            where: { id: candidate.id },
            data: { status: 'ALLOCATED' },
          });
        } catch (error) {
          if (!isUniqueConflict(error)) {
            throw error;
          }
        }
      }
    }

    const totalItems = await tx.allocationItem.count({ where: { allocationPlanId: plan.id } });
    if (totalItems === 0) {
      throw new BadRequestException('Kho chưa có tài nguyên sẵn sàng đúng danh mục của yêu cầu');
    }
    if (requisition.status === 'APPROVED') {
      assertTransition(requisition.status, 'ALLOCATING', REQUISITION_TRANSITIONS, 'Yêu cầu hỗ trợ');
      await tx.supportRequisition.update({
        where: { id: requisitionId },
        data: { status: 'ALLOCATING' },
      });
    }
    return tx.allocationPlan.update({
      where: { id: plan.id },
      data: { totalItems, status: 'PROPOSED' },
      include: planInclude,
    });
  }
}

export type AllocationCategoryCount = Map<ItemCategory, number>;
