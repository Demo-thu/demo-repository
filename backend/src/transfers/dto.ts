import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsIn,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { PaginationQueryDto } from '../common/dto';

export class CreateTransferDto {
  @IsUUID()
  sourceWarehouseId!: string;

  @IsUUID()
  targetWarehouseId!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(200)
  @IsUUID('4', { each: true })
  resourceItemIds!: string[];
}

export class QueryTransferDto extends PaginationQueryDto {
  @IsOptional()
  @IsIn(['PENDING', 'IN_TRANSIT', 'RECEIVED', 'CANCELLED'])
  status?: 'PENDING' | 'IN_TRANSIT' | 'RECEIVED' | 'CANCELLED';

  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(40)
  code?: string;
}

export class TransferIdParam {
  @IsUUID()
  @Type(() => String)
  id!: string;
}
