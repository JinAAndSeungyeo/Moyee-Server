import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Keyword from 'keyword/entities/keyword.entity';
import { KeywordController } from 'keyword/keyword.controller';
import { KeywordService } from 'keyword/keyword.service';
import { KeywordRepository } from 'keyword/repositories/keyword.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword, KeywordRepository])],
  controllers: [KeywordController],
  providers: [KeywordService]
})

export class KeywordModule { }