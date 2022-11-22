import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class FindClientController {
    async find (request:Request,response:Response) {
        const {cpf}= request.params;

        const cliente = await prismaClient.cliente.findUnique({
            where:{
                cpf
            },
                include:{
                    clientes_evento:{
                        include:{
                            evento:true
                        }
                    }
                }

        })
        if(!cliente){
            return response.status(404).json({error:"Cliente não encontrado"})
        }
        return response.status(200).json(cliente)
    }

    async findall (request:Request,response:Response) {

        const clientes = await prismaClient.cliente.findMany()
        return response.status(200).json(clientes)
    }
}