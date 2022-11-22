import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateClientController {
    async create (request:Request,response:Response) {
        const {nome,cpf,email,telefone}= request.body;

        const cliente = await prismaClient.cliente.create({
            data:{
                nome,cpf,email,telefone
            }
        })
        return response.status(201).json(cliente)
    }
}