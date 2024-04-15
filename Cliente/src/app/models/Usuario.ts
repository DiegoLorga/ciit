export class Usuario{
    id: number;
    nombre : string;
    correo: string;
    id_Rol: number;
    contrasena: string;
    fotito: number;
    imagenUrl: string; // URL de la imagen

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.correo = 'Angel@gmail.com';
        this.id_Rol = 0;
        this.contrasena = '789*';
        this.fotito = 0;
        this.imagenUrl='';
    }
}