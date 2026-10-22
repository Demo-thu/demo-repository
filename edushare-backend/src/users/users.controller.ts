import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { CreateUserDto, QueryUserDto, UpdateRoleDto, UpdateStatusDto, UpdateUserDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Post()
  @Roles(Role.ADMIN)
  create(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreateUserDto, @Req() req: HttpRequestContext) {
    return this.users.create(actor, dto, readClientIp(req.headers, req.ip));
  }

  @Get()
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  list(@Query() query: QueryUserDto) {
    return this.users.list(query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.users.get(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  update(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateUserDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.users.update(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/role')
  @Roles(Role.ADMIN)
  updateRole(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateRoleDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.users.updateRole(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/status')
  @Roles(Role.ADMIN)
  updateStatus(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateStatusDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.users.updateStatus(actor, id, dto, readClientIp(req.headers, req.ip));
  }
}
