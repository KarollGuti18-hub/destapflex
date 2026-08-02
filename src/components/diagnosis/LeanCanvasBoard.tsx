"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  leanCanvasBlocks,
  type LeanCanvasIcon,
} from "@/data/project";

type Tone = {
  cell: string;
  border: string;
  number: string;
  chip: string;
  doodle: string;
};

const tones: Record<LeanCanvasIcon, Tone> = {
  problem: {
    cell: "bg-[#ffe8ef]",
    border: "border-[#f5b8c8]",
    number: "text-[#d9486f]",
    chip: "bg-[#f7a1b5] text-[#5c1328]",
    doodle: "#e35d7d",
  },
  solution: {
    cell: "bg-[#e4f4ff]",
    border: "border-[#a9d4f5]",
    number: "text-[#2b7bb8]",
    chip: "bg-[#8ec8f0] text-[#123a58]",
    doodle: "#3b8fd0",
  },
  segments: {
    cell: "bg-[#efe8ff]",
    border: "border-[#c9b6f5]",
    number: "text-[#6b46c1]",
    chip: "bg-[#c4a8f5] text-[#3b1d7a]",
    doodle: "#8b5cf6",
  },
  advantage: {
    cell: "bg-[#e7f8ef]",
    border: "border-[#a8e0c2]",
    number: "text-[#1f8a5b]",
    chip: "bg-[#8fd9b4] text-[#0f4a32]",
    doodle: "#2aa56c",
  },
  metrics: {
    cell: "bg-[#fff3d6]",
    border: "border-[#f0d08a]",
    number: "text-[#b7791f]",
    chip: "bg-[#f0c35a] text-[#5c3d08]",
    doodle: "#d69a1e",
  },
  channels: {
    cell: "bg-[#ffe9d8]",
    border: "border-[#f0c09a]",
    number: "text-[#c05621]",
    chip: "bg-[#f0a86a] text-[#5c2a0c]",
    doodle: "#e07a2f",
  },
  costs: {
    cell: "bg-[#f0efe9]",
    border: "border-[#d2cec2]",
    number: "text-[#6b6558]",
    chip: "bg-[#cdc6b4] text-[#3d392f]",
    doodle: "#8a8476",
  },
  revenue: {
    cell: "bg-[#e8f7e4]",
    border: "border-[#aedeb0]",
    number: "text-[#2f8a3a]",
    chip: "bg-[#8fd392] text-[#1a4d22]",
    doodle: "#3fa84a",
  },
};

