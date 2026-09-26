import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  search?: string;
}

export class DeviceSpecificationsDto {
  @IsOptional()
  @IsString()
  @MaxLength(80)
  ram?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  cpu?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  storage?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  battery?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  size?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  gradeLevel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  serialNumber?: string;
}
