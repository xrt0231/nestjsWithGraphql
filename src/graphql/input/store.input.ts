import { InputType, Field, Int, ID } from '@nestjs/graphql';

@InputType()
export class StoreCreateInput {
  @Field()
  name: string;
  @Field(() => Int)
  size: number;
  @Field({ nullable: true, description: '地區' })
  area: string;
  @Field(() => ID)
  franchise: string;
}

//For update store data
@InputType()
export class StoreUpdateInput {
  @Field({ nullable: true })
  name: string;
  @Field(() => Int, { nullable: true })
  size: number;
  @Field({ nullable: true, description: '地區' })
  area: string;
  @Field(() => ID)
  franchise: string;
}
