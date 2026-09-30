import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import {
  AssignVolunteerDto,
  CreateIncidentDto,
  CreateProofDto,
  CreateWaybillDto,
  QueryIncidentDto,
  QueryWaybillDto,
  VolunteerReportDto,
} from './dto';
import { WaybillsService } from './waybills.service';

@Controller('waybills')
export class WaybillsController {
  constructor(private readonly waybills: WaybillsService) {}

  @Post()
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  create(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreateWaybillDto, @Req() req: HttpRequestContext) {
    return this.waybills.create(actor, dto, readClientIp(req.headers, req.ip));
  }

  @Get()
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER, Role.SCHOOL_REP)
  list(@CurrentUser() actor: AuthenticatedUser, @Query() query: QueryWaybillDto) {
    return this.waybills.list(actor, query);
  }

  @Get('incidents')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER)
  listIncidents(@CurrentUser() actor: AuthenticatedUser, @Query() query: QueryIncidentDto) {
    return this.waybills.listIncidents(actor, query);
  }

  @Get('code/:code')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER, Role.SCHOOL_REP)
  getByCode(@CurrentUser() actor: AuthenticatedUser, @Param('code') code: string) {
    return this.waybills.getByCode(actor, code);
  }

  @Get(':id/incidents')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER)
  listWaybillIncidents(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.waybills.listWaybillIncidents(actor, id);
  }

  @Post(':id/incidents')
  @Roles(Role.VOLUNTEER, Role.WAREHOUSE_STAFF)
  createIncident(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: CreateIncidentDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.waybills.createIncident(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Post(':id/volunteer-report')
  @Roles(Role.VOLUNTEER)
  volunteerReport(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: VolunteerReportDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.waybills.submitVolunteerReport(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER, Role.SCHOOL_REP)
  get(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.waybills.get(actor, id);
  }

  @Patch(':id/assign')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  assign(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: AssignVolunteerDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.waybills.assign(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/pickup')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.VOLUNTEER)
  pickup(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.waybills.pickup(actor, id, readClientIp(req.headers, req.ip));
  }

  @Post(':id/proof')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF, Role.SCHOOL_REP)
  prove(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: CreateProofDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.waybills.prove(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/fail')
  @Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
  fail(@CurrentUser() actor: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Req() req: HttpRequestContext) {
    return this.waybills.fail(actor, id, readClientIp(req.headers, req.ip));
  }
}
