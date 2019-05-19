export class Usuario {

    private id : number;
    private nombre: string;
    private apellidos: string;
    private dni: string;

    constructor(){}

    public setId (id : number) {
        this.id = id;
    }

    public getId () : number {
        return this.id;
    }

    public setNombre (nombre : string) {
        this.nombre = nombre;
    }

    public getNombre () : string {
        return this.nombre;
    }

    public setApellidos (apellidos : string) {
        this.apellidos = apellidos;
    }

    public getApellidos () : string {
        return this.apellidos;
    }

    public setDni (dni : string) {
        this.dni = dni;
    }

    public getDni () : string {
        return this.dni;
    }

}