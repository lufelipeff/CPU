import { Request, Response } from "express";
import { idText } from "typescript";
import { prismaClient } from "../../database/prismaClient";

export class UpdateEventoController {
    async update (request:Request,response:Response) {

        const{id}=request.params
        const {nome_evento,data_hora_evento,local_evento,maximo_pessoas}= request.body;
        const dataFormatada = new Date(data_hora_evento)
        
        const existe=await prismaClient.evento.findUnique({
            where:{
                id:Number(id)
            }
        })

        if(!existe){
            return response.status(404).json({error:"Cliente não encontrado"})
        }

        const evento = await prismaClient.evento.update({
            where:{
                id:Number(id)
            },
            data:{
                nome_evento,data_hora_evento: dataFormatada,local_evento,maximo_pessoas
            }
        })
        return response.status(201).json(evento)
    }
}