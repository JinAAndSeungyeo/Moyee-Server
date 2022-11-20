import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { KeywordModule } from './keyword/keyword.module';
import { PlaylistModule } from './playlist/playlist.module';
import { ShopModule } from './shop/shop.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
  }),
    DatabaseModule,
    UserModule,
    KeywordModule,
    PlaylistModule,
    ShopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
