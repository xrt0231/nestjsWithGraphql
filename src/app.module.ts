import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { StoreModule } from './store/store.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
    // exclude: ['/api*'],
  }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ssSS@@88',
      database: 'nest_test',
      entities: ['dist/entity/*.entity.js'],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
        autoSchemaFile: 'src/schema.graphql',    
        tracing: true,  
    }),
    StoreModule
    
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
