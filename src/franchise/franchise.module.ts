import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Franchise } from 'src/entity/franchise.entity';
import { FranchiseService } from './franchise.service';
import { FranchiseResolver } from './franchise.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Franchise])],
  providers: [FranchiseService, FranchiseResolver],
  exports: [FranchiseService],
})
export class FranchiseModule {} 
