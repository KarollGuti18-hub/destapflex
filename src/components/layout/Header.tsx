"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { assets } from "@/data/assets";
import { navigation, siteMeta } from "@/data/project";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navigationGroups() {
  const groups: { name: string; items: typeof navigation }[] = [];
  for (const item of navigation) {
    const last = groups[groups.length - 1];
    if (!last || last.name !== item.group) groups.push({ name: item.group, items: [item] });
    else last.items.push(item);
  }
  return groups;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[#f4f6f8]/90 shadow-[0_8px_30px_rgba(10,28,46,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-[#e9eef3]/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-5 py-3.5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex min-w-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          aria-label={`${siteMeta.productName} — Inicio`}
        >
          <Image
            src={assets.logo.publicPath}
            alt=""
            width={150}
            height={46}
            className="h-7 w-auto object-contain sm:h-8"
            priority
          />
          <span className="sr-only">{siteMeta.productName}</span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-end justify-end gap-3 overflow-x-auto xl:flex"
          aria-label="Principal"
        >
          {navigationGroups().map((group) => (
            <div key={group.name} className="flex flex-col">
              <span className="px-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                {group.name}
              </span>
              <div className="flex items-center">
                {group.items.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative whitespace-nowrap px-2.5 py-1.5 text-[12px] font-medium tracking-wide transition xl:text-[13px] ${
                        active ? "text-navy-900" : "text-ink-muted hover:text-navy-800"
                      }`}
                    >
                      {item.label}
                      {active ? (
                        <span className="absolute inset-x-2.5 -bottom-0.5 h-px bg-amber-500" aria-hidden="true" />
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[var(--color-line)] bg-white/70 px-3 py-2 text-sm font-medium text-navy-800 transition hover:border-navy-800 xl:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-[var(--color-line)] bg-white/95 backdrop-blur-xl xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-4 sm:px-8" aria-label="Móvil">
            {navigationGroups().map((group) => (
              <div key={group.name} className="border-b border-[var(--color-line)] py-3 last:border-0">
                <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                  {group.name}
                </p>
                {group.items.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`block px-1 py-2.5 text-base font-medium transition ${
                        active ? "text-navy-900" : "text-ink-soft hover:text-navy-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
