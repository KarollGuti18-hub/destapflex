export type PatentRelevance = "cercana" | "sustituto" | "referencia";

export type BcgQuadrant = "Vaca" | "Perro";

export interface ProtectionItem {
  element: string;
  type: string;
  justification: string;
  entity: string;
}

export interface WatchArea {
  decision: string;
  need: string;
  area: string;
  factor: string;
  source: string;
  query: string;
}

export interface PatentRecord {
  id: string;
  code: string;
  inventors: string;
  context: string;
  description: string;
  addedValue: string;
  drawback: string;
  href: string;
  relevance: PatentRelevance;
}

export interface CompetitorProfile {
  id: string;
  name: string;
  shortName: string;
  country: string;
  size: string;
  rank: number;
  technology: number;
  product: number;
  market: number;
  total: number;
  strength: string;
  weakness: string;
  companySales: string;
  categorySalesUsdM: number;
  relativeShare: number;
  quadrant: BcgQuadrant;
  href: string;
}

export interface CurveSeries {
  id: string;
  label: string;
  scores: [number, number, number];
  color: string;
  width: number;
  dashed?: boolean;
  defaultOn: boolean;
}

export interface InnovationDecision {
  finding: string;
  evidence: string;
  decision: string;
  justification: string;
}

export const centralQuestion =
  "¿DestapFlex representa realmente una oportunidad de innovación frente al estado del arte, la competencia y el mercado?";

export const validationSections = [
  { id: "excel", label: "Excel" },
  { id: "proteccion", label: "Protección" },
  { id: "vigilancia", label: "Vigilancia" },
  { id: "busqueda", label: "Búsqueda" },
  { id: "resultados", label: "Resultados" },
  { id: "mpc", label: "MPC" },
  { id: "curva", label: "Curva de valor" },
  { id: "bcg", label: "BCG" },
  { id: "decisiones", label: "Decisiones" },
] as const;

export const protectionItems: ProtectionItem[] = [
  {
    element:
      "Mecanismo de ajuste: correa perforada (1) que se fija con el pin de bola de botón rápido (4) en el cuerpo principal (2).",
    type: "Modelo de utilidad (propiedad industrial, 10 años)",
    justification:
      "Es una mejora funcional de una herramienta conocida. En la vigilancia se encontró un abridor de correa (BR PI0804320-5), pero su correa no se fija con un pin. Una patente de invención exige un nivel inventivo alto, difícil de sustentar con esos antecedentes; el modelo de utilidad solo pide novedad y aplicación industrial.",
    entity: "Superintendencia de Industria y Comercio (SIC)",
  },
  {
    element:
      "Integración 3 en 1: correa + cuña metálica en L para tapas de cerveza (5) + cuña abrelatas retráctil (6) en un solo cuerpo.",
    type: "Se incluye en el mismo modelo de utilidad, como reivindicaciones adicionales",
    justification:
      "La patente china CN 210103421 U también combina varias funciones, pero su pieza para desenroscar tiene un solo diámetro. Lo nuevo de DestapFlex es que se adapta a tapas de distintos tamaños y además trae las cuñas.",
    entity: "SIC",
  },
  {
    element:
      "Apariencia del producto: forma del cuerpo, mango ergonómico con fundas de goma (3) y aspecto general.",
    type: "Diseño industrial (10 años)",
    justification:
      "Protege lo que el cliente ve y reconoce en el estante, y evita copias de apariencia aunque cambien el mecanismo.",
    entity: "SIC",
  },
  {
    element: 'Nombre "DestapFlex" y logo.',
    type: "Marca (10 años, renovables), clases 8 y 21 de Niza (utensilios manuales y abridores)",
    justification:
      "Es lo que diferencia al producto en el mercado y en plataformas como Amazon o Mercado Libre. Antes de registrarla se debe verificar que no exista una marca parecida.",
    entity: "SIC",
  },
  {
    element:
      "Manual de uso, ilustración del explosionado, fotos, arte del empaque y textos de venta.",
    type: "Derechos de autor (vida del autor + 80 años)",
    justification:
      "La protección nace con la obra. El registro es voluntario y sirve como prueba de autoría.",
    entity: "Dirección Nacional de Derecho de Autor (DNDA)",
  },
  {
    element: "Información interna: costos, proveedores, proceso semi casero y moldes.",
    type: "Secreto empresarial (no se registra)",
    justification:
      "No conviene publicarla. Se protege con acuerdos de confidencialidad entre los socios y con quienes fabriquen.",
    entity: "No aplica (contratos de confidencialidad)",
  },
];

export const protectionLimits =
  "Lo que no se puede proteger por separado: la idea de abrir frascos con una correa, la correa de caucho sola o el pin de bola comercial, porque ya existen en patentes anteriores o son piezas de catálogo.";

