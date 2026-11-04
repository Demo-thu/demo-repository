import { Module } from '@nestjs/common';
import { AuthModule } from '../../../../Admin/backend/src/auth/auth.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [AuthModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
