import { MandarinLogo } from "@/components/brand/mandarin-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mandarin-container flex flex-wrap items-center justify-between gap-4">
        <MandarinLogo size="sm" />
        <div className="text-sm text-[#655F56]">© 2026 Mandarin Service. Ремонт смартфонов, ноутбуков и планшетов.</div>
        <div className="flex gap-5">
          <a href="#" className="text-sm text-[#8A8278] transition-colors hover:text-[#FF8C42]">
            Политика конфиденциальности
          </a>
          <a href="#" className="text-sm text-[#8A8278] transition-colors hover:text-[#FF8C42]">
            Оферта
          </a>
        </div>
      </div>
    </footer>
  );
}
