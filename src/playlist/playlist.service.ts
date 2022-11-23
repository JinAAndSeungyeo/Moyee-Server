import { Injectable } from '@nestjs/common';
import { MusicRepository } from 'playlist/repositories/music.repository';
import { PlaylistRepository } from 'playlist/repositories/playlist.repository';

@Injectable()
export class PlaylistService {
  constructor(
    private readonly playlistRepository: PlaylistRepository,
    private readonly musicRepository: MusicRepository,
  ) { }
}
