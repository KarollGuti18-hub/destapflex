"use client";

import { useState } from "react";

import { DataTable } from "@/components/third-cut/DataTable";
import {
  breakEvenRows,
  cashFlow,
  financeContext,
  fixedCosts,
  formulaRows,
  investmentRows,
  laborRows,
  paybackRows,
  priceBlock,
  roiRows,
  salesForecast,
  scenarioHeaders,
  summaryRows,
  vanRows,
  variableCosts,
  yearOne,
} from "@/data/thirdCut";

const scenarios = [
  { id: "pesimista", label: "Pesimista", column: 1 },
  { id: "esperado", label: "Esperado", column: 2 },
  { id: "optimista", label: "Optimista", column: 3 },
] as const;

type ScenarioId = (typeof scenarios)[number]["id"];

function summaryValue(label: string, column: number) {
  return summaryRows.find((row) => row[0] === label)?.[column] ?? "";
}

export function ScenarioFinance() {
  const [activeId, setActiveId] = useState<ScenarioId>("esperado");
  const scenario = scenarios.find((item) => item.id === activeId) ?? scenarios[1];
  const equilibrium = breakEvenRows.find((row) => row[0] === scenario.label);
  const payback = paybackRows.find((row) => row[0] === scenario.label);
  const columnHeaders = [...scenarioHeaders.slice(1)];

  const facts = [
    {
      label: "Punto de equilibrio",
      value: `${summaryValue("Punto de equilibrio (unid./año)", scenario.column)} al año`,
      detail: equilibrium ? `${equilibrium[2]} al mes` : "",
    },
    {
      label: "Beneficio año 1",
      value: summaryValue("Beneficio año 1", scenario.column),
      detail: "",
    },
    {
      label: "Payback",
      value: payback?.[3] ?? "",
      detail: payback && payback[4] !== payback[3] ? payback[4] : "",
    },
    {
      label: "VAN",
      value: summaryValue("VAN", scenario.column),
      detail: "Tasa 15 %",
    },
    {
      label: "TIR",
      value: summaryValue("TIR", scenario.column),
      detail: "",
    },
  ];

  return (
    <div className="mt-8 space-y-10">
      <div>
        <div role="radiogroup" aria-label="Escenario financiero" className="flex flex-wrap gap-2">
          {scenarios.map((item) => {
            const selected = item.id === scenario.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setActiveId(item.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${
                  selected
                    ? "border-navy-950 bg-navy-950 text-white"
                    : "border-[var(--color-line)] bg-white text-navy-800 hover:border-navy-800"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          className="mt-4 rounded-2xl border border-[var(--color-line)] bg-white p-5 sm:p-6"
          aria-live="polite"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
            Escenario {scenario.label.toLowerCase()}
          </p>
          {equilibrium ? (
            <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{equilibrium[4]}</p>
          ) : null}
          <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-xl bg-stone-50 px-3 py-3">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-lg font-semibold text-navy-950">{fact.value}</dd>
                {fact.detail ? <dd className="text-sm text-[var(--color-ink-soft)]">{fact.detail}</dd> : null}
              </div>
            ))}
          </dl>
        </div>
      </div>

      <DataTable caption="Unidad económica" headers={["", ""]} rows={financeContext} />
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">Inversión inicial</h3>
        <DataTable
          caption="Inversión inicial"
          headers={["Concepto", "Valor", "Nota"]}
          rows={investmentRows}
        />
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">
            Costo de la mano de obra
          </h3>
          <DataTable
            caption="Costo de un operario"
            headers={["Concepto", "Valor", "Nota"]}
            rows={laborRows}
          />
        </div>
        <div>
          <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">Costos fijos</h3>
          <DataTable
            caption="Costos fijos mensuales y anuales"
            headers={["Concepto", "Mensual", "Anual", "Nota"]}
            rows={fixedCosts}
          />
        </div>
      </div>
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">
          Costos variables por abridor
        </h3>
        <DataTable
          caption="Costos variables unitarios"
          headers={["Concepto", ...columnHeaders]}
          rows={variableCosts}
          highlightColumn={scenario.column}
        />
        <p className="prose-body mt-3 text-sm leading-relaxed">
          Del Seis Sigma: el 45 % de las unidades necesita retoque. En el escenario esperado ese
          reproceso cuesta $1.500 por unidad.
        </p>
      </div>
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">
          Precio, margen y unidades
        </h3>
        <DataTable
          caption="Precio y unidades"
          headers={["Variable", ...columnHeaders]}
          rows={priceBlock}
          highlightColumn={scenario.column}
        />
      </div>
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">Pronóstico de ventas</h3>
        <DataTable
          caption="Unidades por año"
          headers={["Año", ...columnHeaders]}
          rows={salesForecast}
          highlightColumn={scenario.column}
        />
      </div>
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">
          Ingreso y beneficio del año 1
        </h3>
        <DataTable
          caption="Ingreso y beneficio del año 1"
          headers={["Concepto", ...columnHeaders]}
          rows={yearOne}
          highlightColumn={scenario.column}
        />
      </div>
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">Flujo de caja a 5 años</h3>
        <DataTable
          caption="Flujo de caja proyectado"
          headers={["Concepto", ...columnHeaders]}
          rows={cashFlow}
          highlightColumn={scenario.column}
        />
      </div>
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">Punto de equilibrio</h3>
        <DataTable
          caption="Punto de equilibrio"
          headers={["Escenario", "Unidades al año", "Unidades al mes", "Unidades año 1", "Resultado"]}
          rows={breakEvenRows}
          highlightRow={scenario.label}
        />
        <p className="prose-body mt-3 text-sm leading-relaxed">
          En el escenario esperado el equilibrio en ventas es $129.590.300 al año.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">ROI</h3>
          <DataTable
            caption="ROI"
            headers={["Escenario", "Beneficio año 1", "ROI año 1", "ROI 5 años", "Resultado"]}
            rows={roiRows}
            highlightRow={scenario.label}
          />
        </div>
        <div>
          <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">Payback</h3>
          <DataTable
            caption="Payback"
            headers={["Escenario", "Inversión", "Flujo año 1", "Años", "Meses"]}
            rows={paybackRows}
            highlightRow={scenario.label}
          />
        </div>
      </div>
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">VAN y TIR</h3>
        <p className="prose-body mb-3 text-sm leading-relaxed">
          Tasa de descuento 15 %: CDT (≈ 10 %) más el riesgo de una empresa nueva (≈ 5 %).
        </p>
        <DataTable
          caption="VAN y TIR"
          headers={["Escenario", "VAN", "TIR", "¿Se acepta?", "Resultado"]}
          rows={vanRows}
          highlightRow={scenario.label}
        />
      </div>
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">Resumen</h3>
        <DataTable
          caption="Tabla resumen"
          headers={["Indicador", ...columnHeaders]}
          rows={summaryRows}
          highlightColumn={scenario.column}
        />
      </div>
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">Fórmulas</h3>
        <DataTable caption="Fórmulas utilizadas" headers={["Indicador", "Fórmula"]} rows={formulaRows} />
      </div>
      <p>
        <a
          href="/docs/evaluacion-financiera.xlsx"
          download
          className="text-sm font-semibold text-navy-800 underline decoration-amber-400 underline-offset-4"
        >
          Descargar la evaluación financiera
        </a>
      </p>
    </div>
  );
}
