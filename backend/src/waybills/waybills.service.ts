import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ItemCategory, Prisma, Role, WaybillStatus } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { REQUISITION_TRANSITIONS, WAYBILL_TRANSITIONS, assertTransition } from '../common/domain';
import { AuthenticatedUser } from '../common/types';
import { dailyCode, formatYmd, pageArgs, paginate, publicUserSelect, withUniqueRetry } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { AssignVolunteerDto, CreateProofDto, CreateWaybillDto, QueryWaybillDto } from './dto';

const waybillInclude = {
  assignedVolunteer: { select: publicUserSelect },
  proof: true,
  allocationPlan: {
    include: {
      items: {
        include: {
          resourceItem: {
            include: {
              pledgeItem: { include: { pledge: { select: { campaignId: true } } } },
            },
          },
        },
      },
      requisition: { include: { school: { select: publicUserSelect }, items: true } },
    },
  },
} satisfies Prisma.WaybillInclude;

@Injectable()
export class WaybillsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async create(actor: AuthenticatedUser, dto: CreateWaybillDto, ipAddress: string | null) {
    if (dto.assignedVolunteerId) {
      await this.assertVolunteer(dto.assignedVolunteerId);
    }
    const waybill = await withUniqueRetry(() =>
      this.prisma.$transaction(async (tx) => {
        const plan = await tx.allocationPlan.findUnique({
          where: { id: dto.allocationPlanId },
          include: { waybill: true },
        });
        if (!plan) {
          throw new NotFoundException('Không tìm thấy phương án phân bổ');
        }
        if (plan.status !== 'CONFIRMED') {
          throw new BadRequestException('Phương án phải được xác nhận trước khi lập vận đơn');
        }
        if (plan.waybill && plan.waybill.status !== 'FAILED') {
          throw new BadRequestException('Phương án đã có vận đơn');
        }
        if (plan.totalItems <= 0) {
          throw new BadRequestException('Phương án không có tài nguyên để giao');
        }
        if (plan.waybill?.status === 'FAILED') {
          const revived = await tx.waybill.update({
            where: { id: plan.waybill.id },
            data: {
              status: 'PENDING_PICKUP',
              assignedVolunteerId: dto.assignedVolunteerId ?? null,
              dispatchedAt: null,
              deliveredAt: null,
            },
          });
          await tx.allocationPlan.update({ where: { id: plan.id }, data: { status: 'DISPATCHED' } });
          return revived;
        }
        const code = await this.nextCode(tx);
        const created = await tx.waybill.create({
          data: {
            code,
            allocationPlanId: plan.id,
            assignedVolunteerId: dto.assignedVolunteerId,
            status: 'PENDING_PICKUP',
          },
        });
        await tx.allocationPlan.update({ where: { id: plan.id }, data: { status: 'DISPATCHED' } });
        return created;
      }),
    );
    await this.audit.log({
      userId: actor.id,
      action: 'WAYBILL_CREATED',
      resource: 'Waybill',
      details: { waybillId: waybill.id, code: waybill.code },
      ipAddress,
    });
    return this.get(actor, waybill.id);
  }

  async list(actor: AuthenticatedUser, query: QueryWaybillDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.WaybillWhereInput = {
      ...(query.status ? { status: query.status } : {}),
      ...(actor.role === Role.VOLUNTEER
        ? { OR: [{ assignedVolunteerId: actor.id }, { assignedVolunteerId: null, status: 'PENDING_PICKUP' }] }
        : {}),
      ...(actor.role === Role.SCHOOL_REP
        ? { allocationPlan: { requisition: { schoolId: actor.id } } }
        : {}),
      ...(query.search ? { code: { contains: query.search, mode: 'insensitive' } } : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.waybill.findMany({
        where,
        include: waybillInclude,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.waybill.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  async get(actor: AuthenticatedUser, id: string) {
    const waybill = await this.prisma.waybill.findUnique({ where: { id }, include: waybillInclude });
    if (!waybill) {
      throw new NotFoundException('Không tìm thấy vận đơn');
    }
    this.assertCanRead(actor, waybill);
    return waybill;
  }

  async getByCode(actor: AuthenticatedUser, code: string) {
    const waybill = await this.prisma.waybill.findUnique({ where: { code }, include: waybillInclude });
    if (!waybill) {
      throw new NotFoundException('Không tìm thấy vận đơn');
    }
    this.assertCanRead(actor, waybill);
    return waybill;
  }

  async assign(actor: AuthenticatedUser, id: string, dto: AssignVolunteerDto, ipAddress: string | null) {
    const current = await this.prisma.waybill.findUnique({ where: { id } });
    if (!current) {
      throw new NotFoundException('Không tìm thấy vận đơn');
    }
    if (current.status !== 'PENDING_PICKUP') {
      throw new BadRequestException('Chỉ gán tình nguyện viên khi vận đơn chưa lấy hàng');
    }
    await this.assertVolunteer(dto.assignedVolunteerId);
    const waybill = await this.prisma.waybill.update({
      where: { id },
      data: { assignedVolunteerId: dto.assignedVolunteerId },
      include: waybillInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'WAYBILL_ASSIGNED',
      resource: 'Waybill',
      details: { waybillId: id, volunteerId: dto.assignedVolunteerId },
      ipAddress,
    });
    return waybill;
  }

  async pickup(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const waybill = await this.prisma.$transaction(async (tx) => {
      const current = await tx.waybill.findUnique({
        where: { id },
        include: { allocationPlan: { include: { items: true } } },
      });
      if (!current) {
        throw new NotFoundException('Không tìm thấy vận đơn');
      }
      if (actor.role === Role.VOLUNTEER && current.assignedVolunteerId && current.assignedVolunteerId !== actor.id) {
        throw new ForbiddenException('Vận đơn đã gán cho tình nguyện viên khác');
      }
      assertTransition(current.status, 'IN_TRANSIT', WAYBILL_TRANSITIONS, 'Vận đơn');
      const itemIds = current.allocationPlan.items.map((item) => item.resourceItemId);
      await tx.resourceItem.updateMany({
        where: { id: { in: itemIds }, status: 'ALLOCATED' },
        data: { status: 'IN_TRANSIT' },
      });
      return tx.waybill.update({
        where: { id },
        data: {
          status: 'IN_TRANSIT',
          dispatchedAt: new Date(),
          assignedVolunteerId: current.assignedVolunteerId ?? (actor.role === Role.VOLUNTEER ? actor.id : current.assignedVolunteerId),
        },
        include: waybillInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'WAYBILL_PICKED_UP',
      resource: 'Waybill',
      details: { waybillId: id, code: waybill.code },
      ipAddress,
    });
    return waybill;
  }

  async prove(actor: AuthenticatedUser, id: string, dto: CreateProofDto, ipAddress: string | null) {
    const waybill = await this.prisma.$transaction(async (tx) => {
      const current = await tx.waybill.findUnique({
        where: { id },
        include: {
          proof: true,
          allocationPlan: {
            include: {
              items: {
                include: {
                  resourceItem: { include: { pledgeItem: { include: { pledge: true } } } },
                },
              },
              requisition: { include: { items: true } },
            },
          },
        },
      });
      if (!current) {
        throw new NotFoundException('Không tìm thấy vận đơn');
      }
      if (current.proof) {
        throw new BadRequestException('Vận đơn đã có biên bản bàn giao');
      }
      if (actor.role === Role.VOLUNTEER && current.assignedVolunteerId !== actor.id) {
        throw new ForbiddenException('Chỉ tình nguyện viên được gán mới bàn giao chuyến này');
      }
      assertTransition(current.status, 'DELIVERED', WAYBILL_TRANSITIONS, 'Vận đơn');
      await tx.deliveryProof.create({
        data: {
          waybillId: current.id,
          recipientName: dto.recipientName.trim(),
          recipientTitle: dto.recipientTitle.trim(),
          recipientSignatureUrl: dto.recipientSignatureUrl,
          proofPhotoUrls: dto.proofPhotoUrls,
          gpsLatitude: dto.gpsLatitude,
          gpsLongitude: dto.gpsLongitude,
        },
      });
      const itemIds = current.allocationPlan.items.map((item) => item.resourceItemId);
      await tx.resourceItem.updateMany({
        where: { id: { in: itemIds } },
        data: { status: 'DELIVERED' },
      });
      await this.applyFulfillment(tx, current.allocationPlan);
      return tx.waybill.update({
        where: { id },
        data: { status: 'DELIVERED', deliveredAt: new Date() },
        include: waybillInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'DELIVERY_PROVED',
      resource: 'DeliveryProof',
      details: { waybillId: id, code: waybill.code, recipientName: dto.recipientName },
      ipAddress,
    });
    return waybill;
  }

  async fail(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const waybill = await this.prisma.$transaction(async (tx) => {
      const current = await tx.waybill.findUnique({
        where: { id },
        include: { allocationPlan: { include: { items: true, requisition: true } } },
      });
      if (!current) {
        throw new NotFoundException('Không tìm thấy vận đơn');
      }
      assertTransition(current.status, 'FAILED', WAYBILL_TRANSITIONS, 'Vận đơn');
      const itemIds = current.allocationPlan.items.map((item) => item.resourceItemId);
      if (itemIds.length > 0) {
        await tx.resourceItem.updateMany({
          where: { id: { in: itemIds } },
          data: { status: 'READY_FOR_ALLOCATION' },
        });
        await tx.allocationItem.deleteMany({ where: { allocationPlanId: current.allocationPlanId } });
      }
      await tx.allocationPlan.update({
        where: { id: current.allocationPlanId },
        data: { status: 'CANCELLED', totalItems: 0 },
      });
      assertTransition(current.allocationPlan.requisition.status, 'APPROVED', REQUISITION_TRANSITIONS, 'Yêu cầu hỗ trợ');
      await tx.supportRequisition.update({
        where: { id: current.allocationPlan.requisitionId },
        data: { status: 'APPROVED' },
      });
      return tx.waybill.update({
        where: { id },
        data: { status: 'FAILED' },
        include: waybillInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'WAYBILL_FAILED',
      resource: 'Waybill',
      details: { waybillId: id, code: waybill.code },
      ipAddress,
    });
    return waybill;
  }

  private async applyFulfillment(
    tx: Prisma.TransactionClient,
    plan: {
      requisitionId: string;
      requisition: { items: Array<{ id: string; category: ItemCategory; quantityNeeded: number; quantityFulfilled: number }> };
      items: Array<{
        resourceItem: {
          category: ItemCategory;
          pledgeItem: { pledge: { campaignId: string | null } } | null;
        };
      }>;
    },
  ): Promise<void> {
    const counts = new Map<ItemCategory, number>();
    const campaignCounts = new Map<string, number>();
    for (const line of plan.items) {
      const category = line.resourceItem.category;
      counts.set(category, (counts.get(category) ?? 0) + 1);
      const campaignId = line.resourceItem.pledgeItem?.pledge.campaignId;
      if (campaignId) {
        const key = `${campaignId}:${category}`;
        campaignCounts.set(key, (campaignCounts.get(key) ?? 0) + 1);
      }
    }
    for (const [category, count] of counts) {
      let remaining = count;
      const lines = plan.requisition.items.filter((item) => item.category === category);
      for (const line of lines) {
        const room = line.quantityNeeded - line.quantityFulfilled;
        const add = Math.min(room, remaining);
        if (add > 0) {
          await tx.requisitionItem.update({
            where: { id: line.id },
            data: { quantityFulfilled: { increment: add } },
          });
          line.quantityFulfilled += add;
          remaining -= add;
        }
      }
    }
    for (const [key, count] of campaignCounts) {
      const splitAt = key.indexOf(':');
      const campaignId = key.slice(0, splitAt);
      const category = key.slice(splitAt + 1) as ItemCategory;
      await tx.campaignTarget.updateMany({
        where: { campaignId, category },
        data: { currentDistributedQuantity: { increment: count } },
      });
    }
    const fresh = await tx.requisitionItem.findMany({ where: { requisitionId: plan.requisitionId } });
    const completed = fresh.every((item) => item.quantityFulfilled >= item.quantityNeeded);
    if (completed) {
      await tx.supportRequisition.update({
        where: { id: plan.requisitionId },
        data: { status: 'COMPLETED' },
      });
    }
  }

  private assertCanRead(
    actor: AuthenticatedUser,
    waybill: { assignedVolunteerId: string | null; status: WaybillStatus; allocationPlan: { requisition: { schoolId: string } } },
  ): void {
    if (actor.role === Role.VOLUNTEER) {
      const visible = waybill.assignedVolunteerId === actor.id || (waybill.assignedVolunteerId === null && waybill.status === 'PENDING_PICKUP');
      if (!visible) {
        throw new ForbiddenException('Không có quyền xem vận đơn này');
      }
    }
    if (actor.role === Role.SCHOOL_REP && waybill.allocationPlan.requisition.schoolId !== actor.id) {
      throw new ForbiddenException('Không có quyền xem vận đơn này');
    }
  }

  private async assertVolunteer(userId: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || user.role !== Role.VOLUNTEER || user.status !== 'ACTIVE') {
      throw new BadRequestException('Tình nguyện viên không hợp lệ');
    }
  }

  private async nextCode(tx: Prisma.TransactionClient): Promise<string> {
    const head = `WB-${formatYmd(new Date())}-`;
    const count = await tx.waybill.count({ where: { code: { startsWith: head } } });
    return dailyCode('WB', count + 1);
  }
}
