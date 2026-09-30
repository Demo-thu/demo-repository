import { ItemConditionGrade } from '@prisma/client';
import { IsBoolean, IsEnum, IsIn, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { PaginationQueryDto } from '../common/dto';

export class CreateInspectionDto {
  @IsUUID()
  resourceItemId!: string;

  @IsBoolean()
  isFunctional!: boolean;

  @IsEnum(ItemConditionGrade)
  grade!: ItemConditionGrade;

  @IsIn(['ALLOCATE', 'REFURBISH', 'RECYCLE', 'HOLD'])
  recommendedAction!: 'ALLOCATE' | 'REFURBISH' | 'RECYCLE' | 'HOLD';

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  physicalDefects?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;
}

export class QueryInspectionDto extends PaginationQueryDto {
  @IsOptional()
  @IsUUID()
  resourceItemId?: string;

  @IsOptional()
  @IsUUID()
  inspectorId?: string;
}
