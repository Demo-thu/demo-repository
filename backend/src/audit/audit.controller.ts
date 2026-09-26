import { Controller, Get, Query } from '@nestjs/common';
import { Role } from '@prisma/client';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { Roles } from '../common/decorators';
import { PaginationQueryDto } from '../common/dto';
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

@Controller('audit-logs')
@Roles(Role.ADMIN, Role.COORDINATOR)
export class AuditController {
  constructor(private readonly audit: AuditService) {}

  @Get()
  list(@Query() query: QueryAuditDto) {
    return this.audit.list(query);
  }
}
