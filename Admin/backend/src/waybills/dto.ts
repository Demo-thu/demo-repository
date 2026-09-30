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
  @IsArray()
  @ArrayMinSize(1)
  @IsUUID('4', { each: true })
  volunteerIds?: string[];

  /** Kept so older clients that still send one volunteer keep working. */
  @IsOptional()
  @IsUUID()
  assignedVolunteerId?: string;
}

export class AssignVolunteerDto {
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsUUID('4', { each: true })
  volunteerIds?: string[];

  /** Kept so older clients that still send one volunteer keep working. */
  @IsOptional()
  @IsUUID()
  assignedVolunteerId?: string;
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

export class CreateIncidentDto {
  @IsString()
  @MinLength(5)
  @MaxLength(2000)
  reason!: string;
}

export class VolunteerReportDto {
  @IsString()
  @MinLength(2)
  @MaxLength(2000)
  volunteerReportNote!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(8)
  @IsString({ each: true })
  volunteerPhotoUrls!: string[];
}

export class QueryWaybillDto extends PaginationQueryDto {
  @IsOptional()
  @IsEnum(WaybillStatus)
  status?: WaybillStatus;
}

export class QueryIncidentDto extends PaginationQueryDto {
  @IsOptional()
  @IsUUID()
  waybillId?: string;
}
