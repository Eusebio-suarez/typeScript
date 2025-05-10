// clase persona
export class Persona {
    //constructor
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    //getters and setters
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    // método para mostar la informacion
    toString() {
        return `Nombre: ${this._nombre}, Edad: ${this._edad}`;
    }
}
