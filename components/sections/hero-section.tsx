import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroTimeline } from "@/components/sections/landing-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-8 py-20 lg:py-24">
      <div className="mandarin-blob absolute -right-[100px] -top-[120px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,106,31,0.35),rgba(255,106,31,0)_70%)] blur-[10px]" />
      <div className="absolute -bottom-[160px] -left-[140px] size-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,106,31,0.18),rgba(255,106,31,0)_70%)] blur-[10px]" />

      <div className="mandarin-container relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6A1F]/30 bg-[#FF6A1F]/10 px-3.5 py-[7px] text-[13px] font-bold text-[#FF9D5C]">
            <span className="size-[7px] rounded-full bg-[#FF6A1F]" />
            Диагностика бесплатно · Ответ за 15 минут
          </div>
          <h1 className="font-brand text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-[#F3EEE7] sm:text-[56px]">
            Чиним технику,
            <br />
            которой вы доверяете
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#B8B0A4] sm:text-xl">
            Ремонт смартфонов, ноутбуков и планшетов с гарантией до 6 месяцев. Оригинальные запчасти,
            опытные мастера и честная диагностика — без «нашли ещё пять поломок».
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button className="h-14 rounded-xl bg-[#FF6A1F] px-7 text-base font-extrabold text-[#131110] hover:bg-[#FF8C42]" asChild>
              <a href="#calculator">Рассчитать стоимость</a>
            </Button>
            <Button className="h-14 rounded-xl border-white/15 bg-transparent px-7 text-base font-bold text-[#F3EEE7] hover:bg-white/10 hover:text-[#F3EEE7]" variant="outline" asChild>
              <a href="#services">
                Смотреть услуги и цены
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-9">
            {[
              ["12 000+", "устройств отремонтировано"],
              ["4.9 / 5", "средняя оценка клиентов"],
              ["6 мес.", "гарантии на ремонт"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-brand text-[28px] font-bold text-[#FF8C42]">{value}</div>
                <div className="text-sm text-[#8A8278]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl border border-white/10 bg-[linear-gradient(160deg,#1E1A17,#171412)] p-9 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-brand text-[15px] font-bold">Статус ремонта</span>
              <span className="rounded-full bg-[#FF6A1F]/15 px-2.5 py-1 text-xs font-bold text-[#FF9D5C]">В работе</span>
            </div>

            <div className="space-y-0">
              {heroTimeline.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[24px_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className={item.done ? "mt-1 size-3 rounded-full bg-[#FF6A1F]" : "mt-1 size-3 rounded-full border-2 border-[#FF6A1F] bg-[#FF6A1F]/30"} />
                    {index < heroTimeline.length - 1 && <span className="min-h-6 flex-1 w-0.5 bg-white/10" />}
                  </div>
                  <div className="pb-5">
                    <div className={item.done ? "text-[14.5px] font-bold text-[#F3EEE7]" : "text-[14.5px] font-bold text-[#8A8278]"}>{item.title}</div>
                    <div className="mt-0.5 text-[13px] text-[#8A8278]">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-between rounded-[14px] border border-dashed border-[#FF6A1F]/35 bg-[#FF6A1F]/10 p-4">
              <div>
                <div className="text-xs text-[#8A8278]">Замена дисплея · iPhone 13</div>
                <div className="mt-0.5 font-brand text-xl font-bold text-[#FF8C42]">от 4 900 ₽</div>
              </div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#FF6A1F]/15 text-xl text-[#FF8C42]">
                <Check className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
