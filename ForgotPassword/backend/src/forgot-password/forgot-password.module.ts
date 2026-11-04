import { Module } from '@nestjs/common';
import { AuthModule } from '../../../../Admin/backend/src/auth/auth.module';
import { MailModule } from '../../../../Admin/backend/src/mail/mail.module';
import { ForgotPasswordController } from './forgot-password.controller';
import { ForgotPasswordService } from './forgot-password.service';

@Module({
  imports: [AuthModule, MailModule],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService],
})
export class ForgotPasswordModule {}
