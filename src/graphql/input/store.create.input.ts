import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class StoreCreateInput {
  @Field()
  name: string;
  @Field(() => Int)
  size: number;
  @Field({ nullable: true, description: '地區' })
  area: string;
}
