const form = document.getElementById("formReserva")
const listaReservas = document.getElementById("listaReservas")
const vaciarBtn = document.getElementById("vaciarBtn")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nombre = document.getElementById("nombre").value
    const fecha = document.getElementById("fecha").value
    const nivel = document.getElementById("nivel").value
    const tipo = document.getElementById("tipo").value
    const clima = obtenerClimaRandom()

    const nueva = crearReserva(nombre, fecha, nivel, tipo, clima)

    form.reset()
    renderReservas()
})


vaciarBtn.addEventListener("click", () => {
    vaciarReservas()
    renderReservas()
})


function renderReservas() {
    listaReservas.innerHTML = ""

    reservas.forEach(r => {
        listaReservas.innerHTML += `
            <div class="reserva">
                <p><strong>${r.nombre}</strong> — ${r.fecha}</p>
                <p>Nivel: ${r.nivel} | Tipo: ${r.tipo}</p>
                <p>Clima estimado: ${r.clima}</p>

                <button class="btn-borrar" data-id="${r.id}">Eliminar</button>
            </div>
        `
    })

    document.querySelectorAll(".btn-borrar").forEach(btn => {
        btn.addEventListener("click", () => {
            borrarReserva(Number(btn.dataset.id))
            renderReservas()
        })
    })
}

renderReservas()
