import type {
  Benefit,
  HowItWorksStep,
  NavItem,
  ProductComponent,
  RenderView,
  TeamMember,
  VideoAsset,
} from "@/types";
import { assets } from "./assets";

export const siteMeta = {
  title: "DestapFlex",
  description:
    "DestapFlex: utensilio ergonómico y ajustable para abrir frascos, botellas y envases con menos esfuerzo.",
  tagline: "Abre más. Esfuérzate menos.",
  productName: "DestapFlex",
};

export const navigation: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/diseno-industrial", label: "Diseño Industrial" },
  { href: "/gestion-tecnologica", label: "Gestión Tecnológica" },
  { href: "/diagnostico", label: "Diagnóstico" },
  { href: "/desarrollo-innovacion", label: "Desarrollo de Innovación" },
  { href: "/viabilidad-validacion", label: "Viabilidad y Validación" },
];

export const teamMembers: TeamMember[] = [
  { name: "Nicole Tatiana Jaramillo Burgos" },
  { name: "Laura Camila Miranda Alvarado" },
  { name: "Santiago Fonseca Prieto" },
  { name: "Javier Enmanuel Pérez Millán" },
  { name: "Angelina Geoline Salcedo Cortes" },
];

/** Descripción general (portada). Rango de apertura: 20 – 160 mm. */
export const homeDescription = `DestapFlex es un utensilio de cocina ergonómico, diseñado para facilitar la apertura de frascos, botellas y envases con tapas de diferentes tamaños (rango de apertura de 20 a 160 mm) de forma fácil, segura y sin esfuerzo. Nace como una solución al problema cotidiano que enfrentan muchas personas, especialmente adultos mayores o con movilidad reducida en las manos, al intentar desenroscar tapas rígidas y deslizantes. El dispositivo combina un sistema de correa flexible y antideslizante con un mecanismo de ajuste intuitivo. Al adaptarse al contorno de cada tapa, DestapFlex aplica un principio de palanca que disminuye la fuerza que el usuario necesita aplicar, maximizando la fricción y reduciendo la frustración en esta tarea cotidiana. Su propósito es ofrecer independencia y comodidad a la hora de cocinar, con un producto práctico pensado para hacer más fácil la vida en la cocina.`;

export const homeBenefits: Benefit[] = [
  {
    title: "Menos esfuerzo",
    description:
      "El principio de palanca del dispositivo disminuye la fuerza que el usuario necesita aplicar para abrir envases sellados.",
  },
  {
    title: "Mayor agarre",
    description:
      "La correa flexible antideslizante y el mango ergonómico mejoran la fricción y el control sobre tapas rígidas, metálicas, plásticas o húmedas.",
  },
  {
    title: "Adaptación a diferentes tapas",
    description:
      "El sistema de correa ajustable se adapta a diámetros de tapa entre 20 y 160 mm, facilitando la apertura de frascos, botellas y envases de distintos tamaños.",
  },
];

export const productDescription = {
  whatIs:
    "DestapFlex es un abridor ajustable para la cocina que permite abrir diferentes frascos, botellas o envases sin ejercer mucha fuerza y de forma sencilla. Gracias a su correa ajustable, con un rango de apertura de 20 a 160 mm, y a su mango ergonómico antideslizante, el uso se resume en tres acciones: ajustas, sujetas, giras y listo. Es una herramienta pensada para facilitar la apertura de tapas duras y hacer la vida cotidiana en la cocina más fácil, cómoda y segura.",
  need: "DestapFlex resuelve la dificultad física y la frustración que sufren las personas con artritis, túnel carpiano, adultos mayores o quienes no tienen la fuerza suficiente para abrir y romper el sello de vacío de frascos y botellas. También responde a la falta de agarre y al deslizamiento de la mano sobre tapas metálicas, plásticas o húmedas, evitando maltrato o dolor en las manos.",
  objective:
    "El objetivo principal del desarrollo de DestapFlex fue diseñar una solución accesible y ergonómica que facilite la apertura de envases sellados en el hogar, garantizando la autonomía de cualquier usuario sin importar sus limitaciones y fuerza física.",
  audience:
    "Este producto se dirige principalmente al público general, con especial énfasis en familias con un núcleo de 2 a 4 integrantes pertenecientes a un estrato socioeconómico medio-bajo, consumidoras ocasionales en el hogar de alimentos envasados en recipientes de plástico o vidrio con sellado hermético.",
};

