import { Empleado } from "./empleado.js";
//clase medico
export class Medico extends Empleado {
    //constructor de la clase
    constructor(nombre, edad, id, salario, especialidad) {
        super(nombre, edad, id, salario);
        this._especialidad = especialidad;
    }
    //getters and setters
    get especialidad() {
        return this._especialidad;
    }
    set especialidad(especialiodad) {
        this._especialidad = especialiodad;
    }
    //metodo para inprimir la informacion
    toString() {
        return `Medico: ${super.toString} Especialidad : ${this._especialidad}`;
    }
}
