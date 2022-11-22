import { Request, Response } from "express";
import { idText } from "typescript";
import { prismaClient } from "../../database/prismaClient";

export class UpdateClientController {
    async update (request:Request,response:Response) {

        const{id}=request.params
        const {nome,cpf,email,telefone}= request.body;
        
        const existe=await prismaClient.cliente.findUnique({
            where:{
                id:Number(id)
            }
        })

        if(!existe){
            return response.status(404).json({error:"Cliente não encontrado"})
        }

        const cliente = await prismaClient.cliente.update({
            where:{
                id:Number(id)
            },
            data:{
                nome,cpf,email,telefone
            }
        })
        return response.status(201).json(cliente)
    }
}