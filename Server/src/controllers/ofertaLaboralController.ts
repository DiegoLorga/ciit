import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class OfertaLaboralController
{
    public async mostrar_todos_puestos(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM ofertalaboral');
        console.log(respuesta)
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM ofertalaboral WHERE idOferta = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Oferta no encontrado'});
    }
    //EMPIEZA CRUD
    public async createOferta(req: Request, res: Response): Promise<void> {
        const idEmpresa = req.body.id_empresa;
        var resp = await pool.query("INSERT INTO ofertalaboral set ?",[req.body]);
        const idOferta = resp.insertId;
        const consulta = {"idEmpresa":idEmpresa, "idOferta":idOferta};
        resp = await pool.query(`INSERT INTO oferta_empresa set ?`, [consulta]);
        res.json(resp);
    }

    public async actualizarOferta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        //console.log(req.params);
        console.log(id);
        const resp = await pool.query("UPDATE ofertalaboral set ? WHERE idOferta = ?", [req.body, id]);
        res.json(resp);
        //res.json(null);
    }

    public async eliminarOferta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM ofertalaboral WHERE idOferta = ${id}`);
        res.json(resp);
    }

}
export const ofertaLaboralController = new OfertaLaboralController();