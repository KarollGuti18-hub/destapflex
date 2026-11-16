export const viabilityNav = [
  { id: "financiera", label: "Evaluación financiera" },
  { id: "analisis", label: "Análisis" },
  { id: "seis-sigma", label: "Seis Sigma" },
  { id: "fallos", label: "Oportunidades de fallo" },
  { id: "voc", label: "Voz del cliente" },
] as const;

export const developmentNav = [
  { id: "producto", label: "Producto" },
  { id: "cts", label: "CTS y CTQ" },
  { id: "patente", label: "Patentabilidad" },
  { id: "precio", label: "Precio y utilidad" },
] as const;

export const financeContext = [
  ["Unidad económica", "1 abridor DESTAPFLEX vendido"],
  ["Tipo de negocio", "Producto nuevo, fabricación semi casera, venta en línea"],
  ["Moneda / horizonte", "Pesos colombianos (COP) · 5 años"],
];

export const investmentRows: string[][] = [
  ["Diseño final y ajustes del prototipo", "$2.500.000", "Planos finales y 2–3 prototipos."],
  ["Moldes y herramientas", "$9.600.000", "Moldes, troqueladora, taladro y remachadora (dato de las matrices)."],
  ["Lote piloto y pruebas de calidad", "$2.600.000", "Las 120 unidades del lote piloto (Seis Sigma)."],
  ["Propiedad intelectual (SIC)", "$3.500.000", "Modelo de utilidad, diseño industrial y marca ante la SIC (estimado)."],
  ["Adecuación del taller", "$1.500.000", "Mesa, estantes e iluminación."],
  ["Inventario inicial de materiales", "$4.000.000", "Materiales para 1 mes (≈ 200 unidades)."],
  ["Lanzamiento comercial", "$2.500.000", "Fotos, tienda en línea y pauta del primer mes."],
  ["Inversión inicial", "$26.200.000", "Total antes de vender la primera unidad."],
];

export const laborRows: string[][] = [
  ["Salario mínimo 2026 (SMMLV)", "$1.750.905", "Salario mínimo 2026."],
  ["Auxilio de transporte 2026", "$249.095", "Auxilio de transporte 2026."],
  ["Factor prestacional y seguridad social", "0,52", "Salud, pensión, ARL, primas, cesantías y vacaciones."],
  ["Costo mensual del operario", "$2.910.471", "Salario × (1 + factor) + auxilio."],
];

export const fixedCosts: string[][] = [
  ["Arriendo de taller pequeño", "$1.000.000", "$12.000.000", "Espacio semi casero."],
  ["Servicios públicos (energía, agua)", "$300.000", "$3.600.000", "Energía y agua del taller."],
  ["Mano de obra (1 operario)", "$2.910.471", "$34.925.647", "Ver el costo del operario."],
  ["Marketing digital permanente", "$400.000", "$4.800.000", "Redes y Mercado Libre."],
  ["Internet y telefonía", "$120.000", "$1.440.000", "Pedidos en línea."],
  ["Otros gastos administrativos", "$250.000", "$3.000.000", "Papelería, transporte, imprevistos."],
  ["Mantenimiento y reposición de moldes", "$150.000", "$1.800.000", "Los moldes se desgastan."],
  ["Costos fijos", "$5.130.471", "$61.565.647", "Igual en los 3 escenarios."],
];

