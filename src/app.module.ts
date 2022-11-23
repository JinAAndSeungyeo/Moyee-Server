import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'database/database.module';
import { KeywordModule } from 'keyword/keyword.module';
import { PlaylistModule } from 'playlist/playlist.module';
import { ShopModule } from 'shop/shop.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TokenModule } from './token/token.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'common/filters/http-exeption.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    DatabaseModule,
    UserModule,
    KeywordModule,
    PlaylistModule,
    ShopModule,
    TokenModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})

export class AppModule { }