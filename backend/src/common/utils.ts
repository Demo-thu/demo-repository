import { randomBytes } from 'crypto';
import { Prisma } from '@prisma/client';
import { PageResult } from './types';

export function paginate<T>(data: T[], total: number, page: number, limit: number): PageResult<T> {
  return {
    data,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.max(1, Math.ceil(total / limit)),
    },
  };
}

export function pageArgs(page?: number, limit?: number): { page: number; limit: number; skip: number } {
  const safePage = page && page > 0 ? page : 1;
  const safeLimit = limit && limit > 0 ? Math.min(limit, 100) : 20;
  return { page: safePage, limit: safeLimit, skip: (safePage - 1) * safeLimit };
}

export function formatYmd(date: Date): string {
  const year = date.getFullYear().toString();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

export function dailyCode(prefix: string, sequence: number, date = new Date()): string {
  return `${prefix}-${formatYmd(date)}-${String(sequence).padStart(4, '0')}`;
}

export function buildResourceQrCode(category: string): string {
  const cat = category.slice(0, 4).toUpperCase();
  const timestamp = Date.now().toString(36).toUpperCase();
  const hash = randomBytes(3).toString('hex').toUpperCase();
  return `EDU-${cat}-${timestamp}-${hash}`;
}

export function isUniqueConflict(error: unknown): boolean {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002';
}

export async function withUniqueRetry<T>(work: () => Promise<T>, attempts = 4): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await work();
    } catch (error) {
      lastError = error;
      if (!isUniqueConflict(error) || attempt === attempts - 1) {
        throw error;
      }
    }
  }
  throw lastError instanceof Error ? lastError : new Error('Could not allocate a unique code');
}

export function readClientIp(
  headers: Record<string, string | string[] | undefined>,
  ip?: string,
): string | null {
  const forwarded = headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0]?.trim() ?? null;
  }
  if (Array.isArray(forwarded) && forwarded.length > 0 && forwarded[0]) {
    return forwarded[0];
  }
  return ip ?? null;
}

export function definedJson(input: object | undefined): Prisma.InputJsonValue | undefined {
  if (!input) {
    return undefined;
  }
  const record = input as Record<string, unknown>;
  const entries = Object.entries(record).filter((entry): entry is [string, string | number | boolean | null] => {
    const value = entry[1];
    return value === null || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
  });
  if (entries.length === 0) {
    return undefined;
  }
  return Object.fromEntries(entries);
}

export const publicUserSelect = {
  id: true,
  email: true,
  fullName: true,
  phone: true,
  role: true,
  status: true,
  createdAt: true,
  updatedAt: true,
  profile: true,
} satisfies Prisma.UserSelect;

export const STAFF_ROLES = ['ADMIN', 'INTAKE_STAFF', 'WAREHOUSE_STAFF', 'COORDINATOR'] as const;
