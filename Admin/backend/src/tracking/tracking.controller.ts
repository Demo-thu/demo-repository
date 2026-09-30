import { Controller, Get, Param, Query } from '@nestjs/common';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { Public } from '../common/decorators';
import { TrackingService } from './tracking.service';

class SearchQueryDto {
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  q!: string;
}

@Controller('tracking')
export class TrackingController {
  constructor(private readonly tracking: TrackingService) {}

  @Public()
  @Get('items/:qrCode')
  item(@Param('qrCode') qrCode: string) {
    return this.tracking.item(qrCode);
  }

  @Public()
  @Get('waybills/:code')
  waybill(@Param('code') code: string) {
    return this.tracking.waybill(code);
  }

  @Public()
  @Get('search')
  search(@Query() query: SearchQueryDto) {
    return this.tracking.search(query.q);
  }
}
