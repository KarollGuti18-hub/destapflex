import type { Metadata } from "next";

import { BcgSection } from "@/components/validation/BcgSection";
import { DecisionsSection } from "@/components/validation/DecisionsSection";
import { ExcelWindow } from "@/components/validation/ExcelWindow";
import { FindingsSection } from "@/components/validation/FindingsSection";
import { MpcSection } from "@/components/validation/MpcSection";
import { ProtectionSection } from "@/components/validation/ProtectionSection";
import { ValidationNav } from "@/components/validation/ValidationNav";
import { ValueCurveSection } from "@/components/validation/ValueCurveSection";
import { SearchSection, WatchSection } from "@/components/validation/WatchSection";
import { PageBanner } from "@/components/ui/PageBanner";
import { centralQuestion } from "@/data/validation";

export const metadata: Metadata = {
  title: "DestapFlex",
  description:
    "Segundo Corte: Validación Estratégica de la Innovación de DestapFlex.",
};

export default function SegundoCortePage() {
  return (
    <>
      <PageBanner
        eyebrow="Segundo Corte"
        title="Validación Estratégica de la Innovación"
        description="Propiedad intelectual, vigilancia tecnológica y comercial, perfil competitivo, curva de valor y decisiones para el tercer corte."
      />
      <ValidationNav />
      <section className="border-b border-[var(--color-line)] bg-navy-950">
        <div className="container-wide px-5 py-10 sm:px-8 lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
            Pregunta central
          </p>
          <p className="font-display mt-3 max-w-3xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
            {centralQuestion}
          </p>
        </div>
      </section>
      <ExcelWindow />
      <ProtectionSection />
      <WatchSection />
      <SearchSection />
      <FindingsSection />
      <MpcSection />
      <ValueCurveSection />
      <BcgSection />
      <DecisionsSection />
    </>
  );
}
