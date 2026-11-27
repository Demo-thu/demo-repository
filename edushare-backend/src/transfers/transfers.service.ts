import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ItemCategory, Prisma, Role } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { TRANSFER_TRANSITIONS, assertTransition } from '../common/domain';
import { AuthenticatedUser } from '../common/types';
import { nextSerial, pageArgs, paginate, publicUserSelect, shortCode, withUniqueRetry } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransferDto, QueryTransferDto } from './dto';

const MANIFEST_ACTION = 'STOCK_TRANSFER_MANIFEST';

const transferInclude = {
  sourceWarehouse: true,
  targetWarehouse: true,
  targetSchool: { select: publicUserSelect },
  requisition: { select: { id: true, code: true, title: true, status: true } },
  campaign: {
    select: {
      id: true,
      slug: true,
      title: true,
      beneficiarySchoolId: true,
    },
  },
  adminApprovedBy: { select: publicUserSelect },
  volunteers: { include: { volunteer: { select: publicUserSelect } } },
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
          pledgeItem: {
            select: {
              pledge: {
                select: {
                  id: true,
                  code: true,
                  donor: { select: { id: true, fullName: true, email: true, phone: true, profile: { select: { organizationName: true } } } },
                },
              },
            },
          },
        },
      },
    },
  },
} satisfies Prisma.StockTransferOrderInclude;

