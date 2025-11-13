//SNOWTRIP PLANNER

//centros de ski
const skiCenters = [
  { id: 1, name: "Cerro Catedral", country: "Argentina" },
  { id: 2, name: "Las Leñas", country: "Argentina" },
  { id: 3, name: "Portillo", country: "Chile" },
  { id: 4, name: "Aspen", country: "EE.UU." }
]


const mountainSelect = document.getElementById("mountainSelect")
const simulateBtn = document.getElementById("simulateBtn")
const resultDiv = document.getElementById("result")
const historyList = document.getElementById("historyList")


document.addEventListener("DOMContentLoaded", () => {
  cargarOpciones()
  mostrarHistorial()
})

//Funciones
function cargarOpciones() {
  skiCenters.forEach(center => {
    const option = document.createElement("option")
    option.value = center.id
    option.textContent = `${center.name} (${center.country})`
    mountainSelect.appendChild(option)
  })
}


function generarClima() {
  const climas = ["soleado", "nevando", "nublado", "ventoso"]
  const indice = Math.floor(Math.random() * climas.length)
  return climas[indice]
}

function calcularDisfrute(clima) {
  switch (clima) {
    case "soleado": return "Excelente día para esquiar"
    case "nevando": return "Día ideal con nieve fresca"
    case "nublado": return "Condiciones normales, buena visibilidad."
    case "ventoso": return "Mucho viento, precaución en las pistas"
    default: return "Condiciones desconocidas."
  }
}


function guardarSimulacion(simulacion) {
  const historial = JSON.parse(localStorage.getItem("historial")) || []
  historial.push(simulacion)
  localStorage.setItem("historial", JSON.stringify(historial))
}


function mostrarHistorial() {
  const historial = JSON.parse(localStorage.getItem("historial")) || []
  historyList.innerHTML = ""
  historial.forEach(sim => {
    const li = document.createElement("li")
    li.textContent = `${sim.centro} – ${sim.clima} – ${sim.mensaje}`
    historyList.appendChild(li)
  });
}


simulateBtn.addEventListener("click", () => {
  const selectedId = parseInt(mountainSelect.value)
  const centro = skiCenters.find(c => c.id === selectedId)

  if (!centro) {
    resultDiv.textContent = "Por favor, seleccioná un centro de ski."
    return
  }

  const clima = generarClima()
  const mensaje = calcularDisfrute(clima)

  // Resultado
  resultDiv.innerHTML = `
    <h2>${centro.name}</h2>
    <p><b>Clima:</b> ${clima}</p>
    <p>${mensaje}</p>
  ` 

  
  const simulacion = { centro: centro.name, clima, mensaje }
  guardarSimulacion(simulacion)
  mostrarHistorial()
})
