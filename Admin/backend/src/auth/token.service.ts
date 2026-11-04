import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { createHash, randomUUID } from 'crypto';
import { JwtPayload } from '../common/types';
import { PrismaService } from '../prisma/prisma.service';

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

/**
 * Cấp, kiểm tra và thu hồi token. Dùng chung cho các cổng Login, Register và ForgotPassword
 * để cả ba cùng một cách đăng nhập vào mọi cổng chức năng.
 */
@Injectable()
export class TokenService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async issue(userId: string, email: string, role: Role): Promise<TokenPair> {
    const payload: JwtPayload = { sub: userId, email, role };
    const accessToken = await this.jwt.signAsync(payload, {
      secret: this.config.getOrThrow<string>('JWT_ACCESS_SECRET'),
      expiresIn: 60 * 15,
    });
    const refreshToken = await this.jwt.signAsync(payload, {
      secret: this.config.getOrThrow<string>('JWT_REFRESH_SECRET'),
      expiresIn: 60 * 60 * 24 * 7,
      jwtid: randomUUID(),
    });
    const refreshTokenHash = await bcrypt.hash(this.fingerprint(refreshToken), this.rounds());
    await this.prisma.user.update({ where: { id: userId }, data: { refreshTokenHash } });
    return { accessToken, refreshToken };
  }

  /** bcrypt chỉ đọc 72 byte đầu nên phải băm SHA-256 trước, nếu không mọi refresh token của cùng user sẽ khớp nhau. */
  private fingerprint(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }

  matchesRefresh(token: string, storedHash: string): Promise<boolean> {
    return bcrypt.compare(this.fingerprint(token), storedHash);
  }

  async verifyRefresh(refreshToken: string): Promise<JwtPayload> {
    try {
      return await this.jwt.verifyAsync<JwtPayload>(refreshToken, {
        secret: this.config.getOrThrow<string>('JWT_REFRESH_SECRET'),
      });
    } catch {
      throw new UnauthorizedException('Refresh token không hợp lệ');
    }
  }

  /** Thu hồi mọi phiên đăng nhập của tài khoản (đăng xuất, đổi mật khẩu). */
  async revoke(userId: string): Promise<void> {
    await this.prisma.user.update({ where: { id: userId }, data: { refreshTokenHash: null } });
  }

  rounds(): number {
    const configured = Number(this.config.get<string>('BCRYPT_ROUNDS') ?? '12');
    return Number.isFinite(configured) && configured >= 8 ? configured : 12;
  }
}
