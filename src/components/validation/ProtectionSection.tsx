import {
  protectionConclusions,
  protectionItems,
  protectionLimits,
} from "@/data/validation";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProtectionSection() {
  return (
    <section id="proteccion" className="section-pad scroll-mt-32">
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="01 · Estrategia de protección"
            title="Estrategia de Protección (Propiedad Intelectual)"
          />
        </Reveal>

        <Reveal className="mt-10">
          <ImageLightbox
            src="/assets/proteccion/abridor-ajustable.png"
            alt="Explosionado del abridor ajustable: correa de agarre, cuerpo principal, mango ergonómico, pin de bloqueo, cuña metálica en L y cuña abrelatas."
            width={770}
            height={670}
            caption="Ilustración del explosionado, hoja patentes de Matrices destaflex completa."
            className="mx-auto max-w-3xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
            <table className="min-w-[760px] w-full text-left text-sm">
              <caption className="sr-only">
                Elementos de DestapFlex, tipo de protección y entidad de registro
              </caption>
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Elemento a proteger
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Tipo de protección
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Justificación
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Entidad de registro
                  </th>
                </tr>
              </thead>
              <tbody>
                {protectionItems.map((item) => (
                  <tr key={item.element} className="border-t border-[var(--color-line)] align-top">
                    <th scope="row" className="px-4 py-4 font-medium text-navy-950">
                      {item.element}
                    </th>
                    <td className="px-4 py-4 text-ink-soft">{item.type}</td>
                    <td className="px-4 py-4 text-ink-muted">{item.justification}</td>
                    <td className="px-4 py-4 text-ink-soft">{item.entity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="rounded-2xl border border-amber-500/30 bg-amber-100/70 px-5 py-4 text-sm leading-relaxed text-navy-900">
            {protectionLimits}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {protectionConclusions.map((text) => (
            <Reveal key={text}>
              <article className="h-full rounded-2xl border border-[var(--color-line)] bg-white p-5">
                <p className="prose-body text-sm leading-relaxed text-ink-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
