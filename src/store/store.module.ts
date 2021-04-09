import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from 'src/entity/store.entity';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { StoreController } from './store.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  providers: [StoreService, StoreResolver],
  controllers: [StoreController]
})
export class StoreModule {}