export const productComponents: ProductComponent[] = [
  {
    name: "Armazón principal",
    function:
      "Une el conjunto y transmite el torque que el usuario ejerce sobre el envase. Tiene forma semicilíndrica abierta de un solo brazo.",
    material: "Polímero ABS",
    dimension: "Longitud total de 170 mm",
  },
  {
    name: "Recubrimiento ergonómico del mango",
    function:
      "Recubre la zona de agarre del armazón con silueta de los dedos para mayor comodidad y mejor control. Textura modelada tipo diamante.",
    material: "TPE",
    dimension: "Espesor de 5 mm",
  },
  {
    name: "Correa ajustable",
    function:
      "Proporciona el agarre del producto con las tapas tipo rosca, con buena fricción, resistencia y durabilidad. Permite un rango de apertura de 20 a 160 mm.",
    material: "TPU (caucho)",
    dimension: "Espesor de 30 mm y largo de 250 mm",
  },
  {
    name: "Pin de bloqueo",
    function:
      "Bloquea de forma firme y segura el diámetro requerido por el usuario. Tipo bola.",
    material: "Acero inoxidable",
    dimension: "Longitud de 120 mm y diámetro de 8 mm",
  },
  {
    name: "Cuñas metálicas",
    function:
      "Se ubican en la parte inferior del armazón principal para abrir envases tipo cerveza, aprovechando la forma semicilíndrica abierta para realizar la palanca de apertura.",
    material: "Acero inoxidable",
  },
];

/** DestapFlex se compone de 5 piezas principales (no 7). */
export const productComponentCount = productComponents.length;

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "ajusta",
    title: "Ajusta",
    description:
      "La correa se adapta al contorno de la tapa (20 a 160 mm), permitiendo sujetar envases de distintos tamaños con un ajuste intuitivo.",
  },
  {
    id: "sujeta",
    title: "Sujeta",
    description:
      "El mango ergonómico y la correa antideslizante mejoran el agarre, aumentando la fricción entre la mano, el producto y la tapa.",
  },
  {
    id: "gira",
    title: "Gira",
    description:
      "El brazo de palanca disminuye el esfuerzo requerido para desenroscar la tapa y completar la apertura.",
  },
];

export const renderViews: RenderView[] = [
  {
    id: "principal",
    label: "Render principal",
    src: assets.renderPrincipal1.publicPath,
    alt: assets.renderPrincipal1.alt,
    width: assets.renderPrincipal1.width,
    height: assets.renderPrincipal1.height,
  },
  {
    id: "frontal",
    label: "Vista frontal",
    src: assets.renderFrontal.publicPath,
    alt: assets.renderFrontal.alt,
    width: assets.renderFrontal.width,
    height: assets.renderFrontal.height,
  },
  {
    id: "lateral",
    label: "Vista lateral",
    src: assets.renderLateral.publicPath,
    alt: assets.renderLateral.alt,
    width: assets.renderLateral.width,
    height: assets.renderLateral.height,
  },
  {
    id: "posterior",
    label: "Vista posterior",
    src: assets.renderPosterior.publicPath,
    alt: assets.renderPosterior.alt,
    width: assets.renderPosterior.width,
    height: assets.renderPosterior.height,
  },
  {
    id: "contexto",
    label: "Contexto de uso",
    src: assets.renderContexto.publicPath,
    alt: assets.renderContexto.alt,
    width: assets.renderContexto.width,
    height: assets.renderContexto.height,
  },
];

/**
 * Video de presentación en Diseño Industrial.
 */
export const productVideo: VideoAsset = {
  src: "/videos/destapflex.mp4",
  title: "Video de presentación — DestapFlex",
  poster: "/assets/render-principal-1.png",
};

export const underConstructionMessage =
  "En construcción. Esta sección será desarrollada próximamente.";

export const vsmObjective =
  "El VSM permite representar visualmente el proceso actual de fabricación de DestapFlex, identificando los tiempos de procesamiento, espera y transporte. Su propósito es reconocer actividades que no agregan valor y encontrar oportunidades para mejorar el flujo productivo.";

export const leanCanvasObjective =
  "El Lean Canvas permite organizar de forma visual los aspectos principales del modelo de negocio de DestapFlex, como el problema, los usuarios, la propuesta de valor, los canales, los costos y las fuentes de ingreso. Su aplicación permite identificar riesgos y definir qué elementos deben validarse durante el proceso de innovación.";

export const leanCanvasSlogan = "Abre más. Esfuérzate menos.";

/** Íconos minimalistas (contorno) para cada bloque, excepto la UVP con foto de producto. */
export type LeanCanvasIcon =
  | "problem"
  | "solution"
  | "segments"
  | "advantage"
  | "metrics"
  | "channels"
  | "costs"
  | "revenue";

type LeanCanvasListBlock = {
  title: string;
  items: string[];
  icon: LeanCanvasIcon;
};

type LeanCanvasValueBlock = {
  title: string;
  body: string;
  productImage: {
    src: string;
    alt: string;
  };
};

