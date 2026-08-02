import Link from "next/link";

import { underConstructionMessage } from "@/data/project";

interface UnderConstructionProps {
  title: string;
}

export function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grain opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide section-pad relative flex min-h-[60vh] items-center justify-center">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600">
            Próximamente
          </p>
          <h1 className="font-display mt-5 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            {underConstructionMessage}
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(18,48,74,0.22)] transition hover:bg-navy-950"
          >
            Volver al inicio
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