export const protectionConclusions = [
  "La protección más fuerte y realista es un modelo de utilidad sobre el mecanismo de correa perforada + pin de bola, junto con la integración de las dos cuñas. Las patentes revisadas muestran que los componentes sueltos ya existen, pero no esta combinación.",
  "Se complementa con diseño industrial y marca, que son más económicos y rápidos, y protegen la imagen del producto mientras avanza el trámite del modelo de utilidad.",
  "No se debe mostrar el producto públicamente (redes, ferias, ventas) antes de radicar la solicitud, para no perder la novedad.",
  "Primero se protege en Colombia ante la SIC; si el producto funciona, se puede extender a otros países dentro de los 12 meses de prioridad.",
];

export const watchAreas: WatchArea[] = [
  {
    decision: "Elegir la tecnología del producto",
    need: "Qué patentes y mecanismos de apertura existen",
    area: "Tecnología",
    factor:
      "¿Qué patentes y modelos de utilidad existen sobre abridores manuales de frascos, latas y botellas?",
    source: "Google Patents",
    query:
      '("bottle opener" OR "can opener" OR "cap opener" OR "jar opener") AND ("manual opener" OR "hand tool" OR "handheld opener")',
  },
  {
    decision: "Definir las características del producto",
    need: "Qué productos similares y sustitutos existen",
    area: "Producto",
    factor:
      "¿Qué abridores manuales y eléctricos compiten con DestapFlex y qué ofrece cada uno?",
    source: "Amazon",
    query: '"jar opener" OR "can opener" OR "bottle opener"',
  },
  {
    decision: "Definir el mercado objetivo",
    need: "Qué empresas participan y cuánto venden",
    area: "Mercado",
    factor: "¿Qué marcas lideran el mercado de abridores de cocina y cuánto venden?",
    source: "Amazon e informes anuales",
    query: '"can and jar openers market" OR "jar opener market"',
  },
];

export const watchRelation = [
  {
    area: "Tecnología",
    text: "Pregunta si el mecanismo de DestapFlex es novedoso frente a las patentes. Define qué se puede proteger.",
  },
  {
    area: "Producto",
    text: "Pregunta qué ofrecen los abridores manuales y eléctricos. Define funciones y ergonomía.",
  },
  {
    area: "Mercado",
    text: "Pregunta quién lidera y cuánto vende. Define el competidor principal y el nicho.",
  },
];

export const watchConclusion =
  "Usamos las mismas tres áreas de la MPC y la BCG, así toda la vigilancia alimenta directamente las matrices y las decisiones.";

export const searchStrategy = {
  keywords:
    "bottle opener, can opener, cap opener, jar opener, manual opener, hand tool, handheld opener.",
  operators:
    "OR agrupa sinónimos; AND exige que la herramienta sea manual; las comillas buscan la frase exacta.",
  databases:
    "Google Patents (patentes), Amazon (productos), informes anuales y de mercado (Verified Market Reports, GMI, Dataintelo).",
  languages:
    "Búsqueda en inglés. Los resultados salieron en inglés, portugués, chino y japonés, y se leyeron con la traducción de Google Patents.",
  justification:
    "La ecuación combina qué abre (botellas, latas, tapas, frascos) con cómo se usa (manual, de mano). Así prioriza herramientas manuales como DestapFlex. El inglés concentra la mayor parte de las patentes publicadas.",
  support:
    "Con las ecuaciones de apoyo se identificaron los productos, las 15 marcas y el tamaño del mercado.",
};

