import { Param } from '@nestjs/common';
import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Store } from 'src/entity/store.entity';
import { FranchiseInput } from 'src/graphql/input/franchise.input';
import {
  StoreCreateInput,
  StoreUpdateInput,
} from 'src/graphql/input/store.input';
import { FranchiseModel } from 'src/graphql/model/franchise.model';
import { StoreModel } from 'src/graphql/model/store.model';
import { StoreService } from './store.service';

@Resolver(() => StoreModel)
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  //To get all stores data from DB
  @Query(() => [StoreModel])
  async stores(): Promise<Store[]> {
    return this.storeService.getStores();
  }

  //To get one store data by store id from DB
  @Query(() => StoreModel)
  async store(@Args('id', { type: () => ID }) id: string): Promise<Store> {
    return this.storeService.getStoreById(id);
  }

  //To create one store data for DB
  @Mutation(() => StoreModel)
  async createStore(@Args('input') input: StoreCreateInput): Promise<Store> {
    return this.storeService.createStore(input);
  }

  //To update one store data from DB
  @Mutation(() => StoreModel)
  async updateStore(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: StoreUpdateInput,
  ): Promise<Store> {
    return this.storeService.updateStore(id, input);
  }

  //To delete one store data by store id form DB
  @Mutation(() => [StoreModel])
  async deleteStore(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Store[]> {
    return this.storeService.deleteStoreById(id);
  }

  //To find if the stores is a franchise (use field resolver)
  // @ResolveField('franchise', () => String)
  // public async getFranchise(@Parent() store: StoreModel) {
  //   const { id } = store;
  //   return this.storeService.findFranchiseById(id);
  // }

  // //Create a franchise category
  // @Mutation(() => FranchiseModel)
  // async create franchise(@Args('input franchise category') inputFranchiseCat: FranchiseInput): Promise<FranchiseModel> {
  //   return this.franchiseService.createFranchiseCat(inputFranchiseCat);
  // }
}