function DrawnIcon({ kind }: { kind: LeanCanvasIcon }) {
  const c = tones[kind].doodle;

  if (kind === "problem") {
    return (
      <svg viewBox="0 0 88 72" className="h-14 w-[4.5rem]" aria-hidden>
        <ellipse cx="44" cy="64" rx="22" ry="4" fill={c} opacity="0.15" />
        <path
          d="M34 18c0-7 4.5-12 10-12s10 5 10 12"
          fill="none"
          stroke={c}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M30 20c-1 0-3 2-3 5v30c0 4 3 7 7 7h20c4 0 7-3 7-7V25c0-3-2-5-3-5"
          fill="#fff"
          stroke={c}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M34 32h20M36 42h14" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <path
          d="M62 48c6 2 12 8 10 14"
          fill="none"
          stroke={c}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="72" cy="64" r="7" fill="#fff" stroke={c} strokeWidth="2.2" />
        <path d="M69 61l6 6M75 61l-6 6" stroke={c} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "solution") {
    return (
      <svg viewBox="0 0 88 72" className="h-14 w-[4.5rem]" aria-hidden>
        <ellipse cx="44" cy="64" rx="20" ry="4" fill={c} opacity="0.15" />
        <circle cx="44" cy="34" r="22" fill="#fff" stroke={c} strokeWidth="2.5" />
        <circle cx="44" cy="34" r="15" fill={c} opacity="0.18" />
        <path
          d="M32 35l8 8 16-18"
          fill="none"
          stroke={c}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "segments") {
    return (
      <svg viewBox="0 0 88 72" className="h-14 w-[4.5rem]" aria-hidden>
        <ellipse cx="44" cy="64" rx="24" ry="4" fill={c} opacity="0.15" />
        <circle cx="28" cy="24" r="8" fill="#fff" stroke={c} strokeWidth="2.3" />
        <path d="M16 48c2-10 7-14 12-14s10 4 12 14" fill="#fff" stroke={c} strokeWidth="2.3" strokeLinejoin="round" />
        <circle cx="60" cy="22" r="8" fill="#fff" stroke={c} strokeWidth="2.3" />
        <path d="M48 48c2-10 7-14 12-14s10 4 12 14" fill="#fff" stroke={c} strokeWidth="2.3" strokeLinejoin="round" />
        <circle cx="44" cy="36" r="7" fill={c} opacity="0.2" stroke={c} strokeWidth="2.2" />
        <path d="M33 56c2-8 6-11 11-11s9 3 11 11" fill="#fff" stroke={c} strokeWidth="2.2" />
      </svg>
    );
  }

  if (kind === "advantage") {
    return (
      <svg viewBox="0 0 88 72" className="h-14 w-[4.5rem]" aria-hidden>
        <ellipse cx="44" cy="64" rx="18" ry="4" fill={c} opacity="0.15" />
        <path
          d="M44 10l20 8v14c0 14-9 24-20 28-11-4-20-14-20-28V18l20-8z"
          fill="#fff"
          stroke={c}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M44 16l13 5v11c0 10-6 17-13 20-7-3-13-10-13-20V21l13-5z" fill={c} opacity="0.16" />
        <path
          d="M34 34l6 6 12-13"
          fill="none"
          stroke={c}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "metrics") {
    return (
      <svg viewBox="0 0 88 72" className="h-14 w-[4.5rem]" aria-hidden>
        <ellipse cx="44" cy="64" rx="22" ry="4" fill={c} opacity="0.15" />
        <path d="M16 14v40h48" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" />
        <rect x="24" y="36" width="10" height="18" rx="2.5" fill="#fff" stroke={c} strokeWidth="2.2" />
        <rect x="38" y="26" width="10" height="28" rx="2.5" fill={c} opacity="0.25" stroke={c} strokeWidth="2.2" />
        <rect x="52" y="18" width="10" height="36" rx="2.5" fill="#fff" stroke={c} strokeWidth="2.2" />
        <path
          d="M22 30c8 2 12-8 20-6s10 10 18 4"
          fill="none"
          stroke={c}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "channels") {
    return (
      <svg viewBox="0 0 88 72" className="h-14 w-[4.5rem]" aria-hidden>
        <ellipse cx="44" cy="64" rx="22" ry="4" fill={c} opacity="0.15" />
        <path
          d="M18 34l26-16 26 16v22c0 3-2 5-5 5H23c-3 0-5-2-5-5V34z"
          fill="#fff"
          stroke={c}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M18 34l26-16 26 16" fill={c} opacity="0.18" stroke={c} strokeWidth="2.4" strokeLinejoin="round" />
        <rect x="38" y="40" width="12" height="15" rx="2" fill="#fff" stroke={c} strokeWidth="2" />
        <circle cx="62" cy="20" r="7" fill="#fff" stroke={c} strokeWidth="2.2" />
        <path d="M62 15v-4M67 18l3-2M57 18l-3-2" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "costs") {
    return (
      <svg viewBox="0 0 88 72" className="h-14 w-[4.5rem]" aria-hidden>
        <ellipse cx="44" cy="64" rx="20" ry="4" fill={c} opacity="0.15" />
        <rect x="24" y="12" width="34" height="44" rx="5" fill="#fff" stroke={c} strokeWidth="2.4" />
        <path d="M32 24h18M32 34h14M32 44h10" stroke={c} strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
        <circle cx="58" cy="48" r="10" fill="#fff" stroke={c} strokeWidth="2.3" />
        <path
          d="M58 42v12M54 45c1.2-1.5 7-1.5 7 2.5s-5.5 2.5-7 4 5.5 2.5 7 1"
          fill="none"
          stroke={c}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 88 72" className="h-14 w-[4.5rem]" aria-hidden>
      <ellipse cx="44" cy="64" rx="20" ry="4" fill={c} opacity="0.15" />
      <circle cx="44" cy="34" r="20" fill="#fff" stroke={c} strokeWidth="2.5" />
      <circle cx="44" cy="34" r="14" fill={c} opacity="0.16" />
      <path
        d="M44 22v24M38 26c2-2.5 12-2.5 12 4s-10 4-12 7 10 4 12 1.5"
        fill="none"
        stroke={c}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M58 16c4 1 8 5 7 10"
        fill="none"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Cell({
  index,
  title,
  items,
  icon,
  delay = 0,
  className = "",
}: {
  index: number;
  title: string;
  items: readonly string[];
  icon: LeanCanvasIcon;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const tone = tones[icon];

  return (
    <motion.article
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border-2 ${tone.cell} ${tone.border} p-4 sm:p-5 ${className}`}
      initial={reduced ? false : { opacity: 0, y: 14, rotate: -0.4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full opacity-30 blur-2xl"
        style={{ background: tones[icon].doodle }}
        aria-hidden
      />
      <div className="relative flex items-start justify-between gap-2">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${tone.chip}`}
        >
          {String(index).padStart(2, "0")} · {title}
        </span>
      </div>
      <ul className="relative mt-3 flex-1 space-y-2">
        {items.map((item, i) => (
          <li key={item} className="flex gap-2 text-[12px] leading-snug text-[#3d4450] sm:text-[12.5px]">
            <span className={`mt-0.5 font-semibold ${tone.number}`}>{i + 1}.</span>
            <span className="prose-body min-w-0 flex-1">{item}</span>
          </li>
        ))}
      </ul>
      <div className="relative mt-3 flex justify-center">
        <DrawnIcon kind={icon} />
      </div>
    </motion.article>
  );
}

function ValueProposition() {
  const reduced = useReducedMotion();
  const { uniqueValue } = leanCanvasBlocks;

  return (
    <motion.article
      className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[1.5rem] border-2 border-[#f0c9a0] bg-gradient-to-b from-[#fff6e8] via-[#fffaf2] to-[#fde8d4] p-4 shadow-[0_10px_30px_rgba(192,120,40,0.08)] sm:p-5"
      initial={reduced ? false : { opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute -left-8 top-10 h-28 w-28 rounded-full bg-[#f5b76a]/25 blur-2xl" />
      <div className="pointer-events-none absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-[#f7a1b5]/20 blur-2xl" />

      <div className="relative text-center">
        <span className="inline-flex rounded-full bg-[#f0a04a] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#3d2308]">
          03 · {uniqueValue.title}
        </span>
        <div className="mt-2 flex justify-center gap-1 text-[#e07a8a]" aria-hidden>
          <span>✦</span>
          <span className="text-[#f0a04a]">♥</span>
          <span>✦</span>
        </div>
      </div>

      <div className="relative mt-3 flex flex-1 flex-col items-center">
          <motion.div
            animate={reduced ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${uniqueValue.productImage.src}?v=14`}
              alt={uniqueValue.productImage.alt}
              className="h-48 w-auto object-contain sm:h-56"
            />
          </motion.div>

        <p className="prose-body mt-3 max-w-[17rem] text-[12.5px] leading-relaxed text-[#5a6170]">
          {uniqueValue.body}
        </p>
      </div>
    </motion.article>
  );
}

export function LeanCanvasBoard() {
  const {
    problem,
    solution,
    unfairAdvantage,
    customerSegments,
    keyMetrics,
    channels,
    costStructure,
    revenueStreams,
  } = leanCanvasBlocks;

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#f0d7b8] bg-[linear-gradient(165deg,#fff8f0_0%,#fff5f8_42%,#f3f8ff_100%)] p-3 shadow-lift sm:p-5">
      <div className="mb-5 px-1">
        <h3 className="font-display text-3xl font-semibold tracking-tight text-[#1d2a3a] sm:text-4xl">
          Lean Canvas
        </h3>
        <p className="mt-1 text-sm text-[#6b7280]">Modelo de negocio · DestapFlex</p>
      </div>

      <div className="hidden gap-3 lg:grid lg:grid-cols-5 lg:grid-rows-[minmax(230px,1fr)_minmax(170px,auto)_minmax(150px,auto)]">
        <div className="row-span-2">
          <Cell index={1} title={problem.title} items={problem.items} icon={problem.icon} delay={0.03} />
        </div>
        <Cell index={4} title={solution.title} items={solution.items} icon={solution.icon} delay={0.06} />
        <div className="row-span-2">
          <ValueProposition />
        </div>
        <Cell
          index={5}
          title={unfairAdvantage.title}
          items={unfairAdvantage.items}
          icon={unfairAdvantage.icon}
          delay={0.09}
        />
        <div className="row-span-2">
          <Cell
            index={2}
            title={customerSegments.title}
            items={customerSegments.items}
            icon={customerSegments.icon}
            delay={0.11}
          />
        </div>
        <Cell index={8} title={keyMetrics.title} items={keyMetrics.items} icon={keyMetrics.icon} delay={0.13} />
        <Cell index={9} title={channels.title} items={channels.items} icon={channels.icon} delay={0.15} />
        <div className="col-span-3">
          <Cell
            index={7}
            title={costStructure.title}
            items={costStructure.items}
            icon={costStructure.icon}
            delay={0.17}
          />
        </div>
        <div className="col-span-2">
          <Cell
            index={6}
            title={revenueStreams.title}
            items={revenueStreams.items}
            icon={revenueStreams.icon}
            delay={0.19}
          />
        </div>
      </div>

      <div className="grid gap-3 lg:hidden">
        <ValueProposition />
        <Cell index={1} title={problem.title} items={problem.items} icon={problem.icon} />
        <Cell index={4} title={solution.title} items={solution.items} icon={solution.icon} />
        <Cell
          index={2}
          title={customerSegments.title}
          items={customerSegments.items}
          icon={customerSegments.icon}
        />
        <Cell
          index={5}
          title={unfairAdvantage.title}
          items={unfairAdvantage.items}
          icon={unfairAdvantage.icon}
        />
        <Cell index={8} title={keyMetrics.title} items={keyMetrics.items} icon={keyMetrics.icon} />
        <Cell index={9} title={channels.title} items={channels.items} icon={channels.icon} />
        <Cell index={7} title={costStructure.title} items={costStructure.items} icon={costStructure.icon} />
        <Cell index={6} title={revenueStreams.title} items={revenueStreams.items} icon={revenueStreams.icon} />
      </div>
    </div>
  );
}
