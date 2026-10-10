import { IsEmail, Matches } from 'class-validator';
import { IsStrongPassword } from '../../../../Admin/backend/src/common/password';

export class ForgotPasswordDto {
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email!: string;
}

export class ResetPasswordDto {
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email!: string;

  @Matches(/^\d{6}$/, { message: 'Mã xác thực gồm đúng 6 chữ số' })
  code!: string;

  @IsStrongPassword()
  newPassword!: string;
}
