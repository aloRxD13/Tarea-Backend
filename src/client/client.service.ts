import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientService {

    private clients =[
        {
            id: 1,
            nombre: "cliente 1",
            direccion: "direccion 1"
          
        },
          
        {
            id: 2,
            nombre: "cliente 2",
            direccion: "direccion 2"
        }
,
        {
            id: 3,
            nombre: "cliente 3",
            direccion: "direccion 3"
        }
    ] 

    findAll(){
        return this.clients;
    }

    finById(id: number) {
        
        const client = this.clients.find( c => c.id === id);
        if(!client){
            throw new NotFoundException(`Client with id ${id}does not exist`);
        }
        return client;
    }

    upadateClient(clientBody, id){
        //validaciones del cliente


        const client = this.clients.find( c => c.id === id);
        
        if(!client){
            throw new NotFoundException(`Client with id ${id}does not exist`);
        }
        //validaciones para actualizar el cliente
        
        return {status:'cliente actualizado'}
    }

    deleteClient( id){
       
        const client = this.clients.find( c => c.id === id);
        
        if(!client){
            throw new NotFoundException(`Client with id ${id}does not exist`);
        }
        //validaciones para eleiminar
        return {status:'cliente eliminado'}
    }

    createClient(clientBody){
        //validaciones del cliente


        const client = this.clients.find( c => c.id === clientBody.id);
        
        if(!client){
            throw new NotFoundException(`Client with id ${clientBody.id} exist`);
        }
        //validaciones para crear el cliente
        
        return {status:'cliente creado'}
    }

}