@Injectable()
export class TransfersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async create(actor: AuthenticatedUser, dto: CreateTransferDto, ipAddress: string | null) {
    const uniqueIds = [...new Set(dto.resourceItemIds)];
    const volunteerIds = [...new Set(dto.volunteerIds)];
    if (Boolean(dto.requisitionId) === Boolean(dto.campaignId)) {
      throw new BadRequestException('Chọn đúng một nguồn điều chuyển: yêu cầu trường hoặc chiến dịch.');
    }
    await this.assertVolunteers(volunteerIds);
    const transfer = await withUniqueRetry(() =>
      this.prisma.$transaction(async (tx) => {
        const source = await tx.warehouse.findUnique({ where: { id: dto.sourceWarehouseId } });
        if (!source) {
          throw new NotFoundException('Không tìm thấy kho xuất');
        }
        const requisition = dto.requisitionId
          ? await tx.supportRequisition.findUnique({
              where: { id: dto.requisitionId },
              include: { school: { select: publicUserSelect } },
            })
          : null;
        const campaign = dto.campaignId
          ? await tx.campaign.findUnique({
              where: { id: dto.campaignId },
              include: { targets: true, beneficiarySchool: { select: publicUserSelect } },
            })
          : null;
        if (dto.requisitionId && !requisition) {
          throw new NotFoundException('Không tìm thấy yêu cầu hỗ trợ của trường');
        }
        if (requisition && !['APPROVED', 'ALLOCATING'].includes(requisition.status)) {
          throw new BadRequestException('Chỉ điều chuyển cho yêu cầu của trường đã được admin duyệt');
        }
        if (dto.campaignId && !campaign) {
          throw new NotFoundException('Không tìm thấy chiến dịch');
        }
        if (campaign && !campaign.beneficiarySchool) {
          throw new BadRequestException('Chiến dịch chưa được gán trường thụ hưởng.');
        }
        if (campaign && campaign.beneficiarySchool && (campaign.beneficiarySchool.role !== Role.SCHOOL_REP || campaign.beneficiarySchool.status !== 'ACTIVE')) {
          throw new BadRequestException('Trường thụ hưởng của chiến dịch hiện không hoạt động.');
        }
        if (campaign && (!campaign.targets.length || campaign.targets.some((target) => target.currentReceivedQuantity < target.targetQuantity))) {
          throw new BadRequestException('Chỉ tạo lệnh phân phối khi chiến dịch đã tiếp nhận đủ các mục tiêu.');
        }
        const items = await tx.resourceItem.findMany({
          where: { id: { in: uniqueIds } },
          include: { pledgeItem: { select: { pledge: { select: { campaignId: true } } } }, allocationItem: { select: { id: true } } },
        });
        if (items.length !== uniqueIds.length) {
          throw new BadRequestException('Có tài nguyên không tồn tại');
        }
        const selectedByCategory = new Map<ItemCategory, number>();
        for (const item of items) {
          if (item.warehouseId !== source.id) {
            throw new BadRequestException(`Tài nguyên ${item.qrCode} không nằm ở kho xuất`);
          }
          if (item.status === 'PENDING_INTAKE') {
            throw new BadRequestException(`Tài nguyên ${item.qrCode} chưa kiểm định, không được xuất kho. Hãy kiểm định trước.`);
          }
          if (item.status !== 'READY_FOR_ALLOCATION') {
            throw new BadRequestException(`Tài nguyên ${item.qrCode} chưa sẵn sàng điều chuyển (cần đã kiểm định đạt và sẵn sàng phân bổ)`);
          }
          if (item.allocationItem) {
            throw new BadRequestException(`Tài nguyên ${item.qrCode} đã được giữ cho một phương án phân bổ khác.`);
          }
          if (campaign && item.pledgeItem?.pledge.campaignId !== campaign.id) {
            throw new BadRequestException(`Tài nguyên ${item.qrCode} không thuộc chiến dịch "${campaign.title}".`);
          }
          selectedByCategory.set(item.category, (selectedByCategory.get(item.category) ?? 0) + 1);
        }
        if (campaign) {
          const targetsByCategory = new Map<ItemCategory, { target: number; distributed: number }>();
          for (const target of campaign.targets) {
            const current = targetsByCategory.get(target.category) ?? { target: 0, distributed: 0 };
            current.target += target.targetQuantity;
            current.distributed += target.currentDistributedQuantity;
            targetsByCategory.set(target.category, current);
          }
          const committed = await tx.stockTransferItem.findMany({
            where: {
              transfer: {
                campaignId: campaign.id,
                status: { in: ['PENDING_APPROVAL', 'PENDING', 'IN_TRANSIT'] },
              },
            },
            select: { resourceItem: { select: { category: true } } },
          });
          const reservedByCategory = new Map<ItemCategory, number>();
          for (const line of committed) {
            const category = line.resourceItem.category;
            reservedByCategory.set(category, (reservedByCategory.get(category) ?? 0) + 1);
          }
          const allocated = await tx.allocationItem.findMany({
            where: {
              resourceItem: { pledgeItem: { pledge: { campaignId: campaign.id } } },
              allocationPlan: { status: { in: ['PROPOSED', 'CONFIRMED', 'DISPATCHED'] } },
            },
            select: {
              resourceItem: { select: { category: true } },
              allocationPlan: { select: { waybill: { select: { status: true } } } },
            },
          });
          for (const line of allocated) {
            if (line.allocationPlan.waybill?.status === 'DELIVERED') {
              continue;
            }
            const category = line.resourceItem.category;
            reservedByCategory.set(category, (reservedByCategory.get(category) ?? 0) + 1);
          }
          for (const [category, quantity] of selectedByCategory) {
            const target = targetsByCategory.get(category);
            if (!target) {
              throw new BadRequestException(`Chiến dịch không có mục tiêu cho hạng mục ${category}.`);
            }
            const remaining = target.target - target.distributed - (reservedByCategory.get(category) ?? 0);
            if (quantity > remaining) {
              throw new BadRequestException(`Số lượng ${category} vượt quá phần chiến dịch còn có thể phân phối (${Math.max(0, remaining)}).`);
            }
          }
        }
        const locked = await tx.resourceItem.updateMany({
          where: { id: { in: uniqueIds }, status: 'READY_FOR_ALLOCATION', allocationItem: { is: null } },
          data: { status: 'ALLOCATED' },
        });
        if (locked.count !== uniqueIds.length) {
          throw new BadRequestException('Một số hiện vật vừa được giữ hoặc không còn sẵn sàng; hãy tải lại danh sách và thử lại.');
        }
        const targetSchool = campaign?.beneficiarySchool ?? requisition?.school;
        if (!targetSchool) {
          throw new BadRequestException('Không xác định được trường nhận hàng.');
        }
        const profile = targetSchool.profile;
        const composedAddress = [profile?.address, profile?.district, profile?.city].filter(Boolean).join(', ');
        const code = await this.nextCode(tx);
        const created = await tx.stockTransferOrder.create({
          data: {
            code,
            sourceWarehouseId: source.id,
            targetSchoolId: targetSchool.id,
            requisitionId: requisition?.id,
            campaignId: campaign?.id,
            deliveryAddress: dto.deliveryAddress?.trim() || composedAddress || null,
            createdById: actor.id,
            status: campaign ? 'PENDING_APPROVAL' : 'PENDING',
            itemsCount: items.length,
            recipientName: dto.recipientName.trim(),
            recipientPhone: dto.recipientPhone.trim(),
            recipientNote: dto.recipientNote?.trim(),
            volunteers: { create: volunteerIds.map((volunteerId) => ({ volunteerId })) },
            items: { create: uniqueIds.map((resourceItemId) => ({ resourceItemId })) },
          },
          include: transferInclude,
        });
        await tx.auditLog.create({
          data: {
            userId: actor.id,
            action: MANIFEST_ACTION,
            resource: 'StockTransferOrder',
            details: { transferId: created.id, itemIds: uniqueIds, requisitionId: requisition?.id, campaignId: campaign?.id },
            ipAddress,
          },
        });
        return created;
      }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable, timeout: 20_000 }),
    );
    return this.present(transfer);
  }

  async approveCampaignTransfer(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const transfer = await this.prisma.$transaction(async (tx) => {
      const current = await tx.stockTransferOrder.findUnique({ where: { id } });
      if (!current) {
        throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
      }
      if (!current.campaignId || current.status !== 'PENDING_APPROVAL') {
        throw new BadRequestException('Chỉ duyệt được lệnh phân phối chiến dịch đang chờ Admin.');
      }
      assertTransition(current.status, 'PENDING', TRANSFER_TRANSITIONS, 'Lệnh điều chuyển');
      return tx.stockTransferOrder.update({
        where: { id },
        data: { status: 'PENDING', adminApprovedAt: new Date(), adminApprovedById: actor.id },
        include: transferInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'CAMPAIGN_TRANSFER_APPROVED',
      resource: 'StockTransferOrder',
      details: { transferId: id, code: transfer.code, campaignId: transfer.campaignId },
      ipAddress,
    });
    return this.present(transfer);
  }

  async list(query: QueryTransferDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.StockTransferOrderWhereInput = {
      ...(query.status ? { status: query.status } : {}),
      ...(query.requisitionId ? { requisitionId: query.requisitionId } : {}),
      ...(query.campaignOnly ? { campaignId: { not: null } } : {}),
      ...(query.code ? { code: { contains: query.code, mode: 'insensitive' } } : {}),
      ...(query.warehouseId ? { sourceWarehouseId: query.warehouseId } : {}),
      ...(query.search ? { code: { contains: query.search, mode: 'insensitive' } } : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.stockTransferOrder.findMany({
        where,
        include: transferInclude,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.stockTransferOrder.count({ where }),
    ]);
    return paginate(data.map((row) => this.present(row)), total, page, limit);
  }

  async get(id: string) {
    const transfer = await this.prisma.stockTransferOrder.findUnique({
      where: { id },
      include: transferInclude,
    });
    if (!transfer) {
      throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
    }
    return this.present(transfer);
  }

  /** Xuất kho: hàng rời kho và lệnh chuyển sang "Đang vận chuyển". */
  async dispatch(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const updated = await this.prisma.$transaction(async (tx) => {
      const transfer = await tx.stockTransferOrder.findUnique({ where: { id } });
      if (!transfer) {
        throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
      }
      if (transfer.campaignId && !transfer.adminApprovedAt) {
        throw new BadRequestException('Lệnh phân phối chiến dịch cần Admin duyệt trước khi kho xuất hàng.');
      }
      assertTransition(transfer.status, 'IN_TRANSIT', TRANSFER_TRANSITIONS, 'Lệnh điều chuyển');
      const itemIds = await this.itemIds(id, tx);
      const moved = await tx.resourceItem.updateMany({
        where: {
          id: { in: itemIds },
          warehouseId: transfer.sourceWarehouseId,
          // Chi xuat hang da kiem dinh dat: hang da khoa cho lenh nay (ALLOCATED, khong thuoc phuong an nao) hoac con san sang.
          status: { in: ['READY_FOR_ALLOCATION', 'ALLOCATED'] },
        },
        data: { status: 'IN_TRANSIT', binLocation: null },
      });
      if (moved.count !== itemIds.length) {
        throw new BadRequestException('Một số tài nguyên không còn sẵn sàng ở kho xuất nên không thể xuất điều chuyển');
      }
      return tx.stockTransferOrder.update({
        where: { id },
        data: { status: 'IN_TRANSIT', dispatchedAt: new Date() },
        include: transferInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'STOCK_TRANSFER_DISPATCHED',
      resource: 'StockTransferOrder',
      details: { transferId: id, code: updated.code, status: 'IN_TRANSIT' },
      ipAddress,
    });
    return this.present(updated);
  }

  /** Kho xác nhận hàng đã tới trường: lệnh hoàn tất và hiện vật chuyển sang "Đã giao". */
  async receive(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const updated = await this.prisma.$transaction(async (tx) => {
      const transfer = await tx.stockTransferOrder.findUnique({ where: { id } });
      if (!transfer) {
        throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
      }
      assertTransition(transfer.status, 'RECEIVED', TRANSFER_TRANSITIONS, 'Lệnh điều chuyển');
      const itemIds = await this.itemIds(id, tx);
      await tx.resourceItem.updateMany({
        where: { id: { in: itemIds }, status: 'IN_TRANSIT' },
        data: { status: 'DELIVERED' },
      });
      if (transfer.requisitionId) {
        await this.applyFulfillment(tx, transfer.requisitionId, itemIds);
      }
      if (transfer.campaignId) {
        await this.applyCampaignDistribution(tx, transfer.campaignId, itemIds);
      }
      return tx.stockTransferOrder.update({
        where: { id },
        data: { status: 'RECEIVED', receivedAt: new Date() },
        include: transferInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'STOCK_TRANSFER_COMPLETED',
      resource: 'StockTransferOrder',
      details: { transferId: id, code: updated.code, status: 'RECEIVED' },
      ipAddress,
    });
    return this.present(updated);
  }

  async cancel(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const transfer = await this.require(id);
    assertTransition(transfer.status, 'CANCELLED', TRANSFER_TRANSITIONS, 'Lệnh điều chuyển');
    const updated = await this.prisma.$transaction(async (tx) => {
      const itemIds = await this.itemIds(id, tx);
      // Tra lai cho da khoa de co the phan bo tiep.
      await tx.resourceItem.updateMany({
        where: { id: { in: itemIds }, status: 'ALLOCATED', allocationItem: { is: null } },
        data: { status: 'READY_FOR_ALLOCATION' },
      });
      return tx.stockTransferOrder.update({
        where: { id },
        data: { status: 'CANCELLED' },
        include: transferInclude,
      });
    });
    await this.audit.log({
      userId: actor.id,
      action: 'STOCK_TRANSFER_CANCELLED',
      resource: 'StockTransferOrder',
      details: { transferId: id, code: transfer.code },
      ipAddress,
    });
    return this.present(updated);
  }

  /** Cộng số hàng đã giao vào yêu cầu của trường. */
  private async applyFulfillment(tx: Prisma.TransactionClient, requisitionId: string, itemIds: string[]): Promise<void> {
    const delivered = await tx.resourceItem.findMany({ where: { id: { in: itemIds } }, select: { category: true } });
    const counts = new Map<string, number>();
    for (const row of delivered) {
      counts.set(row.category, (counts.get(row.category) ?? 0) + 1);
    }
    const lines = await tx.requisitionItem.findMany({ where: { requisitionId } });
    for (const [category, count] of counts) {
      let remaining = count;
      for (const line of lines.filter((item) => item.category === category)) {
        const add = Math.min(line.quantityNeeded - line.quantityFulfilled, remaining);
        if (add > 0) {
          await tx.requisitionItem.update({ where: { id: line.id }, data: { quantityFulfilled: { increment: add } } });
          line.quantityFulfilled += add;
          remaining -= add;
        }
      }
    }
    const completed = lines.every((item) => item.quantityFulfilled >= item.quantityNeeded);
    await tx.supportRequisition.updateMany({
      where: { id: requisitionId, status: { in: ['APPROVED', 'ALLOCATING'] } },
      data: { status: completed ? 'COMPLETED' : 'ALLOCATING' },
    });
  }

  private async applyCampaignDistribution(tx: Prisma.TransactionClient, campaignId: string, itemIds: string[]): Promise<void> {
    const delivered = await tx.resourceItem.findMany({
      where: { id: { in: itemIds } },
      select: { category: true },
    });
    const counts = new Map<ItemCategory, number>();
    for (const row of delivered) {
      counts.set(row.category, (counts.get(row.category) ?? 0) + 1);
    }
    for (const [category, count] of counts) {
      await tx.campaignTarget.updateMany({
        where: { campaignId, category },
        data: { currentDistributedQuantity: { increment: count } },
      });
    }
  }

  private async require(id: string) {
    const transfer = await this.prisma.stockTransferOrder.findUnique({ where: { id } });
    if (!transfer) {
      throw new NotFoundException('Không tìm thấy lệnh điều chuyển');
    }
    return transfer;
  }

  private async nextCode(tx: Prisma.TransactionClient): Promise<string> {
    const rows = await tx.stockTransferOrder.findMany({ select: { code: true } });
    return shortCode('DC', nextSerial(rows.map((row) => row.code), 'DC'));
  }

  private present<T extends { volunteers: Array<{ volunteer: unknown }>; items: Array<{ resourceItem: unknown }> }>(transfer: T) {
    return {
      ...transfer,
      volunteers: transfer.volunteers.map((link) => link.volunteer),
      items: transfer.items.map((line) => line.resourceItem),
    };
  }

  private async assertVolunteers(userIds: string[]): Promise<void> {
    const users = await this.prisma.user.findMany({ where: { id: { in: userIds } } });
    const valid = new Set(users.filter((user) => user.role === Role.VOLUNTEER && user.status === 'ACTIVE').map((user) => user.id));
    if (userIds.some((id) => !valid.has(id))) {
      throw new BadRequestException('Mọi người đi cùng lệnh điều chuyển phải là tình nguyện viên đang hoạt động');
    }
  }

  private async itemIds(transferId: string, tx: Prisma.TransactionClient | PrismaService = this.prisma): Promise<string[]> {
    const lines = await tx.stockTransferItem.findMany({
      where: { transferId },
      select: { resourceItemId: true },
    });
    if (lines.length > 0) {
      return lines.map((line) => line.resourceItemId);
    }
    return this.manifest(transferId, tx);
  }

  private async manifest(transferId: string, tx: Prisma.TransactionClient | PrismaService = this.prisma): Promise<string[]> {
    const log = await tx.auditLog.findFirst({
      where: {
        action: MANIFEST_ACTION,
        resource: 'StockTransferOrder',
        details: { path: ['transferId'], equals: transferId },
      },
      orderBy: { createdAt: 'desc' },
    });
    const details = log?.details;
    if (!isManifest(details)) {
      throw new BadRequestException('Không tìm thấy danh sách tài nguyên của lệnh điều chuyển');
    }
    return details.itemIds;
  }
}

function isManifest(value: Prisma.JsonValue | undefined): value is { transferId: string; itemIds: string[] } {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }
  const record = value as Record<string, Prisma.JsonValue>;
  return typeof record.transferId === 'string' && Array.isArray(record.itemIds) && record.itemIds.every((id) => typeof id === 'string');
}
