import { productDescription } from "@/data/project";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const blocks = [
  {
    title: "¿Qué es DestapFlex?",
    body: productDescription.whatIs,
  },
  {
    title: "¿Qué necesidad específica resuelve?",
    body: productDescription.need,
  },
  {
    title: "¿Cuál fue el objetivo de su desarrollo?",
    body: productDescription.objective,
  },
  {
    title: "Público objetivo",
    body: productDescription.audience,
  },
];

export function ProductDescription() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="Descripción del producto"
            title="Qué es DestapFlex y a quién sirve"
            description="Estado actual del producto: qué es, qué necesidad resuelve y a quién está dirigido."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {blocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.05}>
              <Card as="article" className="h-full">
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {block.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
