"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";

import { productPhotos } from "@/data/thirdCut";

const before = productPhotos[0];
const after = productPhotos[1];

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const inputId = useId();

  function moveTo(clientX: number) {
    const frame = frameRef.current;
    if (!frame) return;
    const bounds = frame.getBoundingClientRect();
    const next = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(100, Math.max(0, Math.round(next))));
  }

  return (
    <figure className="mx-auto mt-8 w-full max-w-sm">
      <div
        ref={frameRef}
        className="relative aspect-[572/1024] overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white"
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          moveTo(event.clientX);
        }}
        onPointerMove={(event) => {
          if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
          moveTo(event.clientX);
        }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-contain"
          priority
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <Image
            src={after.src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-contain"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(10,28,46,0.35)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />
        {position > 8 ? (
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy-950/80 px-2.5 py-1 text-[11px] font-semibold text-white">
            Diseño industrial
          </span>
        ) : null}
        {position < 92 ? (
          <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-navy-950/80 px-2.5 py-1 text-[11px] font-semibold text-white">
            Gestión tecnológica
          </span>
        ) : null}
      </div>
      <label htmlFor={inputId} className="mt-4 block text-sm font-semibold text-navy-950">
        Arrastra para comparar
      </label>
      <input
        id={inputId}
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-valuetext={
          position <= 2
            ? "Solo gestión tecnológica"
            : position >= 98
              ? "Solo diseño industrial"
              : `A la izquierda diseño industrial, a la derecha gestión tecnológica, divisor en ${position} %`
        }
        className="mt-2 w-full accent-amber-500"
      />
      <figcaption className="prose-body mt-3 text-sm leading-relaxed">
        {before.caption} {after.caption}
      </figcaption>
    </figure>
  );
}
