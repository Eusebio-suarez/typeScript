import { Persona } from "./persona.js";
//clase paciente
export class Paciente extends Persona {
    //constructor de la clase
    constructor(nombre, eda, id, sexo, diagnostico) {
        super(nombre, eda);
        this._id = id;
        this._sexo = sexo;
        this._diagnostico = diagnostico;
    }
    //getters an setters
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get diagnostico() {
        return this._diagnostico;
    }
    set diagnostico(diagnostico) {
        this._diagnostico = diagnostico;
    }
    //medodo para imprimir informacion
    toString() {
        return `Paciente: ${super.toString()}, Id: ${this._id}, Sexo: ${this._sexo} , Diagnostico: ${this._diagnostico}`;
    }
}
