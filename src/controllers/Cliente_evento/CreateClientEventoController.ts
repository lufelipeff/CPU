import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateClientEventoController{
    async create (request:Request,response:Response) {
        const {id_evento,cpf}= request.params;

        const evento = await prismaClient.evento.findUnique({
            where:{
                id:Number(id_evento)
            },
                include: {
                    evento_clientes: true
                }
        })

        const cliente = await prismaClient.cliente.findUnique({

            where:{
                cpf
            }
        })
        
        if(evento?.maximo_pessoas <= evento?.evento_clientes.length){
            return response.status(200).json({erro: "Evento já atingiu número máximo de pessoas"})
        }

        const eventoCliente =  await prismaClient.clienteEvento.create({
            data:{
                id_cliente : cliente.id,
                id_evento: evento.id
            }
        });

        return response.status(200).json({message: "Inscrição no evento realizada com sucesso", eventoCliente})
        
    }
}