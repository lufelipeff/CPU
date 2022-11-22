import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class FindEventoController {
    async find (request:Request,response:Response) {
        const {id}= request.params;

        const evento = await prismaClient.evento.findUnique({
            where:{
                id:Number(id)
            },
                include: {
                    evento_clientes: {
                        include:{
                            cliente:true
                    
                
                        }
                    }

                }
        })
        if(!evento){
            return response.status(404).json({error:"Evento não encontrado"})
        }
        return response.status(200).json(evento)
    }

    async findall (request:Request,response:Response) {

        const eventos = await prismaClient.evento.findMany()
        return response.status(200).json(eventos)
    }
}
