import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from 'user/entities/user.entity';

@Entity('keyword')
export default class Keyword {
  @PrimaryGeneratedColumn({ name: 'idx' })
  idx!: number;

  @Column({ name: 'keyword' })
  keyword!: string;

  @ManyToOne(type => User, user => user.keywords)
  user: User;
}