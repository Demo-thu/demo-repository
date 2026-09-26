import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { CreateTransferDto, QueryTransferDto } from './dto';
import { TransfersService } from './transfers.service';

@Controller('transfers')
@Roles(Role.ADMIN, Role.COORDINATOR, Role.WAREHOUSE_STAFF)
export class TransfersController {
  constructor(private readonly transfers: TransfersService) {}

  @Post()
  create(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreateTransferDto, @Req() req: HttpRequestContext) {
    return this.transfers.create(actor, dto, readClientIp(req.headers, req.ip));
  }

  @Get()
  list(@Query() query: QueryTransferDto) {
    return this.transfers.list(query);
  }

  @Get(':id')
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.transfers.get(id);
  }

  @Patch(':id/dispatch')
  dispatch(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.transfers.dispatch(actor, id, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/receive')
  receive(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.transfers.receive(actor, id, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/cancel')
  cancel(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.transfers.cancel(actor, id, readClientIp(req.headers, req.ip));
  }
}
