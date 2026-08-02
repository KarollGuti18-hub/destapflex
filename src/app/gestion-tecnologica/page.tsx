import type { Metadata } from "next";

import { UnderConstruction } from "@/components/ui/UnderConstruction";

export const metadata: Metadata = {
  title: "DestapFlex",
  description: "Sección en construcción de DestapFlex.",
};

export default function GestionTecnologicaPage() {
  return <UnderConstruction title="Gestión Tecnológica" />;
}
