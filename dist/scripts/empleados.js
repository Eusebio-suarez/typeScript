import { empleados, medicos } from "../modeloDatos.js";
//obtener el contenedor de los empleados
const contenedor = document.getElementById("empleadosContainer");
//renderizar cuando cargue el contenido del dpoom
window.addEventListener("DOMContentLoaded", () => {
    renderEmpleados();
});
//funcion para renderizar los empleados
function renderEmpleados() {
    empleados.forEach(empleado => {
        let card = document.createElement("div");
        card.className = `
            cardP p-4 rounded-[10px] text-left shadow-md w-[240px]
            flex flex-wrap justify-center w-[680px] gap-2
            bg-white hover:border-b-[3px] border-[#0077b6] hover:scale-105 duration-[300ms]
        `;
        card.innerHTML = `
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#11df6a"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
        <h2 class="font-bold text-lg mb-1 text-blue-500">${empleado.nombre}</h2>
        <p><strong>Edad:</strong>${empleado.edad}</p>
        <p><strong>Salario:</strong>${empleado.salario}</p>
        `;
        contenedor.appendChild(card);
    });
    renderizarMedicos();
}
//funcion para renderizar medicos
function renderizarMedicos() {
    medicos.forEach(medico => {
        let card = document.createElement("div");
        card.className = `
        cardP p-4 rounded-[10px] text-left shadow-md w-[240px]
        flex flex-wrap justify-center w-[680px] gap-2
        bg-white hover:border-b-[3px] border-[#0077b6] hover:scale-105 duration-[300ms]
        `;
        card.innerHTML = `
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#72e9e1"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
        <h2 class="font-bold text-lg mb-1 text-blue-500">${medico.nombre}</h2>
        <p><strong>Edad:</strong>${medico.edad}</p>
        <p><strong>Salario:</strong>${medico.salario}</p>
        <p><strong>Especialidad:</strong>${medico.especialidad}</p>
        `;
        contenedor.appendChild(card);
    });
}
