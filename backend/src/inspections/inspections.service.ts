import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { ITEM_TRANSITIONS, assertTransition, resolveInspectionOutcome } from '../common/domain';
import { AuthenticatedUser } from '../common/types';
import { pageArgs, paginate, publicUserSelect } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInspectionDto, QueryInspectionDto } from './dto';

const INSPECTABLE = ['PENDING_INTAKE', 'INSPECTED', 'REFURBISHING'] as const;

@Injectable()
export class InspectionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async create(actor: AuthenticatedUser, dto: CreateInspectionDto, ipAddress: string | null) {
    const created = await this.prisma.$transaction(async (tx) => {
      const item = await tx.resourceItem.findUnique({ where: { id: dto.resourceItemId } });
      if (!item) {
        throw new NotFoundException('Không tìm thấy tài nguyên');
      }
      if (!INSPECTABLE.includes(item.status as (typeof INSPECTABLE)[number])) {
        throw new BadRequestException('Tài nguyên không còn ở giai đoạn kiểm định');
      }
      const outcome = resolveInspectionOutcome({
        grade: dto.grade,
        isFunctional: dto.isFunctional,
        recommendedAction: dto.recommendedAction,
      });
      assertTransition(item.status, outcome.status, ITEM_TRANSITIONS, 'Tài nguyên');
      const report = await tx.inspectionReport.create({
        data: {
          resourceItemId: item.id,
          inspectorId: actor.id,
          isFunctional: dto.isFunctional,
          physicalDefects: dto.physicalDefects,
          recommendedAction: outcome.recommendedAction,
          notes: dto.notes,
        },
        include: { inspector: { select: publicUserSelect } },
      });
      const resourceItem = await tx.resourceItem.update({
        where: { id: item.id },
        data: { grade: outcome.grade, status: outcome.status },
      });
      return { ...report, resourceItem };
    });
    await this.audit.log({
      userId: actor.id,
      action: 'INSPECTION_RECORDED',
      resource: 'InspectionReport',
      details: {
        reportId: created.id,
        resourceItemId: dto.resourceItemId,
        grade: created.resourceItem.grade,
        status: created.resourceItem.status,
        recommendedAction: created.recommendedAction,
      },
      ipAddress,
    });
    return created;
  }

  async list(query: QueryInspectionDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.InspectionReportWhereInput = {
      ...(query.resourceItemId ? { resourceItemId: query.resourceItemId } : {}),
      ...(query.inspectorId ? { inspectorId: query.inspectorId } : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.inspectionReport.findMany({
        where,
        include: {
          inspector: { select: publicUserSelect },
          resourceItem: { select: { id: true, qrCode: true, name: true, category: true, grade: true, status: true } },
        },
        orderBy: { inspectedAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.inspectionReport.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }
}
