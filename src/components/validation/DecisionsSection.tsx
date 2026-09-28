import { closingPoints, decisions, nextCut } from "@/data/validation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function DecisionsSection() {
  return (
    <section
      id="decisiones"
      className="section-pad scroll-mt-32 border-t border-[var(--color-line)] bg-white"
    >
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="08 · Decisiones de innovación"
            title="El punto de partida del tercer corte"
            description="Área de enfoque: Producto, con apoyo de Tecnología. Cada decisión sale de un hallazgo de la vigilancia."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-line)]">
            <table className="min-w-[860px] w-full text-left text-sm">
              <caption className="sr-only">
                Hallazgos, evidencia, decisión y justificación para el tercer corte
              </caption>
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Hallazgo</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Evidencia</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Decisión</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Justificación</th>
                </tr>
              </thead>
              <tbody>
                {decisions.map((item) => (
                  <tr key={item.decision} className="border-t border-[var(--color-line)] align-top">
                    <td className="px-4 py-4 text-navy-950">{item.finding}</td>
                    <td className="px-4 py-4 text-ink-muted">{item.evidence}</td>
                    <td className="px-4 py-4 font-medium text-navy-900">{item.decision}</td>
                    <td className="px-4 py-4 text-ink-muted">{item.justification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {closingPoints.map((item) => (
            <article key={item.title} className="rounded-2xl bg-navy-950 p-6 text-white">
              <h3 className="font-display text-lg font-semibold text-amber-400">{item.title}</h3>
              <p className="prose-body mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
            </article>
          ))}
        </div>

        <p className="prose-body mt-6 text-sm leading-relaxed text-ink-muted">{nextCut}</p>
      </div>
    </section>
  );
}
