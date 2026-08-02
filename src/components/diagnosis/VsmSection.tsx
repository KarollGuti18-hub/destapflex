import { assets } from "@/data/assets";
import {
  valueAddedMinutes,
  vsmIndicators,
  waitMinutes,
} from "@/data/process";
import { vsmObjective } from "@/data/project";
import { Card } from "@/components/ui/Card";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function VsmSection() {
  const total = valueAddedMinutes + waitMinutes;
  const valuePct = (valueAddedMinutes / total) * 100;
  const waitPct = (waitMinutes / total) * 100;

  return (
    <section id="vsm" className="px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Value Stream Mapping"
            title="Mapa de la cadena de valor"
            description={vsmObjective}
          />
        </Reveal>

        <Reveal className="mt-10">
          <ImageLightbox
            src={assets.vsm.publicPath}
            alt={assets.vsm.alt}
            width={1366}
            height={768}
            caption="Imagen original del VSM de DestapFlex"
            sizes="(max-width: 768px) 100vw, 1000px"
            priority
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vsmIndicators.map((indicator) => (
            <Reveal key={indicator.label}>
              <Card className="h-full text-center !py-8">
                <p className="text-3xl font-semibold tracking-tight text-ink">
                  {indicator.value}
                </p>
                <p className="mt-2 text-sm text-ink-muted">{indicator.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Card>
            <h3 className="text-xl font-semibold text-ink">
              Comparación visual: valor agregado vs. espera
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              {valueAddedMinutes} minutos con valor agregado frente a {waitMinutes}{" "}
              minutos de espera.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-ink-soft">Valor agregado</span>
                  <span className="tabular-nums text-ink-muted">{valueAddedMinutes} min</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-steel-100">
                  <div
                    className="h-full rounded-full bg-navy-800"
                    style={{ width: `${valuePct}%` }}
                    role="img"
                    aria-label={`${valueAddedMinutes} minutos de valor agregado`}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-ink-muted">Espera</span>
                  <span className="tabular-nums text-ink-muted">{waitMinutes} min</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-steel-100">
                  <div
                    className="h-full rounded-full bg-amber-500"
                    style={{ width: `${waitPct}%` }}
                    role="img"
                    aria-label={`${waitMinutes} minutos de espera`}
                  />
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
