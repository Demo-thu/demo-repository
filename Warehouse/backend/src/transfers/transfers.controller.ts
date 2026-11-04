import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../../../../Admin/backend/src/common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../../../../Admin/backend/src/common/types';
import { readClientIp } from '../../../../Admin/backend/src/common/utils';
import { CreateTransferDto, QueryTransferDto } from './dto';
import { TransfersService } from './transfers.service';

/** Admin và kho cùng xem được lệnh điều chuyển (kể cả "Đang vận chuyển"); chỉ kho tạo và xử lý lệnh. */
@Controller('transfers')
@Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
export class TransfersController {
  constructor(private readonly transfers: TransfersService) {}

  @Post()
  @Roles(Role.WAREHOUSE_STAFF)
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
  @Roles(Role.WAREHOUSE_STAFF)
  dispatch(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.transfers.dispatch(actor, id, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/receive')
  @Roles(Role.WAREHOUSE_STAFF)
  receive(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.transfers.receive(actor, id, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/cancel')
  @Roles(Role.WAREHOUSE_STAFF)
  cancel(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.transfers.cancel(actor, id, readClientIp(req.headers, req.ip));
  }
}
