import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ProductsModule } from './apis/products/products.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './infrastructure/db/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역으로 설정
    }),
    RedisModule,

    ProductsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
