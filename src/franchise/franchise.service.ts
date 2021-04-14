import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Franchise } from 'src/entity/franchise.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FranchiseService {
  constructor(
    @InjectRepository(Franchise)
    private readonly franchiseRepository: Repository<Franchise>,
  ) {}

  async createFranchise(data) {
    return this.franchiseRepository.save(data)
  }

  async findOneById(id: string): Promise<Franchise> {
    return this.franchiseRepository.findOne({ where: { id } })
  }
}