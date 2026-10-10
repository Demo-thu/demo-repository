import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { AuditService } from '../../../../Admin/backend/src/audit/audit.service';
import { REQUISITION_TRANSITIONS, assertTransition, computePriorityScore } from '../../../../Admin/backend/src/common/domain';
import { AuthenticatedUser } from '../../../../Admin/backend/src/common/types';
import { nextSerial, pageArgs, paginate, publicUserSelect, shortCode, withUniqueRetry } from '../../../../Admin/backend/src/common/utils';
import { PrismaService } from '../../../../Admin/backend/src/prisma/prisma.service';
import { CreateRequisitionDto, QueryRequisitionDto, RejectRequisitionDto, RequisitionLineDto, StudentInfoDto, UpdateRequisitionDto } from './dto';

const requisitionInclude = {
  school: { select: publicUserSelect },
  items: true,
  allocationPlans: { select: { id: true, status: true, totalItems: true, waybill: { select: { id: true, code: true, status: true } } }, orderBy: { createdAt: 'desc' as const }, take: 1 },
} satisfies Prisma.SupportRequisitionInclude;

@Injectable()
export class RequisitionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async create(actor: AuthenticatedUser, dto: CreateRequisitionDto, ipAddress: string | null) {
    const schoolId = await this.resolveSchool(actor, dto.schoolId);
    const needed = dto.items.reduce((sum, item) => sum + item.quantityNeeded, 0);
    const schoolConfirmationUrl = dto.schoolConfirmationUrl.trim();
    const committeeConfirmationUrl = dto.committeeConfirmationUrl.trim();
    const priorityScore = computePriorityScore({
      urgencyLevel: dto.urgencyLevel,
      hasVerificationDoc: true,
      quantityNeeded: needed,
      quantityFulfilled: 0,
      createdAt: new Date(),
    });
    const requisition = await withUniqueRetry(() =>
      this.prisma.$transaction(async (tx) => {
        const code = await this.nextCode(tx);
        return tx.supportRequisition.create({
          data: {
            code,
            schoolId,
            title: dto.title.trim(),
            urgencyLevel: dto.urgencyLevel,
            priorityScore,
            schoolConfirmationUrl,
            committeeConfirmationUrl,
            verificationDocUrl: schoolConfirmationUrl,
            description: dto.description?.trim() || null,
            studentInfo: this.studentInfoJson(dto.studentInfo),
            items: {
              create: dto.items.map((item) => this.lineData(item)),
            },
          },
          include: requisitionInclude,
        });
      }),
    );
    await this.audit.log({
      userId: actor.id,
      action: 'REQUISITION_CREATED',
      resource: 'SupportRequisition',
      details: { requisitionId: requisition.id, code: requisition.code, priorityScore },
      ipAddress,
    });
    return requisition;
  }

  async list(actor: AuthenticatedUser, query: QueryRequisitionDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where = this.whereFor(actor, query);
    const [data, total] = await this.prisma.$transaction([
      this.prisma.supportRequisition.findMany({
        where,
        include: requisitionInclude,
        orderBy: actor.role === Role.SCHOOL_REP ? [{ createdAt: 'asc' }] : [{ priorityScore: 'desc' }, { createdAt: 'asc' }],
        skip,
        take: limit,
      }),
      this.prisma.supportRequisition.count({ where }),
    ]);
    const queue = await this.pendingQueue();
    return paginate(data.map((row) => this.present(actor, row, queue)), total, page, limit);
  }

  async urgent() {
    const data = await this.prisma.supportRequisition.findMany({
      where: {
        status: { in: ['PENDING', 'APPROVED'] },
        urgencyLevel: { in: ['HIGH', 'CRITICAL'] },
      },
      include: requisitionInclude,
      orderBy: [{ priorityScore: 'desc' }, { createdAt: 'asc' }],
      take: 20,
    });
    return { data };
  }

  async get(actor: AuthenticatedUser, id: string) {
    const requisition = await this.prisma.supportRequisition.findUnique({
      where: { id },
      include: requisitionInclude,
    });
    if (!requisition) {
      throw new NotFoundException('Không tìm thấy yêu cầu hỗ trợ');
    }
    this.assertCanRead(actor, requisition.schoolId);
    const queue = await this.pendingQueue();
    return this.present(actor, requisition, queue);
  }

  /** Hành trình của đơn: duyệt, phương án, lệnh điều chuyển, vận đơn và ký nhận. Admin/kho xem được đơn đang đi đến đâu. */
  async journey(actor: AuthenticatedUser, id: string) {
    const requisition = await this.get(actor, id);
    const [plans, transfers] = await Promise.all([
      this.prisma.allocationPlan.findMany({
        where: { requisitionId: id },
        orderBy: { createdAt: 'asc' },
        select: {
          id: true,
          status: true,
          totalItems: true,
          adminConfirmedAt: true,
          createdAt: true,
          waybill: {
            select: {
              id: true,
              code: true,
              status: true,
              dispatchedAt: true,
              deliveredAt: true,
              createdAt: true,
              volunteers: { select: { volunteer: { select: { id: true, fullName: true, phone: true } } } },
              proof: { select: { recipientName: true, recipientTitle: true, signedAt: true } },
              _count: { select: { incidents: true } },
            },
          },
        },
      }),
      this.prisma.stockTransferOrder.findMany({
        where: { requisitionId: id },
        orderBy: { createdAt: 'asc' },
        select: {
          id: true,
          code: true,
          status: true,
          itemsCount: true,
          recipientName: true,
          recipientPhone: true,
          deliveryAddress: true,
          dispatchedAt: true,
          receivedAt: true,
          createdAt: true,
          volunteers: { select: { volunteer: { select: { id: true, fullName: true, phone: true } } } },
        },
      }),
    ]);
    const plan = plans[plans.length - 1] ?? null;
    const shape = (row: (typeof plans)[number]) =>
      row.waybill
        ? { ...row.waybill, volunteers: row.waybill.volunteers.map((link) => link.volunteer), incidentCount: row.waybill._count.incidents }
        : null;
    const waybill = plan ? shape(plan) : null;
    const rounds = plans.map((row) => ({
      id: row.id,
      status: row.status,
      totalItems: row.totalItems,
      createdAt: row.createdAt,
      waybill: shape(row),
    }));
    return {
      requisition: { id: requisition.id, code: requisition.code, title: requisition.title, status: requisition.status, createdAt: requisition.createdAt, updatedAt: requisition.updatedAt },
      plan: plan ? { id: plan.id, status: plan.status, totalItems: plan.totalItems, adminConfirmedAt: plan.adminConfirmedAt, createdAt: plan.createdAt } : null,
      waybill,
      rounds,
      transfers: transfers.map((row) => ({ ...row, volunteers: row.volunteers.map((link) => link.volunteer) })),
    };
  }

  async update(actor: AuthenticatedUser, id: string, dto: UpdateRequisitionDto, ipAddress: string | null) {
    const current = await this.get(actor, id);
    if (current.status !== 'PENDING') {
      throw new BadRequestException('Chỉ sửa được yêu cầu đang chờ duyệt');
    }
    const schoolConfirmationUrl = dto.schoolConfirmationUrl.trim();
    const committeeConfirmationUrl = dto.committeeConfirmationUrl.trim();
    if (!schoolConfirmationUrl || !committeeConfirmationUrl) {
      throw new BadRequestException('Khi sửa yêu cầu đang chờ duyệt phải cập nhật cả xác nhận của nhà trường và xác nhận của ủy ban');
    }
    const needed = dto.items
      ? dto.items.reduce((sum, item) => sum + item.quantityNeeded, 0)
      : current.items.reduce((sum, item) => sum + item.quantityNeeded, 0);
    const fulfilled = dto.items ? 0 : current.items.reduce((sum, item) => sum + item.quantityFulfilled, 0);
    const urgencyLevel = dto.urgencyLevel ?? current.urgencyLevel;
    const priorityScore = computePriorityScore({
      urgencyLevel,
      hasVerificationDoc: true,
      quantityNeeded: needed,
      quantityFulfilled: fulfilled,
      createdAt: current.createdAt,
    });
    const updated = await this.prisma.$transaction(async (tx) => {
      if (dto.items) {
        await tx.requisitionItem.deleteMany({ where: { requisitionId: id } });
      }
      return tx.supportRequisition.update({
        where: { id },
        data: {
          title: dto.title?.trim(),
          urgencyLevel,
          schoolConfirmationUrl,
          committeeConfirmationUrl,
          verificationDocUrl: schoolConfirmationUrl,
          priorityScore,
          ...(dto.description !== undefined ? { description: dto.description.trim() || null } : {}),
          ...(dto.studentInfo ? { studentInfo: this.studentInfoJson(dto.studentInfo) } : {}),
          ...(dto.items ? { items: { create: dto.items.map((item) => this.lineData(item)) } } : {}),
        },
        include: requisitionInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'REQUISITION_UPDATED',
      resource: 'SupportRequisition',
      details: { requisitionId: id, priorityScore },
      ipAddress,
    });
    const queue = await this.pendingQueue();
    return this.present(actor, updated, queue);
  }

  async rescore(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const current = await this.prisma.supportRequisition.findUnique({ where: { id }, include: { items: true } });
    if (!current) {
      throw new NotFoundException('Không tìm thấy yêu cầu hỗ trợ');
    }
    const score = this.scoreOf(current);
    const updated = await this.prisma.supportRequisition.update({
      where: { id },
      data: { priorityScore: score },
      include: requisitionInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'REQUISITION_RESCORED',
      resource: 'SupportRequisition',
      details: { requisitionId: id, priorityScore: score },
      ipAddress,
    });
    return updated;
  }

  async rescoreOpen(actor: AuthenticatedUser, ipAddress: string | null) {
    const open = await this.prisma.supportRequisition.findMany({
      where: { status: { in: ['PENDING', 'APPROVED', 'ALLOCATING'] } },
      include: { items: true },
    });
    for (const requisition of open) {
      await this.prisma.supportRequisition.update({
        where: { id: requisition.id },
        data: { priorityScore: this.scoreOf(requisition) },
      });
    }
    await this.audit.log({
      userId: actor.id,
      action: 'REQUISITION_RESCORED_BATCH',
      resource: 'SupportRequisition',
      details: { count: open.length },
      ipAddress,
    });
    return { updated: open.length };
  }

  async approve(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const current = await this.prisma.supportRequisition.findUnique({ where: { id }, include: { items: true } });
    if (!current) {
      throw new NotFoundException('Không tìm thấy yêu cầu hỗ trợ');
    }
    assertTransition(current.status, 'APPROVED', REQUISITION_TRANSITIONS, 'Yêu cầu hỗ trợ');
    const updated = await this.prisma.supportRequisition.update({
      where: { id },
      data: { status: 'APPROVED', priorityScore: this.scoreOf(current) },
      include: requisitionInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'REQUISITION_APPROVED',
      resource: 'SupportRequisition',
      details: { requisitionId: id, code: current.code, priorityScore: updated.priorityScore },
      ipAddress,
    });
    return updated;
  }

  async reject(actor: AuthenticatedUser, id: string, dto: RejectRequisitionDto, ipAddress: string | null) {
    const current = await this.prisma.supportRequisition.findUnique({ where: { id } });
    if (!current) {
      throw new NotFoundException('Không tìm thấy yêu cầu hỗ trợ');
    }
    assertTransition(current.status, 'REJECTED', REQUISITION_TRANSITIONS, 'Yêu cầu hỗ trợ');
    const updated = await this.prisma.supportRequisition.update({
      where: { id },
      data: { status: 'REJECTED' },
      include: requisitionInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'REQUISITION_REJECTED',
      resource: 'SupportRequisition',
      details: { requisitionId: id, code: current.code, reason: dto.reason },
      ipAddress,
    });
    return updated;
  }

  private lineData(item: RequisitionLineDto) {
    return {
      category: item.category,
      quantityNeeded: item.quantityNeeded,
      specification: item.specification?.trim() || null,
      unit: item.unit?.trim() || null,
      reason: item.reason?.trim() || null,
    };
  }

  private studentInfoJson(info?: StudentInfoDto): Prisma.InputJsonValue | undefined {
    if (!info) {
      return undefined;
    }
    return {
      totalStudents: info.totalStudents,
      studentsInNeed: info.studentsInNeed,
      priorityGroups: info.priorityGroups ?? [],
      grades: (info.grades ?? []).map((row) => ({ grade: row.grade, students: row.students })),
    };
  }

  private async pendingQueue(): Promise<Map<string, number>> {
    const pending = await this.prisma.supportRequisition.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'asc' },
      select: { id: true },
    });
    return new Map(pending.map((row, index) => [row.id, index + 1]));
  }

  private present<T extends { id: string; status: string; priorityScore: number; allocationPlans?: unknown[] }>(
    actor: AuthenticatedUser,
    source: T,
    queue: Map<string, number>,
  ) {
    const row = { ...source, allocationPlan: source.allocationPlans?.[0] ?? null };
    const queueOrder = row.status === 'PENDING' ? (queue.get(row.id) ?? null) : null;
    const reviewStatus = row.status === 'REJECTED' ? 'REJECTED' : row.status === 'PENDING' ? 'PENDING' : 'APPROVED';
    if (actor.role === Role.SCHOOL_REP) {
      const rest = { ...row };
      delete (rest as { priorityScore?: number }).priorityScore;
      return { ...rest, queueOrder, reviewStatus };
    }
    return { ...row, queueOrder, reviewStatus };
  }

  private scoreOf(requisition: {
    urgencyLevel: Prisma.SupportRequisitionGetPayload<{ include: { items: true } }>['urgencyLevel'];
    verificationDocUrl: string | null;
    schoolConfirmationUrl: string | null;
    committeeConfirmationUrl: string | null;
    createdAt: Date;
    items: Array<{ quantityNeeded: number; quantityFulfilled: number }>;
  }): number {
    const hasBothDocs = Boolean(requisition.schoolConfirmationUrl && requisition.committeeConfirmationUrl);
    return computePriorityScore({
      urgencyLevel: requisition.urgencyLevel,
      hasVerificationDoc: hasBothDocs || Boolean(requisition.verificationDocUrl),
      quantityNeeded: requisition.items.reduce((sum, item) => sum + item.quantityNeeded, 0),
      quantityFulfilled: requisition.items.reduce((sum, item) => sum + item.quantityFulfilled, 0),
      createdAt: requisition.createdAt,
    });
  }

  private whereFor(actor: AuthenticatedUser, query: QueryRequisitionDto): Prisma.SupportRequisitionWhereInput {
    return {
      ...(actor.role === Role.SCHOOL_REP ? { schoolId: actor.id } : {}),
      ...(query.status ? { status: query.status } : {}),
      ...(query.review
        ? { AND: [{ status: query.review === 'APPROVED' ? { notIn: ['PENDING', 'REJECTED'] as Array<'PENDING' | 'REJECTED'> } : query.review }] }
        : {}),
      ...(query.urgencyLevel ? { urgencyLevel: query.urgencyLevel } : {}),
      ...(query.search
        ? {
            OR: [
              { code: { contains: query.search, mode: 'insensitive' } },
              { title: { contains: query.search, mode: 'insensitive' } },
              { school: { fullName: { contains: query.search, mode: 'insensitive' } } },
            ],
          }
        : {}),
    };
  }

  private assertCanRead(actor: AuthenticatedUser, schoolId: string): void {
    if (actor.role === Role.SCHOOL_REP && actor.id !== schoolId) {
      throw new ForbiddenException('Không có quyền xem yêu cầu này');
    }
  }

  private async resolveSchool(actor: AuthenticatedUser, schoolId?: string): Promise<string> {
    if (!schoolId || schoolId === actor.id) {
      if (actor.role !== Role.SCHOOL_REP && actor.role !== Role.ADMIN && actor.role !== Role.WAREHOUSE_STAFF) {
        throw new ForbiddenException('Không có quyền lập yêu cầu hỗ trợ');
      }
      if (actor.role === Role.SCHOOL_REP || !schoolId) {
        if (actor.role !== Role.SCHOOL_REP && !schoolId) {
          throw new BadRequestException('Cần chọn trường học thụ hưởng');
        }
        return actor.role === Role.SCHOOL_REP ? actor.id : schoolId ?? actor.id;
      }
    }
    if (actor.role !== Role.ADMIN && actor.role !== Role.WAREHOUSE_STAFF) {
      throw new ForbiddenException('Chỉ điều phối viên được lập yêu cầu hộ trường');
    }
    const school = await this.prisma.user.findUnique({ where: { id: schoolId } });
    if (!school || school.role !== Role.SCHOOL_REP || school.status !== 'ACTIVE') {
      throw new BadRequestException('Trường học không hợp lệ');
    }
    return school.id;
  }

  private async nextCode(tx: Prisma.TransactionClient): Promise<string> {
    const rows = await tx.supportRequisition.findMany({ select: { code: true } });
    return shortCode('YC', nextSerial(rows.map((row) => row.code), 'YC'));
  }
}
