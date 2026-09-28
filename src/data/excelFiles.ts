export interface ExcelWorkbookRef {
  id: string;
  title: string;
  fileName: string;
  href: string;
  summary: string;
}

export const excelWorkbooks: ExcelWorkbookRef[] = [
  {
    id: "afc",
    title: "Vigilancia",
    fileName: "AFC destaflex.xlsx",
    href: "/docs/afc-destaflex.xlsx",
    summary: "Áreas de vigilancia, factores críticos, patentes y fichas de producto.",
  },
  {
    id: "matrices",
    title: "Matrices",
    fileName: "Matrices destaflex completa.xlsx",
    href: "/docs/matrices-destaflex-completa.xlsx",
    summary: "MPC, BCG, punto de equilibrio, fuentes y la hoja de protección con el explosionado.",
  },
];
