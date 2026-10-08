import { ItemCategory, PledgeStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsEnum,
  IsIn,
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
import { DeviceSpecificationsDto, PaginationQueryDto } from '../../../../Admin/backend/src/common/dto';

export class CreatePledgeItemDto {
  @IsEnum(ItemCategory)
  category!: ItemCategory;

  @IsString()
  @MinLength(2)
  @MaxLength(160)
  name!: string;

  @IsInt()
  @Min(1)
  @Max(5000)
  estimatedQuantity!: number;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  declaredCondition?: string;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(8)
  @IsString({ each: true })
  photoUrls?: string[];

  @IsOptional()
  @IsString()
  @MaxLength(20)
  unit?: string;
}

export class CreatePledgeDto {
  @IsOptional()
  @IsUUID()
  donorId?: string;

  @IsOptional()
  @IsUUID()
  campaignId?: string;

  @IsIn(['DROP_OFF', 'PICK_UP'])
  handoverMethod!: 'DROP_OFF' | 'PICK_UP';

  @IsOptional()
  @IsDateString()
  scheduledAt?: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  address?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  contactName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  contactPhone?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreatePledgeItemDto)
  items!: CreatePledgeItemDto[];
}

export class UpdatePledgeDto {
  @IsOptional()
  @IsIn(['DROP_OFF', 'PICK_UP'])
  handoverMethod?: 'DROP_OFF' | 'PICK_UP';

  @IsOptional()
  @IsDateString()
  scheduledAt?: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  address?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;
}

export class QueryDevicesDto extends PaginationQueryDto {
  @IsOptional()
  @IsEnum(ItemCategory)
  category?: ItemCategory;
}

export class CancelPledgeDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(120)
  reason?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  note?: string;
}

export class ReceiveLineDto {
  @IsUUID()
  pledgeItemId!: string;

  @IsInt()
  @Min(1)
  @Max(500)
  receivedQuantity!: number;

  @IsUUID()
  warehouseId!: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  binLocation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => DeviceSpecificationsDto)
  specifications?: DeviceSpecificationsDto;
}

export class ReceivePledgeDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ReceiveLineDto)
  lines!: ReceiveLineDto[];
}

export class QueryPledgeDto extends PaginationQueryDto {
  @IsOptional()
  @IsEnum(PledgeStatus)
  status?: PledgeStatus;

  @IsOptional()
  @IsUUID()
  campaignId?: string;
}
