import { Module } from '@nestjs/common';
import { WarehousesModule } from '../warehouses/warehouses.module';
import { PledgesController } from './pledges.controller';
import { PledgesService } from './pledges.service';

@Module({
  imports: [WarehousesModule],
  controllers: [PledgesController],
  providers: [PledgesService],
  exports: [PledgesService],
})
export class PledgesModule {}
