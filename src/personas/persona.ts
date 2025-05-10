// clase persona
export class Persona {
    //atributos privados
    private _nombre:string
    private  _edad:number
    //constructor
    constructor(nombre:string,edad:number) {
        this._nombre = nombre
        this._edad = edad
    }
    //getters and setters
    get nombre() : string {
        return this._nombre
    }

    set nombre(nombre:string){
        this._nombre = nombre
    }

    get edad():number{
        return this._edad
    }

    set edad(edad:number){
        this._edad = edad
    }

    // método para mostar la informacion
    toString(): string {
        return `Nombre: ${this._nombre}, Edad: ${this._edad}`
    }
}