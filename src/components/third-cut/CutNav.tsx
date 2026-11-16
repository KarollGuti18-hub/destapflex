interface CutNavProps {
  label: string;
  items: readonly { id: string; label: string }[];
}

export function CutNav({ label, items }: CutNavProps) {
  return (
    <nav
      aria-label={label}
      className="sticky top-[74px] z-40 border-b border-[var(--color-line)] bg-[#f4f6f8]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-3 sm:px-8 lg:px-10">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 rounded-full px-3 py-1.5 text-[12px] font-semibold tracking-wide text-navy-800 transition hover:bg-white hover:text-navy-950"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
