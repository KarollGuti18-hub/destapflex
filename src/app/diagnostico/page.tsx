import type { Metadata } from "next";

import { DecisionLog } from "@/components/diagnosis/DecisionLog";
import { LeanCanvasSection } from "@/components/diagnosis/LeanCanvasSection";
import { ProcessFlow } from "@/components/diagnosis/ProcessFlow";
import { VsmAnalysis } from "@/components/diagnosis/VsmAnalysis";
import { VsmSection } from "@/components/diagnosis/VsmSection";
import { PageBanner } from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Diagnóstico | DestapFlex",
  description:
    "Fabricación, VSM, Lean Canvas y decisiones detrás de DestapFlex.",
};

export default function DiagnosticoPage() {
  return (
    <>
      <PageBanner
        eyebrow="Diagnóstico"
        title="Estado actual del producto y del proceso"
        description="VSM, análisis de hallazgos, Lean Canvas y bitácora de decisiones del proceso."
      />
      <VsmSection />
      <ProcessFlow />
      <VsmAnalysis />
      <LeanCanvasSection />
      <DecisionLog />
    </>
  );
}
