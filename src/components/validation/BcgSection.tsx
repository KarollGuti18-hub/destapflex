"use client";

import { useState } from "react";

import { assets } from "@/data/assets";
import {
  bcgReading,
  breakEven,
  breakEvenSeries,
  competitors,
  destapFlexBcg,
  formatCompact,
  marketGrowth,
} from "@/data/validation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const width = 760;
const height = 420;
const pad = { l: 52, r: 24, t: 28, b: 46 };
const minShare = 0.0002;
const maxShare = 2.2;
const maxGrowth = 0.16;

function xShare(share: number) {
  const t =
    (Math.log10(share) - Math.log10(minShare)) / (Math.log10(maxShare) - Math.log10(minShare));
  return pad.l + Math.min(1, Math.max(0, t)) * (width - pad.l - pad.r);
}

function yGrowth(growth: number) {
  return pad.t + ((maxGrowth - growth) / maxGrowth) * (height - pad.t - pad.b);
}

const peWidth = 760;
const peHeight = 420;
const pePad = { l: 78, r: 28, t: 36, b: 52 };
const peMaxUnits = 500;
const peMaxCop = 25000000;

function peX(units: number) {
  return pePad.l + (units / peMaxUnits) * (peWidth - pePad.l - pePad.r);
}

function peY(cop: number) {
  return pePad.t + ((peMaxCop - cop) / peMaxCop) * (peHeight - pePad.t - pePad.b);
}

function pePath(key: "income" | "cost") {
  return breakEvenSeries
    .map((point, index) => `${index === 0 ? "M" : "L"} ${peX(point.units)} ${peY(point[key])}`)
    .join(" ");
}

const peFixed = breakEvenSeries[0].cost;
const pePrice = breakEvenSeries[1].income / breakEvenSeries[1].units;
const peVariable = (breakEvenSeries[1].cost - peFixed) / breakEvenSeries[1].units;
const peEquilibrium = 209;

function incomeAt(units: number) {
  return units * pePrice;
}

function costAt(units: number) {
  return peFixed + units * peVariable;
}

function formatCop(value: number) {
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
}

const brandLogos: Record<string, string> = {
  oxo: "/assets/bcg/oxo.png",
  whirlpool: "/assets/bcg/whirlpool.png",
  seb: "/assets/bcg/seb.png",
  newell: "/assets/bcg/newell.png",
  conair: "/assets/bcg/conair.png",
  spectrum: "/assets/bcg/spectrum.png",
  hamilton: "/assets/bcg/hamilton.png",
  lifetime: "/assets/bcg/lifetime.png",
  zwilling: "/assets/bcg/zwilling.png",
  fiskars: "/assets/bcg/fiskars.png",
  tramontina: "/assets/bcg/tramontina.png",
  kuhn: "/assets/bcg/kuhn.png",
  zyliss: "/assets/bcg/zyliss.png",
  "kitchen-mama": "/assets/bcg/kitchen-mama.png",
  etac: "/assets/bcg/etac.png",
};

const points = [
  ...competitors.map((item) => ({
    id: item.id,
    label: item.shortName,
    share: item.relativeShare,
    sales: item.categorySalesUsdM,
    quadrant: item.quadrant,
    growth: marketGrowth,
    logo: brandLogos[item.id],
  })),
  {
    id: "destapflex",
    label: "DestapFlex",
    share: destapFlexBcg.relativeShare,
    sales: destapFlexBcg.categorySalesUsdM,
    quadrant: "Perro" as const,
    growth: destapFlexBcg.growth,
    logo: assets.logo.publicPath,
  },
];

const quadrantLayout = [
  { name: "Interrogante", hint: "Crecimiento alto, participación baja" },
  { name: "Estrella", hint: "Crecimiento alto, participación alta" },
  { name: "Perro", hint: "Crecimiento bajo, participación baja" },
  { name: "Vaca", hint: "Crecimiento bajo, participación alta" },
] as const;

