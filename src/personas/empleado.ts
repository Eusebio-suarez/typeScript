import { Persona } from "./persona.js"
//clase empleado que hereda de persona
export class Empleado extends Persona{
    //atributos privados
    private _salario:number
    //constructor
    constructor(nombre:string,edad:number,salario:number){
        super(nombre,edad)
        this._salario= salario
    }
    //getters and setters
    get salario():number{
        return this._salario
    }

    set salario(salario:number){
        this._salario=salario
    }

    //metodo para imprimir la informacion
    toString(): string {
       return super.toString()+` Salario: ${this._salario}`
    }
}