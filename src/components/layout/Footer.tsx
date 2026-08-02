import Image from "next/image";
import Link from "next/link";

import { assets } from "@/data/assets";
import { navigation, siteMeta } from "@/data/project";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div className="pointer-events-none absolute inset-0 grain opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative section-pad !py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Image
              src={assets.logo.publicPath}
              alt={assets.logo.alt}
              width={200}
              height={62}
              className="h-10 w-auto object-contain"
            />
            <p className="prose-body mt-5 max-w-md text-sm leading-relaxed text-white/65">
              DestapFlex en su estado actual: un utensilio ergonómico y
              ajustable para abrir frascos, botellas y envases con menos esfuerzo.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
              Navegación
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>{siteMeta.title}</span>
          <span>Gestión tecnológica</span>
        </div>
      </div>
    </footer>
  );
}
