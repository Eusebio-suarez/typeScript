import { citas, pacientes,empleados,medicos } from "../modeloDatos.js";

//contenedor en de los pacientes
const contenedor=document.getElementById("pacientesContainer") as HTMLDivElement
//funcion para remderizar pacientes
export function renderPacientes(): void {
    pacientes.forEach(paciente => {
        const card = document.createElement("div") as HTMLDivElement;
        card.className = `
            cardP p-4 rounded-[10px] text-left shadow-md w-[240px]
            flex flex-wrap w-[680px] gap-2
            bg-white hover:border-b-[3px] border-black hover:scale-105 duration-[300ms]
        `;
        if(paciente.sexo.toLowerCase()=="masculino"){
        card.innerHTML += `
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#0077B6"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
            <h2 class="font-bold text-lg mb-1 text-[#0077b6]">${paciente.nombre}</h2>
            <p class="text-gray-700"><strong>ID:</strong> ${paciente.id}</p>
            <p class="text-gray-700"><strong>Edad:</strong> ${paciente.edad}</p>
            <p class="text-gray-700"><strong>Sexo:</strong> ${paciente.sexo}</p>
            <p class="text-gray-700"><strong>Diagnóstico:</strong> ${paciente.diagnostico}</p>
        `;
        }

        if(paciente.sexo.toLowerCase()=="femenino"){
        card.innerHTML += `
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#9d53bf"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
            <h2 class="font-bold text-lg mb-1 text-[#9d53bf]">${paciente.nombre}</h2>
            <p class="text-gray-700"><strong>ID:</strong> ${paciente.id}</p>
            <p class="text-gray-700"><strong>Edad:</strong> ${paciente.edad}</p>
            <p class="text-gray-700"><strong>Sexo:</strong> ${paciente.sexo}</p>
            <p class="text-gray-700"><strong>Diagnóstico:</strong> ${paciente.diagnostico}</p>
        `;
        }

        if(paciente.sexo.toLowerCase()!="femenino" && paciente.sexo.toLowerCase()!="masculino"){
        card.innerHTML += `
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#000000"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
            <h2 class="font-bold text-lg mb-1 text-[#000000]">${paciente.nombre}</h2>
            <p class="text-gray-700"><strong>ID:</strong> ${paciente.id}</p>
            <p class="text-gray-700"><strong>Edad:</strong> ${paciente.edad}</p>
            <p class="text-gray-700"><strong>Sexo:</strong> ${paciente.sexo}</p>
            <p class="text-gray-700"><strong>Diagnóstico:</strong> ${paciente.diagnostico}</p>
        `;
        }

        contenedor.appendChild(card);
    });
}


//contenedor de las citas
const contenedorCitas = document.getElementById("citasContainer") as HTMLDivElement
//funcion para renderizar citas
export function renderCitas():void{
    citas.forEach(cita =>{
        const cardCita = document.createElement("div") as HTMLDivElement
        cardCita.className=" group w-[230px] hover:scale-[103%] hover:border-b-[3px] border-[#0077b6] transition duration-300 text-center shadow-xl rounded-lg p-4 relative"
        cardCita.innerHTML=`
        <button>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#eb0505"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
        </button>
            <p><strong>ID:</strong>${cita.id}</p>
           <p class="text-blue-500">📅${cita.fecha}</p>
           <p class="text-emerald-400">⏰${cita.hora}</p>
           <p>👤${cita.paciente}</p>
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
    })
}