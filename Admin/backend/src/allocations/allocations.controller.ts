import { Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { AllocationsService } from './allocations.service';
import { QueryAllocationDto } from './dto';

@Controller('allocations')
@Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
export class AllocationsController {
  constructor(private readonly allocations: AllocationsService) {}

  @Post('match/:requisitionId')
  match(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('requisitionId', ParseUUIDPipe) requisitionId: string,
    @Req() req: HttpRequestContext,
  ) {
    return this.allocations.match(actor, requisitionId, readClientIp(req.headers, req.ip));
  }

  @Get()
  list(@Query() query: QueryAllocationDto) {
    return this.allocations.list(query);
  }

  @Get(':id')
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.allocations.get(id);
  }

  @Patch(':id/confirm')
  @Roles(Role.ADMIN)
  confirm(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.allocations.confirm(actor, id, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/cancel')
  @Roles(Role.ADMIN)
  cancel(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.allocations.cancel(actor, id, readClientIp(req.headers, req.ip));
  }
}
