import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AllocationsModule } from './allocations/allocations.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AuditModule } from './audit/audit.module';
import { AuthModule } from './auth/auth.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { HealthModule } from './health/health.module';
import { PledgesModule } from '../../../Donor/backend/src/pledges/pledges.module';
import { RequisitionsModule } from '../../../School/backend/src/requisitions/requisitions.module';
import { InspectionsModule } from '../../../Warehouse/backend/src/inspections/inspections.module';
import { ItemsModule } from '../../../Warehouse/backend/src/items/items.module';
import { TransfersModule } from '../../../Warehouse/backend/src/transfers/transfers.module';
import { WarehousesModule } from '../../../Warehouse/backend/src/warehouses/warehouses.module';
import { WaybillsModule } from '../../../Warehouse/backend/src/waybills/waybills.module';
import { VolunteersModule } from '../../../Volunteer/backend/src/volunteers/volunteers.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { TrackingModule } from './tracking/tracking.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RedisModule,
    AuditModule,
    AuthModule,
    UsersModule,
    CampaignsModule,
    WarehousesModule,
    PledgesModule,
    ItemsModule,
    InspectionsModule,
    TransfersModule,
    RequisitionsModule,
    AllocationsModule,
    WaybillsModule,
    VolunteersModule,
    AnalyticsModule,
    TrackingModule,
    HealthModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
