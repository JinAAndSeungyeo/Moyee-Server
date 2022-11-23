import Music from 'playlist/entities/music.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import User from 'user/entities/user.entity';

@Entity('playlist')
export default class Playlist {
  @PrimaryGeneratedColumn({ name: 'idx' })
  idx!: number;

  @Column({ name: 'title' })
  title!: string;

  @RelationId((playlist: Playlist) => playlist.user)
  userId!: string;

  @JoinColumn({ name: 'user_id' })
  @OneToOne(type => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user!: User;

  @RelationId((playlist: Playlist) => playlist.musics)
  music!: number;

  @JoinColumn({ name: 'music' })
  @OneToMany(type => Music, music => music.playlist)
  musics!: Music[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}