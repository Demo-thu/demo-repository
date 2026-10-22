import { Body, Controller, Get, Patch, Req } from '@nestjs/common';
import { CurrentUser } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { AuthService } from './auth.service';
import { UpdateProfileDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Patch('me')
  updateMe(@CurrentUser() user: AuthenticatedUser, @Body() dto: UpdateProfileDto, @Req() req: HttpRequestContext) {
    return this.auth.updateMe(user.id, dto, readClientIp(req.headers, req.ip));
  }

  @Get('me')
  me(@CurrentUser() user: AuthenticatedUser) {
    return this.auth.me(user.id);
  }
}
