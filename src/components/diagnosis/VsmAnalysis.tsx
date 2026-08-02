import { nextCutDecisions, vsmFindings } from "@/data/project";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function VsmAnalysis() {
  return (
    <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Análisis del VSM"
            title="Hallazgos y decisiones del siguiente corte"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {vsmFindings.map((finding, index) => (
            <Reveal key={finding} delay={index * 0.05}>
              <Card as="article" className="h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Hallazgo {index + 1}
                </p>
                <p className="prose-body mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {finding}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Card>
            <h3 className="text-xl font-semibold text-ink">
              Decisiones para el siguiente corte
            </h3>
            <ul className="mt-4 space-y-3">
              {nextCutDecisions.map((decision) => (
                <li key={decision} className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                  <span className="prose-body min-w-0 flex-1">{decision}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