export const variableCosts: string[][] = [
  ["Correa de agarre (caucho EPDM/TPE perforado)", "$3.500", "$3.200", "$3.000"],
  ["Cuerpo principal (ABS de alta resistencia)", "$6.400", "$5.800", "$5.400"],
  ["Mango ergonómico (2 fundas de goma)", "$2.600", "$2.400", "$2.200"],
  ["Pin de bloqueo (pasador de bola con anillo)", "$3.200", "$2.900", "$2.600"],
  ["Cuña metálica en L (acero inoxidable)", "$1.800", "$1.600", "$1.500"],
  ["Cuña abrelatas retráctil", "$1.500", "$1.400", "$1.300"],
  ["Tornillería y remaches", "$700", "$600", "$500"],
  ["Empaque y etiqueta", "$2.000", "$1.800", "$1.600"],
  ["Reproceso por calidad (Seis Sigma)", "$2.500", "$1.500", "$800"],
  ["Comisión de venta / pasarela de pago", "$4.690", "$4.990", "$5.290"],
  ["Costo variable unitario", "$28.890", "$26.190", "$24.190"],
];

export const priceBlock: string[][] = [
  ["Precio de venta unitario (PVu)", "$46.900", "$49.900", "$52.900"],
  ["Comisión de venta", "10 %", "10 %", "10 %"],
  ["Unidades vendidas año 1", "1.800", "2.400", "2.800"],
  ["Equivalente mensual año 1", "150", "200", "233"],
  ["Crecimiento anual (años 2 a 5)", "15 %", "20 %", "22 %"],
  ["Capacidad máxima anual (1 operario)", "7.920", "7.920", "7.920"],
  ["Costo variable unitario", "$28.890", "$26.190", "$24.190"],
  ["Margen de contribución", "$18.010", "$23.710", "$28.710"],
  ["Margen de contribución (%)", "38,4 %", "47,5 %", "54,3 %"],
];

export const salesForecast: string[][] = [
  ["Año 1", "1.800", "2.400", "2.800"],
  ["Año 2", "2.070", "2.880", "3.416"],
  ["Año 3", "2.381", "3.456", "4.168"],
  ["Año 4", "2.738", "4.147", "5.085"],
  ["Año 5", "3.149", "4.976", "6.204"],
  ["Total 5 años", "12.138", "17.859", "21.673"],
];

export const yearOne: string[][] = [
  ["Cantidad", "1.800", "2.400", "2.800"],
  ["Ingresos", "$84.420.000", "$119.760.000", "$148.120.000"],
  ["Costo variable total", "$52.002.000", "$62.856.000", "$67.732.000"],
  ["Costos fijos", "$61.565.647", "$61.565.647", "$61.565.647"],
  ["Beneficio / flujo año 1", "−$29.147.647", "−$4.661.647", "$18.822.353"],
];

export const cashFlow: string[][] = [
  ["Ingresos año 1", "$84.420.000", "$119.760.000", "$148.120.000"],
  ["Ingresos año 2", "$97.083.000", "$143.712.000", "$180.706.400"],
  ["Ingresos año 3", "$111.668.900", "$172.454.400", "$220.487.200"],
  ["Ingresos año 4", "$128.412.200", "$206.935.300", "$268.996.500"],
  ["Ingresos año 5", "$147.688.100", "$248.302.400", "$328.191.600"],
  ["Flujo año 0 (inversión)", "−$26.200.000", "−$26.200.000", "−$26.200.000"],
  ["Flujo año 1", "−$29.147.647", "−$4.661.647", "$18.822.353"],
  ["Flujo año 2", "−$24.284.947", "$6.719.153", "$36.507.713"],
  ["Flujo año 3", "−$18.683.837", "$20.376.113", "$58.097.633"],
  ["Flujo año 4", "−$12.254.267", "$36.759.723", "$84.424.703"],
  ["Flujo año 5", "−$4.852.157", "$56.415.313", "$116.551.193"],
  ["Acumulado año 0", "−$26.200.000", "−$26.200.000", "−$26.200.000"],
  ["Acumulado año 1", "−$55.347.647", "−$30.861.647", "−$7.377.647"],
  ["Acumulado año 2", "−$79.632.594", "−$24.142.494", "$29.130.066"],
  ["Acumulado año 3", "−$98.316.432", "−$3.766.382", "$87.227.698"],
  ["Acumulado año 4", "−$110.570.699", "$32.993.341", "$171.652.401"],
  ["Acumulado año 5", "−$115.422.856", "$89.408.654", "$288.203.594"],
];

