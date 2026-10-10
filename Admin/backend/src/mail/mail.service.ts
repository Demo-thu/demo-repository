import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

const BRAND = 'EduShare Vietnam';

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export type CodePurpose = 'RESET_PASSWORD' | 'REGISTER';

const PURPOSES: Record<CodePurpose, { title: string; intro: string; subject: string; ignore: string }> = {
  RESET_PASSWORD: {
    title: 'Mã xác thực đặt lại mật khẩu',
    intro: `bạn vừa yêu cầu đặt lại mật khẩu tài khoản ${BRAND}.`,
    subject: 'Mã xác thực đặt lại mật khẩu',
    ignore: 'Nếu không phải bạn yêu cầu, hãy bỏ qua email này, mật khẩu của bạn vẫn an toàn.',
  },
  REGISTER: {
    title: 'Mã xác thực đăng ký tài khoản',
    intro: `bạn vừa đăng ký tài khoản ${BRAND}. Nhập mã bên dưới để hoàn tất đăng ký.`,
    subject: 'Mã xác thực đăng ký tài khoản',
    ignore: 'Nếu không phải bạn đăng ký, hãy bỏ qua email này, sẽ không có tài khoản nào được tạo.',
  },
};

/**
 * Gửi email qua SMTP (Gmail), dùng chung cho đăng ký và quên mật khẩu.
 * Cấu hình trong Admin\backend\.env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL.
 */
@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: Transporter | null = null;

  constructor(private readonly config: ConfigService) {}

  private getTransporter(): Transporter {
    if (this.transporter) return this.transporter;
    const host = this.config.get<string>('SMTP_HOST');
    const user = this.config.get<string>('SMTP_USER');
    const pass = this.config.get<string>('SMTP_PASS');
    if (!host || !user || !pass) {
      throw new ServiceUnavailableException('Hệ thống chưa cấu hình email gửi mã xác thực (SMTP).');
    }
    const port = Number(this.config.get<string>('SMTP_PORT') ?? '587');
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass: pass.replace(/\s+/g, '') },
    });
    return this.transporter;
  }

  private from(): string {
    const configured = this.config.get<string>('FROM_EMAIL');
    if (configured) {
      // Đổi tên hiển thị cũ (EventMap) sang EduShare Vietnam, giữ nguyên địa chỉ gửi.
      return configured.replace(/EventMap/gi, BRAND);
    }
    return `${BRAND} <${this.config.get<string>('SMTP_USER')}>`;
  }

  async sendCode(purpose: CodePurpose, to: string, fullName: string, code: string, minutes: number): Promise<void> {
    const copy = PURPOSES[purpose];
    const name = escapeHtml(fullName || 'bạn');
    const digits = code
      .split('')
      .map((digit) => `<span style="display:inline-block;width:40px;height:52px;line-height:52px;margin:0 3px;border-radius:10px;background:#eff4ff;border:1px solid #bfdbfe;font-size:26px;font-weight:700;color:#1d4ed8;text-align:center">${digit}</span>`)
      .join('');
    const html = `
<div style="background:#f8f9ff;padding:32px 12px;font-family:Segoe UI,Arial,sans-serif;color:#0f172a">
  <div style="max-width:480px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden">
    <div style="background:#2563eb;padding:20px 28px;color:#ffffff">
      <div style="font-size:18px;font-weight:700">${BRAND}</div>
      <div style="font-size:12px;opacity:.85">Nâng bước tri thức học đường</div>
    </div>
    <div style="padding:28px">
      <h1 style="margin:0 0 8px;font-size:20px">${copy.title}</h1>
      <p style="margin:0 0 20px;font-size:14px;line-height:22px;color:#475569">Xin chào ${name}, ${copy.intro} Hãy nhập mã gồm 6 chữ số dưới đây để tiếp tục:</p>
      <div style="text-align:center;margin:0 0 20px">${digits}</div>
      <p style="margin:0 0 8px;font-size:13px;color:#475569">Mã có hiệu lực trong <b>${minutes} phút</b> và bị vô hiệu sau 3 lần nhập sai.</p>
      <p style="margin:0;font-size:13px;color:#b45309">Tuyệt đối không chia sẻ mã này cho bất kỳ ai, kể cả nhân viên ${BRAND}. ${copy.ignore}</p>
    </div>
    <div style="padding:14px 28px;background:#eff4ff;font-size:11px;color:#64748b">© ${new Date().getFullYear()} ${BRAND} · Email tự động, vui lòng không trả lời.</div>
  </div>
</div>`;
    const text = `${BRAND}\n\nXin chào ${fullName || 'bạn'},\n${copy.title}: ${code}\nMã có hiệu lực trong ${minutes} phút và bị vô hiệu sau 3 lần nhập sai.\nKhông chia sẻ mã này cho bất kỳ ai. ${copy.ignore}`;
    try {
      await this.getTransporter().sendMail({
        from: this.from(),
        to,
        subject: `[${BRAND}] ${copy.subject}: ${code}`,
        text,
        html,
      });
    } catch (error) {
      if (error instanceof ServiceUnavailableException) throw error;
      this.logger.error(`Không gửi được email tới ${to}: ${(error as Error).message}`);
      throw new ServiceUnavailableException('Không gửi được email xác thực. Vui lòng thử lại sau ít phút.');
    }
  }
}
