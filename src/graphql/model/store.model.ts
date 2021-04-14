import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FranchiseModel } from './franchise.model';

@ObjectType('Store')
export class StoreModel {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(() => Int)
  size: number;
  @Field({ nullable: true })
  area: string;
  @Field(() => FranchiseModel, { nullable: true })
  franchise: FranchiseModel;
}
