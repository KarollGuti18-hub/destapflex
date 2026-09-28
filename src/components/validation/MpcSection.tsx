"use client";

import { useState } from "react";

import {
  competitors,
  destapFlexExpected,
  formatScore,
  mpcQuestions,
  mpcWeights,
} from "@/data/validation";
import { ExcelFrame } from "@/components/validation/ExcelWindow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function MpcSection() {
  const [activeId, setActiveId] = useState(competitors[0].id);
  const active = competitors.find((item) => item.id === activeId) ?? competitors[0];
  const ranked = [...competitors].sort((a, b) => a.rank - b.rank || b.total - a.total);

  return (
    <section id="mpc" className="section-pad scroll-mt-32">
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="05 · Matriz de perfil competitivo"
            title="Quince marcas, tres factores"
            description="Producto pesa más porque el cliente elige por función y ergonomía. Tecnología casi no separa a nadie."
          />
        </Reveal>

        <div className="mt-8" id="excel-matrices">
          <ExcelFrame workbookId="matrices" initialSheet="MPC" showSwitcher={false} />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {mpcWeights.map((item) => (
            <article key={item.factor} className="rounded-2xl bg-navy-950 p-6 text-white">
              <p className="font-display text-3xl font-semibold text-amber-400">{item.weight}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.factor}</h3>
              <p className="prose-body mt-2 text-sm leading-relaxed text-white/70">{item.reason}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Ranking ponderado
            </h3>
            <ul className="mt-4 space-y-2.5">
              {ranked.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={item.id === activeId}
                    className={`grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl px-2 py-1.5 text-left ${
                      item.id === activeId ? "bg-amber-100/80" : "hover:bg-white"
                    }`}
                  >
                    <span className="w-6 text-xs font-semibold text-ink-muted">{item.rank}</span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-950">{item.shortName}</span>
                      <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-navy-50">
                        <span
                          className="block h-full rounded-full bg-navy-800"
                          style={{ width: `${(item.total / 4) * 100}%` }}
                        />
                      </span>
                    </span>
                    <span className="text-sm font-semibold text-navy-900">{formatScore(item.total)}</span>
                  </button>
                </li>
              ))}
              <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-2 pt-2">
                <span className="w-6 text-xs font-semibold text-amber-600">5</span>
                <span>
                  <span className="block text-sm font-semibold text-navy-950">
                    {destapFlexExpected.label}
                  </span>
                  <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-amber-100">
                    <span
                      className="block h-full rounded-full bg-amber-500"
                      style={{ width: `${(destapFlexExpected.total / 4) * 100}%` }}
                    />
                  </span>
                </span>
                <span className="text-sm font-semibold text-amber-600">
                  {formatScore(destapFlexExpected.total)}
                </span>
              </li>
            </ul>
          </div>

          <article className="h-fit rounded-2xl border border-[var(--color-line)] bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
              Puesto {active.rank} · {active.country} · {active.size}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy-950">{active.name}</h3>
            <dl className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["Tecnología", active.technology],
                ["Producto", active.product],
                ["Mercado", active.market],
              ].map(([label, value]) => (
                <div key={String(label)} className="rounded-xl bg-navy-50 px-3 py-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                    {label}
                  </dt>
                  <dd className="mt-1 text-xl font-semibold text-navy-950">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              <span className="font-semibold text-navy-900">Fortaleza. </span>
              {active.strength}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              <span className="font-semibold text-navy-900">Debilidad. </span>
              {active.weakness}
            </p>
            <a
              href={active.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-amber-600 underline-offset-4 hover:underline"
            >
              Ver producto
            </a>
          </article>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {mpcQuestions.map((item) => (
            <article key={item.question} className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
              <h3 className="font-display text-lg font-semibold text-navy-950">{item.question}</h3>
              <p className="prose-body mt-2 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-ink-muted">
          Hoy DestapFlex entraría con una curva baja (≈1,65), por debajo de Kitchen Mama, porque es
          un prototipo semi casero sin ventas. La curva esperada llega a{" "}
          {formatScore(destapFlexExpected.total)}. {destapFlexExpected.note}
        </p>
        <p className="mt-3 text-xs text-ink-muted md:hidden">
          Desliza la tabla para ver todas las empresas.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
          <table className="min-w-[720px] w-full text-left text-sm">
            <caption className="sr-only">Calificaciones de la matriz de perfil competitivo</caption>
            <thead className="bg-navy-900 text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Empresa</th>
                <th scope="col" className="px-4 py-3 font-semibold">Tecnología</th>
                <th scope="col" className="px-4 py-3 font-semibold">Producto</th>
                <th scope="col" className="px-4 py-3 font-semibold">Mercado</th>
                <th scope="col" className="px-4 py-3 font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((item) => (
                <tr key={item.id} className="border-t border-[var(--color-line)]">
                  <th scope="row" className="px-4 py-3 font-medium text-navy-950">
                    {item.rank}. {item.shortName}
                  </th>
                  <td className="px-4 py-3">{item.technology}</td>
                  <td className="px-4 py-3">{item.product}</td>
                  <td className="px-4 py-3">{item.market}</td>
                  <td className="px-4 py-3 font-semibold">{formatScore(item.total)}</td>
                </tr>
              ))}
              <tr className="border-t border-amber-500/40 bg-amber-100/50">
                <th scope="row" className="px-4 py-3 font-medium text-navy-950">
                  DestapFlex esperado
                </th>
                <td className="px-4 py-3">{destapFlexExpected.technology}</td>
                <td className="px-4 py-3">{destapFlexExpected.product}</td>
                <td className="px-4 py-3">{destapFlexExpected.market}</td>
                <td className="px-4 py-3 font-semibold">{formatScore(destapFlexExpected.total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
