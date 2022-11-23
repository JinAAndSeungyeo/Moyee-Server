import Playlist from 'playlist/entities/playlist.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('music')
export default class Music {
  @PrimaryGeneratedColumn({ name: 'idx' })
  idx!: number;

  @Column({ name: 'name' })
  name!: string;

  @Column({ name: 'singer' })
  singer!: string;

  @Column({ name: 'youtube_link' })
  youtubeLink!: string;

  @ManyToOne(type => Playlist, playlist => playlist.music)
  playlist: Playlist;
}