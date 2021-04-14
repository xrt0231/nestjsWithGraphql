import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FranchiseInput } from 'src/graphql/input/franchise.input';
import { FranchiseModel } from 'src/graphql/model/franchise.model';
import { FranchiseService } from './franchise.service';

@Resolver(() => FranchiseModel)
export class FranchiseResolver {
  constructor(private readonly franchiseService: FranchiseService) {}

    @Mutation(() => FranchiseModel)
  async createFranchise(@Args("data") data: FranchiseInput) {
    return this.franchiseService.createFranchise(data);
    }
}
