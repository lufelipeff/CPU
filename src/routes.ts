import { DeleteClientEventoController } from './controllers/Cliente_evento/DeleteClientEventoController';
import { DeleteEventoController } from './controllers/Evento/DeleteEventoController';
import { UpdateEventoController } from './controllers/Evento/UpdateEventoController';
import { FindEventoController } from './controllers/Evento/FindEventoController';
import { CreateEventoController } from './controllers/Evento/CreateEventoController';
//-----------------------------------------------------------------------------------------------------------//
import { DeleteClientController } from './controllers/Cliente/DeleteClientController';
import { UpdateClientController } from './controllers/Cliente/UpdateClientController';
import { CreateClientController } from './controllers/Cliente/CreateClientController';
import { FindClientController } from './controllers/Cliente/FindClientController';
//--------------------------------------------------------------------------------------------------------------//
import { CreateClientEventoController } from './controllers/Cliente_evento/CreateClientEventoController';



import { Request, Response, Router } from "express";


const router = Router();

const createClientEventoController = new CreateClientEventoController()

const deleteClientEventoController= new DeleteClientEventoController()
//--------------------------------------------------------------------//

const createClientConroller = new CreateClientController()

const findClientConroller = new FindClientController()

const updateClientConroller = new UpdateClientController()

const deleteClientConroller = new DeleteClientController()
//--------------------------------------------------------//

const createEventoConroller = new CreateEventoController()

const findEventoConroller = new FindEventoController()

const updateEventoConroller = new UpdateEventoController()

const deleteEventoConroller = new DeleteEventoController()
//--------------------------------------------------------//


router.get('/',(request:Request,response:Response)=>{
    response.status(200).json('Teste');
})

router.post ('/cliente',createClientConroller.create)

router.get('/cliente/:cpf',findClientConroller.find)

router.get('/cliente',findClientConroller.findall)

router.put('/cliente/:id',updateClientConroller.update)

router.delete('/cliente/:id',deleteClientConroller.delete)
//--------------------------------------------------------//

router.post ('/evento',createEventoConroller.create)

router.get('/evento/:id',findEventoConroller.find)

router.get('/evento',findEventoConroller.findall)

router.put('/evento/:id',updateEventoConroller.update)

router.delete('/evento/:id',deleteEventoConroller.delete)
//-------------------------------------------------------//
router.get ('/cliente_evento/:cpf/:id_evento',createClientEventoController.create)

router.delete('/cliente_evento/:id',deleteClientEventoController.delete)


export {router}