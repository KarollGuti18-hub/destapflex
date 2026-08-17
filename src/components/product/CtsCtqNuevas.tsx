import { newCtsGroups, newCtsValueText } from "@/data/research";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CtsCtqNuevas() {
  return (
    <section id="cts-ctq-nuevas" className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            title="CTS y CTQ nuevas"
            description="Parámetros críticos actualizados a partir de la encuesta, el VSM, el Lean Canvas, la segmentación VALS y el Customer Journey Map."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
            <table className="min-w-[44rem] w-full text-left text-sm">
              <caption className="sr-only">Tabla de CTS y CTQ nuevas de DestapFlex</caption>
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    CTS
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    CTQ
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Variable de medición
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Meta
                  </th>
                </tr>
              </thead>
              <tbody>
                {newCtsGroups.map((group) =>
                  group.rows.map((row, index) => (
                    <tr
                      key={`${group.cts}-${row.ctq}`}
                      className="border-t border-[var(--color-line)] align-top"
                    >
                      {index === 0 ? (
                        <th
                          scope="row"
                          rowSpan={group.rows.length}
                          className="bg-navy-50 px-4 py-4 font-semibold text-navy-950"
                        >
                          {group.cts}
                        </th>
                      ) : null}
                      <td className="px-4 py-4 text-ink">{row.ctq}</td>
                      <td className="px-4 py-4 text-ink-muted">{row.measurement}</td>
                      <td className="px-4 py-4 font-medium text-navy-900">{row.meta}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <p className="prose-body text-sm leading-relaxed text-ink-muted sm:text-[15px]">
            {newCtsValueText}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
