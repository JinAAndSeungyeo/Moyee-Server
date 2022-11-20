import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Shop from 'shop/entities/shop.entity';
import Visitor from 'shop/entities/visitor.entity';
import { ShopController } from 'shop/shop.controller';
import { ShopService } from 'shop/shop.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shop, Visitor])],
  controllers: [ShopController],
  providers: [ShopService]
})

export class ShopModule { }