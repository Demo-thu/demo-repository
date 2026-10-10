import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { Public } from '../../../../Admin/backend/src/common/decorators';
import { HttpRequestContext } from '../../../../Admin/backend/src/common/types';
import { readClientIp } from '../../../../Admin/backend/src/common/utils';
import { RegisterDto, VerifyRegisterDto } from './dto';
import { RegisterService } from './register.service';

@Controller('auth')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  /** Bước 1: gửi mã xác thực qua email (chưa tạo tài khoản). Gọi lại để gửi lại mã. */
  @Public()
  @Post('register')
  @HttpCode(200)
  register(@Body() dto: RegisterDto) {
    return this.registerService.requestCode(dto);
  }

  /** Bước 2: nhập đúng mã thì mới tạo tài khoản và trả về phiên đăng nhập. */
  @Public()
  @Post('register/verify')
  @HttpCode(201)
  verify(@Body() dto: VerifyRegisterDto, @Req() req: HttpRequestContext) {
    return this.registerService.verify(dto, readClientIp(req.headers, req.ip));
  }
}
