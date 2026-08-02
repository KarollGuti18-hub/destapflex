"use client";

import { useState } from "react";

import { ctsCategories } from "@/data/ctq";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CtsCtqExplorer() {
  const [activeId, setActiveId] = useState(ctsCategories[0].id);
  const active = ctsCategories.find((item) => item.id === activeId) ?? ctsCategories[0];

  return (
    <section className="section-pad bg-white/50">
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="CTS y CTQ"
            title="Parámetros críticos del producto"
            description="Selecciona una CTS para ver únicamente las CTQ relacionadas documentadas."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" aria-label="Características CTS">
          {ctsCategories.map((cts) => {
            const selected = cts.id === activeId;
            return (
              <button
                key={cts.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveId(cts.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${
                  selected
                    ? "bg-navy-900 text-white shadow-[0_8px_20px_rgba(18,48,74,0.18)]"
                    : "bg-white text-navy-800 ring-1 ring-[var(--color-line)] hover:bg-navy-50"
                }`}
              >
                {cts.name}
              </button>
            );
          })}
        </div>

        <div className="mt-10" aria-live="polite">
          <h3 className="font-display text-3xl font-semibold text-navy-950">
            {active.name}
          </h3>
          <div className="mt-6 space-y-4">
            {active.ctqs.map((ctq) => (
              <article
                key={ctq.id}
                className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-card sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h4 className="font-display text-lg font-semibold text-navy-950 sm:text-xl">
                    {ctq.name}
                  </h4>
                  {ctq.meta ? (
                    <span className="inline-flex shrink-0 rounded-md bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-600">
                      Meta: {ctq.meta}
                    </span>
                  ) : null}
                </div>
                <dl className="mt-5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    Variable de medición
                  </dt>
                  <dd className="mt-1.5 text-sm text-ink-soft">{ctq.measurementVariable}</dd>
                </dl>
                <p className="prose-body mt-4 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                  {ctq.importance}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
