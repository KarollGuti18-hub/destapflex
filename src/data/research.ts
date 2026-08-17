export const valsIntro = {
  title: "Análisis VALS aplicado a DestapFlex",
  description:
    "Segmentación del usuario a partir de una encuesta estructurada sobre ergonomía, usabilidad y valor percibido.",
  instrument:
    "Encuesta estructurada con opciones múltiples y preguntas abiertas sobre ergonomía, usabilidad y valor percibido de DestapFlex.",
  sample: "N = 20 personas consultadas.",
  highlights: [
    "Ergonomía y agarre: el 40 % (8/20) prefiere un mango más grueso y anatómico, y el 35 % (7/20) valora un sistema de bloqueo visible en la correa para evitar deslizamientos.",
    "Materiales y percepción premium: el 35 % (7/20) asocia la alta gama con detalles en acero inoxidable en el mango, seguido por un 30 % (6/20) que prefiere correa de silicona de grado alimenticio.",
    "Disposición a pagar: el 60 % (12/20) ubica la disposición de compra en el rango de $15.000 a $25.000 COP.",
    "Innovación más deseada: el 45 % (9/20) exige la inclusión de una base magnética en el mango para adherirlo a la nevera.",
  ],
  conclusion: `El análisis VALS aplicado a DestapFlex permite concluir que el usuario objetivo no compra un utensilio de cocina, sino la solución a un problema físico concreto: el dolor articular en manos y muñecas y la pérdida de autonomía al abrir envases herméticos. La motivación de compra es esencialmente práctica y funcional, más que estética o aspiracional.

En cuanto a valores y percepción de calidad, la muestra prioriza la durabilidad y la resistencia por encima del acabado decorativo: el 35 % asocia la alta gama con inserciones en acero inoxidable y exige que el mango no se deforme tras aplicar la fuerza de palanca. El rediseño ergonómico es, por tanto, la exigencia más inmediata, con un 40 % que solicita un mango más grueso y anatómico, y un 35 % que reclama un sistema de bloqueo visible en la correa para eliminar el riesgo de deslizamiento.

Respecto a la actitud frente a la innovación, el usuario se muestra abierto al cambio siempre que la ventaja sea demostrable: el 45 % identifica la base magnética para la nevera como la mejora más diferenciadora, lo que confirma que la innovación valorada es la que aporta comodidad y accesibilidad inmediata, no la sofisticación tecnológica.

Finalmente, la ventana comercial queda claramente definida: el 60 % de los encuestados ubica su disposición a pagar entre $15.000 y $25.000 COP. Este rango, combinado con las prioridades ergonómicas y de seguridad detectadas, delimita la ruta de desarrollo del producto: un destapador robusto, antideslizante, de agarre anatómico, con base magnética y a un precio accesible, capaz de garantizar la apertura de cualquier tapa en el primer intento sin esfuerzo ni dolor.`,
};

export const valsRows = [
  {
    category: "Motivación principal",
    identify: "¿Por qué compra este tipo de productos?",
    question:
      "¿Qué fue lo que más influyó en su decisión de adquirir un destapador multifuncional?",
    insight:
      "Permite conocer los factores racionales que motivan la compra; el motivo predominante es solucionar el dolor de manos y la necesidad práctica de abrir empaques herméticos sin pedir ayuda.",
  },
  {
    category: "Estilo de vida",
    identify: "¿Cómo utiliza el producto?",
    question:
      "¿En qué situaciones le resulta indispensable el producto y en qué lugar específico de su cocina lo guardaría?",
    insight:
      "Identifica hábitos y contexto de uso cotidiano. Revela que el utensilio se usa principalmente en momentos de afán o al cocinar alimentos en frascos (pepinillos, conservas) y se prefiere almacenar en cajones de fácil acceso o colgado en la barra.",
  },
  {
    category: "Valores",
    identify: "¿Qué considera importante?",
    question:
      "¿Qué detalles en los materiales o acabados le harían percibir que es un producto de alta gama y qué aspecto asegura que su inversión valga la pena?",
    insight:
      "Revela prioridades de calidad y durabilidad. El 35 % valora inserciones en acero inoxidable y el 35 % exige que el mango no se deforme ni se rompa tras la fuerza de palanca.",
  },
  {
    category: "Actitud frente a la innovación",
    identify: "¿Está dispuesto a cambiar?",
    question:
      "¿Cuál sería el incentivo principal o la curiosidad que lo motivaría a abandonar su método tradicional y experimentar por primera vez con este sistema de correa?",
    insight:
      "Identifica apertura a la innovación. Los usuarios se muestran dispuestos a cambiar si se les demuestra visualmente que el producto elimina el esfuerzo muscular y no desajusta el frasco.",
  },
  {
    category: "Tecnología / Mecanismo",
    identify: "¿Qué nivel de tecnología o mecanismo espera?",
    question:
      "Partiendo de este sistema base de palanca y correa, ¿qué característica adicional o de diseño le agregaría para sentir que es una herramienta innovadora?",
    insight:
      "Detecta expectativas sobre mejoras funcionales. El 45 % (9/20) espera la integración de un sistema magnético para adosarlo a la nevera, mientras que un 20 % demanda un sistema retráctil o plegable.",
  },
  {
    category: "Frustraciones",
    identify: "¿Qué problema quiere resolver?",
    question:
      "En su experiencia en la cocina, ¿cuál es el mayor desafío físico o molestia que este sistema de palanca resolvería definitivamente?",
    insight:
      "Identifica puntos de dolor específicos. El dolor articular en manos y muñecas (síndrome de túnel carpiano), la falta de fuerza y el deslizamiento de las tapas delgadas son las principales frustraciones detectadas.",
  },
  {
    category: "Beneficio esperado",
    identify: "¿Qué resultado desea obtener?",
    question:
      "¿Qué prueba de uso o situación lo convencería de que este sistema de palanca es superior a cualquier método tradicional?",
    insight:
      "Relaciona el producto con la propuesta de valor real: lograr la apertura rápida de cualquier tamaño de tapa en el primer intento, garantizando autonomía total y cero dolor físico a un precio accesible ($15.000 – $25.000 COP).",
  },
] as const;

