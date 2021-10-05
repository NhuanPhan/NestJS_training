import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmconfig } from './config/typeorm.config';
import { ItemsModule } from './items/items.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmconfig),
    ItemsModule],

})
export class AppModule {}
