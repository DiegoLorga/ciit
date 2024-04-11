import { Router } from 'express';
import { ofertaLaboralController } from '../controllers/ofertaLaboralController';
class OfertaLaboralRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{

    this.router.get('/mostrarTodosOfertasLaborales/',ofertaLaboralController.mostrar_todos_puestos);
    this.router.get('/obtenerOferta/:id',ofertaLaboralController.listOne);
    this.router.post('/createOferta/',ofertaLaboralController.createOferta);
    this.router.put('/actualizarOferta/:id',ofertaLaboralController.actualizarOferta);
    this.router.delete('/eliminarOferta/:id',ofertaLaboralController.eliminarOferta);
}
}
const ofertaLaboralRoutes= new OfertaLaboralRoutes();
export default ofertaLaboralRoutes.router;
