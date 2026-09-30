import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { AuditService } from '../audit/audit.service';
import { AuthenticatedUser } from '../common/types';
import { pageArgs, paginate, publicUserSelect } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, QueryUserDto, UpdateRoleDto, UpdateStatusDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly config: ConfigService,
  ) {}

  async create(actor: AuthenticatedUser, dto: CreateUserDto, ipAddress: string | null) {
    const email = dto.email.toLowerCase();
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new ConflictException('Email đã được đăng ký');
    }
    const rounds = Number(this.config.get<string>('BCRYPT_ROUNDS') ?? '12');
    const passwordHash = await bcrypt.hash(dto.password, Number.isFinite(rounds) ? rounds : 12);
    const user = await this.prisma.user.create({
      data: {
        email,
        passwordHash,
        fullName: dto.fullName.trim(),
        phone: dto.phone,
        role: this.asWarehouseRole(dto.role),
        profile: dto.profile ? { create: dto.profile } : undefined,
      },
      select: publicUserSelect,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'USER_CREATED',
      resource: 'User',
      details: { userId: user.id, role: user.role },
      ipAddress,
    });
    return user;
  }

  async list(query: QueryUserDto) {
    const { page, limit, skip } = pageArgs(query.page, query.limit);
    const where: Prisma.UserWhereInput = {
      ...(query.role ? { role: query.role } : {}),
      ...(query.status ? { status: query.status } : {}),
      ...(query.search
        ? {
            OR: [
              { fullName: { contains: query.search, mode: 'insensitive' } },
              { email: { contains: query.search, mode: 'insensitive' } },
              { profile: { organizationName: { contains: query.search, mode: 'insensitive' } } },
            ],
          }
        : {}),
    };
    const [data, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        select: publicUserSelect,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.user.count({ where }),
    ]);
    return paginate(data, total, page, limit);
  }

  async get(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id }, select: publicUserSelect });
    if (!user) {
      throw new NotFoundException('Không tìm thấy người dùng');
    }
    return user;
  }

  async update(actor: AuthenticatedUser, id: string, dto: UpdateUserDto, ipAddress: string | null) {
    await this.ensureEditable(id);
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        fullName: dto.fullName?.trim(),
        phone: dto.phone,
        profile: dto.profile
          ? {
              upsert: {
                create: dto.profile,
                update: dto.profile,
              },
            }
          : undefined,
      },
      select: publicUserSelect,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'USER_UPDATED',
      resource: 'User',
      details: { userId: id },
      ipAddress,
    });
    return user;
  }

  async updateRole(actor: AuthenticatedUser, id: string, dto: UpdateRoleDto, ipAddress: string | null) {
    const found = await this.prisma.user.findUnique({ where: { id }, select: { id: true } });
    if (!found) {
      throw new NotFoundException('Không tìm thấy người dùng');
    }
    if (actor.id === id && dto.role !== Role.ADMIN) {
      throw new ConflictException('Không thể tự hạ quyền quản trị của chính mình');
    }
    const user = await this.prisma.user.update({
      where: { id },
      data: { role: this.asWarehouseRole(dto.role) },
      select: publicUserSelect,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'USER_ROLE_CHANGED',
      resource: 'User',
      details: { userId: id, role: user.role },
      ipAddress,
    });
    return user;
  }

  async updateStatus(actor: AuthenticatedUser, id: string, dto: UpdateStatusDto, ipAddress: string | null) {
    await this.ensureEditable(id);
    if (actor.id === id && dto.status === 'SUSPENDED') {
      throw new ConflictException('Không thể tự khóa tài khoản đang dùng');
    }
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        status: dto.status,
        refreshTokenHash: dto.status === 'SUSPENDED' ? null : undefined,
      },
      select: publicUserSelect,
    });
    await this.audit.log({
      userId: actor.id,
      action: 'USER_STATUS_CHANGED',
      resource: 'User',
      details: { userId: id, status: dto.status },
      ipAddress,
    });
    return user;
  }

  private asWarehouseRole(role: Role): Role {
    if (role === Role.INTAKE_STAFF || role === Role.COORDINATOR) {
      return Role.WAREHOUSE_STAFF;
    }
    return role;
  }

  private async ensureEditable(id: string): Promise<void> {
    const found = await this.prisma.user.findUnique({ where: { id }, select: { id: true, role: true } });
    if (!found) {
      throw new NotFoundException('Không tìm thấy người dùng');
    }
    if (found.role === Role.DONOR) {
      throw new ForbiddenException('Không được chỉnh sửa tài khoản nhà hảo tâm');
    }
  }
}
