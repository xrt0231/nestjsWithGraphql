import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from 'src/entity/store.entity';
import { StoreCreateInput } from 'src/graphql/input/store.create.input';
import { Repository } from 'typeorm';

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(Store) private storeRepository: Repository<Store>,
    ) {}

    async getStores(): Promise<Store[]> {
        return this.storeRepository.find();
    }

    async getStoreById(id: string): Promise<Store> {
        return this.storeRepository.findOne({ where: { id }} )
    }

    async createStore(input: StoreCreateInput): Promise<Store> {
        return this.storeRepository.save(input);
    }

    // async updateStore(store: Store) {
    //     this.storeRepository.save(store)
    // }

    // async deleteStore(store: Store) {
    //     this.storeRepository.delete(store);
    // }
}
