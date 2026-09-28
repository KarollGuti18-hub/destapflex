import {
  marketConclusion,
  marketHighlights,
  marketSizes,
  patentFigures,
  patentReading,
  patents,
} from "@/data/validation";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FindingsSection() {
  return (
    <section
      id="resultados"
      className="section-pad scroll-mt-32 border-y border-[var(--color-line)] bg-white"
    >
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="04 · Resultados de vigilancia"
            title="Patentes, competidores y el hueco que queda"
            description={patentReading}
          />
        </Reveal>

        <ul className="mt-8 grid gap-4">
          {patents.map((patent) => (
            <li key={patent.id}>
              <article className="rounded-2xl border border-[var(--color-line)] p-5">
                <div className="grid gap-5 lg:grid-cols-[minmax(0,16rem)_1fr] lg:items-start">
                  <div className="flex flex-col gap-3">
                    {(patentFigures[patent.id] ?? []).map((figure, index) => (
                      <ImageLightbox
                        key={figure.src}
                        src={figure.src}
                        alt={
                          (patentFigures[patent.id]?.length ?? 0) > 1
                            ? `Figura ${index + 1} de ${patent.code}`
                            : `Figura de ${patent.code}`
                        }
                        width={figure.width}
                        height={figure.height}
                        className="w-full"
                        imageClassName="mx-auto h-auto max-h-80 w-full object-contain"
                        sizes="(max-width: 1024px) 100vw, 256px"
                      />
                    ))}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-950">{patent.code}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{patent.inventors}</p>
                    <p className="mt-3 text-sm font-medium text-navy-900">{patent.context}</p>
                    <p className="prose-body mt-2 text-sm leading-relaxed text-ink-muted">
                      {patent.description}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      <span className="font-semibold text-navy-900">Aporta: </span>
                      {patent.addedValue}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      <span className="font-semibold text-navy-900">Límite: </span>
                      {patent.drawback}
                    </p>
                    <a
                      href={patent.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-amber-600 underline-offset-4 hover:underline"
                    >
                      Ver en Google Patents
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <h3 className="font-display text-2xl font-semibold text-navy-950">Mercado</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {marketHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[#f7f4ef] p-5"
              >
                <h4 className="font-display text-lg font-semibold text-navy-950">{item.title}</h4>
                <p className="prose-body mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketSizes.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[var(--color-line)] bg-white p-5 transition hover:border-navy-800"
              >
                <p className="text-sm font-medium text-ink-muted">{item.name}</p>
                <p className="font-display mt-2 text-2xl font-semibold text-navy-950">{item.value}</p>
                <p className="mt-1 text-sm text-amber-600">{item.growth}</p>
              </a>
            ))}
          </div>

          <p className="prose-body mt-6 text-sm leading-relaxed text-ink-muted">{marketConclusion}</p>
        </div>
      </div>
    </section>
  );
}
