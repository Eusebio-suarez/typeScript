// clase cita
export class Cita {
    // Constructor
    constructor(fecha, hora, paciente, medico, motivo, numConsultorio, estado) {
        this._fecha = fecha;
        this._hora = hora;
        this._paciente = paciente;
        this._medico = medico;
        this._motivo = motivo;
        this._numConsultorio = numConsultorio;
        this._estado = estado;
    }
    //getters and setters
    get fecha() {
        return this._fecha;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get hora() {
        return this._hora;
    }
    set hora(hora) {
        this._fecha = hora;
    }
    get paciente() {
        return this._paciente;
    }
    set paciente(paciente) {
        this._paciente = paciente;
    }
    get medico() {
        return this._medico;
    }
    set medico(medico) {
        this._medico = medico;
    }
    get motivo() {
        return this._motivo;
    }
    set motivo(motivo) {
        this.motivo = motivo;
    }
    get numConsultorio() {
        return this._numConsultorio;
    }
    set numConsultorio(numConsultorio) {
        this._numConsultorio = numConsultorio;
    }
    get estado() {
        return this._estado;
    }
    set estado(estado) {
        this._estado = estado;
    }
    //metodo para imprimir la informacion
    toString() {
        return `Cita:
        Fecha: ${this._fecha}
        Hora: ${this._hora}
        Paciente: ${this._paciente}
        Médico: ${this._medico}
        Motivo: ${this._motivo}
        Número de Consultorio: ${this._numConsultorio}
        Estado: ${this._estado}`;
    }
}
