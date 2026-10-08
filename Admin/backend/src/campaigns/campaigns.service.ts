import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CampaignStatus, Prisma } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { CAMPAIGN_TRANSITIONS, assertTransition } from '../common/domain';
import { AuthenticatedUser } from '../common/types';
import { nextSerial, pageArgs, paginate, shortCode } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { CampaignTargetDto, CreateCampaignDto, QueryCampaignDto, UpdateCampaignDto, UpdateCampaignStatusDto } from './dto';

const campaignInclude = {
  targets: true,
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
    const taken = await this.prisma.campaign.findMany({ select: { slug: true } });
    const slug = shortCode('CD', nextSerial(taken.map((row) => row.slug), 'CD'));
    const campaign = await this.prisma.campaign.create({
      data: {
        slug,
        title: dto.title.trim(),
        description: dto.description.trim(),
        bannerUrl: dto.bannerUrl,
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
    const startDate = dto.startDate ? new Date(dto.startDate) : current.startDate;
    const endDate = dto.endDate ? new Date(dto.endDate) : current.endDate;
    this.assertRange(startDate, endDate);
    const campaign = await this.prisma.campaign.update({
      where: { id },
      data: {
        title: dto.title?.trim(),
        description: dto.description?.trim(),
        bannerUrl: dto.bannerUrl,
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

  private assertRange(startDate: Date, endDate: Date): void {
    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime()) || endDate <= startDate) {
      throw new BadRequestException('Ngày kết thúc phải sau ngày bắt đầu');
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
