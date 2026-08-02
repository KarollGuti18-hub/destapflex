import type { CtsCategory } from "@/types";

/**
 * CTS/CTQ documentados.
 * Rango de apertura confirmado por el equipo: 20 – 160 mm.
 * Solo se muestran metas claramente documentadas.
 */
export const ctsCategories: CtsCategory[] = [
  {
    id: "antideslizante",
    name: "Antideslizante",
    ctqs: [
      {
        id: "friccion-agarre",
        name: "Coeficiente de fricción en el agarre",
        measurementVariable: "μ (coeficiente de fricción estática)",
        importance:
          "Es primordial para la CTS antideslizante: al medir la resistencia al deslizamiento entre el producto y la mano se asegura un agarre estable durante el uso.",
        meta: "≥ 0.8",
      },
      {
        id: "friccion-tapa",
        name: "Coeficiente de fricción en interfaz con tapa",
        measurementVariable: "μ contacto tapa-herramienta",
        importance:
          "Analiza la fricción entre el producto y la tapa del envase. Junto con el coeficiente de agarre, asegura un buen contacto entre usuario, producto y envase.",
        meta: "≥ 0.7",
      },
      {
        id: "superficie-contacto",
        name: "Superficie de contacto",
        measurementVariable: "Área",
        importance:
          "Complementa las CTQ anteriores al determinar cuánta superficie del producto tendrá material antideslizante.",
        meta: "≥ 120 cm²",
      },
    ],
  },
  {
    id: "intuitivo",
    name: "Intuitivo",
    ctqs: [
      {
        id: "tiempo-ajuste",
        name: "Tiempo promedio de ajuste del diámetro",
        measurementVariable: "Tiempo",
        importance:
          "Mientras menor sea el tiempo de ajuste, el producto resulta más dinámico e intuitivo para el usuario.",
        meta: "≤ 5 s",
      },
    ],
  },
  {
    id: "ergonomico",
    name: "Ergonómico",
    ctqs: [
      {
        id: "fuerza-apertura",
        name: "Fuerza máxima requerida para apertura",
        measurementVariable: "Fuerza",
        importance:
          "Al requerir menos fuerza para abrir un envase, el producto demuestra eficiencia ergonómica en su propósito.",
        meta: "≤ 40 N",
      },
      {
        id: "presion-palmar",
        name: "Presión máxima en la zona de contacto palmar",
        measurementVariable: "Presión",
        importance:
          "Complementa la ergonomía con enfoque en comodidad, evitando molestias al utilizar el producto.",
        meta: "≤ 30 kPa",
      },
      {
        id: "diametro-mango",
        name: "Diámetro del mango",
        measurementVariable: "Longitud",
        importance:
          "Es fundamental para que el producto sea eficiente y agradable durante el movimiento de apertura.",
        meta: "30 – 45 mm",
      },
      {
        id: "brazo-palanca",
        name: "Longitud del brazo de palanca",
        measurementVariable: "Longitud",
        importance:
          "Complementa la fuerza máxima requerida, porque la longitud actúa directamente sobre el torque.",
        meta: "≤ 185 mm",
      },
    ],
  },
  {
    id: "tamano-compacto",
    name: "Tamaño compacto",
    ctqs: [
      {
        id: "longitud-total",
        name: "Longitud total del dispositivo",
        measurementVariable: "Longitud",
        importance:
          "Define de forma directa el atributo de tamaño compacto del producto.",
        meta: "≤ 20 cm",
      },
      {
        id: "volumen",
        name: "Espacio físico ocupado",
        measurementVariable: "Volumen",
        importance:
          "Complementa la longitud al analizar el volumen que ocupa el producto.",
        meta: "≤ 800 cm³",
      },
      {
        id: "profundidad",
        name: "Profundidad máxima",
        measurementVariable: "Longitud",
        importance:
          "Complementa el tamaño compacto considerando una profundidad adecuada para resistencia y uso práctico.",
        meta: "≤ 4 cm",
      },
    ],
  },
  {
    id: "peso-ligero",
    name: "Peso ligero",
    ctqs: [
      {
        id: "peso-total",
        name: "Peso total del producto",
        measurementVariable: "Masa",
        importance:
          "Define directamente el atributo de peso ligero para la comodidad del usuario.",
        meta: "≤ 250 g",
      },
      {
        id: "fuerza-masa",
        name: "Fuerza soportada por unidad de masa",
        measurementVariable: "Fuerza / Masa",
        importance:
          "Complementa el peso ligero con la resistencia necesaria para cumplir la función sin dañarse.",
        meta: "≥ 0.5 N/g",
      },
    ],
  },
  {
    id: "impermeable",
    name: "Impermeable",
    ctqs: [
      {
        id: "secado",
        name: "Tiempo de secado superficial",
        measurementVariable: "Tiempo",
        importance:
          "Permite analizar la impermeabilidad asegurando un secado óptimo después del lavado.",
        meta: "≤ 10 min",
      },
      {
        id: "agua-retenida",
        name: "Masa de agua retenida tras inmersión",
        measurementVariable: "Masa",
        importance:
          "Asegura que el producto absorba muy poca agua, respaldando la impermeabilidad.",
        meta: "≤ 0.1 g",
      },
    ],
  },
  {
    id: "ajustable",
    name: "Ajustable",
    ctqs: [
      {
        id: "rango-apertura",
        name: "Rango de apertura",
        measurementVariable: "Diámetro de tapa",
        importance:
          "Define la capacidad de ajuste del producto frente a tapas de distintos tamaños.",
        meta: "20 – 160 mm",
      },
      {
        id: "paso-ajuste",
        name: "Paso de ajuste",
        measurementVariable: "Longitud",
        importance:
          "Complementa la capacidad de ajuste al permitir incluir la mayor cantidad posible de diámetros.",
        meta: "≤ 5 mm",
      },
      {
        id: "fuerza-bloqueo",
        name: "Fuerza de sujeción del mecanismo de bloqueo",
        measurementVariable: "Fuerza",
        importance:
          "Asegura que el diámetro deseado se mantenga y no varíe mientras el usuario utiliza el producto.",
        meta: "≥ 50 N",
      },
    ],
  },
  {
    id: "resistencia-apertura",
    name: "Resistencia a la apertura",
    ctqs: [
      {
        id: "torque-maximo",
        name: "Torque máximo soportado sin falla",
        measurementVariable: "Torque",
        importance:
          "Define directamente la resistencia del producto frente a la apertura.",
        meta: "≥ 25 Nm",
      },
      {
        id: "carga-rotura",
        name: "Carga de rotura estructural del chasis",
        measurementVariable: "Fuerza",
        importance:
          "Complementa el torque máximo al analizar la resistencia estructural frente a las cargas de uso.",
        meta: "≤ 450 N",
      },
    ],
  },
  {
    id: "anticorrosivo",
    name: "Anticorrosivo",
    ctqs: [
      {
        id: "perdida-masa",
        name: "Pérdida de masa por corrosión",
        measurementVariable: "Masa",
        importance:
          "Ayuda a medir cuánto se ve afectado un material seleccionado frente a la corrosión.",
        meta: "≤ 0.01 g",
      },
      {
        id: "espesor-recubrimiento",
        name: "Espesor de la capa de recubrimiento",
        measurementVariable: "Longitud",
        importance:
          "Complementa la CTQ anterior al definir la capa de protección frente a la corrosión.",
        meta: "≤ 0.02 mm",
      },
    ],
  },
];
