import { Module } from '@nestjs/common';
import { RedisModule } from 'src/infrastructure/db/redis/redis.module';

@Module({
  imports: [RedisModule],
})
export class ProductsModule {}
