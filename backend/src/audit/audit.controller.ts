import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { CurrentUser, Roles } from '../common/decorators';
import { PaginationQueryDto } from '../common/dto';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { AuditService } from './audit.service';

class QueryAuditDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  @MaxLength(80)
  resource?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  action?: string;
}

class CreateAuditNoteDto {
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  action!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(80)
  resource!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  note?: string;
}

@Controller('audit-logs')
@Roles(Role.ADMIN, Role.COORDINATOR)
export class AuditController {
  constructor(private readonly audit: AuditService) {}

  @Get()
  list(@Query() query: QueryAuditDto) {
    return this.audit.list(query);
  }

  @Post()
  @Roles(Role.ADMIN, Role.COORDINATOR)
  async create(
    @CurrentUser() actor: AuthenticatedUser,
    @Body() dto: CreateAuditNoteDto,
    @Req() req: HttpRequestContext,
  ) {
    await this.audit.log({
      userId: actor.id,
      action: dto.action.trim(),
      resource: dto.resource.trim(),
      details: dto.note ? { note: dto.note.trim() } : undefined,
      ipAddress: readClientIp(req.headers, req.ip),
    });
    return { saved: true };
  }
}
