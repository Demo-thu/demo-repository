import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { Public } from '../../../../Admin/backend/src/common/decorators';
import { HttpRequestContext } from '../../../../Admin/backend/src/common/types';
import { readClientIp } from '../../../../Admin/backend/src/common/utils';
import { ForgotPasswordDto, ResetPasswordDto } from './dto';
import { ForgotPasswordService } from './forgot-password.service';

@Controller('auth')
export class ForgotPasswordController {
  constructor(private readonly forgot: ForgotPasswordService) {}

  @Public()
  @Post('forgot-password')
  @HttpCode(200)
  request(@Body() dto: ForgotPasswordDto, @Req() req: HttpRequestContext) {
    return this.forgot.requestCode(dto, readClientIp(req.headers, req.ip));
  }

  @Public()
  @Post('reset-password')
  @HttpCode(200)
  reset(@Body() dto: ResetPasswordDto, @Req() req: HttpRequestContext) {
    return this.forgot.resetPassword(dto, readClientIp(req.headers, req.ip));
  }
}
