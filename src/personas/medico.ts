import { Empleado } from "./empleado.js";
//clase medico
export class Medico extends Empleado{
    //atributos privados
    private  _especialidad :string
    //constructor de la clase
    constructor(nombre:string,edad: number,salario: number,especialidad: string){
        super(nombre,edad,salario);
        this._especialidad = especialidad
    }
    //getters and setters
    get especialidad(): string {
        return this._especialidad;
    }

    set especialidad(especialiodad:string){
        this._especialidad=especialiodad
    }
    //metodo para inprimir la informacion
    toString(): string {
        return `Medico: ${super.toString} Especialidad : ${this._especialidad}`
    }
}