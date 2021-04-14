import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from 'src/entity/store.entity';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { StoreController } from './store.controller';
import { FranchiseModule } from 'src/franchise/franchise.module';

@Module({
  imports: [TypeOrmModule.forFeature([Store]), FranchiseModule],
  providers: [StoreService, StoreResolver],
  controllers: [StoreController],
})
export class StoreModule {}
