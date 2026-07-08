"use client";

import { useState } from "react";

import { MandarinLogo } from "@/components/brand/mandarin-logo";
import { Button } from "@/components/ui/button";
import { navItems } from "@/components/sections/landing-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#131110]/90 backdrop-blur-xl">
      <div className="mandarin-container flex items-center justify-between gap-6 px-5 py-[18px] sm:px-8">
        <a href="#" aria-label="Mandarin">
          <MandarinLogo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] font-semibold text-[#C9C2B8] transition-colors hover:text-[#F3EEE7]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+375291234567" className="hidden text-[15px] font-bold text-[#F3EEE7] sm:block">
            +375 (29) 123-45-67
          </a>
          <Button className="hidden h-10 rounded-[10px] bg-[#FF6A1F] px-5 text-sm font-extrabold text-[#131110] hover:bg-[#FF8C42] sm:inline-flex" asChild>
            <a href="#form">Рассчитать стоимость</a>
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="border-white/15 bg-transparent text-[#F3EEE7] hover:bg-white/10 hover:text-[#F3EEE7] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Открыть меню"
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#131110] px-8 pb-5 pt-2 lg:hidden">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2.5 text-[15px] font-semibold text-[#C9C2B8] hover:text-[#F3EEE7]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
