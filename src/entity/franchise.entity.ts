import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Store } from './store.entity';
//Create franchise category table

@Entity()
export class Franchise extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category: string;

  @OneToMany(() => Store, (item) => item.franchise)
  stores: Store;
}
