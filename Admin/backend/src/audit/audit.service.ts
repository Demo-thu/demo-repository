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
    return paginate(data, total, page, limit);
  }
}
