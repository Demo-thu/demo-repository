import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ItemCategory, Prisma, Role, WaybillStatus } from '@prisma/client';
import { AuditService } from '../../../../Admin/backend/src/audit/audit.service';
import { REQUISITION_TRANSITIONS, WAYBILL_TRANSITIONS, assertTransition } from '../../../../Admin/backend/src/common/domain';
import { AuthenticatedUser } from '../../../../Admin/backend/src/common/types';
import { nextSerial, pageArgs, paginate, publicUserSelect, shortCode, withUniqueRetry } from '../../../../Admin/backend/src/common/utils';
import { PrismaService } from '../../../../Admin/backend/src/prisma/prisma.service';
import {
  AssignVolunteerDto,
  CreateIncidentDto,
  CreateProofDto,
  CreateWaybillDto,
  QueryIncidentDto,
  QueryWaybillDto,
  VolunteerReportDto,
} from './dto';

const waybillInclude = {
  volunteers: {
    include: { volunteer: { select: publicUserSelect } },
    orderBy: { createdAt: 'asc' as const },
  },
  incidents: {
    orderBy: { createdAt: 'desc' as const },
    include: { reporter: { select: publicUserSelect } },
  },
  proof: true,
  allocationPlan: {
    include: {
      items: {
        include: {
          resourceItem: {
            include: {
              warehouse: { select: { code: true, name: true, city: true } },
              pledgeItem: {
                include: {
                  pledge: {
                    select: {
                      code: true,
                      campaignId: true,
                      donor: { select: { fullName: true, profile: { select: { organizationName: true } } } },
                    },
                  },
                },
              },
            },
          },
        },
      },
      requisition: { include: { school: { select: publicUserSelect }, items: true } },
    },
  },
} satisfies Prisma.WaybillInclude;

type WaybillRecord = Prisma.WaybillGetPayload<{ include: typeof waybillInclude }>;

@Injectable()
export class WaybillsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async create(actor: AuthenticatedUser, dto: CreateWaybillDto, ipAddress: string | null) {
    const volunteerIds = this.collectVolunteerIds(dto);
    await this.assertVolunteers(volunteerIds);
    const waybill = await withUniqueRetry(() =>
      this.prisma.$transaction(async (tx) => {
        const plan = await tx.allocationPlan.findUnique({
          where: { id: dto.allocationPlanId },
          include: { waybill: true },
        });
        if (!plan) {
          throw new NotFoundException('Không tìm thấy phương án phân bổ');
        }
        if (!plan.adminConfirmedAt) {
          throw new BadRequestException('Phương án phải được quản trị viên xác nhận trước khi lập vận đơn');
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
              dispatchedAt: null,
              deliveredAt: null,
            },
          });
          await tx.waybillVolunteer.deleteMany({ where: { waybillId: revived.id } });
          if (volunteerIds.length > 0) {
            await tx.waybillVolunteer.createMany({
              data: volunteerIds.map((volunteerId) => ({ waybillId: revived.id, volunteerId })),
            });
          }
          await tx.allocationPlan.update({ where: { id: plan.id }, data: { status: 'DISPATCHED' } });
          return revived;
        }
        const code = await this.nextCode(tx);
        const created = await tx.waybill.create({
          data: {
            code,
            allocationPlanId: plan.id,
            status: 'PENDING_PICKUP',
            volunteers: volunteerIds.length
              ? { create: volunteerIds.map((volunteerId) => ({ volunteerId })) }
              : undefined,
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
      details: { waybillId: waybill.id, code: waybill.code, volunteerIds },
      ipAddress,
    });
    return this.get(actor, waybill.id);
  }

