import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { AuditService } from '../audit/audit.service';
import { JwtPayload } from '../common/types';
import { publicUserSelect } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RefreshDto, RegisterDto, UpdateProfileDto } from './dto';

interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly audit: AuditService,
  ) {}

  async register(dto: RegisterDto, ipAddress: string | null) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });
    if (existing) {
      throw new ConflictException('Email đã được đăng ký');
    }
    const passwordHash = await bcrypt.hash(dto.password, this.rounds());
    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase(),
        passwordHash,
        fullName: dto.fullName.trim(),
        phone: dto.phone,
        role: Role.DONOR,
        profile: {
          create: {
            organizationName: dto.organizationName,
            address: dto.address,
            city: dto.city,
            district: dto.district,
          },
        },
      },
      select: publicUserSelect,
    });
    const tokens = await this.issueTokens(user.id, user.email, user.role);
    await this.audit.log({
      userId: user.id,
      action: 'AUTH_REGISTER',
      resource: 'User',
      details: { email: user.email, role: user.role },
      ipAddress,
    });
    return { user, ...tokens };
  }

  async login(dto: LoginDto, ipAddress: string | null) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });
    if (!user) {
      throw new UnauthorizedException('Email hoặc mật khẩu không đúng');
    }
    const matched = await bcrypt.compare(dto.password, user.passwordHash);
    if (!matched) {
      throw new UnauthorizedException('Email hoặc mật khẩu không đúng');
    }
    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedException('Tài khoản đã bị khóa');
    }
    const tokens = await this.issueTokens(user.id, user.email, user.role);
    const profile = await this.prisma.user.findUnique({ where: { id: user.id }, select: publicUserSelect });
    await this.audit.log({
      userId: user.id,
      action: 'AUTH_LOGIN',
      resource: 'User',
      ipAddress,
    });
    return { user: profile, ...tokens };
  }

  async refresh(dto: RefreshDto) {
    let payload: JwtPayload;
    try {
      payload = await this.jwt.verifyAsync<JwtPayload>(dto.refreshToken, {
        secret: this.config.getOrThrow<string>('JWT_REFRESH_SECRET'),
      });
    } catch {
      throw new UnauthorizedException('Refresh token không hợp lệ');
    }
    const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user || !user.refreshTokenHash || user.status !== 'ACTIVE') {
      throw new UnauthorizedException('Refresh token không hợp lệ');
    }
    const matched = await bcrypt.compare(dto.refreshToken, user.refreshTokenHash);
    if (!matched) {
      await this.prisma.user.update({ where: { id: user.id }, data: { refreshTokenHash: null } });
      throw new UnauthorizedException('Refresh token đã bị thu hồi');
    }
    const tokens = await this.issueTokens(user.id, user.email, user.role);
    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        status: user.status,
      },
      ...tokens,
    };
  }

  async logout(userId: string, ipAddress: string | null) {
    await this.prisma.user.update({ where: { id: userId }, data: { refreshTokenHash: null } });
    await this.audit.log({ userId, action: 'AUTH_LOGOUT', resource: 'User', ipAddress });
    return { success: true };
  }

  async updateMe(userId: string, dto: UpdateProfileDto, ipAddress: string | null) {
    const phone = dto.phone?.trim();
    const before = await this.prisma.user.findUnique({ where: { id: userId }, select: { fullName: true, phone: true } });
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { fullName: dto.fullName.trim(), phone: phone ? phone : null },
      select: publicUserSelect,
    });
    await this.audit.log({
      userId,
      action: 'PROFILE_UPDATED',
      resource: 'User',
      details: {
        userId,
        changes: [
          { field: 'fullName', label: 'Họ tên', from: before?.fullName ?? null, to: user.fullName },
          { field: 'phone', label: 'Số điện thoại', from: before?.phone ?? null, to: user.phone ?? null },
        ].filter((change) => change.from !== change.to),
      },
      ipAddress,
    });
    return user;
  }

  async me(userId: string) {
    return this.prisma.user.findUnique({ where: { id: userId }, select: publicUserSelect });
  }

  private async issueTokens(userId: string, email: string, role: Role): Promise<TokenPair> {
    const payload: JwtPayload = { sub: userId, email, role };
    const accessToken = await this.jwt.signAsync(payload, {
      secret: this.config.getOrThrow<string>('JWT_ACCESS_SECRET'),
      expiresIn: 60 * 15,
    });
    const refreshToken = await this.jwt.signAsync(payload, {
      secret: this.config.getOrThrow<string>('JWT_REFRESH_SECRET'),
      expiresIn: 60 * 60 * 24 * 7,
    });
    const refreshTokenHash = await bcrypt.hash(refreshToken, this.rounds());
    await this.prisma.user.update({ where: { id: userId }, data: { refreshTokenHash } });
    return { accessToken, refreshToken };
  }

  private rounds(): number {
    const configured = Number(this.config.get<string>('BCRYPT_ROUNDS') ?? '12');
    return Number.isFinite(configured) && configured >= 8 ? configured : 12;
  }
}
