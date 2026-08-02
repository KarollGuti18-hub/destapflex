import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-navy-900 text-white shadow-[0_10px_24px_rgba(18,48,74,0.22)] hover:bg-navy-950 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(18,48,74,0.28)]"
      : "border border-[var(--color-line)] bg-white/80 text-navy-900 backdrop-blur-sm hover:border-navy-800/35 hover:bg-white hover:-translate-y-0.5";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${styles} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="translate-x-0 transition duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
