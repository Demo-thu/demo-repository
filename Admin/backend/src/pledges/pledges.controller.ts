import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { CreatePledgeDto, QueryPledgeDto, ReceivePledgeDto, UpdatePledgeDto } from './dto';
import { PledgesService } from './pledges.service';

@Controller('pledges')
export class PledgesController {
  constructor(private readonly pledges: PledgesService) {}

  @Post()
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.DONOR)
  create(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreatePledgeDto, @Req() req: HttpRequestContext) {
    return this.pledges.create(actor, dto, readClientIp(req.headers, req.ip));
  }

  @Get()
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.DONOR, Role.WAREHOUSE_STAFF)
  list(@CurrentUser() actor: AuthenticatedUser, @Query() query: QueryPledgeDto) {
    return this.pledges.list(actor, query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.DONOR, Role.WAREHOUSE_STAFF)
  get(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.pledges.get(actor, id);
  }

  @Get(':id/receipt')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.DONOR)
  receipt(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.pledges.receipt(actor, id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  update(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdatePledgeDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.pledges.update(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/verify')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  verify(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Req() req: HttpRequestContext,
  ) {
    return this.pledges.verify(actor, id, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/cancel')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.DONOR)
  cancel(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Req() req: HttpRequestContext,
  ) {
    return this.pledges.cancel(actor, id, readClientIp(req.headers, req.ip));
  }

  @Post(':id/receive')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  receive(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: ReceivePledgeDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.pledges.receive(actor, id, dto, readClientIp(req.headers, req.ip));
  }
}
