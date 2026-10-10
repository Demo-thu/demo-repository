import { Transform } from 'class-transformer';
import { IsBoolean, IsIn, IsOptional, IsUUID } from 'class-validator';
import { PaginationQueryDto } from '../common/dto';

export class QueryAllocationDto extends PaginationQueryDto {
  @IsOptional()
  @IsIn(['PROPOSED', 'CONFIRMED', 'DISPATCHED', 'CANCELLED'])
  status?: 'PROPOSED' | 'CONFIRMED' | 'DISPATCHED' | 'CANCELLED';

  @IsOptional()
  @IsUUID()
  requisitionId?: string;

  /** Đơn admin đã xác nhận và kho được lập vận đơn. */
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  @IsBoolean()
  readyForWaybill?: boolean;
}
