import { ItemCategory, RequisitionStatus, UrgencyLevel } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
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
import { PaginationQueryDto } from '../../../../Admin/backend/src/common/dto';

export class RequisitionLineDto {
  @IsEnum(ItemCategory)
  category!: ItemCategory;

  @IsInt()
  @Min(1)
  @Max(5000)
  quantityNeeded!: number;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  specification?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  unit?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  reason?: string;
}

export class GradeCountDto {
  @IsString()
  @MaxLength(40)
  grade!: string;

  @IsInt()
  @Min(0)
  @Max(100000)
  students!: number;
}

export class StudentInfoDto {
  @IsInt()
  @Min(0)
  @Max(100000)
  totalStudents!: number;

  @IsInt()
  @Min(0)
  @Max(100000)
  studentsInNeed!: number;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(10)
  @IsString({ each: true })
  priorityGroups?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(20)
  @ValidateNested({ each: true })
  @Type(() => GradeCountDto)
  grades?: GradeCountDto[];
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

  @IsString()
  @MinLength(8)
  @MaxLength(2000000)
  schoolConfirmationUrl!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(2000000)
  committeeConfirmationUrl!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => StudentInfoDto)
  studentInfo?: StudentInfoDto;

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

  @IsString()
  @MinLength(8)
  @MaxLength(2000000)
  schoolConfirmationUrl!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(2000000)
  committeeConfirmationUrl!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => StudentInfoDto)
  studentInfo?: StudentInfoDto;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => RequisitionLineDto)
  items?: RequisitionLineDto[];
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