export const breakEvenRows: string[][] = [
  ["Pesimista", "3.419", "285", "1.800", "No lo alcanza en 5 años"],
  ["Esperado", "2.597", "217", "2.400", "Lo alcanza en el año 2"],
  ["Optimista", "2.145", "179", "2.800", "Lo alcanza desde el año 1"],
];

export const breakEvenSeries: { units: number; income: number; total: number }[] = [
  { units: 0, income: 0, total: 61565647 },
  { units: 500, income: 24950000, total: 74660647 },
  { units: 1000, income: 49900000, total: 87755647 },
  { units: 1500, income: 74850000, total: 100850647 },
  { units: 2000, income: 99800000, total: 113945647 },
  { units: 2500, income: 124750000, total: 127040647 },
  { units: 3000, income: 149700000, total: 140135647 },
  { units: 3500, income: 174650000, total: 153230647 },
  { units: 4000, income: 199600000, total: 166325647 },
  { units: 4500, income: 224550000, total: 179420647 },
  { units: 5000, income: 249500000, total: 192515647 },
  { units: 5500, income: 274450000, total: 205610647 },
  { units: 6000, income: 299400000, total: 218705647 },
];

export const roiRows: string[][] = [
  ["Pesimista", "−$29.147.647", "−111,3 %", "−440,6 %", "Pierde"],
  ["Esperado", "−$4.661.647", "−17,8 %", "341,3 %", "Gana"],
  ["Optimista", "$18.822.353", "71,8 %", "1.100 %", "Gana"],
];

export const paybackRows: string[][] = [
  ["Pesimista", "$26.200.000", "−$29.147.647", "No recupera", "No recupera en 5 años"],
  ["Esperado", "$26.200.000", "−$4.661.647", "3,1 años", "≈ 37 meses"],
  ["Optimista", "$26.200.000", "$18.822.353", "1,2 años", "≈ 14 meses"],
];

export const vanRows: string[][] = [
  ["Pesimista", "−$91.612.412", "No aplica", "No", "No viable"],
  ["Esperado", "$37.290.535", "41,7 %", "Sí", "Viable"],
  ["Optimista", "$162.189.115", "124,3 %", "Sí", "Viable"],
];

export const summaryRows: string[][] = [
  ["Inversión", "$26.200.000", "$26.200.000", "$26.200.000"],
  ["Precio de venta", "$46.900", "$49.900", "$52.900"],
  ["Margen de contribución", "$18.010", "$23.710", "$28.710"],
  ["Punto de equilibrio (unid./año)", "3.419", "2.597", "2.145"],
  ["Ventas año 1 (unid.)", "1.800", "2.400", "2.800"],
  ["Beneficio año 1", "−$29.147.647", "−$4.661.647", "$18.822.353"],
  ["ROI año 1", "−111,3 %", "−17,8 %", "71,8 %"],
  ["ROI acumulado 5 años", "−440,6 %", "341,3 %", "1.100 %"],
  ["Payback", "No recupera", "3,1 años", "1,2 años"],
  ["VAN", "−$91.612.412", "$37.290.535", "$162.189.115"],
  ["TIR", "No aplica", "41,7 %", "124,3 %"],
];

export const formulaRows: string[][] = [
  ["Costo variable unitario (CVu)", "Suma de costos por pieza + empaque + reproceso + comisión (o CV total ÷ unidades)"],
  ["Margen de contribución unitario", "MCu = PVu − CVu"],
  ["Ingresos", "Ingresos = Unidades × PVu"],
  ["Costo variable total", "CVT = Unidades × CVu"],
  ["Beneficio / flujo neto simplificado", "Flujo = Ingresos − CVT − Costos fijos"],
  ["Punto de equilibrio (unidades)", "PE = Costos fijos ÷ MCu"],
  ["ROI", "ROI = Beneficio ÷ Inversión"],
  ["Payback", "Años con flujo acumulado negativo + (saldo por recuperar ÷ flujo del año siguiente)"],
  ["VAN", "VAN = −Inversión + Σ Flujo_t ÷ (1 + i)^t , t = 1…5"],
  ["TIR", "Tasa i que hace VAN = 0"],
  ["Pronóstico de ventas", "Unidades_t = MIN(Unidades_(t−1) × (1 + crecimiento) ; capacidad)"],
];

