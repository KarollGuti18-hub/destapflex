interface PageBannerProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 grain opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-navy-700/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-400">
          {eyebrow}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.25rem] md:leading-[1.08]">
          {title}
        </h1>
        <p className="prose-body mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
