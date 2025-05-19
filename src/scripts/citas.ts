import { Cita } from "../cita/cita.js"
import { citas } from "../modeloDatos.js"

//renderizar las citas
//contenedor de las citas
const contenedorCitas = document.getElementById("citasContainer") as HTMLDivElement
//funcion para renderizar citas
export function renderCitas():void{
    citas.forEach(cita =>{
        const cardCita = document.createElement("div") as HTMLDivElement
        cardCita.className="flex group min-w-full hover:scale-[103%] hover:border-b-[3px] border-[#0077b6] transition duration-300 text-center items-center shadow-xl rounded-lg p-5 relative gap-3"
        cardCita.innerHTML=`
        <button class="bg-amber-700 absolute top-1 right-1 btn-editar" data-id="${cita.id}" >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#eb0505"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
        </button>
            <p><strong>ID:</strong>${cita.id}</p>
           <p class="text-blue-500">📅${cita.fecha}</p>
           <p class="text-emerald-400">⏰${cita.hora}</p>
           <p>👤${cita.paciente}</p>
           <p>🧑‍⚕️${cita.medico}</p>
           <p>🏢-${cita.numConsultorio}</p>
           <p>📝${cita.motivo}</p>
        `
        if(cita.estado.toLowerCase()=="pendiente"){
            cardCita.innerHTML+=`<p class="text-[#5F6368]">🟡${cita.estado}</p>`
        }
        if(cita.estado.toLowerCase()=="finalizada"){
            cardCita.innerHTML+=`<p class="text-emerald-400">✅${cita.estado}</p>`
        }
         if(cita.estado.toLowerCase()=="cancelada"){
            cardCita.innerHTML+=`<p class="text-red-400">🔴${cita.estado}</p>`
        }
        contenedorCitas.appendChild(cardCita)
        //agregar el evento para actualizar informacion
        const boton = cardCita.querySelector(".btn-editar") as HTMLButtonElement;
        boton.addEventListener("click", () => {
        const id = Number(boton.getAttribute("data-id"));
        buscarInformacionCita(id);
        });
    })
}
//evento que se activa cuando el dom carga
window.addEventListener("DOMContentLoaded",()=>{
    renderCitas()
})

//input con el id o nombre
const input =document.getElementById("inputElement") as HTMLInputElement


//boton para buscar
const btnBuscar = document.getElementById("btnBuscar") as HTMLButtonElement

//evento de el boton
btnBuscar.addEventListener("click",buscarCita)

//funcion para buscar la cita
function buscarCita():void{
    contenedorCitas.innerHTML=""
    citas.forEach(cita => {
        if(input.value==cita.id.toString()||input.value==cita.paciente){
            const cardCita = document.createElement("div") as HTMLDivElement
            cardCita.className=" flex p-6 min-w-full items-cemter gap-3 group w-[230px] hover:scale-[103%] hover:border-b-[3px] border-[#0077b6] transition duration-300 text-center shadow-xl rounded-lg p-4 relative"
            cardCita.innerHTML=`
            <button class="bg-amber-700 absolute top-1.5 right-1.5 btn-editar" data-id="${cita.id}" >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#eb0505"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
            </button>
            <p><strong>ID:</strong>${cita.id}</p>
            <p class="text-blue-500">📅${cita.fecha}</p>
            <p class="text-emerald-400">⏰${cita.hora}</p>
            <p>👤${cita.paciente}</p>
            <p>🧑‍⚕️${cita.medico}</p>
            <p>🏢-${cita.numConsultorio}</p>
            <p>📝${cita.motivo}</p>
            `
            if(cita.estado.toLowerCase()=="pendiente"){
                cardCita.innerHTML+=`<p class="text-[#5F6368]">🟡${cita.estado}</p>`
            }
            if(cita.estado.toLowerCase()=="finalizada"){
                cardCita.innerHTML+=`<p class="text-emerald-400">✅${cita.estado}</p>`
            }
            if(cita.estado.toLowerCase()=="cancelada"){
                cardCita.innerHTML+=`<p class="text-red-400">🔴${cita.estado}</p>`
            }
            contenedorCitas.appendChild(cardCita)
            //agregar el evento para editar
            const boton = cardCita.querySelector(".btn-editar") as HTMLButtonElement;
            boton.addEventListener("click", () => {
            const id = Number(boton.getAttribute("data-id"));
            buscarInformacionCita(id);
            });
        }

    });
}


//funcion para actualizar cita
export function buscarInformacionCita(id: number): void {
    //obtener elementos del DOOM
    const elementoId = document.getElementById("id") as HTMLSpanElement;
    const elementoFecha = document.getElementById("fecha") as HTMLInputElement;
    const elementoHora = document.getElementById("hora") as HTMLInputElement;
    const elementoPaciente = document.getElementById("paciente") as HTMLInputElement;
    const elementoMedico = document.getElementById("medico") as HTMLInputElement;
    const elementoConsultorio = document.getElementById("consultorio") as HTMLInputElement;
    const elementoEstado = document.getElementById("estado") as HTMLSelectElement;
    const elementoMotivo= document.getElementById("motivo") as HTMLInputElement
    const cita = citas[id - 1];

    elementoId.textContent ="ID:"+cita.id.toString();
    elementoFecha.value = cita.fecha;
    elementoHora.value = cita.hora;
    elementoPaciente.value = cita.paciente;
    elementoMedico.value = cita.medico;
    elementoConsultorio.value = cita.numConsultorio.toString();
    elementoEstado.value = cita.estado;
    elementoMotivo.value=cita.motivo
}
