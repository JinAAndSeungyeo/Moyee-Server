import Shop from 'shop/entities/shop.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import User from 'user/entities/user.entity';

@Entity('visitor')
export default class Visitor {
  @PrimaryGeneratedColumn({ name: 'idx' })
  idx!: number;

  @RelationId((visitor: Visitor) => visitor.shop)
  shopIdx!: number;

  @JoinColumn({ name: 'shop' })
  @OneToOne(() => Shop, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  shop!: Shop;

  @RelationId((visitor: Visitor) => visitor.user)
  userId!: number;

  @JoinColumn({ name: 'user_id' })
  @OneToOne(type => Shop, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user!: User;
}