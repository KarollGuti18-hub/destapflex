import { homeBenefits } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Benefits() {
  return (
    <section className="bg-[#f4f6f8]">
      <div className="container-wide section-pad">
        <Reveal>
          <SectionTitle
            eyebrow="Beneficios"
            title="Diseñado para facilitar cada apertura"
            description="Tres ventajas derivadas del enfoque ergonómico y ajustable de DestapFlex."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {homeBenefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.08}>
              <article className="relative pt-2">
                <p className="font-display text-[4.5rem] leading-none font-semibold tracking-tight text-navy-950/8">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display relative -mt-8 text-2xl font-semibold text-navy-950">
                  {benefit.title}
                </h3>
                <p className="prose-body mt-4 max-w-xs text-[15px] leading-relaxed text-ink-muted">
                  {benefit.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
