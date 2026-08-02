import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-[var(--color-line)] bg-white/90 p-6 shadow-card backdrop-blur-sm ${className}`}
    >
      {children}
    </Tag>
  );
}
