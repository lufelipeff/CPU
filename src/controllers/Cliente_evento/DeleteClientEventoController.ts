import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteClientEventoController {
    async delete (request:Request,response:Response) {
        const{id}=request.params

        const existe= await prismaClient.clienteEvento.findUnique({
            where:{
                id:Number(id)
            }
        })

        if(!existe){
            return response.status(404).json({error:"Registro não encontrado"})
        }

        const evento_clientes = await prismaClient.clienteEvento.delete({
            where:{
                id:Number(id)
            }
        })
        return response.status(200).json({message:'Registro deletado com sucesso'})
    }
}