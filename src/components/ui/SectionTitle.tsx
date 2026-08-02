import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.1] ${
          eyebrow ? "mt-4" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className="prose-body mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
