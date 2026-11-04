import { BadRequestException, ForbiddenException, Injectable, NotFoundException, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PledgeStatus, Prisma, Role } from '@prisma/client';
import { AuditService } from '../../../../Admin/backend/src/audit/audit.service';
import { PLEDGE_TRANSITIONS, assertTransition } from '../../../../Admin/backend/src/common/domain';
import { AuthenticatedUser } from '../../../../Admin/backend/src/common/types';
import { CATEGORY_PREFIX, definedJson, nextSerial, pageArgs, paginate, publicUserSelect, shortCode, withUniqueRetry } from '../../../../Admin/backend/src/common/utils';
import { PrismaService } from '../../../../Admin/backend/src/prisma/prisma.service';
import { WarehousesService } from '../../../../Warehouse/backend/src/warehouses/warehouses.service';
import { CancelPledgeDto, CreatePledgeDto, CreateProposalDto, QueryDevicesDto, QueryPledgeDto, ReceivePledgeDto, RespondProposalDto, UpdatePledgeDto } from './dto';

const pledgeInclude = {
  donor: { select: publicUserSelect },
  campaign: { select: { id: true, slug: true, title: true, status: true } },
  items: { include: { _count: { select: { resourceItems: true } } } },
  proposals: { orderBy: { createdAt: 'desc' }, take: 1 },
} satisfies Prisma.DonationPledgeInclude;

/** Số ngày một phiếu đề xuất của kho còn hiệu lực khi nhà hảo tâm chưa phản hồi. */
export const PROPOSAL_TTL_DAYS = 7;

