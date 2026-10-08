import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser, Roles } from '../../../../Admin/backend/src/common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../../../../Admin/backend/src/common/types';
import { readClientIp } from '../../../../Admin/backend/src/common/utils';
import { CreateInspectionDto, QueryInspectionDto } from './dto';
import { InspectionsService } from './inspections.service';

@Controller('inspections')
@Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
export class InspectionsController {
  constructor(private readonly inspections: InspectionsService) {}

  @Post()
  create(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreateInspectionDto, @Req() req: HttpRequestContext) {
    return this.inspections.create(actor, dto, readClientIp(req.headers, req.ip));
  }

  @Get()
  list(@Query() query: QueryInspectionDto) {
    return this.inspections.list(query);
  }
}
