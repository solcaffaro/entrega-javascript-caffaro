let reservas = JSON.parse(localStorage.getItem("reservas")) || []

class Reserva {
    constructor(id, nombre, fecha, nivel, tipo, clima) {
        this.id = id
        this.nombre = nombre
        this.fecha = fecha
        this.nivel = nivel
        this.tipo = tipo
        this.clima = clima
    }
}

function guardarEnStorage() {
    localStorage.setItem("reservas", JSON.stringify(reservas))
}


function crearReserva(nombre, fecha, nivel, tipo, clima) {
    const nueva = new Reserva(Date.now(), nombre, fecha, nivel, tipo, clima)
    reservas.push(nueva)
    guardarEnStorage()
    return nueva
}


function borrarReserva(id) {
    reservas = reservas.filter(r => r.id !== id)
    guardarEnStorage()
}


function vaciarReservas() {
    reservas = []
    guardarEnStorage()
}


function obtenerClimaRandom() {
    const opciones = ["Soleado", "Nevado", "Ventoso", "Nublado", "Tormenta"]
    return opciones[Math.floor(Math.random() * opciones.length)]
}
