import { Injectable } from '@nestjs/common';
import { AuditService } from '../audit/audit.service';
import { publicUserSelect } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './dto';

/**
 * Hồ sơ tài khoản đang đăng nhập. Đăng nhập, đăng ký và quên mật khẩu nằm ở các thư mục
 * Login, Register và ForgotPassword (mỗi chức năng một folder riêng).
 */
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

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
}