export function BcgSection() {
  const [activeId, setActiveId] = useState("destapflex");
  const [units, setUnits] = useState(peEquilibrium);
  const active = points.find((item) => item.id === activeId) ?? points[0];
  const income = incomeAt(units);
  const cost = costAt(units);
  const equilibriumLabel =
    units < peEquilibrium
      ? "Por debajo del equilibrio"
      : units > peEquilibrium
        ? "Por encima del equilibrio"
        : "En el equilibrio";
  const splitX = xShare(1);
  const splitY = yGrowth(0.1);

  return (
    <section id="bcg" className="section-pad scroll-mt-32">
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="07 · Matriz BCG"
            title="Un mercado maduro y una sola vaca"
            description="La participación se calcula con ventas estimadas de abridores, no con la facturación total de cada empresa. DestapFlex entra con su punto de equilibrio."
          />
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Precio", breakEven.price],
            ["Costo variable", breakEven.variable],
            ["Costos fijos", breakEven.fixed],
            ["Equilibrio", breakEven.units],
          ].map(([label, value]) => (
            <article key={label} className="rounded-2xl border border-[var(--color-line)] bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {label}
              </p>
              <p className="mt-2 text-lg font-semibold text-navy-950">{value}</p>
            </article>
          ))}
        </div>
        <p className="prose-body mt-4 text-sm leading-relaxed text-ink-muted">
          {breakEven.year} · {breakEven.usd}. {breakEven.note}
        </p>

        <figure className="mt-8 rounded-2xl border border-[var(--color-line)] bg-white p-4 sm:p-6">
          <figcaption className="text-center font-display text-lg font-semibold text-navy-950 sm:text-xl">
            Punto de equilibrio Destaflex (unidades por mes)
          </figcaption>
          <svg
            viewBox={`0 0 ${peWidth} ${peHeight}`}
            role="img"
            aria-label={`Punto de equilibrio Destaflex a ${units} unidades por mes. Ingresos ${formatCop(income)}, costos totales ${formatCop(cost)}. ${equilibriumLabel}, 209 unidades.`}
            className="mt-2 h-auto w-full"
          >
            {[0, 5000000, 10000000, 15000000, 20000000, 25000000].map((cop) => (
              <g key={cop}>
                <line
                  x1={pePad.l}
                  x2={peWidth - pePad.r}
                  y1={peY(cop)}
                  y2={peY(cop)}
                  stroke="#e6e8eb"
                />
                <text
                  x={pePad.l - 8}
                  y={peY(cop) + 4}
                  textAnchor="end"
                  fontSize="12"
                  fill="#5c6773"
                >
                  {cop === 0 ? "0" : `${cop / 1000000} mill.`}
                </text>
              </g>
            ))}
            {[0, 100, 200, 300, 400, 500].map((units) => (
              <text
                key={units}
                x={peX(units)}
                y={peHeight - 28}
                textAnchor="middle"
                fontSize="12"
                fill="#5c6773"
              >
                {units}
              </text>
            ))}
            <line
              x1={peX(209)}
              x2={peX(209)}
              y1={pePad.t}
              y2={peHeight - pePad.b}
              stroke="#878787"
              strokeDasharray="4 4"
            />
            <text x={peX(209) + 6} y={pePad.t + 14} fontSize="12" fill="#12304a">
              209
            </text>
            <path d={pePath("income")} fill="none" stroke="#70AD47" strokeWidth="2.5" />
            <path d={pePath("cost")} fill="none" stroke="#C00000" strokeWidth="2.5" />
            {units !== peEquilibrium ? (
              <line
                x1={peX(units)}
                x2={peX(units)}
                y1={pePad.t}
                y2={peHeight - pePad.b}
                stroke="#12304a"
              />
            ) : null}
            <circle cx={peX(units)} cy={peY(income)} r="5" fill="#70AD47" stroke="#fff" strokeWidth="1.5" />
            <circle cx={peX(units)} cy={peY(cost)} r="5" fill="#C00000" stroke="#fff" strokeWidth="1.5" />
            <text
              x={peWidth / 2}
              y={peHeight - 8}
              textAnchor="middle"
              fontSize="13"
              fill="#12304a"
            >
              Unidades/mes
            </text>
            <text
              x={16}
              y={peHeight / 2}
              fontSize="13"
              fill="#12304a"
              transform={`rotate(-90 16 ${peHeight / 2})`}
            >
              COP
            </text>
          </svg>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-navy-900">
            <li className="flex items-center gap-2">
              <span className="h-1 w-6 rounded-full bg-[#70AD47]" />
              Ingresos (COP)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-6 rounded-full bg-[#C00000]" />
              Costos totales (COP)
            </li>
          </ul>
          <div className="mt-5 border-t border-[var(--color-line)] pt-4">
            <label htmlFor="unidades-equilibrio" className="text-sm font-semibold text-navy-950">
              Unidades por mes: {units}
            </label>
            <input
              id="unidades-equilibrio"
              type="range"
              min={0}
              max={500}
              step={1}
              value={units}
              onChange={(event) => setUnits(Number(event.target.value))}
              className="mt-2 w-full accent-amber-500"
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-3" aria-live="polite">
              <p className="rounded-xl bg-[#f4f8f1] px-3 py-3 text-sm">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Ingresos
                </span>
                <span className="mt-1 block font-semibold text-navy-950">{formatCop(income)}</span>
              </p>
              <p className="rounded-xl bg-[#fdf4f4] px-3 py-3 text-sm">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Costos totales
                </span>
                <span className="mt-1 block font-semibold text-navy-950">{formatCop(cost)}</span>
              </p>
              <p className="rounded-xl bg-navy-50 px-3 py-3 text-sm">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Frente a 209
                </span>
                <span className="mt-1 block font-semibold text-navy-950">{equilibriumLabel}</span>
              </p>
            </div>
          </div>
        </figure>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white p-3">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label="Matriz BCG: participación relativa frente al crecimiento del mercado de abridores"
            className="h-auto w-full"
          >
            <rect x={pad.l} y={pad.t} width={splitX - pad.l} height={splitY - pad.t} fill="#eef4f9" />
            <rect
              x={splitX}
              y={pad.t}
              width={width - pad.r - splitX}
              height={splitY - pad.t}
              fill="#fff4e4"
            />
            <rect
              x={pad.l}
              y={splitY}
              width={splitX - pad.l}
              height={height - pad.b - splitY}
              fill="#f4f6f8"
            />
            <rect
              x={splitX}
              y={splitY}
              width={width - pad.r - splitX}
              height={height - pad.b - splitY}
              fill="#fff8ef"
            />
            <text x={pad.l + 12} y={pad.t + 22} fontSize="12" fill="#2a5f86">
              Interrogante
            </text>
            <text x={splitX + 12} y={pad.t + 22} fontSize="12" fill="#c96f12">
              Estrella
            </text>
            <text x={pad.l + 12} y={height - pad.b - 14} fontSize="12" fill="#5c6773">
              Perro
            </text>
            <text x={splitX + 12} y={height - pad.b - 14} fontSize="12" fill="#c96f12">
              Vaca
            </text>
            <line x1={splitX} x2={splitX} y1={pad.t} y2={height - pad.b} stroke="#12304a" strokeDasharray="4 4" />
            <line x1={pad.l} x2={width - pad.r} y1={splitY} y2={splitY} stroke="#12304a" strokeDasharray="4 4" />
            <text x={width / 2} y={height - 8} textAnchor="middle" fontSize="12" fill="#12304a">
              Participación relativa (escala logarítmica)
            </text>
            <text
              x={16}
              y={height / 2}
              fontSize="12"
              fill="#12304a"
              transform={`rotate(-90 16 ${height / 2})`}
            >
              Crecimiento
            </text>
            {points.map((point) => {
              const selected = point.id === activeId;
              const radius = point.id === "destapflex" ? 8 : 6 + Math.min(8, Math.log10(point.sales + 1) * 3);
              return (
                <g key={point.id}>
                  <circle
                    cx={xShare(point.share)}
                    cy={yGrowth(point.growth)}
                    r={selected ? radius + 3 : radius}
                    fill={point.id === "destapflex" || point.quadrant === "Vaca" ? "#e8891c" : "#12304a"}
                    opacity={selected ? 1 : 0.85}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {quadrantLayout.map((quadrant) => {
            return (
              <section
                key={quadrant.name}
                className="rounded-2xl border border-[var(--color-line)] bg-white p-4"
              >
                <h3 className="font-display text-lg font-semibold text-navy-950">{quadrant.name}</h3>
                <p className="mt-1 text-xs text-ink-muted">{quadrant.hint}</p>
                {points.some((point) => point.quadrant === quadrant.name) ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {points
                      .filter((point) => point.quadrant === quadrant.name)
                      .map((point) => (
                        <li key={point.id}>
                          <button
                            type="button"
                            aria-pressed={point.id === activeId}
                            onClick={() => setActiveId(point.id)}
                            className={`flex h-16 min-w-28 items-center justify-center rounded-xl border bg-white px-2 ${
                              point.id === activeId
                                ? "border-[#70AD47] ring-2 ring-[#70AD47]"
                                : "border-[var(--color-line)]"
                            }`}
                          >
                            {point.logo ? (
                              <img
                                src={point.logo}
                                alt={point.label}
                                className="max-h-12 max-w-28 object-contain"
                              />
                            ) : (
                              <span className="px-2 text-sm font-semibold text-navy-950">{point.label}</span>
                            )}
                          </button>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-ink-muted">Ninguna de las 15 marcas.</p>
                )}
              </section>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Empresas en la matriz BCG">
          {points.map((point) => (
            <button
              key={point.id}
              type="button"
              aria-pressed={point.id === activeId}
              onClick={() => setActiveId(point.id)}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
                point.id === activeId ? "bg-navy-900 text-white" : "bg-white text-navy-800 ring-1 ring-[var(--color-line)]"
              }`}
            >
              {point.logo ? (
                <img
                  src={point.logo}
                  alt=""
                  className="h-5 w-8 object-contain"
                />
              ) : null}
              {point.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-navy-900">
          <span className="font-semibold">{active.label}</span>
          {" · "}
          {active.quadrant}
          {" · ventas estimadas en abridores US$ "}
          {formatCompact(active.sales)} millones
          {" · participación relativa "}
          {active.share.toLocaleString("es-CO", { maximumFractionDigits: 4 })}
        </p>

        <p className="prose-body mt-4 text-sm leading-relaxed text-ink-muted">{bcgReading}</p>
      </div>
    </section>
  );
}