export const scenarioHeaders = ["", "Pesimista", "Esperado", "Optimista"] as const;

export const priceSensitivity: string[][] = [
  ["$49.900", "$23.710", "2.597"],
  ["$35.000", "$10.300", "5.978"],
  ["$25.000", "$1.300", "47.359"],
];

export const financeAnalysis: { title: string; text: string }[] = [
  {
    title: "Conclusión",
    text: "DESTAPFLEX es viable en el escenario esperado. El VAN es de $37,3 millones con una tasa del 15 %, la TIR es de 41,7 % y la inversión de $26,2 millones se recupera en 3,1 años (≈ 37 meses). El primer año todavía cierra con pérdida.",
  },
  {
    title: "Inversión",
    text: "De los $26,2 millones, la parte más grande son los moldes y herramientas ($9,6 millones, 37 %), seguidos del inventario inicial ($4 millones) y la propiedad intelectual ante la SIC ($3,5 millones). Es una inversión baja para un producto nuevo porque la fabricación es semicasera.",
  },
  {
    title: "Costos y margen",
    text: "Cada abridor cuesta $26.190 en costos variables y se vende a $49.900, así que deja un margen de contribución de $23.710 (47,5 %). Los costos fijos son de $61,6 millones al año, y el más pesado es el operario ($34,9 millones, el 57 %). Ese costo fijo alto es lo que hace que el negocio necesite volumen para ganar.",
  },
  {
    title: "Equilibrio y primer año",
    text: "Hay que vender 2.597 abridores al año (217 al mes) para no perder. En el escenario esperado se venden 2.400 el primer año, un poco menos del equilibrio, por eso hay una pérdida de $4,7 millones con ingresos de $119,8 millones. Desde el año 2 (2.880 unidades) el negocio supera el equilibrio y empieza a ganar.",
  },
  {
    title: "Retorno",
    text: "El ROI del primer año es negativo (−17,8 %), pero en 5 años el ROI acumulado llega a 341 %: por cada peso invertido se recuperan 4,41. El crecimiento esperado del 20 % anual hace que el flujo pase de −$4,7 millones en el año 1 a $56,4 millones en el año 5, usando solo el 63 % de la capacidad de un operario.",
  },
  {
    title: "Escenarios",
    text: "El escenario pesimista falla porque vende menos (150 al mes) a un precio menor y nunca alcanza el equilibrio de 3.419 unidades al año. El riesgo principal es el volumen de ventas, no el costo.",
  },
  {
    title: "Precio",
    text: "La encuesta mostró que el 60 % esperaba pagar entre $15.000 y $25.000. Con los costos actuales, a $35.000 el margen bajaría a $10.300 y el equilibrio subiría a unas 5.978 unidades al año, más del doble del actual. Por eso no conviene bajar el precio: hay que justificar los $49.900 con el valor del 3 en 1, la durabilidad y la garantía. Además, el reproceso por calidad cuesta $1.500 por unidad; si el proceso sube de 1,62 σ a la meta de 2,5 σ, ese costo baja y el margen mejora.",
  },
  {
    title: "Qué hacer",
    text: "La innovación es rentable si alcanza ventas de al menos 217 abridores al mes desde el segundo año. Para lograrlo, el esfuerzo debe ir a ventas y marketing, sostener el precio comunicando el valor, y bajar defectos para reducir el reproceso.",
  },
];

