import { Body, Controller, Post, Req } from '@nestjs/common';
import { CurrentUser, Public } from '../../../../Admin/backend/src/common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../../../../Admin/backend/src/common/types';
import { readClientIp } from '../../../../Admin/backend/src/common/utils';
import { LoginDto, RefreshDto } from './dto';
import { LoginService } from './login.service';

@Controller('auth')
export class LoginController {
  constructor(private readonly login: LoginService) {}

  @Public()
  @Post('login')
  signIn(@Body() dto: LoginDto, @Req() req: HttpRequestContext) {
    return this.login.login(dto, readClientIp(req.headers, req.ip));
  }

  @Public()
  @Post('refresh')
  refresh(@Body() dto: RefreshDto) {
    return this.login.refresh(dto);
  }

  @Post('logout')
  logout(@CurrentUser() user: AuthenticatedUser, @Req() req: HttpRequestContext) {
    return this.login.logout(user.id, readClientIp(req.headers, req.ip));
  }
}
