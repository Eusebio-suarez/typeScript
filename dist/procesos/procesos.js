import { Paciente } from "../personas/paciente.js";
import { citas, empleados, medicos, pacientes } from "../modeloDatos.js";
import { Empleado } from "../personas/empleado.js";
import { Medico } from "../personas/medico.js";
import { Cita } from "../cita/cita.js";
// menu del sistema
let menu = `
    Menú del sistema\n
    1. Ingresar datos
    2. Mostrar datos
    3. Gestion de citas
    4. Salir\n\n
`;
//menu ingresar datos
let menuIngresar = `
    Ingresar datos\n
    1. Ingresar paciente
    2. Ingresar empleado
    3. Ingrear medico
    4. Ingresar cita
    5. atras.\n\n
`;
// menu mostar datos
let menuMostrar = `
    Mostrar datos\n
    1. Mostrar pacientes
    2. Mostar empleados
    3. Mostrar medicos
    4. Mostar citas
    5. atras \n\n
`;
//menu citas
let menuCitas = `
    Gestion citas\n
    1. Mostar todas la citas
    2. Mostrar citas por paciente
    3. Mostrar cita por id
    4. Mostar citas pendientes
    5. Mostar citas canceladas
    6. Mostar citas expiradas
    7. Actualizar cita
    8. Atras
`;
export function sistemaHospital() {
    //opcion del usuario
    let opcion = 0;
    //menu principal
    while (opcion !== 4) {
        opcion = parseInt(prompt(menu));
        switch (opcion) {
            case 1:
                let opcionIngresar = 0;
                while (opcionIngresar !== 5) {
                    opcionIngresar = parseInt(prompt(menuIngresar));
                    ingresaDatos(opcionIngresar);
                }
                break;
            case 2:
                let opcionMostrar = 0;
                while (opcionMostrar !== 5) {
                    opcionMostrar = parseInt(prompt(menuMostrar));
                    mostarDatos(opcionMostrar);
                }
                break;
            case 3:
                let opcionCitas = 0;
                while (opcionCitas !== 8) {
                    opcionCitas = parseInt(prompt(menuCitas));
                    gestionarCitas(opcionCitas);
                }
        }
    }
}
//funcion para ingresar datos
function ingresaDatos(opcion) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    switch (opcion) {
        case 1:
            //atruibutos de el paciente
            const nombre = (_a = prompt("ingrese el nombre del paciente")) !== null && _a !== void 0 ? _a : "";
            const edad = parseInt((_b = prompt("Ingrese la edad del paciente")) !== null && _b !== void 0 ? _b : "0");
            const id = parseInt((_c = prompt("ingrese el ID del paciente")) !== null && _c !== void 0 ? _c : "0");
            const sexo = (_d = prompt("ingrese el sexo del paciente")) !== null && _d !== void 0 ? _d : "";
            const diagnostico = (_e = prompt("ingrese el diagnóstico del cliente")) !== null && _e !== void 0 ? _e : "";
            //crear un paciente con la clase
            const paciente = new Paciente(nombre, edad, id, sexo, diagnostico);
            //añadir el paciente a el array
            pacientes.push(paciente);
            break;
        case 2:
            //atruibutos del empleado
            const nombreEmpledo = (_f = prompt("ingrese el nombre del empleado")) !== null && _f !== void 0 ? _f : "";
            const edadEmpleado = parseInt((_g = prompt("ingrese la edad de el empleado")) !== null && _g !== void 0 ? _g : "0");
            const salario = parseFloat((_h = prompt("ingrese el salario del empleado")) !== null && _h !== void 0 ? _h : "0");
            //crear un empleado con la clase
            const empleado = new Empleado(nombreEmpledo, edadEmpleado, salario);
            //añadir el empleado a el array
            empleados.push(empleado);
            break;
        case 3:
            //atributos del medico  
            const nombreMedico = (_j = prompt("ingrese el nombre del medico")) !== null && _j !== void 0 ? _j : "";
            const edadMedico = parseInt((_k = prompt("ingrese la edad de el medico")) !== null && _k !== void 0 ? _k : "0");
            const salarioMedico = parseFloat((_l = prompt("Ingrese el salario del medico")) !== null && _l !== void 0 ? _l : "0");
            const especialidad = (_m = prompt("ingrese la especialidad del medico")) !== null && _m !== void 0 ? _m : "";
            //crear un medico con la clase
            const medico = new Medico(nombreMedico, edadMedico, salarioMedico, especialidad);
            //añadir el medico a el array
            medicos.push(medico);
            break;
        case 4:
            //atributos de la cita  
            const idCita = parseInt((_o = prompt("ingrese el id de la cita")) !== null && _o !== void 0 ? _o : "");
            const fecha = (_p = prompt("ingrese la fecha de la cita")) !== null && _p !== void 0 ? _p : "";
            const hora = (_q = prompt("ingrese la hora de la cita")) !== null && _q !== void 0 ? _q : "";
            const pacienteCita = (_r = prompt("ingrese el nombre del paciente")) !== null && _r !== void 0 ? _r : "";
            const medicoCita = (_s = prompt("ingrese el nombre del medico")) !== null && _s !== void 0 ? _s : "";
            const motivo = (_t = prompt("ingrese el motivo de la cita")) !== null && _t !== void 0 ? _t : "";
            const numConsultorio = parseInt((_u = prompt("ingrese el numero de consultorio")) !== null && _u !== void 0 ? _u : "0");
            const estado = (_v = prompt("estado de la cita")) !== null && _v !== void 0 ? _v : "";
            //crear una cita con la clase
            const cita = new Cita(idCita, fecha, hora, pacienteCita, medicoCita, motivo, numConsultorio, estado);
            //agregar la cita a el array
            citas.push(cita);
            break;
    }
}
//funcion para mostar los datos
function mostarDatos(opcion) {
    switch (opcion) {
        case 1:
            let datos = "";
            pacientes.forEach(paciente => {
                datos += paciente.toString();
                datos += "\n\n";
            });
            alert(datos);
            break;
        case 2:
            let datosEmpleados = "";
            empleados.forEach(empleado => {
                datosEmpleados += empleado.toString();
                datosEmpleados += "\n\n";
            });
            alert(datosEmpleados);
            break;
        case 3:
            let datosMedicos = "";
            medicos.forEach(medico => {
                datosMedicos += medico.toString();
                datosMedicos += "\n\n";
            });
            alert(datosMedicos);
            break;
        case 4:
            let datosCitas = "";
            citas.forEach(cita => {
                datosCitas += cita.toString();
                datosCitas += "\n\n";
            });
            alert(datosCitas);
            break;
    }
}
//funcion para gestionar las citas
function gestionarCitas(opcion) {
    switch (opcion) {
        case 1:
            let datosCitas = "";
            citas.forEach(cita => {
                datosCitas += cita.toString();
                datosCitas += "\n\n";
            });
            alert(datosCitas);
            console.log(datosCitas);
            break;
    }
}
