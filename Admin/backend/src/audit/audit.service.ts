import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { pageArgs, paginate } from '../common/utils';

export interface WriteAuditInput {
  userId?: string | null;
  action: string;
  resource: string;
  details?: Prisma.InputJsonValue;
  ipAddress?: string | null;
}

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async log(input: WriteAuditInput): Promise<void> {
    await this.prisma.auditLog.create({
      data: {
        userId: input.userId ?? null,
        action: input.action,
        resource: input.resource,
        details: input.details,
        ipAddress: input.ipAddress ?? null,
      },
    });
  }

  async list(query: { page?: number; limit?: number; search?: string; resource?: string; action?: string }) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.AuditLogWhereInput = {
      ...(query.resource ? { resource: query.resource } : {}),
      ...(query.action ? { action: query.action } : {}),
      ...(query.search
        ? {
            OR: [
              { action: { contains: query.search, mode: 'insensitive' } },
              { resource: { contains: query.search, mode: 'insensitive' } },
              { user: { fullName: { contains: query.search, mode: 'insensitive' } } },
              { details: { path: ['note'], string_contains: query.search } },
            ],
          }
        : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.auditLog.findMany({
        where,
        include: { user: { select: { id: true, fullName: true, email: true, role: true } } },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.auditLog.count({ where }),
    ]);
    return paginate(await this.withLabels(data), total, page, limit);
  }

  /**
   * Gắn nhãn dễ đọc (tên người, mã đơn, mã vận đơn...) cho các id nằm trong details,
   * để nhật ký hiển thị "đã sửa gì, trên đối tượng nào" thay vì chuỗi UUID.
   */
  private async withLabels<T extends { details: Prisma.JsonValue | null }>(rows: T[]) {
    const wanted: Record<string, Set<string>> = {
      user: new Set(), requisition: new Set(), campaign: new Set(), pledge: new Set(),
      item: new Set(), plan: new Set(), waybill: new Set(), transfer: new Set(),
    };
    const kindOf: Record<string, keyof typeof wanted> = {
      userId: 'user', reporterId: 'user', volunteerId: 'user',
      requisitionId: 'requisition', campaignId: 'campaign', pledgeId: 'pledge',
      itemId: 'item', resourceItemId: 'item', planId: 'plan', waybillId: 'waybill', transferId: 'transfer',
    };
    const isId = (value: unknown): value is string => typeof value === 'string' && /^[0-9a-f-]{36}$/i.test(value);
    for (const row of rows) {
      const details = row.details;
      if (!details || typeof details !== 'object' || Array.isArray(details)) continue;
      for (const [key, value] of Object.entries(details)) {
        if (kindOf[key] && isId(value)) wanted[kindOf[key]].add(value);
      }
    }
    const ids = (kind: string) => Array.from(wanted[kind]);
    const [users, requisitions, campaigns, pledges, items, plans, waybills, transfers] = await Promise.all([
      ids('user').length ? this.prisma.user.findMany({ where: { id: { in: ids('user') } }, select: { id: true, fullName: true, email: true } }) : [],
      ids('requisition').length ? this.prisma.supportRequisition.findMany({ where: { id: { in: ids('requisition') } }, select: { id: true, code: true, title: true } }) : [],
      ids('campaign').length ? this.prisma.campaign.findMany({ where: { id: { in: ids('campaign') } }, select: { id: true, title: true } }) : [],
      ids('pledge').length ? this.prisma.donationPledge.findMany({ where: { id: { in: ids('pledge') } }, select: { id: true, code: true } }) : [],
      ids('item').length ? this.prisma.resourceItem.findMany({ where: { id: { in: ids('item') } }, select: { id: true, name: true, qrCode: true } }) : [],
      ids('plan').length ? this.prisma.allocationPlan.findMany({ where: { id: { in: ids('plan') } }, select: { id: true, requisition: { select: { code: true } } } }) : [],
      ids('waybill').length ? this.prisma.waybill.findMany({ where: { id: { in: ids('waybill') } }, select: { id: true, code: true } }) : [],
      ids('transfer').length ? this.prisma.stockTransferOrder.findMany({ where: { id: { in: ids('transfer') } }, select: { id: true, code: true } }) : [],
    ]);
    const labels = new Map<string, string>();
    users.forEach((row) => labels.set(row.id, `${row.fullName} (${row.email})`));
    requisitions.forEach((row) => labels.set(row.id, `${row.code}${row.title ? ` · ${row.title}` : ''}`));
    campaigns.forEach((row) => labels.set(row.id, row.title));
    pledges.forEach((row) => labels.set(row.id, row.code));
    items.forEach((row) => labels.set(row.id, `${row.name} (${row.qrCode})`));
    plans.forEach((row) => labels.set(row.id, `Phương án ${row.requisition?.code ?? ''}`.trim()));
    waybills.forEach((row) => labels.set(row.id, row.code));
    transfers.forEach((row) => labels.set(row.id, row.code));

    return rows.map((row) => {
      const refs: Record<string, string> = {};
      const details = row.details;
      if (details && typeof details === 'object' && !Array.isArray(details)) {
        for (const [key, value] of Object.entries(details)) {
          if (kindOf[key] && isId(value) && labels.has(value)) refs[key] = labels.get(value) as string;
        }
      }
      return { ...row, refs };
    });
  }
}