export const patents: PatentRecord[] = [
  {
    id: "br-correa",
    code: "BR PI0804320-5 A2",
    inventors: "Paulo Cornélis de Geus",
    context: "Utensilios de cocina y abrefrascos universales de correa",
    description:
      "Herramienta manual con mango ergonómico y correa ajustable antideslizante de unos 40 cm, para tapas de hasta 10 cm de diámetro.",
    addedValue:
      "Alto apalancamiento mecánico para abrir recipientes difíciles con poco esfuerzo, también en ambientes húmedos.",
    drawback: "La correa se ajusta a mano en cada tapa y no se bloquea con un pin.",
    href: "https://patents.google.com/patent/BRPI0804320A2/en",
    relevance: "cercana",
  },
  {
    id: "cn-multi",
    code: "CN 210103421 U",
    inventors: "Li Yueming",
    context: "Herramientas manuales multifunción para abrir envases",
    description:
      "Mango con pieza para desenroscar tapas, palanca de dos patas y aro destapador de botellas en la punta.",
    addedValue:
      "Reúne tapas de rosca, tapas a presión y chapas en una sola herramienta.",
    drawback: "La pieza para desenroscar tiene un solo diámetro.",
    href: "https://patents.google.com/patent/CN210103421U/en",
    relevance: "cercana",
  },
  {
    id: "ca-electrico",
    code: "CA 2610039 C",
    inventors: "Mark Andrew Sanders y Pat Y. Mah",
    context: "Abrefrascos automáticos",
    description:
      "Abrefrascos eléctrico de un solo toque que ajusta mordazas al frasco y a la tapa con engranajes planetarios.",
    addedValue: "Elimina el esfuerzo físico, pensado para adultos mayores o personas con artritis.",
    drawback: "Es voluminoso, usa baterías y solo abre frascos.",
    href: "https://patents.google.com/patent/CA2610039C/en",
    relevance: "sustituto",
  },
  {
    id: "us-motor",
    code: "US 7,574,808 B2",
    inventors: "Pat Y. Mah y Mark Andrew Sanders",
    context: "Mecanismos automáticos para abrelatas",
    description:
      "Abrelatas con motor y rueda de corte excéntrica que penetra la pared de la lata y revierte al terminar.",
    addedValue: "Automatiza el corte y la liberación sin apretar mangos dobles.",
    drawback: "Mecánica compleja, sensible a sensores sucios, y solo abre latas.",
    href: "https://patents.google.com/patent/US7574808B2/en",
    relevance: "sustituto",
  },
  {
    id: "jp-engranaje",
    code: "JP 3169281 U",
    inventors: "Pat Y. Mah, Alexander Joseph Kalogroulis, Kwong Keung Tung y Michael Ng",
    context: "Abrelatas de mecanismo rotativo (Daka Research)",
    description:
      "Abrelatas de manivela plegable con engranajes excéntricos que enganchan, cortan y sueltan la lata.",
    addedValue: "Operación silenciosa, sin atascos, y manivela que se guarda en la carcasa.",
    drawback: "Muchas piezas, más costoso de fabricar y reparar que un abrelatas simple. Solo abre latas.",
    href: "https://patents.google.com/patent/JP3169281U/en",
    relevance: "sustituto",
  },
  {
    id: "us-mason",
    code: "US 2020/0039701 A1",
    inventors: "Joshua I. Nielsen y Aaron B. Panone",
    context: "Tapas reutilizables para frascos de vidrio",
    description:
      "Tapa adaptable que convierte un frasco tipo Mason en vaso portátil, usando la banda de rosca original.",
    addedValue: "Reutiliza frascos como vasos con sellado hermético.",
    drawback: "No es un abridor: depende de la banda metálica del recipiente.",
    href: "https://patents.google.com/patent/US20200039701A1/en",
    relevance: "referencia",
  },
  {
    id: "us-book",
    code: "US 7,313,983 B1",
    inventors: "Steven C. Book",
    context: "Destapadores de bar y artículos promocionales",
    description:
      "Destapador plano con cuerpo de plástico, refuerzo metálico y tapón de goma para no lastimar el dedo.",
    addedValue: "Amortigua la presión y deja superficie para imprimir marca.",
    drawback: "Solo abre chapas y suma varias piezas y materiales.",
    href: "https://patents.google.com/patent/US7313983B1/en",
    relevance: "referencia",
  },
  {
    id: "us-auger",
    code: "US 2012/0151704 A1",
    inventors: "Gregory Kirk White",
    context: "Herramientas para vaciar alimentos",
    description:
      "Rascador en espiral para extraer alimentos densos de latas y frascos.",
    addedValue: "Saca salsas o mermeladas atrapadas en los bordes.",
    drawback: "No abre ni sella recipientes.",
    href: "https://patents.google.com/patent/US20120151704A1/en",
    relevance: "referencia",
  },
  {
    id: "cn-navaja",
    code: "CN 201889803 U",
    inventors: "Wang Weiyi",
    context: "Navaja plegable multiusos",
    description:
      "Mango con hoja intercambiable, cabeza abrelatas y espátula.",
    addedValue: "Tres funciones de trabajo en un cuerpo compacto.",
    drawback: "No está pensada para frascos de rosca ni para manos con poca fuerza.",
    href: "https://patents.google.com/patent/CN201889803U/en",
    relevance: "referencia",
  },
  {
    id: "us-d562",
    code: "US D562,658 S",
    inventors: "Shun So",
    context: "Diseño de abrelatas manual",
    description: "Patente de diseño ornamental de un abrelatas compacto de líneas suavizadas.",
    addedValue: "Apariencia ergonómica y fácil de sujetar.",
    drawback: "Solo protege la apariencia, no el mecanismo.",
    href: "https://patents.google.com/patent/USD562658S/en",
    relevance: "referencia",
  },
  {
    id: "us-d962",
    code: "US D962,030 S",
    inventors: "Ryan William Hume y Lovina Hsin-I Hua",
    context: "Diseño de abridor de botellas",
    description: "Abridor metálico con ranura para cortar cápsulas de vino.",
    addedValue: "Una sola pieza que corta la envoltura y destapa.",
    drawback: "Limitado a botellas con chapa o cápsula.",
    href: "https://patents.google.com/patent/USD962030S/en",
    relevance: "referencia",
  },
  {
    id: "us-d726",
    code: "US D726,517 S",
    inventors: "Brett William Fischer",
    context: "Llave de llavero con destapador",
    description: "Llave metálica plana que integra una muesca abridora.",
    addedValue: "Monobloque compacto, fácil de llevar.",
    drawback: "Brazo de palanca corto y un solo uso.",
    href: "https://patents.google.com/patent/USD726517S/en",
    relevance: "referencia",
  },
  {
    id: "cn-una-mano",
    code: "CN 103588150 A",
    inventors: "Wang Lizhu",
    context: "Abridor de botellas de una mano",
    description: "Marco en L con gancho y anillo para el dedo, operado con una sola mano.",
    addedValue: "Útil si la otra mano tiene movilidad reducida.",
    drawback: "Exige fuerza firme en un solo dedo y solo abre chapas.",
    href: "https://patents.google.com/patent/CN103588150A/en",
    relevance: "referencia",
  },
  {
    id: "jp-sazae",
    code: "JP 3924081 B2",
    inventors: "Osafune Kenji",
    context: "Abridor de caracol marino",
    description: "Hoja curva para separar la carne de la concha.",
    addedValue: "Sigue la forma interna de la concha sin romperla.",
    drawback: "Uso muy específico: no abre frascos, latas ni botellas.",
    href: "https://patents.google.com/patent/JP3924081B2/en",
    relevance: "referencia",
  },
  {
    id: "jp-resellado",
    code: "JP 5542432 B2",
    inventors: "Pari Alexandre, Ramsey Christopher Paul y Le Fevre Mark James",
    context: "Tapas resellables para latas",
    description: "Abridor deslizante que abre la lata y permite volver a cerrarla.",
    addedValue: "Conserva la gasificación después de abrir.",
    drawback: "Es una tapa industrial, no una herramienta de cocina.",
    href: "https://patents.google.com/patent/JP5542432B2/en",
    relevance: "referencia",
  },
];

