import { productComponents } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TechnicalFeatures() {
  return (
    <section className="border-y border-[var(--color-line)] bg-white/70">
      <div className="container-wide section-pad">
        <Reveal>
          <SectionTitle
            eyebrow="Características técnicas"
            title="Componentes principales"
            description="Cinco piezas del producto: materiales, función y dimensiones de cada componente."
          />
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white shadow-card">
          {productComponents.map((component, index) => (
            <Reveal key={component.name} delay={index * 0.03}>
              <article
                className={`grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_1.4fr_0.9fr] lg:gap-10 ${
                  index !== productComponents.length - 1
                    ? "border-b border-[var(--color-line)]"
                    : ""
                }`}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    Componente
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-ink">
                    {component.name}
                  </h3>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    Función
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                    {component.function}
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Material
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink">
                      {component.material}
                    </p>
                  </div>
                  {component.dimension ? (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                        Dimensión
                      </p>
                      <p className="mt-2 text-sm font-medium text-ink">
                        {component.dimension}
                      </p>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
