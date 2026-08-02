"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { renderViews } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";

export function RenderExplorer() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const dragX = useRef<number | null>(null);
  const current = renderViews[index];

  const go = useCallback((next: number) => {
    setIndex((next + renderViews.length) % renderViews.length);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(false);
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, go, index]);

  const onPointerDown = (clientX: number) => {
    dragX.current = clientX;
  };

  const onPointerUp = (clientX: number) => {
    if (dragX.current === null) return;
    const delta = clientX - dragX.current;
    dragX.current = null;
    if (Math.abs(delta) < 40) return;
    go(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <section className="border-y border-[var(--color-line)] bg-navy-950 text-white">
      <div className="container-wide section-pad">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-400">
              Explorador de renders
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
              Explora el producto
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
              Recorre las vistas disponibles del producto y el contexto de uso.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <div
            className="relative mx-auto flex h-[30rem] max-w-4xl touch-pan-y items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 sm:h-[34rem]"
            onMouseDown={(event) => onPointerDown(event.clientX)}
            onMouseUp={(event) => onPointerUp(event.clientX)}
            onTouchStart={(event) => onPointerDown(event.touches[0].clientX)}
            onTouchEnd={(event) => onPointerUp(event.changedTouches[0].clientX)}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain p-6 select-none sm:p-10"
              sizes="(max-width: 768px) 100vw, 900px"
              priority={index === 0}
            />

            <button
              type="button"
              aria-label="Vista anterior"
              onClick={() => go(index - 1)}
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-white/95 text-lg text-navy-900 transition hover:bg-white"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Vista siguiente"
              onClick={() => go(index + 1)}
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-white/95 text-lg text-navy-900 transition hover:bg-white"
            >
              ›
            </button>

            <button
              type="button"
              onClick={() => setLightbox(true)}
              className="absolute bottom-5 right-5 rounded-md bg-amber-500 px-4 py-2 text-xs font-semibold text-navy-950 transition hover:bg-amber-400"
            >
              Ampliar
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-white/55" aria-live="polite">
            Vista {index + 1} de {renderViews.length}: {current.label}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {renderViews.map((view, viewIndex) => (
              <button
                key={view.id}
                type="button"
                onClick={() => setIndex(viewIndex)}
                aria-pressed={viewIndex === index}
                className={`rounded-md px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
                  viewIndex === index
                    ? "bg-amber-500 text-navy-950"
                    : "bg-white/10 text-white/80 ring-1 ring-white/15 hover:bg-white/15"
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setLightbox(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-1 right-0 z-10 rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-navy-950"
              onClick={() => setLightbox(false)}
            >
              Cerrar
            </button>
            <div className="relative mt-8 h-[78vh] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain p-4"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
