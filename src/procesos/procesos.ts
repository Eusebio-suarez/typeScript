import { Paciente } from "../personas/paciente.js";
import { citas, empleados, medicos, pacientes } from "../modeloDatos.js";
import { Empleado } from "../personas/empleado.js";
import { Medico } from "../personas/medico.js";
import { Cita } from "../cita/cita.js";
// menu del sistema
let menu :string=`
    Menú del sistema\n
    1. Ingresar datos
    2. Mostrar datos
    3. Gestion de citas
    4. Salir\n\n
`
//menu ingresar datos
let menuIngresar:string=`
    Ingresar datos\n
    1. Ingresar paciente
    2. Ingresar empleado
    3. Ingrear medico
    4. Ingresar cita
    5. atras.\n\n
`
// menu mostar datos
let menuMostrar:string=`
    Mostrar datos\n
    1. Mostrar pacientes
    2. Mostar empleados
    3. Mostrar medicos
    4. Mostar citas
    5. atras \n\n
`

//menu citas
let menuCitas:string=`
    Gestion citas\n
    1. Mostar todas la citas
    2. Mostrar citas por paciente
    3. Mostrar cita por id
    4. Mostar citas pendientes
    5. Mostar citas canceladas
    6. Mostar citas expiradas
    7. Actualizar cita
    8. Atras
`

export function sistemaHospital():void{
//opcion del usuario
let opcion: number= 0;
    //menu principal
    while (opcion !== 4) {
        opcion = parseInt(prompt(menu)!);
        switch (opcion) {
            case 1:
                let opcionIngresar = 0
                while(opcionIngresar!==5){
                    opcionIngresar = parseInt(prompt(menuIngresar)!)
                    ingresaDatos(opcionIngresar)
                }
            break
            case 2: 
                let opcionMostrar =0
                while (opcionMostrar!==5) {
                    opcionMostrar=parseInt(prompt(menuMostrar)!)
                    mostarDatos(opcionMostrar)
                }
            break
            case 3:
                let opcionCitas =0
                while (opcionCitas!==8) {
                    opcionCitas=parseInt(prompt(menuCitas)!)
                    gestionarCitas(opcionCitas)
                }        
        } 
        
    }
}

//funcion para ingresar datos
function ingresaDatos(opcion:number){
    switch (opcion) {
        case 1:
            //atruibutos de el paciente
            const nombre = prompt("ingrese el nombre del paciente") ?? ""
            const edad = parseInt(prompt("Ingrese la edad del paciente") ?? "0")
            const id = parseInt(prompt("ingrese el ID del paciente") ?? "0")
            const sexo = prompt("ingrese el sexo del paciente") ?? ""
            const diagnostico = prompt("ingrese el diagnóstico del cliente") ?? ""
            //crear un paciente con la clase
            const paciente = new Paciente(nombre,edad,id,sexo,diagnostico)
            //añadir el paciente a el array
            pacientes.push(paciente)
            break;
        case 2:
            //atruibutos del empleado
            const nombreEmpledo = prompt("ingrese el nombre del empleado") ?? ""
            const edadEmpleado = parseInt(prompt("ingrese la edad de el empleado")??"0")
            const salario = parseFloat(prompt("ingrese el salario del empleado") ?? "0")
            //crear un empleado con la clase
            const empleado = new Empleado(nombreEmpledo,edadEmpleado,salario)
            //añadir el empleado a el array
            empleados.push(empleado)
            break
        case 3:
            //atributos del medico  
            const nombreMedico = prompt("ingrese el nombre del medico") ?? ""
            const edadMedico = parseInt(prompt("ingrese la edad de el medico")??"0")
            const salarioMedico = parseFloat(prompt("Ingrese el salario del medico") ?? "0")
            const especialidad = prompt("ingrese la especialidad del medico")??""
            //crear un medico con la clase
            const medico = new Medico(nombreMedico,edadMedico,salarioMedico,especialidad)
            //añadir el medico a el array
            medicos.push(medico)  
            break
        case 4:
            //atributos de la cita  
            const idCita = parseInt(prompt("ingrese el id de la cita")??"")
            const fecha = prompt("ingrese la fecha de la cita")??""
            const hora= prompt("ingrese la hora de la cita") ?? ""
            const pacienteCita = prompt("ingrese el nombre del paciente")??""
            const medicoCita = prompt("ingrese el nombre del medico")??""
            const motivo = prompt("ingrese el motivo de la cita")??""
            const numConsultorio = parseInt(prompt("ingrese el numero de consultorio")?? "0")
            const estado = prompt("estado de la cita")?? ""  
            //crear una cita con la clase
            const cita = new Cita(idCita,fecha,hora,pacienteCita,medicoCita,motivo,numConsultorio,estado)
            //agregar la cita a el array
            citas.push(cita)
            break
    }
}

//funcion para mostar los datos
function mostarDatos(opcion:number){
    switch (opcion) {
        case 1:
            let datos:string=""
            pacientes.forEach(paciente => {
                datos+=paciente.toString()
                datos+="\n\n"
            });
            alert(datos)
            break;
        case 2:
            let datosEmpleados:string=""
            empleados.forEach(empleado => {
                datosEmpleados+=empleado.toString()
                datosEmpleados+="\n\n"
            });
            alert(datosEmpleados)
            break
        case 3:
            let datosMedicos:string=""
            medicos.forEach(medico => {
                datosMedicos+=medico.toString()
                datosMedicos+="\n\n"
            });
            alert(datosMedicos)
            break
        case 4:
            let datosCitas:string=""
            citas.forEach(cita => {
                datosCitas+=cita.toString()
                datosCitas+="\n\n"
            });
            alert(datosCitas) 
            break 
    }
}

//funcion para gestionar las citas
function gestionarCitas(opcion:number) {
    switch (opcion) {
        case 1:
            let datosCitas:string=""
            citas.forEach(cita => {
                datosCitas+=cita.toString()
                datosCitas+="\n\n"
            });
            alert(datosCitas) 
            console.log(datosCitas)
            break;
    }
}