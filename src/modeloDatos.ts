import { Medico } from "./personas/medico.js"
import { Empleado } from "./personas/empleado.js"
import { Paciente } from "./personas/paciente.js"
import { Cita } from "./cita/cita.js"

//simulacion de la base de datos

//pacientes
export const pacientes: Paciente[] = [
  new Paciente("Laura Gómez", 32, 1, "Femenino", "Gripe"),
  new Paciente("Carlos Pérez", 45, 2, "Masculino", "Hipertensión"),
  new Paciente("Ana Torres", 27, 3, "Femenino", "Asma"),
  new Paciente("Luis Ramírez", 60, 4, "Masculino", "Diabetes"),
  new Paciente("María López", 35, 5, "Femenino", "Dolor de cabeza"),
  new Paciente("Jorge Martínez", 50, 6, "Masculino", "Artritis"),
  new Paciente("Sofía Herrera", 23, 7, "Femenino", "Migraña"),
  new Paciente("Diego Sánchez", 40, 8, "Masculino", "Dolor lumbar"),
  new Paciente("Camila Díaz", 29, 9, "Femenino", "Alergia"),
  new Paciente("Fernando Gómez", 55, 10, "Masculino", "Colesterol alto")
];


//empleados
export const empleados: Empleado[] = [
  new Empleado("Sandra Mejía", 34, 2800000),
  new Empleado("Carlos Rueda", 40, 3000000),
  new Empleado("Andrea Castro", 29, 2600000),
  new Empleado("Julián Torres", 37, 2900000),
  new Empleado("Valentina Ruiz", 31, 2700000)
];

//medicos
export const medicos: Medico[] = [
  new Medico("Dr. Alejandro Gómez", 45, 4500000, "Medicina General"),
  new Medico("Dra. Carolina Torres", 38, 4700000, "Neurología"),
  new Medico("Dr. Esteban García", 50, 4900000, "Neumología"),
  new Medico("Dra. Natalia Salazar", 42, 4600000, "Endocrinología")
];

//citas
export const citas: Cita[] = [
  new Cita(1, "2025-05-20", "08:00", "Laura Gómez", "Dr. Gómez", "Consulta por gripe", 101, "Pendiente"),
  new Cita(2, "2025-05-20", "08:30", "Carlos Pérez", "Dra. Torres", "Control de hipertensión", 102, "Cancelada"),
  new Cita(3, "2025-05-20", "09:00", "Ana Torres", "Dr. García", "Revisión de asma", 103, "Pendiente"),
  new Cita(4, "2025-05-20", "09:30", "Luis Ramírez", "Dra. Salazar", "Control de diabetes", 104, "Finalizada"),
  new Cita(5, "2025-05-20", "10:00", "María López", "Dr. Gómez", "Evaluación de dolor de cabeza", 101, "Pendiente"),
  new Cita(6, "2025-05-20", "10:30", "Jorge Martínez", "Dra. Torres", "Tratamiento de artritis", 102, "Finalizada"),
  new Cita(7, "2025-05-20", "11:00", "Sofía Herrera", "Dr. García", "Consulta por migraña", 103, "Pendiente"),
  new Cita(8, "2025-05-20", "11:30", "Diego Sánchez", "Dr. Gómez", "Revisión de dolor lumbar", 104, "Finalizada"),
  new Cita(9, "2025-05-20", "12:00", "Camila Díaz", "Dra. Salazar", "Evaluación de alergia", 101, "Cancelada"),
  new Cita(10, "2025-05-20", "12:30", "Fernando Gómez", "Dr. García", "Control de colesterol", 102, "Finalizada")
];