/** Figuras de la columna A de la hoja Análisis (AFC destaflex.xlsx), fila por fila. */
export const patentFigures: Record<string, { src: string; width: number; height: number }[]> = {
  "us-mason": [{ src: "/assets/vigilancia/patente-01.png", width: 294, height: 700 }],
  "br-correa": [{ src: "/assets/vigilancia/patente-02.png", width: 500, height: 430 }],
  "us-book": [{ src: "/assets/vigilancia/patente-03.png", width: 453, height: 700 }],
  "us-auger": [{ src: "/assets/vigilancia/patente-04.png", width: 439, height: 700 }],
  "cn-navaja": [
    { src: "/assets/vigilancia/patente-05.png", width: 506, height: 700 },
    { src: "/assets/vigilancia/patente-16.png", width: 399, height: 700 },
  ],
  "us-d562": [{ src: "/assets/vigilancia/patente-06.png", width: 409, height: 700 }],
  "us-d962": [{ src: "/assets/vigilancia/patente-07.png", width: 585, height: 700 }],
  "us-d726": [{ src: "/assets/vigilancia/patente-08.png", width: 405, height: 700 }],
  "cn-multi": [{ src: "/assets/vigilancia/patente-09.png", width: 700, height: 489 }],
  "cn-una-mano": [{ src: "/assets/vigilancia/patente-10.png", width: 700, height: 695 }],
  "jp-sazae": [{ src: "/assets/vigilancia/patente-11.png", width: 630, height: 504 }],
  "ca-electrico": [{ src: "/assets/vigilancia/patente-12.png", width: 700, height: 481 }],
  "us-motor": [{ src: "/assets/vigilancia/patente-13.png", width: 361, height: 700 }],
  "jp-engranaje": [{ src: "/assets/vigilancia/patente-14.png", width: 700, height: 600 }],
  "jp-resellado": [{ src: "/assets/vigilancia/patente-15.png", width: 700, height: 385 }],
};

export const patentReading =
  "Se revisaron 16 documentos de Estados Unidos, Brasil, China, Japón y Canadá (CN 201889803 U aparece dos veces en el registro). Ninguna combina correa ajustable con bloqueo por pin y cuñas para latas y botellas. Hay espacio para un modelo de utilidad.";

export const marketHighlights = [
  {
    title: "15 marcas, 7 países",
    text: "OXO es el competidor principal: la línea Good Grips nació para personas con artritis. Los grandes (Whirlpool, Groupe SEB, Newell) venden mucho, pero sus abridores son básicos.",
  },
  {
    title: "Sustitutos eléctricos",
    text: "Hamilton Beach, Kitchen Mama y Cuisinart eliminan el esfuerzo, pero dependen de energía y abren un solo tipo de envase.",
  },
  {
    title: "Tendencias",
    text: "Ergonomía para artritis y adultos mayores. Los productos de cocina inclusivos crecen cerca de 7,4% al año. El mercado de abridores de latas y frascos ronda US$ 1.200 millones y crece cerca de 5%.",
  },
];

export const marketConclusion =
  "DestapFlex no compite por tamaño. Su espacio es un abridor manual, multiuso y ergonómico a precio accesible, algo que ninguna marca ofrece en un solo producto.";

