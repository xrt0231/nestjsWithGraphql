import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Franchise')
export class FranchiseModel {
  @Field()
  id: string;
  @Field()
  category: string;
}
