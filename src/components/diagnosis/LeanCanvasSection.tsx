import { assets } from "@/data/assets";
import { leanCanvasObjective, leanCanvasSummary } from "@/data/project";
import { Card } from "@/components/ui/Card";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function LeanCanvasSection() {
  return (
    <section id="lean-canvas" className="px-5 py-16 sm:px-8 md:py-24 lg:px-12 border-y border-[var(--color-line)] bg-white/70">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Lean Canvas"
            title="Modelo de negocio actual"
            description={leanCanvasObjective}
          />
        </Reveal>

        <Reveal className="mt-10">
          <ImageLightbox
            src={assets.leanCanvas.publicPath}
            alt={assets.leanCanvas.alt}
            width={1536}
            height={1024}
            caption="Imagen original del Lean Canvas de DestapFlex"
            sizes="(max-width: 768px) 100vw, 1000px"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal>
            <Card as="article" className="h-full">
              <h3 className="text-lg font-semibold text-ink">
                Problema principal
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {leanCanvasSummary.problem}
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.04}>
            <Card as="article" className="h-full">
              <h3 className="text-lg font-semibold text-ink">
                Segmento atractivo
              </h3>
              <ul className="mt-3 space-y-2">
                {leanCanvasSummary.segments.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card as="article" className="h-full">
              <h3 className="text-lg font-semibold text-ink">
                Propuesta de valor
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {leanCanvasSummary.valueProposition}
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <Card as="article" className="h-full">
              <h3 className="text-lg font-semibold text-ink">
                Riesgos
              </h3>
              <ul className="mt-3 space-y-2">
                {leanCanvasSummary.risks.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.16}>
            <Card as="article">
              <h3 className="text-lg font-semibold text-ink">
                Elementos que se validarán
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {leanCanvasSummary.toValidate.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