export const marketSizes = [
  {
    name: "Abridores de latas y frascos",
    value: "US$ 1.200 M",
    growth: "≈ 5% anual",
    href: "https://www.verifiedmarketreports.com/product/can-and-jar-openers-market/",
  },
  {
    name: "Destapadores manuales de botellas",
    value: "US$ 1.300 M",
    growth: "≈ 5,3% anual",
    href: "https://www.gminsights.com/industry-analysis/manual-bottle-opener-market",
  },
  {
    name: "Abridores de frascos",
    value: "US$ 250 M",
    growth: "≈ 5,5% anual",
    href: "https://www.verifiedmarketreports.com/product/jar-opener-market/",
  },
  {
    name: "Cocina inclusiva",
    value: "US$ 4.800 M",
    growth: "≈ 7,4% anual",
    href: "https://dataintelo.com/report/inclusive-kitchen-products-market",
  },
];

export const mpcWeights = [
  {
    factor: "Producto",
    weight: "0,40",
    reason: "El cliente compra por función y ergonomía, no por el tamaño de la empresa.",
  },
  {
    factor: "Mercado",
    weight: "0,35",
    reason: "Ventas, canales y marca definen el alcance real de cada competidor.",
  },
  {
    factor: "Tecnología",
    weight: "0,25",
    reason: "Los mecanismos están maduros y hay poca diferencia entre marcas.",
  },
];

export const mpcQuestions = [
  {
    question: "¿En qué factor son similares?",
    answer:
      "En tecnología. 11 de 15 califican 3 y es el factor con menor desviación (≈ 0,53). Rueda de corte, palanca, corte lateral y base antideslizante son tecnologías maduras. Casi todos usan ABS o PP, acero inoxidable y producción tercerizada. Solo Groupe SEB y Zwilling llegan a 4.",
  },
  {
    question: "¿Qué factor marca más diferencia?",
    answer:
      "Mercado, con desviación ≈ 0,85. Los puntajes se reparten entre 4, 3 y 2. En 2025 Whirlpool facturó US$ 15.524 millones y Hamilton Beach US$ 606,9 millones: unas 25 veces menos. Kuhn Rikon, Etac y Kitchen Mama venden por canales especializados o por Amazon.",
  },
  {
    question: "¿Qué atributo pesa más?",
    answer:
      "Producto, con peso 0,40. El mercado de abridores está fragmentado: OXO, líder en destapadores, representa cerca de 1,5% y los cinco mayores juntos cerca de 5,3% (GMI, 2025). El cliente elige por función y ergonomía. Por eso OXO lidera la matriz (3,75) y Kuhn Rikon, siendo pequeña, saca 4 en producto.",
  },
  {
    question: "¿Quién es el competidor principal?",
    answer: "OXO (3,75), seguido de Groupe SEB (3,60) y Conair (3,35).",
  },
];

