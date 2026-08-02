"use client";

import { useState } from "react";

import { processStages } from "@/data/process";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProcessFlow() {
  const [activeId, setActiveId] = useState(processStages[0].id);
  const active = processStages.find((stage) => stage.id === activeId) ?? processStages[0];

  return (
    <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-12 border-y border-[var(--color-line)] bg-white/70">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Flujo del proceso"
            title="Etapas de fabricación"
            description="Selecciona cada etapa para revisar tiempos de ciclo, espera y descripción."
          />
        </Reveal>

        <div className="mt-10">
          <ol className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
            {processStages.map((stage, index) => {
              const selected = stage.id === activeId;
              return (
                <li key={stage.id} className="flex flex-1 md:flex-col">
                  <button
                    type="button"
                    onClick={() => setActiveId(stage.id)}
                    aria-pressed={selected}
                    className={`relative w-full  border px-4 py-5 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${
                      selected
                        ? "border-navy-900 bg-navy-900 text-white "
                        : stage.highlightWait
                          ? "border-amber-400/80 bg-amber-100 text-ink"
                          : "border-[var(--color-line)] bg-[#f4f6f8] text-ink hover:border-navy-300"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] opacity-80">
                      Etapa {stage.order}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-snug">
                      {stage.name}
                    </span>
                    {stage.highlightWait ? (
                      <span
                        className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                          selected ? "bg-white/15 text-white" : "bg-amber-500 text-navy-950"
                        }`}
                      >
                        Mayor espera
                      </span>
                    ) : null}
                  </button>
                  {index < processStages.length - 1 ? (
                    <div
                      className="mx-auto hidden h-full w-px bg-steel-200 md:my-0 md:block md:h-px md:w-full md:self-center"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>

          <Card className="mt-6" as="article">
            <h3 className="text-xl font-semibold text-ink">
              {active.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {active.description}
            </p>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-navy-50 px-4 py-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-navy-700">
                  Tiempo de ciclo
                </dt>
                <dd className="mt-1 text-lg font-semibold text-navy-950">
                  {active.cycleTimeMin} min
                </dd>
              </div>
              <div
                className={`rounded-xl px-4 py-3 ${
                  active.highlightWait ? "bg-amber-100" : "bg-steel-50"
                }`}
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-steel-500">
                  Tiempo de espera
                </dt>
                <dd className="mt-1 text-lg font-semibold text-navy-950">
                  {active.waitTimeMin} min
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </div>
    </section>
  );
}
