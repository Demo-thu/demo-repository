import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { createHmac, randomInt, timingSafeEqual } from 'crypto';
import { AuditService } from '../../../../Admin/backend/src/audit/audit.service';
import { TokenService } from '../../../../Admin/backend/src/auth/token.service';
import { PrismaService } from '../../../../Admin/backend/src/prisma/prisma.service';
import { MailService } from '../../../../Admin/backend/src/mail/mail.service';
import { ForgotPasswordDto, ResetPasswordDto } from './dto';

export const CODE_TTL_MINUTES = 5;
export const MAX_ATTEMPTS = 3;
export const RESEND_SECONDS = 60;
const MAX_CODES_PER_HOUR = 5;

const GENERIC_REQUEST_MESSAGE = 'Nếu email đã đăng ký, mã xác thực 6 chữ số đã được gửi. Vui lòng kiểm tra hộp thư (cả mục Spam).';
const INVALID_CODE_MESSAGE = 'Mã xác thực không đúng hoặc đã hết hạn. Vui lòng gửi lại mã mới.';

/**
 * Quên mật khẩu bằng OTP qua email:
 * 1) POST /auth/forgot-password  -> gửi mã 6 chữ số (hiệu lực 5 phút)
 * 2) POST /auth/reset-password   -> nhập mã + mật khẩu mới (tối đa 3 lần nhập sai)
 * Không tiết lộ email có tồn tại hay không; đổi mật khẩu xong sẽ thu hồi mọi phiên đăng nhập cũ.
 */
@Injectable()
export class ForgotPasswordService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
    private readonly tokens: TokenService,
    private readonly audit: AuditService,
    private readonly config: ConfigService,
  ) {}

  private hash(userId: string, code: string): string {
    const secret = this.config.getOrThrow<string>('JWT_REFRESH_SECRET');
    return createHmac('sha256', secret).update(`${userId}:${code}`).digest('hex');
  }

  private sameHash(a: string, b: string): boolean {
    const left = Buffer.from(a, 'hex');
    const right = Buffer.from(b, 'hex');
    return left.length === right.length && timingSafeEqual(left, right);
  }

  async requestCode(dto: ForgotPasswordDto, ipAddress: string | null) {
    const response = { message: GENERIC_REQUEST_MESSAGE, expiresInSeconds: CODE_TTL_MINUTES * 60, resendAfterSeconds: RESEND_SECONDS };
    const user = await this.prisma.user.findUnique({ where: { email: dto.email.trim().toLowerCase() } });
    if (!user || user.status !== 'ACTIVE') {
      return response;
    }

    const now = Date.now();
    const recent = await this.prisma.passwordResetCode.findMany({
      where: { userId: user.id, createdAt: { gte: new Date(now - 60 * 60 * 1000) } },
      orderBy: { createdAt: 'desc' },
      select: { createdAt: true },
    });
    const tooSoon = recent[0] && now - recent[0].createdAt.getTime() < RESEND_SECONDS * 1000;
    if (tooSoon || recent.length >= MAX_CODES_PER_HOUR) {
      return response;
    }

    const code = String(randomInt(0, 1_000_000)).padStart(6, '0');
    await this.prisma.passwordResetCode.updateMany({ where: { userId: user.id, usedAt: null }, data: { usedAt: new Date() } });
    const record = await this.prisma.passwordResetCode.create({
      data: { userId: user.id, codeHash: this.hash(user.id, code), expiresAt: new Date(now + CODE_TTL_MINUTES * 60 * 1000) },
    });
    try {
      await this.mail.sendCode('RESET_PASSWORD', user.email, user.fullName, code, CODE_TTL_MINUTES);
    } catch (error) {
      await this.prisma.passwordResetCode.delete({ where: { id: record.id } });
      throw error;
    }
    await this.audit.log({
      userId: user.id,
      action: 'PASSWORD_RESET_REQUESTED',
      resource: 'User',
      details: { userId: user.id },
      ipAddress,
    });
    return response;
  }

  async resetPassword(dto: ResetPasswordDto, ipAddress: string | null) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email.trim().toLowerCase() } });
    if (!user || user.status !== 'ACTIVE') {
      throw new BadRequestException(INVALID_CODE_MESSAGE);
    }
    const record = await this.prisma.passwordResetCode.findFirst({
      where: { userId: user.id, usedAt: null },
      orderBy: { createdAt: 'desc' },
    });
    if (!record || record.expiresAt.getTime() < Date.now()) {
      throw new BadRequestException(INVALID_CODE_MESSAGE);
    }
    if (record.attempts >= MAX_ATTEMPTS) {
      throw new BadRequestException('Bạn đã nhập sai quá 3 lần. Mã đã bị vô hiệu, vui lòng gửi lại mã mới.');
    }
    if (!this.sameHash(record.codeHash, this.hash(user.id, dto.code))) {
      const attempts = record.attempts + 1;
      await this.prisma.passwordResetCode.update({
        where: { id: record.id },
        data: { attempts, usedAt: attempts >= MAX_ATTEMPTS ? new Date() : null },
      });
      const left = MAX_ATTEMPTS - attempts;
      throw new BadRequestException(
        left > 0 ? `Mã xác thực không đúng. Bạn còn ${left} lần thử.` : 'Bạn đã nhập sai quá 3 lần. Mã đã bị vô hiệu, vui lòng gửi lại mã mới.',
      );
    }

    const passwordHash = await bcrypt.hash(dto.newPassword, this.tokens.rounds());
    await this.prisma.$transaction([
      this.prisma.user.update({ where: { id: user.id }, data: { passwordHash, refreshTokenHash: null } }),
      this.prisma.passwordResetCode.updateMany({ where: { userId: user.id, usedAt: null }, data: { usedAt: new Date() } }),
    ]);
    await this.audit.log({
      userId: user.id,
      action: 'PASSWORD_RESET_COMPLETED',
      resource: 'User',
      details: { userId: user.id },
      ipAddress,
    });
    return { success: true, message: 'Mật khẩu đã được đặt lại. Mọi phiên đăng nhập cũ đã được thu hồi.' };
  }
}
