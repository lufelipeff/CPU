import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateEventoController {
    async create (request:Request,response:Response) {
        const {nome_evento,data_hora_evento,local_evento,maximo_pessoas}= request.body;

        const dataFormatada = new Date(data_hora_evento)

        

        const cliente = await prismaClient.evento.create({
            data:{
                nome_evento,data_hora_evento: dataFormatada,local_evento,maximo_pessoas
            }
        })
        return response.status(201).json(cliente)
    }
}