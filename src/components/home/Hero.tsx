"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { assets } from "@/data/assets";
import { siteMeta } from "@/data/project";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const shouldAnimate = ready && !reduced;

  const fade = (delay: number) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
            delay,
          },
        }
      : { initial: false as const };

  return (
    <section className="relative isolate overflow-hidden bg-[#e6ebf0]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-navy-800/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-16 xl:gap-14">
        <div className="z-10 max-w-xl">
          <motion.div {...fade(0)}>
            <Image
              src={assets.logo.publicPath}
              alt={assets.logo.alt}
              width={340}
              height={105}
              className="h-11 w-auto object-contain sm:h-12"
              priority
            />
          </motion.div>

          <motion.p
            className="mt-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-600"
            {...fade(0.05)}
          >
            Utensilio ergonómico ajustable
          </motion.p>

          <motion.h1
            className="font-display mt-4 text-[3.25rem] font-semibold leading-[0.96] tracking-[-0.04em] text-navy-950 sm:text-6xl lg:text-[4.25rem]"
            {...fade(0.08)}
          >
            Abre más.
            <span className="mt-1 block text-amber-600">Esfuérzate menos.</span>
          </motion.h1>

          <motion.p
            className="prose-body mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg"
            {...fade(0.12)}
          >
            {siteMeta.productName}: utensilio ergonómico y ajustable para abrir
            frascos, botellas y envases con menos esfuerzo.
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap gap-3" {...fade(0.16)}>
            <ButtonLink href="/diseno-industrial">Conocer el producto</ButtonLink>
            <ButtonLink href="/diagnostico" variant="secondary">
              Explorar el diagnóstico
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          {...(shouldAnimate
            ? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                },
              }
            : { initial: false as const })}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[1.75rem] shadow-[0_28px_60px_rgba(10,28,46,0.18)] ring-1 ring-black/5 sm:rounded-[2rem] lg:ml-auto lg:max-w-none">
            <Image
              src={assets.renderPrincipal1.publicPath}
              alt={assets.renderPrincipal1.alt}
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 92vw, 560px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
