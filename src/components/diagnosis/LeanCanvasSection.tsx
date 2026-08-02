import { leanCanvasObjective, leanCanvasSummary } from "@/data/project";
import { LeanCanvasBoard } from "@/components/diagnosis/LeanCanvasBoard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function LeanCanvasSection() {
  return (
    <section
      id="lean-canvas"
      className="border-y border-[var(--color-line)] bg-[#fff9f4] px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Lean Canvas"
            title="Modelo de negocio actual"
            description={leanCanvasObjective}
          />
        </Reveal>

        <Reveal className="mt-10">
          <LeanCanvasBoard />
        </Reveal>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
          <Reveal delay={0.04}>
            <article className="h-full bg-white p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-navy-950">Riesgos</h3>
              <ul className="mt-4 space-y-2.5">
                {leanCanvasSummary.risks.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-ink-muted">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full bg-white p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-navy-950">
                Elementos que se validarán
              </h3>
              <ul className="mt-4 space-y-2.5">
                {leanCanvasSummary.toValidate.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-ink-muted">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy-700"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
