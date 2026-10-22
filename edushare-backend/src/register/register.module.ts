import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MailModule } from '../mail/mail.module';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [AuthModule, MailModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
