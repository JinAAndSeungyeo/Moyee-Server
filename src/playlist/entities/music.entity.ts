import Playlist from 'playlist/entities/playlist.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export default class Music {
  @PrimaryGeneratedColumn({ name: 'idx' })
  idx!: number;

  @Column({ name: 'name' })
  name!: string;

  @Column({ name: 'singer' })
  singer!: string;

  @Column({ name: 'youtube_link' })
  youtubeLink!: string;

  @ManyToOne(() => Playlist, playlist => playlist.music)
  playlist: Playlist;
}