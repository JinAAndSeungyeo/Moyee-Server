import Keyword from 'keyword/entities/keyword.entity';
import Playlist from 'playlist/entities/playlist.entity';
import Visitor from 'shop/entities/visitor.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, RelationId } from 'typeorm';

@Entity('user')
export default class User {
  @PrimaryColumn({ name: 'id' })
  id!: string;

  @Column({ name: 'password' })
  password!: string;

  @Column({ name: 'name' })
  name!: string;

  @Column({ name: 'nickname' })
  nickname!: string;

  @Column({ name: 'category' })
  cateogry!: string;

  @RelationId((user: User) => user.keywords)
  keyword!: number;

  @JoinColumn({ name: 'keyword' })
  @OneToMany(type => Keyword, keyword => keyword.user, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  })
  keywords!: Keyword[];

  @Column({ name: 'profile_image' })
  profileImage!: string;

  @OneToOne(type => Playlist, playlist => playlist.user)
  playlist: Playlist;

  @OneToOne(type => Visitor, visitor => visitor.user)
  visitor: Visitor;
}