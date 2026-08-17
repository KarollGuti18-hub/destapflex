import { bitacoraCierre } from "@/data/research";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BitacoraSection() {
  return (
    <section id="bitacora" className="section-pad bg-white/50">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            title="Bitácora"
            description={bitacoraCierre.description}
          />
        </Reveal>

        <div className="mt-10 space-y-4">
          {bitacoraCierre.decisions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-card sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy-950">
                  {item.title}
                </h3>
                <p className="prose-body mt-3 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Estado del portafolio al cierre del primer corte</caption>
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Área
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {bitacoraCierre.status.map((row) => (
                  <tr key={row.area} className="border-t border-[var(--color-line)]">
                    <th scope="row" className="px-4 py-4 font-semibold text-navy-950">
                      {row.area}
                    </th>
                    <td className="px-4 py-4 text-ink-muted">{row.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
