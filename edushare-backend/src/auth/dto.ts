import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

/** Mỗi tài khoản chỉ được tự đổi họ tên và số điện thoại; email và vai trò không đổi được. */
export class UpdateProfileDto {
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName!: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;
}