export const competitors: CompetitorProfile[] = [
  {
    id: "oxo",
    name: "OXO – Helen of Troy",
    shortName: "OXO",
    country: "EE.UU.",
    size: "Mediano",
    rank: 1,
    technology: 3,
    product: 4,
    market: 4,
    total: 3.75,
    strength: "Producto y marca fuertes. Good Grips está pensado para artritis.",
    weakness: "Solo abre frascos.",
    companySales: "US$ 1.786 millones (año fiscal 2026, Helen of Troy)",
    categorySalesUsdM: 71.5,
    relativeShare: 1.554,
    quadrant: "Vaca",
    href: "https://www.oxo.com/oxo-gg-twisting-jar-opener-with-basepad.html",
  },
  {
    id: "seb",
    name: "Groupe SEB (Tefal, WMF, Imusa)",
    shortName: "Groupe SEB",
    country: "Francia",
    size: "Grande",
    rank: 2,
    technology: 4,
    product: 3,
    market: 4,
    total: 3.6,
    strength: "Tecnología y presencia global. Imusa llega a Colombia.",
    weakness: "Producto convencional, no pensado para poca fuerza en las manos.",
    companySales: "€ 8.169 millones (2025)",
    categorySalesUsdM: 32,
    relativeShare: 0.448,
    quadrant: "Perro",
    href: "https://www.groupeseb.com",
  },
  {
    id: "conair",
    name: "Conair (Cuisinart)",
    shortName: "Conair",
    country: "EE.UU.",
    size: "Mediano",
    rank: 3,
    technology: 3,
    product: 3,
    market: 4,
    total: 3.35,
    strength: "Marca de gama media-alta y operación sencilla en eléctricos.",
    weakness: "Depende de electricidad, cuesta más y solo abre latas.",
    companySales: "≈ US$ 2.110 millones (2016, última cifra pública)",
    categorySalesUsdM: 30.5,
    relativeShare: 0.427,
    quadrant: "Perro",
    href: "https://www.cuisinart.com",
  },
  {
    id: "zwilling",
    name: "Zwilling J.A. Henckels",
    shortName: "Zwilling",
    country: "Alemania",
    size: "Mediano",
    rank: 4,
    technology: 4,
    product: 3,
    market: 3,
    total: 3.25,
    strength: "Metalurgia propia y diseño premium.",
    weakness: "Precio alto y sin enfoque en artritis.",
    companySales: "€ 969 millones (2025)",
    categorySalesUsdM: 20,
    relativeShare: 0.28,
    quadrant: "Perro",
    href: "https://www.zwilling.com",
  },
  {
    id: "kuhn",
    name: "Kuhn Rikon",
    shortName: "Kuhn Rikon",
    country: "Suiza",
    size: "Pequeño",
    rank: 5,
    technology: 3,
    product: 4,
    market: 2,
    total: 3.05,
    strength: "Producto multiuso: latas, frascos y botellas.",
    weakness: "Poca presencia y precio alto.",
    companySales: "No publica ventas (≈ 240 empleados)",
    categorySalesUsdM: 11,
    relativeShare: 0.154,
    quadrant: "Perro",
    href: "https://www.kuhnrikon.com",
  },
  {
    id: "spectrum",
    name: "Spectrum Brands (BLACK+DECKER)",
    shortName: "BLACK+DECKER",
    country: "EE.UU.",
    size: "Mediano",
    rank: 6,
    technology: 3,
    product: 3,
    market: 3,
    total: 3,
    strength: "Marca conocida y precio accesible entre los eléctricos.",
    weakness: "Depende de energía y no abre frascos ni botellas.",
    companySales: "US$ 1.153,7 millones (segmento Hogar, año fiscal 2025)",
    categorySalesUsdM: 31.5,
    relativeShare: 0.441,
    quadrant: "Perro",
    href: "https://www.blackanddeckerappliances.com",
  },
  {
    id: "hamilton",
    name: "Hamilton Beach",
    shortName: "Hamilton Beach",
    country: "EE.UU.",
    size: "Mediano",
    rank: 6,
    technology: 3,
    product: 3,
    market: 3,
    total: 3,
    strength: "Corte lateral sin filo y funcionamiento con poca intervención.",
    weakness: "Requiere electricidad y solo abre latas.",
    companySales: "US$ 606,9 millones (2025)",
    categorySalesUsdM: 46,
    relativeShare: 0.643,
    quadrant: "Perro",
    href: "https://www.hamiltonbeach.com",
  },
  {
    id: "whirlpool",
    name: "Whirlpool (KitchenAid)",
    shortName: "Whirlpool",
    country: "EE.UU.",
    size: "Grande",
    rank: 8,
    technology: 3,
    product: 2,
    market: 4,
    total: 2.95,
    strength: "Mercado y marca. Ventas de la empresa: US$ 15.524 millones (2025).",
    weakness: "Producto básico. Exige fuerza en las dos manos y no abre frascos.",
    companySales: "US$ 15.524 millones (2025)",
    categorySalesUsdM: 6.8,
    relativeShare: 0.095,
    quadrant: "Perro",
    href: "https://www.kitchenaid.com",
  },
  {
    id: "newell",
    name: "Newell Brands (Oster, Sunbeam)",
    shortName: "Newell",
    country: "EE.UU.",
    size: "Grande",
    rank: 8,
    technology: 3,
    product: 2,
    market: 4,
    total: 2.95,
    strength: "Mercado amplio en pequeños electrodomésticos.",
    weakness: "Producto básico, necesita electricidad y solo abre latas.",
    companySales: "US$ 7.200 millones (2025)",
    categorySalesUsdM: 26.5,
    relativeShare: 0.371,
    quadrant: "Perro",
    href: "https://www.oster.com",
  },
  {
    id: "lifetime",
    name: "Lifetime Brands (Farberware)",
    shortName: "Lifetime",
    country: "EE.UU.",
    size: "Mediano",
    rank: 10,
    technology: 2,
    product: 3,
    market: 3,
    total: 2.75,
    strength: "Precio bajo y distribución amplia en Estados Unidos.",
    weakness: "Diseño básico que exige buen agarre. Tecnología en 2.",
    companySales: "US$ 647,9 millones (2025)",
    categorySalesUsdM: 45.5,
    relativeShare: 0.636,
    quadrant: "Perro",
    href: "https://www.farberware.com",
  },
  {
    id: "fiskars",
    name: "Fiskars Group",
    shortName: "Fiskars",
    country: "Finlandia",
    size: "Mediano",
    rank: 11,
    technology: 3,
    product: 3,
    market: 2,
    total: 2.65,
    strength: "Diseño nórdico ergonómico.",
    weakness: "Poca presencia en Latinoamérica y sin abridor multiuso.",
    companySales: "€ 1.140,2 millones (2025)",
    categorySalesUsdM: 7.8,
    relativeShare: 0.109,
    quadrant: "Perro",
    href: "https://www.fiskars.com",
  },
  {
    id: "zyliss",
    name: "Zyliss (DKB Household)",
    shortName: "Zyliss",
    country: "Suiza",
    size: "Pequeño",
    rank: 11,
    technology: 3,
    product: 3,
    market: 2,
    total: 2.65,
    strength: "Se bloquea sobre la lata y el imán levanta la tapa.",
    weakness: "Solo abre latas y no publica ventas.",
    companySales: "No publica ventas (≈ 160 empleados)",
    categorySalesUsdM: 10,
    relativeShare: 0.14,
    quadrant: "Perro",
    href: "https://www.zyliss.com",
  },
  {
    id: "etac",
    name: "Etac",
    shortName: "Etac",
    country: "Suecia",
    size: "Pequeño",
    rank: 11,
    technology: 3,
    product: 3,
    market: 2,
    total: 2.65,
    strength: "Especialista en ayudas para artritis y baja movilidad.",
    weakness: "No incluye abridores y vende por canales de salud, a precio alto.",
    companySales: "No publica ventas actuales",
    categorySalesUsdM: 0.3,
    relativeShare: 0.0042,
    quadrant: "Perro",
    href: "https://etac.com/en-us/products/small-aids-for-daily-living",
  },
  {
    id: "tramontina",
    name: "Tramontina",
    shortName: "Tramontina",
    country: "Brasil",
    size: "Mediano",
    rank: 14,
    technology: 3,
    product: 2,
    market: 3,
    total: 2.6,
    strength: "Precio accesible y presencia fuerte en Latinoamérica.",
    weakness: "Diseño básico, sin enfoque ergonómico.",
    companySales: "R$ 9.600 millones (2024)",
    categorySalesUsdM: 18.2,
    relativeShare: 0.255,
    quadrant: "Perro",
    href: "https://www.tramontina.com",
  },
  {
    id: "kitchen-mama",
    name: "Kitchen Mama",
    shortName: "Kitchen Mama",
    country: "EE.UU. / China",
    size: "Pequeño",
    rank: 15,
    technology: 2,
    product: 2,
    market: 2,
    total: 2,
    strength: "Venta fuerte en Amazon y uso con un botón.",
    weakness: "Solo abre latas y depende de baterías.",
    companySales: "No publica ventas (marca nativa de Amazon)",
    categorySalesUsdM: 13,
    relativeShare: 0.182,
    quadrant: "Perro",
    href: "https://shopkitchenmama.com",
  },
];

