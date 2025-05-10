import { Persona } from "./persona.js";
//clase paciente
export class Paciente extends Persona{
    private _id;
    private _sexo;
    private _diagnostico;
    //constructor de la clase
    constructor(nombre:string,eda:number,id:number,sexo:string,diagnostico:string){
        super(nombre,eda);
        this._id=id;
        this._sexo=sexo;
        this._diagnostico=diagnostico;
    }
    //getters an setters
    get id():number{
        return this._id;
    }

    set id(id:number){
        this._id=id;
    }

    get sexo():string{
        return this._sexo;
    }

    set sexo(sexo:string){
        this._sexo=sexo;
    }

    get diagnostico():string{
        return this._diagnostico;
    }

    set diagnostico(diagnostico:string){
        this._diagnostico=diagnostico;
    }
    //medodo para imprimir informacion
    toString(): string {
        return `Paciente: ${super.toString()}, Id: ${this._id}, Sexo: ${this._sexo} , Diagnostico: ${this._diagnostico}`;
    }
}