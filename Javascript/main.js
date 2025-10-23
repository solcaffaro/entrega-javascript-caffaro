//SNOWTRIP PLANNER

//centros de ski
const skiCenters = ["Cerro Catedral", "Las Leñas", "Portillo", "Chapelco"]

//Función condiciones climáticas
function generarClima() {
  const climas = ["soleado", "nevando", "ventoso", "nublado"]
  const indice = Math.floor(Math.random() * climas.length)
  return climas[indice]
}

// Función disfrute según el clima
function calcularDisfrute(clima) {
  let disfrute;

  switch (clima) {
    case "soleado":
      disfrute = "Excelente día para esquiar"
      break
    case "nevando":
      disfrute = "Día perfecto con nieve fresca"
      break
    case "nublado":
      disfrute = "Condiciones normales, visibilidad media"
      break
    case "ventoso":
      disfrute = "Mucho viento, precaución en las pistas"
      break
    default:
      disfrute = "Condiciones desconocidas"
  }

  return disfrute
}

// Ciclo principal del simulador
let seguir = true;

while (seguir) {
  let mensajeCentros = "Centros disponibles:\n"
  for (let i = 0; i < skiCenters.length; i++) {
    mensajeCentros += `${i + 1}. ${skiCenters[i]}\n`
  }

  // Entrada del usuario
  const opcion = prompt(
    mensajeCentros + "\nElegí un número de centro de ski o escribí 'salir' para terminar:"
  )

  if (opcion === null || opcion.toLowerCase() === "salir") {
    seguir = false;
    alert("Gracias por usar SnowTrip Planner")
  } else {
    const indice = parseInt(opcion) - 1

    if (indice >= 0 && indice < skiCenters.length) {
      const centro = skiCenters[indice]
      const clima = generarClima()
      const resultado = calcularDisfrute(clima)

      alert(
        `Has elegido ${centro}.\nHoy el clima está ${clima}.\n${resultado}`
      )
    } else {
      alert("Opción no válida. Intentá nuevamente.");
    }
  }
}

console.log("Simulación finalizada.");
