import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Music from 'playlist/entities/music.entity';
import Playlist from 'playlist/entities/playlist.entity';
import { PlaylistController } from 'playlist/playlist.controller';
import { PlaylistService } from 'playlist/playlist.service';
import { MusicRepository } from 'playlist/repositories/music.repository';
import { PlaylistRepository } from 'playlist/repositories/playlist.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    Playlist, Music, PlaylistRepository, MusicRepository
  ])],
  controllers: [PlaylistController],
  providers: [PlaylistService]
})

export class PlaylistModule { }