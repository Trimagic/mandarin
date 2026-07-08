import {
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -right-[120px] -top-[140px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,106,31,0.35),rgba(255,106,31,0)_70%)] blur-[12px]" />
      <div className="pointer-events-none absolute -bottom-[170px] -left-[140px] size-[430px] rounded-full bg-[radial-gradient(circle,rgba(255,106,31,0.18),rgba(255,106,31,0)_70%)] blur-[12px]" />

      <div className="mandarin-container relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:gap-14">
        <div className="max-w-[720px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6A1F]/30 bg-[#FF6A1F]/10 px-3.5 py-[7px] text-[13px] font-bold text-[#FF9D5C]">
            <span className="size-[7px] rounded-full bg-[#FF6A1F]" />
            Диагностика бесплатно · Ответ за 15 минут
          </div>

          <h1 className="font-brand text-[40px] font-bold leading-[1.07] tracking-[-0.03em] text-[#F3EEE7] sm:text-[54px] lg:text-[60px]">
            Честный ремонт

            <br />
            телефонов и ноутбуков
          </h1>

          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#B8B0A4] sm:text-xl">
            Ремонт смартфонов, ноутбуков и планшетов с гарантией до 6 месяцев.
            Оригинальные запчасти, опытные мастера и честная диагностика — без
            «нашли ещё пять поломок».
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <Button
              className="h-14 rounded-xl bg-[#FF6A1F] px-7 text-base font-extrabold text-[#131110] hover:bg-[#FF8C42]"
              asChild
            >
              <a href="#calculator">Рассчитать стоимость</a>
            </Button>

            <Button
              className="h-14 rounded-xl border-white/15 bg-transparent px-7 text-base font-bold text-[#F3EEE7] hover:bg-white/10 hover:text-[#F3EEE7]"
              variant="outline"
              asChild
            >
              <a href="#services" className="gap-2">
                Смотреть услуги и цены
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-12 grid max-w-[620px] grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              ["12 000+", "устройств отремонтировано"],
              ["4.9 / 5", "средняя оценка клиентов"],
              ["6 мес.", "гарантии на ремонт"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-white/10 pl-4">
                <div className="font-brand text-[28px] font-bold leading-none text-[#FF8C42]">
                  {value}
                </div>
                <div className="mt-2 text-sm leading-5 text-[#8A8278]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px] lg:mx-0 lg:justify-self-end">
          <div className="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-[#FF6A1F]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 size-36 rounded-full bg-[#FF8C42]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(160deg,#1F1A16,#151210)] p-5 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)] sm:p-6">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle,rgba(255,106,31,0.16),transparent_65%)]" />

            <div className="relative mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-bold text-[#FF8C42]">
                  Быстрая заявка
                </div>
                <div className="mt-1 font-brand text-2xl font-bold tracking-[-0.01em] text-[#F3EEE7]">
                  Ремонт сегодня
                </div>
              </div>

              <div className="w-fit rounded-full border border-[#FF6A1F]/25 bg-[#FF6A1F]/10 px-3 py-1.5 text-xs font-bold text-[#FF9D5C]">
                мастер свободен
              </div>
            </div>

            <div className="relative rounded-[24px] border border-white/10 bg-[#131110] p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-[56px_minmax(0,1fr)] sm:items-start">
                <div className="flex size-[56px] shrink-0 items-center justify-center rounded-2xl bg-[#FF6A1F]/15 text-[#FF8C42]">
                  <Smartphone className="size-6" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm text-[#8A8278]">
                    Популярный ремонт
                  </div>

                  <div className="mt-1 font-brand text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-[#F3EEE7]">
                    Замена дисплея
                  </div>

                  <div className="mt-1 text-sm leading-5 text-[#B8B0A4]">
                    iPhone · Samsung · Xiaomi
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-[#FF6A1F]/25 bg-[#FF6A1F]/10 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-xs text-[#8A8278]">
                      Примерная цена
                    </div>

                    <div className="mt-1 font-brand text-[28px] font-bold leading-none tracking-[-0.01em] text-[#FF8C42] sm:text-[30px]">
                      от 1 900 ₽
                    </div>
                  </div>

                  <div className="w-fit rounded-full bg-[#FF6A1F]/15 px-3 py-1 text-xs font-bold text-[#FF9D5C]">
                    от 40 минут
                  </div>
                </div>

                <div className="mt-3 text-[12.5px] leading-5 text-[#8A8278]">
                  Точную стоимость назовём после бесплатной диагностики.
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                {
                  icon: Clock,
                  title: "Срок",
                  value: "от 40 мин",
                  accent: false,
                },
                {
                  icon: ShieldCheck,
                  title: "Гарантия",
                  value: "до 6 мес.",
                  accent: false,
                },
                {
                  icon: Wrench,
                  title: "Диагностика",
                  value: "Бесплатно",
                  accent: true,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="min-w-0 rounded-[16px] border border-white/10 bg-white/[0.035] p-3 text-center sm:rounded-2xl sm:p-4 sm:text-left"
                  >
                    <div className="mb-2 flex justify-center sm:mb-3 sm:justify-start">
                      <Icon className="size-4 text-[#FF8C42] sm:size-5" />
                    </div>

                    <div className="truncate text-[11px] leading-none text-[#8A8278] sm:text-xs sm:leading-normal">
                      {item.title}
                    </div>

                    <div
                      className={cn(
                        "mt-1 whitespace-nowrap text-[12px] font-extrabold leading-tight sm:text-sm",
                        item.accent ? "text-[#FF8C42]" : "text-[#F3EEE7]"
                      )}
                    >
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 space-y-3 rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
              {[
                "Сначала согласовываем цену, потом ремонтируем",
                "Без скрытых доплат после диагностики",
                "Выдаём гарантию на работу и запчасти",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FF6A1F] text-[#131110]">
                    <Check className="size-3.5" />
                  </div>
                  <div className="text-[13.5px] leading-5 text-[#C9C2B8]">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="mt-5 h-14 w-full rounded-2xl bg-[#FF6A1F] text-base font-extrabold text-[#131110] hover:bg-[#FF8C42]"
              asChild
            >
              <a href="#form">Оставить заявку на ремонт</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}