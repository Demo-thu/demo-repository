import { ItemCategory, ItemStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString, IsUUID, MaxLength, MinLength, ValidateNested } from 'class-validator';
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
