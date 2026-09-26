import { Role } from '@prisma/client';

export interface AuthenticatedUser {
  id: string;
  email: string;
  role: Role;
  fullName: string;
  status: string;
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: Role;
}

export interface HttpRequestContext {
  user?: AuthenticatedUser;
  ip?: string;
  headers: Record<string, string | string[] | undefined>;
}

export interface PageMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PageResult<T> {
  data: T[];
  meta: PageMeta;
}
