import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { nestConfig } from './config/base';

@Module({
  imports: [ConfigModule.forRoot(nestConfig)],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
