"use client";

import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center justify-between gap-4 py-3">
        <a href="#topo" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.jpg"
            alt="Luck's Style"
            width={56}
            height={56}
            className="size-14 rounded-full bg-black object-cover"
            priority
          />
          <span>
            <strong className="block text-[12px] tracking-[0.16em] uppercase">{site.name}</strong>
            <span className="block text-[11px] text-muted">{site.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-[13px] text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-300 hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.booking}
            className="bg-gold px-4 py-2.5 text-[13px] font-medium text-black transition-transform duration-300 hover:scale-105"
          >
            Agendar
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center border border-line md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-4 flex-col gap-1">
              <span className={`h-px bg-ink transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`h-px bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-ink transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-paper transition-all duration-300 md:hidden ${
          open ? "max-h-80 border-t border-line opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col py-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-sm text-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
