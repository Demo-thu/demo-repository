import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { CreateShiftDto, QueryShiftDto } from './dto';
import { VolunteersService } from './volunteers.service';

@Controller('volunteers')
export class VolunteersController {
  constructor(private readonly volunteers: VolunteersService) {}

  @Post('shifts')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER)
  createShift(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreateShiftDto, @Req() req: HttpRequestContext) {
    return this.volunteers.createShift(actor, dto, readClientIp(req.headers, req.ip));
  }

  @Get('shifts')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER)
  list(@CurrentUser() actor: AuthenticatedUser, @Query() query: QueryShiftDto) {
    return this.volunteers.list(actor, query);
  }

  @Post('shifts/:id/check-in')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER, Role.WAREHOUSE_STAFF)
  checkIn(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.volunteers.checkIn(actor, id, readClientIp(req.headers, req.ip));
  }

  @Post('shifts/:id/check-out')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER, Role.WAREHOUSE_STAFF)
  checkOut(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.volunteers.checkOut(actor, id, readClientIp(req.headers, req.ip));
  }

  @Get('leaderboard')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER)
  leaderboard() {
    return this.volunteers.leaderboard();
  }
}
