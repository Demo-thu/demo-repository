import { Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsBoolean,
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
  /** Kho xuất: hệ thống chỉ có một tổng kho nên giao diện luôn gửi kho này. */
  @IsUUID()
  sourceWarehouseId!: string;

  /** Yêu cầu hỗ trợ đã duyệt, hoặc chiến dịch có trường thụ hưởng đã định danh. */
  @IsOptional()
  @IsUUID()
  requisitionId?: string;

  @IsOptional()
  @IsUUID()
  campaignId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  deliveryAddress?: string;

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
  @IsIn(['PENDING_APPROVAL', 'PENDING', 'IN_TRANSIT', 'RECEIVED', 'CANCELLED'])
  status?: 'PENDING_APPROVAL' | 'PENDING' | 'IN_TRANSIT' | 'RECEIVED' | 'CANCELLED';

  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsUUID()
  requisitionId?: string;

  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  @IsBoolean()
  campaignOnly?: boolean;

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
