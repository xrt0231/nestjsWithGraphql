import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { raw } from 'express';
import { StoreInputDto } from 'src/dto/store.input.dto';
import { StoreCreateInput } from 'src/graphql/input/store.input';
import { StoreService } from './store.service';

//Below are for RESTful API
@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('all')
  async getStories() {
    return this.storeService.getStores();
  }

  @Get('/:id')
  async getStore(@Param('id') id: string) {
    return this.storeService.getStoreById(id);
  }

  @Post('create')
  async createStore(@Body() input: StoreCreateInput) {
    return this.storeService.createStore(input);
  }

  @Delete('/delete/:id')
  async deleteStoreById(@Param('id') id: string) {
    return this.storeService.deleteStoreById(id);
  }
}
