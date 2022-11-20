import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Keyword from 'keyword/entities/keyword.entity';
import { KeywordController } from 'keyword/keyword.controller';
import { KeywordService } from 'keyword/keyword.service';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword])],
  controllers: [KeywordController],
  providers: [KeywordService]
})

export class KeywordModule { }