export const sigmaDefects: { piece: string; defects: string; share: string }[] = [
  { piece: "Cuerpo", defects: "22", share: "30,6 %" },
  { piece: "Correa", defects: "18", share: "25,0 %" },
  { piece: "Pin", defects: "10", share: "13,9 %" },
  { piece: "Cuña abrelatas", defects: "9", share: "12,5 %" },
  { piece: "Cuña en L", defects: "8", share: "11,1 %" },
  { piece: "Mango", defects: "5", share: "6,9 %" },
];

export const sigmaCalcs: { variable: string; value: string }[] = [
  { variable: "Unidades del lote", value: "120" },
  { variable: "Defectos", value: "72" },
  { variable: "Oportunidades (6 piezas)", value: "6" },
  { variable: "DPU", value: "0,60" },
  { variable: "DPO", value: "0,10" },
  { variable: "DPMO", value: "100.000" },
  { variable: "Rendimiento", value: "54,9 %" },
  { variable: "Sigma", value: "1,62 σ" },
];

export const sigmaComparison: string[][] = [
  ["Unidades del lote", "120", "120"],
  ["Defectos", "80", "72"],
  ["Rendimiento", "51,3 %", "54,9 %"],
  ["Sigma", "1,53 σ", "1,62 σ"],
  ["Unidades sin defecto", "62", "66"],
  ["Defectos del sistema de bloqueo y de la correa", "34", "28"],
];

export const sigmaComparisonText =
  "El producto de diseño industrial operaba a 1,53 σ, con 80 defectos en un lote de 120 unidades y un rendimiento del 51,3 %. El de gestión tecnológica llegó a 1,62 σ, con 72 defectos y un rendimiento del 54,9 %, es decir, unas 66 unidades sin defecto frente a 62. La mejora es pequeña porque no se rediseñó el producto, solo se hicieron ajustes: se cambió el seguro por un pin de bola con anillo y se agregaron fundas de goma al mango. Por eso los defectos del sistema de bloqueo y de la correa bajaron de 34 a 28. Aun así, el cuerpo (30,6 %) y la correa (25 %) siguen concentrando el 56 % de las fallas por el molde artesanal y la perforación manual. La meta es llegar a 2,5 σ en el primer año con una plantilla de perforación, un mejor molde y revisión del 100 % de las unidades, lo que reduciría el costo de reproceso de $1.500 por unidad.";

export const vocCharts = [
  {
    src: "/assets/voc/palabras-frecuentes.png",
    alt: "Gráfico 1. Palabras más mencionadas",
    caption: "Gráfico 1. Palabras más mencionadas",
    width: 921,
    height: 601,
  },
  {
    src: "/assets/voc/nube-palabras.png",
    alt: "Gráfico 2. Nube de palabras",
    caption: "Gráfico 2. Nube de palabras",
    width: 1096,
    height: 586,
  },
  {
    src: "/assets/voc/sentimiento.png",
    alt: "Gráfico 3. Distribución del sentimiento",
    caption: "Gráfico 3. Distribución del sentimiento",
    width: 672,
    height: 666,
  },
  {
    src: "/assets/voc/emociones.png",
    alt: "Gráfico 4. Distribución de las emociones",
    caption: "Gráfico 4. Distribución de las emociones",
    width: 897,
    height: 490,
  },
  {
    src: "/assets/voc/palabras-emocion.png",
    alt: "Gráfico 5. Palabras asociadas a las principales emociones",
    caption: "Gráfico 5. Palabras asociadas a las principales emociones",
    width: 1265,
    height: 875,
  },
] as const;

export const sentimentRows: string[][] = [
  ["Neutral", "106", "65,0 %"],
  ["Negativo", "31", "19,0 %"],
  ["Positivo", "26", "16,0 %"],
];

export const emotionRows: string[][] = [
  ["Otros", "152", "93,3 %"],
  ["Tristeza", "5", "3,1 %"],
  ["Alegría", "4", "2,5 %"],
  ["Miedo", "2", "1,2 %"],
];