export const valsCharts = [
  {
    src: "/assets/vals-grafico-1.png",
    alt: "Gráfico 1. Disposición a pagar por DestapFlex",
    caption:
      "Gráfico 1. Disposición a pagar (punto clave de decisión de compra – VALS). El 60 % ubica el valor del producto entre $15.000 y $25.000 COP.",
    width: 1024,
    height: 564,
  },
  {
    src: "/assets/vals-grafico-2.png",
    alt: "Gráfico 2. Características innovadoras más valoradas",
    caption:
      "Gráfico 2. Características innovadoras más valoradas (Tecnología / VALS). La base magnética para la nevera encabeza las preferencias con un 45 % (9/20).",
    width: 1600,
    height: 800,
  },
  {
    src: "/assets/vals-grafico-3.png",
    alt: "Gráfico 3. Ajustes ergonómicos deseados en el mango",
    caption:
      "Gráfico 3. Ajustes ergonómicos deseados en el mango (Ergonomía / Frustraciones). Un 40 % (8/20) solicita un mango más grueso.",
    width: 1600,
    height: 853,
  },
  {
    src: "/assets/vals-grafico-4.png",
    alt: "Gráfico 4. Características de mayor seguridad antideslizante",
    caption:
      "Gráfico 4. Características de mayor seguridad antideslizante. El sistema de bloqueo visible en la correa lidera con el 35 % (7/20).",
    width: 1600,
    height: 853,
  },
] as const;

export const cjmAsset = {
  src: "/assets/customer-journey-map.png",
  alt: "Customer Journey Map de DestapFlex",
  caption:
    "Customer Journey Map del destapador multifuncional: descubrimiento, compra, primer uso, uso diario y recomendación.",
  width: 2400,
  height: 1350,
  pdf: "/docs/cjm-destapflex.pdf",
};

export type NewCtsGroup = {
  cts: string;
  rows: {
    ctq: string;
    measurement: string;
    meta: string;
  }[];
};

export const newCtsGroups: NewCtsGroup[] = [
  {
    cts: "Operación de bloqueo práctico",
    rows: [
      {
        ctq: "Tiempo de fijación y liberación de la correa",
        measurement: "Tiempo",
        meta: "≤ 3 s",
      },
      {
        ctq: "Fuerza del seguro",
        measurement: "Fuerza",
        meta: "≤ 15 N",
      },
      {
        ctq: "Resistencia al desplazamiento bajo torque",
        measurement: "Desplazamiento",
        meta: "≤ 5 mm",
      },
    ],
  },
  {
    cts: "Portable",
    rows: [
      {
        ctq: "Longitud total del dispositivo",
        measurement: "Longitud",
        meta: "≤ 15 cm",
      },
      {
        ctq: "Espacio físico ocupado",
        measurement: "Volumen",
        meta: "≤ 450 cm³",
      },
      {
        ctq: "Profundidad máxima",
        measurement: "Longitud",
        meta: "≤ 3 cm",
      },
    ],
  },
  {
    cts: "Agarre cómodo y antideslizante",
    rows: [
      {
        ctq: "Profundidad de alvéolos para soporte de dedos",
        measurement: "Longitud",
        meta: "6 mm",
      },
      {
        ctq: "Coeficiente de fricción en el agarre",
        measurement: "μ (coeficiente de fricción estática)",
        meta: "≥ 0.8",
      },
      {
        ctq: "Presión máxima concentrada en la palma",
        measurement: "Presión",
        meta: "Por definir",
      },
    ],
  },
  {
    cts: "Multifuncionalidad",
    rows: [
      {
        ctq: "Fuerza manual para retiro de tapa corona metálica",
        measurement: "Fuerza",
        meta: "Por definir",
      },
      {
        ctq: "Apertura de anillas de latas",
        measurement: "Espesor de cuña",
        meta: "Por definir",
      },
      {
        ctq: "Rango de diámetros de apertura",
        measurement: "Longitud",
        meta: "20 – 160 mm",
      },
    ],
  },
];

