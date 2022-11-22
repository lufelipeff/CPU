import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteClientController {
    async delete (request:Request,response:Response) {
        const {nome,cpf,email,telefone}= request.body;
        const{id}=request.params

        const existe=await prismaClient.cliente.findUnique({
            where:{
                id:Number(id)
            }
        })

        if(!existe){
            return response.status(404).json({error:"Cliente não encontrado"})
        }

        const cliente = await prismaClient.cliente.delete({
            where:{
                id:Number(id)
            }
        })
        return response.status(200).json({message:'Registro deletado com sucesso'})
    }
}