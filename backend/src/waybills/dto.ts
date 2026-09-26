import { WaybillStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { PaginationQueryDto } from '../common/dto';

export class CreateWaybillDto {
  @IsUUID()
  allocationPlanId!: string;

  @IsOptional()
  @IsUUID()
  assignedVolunteerId?: string;
}

export class AssignVolunteerDto {
  @IsUUID()
  assignedVolunteerId!: string;
}

export class CreateProofDto {
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  recipientName!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(120)
  recipientTitle!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(500)
  recipientSignatureUrl!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(8)
  @IsString({ each: true })
  proofPhotoUrls!: string[];

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(-90)
  @Max(90)
  gpsLatitude?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(-180)
  @Max(180)
  gpsLongitude?: number;
}

export class QueryWaybillDto extends PaginationQueryDto {
  @IsOptional()
  @IsEnum(WaybillStatus)
  status?: WaybillStatus;
}