export const leanCanvasBlocks: {
  problem: LeanCanvasListBlock;
  solution: LeanCanvasListBlock;
  uniqueValue: LeanCanvasValueBlock;
  unfairAdvantage: LeanCanvasListBlock;
  customerSegments: LeanCanvasListBlock;
  keyMetrics: LeanCanvasListBlock;
  channels: LeanCanvasListBlock;
  costStructure: LeanCanvasListBlock;
  revenueStreams: LeanCanvasListBlock;
} = {
  problem: {
    title: "Problema",
    items: [
      "Frascos y tapas rígidas difíciles de abrir.",
      "Dolor y tensión en manos (especialmente adultos mayores, artritis).",
      "Frustración y dependencia de ayuda.",
      "El mango de alternativas actuales es incómodo o poco intuitivo.",
    ],
    icon: "problem",
  },
  solution: {
    title: "Solución",
    items: [
      "Diseño ergonómico avanzado (mango antideslizante con TPE, textura tipo diamante).",
      "Sistema de correa flexible ajustable (caucho TPU, rango 20 – 160 mm).",
      "Mecanismo de bloqueo tipo bola (pin de acero inoxidable).",
      "Diseño compacto con símbolos e instrucciones claros.",
    ],
    icon: "solution",
  },
  uniqueValue: {
    title: "Propuesta única de valor",
    body: "Un destapador ergonómico y ajustable que permite abrir recipientes de diferentes tamaños con menor esfuerzo, comodidad y seguridad.",
    productImage: {
      src: "/assets/destapflex-producto.png",
      alt: "DestapFlex — vista de producto",
    },
  },
  unfairAdvantage: {
    title: "Ventaja injusta",
    items: [
      "Materiales sostenibles (polímero ABS reciclable).",
      "Funcionalidad dual (cuñas metálicas para botellas tipo cerveza).",
      "Sistema de agarre antideslizante y diseño ajustable exclusivo.",
    ],
    icon: "advantage",
  },
  customerSegments: {
    title: "Segmentos de clientes",
    items: [
      "Familias medianas (2 – 4 integrantes, estrato medio-bajo).",
      "Personas con poca fuerza o movilidad reducida (artritis, túnel carpiano).",
      "Adultos mayores que buscan autonomía.",
      "Restaurantes y cafeterías.",
    ],
    icon: "segments",
  },
  keyMetrics: {
    title: "Métricas clave",
    items: [
      "Satisfacción del cliente (encuestas).",
      "Tasa de recompra y recomendaciones.",
      "Adquisición de nuevos clientes.",
      "Productos / unidades vendidas por mes.",
      "Usuarios activos en la página de ventas.",
    ],
    icon: "metrics",
  },
  channels: {
    title: "Canales",
    items: [
      "Tiendas virtuales (e-commerce propio).",
      "Marketplaces (Amazon, etc.) y tiendas online.",
      "Redes sociales.",
      "Tiendas de artículos de cocina y hogar.",
      "Ferreterías y restaurantes.",
    ],
    icon: "channels",
  },
  costStructure: {
    title: "Estructura de costos",
    items: [
      "Materiales (ABS, TPE, TPU, acero inoxidable) y materia prima.",
      "Fabricación, moldeo, maquinaria y mano de obra.",
      "Empaque, logística y distribución.",
      "Publicidad y marketing.",
    ],
    icon: "costs",
  },
  revenueStreams: {
    title: "Flujos de ingreso",
    items: [
      "Venta del destapador (producto principal).",
      "Venta de mangos de repuesto.",
      "Venta al por mayor a distribuidores.",
      "Comercialización a restaurantes, hoteles, marketplaces y tiendas.",
    ],
    icon: "revenue",
  },
};

/** Resumen compacto usado en otras vistas; alineado al Lean Canvas completo. */
export const leanCanvasSummary = {
  problem:
    "Los usuarios presentan dificultad para abrir recipientes de diferentes tamaños porque los destapadores tradicionales requieren fuerza y no se adaptan a todas las tapas.",
  segments: [
    "Familias medianas (2 – 4 integrantes, estrato medio-bajo)",
    "Personas con movilidad reducida (artritis, túnel carpiano)",
    "Adultos mayores que buscan autonomía",
  ],
  valueProposition:
    "Un destapador ergonómico y ajustable que permite abrir recipientes de diferentes tamaños con menor esfuerzo, comodidad y seguridad.",
  risks: [
    "Baja aceptación del producto",
    "Competencia con destapadores tradicionales",
    "Incremento en costos de fabricación",
    "Retrasos en el suministro de materias primas",
  ],
  toValidate: [
    "Facilidad de uso",
    "Comodidad y ergonomía del mango",
    "Aceptación y satisfacción del usuario",
    "Claridad de símbolos e instrucciones",
  ],
};

export const vsmFindings = [
  "Las esperas representan la mayor parte del Lead Time, con 283 minutos frente a 68 minutos de actividades que agregan valor.",
  "El moldeo e inyección de la base presenta el mayor tiempo de ciclo, por lo que puede convertirse en un cuello de botella dentro del proceso productivo.",
  "La inspección de calidad y el empaque tienen tiempos bajos; por ello, la mayor oportunidad de mejora está en reducir las esperas y desplazamientos entre etapas.",
];

export const nextCutDecisions = [
  "Reducir los tiempos de espera y transporte entre las etapas.",
  "Revisar la distribución de las operaciones para evitar desplazamientos innecesarios.",
  "Implementar controles de calidad durante la fabricación para prevenir errores y reprocesos.",
];
