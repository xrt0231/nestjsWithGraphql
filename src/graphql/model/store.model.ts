import { ObjectType, Field, Int } from '@nestjs/graphql'

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
}
