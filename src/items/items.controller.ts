import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata';
import { ItemsService } from './items.service';
// import { Createdto } from './Dtoitems/Createdto';
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){}

    // @Get()
    // findAll():Createdto[] {
    //     return this.itemsService.findAll();

    // }
    // @Get(':name')
    // findOne(@Param('name') name:string):Createdto {
    //     return this.itemsService.findOne(name);
    // }
    // @Post()
    // @UsePipes(ValidationPipe)
    // create(@Body()Createdto:Createdto):string{
    //     return `Name: ${Createdto.name} Desc: ${Createdto.description} ID: ${Createdto.id}`;

    // }
}