@Injectable()
export class PledgesService implements OnModuleInit, OnModuleDestroy {
  private expiryTimer?: ReturnType<typeof setInterval>;

  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly warehouses: WarehousesService,
  ) {}

  async create(actor: AuthenticatedUser, dto: CreatePledgeDto, ipAddress: string | null) {
    const donorId = await this.resolveDonor(actor, dto.donorId);
    if (dto.campaignId) {
      const campaign = await this.prisma.campaign.findUnique({ where: { id: dto.campaignId } });
      if (!campaign || campaign.status === 'COMPLETED') {
        throw new BadRequestException('Chiến dịch không còn nhận trao tặng');
      }
    }
    const pledge = await withUniqueRetry(() =>
      this.prisma.$transaction(async (tx) => {
        const code = await this.nextCode(tx, 'DN');
        return tx.donationPledge.create({
          data: {
            code,
            donorId,
            campaignId: dto.campaignId,
            handoverMethod: dto.handoverMethod,
            scheduledAt: dto.scheduledAt ? new Date(dto.scheduledAt) : null,
            address: dto.address,
            contactName: dto.contactName?.trim() || null,
            contactPhone: dto.contactPhone?.trim() || null,
            notes: dto.notes,
            items: {
              create: dto.items.map((item) => ({
                category: item.category,
                name: item.name.trim(),
                estimatedQuantity: item.estimatedQuantity,
                declaredCondition: item.declaredCondition,
                photoUrls: item.photoUrls ?? [],
                unit: item.unit ?? 'cái',
              })),
            },
          },
          include: pledgeInclude,
        });
      }),
    );
    await this.audit.log({
      userId: actor.id,
      action: 'PLEDGE_CREATED',
      resource: 'DonationPledge',
      details: { pledgeId: pledge.id, code: pledge.code },
      ipAddress,
    });
    return pledge;
  }

  async list(actor: AuthenticatedUser, query: QueryPledgeDto) {
    await this.expireStale();
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.DonationPledgeWhereInput = {
      ...(actor.role === Role.DONOR ? { donorId: actor.id } : {}),
      ...(query.bucket === 'CONFIRMED'
        ? { status: { in: ['VERIFIED', 'PARTIALLY_RECEIVED', 'COMPLETED'] } }
        : query.status
          ? { status: query.status }
          : {}),
      ...(query.campaignId ? { campaignId: query.campaignId } : {}),
      ...(query.search
        ? {
            OR: [
              { code: { contains: query.search, mode: 'insensitive' } },
              { notes: { contains: query.search, mode: 'insensitive' } },
              { donor: { fullName: { contains: query.search, mode: 'insensitive' } } },
              { campaign: { title: { contains: query.search, mode: 'insensitive' } } },
              { items: { some: { name: { contains: query.search, mode: 'insensitive' } } } },
            ],
          }
        : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.donationPledge.findMany({
        where,
        include: pledgeInclude,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.donationPledge.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  async get(actor: AuthenticatedUser, id: string) {
    const pledge = await this.prisma.donationPledge.findUnique({ where: { id }, include: pledgeInclude });
    if (!pledge) {
      throw new NotFoundException('Không tìm thấy phiếu trao tặng');
    }
    this.assertCanRead(actor, pledge.donorId);
    return pledge;
  }

  async receipt(actor: AuthenticatedUser, id: string) {
    const pledge = await this.prisma.donationPledge.findUnique({
      where: { id },
      include: {
        ...pledgeInclude,
        items: {
          include: {
            resourceItems: {
              select: { id: true, qrCode: true, status: true, grade: true, name: true, category: true },
            },
          },
        },
      },
    });
    if (!pledge) {
      throw new NotFoundException('Không tìm thấy phiếu trao tặng');
    }
    this.assertCanRead(actor, pledge.donorId);
    if (pledge.status === 'PENDING' || pledge.status === 'AWAITING_DONOR' || pledge.status === 'CANCELLED') {
      throw new BadRequestException('Biên nhận chỉ có sau khi kho xác minh phiếu trao tặng.');
    }
    return {
      code: pledge.code,
      status: pledge.status,
      handoverMethod: pledge.handoverMethod,
      createdAt: pledge.createdAt,
      donorName: pledge.donor.fullName,
      organizationName: pledge.donor.profile?.organizationName ?? null,
      campaign: pledge.campaign,
      lines: pledge.items.map((item) => ({
        name: item.name,
        category: item.category,
        unit: item.unit,
        estimatedQuantity: item.estimatedQuantity,
        receivedQuantity: item.resourceItems.length,
        assets: item.resourceItems,
      })),
    };
  }

  async update(actor: AuthenticatedUser, id: string, dto: UpdatePledgeDto, ipAddress: string | null) {
    if (actor.role === Role.DONOR) {
      throw new ForbiddenException('Nhà hảo tâm không được sửa phiếu trao tặng');
    }
    const pledge = await this.get(actor, id);
    if (pledge.status !== 'PENDING') {
      throw new BadRequestException('Chỉ sửa được phiếu đang chờ xác minh');
    }
    const updated = await this.prisma.donationPledge.update({
      where: { id },
      data: {
        handoverMethod: dto.handoverMethod,
        scheduledAt: dto.scheduledAt ? new Date(dto.scheduledAt) : undefined,
        address: dto.address,
        notes: dto.notes,
      },
      include: pledgeInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'PLEDGE_UPDATED',
      resource: 'DonationPledge',
      details: { pledgeId: id },
      ipAddress,
    });
    return updated;
  }

  async verify(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const pledge = await this.prisma.donationPledge.findUnique({ where: { id } });
    if (!pledge) {
      throw new NotFoundException('Không tìm thấy phiếu trao tặng');
    }
    if (pledge.status === 'AWAITING_DONOR') {
      throw new BadRequestException('Phiếu đang chờ nhà hảo tâm xác nhận đề xuất. Hãy rút đề xuất nếu muốn xác minh lại.');
    }
    assertTransition(pledge.status, 'VERIFIED', PLEDGE_TRANSITIONS, 'Phiếu trao tặng');
    if (pledge.status === 'PENDING') {
      const review = await this.analyze(id);
      if (review.needsProposal) {
        throw new BadRequestException(
          `${review.summary} Hãy gửi phiếu đề xuất (đổi chiến dịch hoặc lưu kho dự trữ) để nhà hảo tâm xác nhận trước khi xác minh.`,
        );
      }
    }
    const updated = await this.prisma.donationPledge.update({
      where: { id },
      data: { status: 'VERIFIED' },
      include: pledgeInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'PLEDGE_VERIFIED',
      resource: 'DonationPledge',
      details: { pledgeId: id, code: pledge.code },
      ipAddress,
    });
    return updated;
  }

  /** Đối soát phiếu với nhu cầu còn lại của chiến dịch (kho xem trước khi xác minh). */
  async review(id: string) {
    await this.expireStale();
    return this.analyze(id);
  }

  /** Kho gửi phiếu đề xuất ngược lại cho nhà hảo tâm khi chiến dịch không cần (hoặc đã đủ) vật tư trong phiếu. */
  async propose(actor: AuthenticatedUser, id: string, dto: CreateProposalDto, ipAddress: string | null) {
    const review = await this.analyze(id);
    if (review.pledge.status !== 'PENDING') {
      throw new BadRequestException('Chỉ gửi đề xuất cho phiếu đang chờ xác minh.');
    }
    if (!review.needsProposal) {
      throw new BadRequestException('Chiến dịch vẫn cần đủ số vật tư trong phiếu nên không cần gửi đề xuất, hãy xác minh phiếu.');
    }
    if (!dto.redirectCampaignId && !dto.offerStock && !dto.offerSplit) {
      throw new BadRequestException('Chọn ít nhất một phương án đề xuất: đổi sang chiến dịch khác, chia phiếu hoặc lưu kho dự trữ.');
    }
    const options: Array<{ type: 'REDIRECT' | 'SPLIT' | 'STOCK'; campaignId?: string; campaignTitle?: string; lines?: unknown }> = [];
    if (dto.offerSplit) {
      if (!review.canSplit || !review.campaign) {
        throw new BadRequestException('Chiến dịch hiện không còn nhu cầu cho phiếu này nên không thể chia phiếu.');
      }
      options.push({
        type: 'SPLIT',
        campaignId: review.campaign.id,
        campaignTitle: review.campaign.title,
        lines: review.lines.map((line) => ({ pledgeItemId: line.pledgeItemId, name: line.name, unit: line.unit, fit: line.fitQuantity, rest: line.restQuantity })),
      });
    }
    if (dto.redirectCampaignId) {
      const target = review.candidates.find((candidate) => candidate.id === dto.redirectCampaignId);
      if (!target || !target.coversAll) {
        throw new BadRequestException('Chiến dịch được đề xuất không còn nhu cầu đủ cho các vật tư trong phiếu.');
      }
      options.push({ type: 'REDIRECT', campaignId: target.id, campaignTitle: target.title });
    }
    if (dto.offerStock) {
      options.push({ type: 'STOCK' });
    }
    const proposal = await this.prisma.$transaction(async (tx) => {
      await tx.pledgeProposal.updateMany({ where: { pledgeId: id, status: 'PENDING' }, data: { status: 'WITHDRAWN', respondedAt: new Date() } });
      assertTransition(review.pledge.status, 'AWAITING_DONOR', PLEDGE_TRANSITIONS, 'Phiếu trao tặng');
      await tx.donationPledge.update({ where: { id }, data: { status: 'AWAITING_DONOR' } });
      return tx.pledgeProposal.create({
        data: {
          pledgeId: id,
          createdById: actor.id,
          reason: dto.reason?.trim() || review.summary,
          note: dto.note?.trim() || null,
          lines: review.lines as unknown as Prisma.InputJsonValue,
          options: options as unknown as Prisma.InputJsonValue,
        },
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'PLEDGE_PROPOSAL_SENT',
      resource: 'DonationPledge',
      details: { pledgeId: id, code: review.pledge.code, proposalId: proposal.id, options: options as unknown as Prisma.InputJsonValue },
      ipAddress,
    });
    return this.prisma.donationPledge.findUnique({ where: { id }, include: pledgeInclude });
  }

  /** Nhà hảo tâm trả lời phiếu đề xuất: đồng ý đổi chiến dịch hoặc đồng ý lưu kho dự trữ (muốn từ chối thì hủy phiếu). */
  async respond(actor: AuthenticatedUser, id: string, dto: RespondProposalDto, ipAddress: string | null) {
    await this.expireStale();
    const pledge = await this.prisma.donationPledge.findUnique({
      where: { id },
      include: { proposals: { where: { status: 'PENDING' }, orderBy: { createdAt: 'desc' }, take: 1 } },
    });
    if (!pledge) {
      throw new NotFoundException('Không tìm thấy phiếu trao tặng');
    }
    this.assertCanRead(actor, pledge.donorId);
    if (pledge.status !== 'AWAITING_DONOR' || !pledge.proposals[0]) {
      throw new BadRequestException('Phiếu này hiện không có đề xuất nào đang chờ bạn xác nhận.');
    }
    const proposal = pledge.proposals[0];
    const options = proposal.options as unknown as Array<{ type: 'REDIRECT' | 'SPLIT' | 'STOCK'; campaignId?: string }>;
    const option = options.find((item) => item.type === dto.decision);
    if (!option) {
      throw new BadRequestException('Phương án này không nằm trong đề xuất của kho.');
    }
    if (dto.decision === 'SPLIT') {
      return this.acceptSplit(actor, pledge.id, proposal.id, ipAddress);
    }
    let campaignId: string | null = null;
    if (dto.decision === 'REDIRECT') {
      const review = await this.analyze(id);
      const target = review.candidates.find((candidate) => candidate.id === option.campaignId);
      if (!target || !target.coversAll) {
        throw new BadRequestException('Chiến dịch đề xuất vừa được lấp đầy nên không còn phù hợp. Vui lòng chờ kho gửi đề xuất mới hoặc hủy phiếu.');
      }
      campaignId = target.id;
    }
    assertTransition(pledge.status, 'VERIFIED', PLEDGE_TRANSITIONS, 'Phiếu trao tặng');
    await this.prisma.$transaction([
      this.prisma.donationPledge.update({
        where: { id },
        data: dto.decision === 'REDIRECT' ? { status: 'VERIFIED', campaignId } : { status: 'VERIFIED', campaignId: null, reserveStock: true },
      }),
      this.prisma.pledgeProposal.update({
        where: { id: proposal.id },
        data: { status: 'ACCEPTED', chosenType: dto.decision, chosenCampaignId: campaignId, respondedAt: new Date() },
      }),
    ]);
    await this.audit.log({
      userId: actor.id,
      action: 'PLEDGE_PROPOSAL_ACCEPTED',
      resource: 'DonationPledge',
      details: { pledgeId: id, code: pledge.code, proposalId: proposal.id, decision: dto.decision, campaignId },
      ipAddress,
    });
    return this.prisma.donationPledge.findUnique({ where: { id }, include: pledgeInclude });
  }

  /** Chia phiếu: giữ phần chiến dịch còn cần ở phiếu gốc, phần dư chuyển sang phiếu mới lưu kho dự trữ. */
  private async acceptSplit(actor: AuthenticatedUser, id: string, proposalId: string, ipAddress: string | null) {
    const review = await this.analyze(id);
    if (!review.canSplit || !review.campaign) {
      throw new BadRequestException('Chiến dịch vừa thay đổi nhu cầu nên không còn chia phiếu được. Vui lòng chờ kho gửi đề xuất mới hoặc hủy phiếu.');
    }
    const plan = review.lines;
    const campaignId = review.campaign.id;
    const created = await withUniqueRetry(() =>
      this.prisma.$transaction(async (tx) => {
        const original = await tx.donationPledge.findUnique({ where: { id }, include: { items: true } });
        if (!original || original.status !== 'AWAITING_DONOR') {
          throw new BadRequestException('Phiếu này hiện không còn chờ bạn xác nhận.');
        }
        const code = await this.nextCode(tx, 'DN');
        const restLines = plan.filter((line) => line.restQuantity > 0);
        const rest = await tx.donationPledge.create({
          data: {
            code,
            donorId: original.donorId,
            campaignId: null,
            reserveStock: true,
            status: 'VERIFIED',
            handoverMethod: original.handoverMethod,
            scheduledAt: original.scheduledAt,
            address: original.address,
            contactName: original.contactName,
            contactPhone: original.contactPhone,
            notes: `Phần dư tách từ phiếu ${original.code}, lưu kho dự trữ.${original.notes ? ` ${original.notes}` : ''}`,
            items: {
              create: restLines.map((line) => {
                const source = original.items.find((item) => item.id === line.pledgeItemId)!;
                return {
                  category: source.category,
                  name: source.name,
                  estimatedQuantity: line.restQuantity,
                  declaredCondition: source.declaredCondition,
                  photoUrls: source.photoUrls,
                  unit: source.unit,
                };
              }),
            },
          },
        });
        for (const line of plan) {
          if (line.fitQuantity > 0) {
            await tx.donationPledgeItem.update({ where: { id: line.pledgeItemId }, data: { estimatedQuantity: line.fitQuantity } });
          } else {
            await tx.donationPledgeItem.delete({ where: { id: line.pledgeItemId } });
          }
        }
        assertTransition(original.status, 'VERIFIED', PLEDGE_TRANSITIONS, 'Phiếu trao tặng');
        await tx.donationPledge.update({ where: { id }, data: { status: 'VERIFIED' } });
        await tx.pledgeProposal.update({
          where: { id: proposalId },
          data: { status: 'ACCEPTED', chosenType: 'SPLIT', chosenCampaignId: campaignId, resultPledgeId: rest.id, respondedAt: new Date() },
        });
        return rest;
      }),
    );
    await this.audit.log({
      userId: actor.id,
      action: 'PLEDGE_PROPOSAL_ACCEPTED',
      resource: 'DonationPledge',
      details: { pledgeId: id, code: review.pledge.code, proposalId, decision: 'SPLIT', campaignId, restPledgeId: created.id, restCode: created.code },
      ipAddress,
    });
    return this.prisma.donationPledge.findUnique({ where: { id }, include: pledgeInclude });
  }

  /** Đề xuất quá hạn (mặc định 7 ngày) tự hết hiệu lực và phiếu quay về trạng thái chờ xác minh để kho xử lý lại. */
  async expireStale(): Promise<number> {
    const cutoff = new Date(Date.now() - PROPOSAL_TTL_DAYS * 24 * 3600 * 1000);
    const stale = await this.prisma.pledgeProposal.findMany({
      where: { status: 'PENDING', createdAt: { lt: cutoff } },
      include: { pledge: { select: { id: true, code: true, status: true } } },
    });
    for (const proposal of stale) {
      await this.prisma.$transaction([
        this.prisma.pledgeProposal.update({ where: { id: proposal.id }, data: { status: 'EXPIRED', respondedAt: new Date() } }),
        ...(proposal.pledge.status === 'AWAITING_DONOR'
          ? [this.prisma.donationPledge.update({ where: { id: proposal.pledgeId }, data: { status: 'PENDING' } })]
          : []),
      ]);
      await this.audit.log({
        userId: null,
        action: 'PLEDGE_PROPOSAL_EXPIRED',
        resource: 'DonationPledge',
        details: { pledgeId: proposal.pledgeId, code: proposal.pledge.code, proposalId: proposal.id, days: PROPOSAL_TTL_DAYS },
        ipAddress: null,
      });
    }
    return stale.length;
  }

  onModuleInit(): void {
    const run = () => this.expireStale().catch(() => undefined);
    void run();
    this.expiryTimer = setInterval(run, 10 * 60 * 1000);
    this.expiryTimer.unref();
  }

  onModuleDestroy(): void {
    if (this.expiryTimer) clearInterval(this.expiryTimer);
  }

  /** Kho rút lại đề xuất (nhà hảo tâm chưa phản hồi) để đối soát lại phiếu. */
  async withdrawProposal(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const pledge = await this.prisma.donationPledge.findUnique({ where: { id } });
    if (!pledge) {
      throw new NotFoundException('Không tìm thấy phiếu trao tặng');
    }
    assertTransition(pledge.status, 'PENDING', PLEDGE_TRANSITIONS, 'Phiếu trao tặng');
    await this.prisma.$transaction([
      this.prisma.pledgeProposal.updateMany({ where: { pledgeId: id, status: 'PENDING' }, data: { status: 'WITHDRAWN', respondedAt: new Date() } }),
      this.prisma.donationPledge.update({ where: { id }, data: { status: 'PENDING' } }),
    ]);
    await this.audit.log({
      userId: actor.id,
      action: 'PLEDGE_PROPOSAL_WITHDRAWN',
      resource: 'DonationPledge',
      details: { pledgeId: id, code: pledge.code },
      ipAddress,
    });
    return this.prisma.donationPledge.findUnique({ where: { id }, include: pledgeInclude });
  }

  /**
   * Nhu cầu còn lại của chiến dịch cho từng nhóm vật tư:
   * mục tiêu - đã tiếp nhận - đã xác minh nhưng chưa nhập kho (không tính phiếu đang xét).
   */
  private async analyze(id: string) {
    const pledge = await this.prisma.donationPledge.findUnique({
      where: { id },
      include: { ...pledgeInclude, proposals: { orderBy: { createdAt: 'desc' }, take: 3 } },
    });
    if (!pledge) {
      throw new NotFoundException('Không tìm thấy phiếu trao tặng');
    }
    const campaigns = await this.prisma.campaign.findMany({
      where: { OR: [{ status: 'ACTIVE' }, ...(pledge.campaignId ? [{ id: pledge.campaignId }] : [])] },
      include: { targets: true },
    });
    const committed = await this.prisma.donationPledge.findMany({
      where: { id: { not: id }, campaignId: { in: campaigns.map((campaign) => campaign.id) }, status: { in: ['VERIFIED', 'PARTIALLY_RECEIVED'] } },
      select: { campaignId: true, items: { select: { category: true, estimatedQuantity: true, _count: { select: { resourceItems: true } } } } },
    });
    const needOf = (campaignId: string, category: string): number => {
      const campaign = campaigns.find((row) => row.id === campaignId);
      if (!campaign) return 0;
      const rows = campaign.targets.filter((target) => target.category === category);
      const target = rows.reduce((sum, row) => sum + row.targetQuantity, 0);
      const received = rows.reduce((sum, row) => sum + row.currentReceivedQuantity, 0);
      const incoming = committed
        .filter((row) => row.campaignId === campaignId)
        .flatMap((row) => row.items)
        .filter((item) => item.category === category)
        .reduce((sum, item) => sum + Math.max(0, item.estimatedQuantity - item._count.resourceItems), 0);
      return Math.max(0, target - received - incoming);
    };
    const demand = new Map<string, number>();
    for (const item of pledge.items) {
      demand.set(item.category, (demand.get(item.category) ?? 0) + item.estimatedQuantity);
    }
    const current = pledge.campaignId ? campaigns.find((campaign) => campaign.id === pledge.campaignId) ?? null : null;
    const acceptsDonation = current ? current.status === 'ACTIVE' || current.status === 'UPCOMING' : true;
    const needLeft = new Map<string, number>();
    const lines = pledge.items.map((item) => {
      const quantity = demand.get(item.category) ?? item.estimatedQuantity;
      const need = pledge.campaignId ? (acceptsDonation ? needOf(pledge.campaignId, item.category) : 0) : null;
      const verdict = need === null ? 'GENERAL' : need >= quantity ? 'FIT' : need > 0 ? 'PARTIAL' : 'NONE';
      // Phần chiến dịch còn nhận được của dòng này (các dòng cùng nhóm chia sẻ chung nhu cầu còn lại).
      let fitQuantity = item.estimatedQuantity;
      if (need !== null) {
        const available = needLeft.get(item.category) ?? need;
        fitQuantity = Math.min(item.estimatedQuantity, available);
        needLeft.set(item.category, available - fitQuantity);
      }
      return {
        pledgeItemId: item.id,
        name: item.name,
        category: item.category,
        unit: item.unit,
        quantity: item.estimatedQuantity,
        categoryDemand: quantity,
        need,
        verdict,
        fitQuantity,
        restQuantity: item.estimatedQuantity - fitQuantity,
      };
    });
    const unfit = lines.filter((line) => line.verdict === 'PARTIAL' || line.verdict === 'NONE');
    const categoryLabel: Record<string, string> = {
      BOOKS: 'sách vở',
      UNIFORMS: 'đồng phục',
      IT_DEVICES: 'thiết bị tin học',
      STATIONERY: 'dụng cụ học tập',
      FURNITURE: 'bàn ghế',
      VEHICLES: 'xe đạp',
    };
    const needsProposal = unfit.length > 0;
    const summary = !needsProposal
      ? 'Chiến dịch vẫn cần đủ số vật tư trong phiếu.'
      : !acceptsDonation
        ? `Chiến dịch "${current?.title}" đã tạm dừng hoặc kết thúc nên không còn nhận vật tư.`
        : `Chiến dịch "${current?.title}" ${unfit
            .map((line) => (line.need ? `chỉ còn cần ${line.need} ${categoryLabel[line.category] ?? line.category} (phiếu gửi ${line.categoryDemand})` : `đã đủ ${categoryLabel[line.category] ?? line.category}`))
            .filter((text, index, all) => all.indexOf(text) === index)
            .join(', ')}.`;
    const candidates = needsProposal
      ? campaigns
          .filter((campaign) => campaign.id !== pledge.campaignId && campaign.status === 'ACTIVE')
          .map((campaign) => {
            const detail = lines.map((line) => ({ pledgeItemId: line.pledgeItemId, category: line.category, need: needOf(campaign.id, line.category), quantity: line.categoryDemand }));
            return {
              id: campaign.id,
              title: campaign.title,
              slug: campaign.slug,
              coversAll: detail.every((row) => row.need >= row.quantity),
              coversSome: detail.some((row) => row.need > 0),
              lines: detail,
            };
          })
          .sort((a, b) => Number(b.coversAll) - Number(a.coversAll))
      : [];
    return {
      pledge: { id: pledge.id, code: pledge.code, status: pledge.status, campaignId: pledge.campaignId, reserveStock: pledge.reserveStock },
      campaign: current ? { id: current.id, title: current.title, status: current.status } : null,
      lines,
      needsProposal,
      // Chiến dịch còn nhận được một phần: có thể chia phiếu, phần dư lưu kho dự trữ.
      canSplit: needsProposal && acceptsDonation && lines.some((line) => line.fitQuantity > 0),
      summary,
      candidates,
      proposals: pledge.proposals,
    };
  }

  async devices(actor: AuthenticatedUser, query: QueryDevicesDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.ResourceItemWhereInput = {
      pledgeItem: { pledge: actor.role === Role.DONOR ? { donorId: actor.id } : {} },
      ...(query.category ? { category: query.category } : {}),
      ...(query.search
        ? {
            OR: [
              { qrCode: { contains: query.search, mode: 'insensitive' } },
              { name: { contains: query.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.resourceItem.findMany({
        where,
        select: {
          id: true,
          qrCode: true,
          name: true,
          category: true,
          grade: true,
          status: true,
          binLocation: true,
          receivedAt: true,
          warehouse: { select: { code: true, name: true, city: true } },
          pledgeItem: { select: { pledge: { select: { id: true, code: true } } } },
          allocationItem: {
            select: {
              allocationPlan: {
                select: {
                  requisition: { select: { code: true, school: { select: { fullName: true } } } },
                  waybill: { select: { code: true, status: true, deliveredAt: true } },
                },
              },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.resourceItem.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  async impact(actor: AuthenticatedUser) {
    const pledgeWhere: Prisma.DonationPledgeWhereInput = actor.role === Role.DONOR ? { donorId: actor.id } : {};
    const [pledges, items] = await Promise.all([
      this.prisma.donationPledge.findMany({
        where: pledgeWhere,
        select: {
          status: true,
          campaignId: true,
          items: { select: { category: true, estimatedQuantity: true } },
        },
      }),
      this.prisma.resourceItem.findMany({
        where: { pledgeItem: { pledge: pledgeWhere } },
        select: {
          category: true,
          status: true,
          allocationItem: {
            select: {
              allocationPlan: {
                select: {
                  requisition: { select: { school: { select: { id: true, fullName: true } } } },
                  waybill: { select: { status: true, deliveredAt: true } },
                },
              },
            },
          },
        },
      }),
    ]);
    const byCategory = new Map<string, { category: string; pledged: number; received: number; delivered: number }>();
    const row = (category: string) => {
      const current = byCategory.get(category) ?? { category, pledged: 0, received: 0, delivered: 0 };
      byCategory.set(category, current);
      return current;
    };
    let pledgedTotal = 0;
    for (const pledge of pledges) {
      if (pledge.status === 'CANCELLED') continue;
      for (const line of pledge.items) {
        row(line.category).pledged += line.estimatedQuantity;
        pledgedTotal += line.estimatedQuantity;
      }
    }
    const schools = new Map<string, { id: string; name: string; devices: number }>();
    let delivered = 0;
    for (const item of items) {
      row(item.category).received += 1;
      if (item.status === 'DELIVERED') {
        row(item.category).delivered += 1;
        delivered += 1;
        const school = item.allocationItem?.allocationPlan.requisition.school;
        if (school) {
          const current = schools.get(school.id) ?? { id: school.id, name: school.fullName, devices: 0 };
          current.devices += 1;
          schools.set(school.id, current);
        }
      }
    }
    return {
      pledgeCount: pledges.length,
      activePledgeCount: pledges.filter((pledge) => pledge.status !== 'CANCELLED').length,
      campaignCount: new Set(pledges.map((pledge) => pledge.campaignId).filter(Boolean)).size,
      pledgedTotal,
      receivedTotal: items.length,
      deliveredTotal: delivered,
      byCategory: [...byCategory.values()],
      schools: [...schools.values()].sort((a, b) => b.devices - a.devices),
    };
  }

  async cancel(actor: AuthenticatedUser, id: string, dto: CancelPledgeDto, ipAddress: string | null) {
    if (actor.role === Role.DONOR && !dto.reason?.trim()) {
      throw new BadRequestException('Vui lòng chọn lý do hủy phiếu trao tặng');
    }
    const pledge = await this.prisma.donationPledge.findUnique({
      where: { id },
      include: { items: { include: { _count: { select: { resourceItems: true } } } } },
    });
    if (!pledge) {
      throw new NotFoundException('Không tìm thấy phiếu trao tặng');
    }
    this.assertCanRead(actor, pledge.donorId);
    if (actor.role === Role.DONOR) {
      if (pledge.status !== 'PENDING' && pledge.status !== 'AWAITING_DONOR') {
        throw new BadRequestException('Chỉ được hủy phiếu trao tặng khi đang chờ xác minh hoặc đang chờ bạn xác nhận đề xuất của kho.');
      }
      const ageMs = Date.now() - pledge.createdAt.getTime();
      const windowMs = 72 * 60 * 60 * 1000;
      // Phiếu kho đã gửi đề xuất: nhà hảo tâm được từ chối (hủy) bất kỳ lúc nào, không giới hạn 72 giờ.
      if (pledge.status === 'PENDING' && ageMs > windowMs) {
        throw new BadRequestException('Chỉ được hủy phiếu trao tặng trong vòng 3 ngày (72 giờ) kể từ lúc tạo. Phiếu này đã quá thời hạn hủy.');
      }
    }
    if (pledge.items.some((item) => item._count.resourceItems > 0)) {
      throw new BadRequestException('Phiếu đã phát sinh tài nguyên trong kho, không thể hủy');
    }
    assertTransition(pledge.status, 'CANCELLED', PLEDGE_TRANSITIONS, 'Phiếu trao tặng');
    await this.prisma.pledgeProposal.updateMany({ where: { pledgeId: id, status: 'PENDING' }, data: { status: 'CANCELLED', respondedAt: new Date() } });
    const updated = await this.prisma.donationPledge.update({
      where: { id },
      data: {
        status: 'CANCELLED',
        cancelReason: dto.reason?.trim() || null,
        cancelNote: dto.note?.trim() || null,
        cancelledAt: new Date(),
      },
      include: pledgeInclude,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'PLEDGE_CANCELLED',
      resource: 'DonationPledge',
      details: { pledgeId: id, code: pledge.code, reason: dto.reason ?? null },
      ipAddress,
    });
    return updated;
  }

  async receive(actor: AuthenticatedUser, id: string, dto: ReceivePledgeDto, ipAddress: string | null) {
    const result = await this.prisma.$transaction(async (tx) => {
      const pledge = await tx.donationPledge.findUnique({
        where: { id },
        include: { items: { include: { _count: { select: { resourceItems: true } } } } },
      });
      if (!pledge) {
        throw new NotFoundException('Không tìm thấy phiếu trao tặng');
      }
      if (pledge.status !== PledgeStatus.VERIFIED && pledge.status !== PledgeStatus.PARTIALLY_RECEIVED) {
        throw new BadRequestException('Chỉ tiếp nhận phiếu đã xác minh');
      }
      const byId = new Map(pledge.items.map((item) => [item.id, item]));
      const seen = new Set<string>();
      let created = 0;
      const createdIds: string[] = [];

      for (const line of dto.lines) {
        if (seen.has(line.pledgeItemId)) {
          throw new BadRequestException('Mỗi dòng phiếu chỉ được tiếp nhận một lần trong cùng yêu cầu');
        }
        seen.add(line.pledgeItemId);
        const pledgeItem = byId.get(line.pledgeItemId);
        if (!pledgeItem || pledgeItem.pledgeId !== id) {
          throw new BadRequestException('Dòng phiếu không thuộc phiếu trao tặng này');
        }
        const remaining = pledgeItem.estimatedQuantity - pledgeItem._count.resourceItems;
        if (line.receivedQuantity > remaining) {
          throw new BadRequestException(`Số lượng tiếp nhận vượt quá phần còn lại của "${pledgeItem.name}"`);
        }
        await this.warehouses.assertCapacity(tx, line.warehouseId, line.receivedQuantity);
        const specifications = definedJson(line.specifications);
        const prefix = CATEGORY_PREFIX[pledgeItem.category] ?? 'SP';
        const existingCodes = await tx.resourceItem.findMany({
          where: { qrCode: { startsWith: prefix } },
          select: { qrCode: true },
        });
        let serial = nextSerial(existingCodes.map((row) => row.qrCode), prefix);
        const rows = Array.from({ length: line.receivedQuantity }, () => {
          const qrCode = shortCode(prefix, serial);
          serial += 1;
          return {
          qrCode,
          pledgeItemId: pledgeItem.id,
          warehouseId: line.warehouseId,
          category: pledgeItem.category,
          name: pledgeItem.name,
          status: 'PENDING_INTAKE' as const,
          specifications,
          binLocation: line.binLocation,
          receivedAt: new Date(),
          };
        });
        await tx.resourceItem.createMany({ data: rows });
        created += rows.length;
        const fresh = await tx.resourceItem.findMany({
          where: { qrCode: { in: rows.map((row) => row.qrCode) } },
          select: { id: true },
        });
        createdIds.push(...fresh.map((row) => row.id));
        if (pledge.campaignId) {
          await tx.campaignTarget.updateMany({
            where: { campaignId: pledge.campaignId, category: pledgeItem.category },
            data: { currentReceivedQuantity: { increment: line.receivedQuantity } },
          });
        }
      }

      const refreshed = await tx.donationPledgeItem.findMany({
        where: { pledgeId: id },
        include: { _count: { select: { resourceItems: true } } },
      });
      const fullyReceived = refreshed.every((item) => item._count.resourceItems >= item.estimatedQuantity);
      const status: PledgeStatus = fullyReceived ? 'COMPLETED' : 'PARTIALLY_RECEIVED';
      assertTransition(pledge.status, status, PLEDGE_TRANSITIONS, 'Phiếu trao tặng');
      const updated = await tx.donationPledge.update({
        where: { id },
        data: { status },
        include: pledgeInclude,
      });
      return { pledge: updated, created, resourceItemIds: createdIds };
    });

    await this.audit.log({
      userId: actor.id,
      action: 'PLEDGE_RECEIVED',
      resource: 'DonationPledge',
      details: {
        pledgeId: id,
        created: result.created,
        resourceItemIds: result.resourceItemIds,
        status: result.pledge.status,
      },
      ipAddress,
    });
    return result;
  }

  private async resolveDonor(actor: AuthenticatedUser, donorId?: string): Promise<string> {
    if (!donorId || donorId === actor.id) {
      if (actor.role !== Role.DONOR && actor.role !== Role.ADMIN && actor.role !== Role.WAREHOUSE_STAFF) {
        throw new ForbiddenException('Không có quyền lập phiếu trao tặng');
      }
      return actor.id;
    }
    if (actor.role !== Role.ADMIN && actor.role !== Role.WAREHOUSE_STAFF) {
      throw new ForbiddenException('Chỉ điều phối viên được lập phiếu hộ nhà hảo tâm');
    }
    const donor = await this.prisma.user.findUnique({ where: { id: donorId } });
    if (!donor || donor.status !== 'ACTIVE') {
      throw new BadRequestException('Nhà hảo tâm không hợp lệ');
    }
    return donor.id;
  }

  private assertCanRead(actor: AuthenticatedUser, donorId: string): void {
    if (actor.role === Role.DONOR && actor.id !== donorId) {
      throw new ForbiddenException('Không có quyền xem phiếu này');
    }
  }

  private async nextCode(tx: Prisma.TransactionClient, prefix: string): Promise<string> {
    const rows = await tx.donationPledge.findMany({
      where: { code: { startsWith: prefix } },
      select: { code: true },
    });
    return shortCode(prefix, nextSerial(rows.map((row) => row.code), prefix));
  }
}