export const destapFlexExpected = {
  label: "DestapFlex esperado",
  technology: 3,
  product: 4,
  market: 2,
  total: 3.05,
  note: "Puesto 5 de 16, empatado con Kuhn Rikon y por encima de BLACK+DECKER, Hamilton Beach, Whirlpool y Newell.",
};

export const curveSeries: CurveSeries[] = [
  {
    id: "esperado",
    label: "DestapFlex esperado",
    scores: [3, 4, 2],
    color: "#e8891c",
    width: 3,
    defaultOn: true,
  },
  {
    id: "oxo",
    label: "OXO",
    scores: [3, 4, 4],
    color: "#12304a",
    width: 2.5,
    defaultOn: true,
  },
  {
    id: "whirlpool",
    label: "Whirlpool",
    scores: [3, 2, 4],
    color: "#6a7582",
    width: 2,
    defaultOn: true,
  },
  {
    id: "kuhn",
    label: "Kuhn Rikon",
    scores: [3, 4, 2],
    color: "#2a5f86",
    width: 2,
    defaultOn: true,
  },
  {
    id: "promedio",
    label: "Promedio (15)",
    scores: [3, 2.87, 3],
    color: "#b7c0c9",
    width: 2,
    dashed: true,
    defaultOn: false,
  },
  {
    id: "mama",
    label: "Kitchen Mama",
    scores: [2, 2, 2],
    color: "#8d6a45",
    width: 2,
    defaultOn: false,
  },
];

export const errc = [
  {
    action: "Eliminar",
    text: "La dependencia de electricidad o baterías.",
  },
  {
    action: "Reducir",
    text: "El esfuerzo de agarre y el número de utensilios en la cocina.",
  },
  {
    action: "Incrementar",
    text: "La ergonomía y la adaptación a distintos diámetros (20 a 160 mm).",
  },
  {
    action: "Crear",
    text: "Un 3 en 1 con correa perforada y pin de bola de ajuste rápido.",
  },
];

export const curveConclusion =
  "La curva de los grandes cae en Producto justo donde el cliente decide. Con la curva esperada, DestapFlex pasaría de 1,65 a 3,05 en la MPC y quedaría en el puesto 5 de 16. No se gana en tamaño: se iguala a OXO donde él es fuerte.";

export const destapFlexBcg = {
  relativeShare: 0.000526,
  categorySalesUsdM: 0.0376,
  growth: 0.0521,
};

export const marketGrowth = 0.0521;

export const bcgReading =
  "El mercado de abridores es maduro: crece cerca de 5,2% al año, por debajo del 10% que separa crecimiento alto y bajo. Por eso todas las empresas quedan en la mitad inferior. OXO es la única vaca lechera (participación relativa 1,55). El resto, incluido DestapFlex en su punto de equilibrio, aparece como perro. La oportunidad está en la cocina inclusiva, que crece cerca de 7,4% al año: allí DestapFlex puede comportarse como interrogante si el lanzamiento se dirige a personas con artritis y adultos mayores.";

