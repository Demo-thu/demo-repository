import { ItemCategory, ItemStatus } from '@prisma/client';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsOptional, IsString, IsUUID, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { DeviceSpecificationsDto, PaginationQueryDto } from '../../../../Admin/backend/src/common/dto';

export class QueryItemDto extends PaginationQueryDto {
  @IsOptional()
  @IsEnum(ItemStatus)
  status?: ItemStatus;

  @IsOptional()
  @IsEnum(ItemCategory)
  category?: ItemCategory;

  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  qrCode?: string;

  /** true: chỉ lấy hiện vật đang nằm trong kho (chưa xuất đi, chưa giao, chưa tái chế). */
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  @IsBoolean()
  inStock?: boolean;

  /** true: chỉ lấy hiện vật nhà hảo tâm đã đồng ý để kho lưu dự trữ cho các chiến dịch sau. */
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  @IsBoolean()
  reserve?: boolean;
}

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(160)
  name?: string;

  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  binLocation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => DeviceSpecificationsDto)
  specifications?: DeviceSpecificationsDto;
}
