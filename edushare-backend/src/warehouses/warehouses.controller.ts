import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { CreateWarehouseDto, QueryWarehouseDto, UpdateWarehouseDto } from './dto';
import { WarehousesService } from './warehouses.service';

@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehouses: WarehousesService) {}

  @Post()
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  create(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreateWarehouseDto, @Req() req: HttpRequestContext) {
    return this.warehouses.create(actor, dto, readClientIp(req.headers, req.ip));
  }

  @Get()
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER)
  list(@Query() query: QueryWarehouseDto) {
    return this.warehouses.list(query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehouses.get(id);
  }

  @Get(':id/stock')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  stock(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehouses.stock(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  update(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateWarehouseDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.warehouses.update(actor, id, dto, readClientIp(req.headers, req.ip));
  }
}
