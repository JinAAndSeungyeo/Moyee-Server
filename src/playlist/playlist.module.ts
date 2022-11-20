import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Music from 'playlist/entities/music.entity';
import Playlist from 'playlist/entities/playlist.entity';
import { PlaylistController } from 'playlist/playlist.controller';
import { PlaylistService } from 'playlist/playlist.service';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist, Music])],
  controllers: [PlaylistController],
  providers: [PlaylistService]
})

export class PlaylistModule { }