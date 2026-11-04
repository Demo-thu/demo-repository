import { ConflictException, Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { v4 as uuidv4 } from 'uuid';

interface MemoryLock {
  token: string;
  expiresAt: number;
}

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private client: Redis | null = null;
  private readonly memoryLocks = new Map<string, MemoryLock>();
  private readonly memoryCache = new Map<string, { value: string; expiresAt: number }>();

  constructor(private readonly config: ConfigService) {}

  async onModuleInit(): Promise<void> {
    const url = this.config.get<string>('REDIS_URL');
    if (!url) {
      this.logger.warn('REDIS_URL trống — khóa phân bổ dùng bộ nhớ tiến trình');
      return;
    }
    const client = new Redis(url, {
      maxRetriesPerRequest: 1,
      connectTimeout: 2000,
      lazyConnect: true,
      enableOfflineQueue: false,
      retryStrategy: () => null,
    });
    client.on('error', () => undefined);
    try {
      await client.connect();
      await client.ping();
      this.client = client;
      this.logger.log('Đã kết nối Redis');
    } catch (error) {
      client.removeAllListeners('error');
      client.disconnect();
      this.client = null;
      const message = error instanceof Error ? error.message : 'unknown';
      this.logger.warn(`Redis không sẵn sàng (${message}) — chuyển sang khóa trong bộ nhớ`);
    }
  }

  async onModuleDestroy(): Promise<void> {
    if (this.client) {
      await this.client.quit();
    }
  }

  isRedisConnected(): boolean {
    return this.client !== null;
  }

  async withLock<T>(key: string, ttlSeconds: number, work: () => Promise<T>): Promise<T> {
    const token = uuidv4();
    const acquired = await this.acquire(key, token, ttlSeconds);
    if (!acquired) {
      throw new ConflictException('Tác vụ đang được xử lý, vui lòng thử lại sau vài giây');
    }
    try {
      return await work();
    } finally {
      await this.release(key, token);
    }
  }

  async cacheGet(key: string): Promise<string | null> {
    if (this.client) {
      return this.client.get(key);
    }
    const entry = this.memoryCache.get(key);
    if (!entry || entry.expiresAt < Date.now()) {
      this.memoryCache.delete(key);
      return null;
    }
    return entry.value;
  }

  async cacheSet(key: string, value: string, ttlSeconds: number): Promise<void> {
    if (this.client) {
      await this.client.set(key, value, 'EX', ttlSeconds);
      return;
    }
    this.memoryCache.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 });
  }

  private async acquire(key: string, token: string, ttlSeconds: number): Promise<boolean> {
    if (this.client) {
      const result = await this.client.set(key, token, 'EX', ttlSeconds, 'NX');
      return result === 'OK';
    }
    const current = this.memoryLocks.get(key);
    if (current && current.expiresAt > Date.now()) {
      return false;
    }
    this.memoryLocks.set(key, { token, expiresAt: Date.now() + ttlSeconds * 1000 });
    return true;
  }

  private async release(key: string, token: string): Promise<void> {
    if (this.client) {
      const current = await this.client.get(key);
      if (current === token) {
        await this.client.del(key);
      }
      return;
    }
    const current = this.memoryLocks.get(key);
    if (current?.token === token) {
      this.memoryLocks.delete(key);
    }
  }
}
