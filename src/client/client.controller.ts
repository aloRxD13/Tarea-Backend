import { Body, Controller,Delete,Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';


@Controller('client')
export class ClientController {

    constructor (private readonly clientService: ClientService){}

    @Get()
    getClients(){
        return this.clientService.findAll();
    }

    @Get(':id')
    getClientById(@Param('id', ParseIntPipe) id: number){
        console.log(`el id a buscar es ${id}`)
        
        return this.clientService.finById(id);
    }

    @Put(':id')
    updateClient(@Param('id', ParseIntPipe) id: number, @Body() Body){
        console.log(`el id a actualizar es ${id}`)
        console.log(Body);
        return this.clientService.upadateClient(Body, id);
    }

    @Delete(':id')
    deleteClientById(@Param('id', ParseIntPipe) id: number){
        console.log(`el id a eliminar es ${id}`)
        
        return this.clientService.deleteClient(id);
    }

    @Post()
    createClient(@Body() body){
        
        console.log(body);
        return this.clientService.createClient(body);
    }
}