/** Serie de la gráfica «Punto de equilibrio Destaflex (unidades por mes)», hoja Punto de Equilibrio. */
export const breakEvenSeries = [
  { units: 0, income: 0, cost: 5247137.27 },
  { units: 50, income: 2495000, cost: 6481637.27 },
  { units: 100, income: 4990000, cost: 7716137.27 },
  { units: 150, income: 7485000, cost: 8950637.27 },
  { units: 200, income: 9980000, cost: 10185137.27 },
  { units: 250, income: 12475000, cost: 11419637.27 },
  { units: 300, income: 14970000, cost: 12654137.27 },
  { units: 350, income: 17465000, cost: 13888637.27 },
  { units: 400, income: 19960000, cost: 15123137.27 },
  { units: 450, income: 22455000, cost: 16357637.27 },
  { units: 500, income: 24950000, cost: 17592137.27 },
] as const;

export const breakEven = {
  price: "$49.900",
  variable: "$24.690",
  fixed: "$5.247.137 / mes",
  units: "209 unid/mes",
  year: "2.508 unid/año",
  usd: "≈ US$ 37.600 / año",
  note: "Precio de referencia frente al OXO Good Grips (cerca de US$ 12–15), porque DestapFlex hace tres funciones. TRM del 25 de septiembre de 2026: $3.329,61. Esas ventas de equilibrio son el punto que ubica a DestapFlex en la BCG, no ventas reales.",
};

export const decisions: InnovationDecision[] = [
  {
    finding: "El cliente decide por función y ergonomía, y el mercado está fragmentado.",
    evidence: "MPC: Producto pesa 0,40. OXO lidera destapadores con cerca de 1,5% (GMI).",
    decision: "Enfocar la innovación en el área de Producto.",
    justification:
      "Es donde los grandes califican 2 y se puede diferenciar sin competir en tamaño.",
  },
  {
    finding: "Ya existen abridores de correa, pero sin bloqueo.",
    evidence: "BR PI0804320-5 A2: correa de 40 cm con limitador, sin pin de bola.",
    decision: "Mantener la correa perforada + pin de bola y registrarla como modelo de utilidad ante la SIC.",
    justification: "Es el elemento novedoso frente al estado del arte.",
  },
  {
    finding: "Las herramientas multifunción tienen un solo diámetro.",
    evidence: "CN 210103421 U y Kuhn Rikon Auto Safety Master Opener.",
    decision: "Conservar el 3 en 1 (correa + cuña en L + cuña abrelatas) en un solo cuerpo.",
    justification: "Unir adaptabilidad de diámetro y varias funciones es el diferencial.",
  },
  {
    finding: "Los sustitutos eléctricos dependen de energía y abren un solo tipo de envase.",
    evidence: "CA 2610039 C, US 7,574,808 B2, Hamilton Beach y Kitchen Mama.",
    decision: "Mantener DestapFlex manual y reforzar el mango ergonómico.",
    justification: "Menor costo, sin baterías y más versátil.",
  },
  {
    finding: "El mercado de abridores es maduro (≈ 5%); lo inclusivo crece más (≈ 7,4%).",
    evidence: "BCG: todos en Perro salvo OXO. Dataintelo para cocina inclusiva.",
    decision: "Dirigir el lanzamiento a adultos mayores y personas con artritis.",
    justification: "Nicho con mayor crecimiento, donde DestapFlex puede ser interrogante.",
  },
  {
    finding: "La fabricación semi casera limita calidad y costo.",
    evidence: "Punto de equilibrio: 209 unid/mes. Costo variable $24.690.",
    decision: "Validar el prototipo y evaluar moldeo por inyección del cuerpo.",
    justification: "Sube Tecnología de 2 a 3 en la curva y reduce el costo unitario.",
  },
];

export const closingPoints = [
  {
    title: "Estado del arte",
    text: "Ninguna patente revisada combina correa ajustable con bloqueo por pin y cuñas para latas y botellas.",
  },
  {
    title: "Competencia",
    text: "Los grandes son débiles en Producto. Solo OXO y Kuhn Rikon llegan a 4.",
  },
  {
    title: "Mercado",
    text: "Maduro y fragmentado, con un nicho inclusivo que crece más rápido que los abridores.",
  },
];

export const nextCut =
  "Tercer corte (Improve): prototipo funcional, pruebas con usuarios con artritis, radicación del modelo de utilidad y costeo con moldeo por inyección.";

export function formatScore(value: number): string {
  return value.toLocaleString("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatCompact(value: number): string {
  return value.toLocaleString("es-CO", {
    minimumFractionDigits: value < 1 ? 2 : 1,
    maximumFractionDigits: value < 1 ? 2 : 1,
  });
}