export const newCtsValueText = `Estas CTS y CTQ nuevas que se plantean son esenciales para innovar el producto y darle un mejor valor agregado, ya que con la encuesta realizada anteriormente y con el análisis gracias a los métodos VSM, Lean Canvas, segmentación y Customer Journey, se pudo observar que los aspectos que se podían mejorar e implementar era una mejora en la operación de bloqueo, este para que sea más intuitivo y fácil de intercambiar en el diámetro requerido, también un cambio en el tamaño del producto, para mejorar su portabilidad y su peso, esto en sus dimensiones en el agarre y en el largo y profundidad del producto. Ya para el agarre que fuera más cómodo se prioriza en la silueta para el soporte de los dedos, también en sus dimensiones y material, para mejorar la experiencia directa del usuario con el producto. Por último observamos que lo más importante de nuestro producto, que es su valor agregado en el mercado, es su multifuncionalidad, esto debido a que este producto puede abrir envases de tipo rosca de cualquier diámetro, además de también abrir tapa tipo cervecera, lo que se busca es implementar que también pueda abrir enlatados, esto para aumentar su multifuncionalidad de abrir una mayor variedad de productos en uno solo, a la vez de mejorar el de los envases de tipo rosca, con una mejora en su sistema de bloqueo como se mencionó antes.`;

export const innovationProposal = {
  title: "Propuesta de innovación",
  paragraphs: [
    "En el entorno doméstico, una parte significativa de los usuarios —especialmente personas con fuerza de agarre reducida, adultos mayores o quienes buscan máxima eficiencia en la cocina— experimentan constante dificultad y frustración al intentar abrir recipientes sellados herméticamente. La necesidad encontrada radica en la falta de herramientas inclusivas que permitan acceder a alimentos y productos envasados sin depender de una fuerza manual considerable ni de asistencia externa. El problema que los objetivos ayudarían a resolver abarca las severas limitaciones de los utensilios actuales: mecanismos de bloqueo complejos que ralentizan el uso, cuerpos rígidos y voluminosos que ocupan espacio excesivo en los cajones, y mangos resbaladizos que exigen un sobreesfuerzo muscular constante, restringiendo además su utilidad a un único tamaño o tipo de tapa.",
    "Para transformar esta realidad, nuestro enfoque de innovación con DestapFlex rediseña la interacción mecánica a través de cuatro avances estratégicos: un sistema de bloqueo dinámico de acople rápido en un solo toque, una estructura volumétrica retráctil y altamente compacta, un mango ergonómico con recubrimiento de alta fricción que optimiza la palanca, y la integración multifuncional para aperturar botellas, latas o empaques al vacío en el mismo dispositivo. Este desarrollo no solo busca modernizar la estética del producto, sino reconfigurar por completo la eficiencia táctil y la practicidad operacional del usuario dentro del hogar.",
    "Finalmente, los beneficios que se esperan generar se traducen en un impacto directo sobre la calidad de vida y la usabilidad cotidiana. Al eliminar la fricción física y los pasos innecesarios, se garantiza una total autonomía para cualquier perfil de usuario, reduciendo drásticamente el tiempo de preparación en la cocina. Asimismo, el formato compacto optimiza el almacenamiento en espacios reducidos, ofreciendo un utensilio versátil y duradero que sustituye múltiples herramientas en una sola solución integral de alto valor percibido.",
  ],
};

export const bitacoraCierre = {
  title: "Bitácora del primer corte",
  description:
    "Decisiones, herramientas desarrolladas y estado del portafolio al cierre del primer corte.",
  decisions: [
    {
      title: "Mapeo de procesos e interacción",
      body: "Aplicación del VSM (Value Stream Map) para mapear el flujo de valor e identificar cuellos de botella operativos, junto con el Customer Journey Map para analizar las frustraciones físicas y emocionales del usuario durante el destape de recipientes.",
    },
    {
      title: "Modelo de negocio y usuario",
      body: "Elaboración del Lean Canvas para definir la propuesta de valor y sostenibilidad comercial del producto. Además, se desarrolló la segmentación VALS con los resultados de la encuesta (N = 20), identificando el perfil del usuario clave y su disposición a pagar ($15.000 – $25.000 COP).",
    },
    {
      title: "Requerimientos de calidad",
      body: "Definición de las nuevas CTQ (Critical to Quality) para asegurar el agarre, la resistencia mecánica y la facilidad de apertura, alineadas con las CTS (Critical to Satisfaction) enfocadas en la comodidad y autonomía.",
    },
    {
      title: "Oportunidad de innovación",
      body: "Formulación del enfoque innovador centrado en un sistema de bloqueo dinámico de un solo toque, optimización volumétrica compacta, ergonomía de alta fricción y versatilidad para abrir múltiples empaques.",
    },
  ],
  status: [
    { area: "Diseño Industrial", state: "Completo" },
    { area: "Gestión Tecnológica", state: "Pendiente de iniciar para el siguiente corte" },
  ],
};
