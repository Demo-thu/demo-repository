import { Type } from 'class-transformer';
import { IsDateString, IsIn, IsOptional, IsUUID } from 'class-validator';
import { PaginationQueryDto } from '../common/dto';

export class CreateShiftDto {
  @IsOptional()
  @IsUUID()
  volunteerId?: string;

  @IsUUID()
  warehouseId!: string;

  @IsDateString()
  shiftDate!: string;

  @IsIn(['SORTING', 'PACKING', 'DELIVERY'])
  shiftType!: 'SORTING' | 'PACKING' | 'DELIVERY';
}

export class QueryShiftDto extends PaginationQueryDto {
  @IsOptional()
  @IsUUID()
  volunteerId?: string;

  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsIn(['SORTING', 'PACKING', 'DELIVERY'])
  shiftType?: 'SORTING' | 'PACKING' | 'DELIVERY';

  @IsOptional()
  @Type(() => String)
  @IsDateString()
  from?: string;

  @IsOptional()
  @Type(() => String)
  @IsDateString()
  to?: string;
}
