import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { KeywordController } from './keyword/keyword.controller';
import { KeywordService } from './keyword/keyword.service';
import { KeywordModule } from './keyword/keyword.module';
import { PlaylistController } from './playlist/playlist.controller';
import { PlaylistService } from './playlist/playlist.service';
import { PlaylistModule } from './playlist/playlist.module';
import { ShopController } from './shop/shop.controller';
import { ShopService } from './shop/shop.service';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [UserModule, KeywordModule, PlaylistModule, ShopModule],
  controllers: [AppController, UserController, KeywordController, PlaylistController, ShopController],
  providers: [AppService, KeywordService, PlaylistService, ShopService],
})
export class AppModule {}
