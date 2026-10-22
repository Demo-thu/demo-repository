import { Controller, Get } from '@nestjs/common';
import { Public } from '../common/decorators';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';

@Controller('health')
export class HealthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  @Public()
  @Get()
  async check() {
    let database: 'up' | 'down' = 'down';
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      database = 'up';
    } catch {
      database = 'down';
    }
    return {
      service: 'edushare-vietnam-api',
      status: database === 'up' ? 'ok' : 'degraded',
      database,
      redis: this.redis.isRedisConnected() ? 'up' : 'memory-fallback',
      timestamp: new Date().toISOString(),
    };
  }
}
