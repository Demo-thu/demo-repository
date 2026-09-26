import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CurrentUser, Public } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { AuthService } from './auth.service';
import { LoginDto, RefreshDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Public()
  @Post('register')
  register(@Body() dto: RegisterDto, @Req() req: HttpRequestContext) {
    return this.auth.register(dto, readClientIp(req.headers, req.ip));
  }

  @Public()
  @Post('login')
  login(@Body() dto: LoginDto, @Req() req: HttpRequestContext) {
    return this.auth.login(dto, readClientIp(req.headers, req.ip));
  }

  @Public()
  @Post('refresh')
  refresh(@Body() dto: RefreshDto) {
    return this.auth.refresh(dto);
  }

  @Post('logout')
  logout(@CurrentUser() user: AuthenticatedUser, @Req() req: HttpRequestContext) {
    return this.auth.logout(user.id, readClientIp(req.headers, req.ip));
  }

  @Get('me')
  me(@CurrentUser() user: AuthenticatedUser) {
    return this.auth.me(user.id);
  }
}
