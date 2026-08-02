import type { DecisionLogEntry, ProcessStage, VsmIndicator } from "@/types";

export const processStages: ProcessStage[] = [
  {
    id: "etapa-1",
    order: 1,
    name: "Moldeo e inyección de base",
    cycleTimeMin: 31,
    waitTimeMin: 90,
    description:
      "Recepción de insumos e inyección del cuerpo principal.",
  },
  {
    id: "etapa-2",
    order: 2,
    name: "Sobremoldeo y acondicionamiento de la correa",
    cycleTimeMin: 20,
    waitTimeMin: 125,
    description:
      "Sobremoldeo, corte, perforado y pulido de la correa.",
    highlightWait: true,
  },
  {
    id: "etapa-3",
    order: 3,
    name: "Ensamble y unión de piezas",
    cycleTimeMin: 12,
    waitTimeMin: 60,
    description:
      "Unión del cuerpo, correa, escuadras, remaches y pin de bloqueo.",
  },
  {
    id: "etapa-4",
    order: 4,
    name: "Inspección de calidad y empaque",
    cycleTimeMin: 5,
    waitTimeMin: 8,
    description:
      "Verificación, ajuste a distintos recipientes y empaquetado.",
  },
];

export const vsmIndicators: VsmIndicator[] = [
  {
    label: "Tiempo con valor agregado",
    value: "68 min",
  },
  {
    label: "Tiempo de espera",
    value: "283 min",
  },
  {
    label: "Lead Time",
    value: "351 min",
  },
  {
    label: "Takt Time",
    value: "5 min/unidad",
  },
];

export const valueAddedMinutes = 68;
export const waitMinutes = 283;

export const decisionLog: DecisionLogEntry[] = [
  {
    week: "Semana 1",
    dateLabel: "Semana 1",
    decision: "Seleccionar DestapFlex como producto del proyecto.",
    justification:
      "Se identificó que tiene potencial de innovación y mejora.",
  },
  {
    week: "Semana 2",
    dateLabel: "Semana 2",
    decision: "Elaborar el VSM y el Lean Canvas.",
    justification:
      "Permitió analizar el proceso de producción y el estado actual del producto.",
  },
  {
    week: "Semana 3",
    dateLabel: "Semana 3",
    decision: "Definir el tipo de público objetivo.",
    justification:
      "Es necesario identificar a qué usuarios se dirige el producto y cuáles son sus necesidades.",
  },
];
