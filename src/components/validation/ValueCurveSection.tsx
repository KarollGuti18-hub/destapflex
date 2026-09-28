"use client";

import { useState } from "react";

import { competitors, curveConclusion, errc } from "@/data/validation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const factors = ["Tecnología", "Producto", "Mercado"];
const width = 760;
const height = 420;
const pad = { l: 78, r: 64, t: 36, b: 64 };

const curveOrder = [
  "oxo",
  "whirlpool",
  "seb",
  "newell",
  "conair",
  "spectrum",
  "hamilton",
  "lifetime",
  "zwilling",
  "fiskars",
  "tramontina",
  "kuhn",
  "zyliss",
  "kitchen-mama",
  "etac",
] as const;

const curveColors = [
  "#70ad47",
  "#5b9bd5",
  "#ffc000",
  "#7f7f7f",
  "#9dc3e6",
  "#ed7d31",
  "#a6a6a6",
  "#c65911",
  "#1f4e79",
  "#548235",
  "#375623",
  "#e66c9a",
  "#5bbed6",
  "#7030a0",
  "#0d7377",
];

const curveNames: Record<(typeof curveOrder)[number], string> = {
  oxo: "OXO",
  whirlpool: "Whirlpool",
  seb: "Groupe SEB",
  newell: "Newell",
  conair: "Conair",
  spectrum: "Spectrum",
  hamilton: "Hamilton Beach",
  lifetime: "Lifetime",
  zwilling: "Zwilling",
  fiskars: "Fiskars",
  tramontina: "Tramontina",
  kuhn: "Kuhn Rikon",
  zyliss: "Zyliss",
  "kitchen-mama": "Kitchen Mama",
  etac: "Etac",
};

const valueLines = curveOrder.map((id, index) => {
  const company = competitors.find((item) => item.id === id);
  return {
    id,
    name: curveNames[id],
    color: curveColors[index],
    scores: [company?.technology ?? 0, company?.product ?? 0, company?.market ?? 0] as [
      number,
      number,
      number,
    ],
  };
});

function xAt(index: number) {
  return pad.l + (index * (width - pad.l - pad.r)) / (factors.length - 1);
}

function yAt(score: number) {
  return pad.t + ((4 - score) / 4) * (height - pad.t - pad.b);
}

export function ValueCurveSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = valueLines.find((series) => series.id === selectedId) ?? null;
  const ordered = selected
    ? [...valueLines.filter((series) => series.id !== selected.id), selected]
    : valueLines;

  return (
    <section
      id="curva"
      className="section-pad scroll-mt-32 border-y border-[var(--color-line)] bg-white"
    >
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="06 · Curva de valor"
            title="Donde los grandes se caen"
            description="Tecnología se parece en casi todas las marcas. La diferencia está en Mercado y, sobre todo, en Producto."
          />
        </Reveal>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-3 sm:p-5">
          <h3 className="text-center text-sm font-semibold text-navy-950 sm:text-base">
            Curva de valor (Tecnología, Producto, Mercado)
          </h3>
          <div className="mt-4 grid items-center gap-4 lg:grid-cols-[1fr_11rem]">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              role="img"
              aria-label={
                selected
                  ? `Curva de valor de ${selected.name}: Tecnología ${selected.scores[0]}, Producto ${selected.scores[1]}, Mercado ${selected.scores[2]}`
                  : "Curva de valor de las 15 marcas en tecnología, producto y mercado"
              }
              className="h-auto w-full"
            >
              {[0, 1, 2, 3, 4].map((score) => (
                <g key={score}>
                  <line
                    x1={pad.l}
                    x2={width - pad.r}
                    y1={yAt(score)}
                    y2={yAt(score)}
                    stroke="rgba(16,24,32,0.12)"
                  />
                  <text x={pad.l - 12} y={yAt(score) + 4} textAnchor="end" fontSize="13" fill="#5c6773">
                    {score}
                  </text>
                </g>
              ))}
              <text
                x={18}
                y={height / 2}
                fontSize="13"
                fill="#12304a"
                textAnchor="middle"
                transform={`rotate(-90 18 ${height / 2})`}
              >
                Ranking (1-4)
              </text>
              {factors.map((factor, index) => (
                <text
                  key={factor}
                  x={xAt(index)}
                  y={height - 16}
                  textAnchor="middle"
                  fontSize="15"
                  fontWeight="600"
                  fill="#12304a"
                >
                  {factor}
                </text>
              ))}
              {ordered.map((series) => {
                const active = selected?.id === series.id;
                const dimmed = selected !== null && !active;
                return (
                  <g key={series.id} opacity={dimmed ? 0.12 : 1}>
                    <polyline
                      fill="none"
                      stroke={series.color}
                      strokeWidth={active ? 3.5 : 2.5}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      points={series.scores.map((score, index) => `${xAt(index)},${yAt(score)}`).join(" ")}
                    />
                    {series.scores.map((score, index) => (
                      <circle
                        key={`${series.id}-${factors[index]}`}
                        cx={xAt(index)}
                        cy={yAt(score)}
                        r={active ? 6 : 4.5}
                        fill={series.color}
                        stroke="#fff"
                        strokeWidth="1.5"
                      />
                    ))}
                  </g>
                );
              })}
            </svg>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Elige una marca
              </p>
              <ul className="grid grid-cols-2 gap-1.5 lg:grid-cols-1" aria-label="Marcas de la curva">
                {valueLines.map((series) => {
                  const active = selected?.id === series.id;
                  return (
                    <li key={series.id}>
                      <button
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSelectedId(active ? null : series.id)}
                        className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs sm:text-sm ${
                          active ? "bg-navy-900 font-semibold text-white" : "text-navy-900 hover:bg-navy-50"
                        }`}
                      >
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: active ? "#fff" : series.color }}
                          aria-hidden="true"
                        />
                        {series.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {selected ? (
            <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-[var(--color-line)] pt-4 text-center">
              {factors.map((factor, index) => (
                <div key={factor}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    {factor}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-navy-950">
                    {selected.scores[index]}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-4 text-center text-sm text-ink-muted">
              Las 15 curvas del Excel. Elige una marca para dejar solo esa línea al frente.
            </p>
          )}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {errc.map((item) => (
            <article key={item.action} className="rounded-2xl bg-navy-950 p-5 text-white">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
                {item.action}
              </h3>
              <p className="prose-body mt-3 text-sm leading-relaxed text-white/80">{item.text}</p>
            </article>
          ))}
        </div>

        <p className="prose-body mt-6 text-sm leading-relaxed text-ink-muted">{curveConclusion}</p>
      </div>
    </section>
  );
}
