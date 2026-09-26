import { ItemCategory, RequisitionStatus, UrgencyLevel } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PaginationQueryDto } from '../common/dto';

export class RequisitionLineDto {
  @IsEnum(ItemCategory)
  category!: ItemCategory;

  @IsInt()
  @Min(1)
  @Max(5000)
  quantityNeeded!: number;
}

export class CreateRequisitionDto {
  @IsOptional()
  @IsUUID()
  schoolId?: string;

  @IsString()
  @MinLength(5)
  @MaxLength(180)
  title!: string;

  @IsEnum(UrgencyLevel)
  urgencyLevel!: UrgencyLevel;

  @IsOptional()
  @IsString()
  @MaxLength(400)
  verificationDocUrl?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => RequisitionLineDto)
  items!: RequisitionLineDto[];
}

export class UpdateRequisitionDto {
  @IsOptional()
  @IsString()
  @MinLength(5)
  @MaxLength(180)
  title?: string;

  @IsOptional()
  @IsEnum(UrgencyLevel)
  urgencyLevel?: UrgencyLevel;

  @IsOptional()
  @IsString()
  @MaxLength(400)
  verificationDocUrl?: string;
}

export class RejectRequisitionDto {
  @IsString()
  @MinLength(5)
  @MaxLength(500)
  reason!: string;
}

export class QueryRequisitionDto extends PaginationQueryDto {
  @IsOptional()
  @IsEnum(RequisitionStatus)
  status?: RequisitionStatus;

  @IsOptional()
  @IsEnum(UrgencyLevel)
  urgencyLevel?: UrgencyLevel;
}
