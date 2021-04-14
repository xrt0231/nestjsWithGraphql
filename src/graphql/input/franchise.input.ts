import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FranchiseInput {
  @Field()
  category: string;
}
