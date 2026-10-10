import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { createHmac, randomInt, timingSafeEqual } from 'crypto';
import { AuditService } from '../../../../Admin/backend/src/audit/audit.service';
import { TokenService } from '../../../../Admin/backend/src/auth/token.service';
import { publicUserSelect } from '../../../../Admin/backend/src/common/utils';
import { MailService } from '../../../../Admin/backend/src/mail/mail.service';
import { PrismaService } from '../../../../Admin/backend/src/prisma/prisma.service';
import { RegisterDto, VerifyRegisterDto } from './dto';

export const CODE_TTL_MINUTES = 5;
export const MAX_ATTEMPTS = 3;
export const RESEND_SECONDS = 60;
const MAX_SENDS_PER_HOUR = 5;
const HOUR_MS = 60 * 60 * 1000;

const INVALID_CODE_MESSAGE = 'Mã xác thực không đúng hoặc đã hết hạn. Vui lòng gửi lại mã mới.';

interface PendingPayload {
  role: Role;
  passwordHash: string;
  fullName: string;
  phone?: string;
  organizationName?: string;
  organizationCode?: string;
  address?: string;
  city?: string;
  district?: string;
}

/**
 * Đăng ký 2 bước (Nhà hảo tâm / Đại diện trường học):
 * 1) POST /auth/register         -> kiểm tra hồ sơ, gửi mã 6 số qua Gmail. CHƯA tạo tài khoản.
 * 2) POST /auth/register/verify  -> nhập đúng mã (tối đa 3 lần sai) thì mới tạo tài khoản và đăng nhập.
 */
@Injectable()
export class RegisterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokens: TokenService,
    private readonly audit: AuditService,
    private readonly mail: MailService,
    private readonly config: ConfigService,
  ) {}

  private hash(email: string, code: string): string {
    const secret = this.config.getOrThrow<string>('JWT_REFRESH_SECRET');
    return createHmac('sha256', secret).update(`register:${email}:${code}`).digest('hex');
  }

  private sameHash(a: string, b: string): boolean {
    const left = Buffer.from(a, 'hex');
    const right = Buffer.from(b, 'hex');
    return left.length === right.length && timingSafeEqual(left, right);
  }

  async requestCode(dto: RegisterDto) {
    const email = dto.email.trim().toLowerCase();
    if (await this.prisma.user.findUnique({ where: { email } })) {
      throw new ConflictException('Email đã được đăng ký');
    }
    // Dọn các hồ sơ chờ xác thực đã quá hạn từ lâu.
    await this.prisma.pendingRegistration.deleteMany({ where: { expiresAt: { lt: new Date(Date.now() - HOUR_MS) } } });

    const now = Date.now();
    const existing = await this.prisma.pendingRegistration.findUnique({ where: { email } });
    let sendCount = 1;
    let windowStartedAt = new Date(now);
    if (existing) {
      const wait = Math.ceil((existing.lastSentAt.getTime() + RESEND_SECONDS * 1000 - now) / 1000);
      if (wait > 0) {
        throw new HttpException(`Vui lòng đợi ${wait} giây trước khi gửi lại mã.`, HttpStatus.TOO_MANY_REQUESTS);
      }
      const windowOpen = now - existing.windowStartedAt.getTime() < HOUR_MS;
      if (windowOpen && existing.sendCount >= MAX_SENDS_PER_HOUR) {
        throw new HttpException('Bạn đã yêu cầu quá nhiều mã trong 1 giờ. Vui lòng thử lại sau.', HttpStatus.TOO_MANY_REQUESTS);
      }
      sendCount = windowOpen ? existing.sendCount + 1 : 1;
      windowStartedAt = windowOpen ? existing.windowStartedAt : new Date(now);
    }

    const clean = (value?: string) => value?.trim() || undefined;
    const payload: PendingPayload = {
      role: dto.accountType === 'SCHOOL_REP' ? Role.SCHOOL_REP : Role.DONOR,
      passwordHash: await bcrypt.hash(dto.password, this.tokens.rounds()),
      fullName: dto.fullName.trim(),
      phone: clean(dto.phone),
      organizationName: clean(dto.organizationName),
      organizationCode: clean(dto.organizationCode),
      address: clean(dto.address),
      city: clean(dto.city),
      district: clean(dto.district),
    };
    const code = String(randomInt(0, 1_000_000)).padStart(6, '0');
    const data = {
      payload: payload as unknown as Prisma.InputJsonValue,
      codeHash: this.hash(email, code),
      expiresAt: new Date(now + CODE_TTL_MINUTES * 60 * 1000),
      attempts: 0,
      sendCount,
      windowStartedAt,
      lastSentAt: new Date(now),
    };
    const record = await this.prisma.pendingRegistration.upsert({
      where: { email },
      create: { email, ...data },
      update: data,
    });
    try {
      await this.mail.sendCode('REGISTER', email, payload.fullName, code, CODE_TTL_MINUTES);
    } catch (error) {
      await this.prisma.pendingRegistration.delete({ where: { id: record.id } }).catch(() => undefined);
      throw error;
    }
    return {
      message: 'Mã xác thực 6 chữ số đã được gửi tới email của bạn. Vui lòng kiểm tra hộp thư (cả mục Spam).',
      email,
      expiresInSeconds: CODE_TTL_MINUTES * 60,
      resendAfterSeconds: RESEND_SECONDS,
    };
  }

  async verify(dto: VerifyRegisterDto, ipAddress: string | null) {
    const email = dto.email.trim().toLowerCase();
    const pending = await this.prisma.pendingRegistration.findUnique({ where: { email } });
    if (!pending || pending.expiresAt.getTime() < Date.now()) {
      throw new BadRequestException(INVALID_CODE_MESSAGE);
    }
    if (pending.attempts >= MAX_ATTEMPTS) {
      throw new BadRequestException('Bạn đã nhập sai quá 3 lần. Mã đã bị vô hiệu, vui lòng gửi lại mã mới.');
    }
    if (!this.sameHash(pending.codeHash, this.hash(email, dto.code))) {
      const attempts = pending.attempts + 1;
      await this.prisma.pendingRegistration.update({ where: { id: pending.id }, data: { attempts } });
      const left = MAX_ATTEMPTS - attempts;
      throw new BadRequestException(
        left > 0 ? `Mã xác thực không đúng. Bạn còn ${left} lần thử.` : 'Bạn đã nhập sai quá 3 lần. Mã đã bị vô hiệu, vui lòng gửi lại mã mới.',
      );
    }

    if (await this.prisma.user.findUnique({ where: { email } })) {
      await this.prisma.pendingRegistration.delete({ where: { id: pending.id } });
      throw new ConflictException('Email đã được đăng ký');
    }
    const data = pending.payload as unknown as PendingPayload;
    const user = await this.prisma.user.create({
      data: {
        email,
        passwordHash: data.passwordHash,
        fullName: data.fullName,
        phone: data.phone,
        role: data.role,
        profile: {
          create: {
            organizationName: data.organizationName,
            organizationCode: data.organizationCode,
            address: data.address,
            city: data.city,
            district: data.district,
          },
        },
      },
      select: publicUserSelect,
    });
    await this.prisma.pendingRegistration.delete({ where: { id: pending.id } });
    const tokens = await this.tokens.issue(user.id, user.email, user.role);
    await this.audit.log({
      userId: user.id,
      action: 'AUTH_REGISTER',
      resource: 'User',
      details: { email: user.email, role: user.role, emailVerified: true },
      ipAddress,
    });
    return { user, ...tokens };
  }
}
