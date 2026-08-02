"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  caption,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 900px",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const titleId = useId();

  const close = useCallback(() => {
    setOpen(false);
    setScale(1);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <figure className={className}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          aria-label={`Ampliar imagen: ${alt}`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-full object-contain transition duration-300 group-hover:scale-[1.01]"
            sizes={sizes}
            priority={priority}
          />
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-navy-900/80 px-3 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
            Ampliar
          </span>
        </button>
        {caption ? (
          <figcaption className="mt-3 text-sm text-steel-500">{caption}</figcaption>
        ) : null}
      </figure>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={close}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <p id={titleId} className="truncate text-sm font-medium text-white">
                {alt}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-md bg-white/10 px-3 py-1.5 text-sm text-white transition hover:bg-white/20"
                  onClick={() => setScale((value) => Math.max(1, value - 0.25))}
                  aria-label="Reducir zoom"
                >
                  −
                </button>
                <button
                  type="button"
                  className="rounded-md bg-white/10 px-3 py-1.5 text-sm text-white transition hover:bg-white/20"
                  onClick={() => setScale((value) => Math.min(3, value + 0.25))}
                  aria-label="Aumentar zoom"
                >
                  +
                </button>
                <button
                  type="button"
                  className="rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-navy-950 transition hover:bg-amber-400"
                  onClick={close}
                >
                  Cerrar
                </button>
              </div>
            </div>
            <div className="overflow-auto rounded-xl bg-white/5 p-2">
              <div
                className="mx-auto origin-center transition-transform duration-200"
                style={{ transform: `scale(${scale})` }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="mx-auto h-auto max-h-[78vh] w-auto object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
