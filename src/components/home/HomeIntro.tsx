import Image from "next/image";

import { assets } from "@/data/assets";
import { homeDescription, teamMembers } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";

export function HomeIntro() {
  return (
    <section className="border-y border-[var(--color-line)] bg-white">
      <div className="container-wide section-pad">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#eef2f6]">
              <Image
                src={assets.renderFrontal.publicPath}
                alt={assets.renderFrontal.alt}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600">
                El producto
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
                Pensado para el día a día en la cocina
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-ink-muted sm:text-base">
                {homeDescription}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-12 border-t border-[var(--color-line)] pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                  Equipo de trabajo
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {teamMembers.map((member) => (
                    <li key={member.name} className="text-sm font-medium leading-snug text-navy-900">
                      {member.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
