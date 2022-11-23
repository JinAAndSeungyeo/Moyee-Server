import Visitor from 'shop/entities/visitor.entity';
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';

@Entity('shop')
export default class Shop {
  @PrimaryGeneratedColumn({ name: 'idx' })
  idx!: number;

  @Column({ name: 'name' })
  name!: string;

  @Column({ name: 'address' })
  address!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @OneToOne(type => Visitor, visitor => visitor.shop)
  visitor: Visitor;
}