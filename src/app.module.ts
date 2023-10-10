import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { nestConfig } from './config/base';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [ConfigModule.forRoot(nestConfig)],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // forRoutes 메서드를 사용하여 미들웨어를 적용할 경로를 지정할 수 있다
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
