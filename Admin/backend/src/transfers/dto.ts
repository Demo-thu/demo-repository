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
  MinLength,
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

  @IsString()
  @MinLength(2)
  @MaxLength(120)
  recipientName!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  recipientPhone!: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  recipientNote?: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsUUID('4', { each: true })
  volunteerIds!: string[];
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
