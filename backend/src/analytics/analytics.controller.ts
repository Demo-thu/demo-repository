import { Controller, Get } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../common/decorators';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
@Roles(Role.ADMIN, Role.COORDINATOR)
export class AnalyticsController {
  constructor(private readonly analytics: AnalyticsService) {}

  @Get('dashboard')
  dashboard() {
    return this.analytics.dashboard();
  }

  @Get('esg')
  esg() {
    return this.analytics.esg();
  }

  @Get('beneficiary-schools')
  beneficiarySchools() {
    return this.analytics.beneficiarySchools();
  }
}