export const multipleChoice: string[][] = [
  ["Precio adecuado", "Entre $15.000 y $25.000", "60 %"],
  ["Función innovadora", "Base magnética para la nevera", "45 %"],
  ["Ajuste ergonómico", "Mango más grueso y anatómico", "40 %"],
  ["Durabilidad", "Que el mango resista la palanca sin deformarse", "35 %"],
  ["Seguridad", "Sistema de bloqueo visible en la correa", "35 %"],
  ["Calidad premium", "Detalles en acero inoxidable en el mango", "35 %"],
  ["Otros usos", "Aflojar tapas de productos de limpieza", "35 %"],
];

export const ctsValidation: string[][] = [
  [
    "Operación de bloqueo práctico",
    "Tiempo de fijación y liberación (≤ 3 s)",
    "“Mecanismo de ajuste rápido”, “3 frascos de distintos tamaños sin reajustes complicados”. Se usa en momentos de afán.",
    "Validado",
  ],
  [
    "Operación de bloqueo práctico",
    "Fuerza del seguro (≤ 15 N)",
    "“Tener un seguro sencillo de usar”; los usuarios principales tienen poca fuerza en las manos.",
    "Validado",
  ],
  [
    "Operación de bloqueo práctico",
    "Resistencia al desplazamiento (≤ 5 mm)",
    "3 respuestas piden que la correa no patine o no se desajuste. El bloqueo visible es la opción de seguridad más elegida (35 %).",
    "Validado",
  ],
  [
    "Agarre cómodo y antideslizante",
    "Profundidad de alvéolos (6 mm)",
    "Mango más grueso y anatómico (40 %) y muescas para los dedos (25 %).",
    "Validado",
  ],
  [
    "Agarre cómodo y antideslizante",
    "Coeficiente de fricción (≥ 0,8)",
    "6 respuestas sobre resbalones. Goma antideslizante (30 %) y correa rugosa (20 %).",
    "Validado",
  ],
  [
    "Agarre cómodo y antideslizante",
    "Presión máxima en la palma",
    "Ardor en la palma, dolor en manos y muñecas, 2 casos de túnel carpiano.",
    "Validado, falta la meta",
  ],
  [
    "Multifuncionalidad",
    "Rango de diámetros (20–160 mm)",
    "Ajuste a varios diámetros, desde botellas pequeñas hasta frascos gigantes.",
    "Validado",
  ],
  [
    "Multifuncionalidad",
    "Fuerza para tapa corona",
    "Abrir botellas de bebidas es el segundo uso extra más pedido (25 %).",
    "Validado, falta la meta",
  ],
  [
    "Multifuncionalidad",
    "Apertura de anillas de latas",
    "Nadie mencionó latas. Solo “que pueda abrir no solo frascos” y “abrir todo lo hermético”.",
    "Sin evidencia directa",
  ],
];

export const productIntro =
  "DESTAPFLEX es un abridor multiusos 3 en 1: abre frascos, botellas con tapa corona y latas con anilla. Para frascos, la correa ajustable abraza la tapa y el mango hace palanca; para botellas usa la cuña metálica en L, y para latas, la cuña abrelatas retráctil.";

