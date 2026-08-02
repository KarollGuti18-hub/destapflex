import { decisionLog } from "@/data/process";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function DecisionLog() {
  return (
    <section id="bitacora" className="px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Bitácora de decisiones"
            title="Registro de decisiones del proceso"
            description="Línea de tiempo y tabla con las decisiones tomadas en las primeras semanas."
          />
        </Reveal>

        <Reveal className="mt-10">
          <ol className="relative space-y-6 border-l-2 border-[var(--color-line)] pl-6">
            {decisionLog.map((entry, index) => (
              <li key={entry.week} className="relative">
                <span
                  className="absolute -left-[1.95rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-800 text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    {entry.week}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">
                    {entry.decision}
                  </h3>
                  <p className="prose-body mt-2 text-sm leading-relaxed text-ink-muted">
                    {entry.justification}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-10">
          <div className="overflow-x-auto  border border-[var(--color-line)] bg-white ">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">
                Bitácora de decisiones por semana
              </caption>
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Fecha
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Decisión tomada
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Justificación
                  </th>
                </tr>
              </thead>
              <tbody>
                {decisionLog.map((entry) => (
                  <tr key={entry.week} className="border-t border-[var(--color-line)] align-top">
                    <td className="px-4 py-4 font-medium text-ink">
                      {entry.dateLabel}
                    </td>
                    <td className="px-4 py-4 text-ink-muted">{entry.decision}</td>
                    <td className="px-4 py-4 text-ink-muted">{entry.justification}</td>
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
