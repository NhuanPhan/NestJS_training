import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Createdto } from './Dtoitems/createdto';
import { TaskRepository } from './task.repository';
import { Task } from './UserEntity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(TaskRepository)

        private taskRepository:TaskRepository
    ){}


    CreateTask (createdto:Createdto){
        const task = new Task
    }

    // private readonly items:Createdto[]=[
    //     {
    //         id: "12345",
    //         name:"Nhuan Phan",
    //         description:"Test 01",
    //         status:TaskStatus.OPEN,
    //     },
    //     {
    //         id: "54321",
    //         name: "Phan Nhuan",
    //         description:"Test 02",
    //         status:TaskStatus.DONE,
    //     },
    // ];

    // findAll(): Createdto[] {
    //     return this.items;
 
    // }
    // findOne(name:string):Createdto{
    //     return this.items.find(item=>item.name === name);
    // }

}
