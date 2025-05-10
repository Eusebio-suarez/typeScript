import { Persona } from "./persona.js";
//clase empleado que hereda de persona
export class Empleado extends Persona {
    //constructor
    constructor(nombre, edad, salario) {
        super(nombre, edad);
        this._salario = salario;
    }
    //getters and setters
    get salario() {
        return this._salario;
    }
    set salrio(salario) {
        this._salario = salario;
    }
    //metodo para imprimir la informacion
    toString() {
        return super.toString() + ` Salario: ${this._salario}`;
    }
}
