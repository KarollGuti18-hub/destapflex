import type { Metadata } from "next";

import { CutNav } from "@/components/third-cut/CutNav";
import { DataTable } from "@/components/third-cut/DataTable";
import { ScenarioFinance } from "@/components/third-cut/ScenarioFinance";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  ctsValidation,
  emotionRows,
  financeAnalysis,
  multipleChoice,
  priceSensitivity,
  sentimentRows,
  sigmaCalcs,
  sigmaComparison,
  sigmaComparisonText,
  sigmaDefects,
  viabilityNav,
  vocCharts,
} from "@/data/thirdCut";

export const metadata: Metadata = {
  title: "DestapFlex",
  description:
    "Viabilidad y validación de DestapFlex: evaluación financiera, Seis Sigma y voz del cliente.",
};

export default function ViabilidadValidacionPage() {
  return (
    <>
      <PageBanner
        eyebrow="Viabilidad y Validación"
        title="Evaluación de la innovación"
        description="Evaluación financiera, calidad Seis Sigma y voz del cliente del producto de gestión tecnológica."
      />
      <CutNav label="Apartados de viabilidad y validación" items={viabilityNav} />

      <section id="financiera" className="border-b border-[var(--color-line)] py-16">
        <div className="container-wide px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="01"
            title="Evaluación financiera"
            description="Pesos colombianos, horizonte de 5 años. Los costos fijos son los mismos en los tres escenarios."
          />
          <ScenarioFinance />
        </div>
      </section>

      <section id="analisis" className="border-b border-[var(--color-line)] bg-stone-50 py-16">
        <div className="container-wide px-5 sm:px-8 lg:px-10">
          <SectionTitle eyebrow="02" title="Situación financiera" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {financeAnalysis.map((block) => (
              <article
                key={block.title}
                className="rounded-2xl border border-[var(--color-line)] bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-navy-950">{block.title}</h3>
                <p className="prose-body mt-3 text-sm leading-relaxed">{block.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">
              Sensibilidad del precio
            </h3>
            <DataTable
              caption="Margen y equilibrio según el precio"
              headers={["Precio", "Margen de contribución", "Equilibrio (unid/año)"]}
              rows={priceSensitivity}
            />
          </div>
        </div>
      </section>

      <section id="seis-sigma" className="border-b border-[var(--color-line)] py-16">
        <div className="container-wide px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="03"
            title="Calidad Seis Sigma"
            description="Lote piloto de gestión tecnológica: 120 unidades, 72 defectos y 6 oportunidades, una por pieza."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <DataTable
              caption="Defectos por pieza"
              headers={["Pieza", "Defectos", "Participación"]}
              rows={sigmaDefects.map((row) => [row.piece, row.defects, row.share])}
            />
            <DataTable
              caption="Cálculos Seis Sigma"
              headers={["Variable", "Valor"]}
              rows={sigmaCalcs.map((row) => [row.variable, row.value])}
            />
          </div>
          <p className="prose-body mt-4 text-sm leading-relaxed text-[var(--color-ink-soft)]">
            El rendimiento es e^(−DPU) y el nivel es DISTR.NORM.ESTAND.INV(rendimiento) + 1,5. De las
            120 unidades, unas 66 salen sin defecto. La hoja marca estos conteos como valores
            supuestos del lote piloto.
          </p>
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-navy-950">
              Diseño industrial y gestión tecnológica
            </h3>
            <p className="prose-body mt-4 max-w-3xl text-sm leading-relaxed">{sigmaComparisonText}</p>
            <div className="mt-6">
              <DataTable
                caption="Comparación de los dos productos"
                headers={["", "Diseño industrial", "Gestión tecnológica"]}
                rows={sigmaComparison}
              />
            </div>
          </div>
          <p className="mt-6">
            <a
              href="/docs/seis-sigma-destapflex.xlsx"
              download
              className="text-sm font-semibold text-navy-800 underline decoration-amber-400 underline-offset-4"
            >
              Descargar el cálculo Seis Sigma
            </a>
          </p>
        </div>
      </section>

      <section id="fallos" className="border-b border-[var(--color-line)] bg-stone-50 py-16">
        <div className="container-wide px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="04"
            title="Oportunidades de fallo"
            description="Las seis piezas del lote y el porcentaje de los 72 defectos que concentra cada una."
          />
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
            <ImageLightbox
              src="/assets/desarrollo/explosionado.jpg"
              alt="Explosionado de DestapFlex con correa, cuerpo, mango, pin y cuñas"
              width={572}
              height={1024}
              caption="Explosionado del producto de gestión tecnológica."
              className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white"
            />
            <ol className="space-y-3">
              {sigmaDefects.map((piece, index) => (
                <li
                  key={piece.piece}
                  className="flex items-baseline justify-between gap-4 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3"
                >
                  <span className="text-sm text-[var(--color-ink)]">
                    <span className="mr-2 font-semibold text-navy-950">{index + 1}.</span>
                    {piece.piece}
                    <span className="text-[var(--color-ink-soft)]"> · {piece.defects} defectos</span>
                  </span>
                  <span className="font-display text-lg font-semibold text-navy-950">{piece.share}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="voc" className="py-16">
        <div className="container-wide px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="05"
            title="Voz del cliente"
            description="Encuesta a 19 personas, 9 preguntas abiertas y 163 respuestas de texto. Javier Enmanuel Perez Millan, 7 de noviembre de 2026."
          />
          <p className="prose-body mt-6 max-w-3xl text-sm leading-relaxed">
            Las CTS definidas para DESTAPFLEX coinciden con lo que piden los clientes: el agarre
            cómodo y antideslizante es la necesidad más fuerte, seguido de la multifuncionalidad y
            el bloqueo práctico. El 65,0 % de las respuestas es neutral, el 19,0 % negativo y el
            16,0 % positivo, y lo negativo se refiere al problema que el producto resuelve, no al
            producto.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {vocCharts.map((chart) => (
              <ImageLightbox
                key={chart.src}
                src={chart.src}
                alt={chart.alt}
                width={chart.width}
                height={chart.height}
                caption={chart.caption}
                className={`overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white ${
                  chart.src.includes("nube") ? "md:col-span-2" : ""
                }`}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <DataTable
              caption="Distribución del sentimiento"
              headers={["Sentimiento", "Respuestas", "Porcentaje"]}
              rows={sentimentRows}
            />
            <DataTable
              caption="Distribución de las emociones"
              headers={["Emoción", "Respuestas", "Porcentaje"]}
              rows={emotionRows}
            />
          </div>
          <div className="mt-10">
            <h3 className="mb-3 font-display text-lg font-semibold text-navy-950">
              Preguntas de opción múltiple
            </h3>
            <DataTable
              caption="Opción más elegida en cada pregunta"
              headers={["Tema", "Opción más elegida", "Porcentaje"]}
              rows={multipleChoice}
            />
          </div>
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-navy-950">
              ¿Las CTS de inicio siguen siendo las de la encuesta?
            </h3>
            <p className="prose-body mt-4 max-w-3xl text-sm leading-relaxed">
              Las tres CTS que se mantienen —bloqueo práctico, agarre cómodo y antideslizante, y
              multifuncionalidad— sí aparecen en la voz del cliente. Portable no se incluye: el
              equipo la va a replantear y ya no está en la tabla del producto. Ocho de las nueve
              CTQ tienen respaldo. La apertura de latas no aparece en las respuestas. Tres CTQ
              siguen sin meta: presión en la palma, fuerza para tapa corona y apertura de latas.
            </p>
            <div className="mt-6">
              <DataTable
                caption="Validación de CTS y CTQ"
                headers={["CTS", "CTQ", "Evidencia", "Resultado"]}
                rows={ctsValidation}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
