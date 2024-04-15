export class Empresa{
    id_empresa: number;
    nombre_empresa : string;
    direccion: string;
    rfc: string;
    telefono: string;
    responsable: string;
    responsible: string;
    fecha : string;

    constructor() {
        this.id_empresa = 0;
        this.nombre_empresa = '';
        this.direccion = '';
        this.rfc = '';
        this.telefono = '';
        this.responsable = '';
        this.responsible = '';
        this.fecha = '';
    }
}