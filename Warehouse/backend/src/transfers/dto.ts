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
import { PaginationQueryDto } from '../../../../Admin/backend/src/common/dto';

export class CreateTransferDto {
  /** Kho xuất: hệ thống chỉ có một tổng kho nên giao diện luôn gửi kho này. */
  @IsUUID()
  sourceWarehouseId!: string;

  /** Yêu cầu hỗ trợ (đã duyệt) của trường: xác định trường nhận và địa chỉ giao. */
  @IsUUID()
  requisitionId!: string;

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
  @IsIn(['PENDING', 'IN_TRANSIT', 'RECEIVED', 'CANCELLED'])
  status?: 'PENDING' | 'IN_TRANSIT' | 'RECEIVED' | 'CANCELLED';

  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsUUID()
  requisitionId?: string;

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
