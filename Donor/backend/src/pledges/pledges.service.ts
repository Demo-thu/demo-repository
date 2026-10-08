import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PledgeStatus, Prisma, Role } from '@prisma/client';
import { AuditService } from '../../../../Admin/backend/src/audit/audit.service';
import { PLEDGE_TRANSITIONS, assertTransition } from '../../../../Admin/backend/src/common/domain';
import { AuthenticatedUser } from '../../../../Admin/backend/src/common/types';
import { CATEGORY_PREFIX, definedJson, nextSerial, pageArgs, paginate, publicUserSelect, shortCode, withUniqueRetry } from '../../../../Admin/backend/src/common/utils';
import { PrismaService } from '../../../../Admin/backend/src/prisma/prisma.service';
import { WarehousesService } from '../../../../Warehouse/backend/src/warehouses/warehouses.service';
import { CancelPledgeDto, CreatePledgeDto, QueryDevicesDto, QueryPledgeDto, ReceivePledgeDto, UpdatePledgeDto } from './dto';

const pledgeInclude = {
  donor: { select: publicUserSelect },
  campaign: { select: { id: true, slug: true, title: true, status: true } },
  items: { include: { _count: { select: { resourceItems: true } } } },
} satisfies Prisma.DonationPledgeInclude;

@Injectable()
export class PledgesService {
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
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.DonationPledgeWhereInput = {
      ...(actor.role === Role.DONOR ? { donorId: actor.id } : {}),
      ...(query.status ? { status: query.status } : {}),
      ...(query.campaignId ? { campaignId: query.campaignId } : {}),
      ...(query.search
        ? {
            OR: [
              { code: { contains: query.search, mode: 'insensitive' } },
              { notes: { contains: query.search, mode: 'insensitive' } },
              { donor: { fullName: { contains: query.search, mode: 'insensitive' } } },
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
    if (pledge.status === 'PENDING' || pledge.status === 'CANCELLED') {
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
    assertTransition(pledge.status, 'VERIFIED', PLEDGE_TRANSITIONS, 'Phiếu trao tặng');
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
      if (pledge.status !== 'PENDING') {
        throw new BadRequestException('Chỉ được hủy phiếu trao tặng khi trạng thái đang chờ xác minh (PENDING).');
      }
      const ageMs = Date.now() - pledge.createdAt.getTime();
      const windowMs = 72 * 60 * 60 * 1000;
      if (ageMs > windowMs) {
        throw new BadRequestException('Chỉ được hủy phiếu trao tặng trong vòng 3 ngày (72 giờ) kể từ lúc tạo. Phiếu này đã quá thời hạn hủy.');
      }
    }
    if (pledge.items.some((item) => item._count.resourceItems > 0)) {
      throw new BadRequestException('Phiếu đã phát sinh tài nguyên trong kho, không thể hủy');
    }
    assertTransition(pledge.status, 'CANCELLED', PLEDGE_TRANSITIONS, 'Phiếu trao tặng');
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
