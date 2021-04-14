import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Franchise } from 'src/entity/franchise.entity';
import { Store } from 'src/entity/store.entity';
import { FranchiseService } from 'src/franchise/franchise.service';
import { FranchiseInput } from 'src/graphql/input/franchise.input';
import { StoreUpdateInput } from 'src/graphql/input/store.input';
import { Repository } from 'typeorm';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) private storeRepository: Repository<Store>,
    private readonly franchiseService: FranchiseService,
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
  async createStore(input: any): Promise<Store> {
    return this.storeRepository.save(input);
  }

  //To update one store data from DB
  async updateStore(id: string, input: StoreUpdateInput): Promise<Store> {
    const franchise = await this.franchiseService.findOneById(
      input.franchise
    );

    await this.storeRepository.update(id, { ...input, franchise });
    return this.storeRepository.findOne({
      where: { id },
      relations: ["franchise"],
    });
  }

  //To delete one store data by store id form DB
  async deleteStoreById(id: string): Promise<Store[]> {
    await this.storeRepository.delete({ id });
    return this.getStores();
  }

  //To find if the stores is a franchise (use field resolver)
  // async findFranchiseById(id: string): Promise<string> {
  //   const store = await this.storeRepository.findOne({ id });
  //   return store.franchise === 'y'? '是' : '否';
  // }

  //Create franchise cat
  // async createFranchise(inputFranchiseCat: FranchiseInput): Promise<Franchise> {
  //   // return this.franchise.save(inputFranchiseCat);
  // }
}
