
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Store } from 'src/entity/store.entity';
import { StoreCreateInput } from 'src/graphql/input/store.create.input';
import { StoreModel } from 'src/graphql/model/store.model';
import { StoreService } from './store.service';

@Resolver()
export class StoreResolver {
    constructor(private readonly storeService: StoreService){}

    @Query(() => [StoreModel])
    async stores(): Promise<Store[]> {
        return this.storeService.getStores();
    }

    @Query(() => StoreModel)
    async store(@Args('id', {type: () => ID}) id: string): Promise<Store> {
        return this.storeService.getStoreById(id);
    }

    @Mutation(() => StoreModel)
    async createStore(@Args('input') input: StoreCreateInput): Promise<Store> {
        return this.storeService.createStore(input)
    }
}
