import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CampaignStatus, Prisma } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { CAMPAIGN_TRANSITIONS, assertTransition } from '../common/domain';
import { AuthenticatedUser } from '../common/types';
import { nextSerial, pageArgs, paginate, publicUserSelect, shortCode } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { CampaignTargetDto, CreateCampaignDto, QueryCampaignDto, UpdateCampaignDto, UpdateCampaignStatusDto } from './dto';

const campaignInclude = {
  targets: true,
  beneficiarySchool: {
    select: publicUserSelect,
  },
  _count: { select: { pledges: true } },
} satisfies Prisma.CampaignInclude;

@Injectable()
export class CampaignsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async create(actor: AuthenticatedUser, dto: CreateCampaignDto, ipAddress: string | null) {
    const startDate = new Date(dto.startDate);
    const endDate = new Date(dto.endDate);
    this.assertRange(startDate, endDate);
    if (new Set(dto.targets.map((target) => target.category)).size !== dto.targets.length) {
      throw new BadRequestException('Mỗi hạng mục chỉ được khai báo một lần trong chiến dịch.');
    }
    await this.assertBeneficiarySchool(dto.beneficiarySchoolId);
    const taken = await this.prisma.campaign.findMany({ select: { slug: true } });
    const slug = shortCode('CD', nextSerial(taken.map((row) => row.slug), 'CD'));
    const campaign = await this.prisma.campaign.create({
      data: {
        slug,
        title: dto.title.trim(),
        description: dto.description.trim(),
        bannerUrl: dto.bannerUrl,
        beneficiarySchoolId: dto.beneficiarySchoolId,
        startDate,
        endDate,
        status: dto.status ?? CampaignStatus.UPCOMING,
        targets: {
          create: dto.targets.map((target) => ({
            category: target.category,
            targetQuantity: target.targetQuantity,
          })),
        },
      },
      include: campaignInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'CAMPAIGN_CREATED',
      resource: 'Campaign',
      details: { campaignId: campaign.id, slug: campaign.slug },
      ipAddress,
    });
    return this.withProgress(campaign);
  }

  async list(query: QueryCampaignDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.CampaignWhereInput = {
      ...(query.status ? { status: query.status } : {}),
      ...(query.search
        ? {
            OR: [
              { title: { contains: query.search, mode: 'insensitive' } },
              { slug: { contains: query.search, mode: 'insensitive' } },
              { description: { contains: query.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };
    const [rows, total] = await this.prisma.$transaction([
      this.prisma.campaign.findMany({
        where,
        include: campaignInclude,
        orderBy: { startDate: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.campaign.count({ where }),
    ]);
    return paginate(rows.map((row) => this.withProgress(row)), total, page, limit);
  }

  async listActive() {
    const rows = await this.prisma.campaign.findMany({
      where: { status: 'ACTIVE' },
      include: campaignInclude,
      orderBy: { startDate: 'desc' },
    });
    return { data: rows.map((row) => this.withProgress(row)) };
  }

  async get(id: string) {
    const campaign = await this.prisma.campaign.findUnique({ where: { id }, include: campaignInclude });
    if (!campaign) {
      throw new NotFoundException('Không tìm thấy chiến dịch');
    }
    return this.withProgress(campaign);
  }

  async update(actor: AuthenticatedUser, id: string, dto: UpdateCampaignDto, ipAddress: string | null) {
    const current = await this.prisma.campaign.findUnique({ where: { id } });
    if (!current) {
      throw new NotFoundException('Không tìm thấy chiến dịch');
    }
    if (dto.beneficiarySchoolId && dto.beneficiarySchoolId !== current.beneficiarySchoolId) {
      await this.assertBeneficiarySchool(dto.beneficiarySchoolId);
      const transferCount = await this.prisma.stockTransferOrder.count({ where: { campaignId: id } });
      if (transferCount > 0) {
        throw new BadRequestException('Không thể đổi trường thụ hưởng sau khi chiến dịch đã có lệnh điều chuyển.');
      }
    }
    const startDate = dto.startDate ? new Date(dto.startDate) : current.startDate;
    const endDate = dto.endDate ? new Date(dto.endDate) : current.endDate;
    this.assertRange(startDate, endDate);
    const campaign = await this.prisma.campaign.update({
      where: { id },
      data: {
        title: dto.title?.trim(),
        description: dto.description?.trim(),
        bannerUrl: dto.bannerUrl,
        beneficiarySchoolId: dto.beneficiarySchoolId,
        startDate,
        endDate,
      },
      include: campaignInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'CAMPAIGN_UPDATED',
      resource: 'Campaign',
      details: {
        campaignId: id,
        title: campaign.title,
        changes: [
          { field: 'title', label: 'Tên chiến dịch', from: current.title, to: campaign.title },
          { field: 'description', label: 'Mô tả', from: current.description, to: campaign.description },
          { field: 'bannerUrl', label: 'Ảnh chiến dịch', from: current.bannerUrl, to: campaign.bannerUrl },
          { field: 'beneficiarySchoolId', label: 'Trường thụ hưởng', from: current.beneficiarySchoolId, to: campaign.beneficiarySchoolId },
          { field: 'startDate', label: 'Ngày bắt đầu', from: current.startDate.toISOString().slice(0, 10), to: campaign.startDate.toISOString().slice(0, 10) },
          { field: 'endDate', label: 'Ngày kết thúc', from: current.endDate.toISOString().slice(0, 10), to: campaign.endDate.toISOString().slice(0, 10) },
        ].filter((change) => change.from !== change.to),
      },
      ipAddress,
    });
    return this.withProgress(campaign);
  }

  async updateStatus(actor: AuthenticatedUser, id: string, dto: UpdateCampaignStatusDto, ipAddress: string | null) {
    const current = await this.prisma.campaign.findUnique({ where: { id } });
    if (!current) {
      throw new NotFoundException('Không tìm thấy chiến dịch');
    }
    assertTransition(current.status, dto.status, CAMPAIGN_TRANSITIONS, 'Chiến dịch');
    const campaign = await this.prisma.campaign.update({
      where: { id },
      data: { status: dto.status },
      include: campaignInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'CAMPAIGN_STATUS_CHANGED',
      resource: 'Campaign',
      details: { campaignId: id, from: current.status, to: dto.status },
      ipAddress,
    });
    return this.withProgress(campaign);
  }

  async addTarget(actor: AuthenticatedUser, id: string, dto: CampaignTargetDto, ipAddress: string | null) {
    const campaign = await this.prisma.campaign.findUnique({ where: { id } });
    if (!campaign) {
      throw new NotFoundException('Không tìm thấy chiến dịch');
    }
    const existing = await this.prisma.campaignTarget.findFirst({ where: { campaignId: id, category: dto.category } });
    if (existing) {
      throw new BadRequestException('Hạng mục này đã có trong chiến dịch.');
    }
    const target = await this.prisma.campaignTarget.create({
      data: {
        campaignId: id,
        category: dto.category,
        targetQuantity: dto.targetQuantity,
      },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'CAMPAIGN_TARGET_ADDED',
      resource: 'CampaignTarget',
      details: { campaignId: id, targetId: target.id, category: dto.category },
      ipAddress,
    });
    return target;
  }

  async deleteTarget(actor: AuthenticatedUser, campaignId: string, targetId: string, ipAddress: string | null) {
    const target = await this.prisma.$transaction(async (tx) => {
      const campaign = await tx.campaign.findUnique({ where: { id: campaignId }, select: { id: true } });
      if (!campaign) {
        throw new NotFoundException('Không tìm thấy chiến dịch');
      }

      const current = await tx.campaignTarget.findFirst({ where: { id: targetId, campaignId } });
      if (!current) {
        throw new NotFoundException('Không tìm thấy mục tiêu của chiến dịch');
      }

      const count = await tx.campaignTarget.count({ where: { campaignId } });
      if (count <= 1) {
        throw new BadRequestException('Chiến dịch phải có ít nhất một mục tiêu; không thể xóa mục tiêu mặc định cuối cùng.');
      }
      if (current.currentReceivedQuantity > 0 || current.currentDistributedQuantity > 0) {
        throw new BadRequestException('Không thể xóa mục tiêu đã phát sinh tiếp nhận hoặc phân phối.');
      }

      await tx.campaignTarget.delete({ where: { id: targetId } });
      return current;
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });

    await this.audit.log({
      userId: actor.id,
      action: 'CAMPAIGN_TARGET_DELETED',
      resource: 'CampaignTarget',
      details: { campaignId, targetId, category: target.category },
      ipAddress,
    });
    return { deleted: true, targetId };
  }

  async delete(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const campaign = await this.prisma.campaign.findUnique({
      where: { id },
      include: {
        _count: { select: { pledges: true } },
        targets: { select: { currentReceivedQuantity: true, currentDistributedQuantity: true } },
      },
    });
    if (!campaign) {
      throw new NotFoundException('Không tìm thấy chiến dịch');
    }
    if (campaign._count.pledges > 0) {
      throw new BadRequestException('Không thể xóa chiến dịch đã có phiếu trao tặng.');
    }
    if (campaign.targets.some((target) => target.currentReceivedQuantity > 0 || target.currentDistributedQuantity > 0)) {
      throw new BadRequestException('Không thể xóa chiến dịch đã phát sinh tiếp nhận hoặc phân phối.');
    }

    await this.prisma.campaign.delete({ where: { id } });
    await this.audit.log({
      userId: actor.id,
      action: 'CAMPAIGN_DELETED',
      resource: 'Campaign',
      details: { campaignId: id, slug: campaign.slug, title: campaign.title },
      ipAddress,
    });
    return { deleted: true, campaignId: id };
  }

  private assertRange(startDate: Date, endDate: Date): void {
    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime()) || endDate <= startDate) {
      throw new BadRequestException('Ngày kết thúc phải sau ngày bắt đầu');
    }
  }

  private async assertBeneficiarySchool(schoolId: string): Promise<void> {
    const school = await this.prisma.user.findUnique({ where: { id: schoolId }, select: { id: true, role: true, status: true } });
    if (!school || school.role !== 'SCHOOL_REP' || school.status !== 'ACTIVE') {
      throw new BadRequestException('Trường thụ hưởng không tồn tại hoặc chưa hoạt động.');
    }
  }

  private withProgress<T extends { targets: Array<{ targetQuantity: number; currentReceivedQuantity: number; currentDistributedQuantity: number }> }>(
    campaign: T,
  ) {
    const targets = campaign.targets.map((target) => {
      const receivedRate = target.targetQuantity === 0 ? 0 : target.currentReceivedQuantity / target.targetQuantity;
      const distributedRate = target.targetQuantity === 0 ? 0 : target.currentDistributedQuantity / target.targetQuantity;
      return {
        ...target,
        receivedRate: Math.round(receivedRate * 1000) / 10,
        distributedRate: Math.round(distributedRate * 1000) / 10,
      };
    });
    const targetQuantity = targets.reduce((sum, target) => sum + target.targetQuantity, 0);
    const received = targets.reduce((sum, target) => sum + target.currentReceivedQuantity, 0);
    const distributed = targets.reduce((sum, target) => sum + target.currentDistributedQuantity, 0);
    return {
      ...campaign,
      targets,
      summary: {
        targetQuantity,
        received,
        distributed,
        receivedRate: targetQuantity === 0 ? 0 : Math.round((received / targetQuantity) * 1000) / 10,
        distributedRate: targetQuantity === 0 ? 0 : Math.round((distributed / targetQuantity) * 1000) / 10,
      },
    };
  }
}
