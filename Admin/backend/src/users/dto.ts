import { Role } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PaginationQueryDto } from '../common/dto';

export class ProfileDto {
  @IsOptional()
  @IsString()
  @MaxLength(160)
  organizationName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  address?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  city?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  district?: string;

  @IsOptional()
  @IsString()
  @MaxLength(400)
  avatarUrl?: string;
}

export class CreateUserDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName!: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsEnum(Role)
  role!: Role;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProfileDto)
  profile?: ProfileDto;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProfileDto)
  profile?: ProfileDto;
}

export class UpdateRoleDto {
  @IsEnum(Role)
  role!: Role;
}

export class UpdateStatusDto {
  @IsIn(['ACTIVE', 'SUSPENDED'])
  status!: 'ACTIVE' | 'SUSPENDED';
}

export class QueryUserDto extends PaginationQueryDto {
  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsIn(['ACTIVE', 'SUSPENDED'])
  status?: 'ACTIVE' | 'SUSPENDED';
}
