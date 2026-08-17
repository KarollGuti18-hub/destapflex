import { valsCharts, valsIntro, valsRows } from "@/data/research";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ValsSection() {
  return (
    <section id="vals" className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            title="VALS"
            description={valsIntro.description}
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <article className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-card">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                Instrumento
              </p>
              <p className="prose-body mt-2 text-sm leading-relaxed text-ink-muted">
                {valsIntro.instrument}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.04}>
            <article className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-card">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                Muestra
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{valsIntro.sample}</p>
            </article>
          </Reveal>
        </div>

        <ul className="mt-6 space-y-3">
          {valsIntro.highlights.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-snug text-ink-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" aria-hidden />
              <span className="prose-body min-w-0 flex-1">{item}</span>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10">
          <h3 className="font-display text-xl font-semibold text-navy-950 sm:text-2xl">
            Perfil VALS del usuario
          </h3>
          <p className="prose-body mt-2 max-w-3xl text-sm text-ink-muted">
            Relación entre cada categoría del modelo VALS, la pregunta formulada y la
            información obtenida en la encuesta.
          </p>
        </Reveal>

        <Reveal className="mt-6">
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
            <table className="min-w-[52rem] w-full text-left text-sm">
              <caption className="sr-only">Cuadro VALS de DestapFlex</caption>
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Categoría
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    ¿Qué quiero identificar?
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Pregunta para el usuario
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    ¿Qué información aporta?
                  </th>
                </tr>
              </thead>
              <tbody>
                {valsRows.map((row) => (
                  <tr key={row.category} className="border-t border-[var(--color-line)] align-top">
                    <th scope="row" className="px-4 py-4 font-semibold text-navy-950">
                      {row.category}
                    </th>
                    <td className="px-4 py-4 text-ink-muted">{row.identify}</td>
                    <td className="px-4 py-4 text-ink-muted">{row.question}</td>
                    <td className="prose-body px-4 py-4 text-ink-muted">{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <h3 className="font-display text-xl font-semibold text-navy-950 sm:text-2xl">
            Resultados gráficos de la encuesta
          </h3>
        </Reveal>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {valsCharts.map((chart) => (
            <ImageLightbox
              key={chart.src}
              src={chart.src}
              alt={chart.alt}
              width={chart.width}
              height={chart.height}
              caption={chart.caption}
              sizes="(max-width: 768px) 100vw, 560px"
            />
          ))}
        </div>

        <Reveal className="mt-10">
          <article className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-card sm:p-8">
            <h3 className="font-display text-lg font-semibold text-navy-950">Conclusión</h3>
            {valsIntro.conclusion.split("\n\n").map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="prose-body mt-4 text-sm leading-relaxed text-ink-muted sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </article>
        </Reveal>
      </div>
    </section>
  );
}
