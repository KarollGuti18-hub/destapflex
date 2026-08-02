"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { howItWorksSteps } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const PHASE_MS = 1800;

type GiraBeat = "idle" | "twist" | "lift";

export function HowItWorks() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const [giraBeat, setGiraBeat] = useState<GiraBeat>("idle");
  const step = howItWorksSteps[phase] ?? howItWorksSteps[0];

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setPhase((current) => (current + 1) % howItWorksSteps.length);
    }, PHASE_MS);
    return () => window.clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    if (phase !== 2 || reduced) {
      setGiraBeat("idle");
      return;
    }

    setGiraBeat("twist");
    const liftTimer = window.setTimeout(() => setGiraBeat("lift"), 700);
    return () => window.clearTimeout(liftTimer);
  }, [phase, reduced]);

  const strapScale = phase === 0 ? 1.18 : 1;
  const strapOpacity = phase === 0 ? 0.55 : 1;
  const pinY = phase === 0 ? -6 : 0;

  /** Ángulo del mango alrededor de la tapa: 0° = derecha, gira en sentido antihorario (desenroscar). */
  const armAngle =
    phase === 2 && giraBeat !== "idle"
      ? giraBeat === "twist"
        ? 125
        : 125
      : 8;

  const armRad = (armAngle * Math.PI) / 180;
  const orbitX = 200 + Math.cos(armRad) * 98;
  const orbitY = 178 + Math.sin(armRad) * 22;
  const armDepth = 0.5 + Math.abs(Math.cos(armRad)) * 0.5;
  const liftY = phase === 2 && giraBeat === "lift" ? -56 : 0;

  return (
    <section className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            eyebrow="Funcionamiento"
            title="Así funciona DestapFlex"
            description="Tres pasos sencillos para abrir envases con menor esfuerzo."
          />
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#eef2f6] to-[#dce4ec] shadow-lift ring-1 ring-black/5">
              <div className="pointer-events-none absolute inset-0 grain opacity-40" aria-hidden="true" />

              <svg
                viewBox="0 0 400 400"
                className="relative h-full w-full"
                role="img"
                aria-label={`Animación del paso: ${step.title}. ${step.description}`}
              >
                {/* jar body stays put */}
                <rect x="148" y="210" width="104" height="118" rx="10" fill="#c5d0db" />
                <rect x="156" y="218" width="88" height="102" rx="8" fill="#d7e0e9" />
                <rect x="168" y="236" width="64" height="10" rx="3" fill="#b4c1cf" opacity="0.7" />
                <rect x="168" y="258" width="48" height="8" rx="3" fill="#b4c1cf" opacity="0.45" />

                {/* lid + strap + arm: twist sideways, then lift */}
                <motion.g
                  animate={reduced ? { y: 0 } : { y: liftY }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* lid */}
                  <g>
                    <ellipse cx="200" cy="188" rx="58" ry="18" fill="#8fa0b3" />
                    <rect x="142" y="168" width="116" height="28" rx="8" fill="#a8b7c8" />
                    <ellipse cx="200" cy="168" rx="58" ry="16" fill="#c2cedb" />
                    <ellipse cx="200" cy="168" rx="36" ry="8" fill="#dce5ee" opacity="0.8" />
                  </g>

                  {/* strap */}
                  <motion.ellipse
                    cx="200"
                    cy="182"
                    rx="72"
                    ry="26"
                    fill="none"
                    stroke="#12304a"
                    strokeWidth="14"
                    strokeLinecap="round"
                    animate={
                      reduced
                        ? undefined
                        : {
                            scaleX: strapScale,
                            scaleY: strapScale * 0.92,
                            opacity: strapOpacity,
                          }
                    }
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "200px 182px" }}
                  />
                  <motion.ellipse
                    cx="200"
                    cy="182"
                    rx="72"
                    ry="26"
                    fill="none"
                    stroke="#2a5f86"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                    animate={
                      reduced
                        ? undefined
                        : {
                            scaleX: strapScale,
                            scaleY: strapScale * 0.92,
                            opacity: strapOpacity * 0.7,
                          }
                    }
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "200px 182px" }}
                  />

                  {/* lock pin */}
                  <motion.g
                    animate={reduced ? undefined : { y: pinY }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <rect x="246" y="168" width="10" height="36" rx="4" fill="#6a7582" />
                    <circle cx="251" cy="166" r="7" fill="#101820" />
                    <circle cx="251" cy="166" r="3.5" fill="#c2cad3" />
                  </motion.g>

                  {/* arm orbits around the lid (desenroscar) */}
                  <motion.g
                    animate={
                      reduced
                        ? { x: 298, y: 158, scale: 1 }
                        : {
                            x: orbitX,
                            y: orbitY,
                            scale: armDepth,
                          }
                    }
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    <g transform="translate(-320, -162)">
                      <path
                        d="M255 176 C290 150 330 142 352 148 L348 168 C328 164 296 170 268 188 Z"
                        fill="#12304a"
                      />
                      <path
                        d="M262 178 C292 158 324 152 346 156 L344 166 C324 162 296 168 270 184 Z"
                        fill="#1a4568"
                      />
                      <path
                        d="M318 150 C338 146 356 152 360 164 C364 176 350 186 332 184 C314 182 306 168 318 150 Z"
                        fill="#e8891c"
                      />
                      <path
                        d="M324 156 C338 152 350 156 352 164 C354 172 344 178 332 176 C320 174 316 162 324 156 Z"
                        fill="#f2a645"
                        opacity="0.85"
                      />
                    </g>
                  </motion.g>
                </motion.g>

                {/* sideways unscrew cue */}
                <AnimatePresence>
                  {phase === 2 && giraBeat === "twist" && !reduced ? (
                    <motion.g
                      key="twist-cue"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.path
                        d="M128 178 A78 28 0 0 1 272 178"
                        fill="none"
                        stroke="#e8891c"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                      />
                      <motion.path
                        d="M260 168 L274 178 L258 186"
                        fill="none"
                        stroke="#e8891c"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                      />
                    </motion.g>
                  ) : null}
                </AnimatePresence>

                {/* lift cue */}
                <AnimatePresence>
                  {phase === 2 && giraBeat === "lift" && !reduced ? (
                    <motion.path
                      key="lift-cue"
                      d="M200 132 L200 96"
                      fill="none"
                      stroke="#e8891c"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      markerEnd="url(#arrowUp)"
                    />
                  ) : null}
                </AnimatePresence>
                <defs>
                  <marker
                    id="arrowUp"
                    markerWidth="8"
                    markerHeight="8"
                    refX="4"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M1 7 L4 1 L7 7" fill="none" stroke="#e8891c" strokeWidth="1.5" />
                  </marker>
                </defs>
              </svg>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/70 via-navy-950/25 to-transparent px-5 pb-5 pt-16">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                  Paso {phase + 1} de {howItWorksSteps.length}
                </p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={step.id}
                    className="mt-1 font-display text-2xl font-semibold text-white"
                    initial={reduced ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                  >
                    {step.title}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          <div>
            <ol className="space-y-3">
              {howItWorksSteps.map((item, index) => {
                const active = index === phase;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setPhase(index)}
                      className={`w-full rounded-2xl border px-5 py-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${
                        active
                          ? "border-navy-900 bg-navy-900 text-white shadow-[0_10px_28px_rgba(18,48,74,0.2)]"
                          : "border-[var(--color-line)] bg-white/90 text-navy-900 hover:border-navy-800/25"
                      }`}
                      aria-current={active ? "step" : undefined}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                            active ? "bg-amber-500 text-navy-950" : "bg-amber-100 text-amber-600"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <div>
                          <p
                            className={`font-display text-xl font-semibold ${
                              active ? "text-white" : "text-navy-950"
                            }`}
                          >
                            {item.title}
                          </p>
                          <p
                            className={`mt-1.5 text-sm leading-relaxed ${
                              active ? "text-white/70" : "text-ink-muted"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>

            <p className="mt-6 text-xs text-ink-muted">
              La animación ilustra el ajuste de la correa y el giro. No es una
              simulación física exacta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
