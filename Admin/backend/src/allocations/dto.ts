import { IsIn, IsOptional, IsUUID } from 'class-validator';
import { PaginationQueryDto } from '../common/dto';

export class QueryAllocationDto extends PaginationQueryDto {
  @IsOptional()
  @IsIn(['PROPOSED', 'CONFIRMED', 'DISPATCHED', 'CANCELLED'])
  status?: 'PROPOSED' | 'CONFIRMED' | 'DISPATCHED' | 'CANCELLED';

  @IsOptional()
  @IsUUID()
  requisitionId?: string;
}
