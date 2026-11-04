import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsDateString, IsIn, IsOptional, IsUUID } from 'class-validator';
import { PaginationQueryDto } from '../../../../Admin/backend/src/common/dto';

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

  /** true: chỉ ca đã điểm danh vào và chưa kết ca. */
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  @IsBoolean()
  open?: boolean;
}
