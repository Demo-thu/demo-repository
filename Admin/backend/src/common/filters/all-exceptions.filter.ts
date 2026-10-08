import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();
    const mapped = mapException(exception);
    response.status(mapped.statusCode).json({
      statusCode: mapped.statusCode,
      message: mapped.message,
      timestamp: new Date().toISOString(),
    });
  }
}

function mapException(exception: unknown): { statusCode: number; message: string | string[] } {
  if (exception instanceof HttpException) {
    const statusCode = exception.getStatus();
    const body = exception.getResponse();
    if (typeof body === 'string') {
      return { statusCode, message: body };
    }
    if (isRecord(body) && 'message' in body) {
      const message = body.message;
      if (typeof message === 'string' || isStringArray(message)) {
        return { statusCode, message };
      }
    }
    return { statusCode, message: exception.message };
  }

  if (exception instanceof Prisma.PrismaClientKnownRequestError) {
    if (exception.code === 'P2002') {
      return { statusCode: HttpStatus.CONFLICT, message: 'Dữ liệu bị trùng khóa duy nhất' };
    }
    if (exception.code === 'P2025') {
      return { statusCode: HttpStatus.NOT_FOUND, message: 'Không tìm thấy bản ghi' };
    }
    return { statusCode: HttpStatus.BAD_REQUEST, message: 'Thao tác cơ sở dữ liệu không hợp lệ' };
  }

  return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Lỗi hệ thống' };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}
