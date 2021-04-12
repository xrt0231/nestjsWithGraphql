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

  //To get all stores data from DB
  async getStores(): Promise<Store[]> {
    return this.storeRepository.find();
  }

  //To get one store data by store id from DB
  async getStoreById(id: string): Promise<Store> {
    return this.storeRepository.findOne({ where: { id } });
  }

  //To create one store data for DB
  async createStore(input: StoreCreateInput): Promise<Store> {
    return this.storeRepository.save(input);
  }

  //To update one store data from DB
  async updateStore(id: string, data: any): Promise<Store> {
    await this.storeRepository.update({ id }, data);
    return this.storeRepository.findOne({ id });
  }

  //To delete one store data by store id form DB
  async deleteStoreById(id: string): Promise<any> {
    await this.storeRepository.delete({ id });
  }
}
