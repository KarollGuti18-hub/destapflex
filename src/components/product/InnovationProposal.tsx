import { innovationProposal } from "@/data/research";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function InnovationProposal() {
  return (
    <section
      id="propuesta-innovacion"
      className="border-y border-[var(--color-line)] bg-white/50 section-pad"
    >
      <div className="container-page">
        <Reveal>
          <SectionTitle title={innovationProposal.title} />
        </Reveal>

        <Reveal className="mt-8">
          <article className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-card sm:p-8">
            {innovationProposal.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="prose-body mt-4 text-sm leading-relaxed text-ink-muted first:mt-0 sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </article>
        </Reveal>
      </div>
    </section>
  );
}
