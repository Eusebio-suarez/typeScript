// clase cita
export class Cita {
    //atributos privado
    private _id:number
    private _fecha: string
    private _hora: string
    private _paciente: string
    private _medico: string
    private _motivo: string
    private _numConsultorio:number
    private _estado:string
    // Constructor
    constructor(id: number,fecha: string, hora: string, paciente: string, medico: string, motivo: string, numConsultorio: number,estado :string) {
        this._id = id
        this._fecha = fecha
        this._hora = hora
        this._paciente = paciente
        this._medico = medico
        this._motivo = motivo
        this._numConsultorio =numConsultorio
        this._estado = estado
    }
    //getters and setters
    get id():number{
        return this._id
    }

    set id(id:number){
        this._id =id
    }

    get fecha():string{
        return this._fecha
    }

    set fecha(fecha:string){
        this._fecha=fecha
    }

    get hora():string{
        return this._hora
    }

    set hora(hora:string){
        this._hora=hora
    }

    get paciente():string{
        return this._paciente
    }

    set paciente(paciente:string){
        this._paciente=paciente
    }

    get medico():string{
        return this._medico
    }

    set medico(medico:string){
        this._medico = medico
    }

    get motivo():string{
        return this._motivo
    }

    set motivo(motivo:string){
        this._motivo = motivo
    }

    get numConsultorio():number{
        return this._numConsultorio
    }

    set numConsultorio(numConsultorio:number){
        this._numConsultorio = numConsultorio
    }

    get estado ():string{
        return this._estado
    }

    set estado(estado:string){
        this._estado= estado
    }

    //metodo para imprimir la informacion
toString(): string {
    return `Cita:
    Id: ${this._id}
    Fecha: ${this._fecha}
    Hora: ${this._hora}
    Paciente: ${this._paciente}
    Médico: ${this._medico}
    Motivo: ${this._motivo}
    Número de Consultorio: ${this._numConsultorio}
    Estado: ${this._estado}`;
}

}