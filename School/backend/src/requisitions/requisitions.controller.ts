import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../../../../Admin/backend/src/common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../../../../Admin/backend/src/common/types';
import { readClientIp } from '../../../../Admin/backend/src/common/utils';
import { CreateRequisitionDto, QueryRequisitionDto, RejectRequisitionDto, UpdateRequisitionDto } from './dto';
import { RequisitionsService } from './requisitions.service';

@Controller('requisitions')
export class RequisitionsController {
  constructor(private readonly requisitions: RequisitionsService) {}

  @Post()
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.SCHOOL_REP)
  create(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreateRequisitionDto, @Req() req: HttpRequestContext) {
    return this.requisitions.create(actor, dto, readClientIp(req.headers, req.ip));
  }

  @Get()
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.SCHOOL_REP, Role.WAREHOUSE_STAFF)
  list(@CurrentUser() actor: AuthenticatedUser, @Query() query: QueryRequisitionDto) {
    return this.requisitions.list(actor, query);
  }

  @Get('urgent')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  urgent() {
    return this.requisitions.urgent();
  }

  @Post('rescore-open')
  @Roles(Role.ADMIN)
  rescoreOpen(@CurrentUser() actor: AuthenticatedUser, @Req() req: HttpRequestContext) {
    return this.requisitions.rescoreOpen(actor, readClientIp(req.headers, req.ip));
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.SCHOOL_REP, Role.WAREHOUSE_STAFF)
  get(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.requisitions.get(actor, id);
  }

  @Get(':id/journey')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.SCHOOL_REP)
  journey(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.requisitions.journey(actor, id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.SCHOOL_REP)
  update(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateRequisitionDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.requisitions.update(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Post(':id/rescore')
  @Roles(Role.ADMIN)
  rescore(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.requisitions.rescore(actor, id, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/approve')
  @Roles(Role.ADMIN)
  approve(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.requisitions.approve(actor, id, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/reject')
  @Roles(Role.ADMIN)
  reject(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: RejectRequisitionDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.requisitions.reject(actor, id, dto, readClientIp(req.headers, req.ip));
  }
}
