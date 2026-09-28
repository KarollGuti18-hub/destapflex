import {
  searchStrategy,
  watchAreas,
  watchConclusion,
  watchRelation,
} from "@/data/validation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WatchSection() {
  return (
    <section
      id="vigilancia"
      className="section-pad scroll-mt-32 border-y border-[var(--color-line)] bg-white"
    >
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="02 · Vigilancia tecnológica y comercial"
            title="Tres áreas, las mismas de las matrices"
            description="Cada área responde una decisión del proyecto: qué proteger, qué funciones ofrecer y a qué nicho entrar."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {watchRelation.map((item) => (
            <Reveal key={item.area}>
              <article className="h-full rounded-2xl bg-navy-950 p-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
                  {item.area}
                </p>
                <p className="prose-body mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-line)]">
            <table className="min-w-[880px] w-full text-left text-sm">
              <caption className="sr-only">
                Áreas de vigilancia, factores críticos, fuentes y ecuaciones
              </caption>
              <thead className="bg-navy-50 text-navy-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Decisión
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Área
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Factor crítico
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Fuente
                  </th>
                </tr>
              </thead>
              <tbody>
                {watchAreas.map((area) => (
                  <tr key={area.area} className="border-t border-[var(--color-line)] align-top">
                    <th scope="row" className="px-4 py-4 font-medium text-navy-950">
                      {area.decision}
                      <span className="mt-1 block font-normal text-ink-muted">{area.need}</span>
                    </th>
                    <td className="px-4 py-4 font-semibold text-navy-800">{area.area}</td>
                    <td className="px-4 py-4 text-ink-muted">{area.factor}</td>
                    <td className="px-4 py-4 text-ink-soft">{area.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="prose-body text-sm leading-relaxed text-ink-muted">{watchConclusion}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function SearchSection() {
  const blocks = [
    { title: "Palabras clave", text: searchStrategy.keywords },
    { title: "Operadores", text: searchStrategy.operators },
    { title: "Bases de datos", text: searchStrategy.databases },
    { title: "Idiomas", text: searchStrategy.languages },
  ];

  return (
    <section id="busqueda" className="section-pad scroll-mt-32">
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="03 · Estrategias de búsqueda"
            title="Qué se buscó y por qué en inglés"
            description={searchStrategy.justification}
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl bg-navy-950 p-6 text-white sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
              Ecuación principal · Google Patents
            </p>
            <p className="mt-4 font-mono text-sm leading-relaxed text-white/90 sm:text-base">
              {watchAreas[0].query}
            </p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
              Ecuaciones de apoyo
            </p>
            <p className="mt-3 text-sm text-white/75">Producto: {watchAreas[1].query}</p>
            <p className="mt-2 text-sm text-white/75">Mercado: {watchAreas[2].query}</p>
            <p className="prose-body mt-4 text-sm leading-relaxed text-white/60">
              {searchStrategy.support}
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {blocks.map((block) => (
            <Reveal key={block.title}>
              <article className="h-full rounded-2xl border border-[var(--color-line)] bg-white p-5">
                <h3 className="font-display text-lg font-semibold text-navy-950">{block.title}</h3>
                <p className="prose-body mt-2 text-sm leading-relaxed text-ink-muted">{block.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
