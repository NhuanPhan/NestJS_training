import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import { hostname } from 'os';

export const typeOrmconfig : TypeOrmModuleOptions ={
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'postgres',
    database:'management NestJS',
    entities:[__dirname + '/../**/*.entity.ts'],
    synchronize:true,

};