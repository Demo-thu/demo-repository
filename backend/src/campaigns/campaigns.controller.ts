import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { CampaignsService } from './campaigns.service';
import { CampaignTargetDto, CreateCampaignDto, QueryCampaignDto, UpdateCampaignDto, UpdateCampaignStatusDto } from './dto';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaigns: CampaignsService) {}

  @Post()
  @Roles(Role.ADMIN, Role.COORDINATOR)
  create(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreateCampaignDto, @Req() req: HttpRequestContext) {
    return this.campaigns.create(actor, dto, readClientIp(req.headers, req.ip));
  }

  @Get()
  list(@Query() query: QueryCampaignDto) {
    return this.campaigns.list(query);
  }

  @Get(':id')
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.campaigns.get(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.COORDINATOR)
  update(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCampaignDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.campaigns.update(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/status')
  @Roles(Role.ADMIN, Role.COORDINATOR)
  updateStatus(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCampaignStatusDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.campaigns.updateStatus(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Post(':id/targets')
  @Roles(Role.ADMIN, Role.COORDINATOR)
  addTarget(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: CampaignTargetDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.campaigns.addTarget(actor, id, dto, readClientIp(req.headers, req.ip));
  }
}
