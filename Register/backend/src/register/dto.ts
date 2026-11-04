import { IsEmail, IsIn, IsOptional, IsString, Matches, MaxLength, MinLength, ValidateIf } from 'class-validator';
import { IsStrongPassword } from '../../../../Admin/backend/src/common/password';

export const SELF_REGISTER_TYPES = ['DONOR', 'SCHOOL_REP'] as const;
export type SelfRegisterType = (typeof SELF_REGISTER_TYPES)[number];

/**
 * Tự đăng ký chỉ dành cho Nhà hảo tâm (DONOR) và Đại diện trường học (SCHOOL_REP).
 * Tài khoản kho, điều phối và tình nguyện viên do Admin tạo.
 */
export class RegisterDto {
  @IsOptional()
  @IsIn(SELF_REGISTER_TYPES, { message: 'Loại tài khoản không hợp lệ' })
  accountType?: SelfRegisterType;

  @IsEmail()
  email!: string;

  @IsStrongPassword()
  password!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName!: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  /** Nhà hảo tâm: tên tổ chức (không bắt buộc). Trường học: tên cơ sở giáo dục (bắt buộc). */
  @ValidateIf((dto: RegisterDto) => dto.accountType === 'SCHOOL_REP' || dto.organizationName !== undefined)
  @IsString()
  @MinLength(2, { message: 'Vui lòng nhập tên cơ sở giáo dục' })
  @MaxLength(160)
  organizationName?: string;

  /** Mã định danh cơ sở giáo dục của Bộ GD&ĐT (trường học). */
  @IsOptional()
  @IsString()
  @MaxLength(40)
  organizationCode?: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  address?: string;

  @ValidateIf((dto: RegisterDto) => dto.accountType === 'SCHOOL_REP' || dto.city !== undefined)
  @IsString()
  @MinLength(2, { message: 'Vui lòng nhập tỉnh / thành phố' })
  @MaxLength(80)
  city?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  district?: string;
}

export class VerifyRegisterDto {
  @IsEmail()
  email!: string;

  @Matches(/^\d{6}$/, { message: 'Mã xác thực gồm đúng 6 chữ số' })
  code!: string;
}
