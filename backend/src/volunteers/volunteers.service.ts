import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { AuthenticatedUser } from '../common/types';
import { pageArgs, paginate, publicUserSelect } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { CreateShiftDto, QueryShiftDto } from './dto';

@Injectable()
export class VolunteersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async createShift(actor: AuthenticatedUser, dto: CreateShiftDto, ipAddress: string | null) {
    const volunteerId = dto.volunteerId ?? actor.id;
    if (actor.role === Role.VOLUNTEER && volunteerId !== actor.id) {
      throw new ForbiddenException('Tình nguyện viên chỉ tạo ca của chính mình');
    }
    const volunteer = await this.prisma.user.findUnique({ where: { id: volunteerId } });
    if (!volunteer || volunteer.role !== Role.VOLUNTEER || volunteer.status !== 'ACTIVE') {
      throw new BadRequestException('Tình nguyện viên không hợp lệ');
    }
    const warehouse = await this.prisma.warehouse.findUnique({ where: { id: dto.warehouseId } });
    if (!warehouse) {
      throw new NotFoundException('Không tìm thấy kho');
    }
    const shift = await this.prisma.volunteerShift.create({
      data: {
        volunteerId,
        warehouseId: dto.warehouseId,
        shiftDate: new Date(dto.shiftDate),
        shiftType: dto.shiftType,
      },
      include: {
        volunteer: { select: publicUserSelect },
        warehouse: { select: { id: true, code: true, name: true, city: true } },
      },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'VOLUNTEER_SHIFT_CREATED',
      resource: 'VolunteerShift',
      details: { shiftId: shift.id, volunteerId, shiftType: dto.shiftType },
      ipAddress,
    });
    return shift;
  }

  async list(actor: AuthenticatedUser, query: QueryShiftDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.VolunteerShiftWhereInput = {
      ...(actor.role === Role.VOLUNTEER ? { volunteerId: actor.id } : {}),
      ...(query.volunteerId && actor.role !== Role.VOLUNTEER ? { volunteerId: query.volunteerId } : {}),
      ...(query.warehouseId ? { warehouseId: query.warehouseId } : {}),
      ...(query.shiftType ? { shiftType: query.shiftType } : {}),
      ...(query.from || query.to
        ? {
            shiftDate: {
              ...(query.from ? { gte: new Date(query.from) } : {}),
              ...(query.to ? { lte: new Date(query.to) } : {}),
            },
          }
        : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.volunteerShift.findMany({
        where,
        include: {
          volunteer: { select: publicUserSelect },
          warehouse: { select: { id: true, code: true, name: true, city: true } },
        },
        orderBy: { shiftDate: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.volunteerShift.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  async checkIn(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const shift = await this.requireShift(actor, id);
    if (shift.checkInAt) {
      throw new BadRequestException('Ca này đã điểm danh vào');
    }
    const updated = await this.prisma.volunteerShift.update({
      where: { id },
      data: { checkInAt: new Date() },
      include: {
        volunteer: { select: publicUserSelect },
        warehouse: { select: { id: true, code: true, name: true, city: true } },
      },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'VOLUNTEER_CHECK_IN',
      resource: 'VolunteerShift',
      details: { shiftId: id },
      ipAddress,
    });
    return updated;
  }

  async checkOut(actor: AuthenticatedUser, id: string, ipAddress: string | null) {
    const shift = await this.requireShift(actor, id);
    if (!shift.checkInAt) {
      throw new BadRequestException('Cần điểm danh vào trước khi kết ca');
    }
    if (shift.checkOutAt) {
      throw new BadRequestException('Ca này đã kết thúc');
    }
    const checkOutAt = new Date();
    const hours = Math.round(((checkOutAt.getTime() - shift.checkInAt.getTime()) / 3_600_000) * 100) / 100;
    const updated = await this.prisma.volunteerShift.update({
      where: { id },
      data: { checkOutAt, hoursContributed: Math.max(0, hours) },
      include: {
        volunteer: { select: publicUserSelect },
        warehouse: { select: { id: true, code: true, name: true, city: true } },
      },
    });
    await this.audit.log({
      userId: actor.id,
      action: 'VOLUNTEER_CHECK_OUT',
      resource: 'VolunteerShift',
      details: { shiftId: id, hoursContributed: updated.hoursContributed },
      ipAddress,
    });
    return updated;
  }

  async leaderboard() {
    const grouped = await this.prisma.volunteerShift.groupBy({
      by: ['volunteerId'],
      _sum: { hoursContributed: true },
      _count: { _all: true },
      orderBy: { _sum: { hoursContributed: 'desc' } },
      take: 20,
    });
    const users = await this.prisma.user.findMany({
      where: { id: { in: grouped.map((row) => row.volunteerId) } },
      select: publicUserSelect,
    });
    const byId = new Map(users.map((user) => [user.id, user]));
    return {
      data: grouped.map((row) => ({
        volunteer: byId.get(row.volunteerId) ?? null,
        shifts: row._count._all,
        hoursContributed: row._sum.hoursContributed ?? 0,
      })),
    };
  }

  private async requireShift(actor: AuthenticatedUser, id: string) {
    const shift = await this.prisma.volunteerShift.findUnique({ where: { id } });
    if (!shift) {
      throw new NotFoundException('Không tìm thấy ca tình nguyện');
    }
    if (actor.role === Role.VOLUNTEER && shift.volunteerId !== actor.id) {
      throw new ForbiddenException('Không có quyền thao tác ca này');
    }
    return shift;
  }
}