  async list(actor: AuthenticatedUser, query: QueryWaybillDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.WaybillWhereInput = {
      ...(query.status ? { status: query.status } : {}),
      ...(actor.role === Role.VOLUNTEER
        ? {
            OR: [
              { volunteers: { some: { volunteerId: actor.id } } },
              { volunteers: { none: {} }, status: 'PENDING_PICKUP' },
            ],
          }
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
    return paginate(data.map((row) => this.present(row)), total, page, limit);
  }

  async get(actor: AuthenticatedUser, id: string) {
    const waybill = await this.prisma.waybill.findUnique({ where: { id }, include: waybillInclude });
    if (!waybill) {
      throw new NotFoundException('Không tìm thấy vận đơn');
    }
    this.assertCanRead(actor, waybill);
    return this.present(waybill);
  }

  async getByCode(actor: AuthenticatedUser, code: string) {
    const waybill = await this.prisma.waybill.findUnique({ where: { code }, include: waybillInclude });
    if (!waybill) {
      throw new NotFoundException('Không tìm thấy vận đơn');
    }
    this.assertCanRead(actor, waybill);
    return this.present(waybill);
  }

  async assign(actor: AuthenticatedUser, id: string, dto: AssignVolunteerDto, ipAddress: string | null) {
    const volunteerIds = this.collectVolunteerIds(dto);
    if (volunteerIds.length < 1) {
      throw new BadRequestException('Cần gán ít nhất một tình nguyện viên');
    }
    await this.assertVolunteers(volunteerIds);
    const current = await this.prisma.waybill.findUnique({ where: { id } });
    if (!current) {
      throw new NotFoundException('Không tìm thấy vận đơn');
    }
    if (current.status !== 'PENDING_PICKUP') {
      throw new BadRequestException('Chỉ gán tình nguyện viên khi vận đơn chưa lấy hàng');
    }
    await this.prisma.$transaction([
      this.prisma.waybillVolunteer.deleteMany({ where: { waybillId: id } }),
      this.prisma.waybillVolunteer.createMany({
        data: volunteerIds.map((volunteerId) => ({ waybillId: id, volunteerId })),
      }),
    ]);
    await this.audit.log({
      userId: actor.id,
      action: 'WAYBILL_ASSIGNED',
      resource: 'Waybill',
      details: { waybillId: id, volunteerIds },
      ipAddress,
    });
    return this.get(actor, id);
  }

  async pickup(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const waybillId = await this.prisma.$transaction(async (tx) => {
      const current = await tx.waybill.findUnique({
        where: { id },
        include: { volunteers: true, allocationPlan: { include: { items: true } } },
      });
      if (!current) {
        throw new NotFoundException('Không tìm thấy vận đơn');
      }
      const assignedIds = current.volunteers.map((link) => link.volunteerId);
      if (actor.role === Role.VOLUNTEER && assignedIds.length > 0 && !assignedIds.includes(actor.id)) {
        throw new ForbiddenException('Vận đơn đã gán cho tình nguyện viên khác');
      }
      assertTransition(current.status, 'IN_TRANSIT', WAYBILL_TRANSITIONS, 'Vận đơn');
      if (actor.role === Role.VOLUNTEER && assignedIds.length === 0) {
        await tx.waybillVolunteer.create({ data: { waybillId: id, volunteerId: actor.id } });
      }
      const itemIds = current.allocationPlan.items.map((item) => item.resourceItemId);
      await tx.resourceItem.updateMany({
        where: { id: { in: itemIds }, status: 'ALLOCATED' },
        data: { status: 'IN_TRANSIT' },
      });
      await tx.waybill.update({
        where: { id },
        data: { status: 'IN_TRANSIT', dispatchedAt: new Date() },
      });
      return id;
    });
    await this.audit.log({
      userId: actor.id,
      action: 'WAYBILL_PICKED_UP',
      resource: 'Waybill',
      details: { waybillId },
      ipAddress,
    });
    return this.get(actor, waybillId);
  }

  async prove(actor: AuthenticatedUser, id: string, dto: CreateProofDto, ipAddress: string | null) {
    if (actor.role === Role.VOLUNTEER) {
      throw new ForbiddenException('Tình nguyện viên không ký biên bản nhà trường. Hãy nộp báo cáo sau khi nhà trường đã ký.');
    }
    await this.prisma.$transaction(async (tx) => {
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
      if (actor.role === Role.SCHOOL_REP && current.allocationPlan.requisition.schoolId !== actor.id) {
        throw new ForbiddenException('Chỉ trường nhận hàng mới ký biên bản bàn giao');
      }
      if (current.proof) {
        throw new BadRequestException('Vận đơn đã có biên bản bàn giao');
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
      await tx.waybill.update({
        where: { id },
        data: { status: 'DELIVERED', deliveredAt: new Date() },
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'DELIVERY_PROVED',
      resource: 'DeliveryProof',
      details: { waybillId: id, recipientName: dto.recipientName },
      ipAddress,
    });
    return this.get(actor, id);
  }

  async submitVolunteerReport(actor: AuthenticatedUser, id: string, dto: VolunteerReportDto, ipAddress: string | null) {
    const current = await this.prisma.waybill.findUnique({
      where: { id },
      include: { proof: true, volunteers: true, allocationPlan: { include: { requisition: true } } },
    });
    if (!current) {
      throw new NotFoundException('Không tìm thấy vận đơn');
    }
    if (!current.volunteers.some((link) => link.volunteerId === actor.id)) {
      throw new ForbiddenException('Chỉ tình nguyện viên được gán chuyến này mới nộp báo cáo');
    }
    if (!current.proof?.signedAt) {
      throw new BadRequestException('Nhà trường chưa ký biên bản bàn giao, chưa thể nộp báo cáo tình nguyện viên');
    }
    if (current.proof.volunteerReportedAt) {
      throw new BadRequestException('Báo cáo tình nguyện viên đã được nộp một lần và không sửa chữ ký của nhà trường');
    }
    await this.prisma.deliveryProof.update({
      where: { waybillId: id },
      data: {
        volunteerReportNote: dto.volunteerReportNote.trim(),
        volunteerPhotoUrls: dto.volunteerPhotoUrls,
        volunteerReportedAt: new Date(),
        volunteerReporterId: actor.id,
      },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'VOLUNTEER_DELIVERY_REPORTED',
      resource: 'DeliveryProof',
      details: { waybillId: id },
      ipAddress,
    });
    return this.get(actor, id);
  }

  async createIncident(actor: AuthenticatedUser, id: string, dto: CreateIncidentDto, ipAddress: string | null) {
    if (actor.role !== Role.VOLUNTEER) {
      throw new ForbiddenException('Chỉ tình nguyện viên được gán mới được báo sự cố. Kho và admin chỉ xem hồ sơ.');
    }
    await this.prisma.$transaction(async (tx) => {
      const current = await tx.waybill.findUnique({ where: { id }, include: { volunteers: true } });
      if (!current) {
        throw new NotFoundException('Không tìm thấy vận đơn');
      }
      if (actor.role === Role.VOLUNTEER && !current.volunteers.some((link) => link.volunteerId === actor.id)) {
        throw new ForbiddenException('Chỉ tình nguyện viên được gán mới được báo sự cố chuyến này');
      }
      await tx.incidentReport.create({
        data: {
          waybillId: id,
          reporterId: actor.id,
          reason: dto.reason.trim(),
          incidentType: dto.incidentType?.trim() || null,
          qrCode: dto.qrCode?.trim() || null,
          photoUrls: dto.photoUrls ?? [],
        },
      });
      await this.markFailed(tx, id);
    });
    await this.audit.log({
      userId: actor.id,
      action: 'INCIDENT_REPORTED',
      resource: 'IncidentReport',
      details: { waybillId: id, reporterId: actor.id, incidentType: dto.incidentType ?? null },
      ipAddress,
    });
    return this.get(actor, id);
  }

  /** Thủ kho báo sự cố tại kho với tư cách chính mình. Không gắn vận đơn của tình nguyện viên và không báo thay người khác. */
  async createWarehouseIncident(actor: AuthenticatedUser, dto: CreateIncidentDto, ipAddress: string | null) {
    if (actor.role !== Role.WAREHOUSE_STAFF) {
      throw new ForbiddenException('Chỉ thủ kho được báo sự cố tại kho');
    }
    const created = await this.prisma.incidentReport.create({
      data: {
        reporterId: actor.id,
        reason: dto.reason.trim(),
        incidentType: dto.incidentType?.trim() || null,
        qrCode: dto.qrCode?.trim() || null,
        photoUrls: dto.photoUrls ?? [],
      },
      include: { reporter: { select: publicUserSelect } },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'INCIDENT_REPORTED',
      resource: 'IncidentReport',
      details: { incidentId: created.id, reporterId: actor.id, incidentType: dto.incidentType ?? null },
      ipAddress,
    });
    return created;
  }

  async listIncidents(actor: AuthenticatedUser, query: QueryIncidentDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.IncidentReportWhereInput = {
      ...(query.waybillId ? { waybillId: query.waybillId } : {}),
      ...(actor.role === Role.VOLUNTEER
        ? { waybill: { volunteers: { some: { volunteerId: actor.id } } } }
        : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.incidentReport.findMany({
        where,
        include: {
          reporter: { select: publicUserSelect },
          waybill: { select: { id: true, code: true, status: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.incidentReport.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  async listWaybillIncidents(actor: AuthenticatedUser, id: string) {
    const waybill = await this.get(actor, id);
    return { data: waybill.incidents };
  }

  async fail(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    await this.prisma.$transaction(async (tx) => {
      await this.markFailed(tx, id);
    });
    await this.audit.log({
      userId: actor.id,
      action: 'WAYBILL_FAILED',
      resource: 'Waybill',
      details: { waybillId: id },
      ipAddress,
    });
    return this.get(actor, id);
  }

  private async markFailed(tx: Prisma.TransactionClient, id: string): Promise<void> {
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
    await tx.waybill.update({
      where: { id },
      data: { status: 'FAILED' },
    });
  }

  private present(waybill: WaybillRecord) {
    const volunteers = waybill.volunteers.map((link) => link.volunteer);
    return {
      ...waybill,
      volunteers,
      assignedVolunteer: volunteers[0] ?? null,
      assignedVolunteerId: volunteers[0]?.id ?? null,
    };
  }

  private collectVolunteerIds(dto: { volunteerIds?: string[]; assignedVolunteerId?: string }): string[] {
    return [...new Set([...(dto.volunteerIds ?? []), ...(dto.assignedVolunteerId ? [dto.assignedVolunteerId] : [])])];
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
    waybill: { volunteers: Array<{ volunteerId: string }>; status: WaybillStatus; allocationPlan: { requisition: { schoolId: string } } },
  ): void {
    if (actor.role === Role.VOLUNTEER) {
      const assignedIds = waybill.volunteers.map((link) => link.volunteerId);
      const visible = assignedIds.includes(actor.id) || (assignedIds.length === 0 && waybill.status === 'PENDING_PICKUP');
      if (!visible) {
        throw new ForbiddenException('Không có quyền xem vận đơn này');
      }
    }
    if (actor.role === Role.SCHOOL_REP && waybill.allocationPlan.requisition.schoolId !== actor.id) {
      throw new ForbiddenException('Không có quyền xem vận đơn này');
    }
  }

  private async assertVolunteers(userIds: string[]): Promise<void> {
    if (userIds.length === 0) {
      return;
    }
    const users = await this.prisma.user.findMany({ where: { id: { in: userIds } } });
    const valid = new Set(users.filter((user) => user.role === Role.VOLUNTEER && user.status === 'ACTIVE').map((user) => user.id));
    if (userIds.some((id) => !valid.has(id))) {
      throw new BadRequestException('Mọi người được gán phải là tình nguyện viên đang hoạt động');
    }
  }

  private async nextCode(tx: Prisma.TransactionClient): Promise<string> {
    const rows = await tx.waybill.findMany({ select: { code: true } });
    return shortCode('WB', nextSerial(rows.map((row) => row.code), 'WB'));
  }
}
