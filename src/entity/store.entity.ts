import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Franchise } from './franchise.entity';

//Create Store table
@Entity()
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  size: number;

  @Column({ nullable: true, comment: '地區' })
  area: string;

  @ManyToOne(() => Franchise, (item) => item.stores)
  franchise: Franchise;
}
