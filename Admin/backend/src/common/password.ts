import { applyDecorators } from '@nestjs/common';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

/**
 * Quy tắc mật khẩu dùng chung cho đăng ký và đặt lại mật khẩu:
 * tối thiểu 8 ký tự, có chữ in hoa (A-Z) và chữ số (0-9). Ký tự đặc biệt chỉ giúp tăng độ mạnh.
 */
export function IsStrongPassword() {
  return applyDecorators(
    IsString(),
    MinLength(8, { message: 'Mật khẩu cần tối thiểu 8 ký tự' }),
    MaxLength(72, { message: 'Mật khẩu tối đa 72 ký tự' }),
    Matches(/[A-Z]/, { message: 'Mật khẩu cần có ít nhất 1 chữ in hoa (A-Z)' }),
    Matches(/\d/, { message: 'Mật khẩu cần có ít nhất 1 chữ số (0-9)' }),
  );
}
