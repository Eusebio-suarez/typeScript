import { Persona } from "./persona.js";
//clase empleado que hereda de persona
export class Empleado extends Persona {
    //constructor
    constructor(nombre, edad, id, salario) {
        super(nombre, edad);
        this._salario = salario;
        this._id = id;
    }
    //getters and setters
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
    //metodo para imprimir la informacion
    toString() {
        return super.toString() + ` Salario: ${this._salario}`;
    }
}
