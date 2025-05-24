import { Persona } from "./persona.js"
//clase empleado que hereda de persona
export class Empleado extends Persona{
    //atributos privados
    private _id:number
    private _salario:number
    //constructor
    constructor(nombre:string,edad:number,id:number,salario:number){
        super(nombre,edad)
        this._salario= salario
        this._id=id
    }
    //getters and setters
    get id():number{
        return this._id
    }

    set id(id:number){
        this._id=id
    }

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