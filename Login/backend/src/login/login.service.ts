import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuditService } from '../../../../Admin/backend/src/audit/audit.service';
import { TokenService } from '../../../../Admin/backend/src/auth/token.service';
import { publicUserSelect } from '../../../../Admin/backend/src/common/utils';
import { PrismaService } from '../../../../Admin/backend/src/prisma/prisma.service';
import { LoginDto, RefreshDto } from './dto';

/** Đăng nhập một cửa: mọi vai trò (admin, nhà hảo tâm, trường, kho, tình nguyện viên) dùng chung API này. */
@Injectable()
export class LoginService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokens: TokenService,
    private readonly audit: AuditService,
  ) {}

  async login(dto: LoginDto, ipAddress: string | null) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email.trim().toLowerCase() } });
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
    const tokens = await this.tokens.issue(user.id, user.email, user.role);
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
    const payload = await this.tokens.verifyRefresh(dto.refreshToken);
    const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user || !user.refreshTokenHash || user.status !== 'ACTIVE') {
      throw new UnauthorizedException('Refresh token không hợp lệ');
    }
    const matched = await this.tokens.matchesRefresh(dto.refreshToken, user.refreshTokenHash);
    if (!matched) {
      await this.tokens.revoke(user.id);
      throw new UnauthorizedException('Refresh token đã bị thu hồi');
    }
    const tokens = await this.tokens.issue(user.id, user.email, user.role);
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
    await this.tokens.revoke(userId);
    await this.audit.log({ userId, action: 'AUTH_LOGOUT', resource: 'User', ipAddress });
    return { success: true };
  }
}
