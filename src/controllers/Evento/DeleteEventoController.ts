import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteEventoController {
    async delete (request:Request,response:Response) {
        const {nome_evento,data_hora_evento,local_evento,maximo_pessoas,idade_minima}= request.body;
        const{id}=request.params

        const existe=await prismaClient.evento.findUnique({
            where:{
                id:Number(id)
            }
        })

        if(!existe){
            return response.status(404).json({error:"Evento não encontrado"})
        }

        const cliente = await prismaClient.evento.delete({
            where:{
                id:Number(id)
            }
        })
        return response.status(200).json({message:'Registro deletado com sucesso'})
    }
}