export const ctsRows: string[][] = [
  [
    "Operación de bloqueo práctico",
    "Tiempo de fijación y liberación de la correa",
    "Tiempo",
    "≤ 3 s",
    "La correa se ajusta al tamaño del frasco y se traba con el pin de bloqueo en un solo movimiento.",
  ],
  [
    "Operación de bloqueo práctico",
    "Fuerza del seguro",
    "Fuerza",
    "≤ 15 N",
    "El pin de bola con anillo se mete y se saca con poca fuerza, pensado para personas con poca fuerza en las manos.",
  ],
  [
    "Operación de bloqueo práctico",
    "Resistencia al desplazamiento bajo torque",
    "Desplazamiento",
    "≤ 5 mm",
    "El pin mantiene la correa tensa al girar, así no patina sobre la tapa.",
  ],
  [
    "Agarre cómodo y antideslizante",
    "Profundidad de alvéolos para soporte de dedos",
    "Longitud",
    "6 mm",
    "El mango ergonómico tiene alvéolos donde se apoyan los dedos.",
  ],
  [
    "Agarre cómodo y antideslizante",
    "Coeficiente de fricción en el agarre",
    "μ (fricción estática)",
    "≥ 0,8",
    "Las fundas de goma del mango y la correa de caucho evitan que la mano y la tapa se resbalen.",
  ],
  [
    "Agarre cómodo y antideslizante",
    "Presión máxima concentrada en la palma",
    "Presión",
    "Por definir",
    "El mango reparte la fuerza en toda la mano y la palanca reduce el esfuerzo, para que no duela la palma ni la muñeca.",
  ],
  [
    "Multifuncionalidad",
    "Fuerza manual para retirar tapa corona metálica",
    "Fuerza",
    "Por definir",
    "La cuña metálica en L se engancha bajo la tapa de la botella y la levanta con palanca.",
  ],
  [
    "Multifuncionalidad",
    "Apertura de anillas de latas",
    "Espesor de cuña",
    "Por definir",
    "La cuña abrelatas retráctil sale para levantar la anilla y se guarda después de usarla.",
  ],
  [
    "Multifuncionalidad",
    "Rango de diámetros de apertura",
    "Longitud",
    "20 – 160 mm",
    "La correa ajustable sirve desde frascos pequeños hasta frascos grandes de conservas.",
  ],
];

export const patentable = [
  {
    title: "Correa perforada + pin de bola",
    text: "Mecanismo de ajuste: la correa perforada se fija con el pin de bola de botón rápido en el cuerpo. Es la pieza que se propone como modelo de utilidad ante la SIC (10 años): novedad y aplicación industrial, no el nivel de una patente de invención.",
  },
  {
    title: "Integración 3 en 1",
    text: "La correa, la cuña metálica en L para tapas de cerveza y la cuña abrelatas retráctil van en un solo cuerpo. Las cuñas entran como reivindicaciones del mismo modelo de utilidad.",
  },
  {
    title: "Apariencia y marca",
    text: "La forma del cuerpo se protege como diseño industrial. El nombre y el logo, como marca en las clases 8 y 21.",
  },
];

export const notPatentable =
  "Lo que no se puede proteger por separado: la idea de abrir frascos con una correa, la correa de caucho sola o el pin de bola comercial, porque ya existen en patentes anteriores o son piezas de catálogo.";

export const productPhotos = [
  {
    src: "/assets/desarrollo/antes.jpg",
    alt: "DestapFlex de diseño industrial, antes de los ajustes",
    caption: "Diseño industrial. Así era antes de los ajustes de gestión tecnológica.",
    width: 572,
    height: 1024,
  },
  {
    src: "/assets/desarrollo/producto-cocina.jpg",
    alt: "DestapFlex de gestión tecnológica, con la cuña abrelatas",
    caption: "Producto de gestión tecnológica. Correa en aro, pin de bloqueo y cuña abrelatas.",
    width: 572,
    height: 1024,
  },
  {
    src: "/assets/desarrollo/render-final.png",
    alt: "Render del producto de gestión tecnológica",
    caption: "Render. Se ven la correa perforada, el pin, la cuña en L y la cuña abrelatas retráctil.",
    width: 478,
    height: 782,
  },
  {
    src: "/assets/desarrollo/prototipo-correa.jpg",
    alt: "Prototipo físico con la correa perforada y el pin",
    caption: "Prototipo físico. Correa perforada y pin que atraviesa el cuerpo.",
    width: 576,
    height: 1024,
  },
] as const;
