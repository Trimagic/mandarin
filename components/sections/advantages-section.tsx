import {
  BadgeCheck,
  BatteryCharging,
  Clock3,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

export function AdvantagesSection() {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-[100px] lg:px-8">
      <div className="mandarin-container">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.08em] text-[#FF8C42]">
            Преимущества
          </p>

          <h2 className="font-brand text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#F3EEE7] sm:text-[38px]">
            Почему выбирают Mandarin
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-6 text-[#8A8278] sm:text-[16px]">
            Мы делаем ремонт прозрачным: сначала диагностика, потом согласование
            цены и только после этого работа.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-[28px] border border-[#FF6A1F]/25 bg-[linear-gradient(145deg,#211812,#151110)] p-6 text-[#F3EEE7] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] lg:col-span-5 lg:min-h-[310px]">
            <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[#FF6A1F]/15 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex size-[58px] items-center justify-center rounded-[20px] border border-[#FF6A1F]/25 bg-[#FF6A1F]/12 text-[#FF8C42]">
                  <BadgeCheck className="size-7" />
                </div>

                <h3 className="max-w-[360px] font-brand text-[28px] font-bold leading-tight tracking-[-0.02em]">
                  Цена без сюрпризов после ремонта
                </h3>

                <p className="mt-4 max-w-[420px] text-sm leading-6 text-[#B8B0A4]">
                  Сначала называем стоимость и объясняем, что именно сломалось.
                  Без вашего согласия не добавляем лишние работы.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-[#131110]/70 p-4">
                  <div className="text-xs text-[#8A8278]">Диагностика</div>
                  <div className="mt-1 font-brand text-xl font-bold text-[#FF8C42]">
                    0 ₽
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#131110]/70 p-4">
                  <div className="text-xs text-[#8A8278]">Согласование</div>
                  <div className="mt-1 font-brand text-xl font-bold text-[#F3EEE7]">
                    до работ
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#171310] p-6 text-[#F3EEE7] shadow-[0_30px_90px_-55px_rgba(0,0,0,0.9)] lg:col-span-4 lg:min-h-[310px]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,106,31,0.75),transparent)]" />

            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex size-[54px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.04] text-[#FF8C42]">
                <Clock3 className="size-6" />
              </div>

              <div className="rounded-full border border-[#FF6A1F]/25 bg-[#FF6A1F]/10 px-3 py-1.5 text-xs font-bold text-[#FF9D5C]">
                от 40 минут
              </div>
            </div>

            <h3 className="font-brand text-[24px] font-bold leading-tight tracking-[-0.02em]">
              Срочный ремонт в день обращения
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#8A8278]">
              Экран, батарея, разъём зарядки и чистка часто выполняются при вас
              или в течение нескольких часов.
            </p>

            <div className="mt-7 space-y-2.5">
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full w-[84%] rounded-full bg-[#FF6A1F]" />
              </div>
              <div className="h-2 w-[68%] rounded-full bg-white/10" />
              <div className="h-2 w-[46%] rounded-full bg-white/10" />
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#1D1814,#141110)] p-6 text-[#F3EEE7] shadow-[0_30px_90px_-55px_rgba(0,0,0,0.9)] lg:col-span-3 lg:min-h-[310px]">
            <div className="mb-6 flex size-[54px] items-center justify-center rounded-[18px] border border-[#FF6A1F]/20 bg-[#FF6A1F]/10 text-[#FF8C42]">
              <ShieldCheck className="size-6" />
            </div>

            <h3 className="font-brand text-[24px] font-bold leading-tight tracking-[-0.02em]">
              Гарантия до 6 месяцев
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#8A8278]">
              Гарантия действует на выполненную работу и установленные детали.
            </p>

            <div className="mt-7 rounded-[22px] border border-[#FF6A1F]/25 bg-[#FF6A1F]/10 p-4">
              <div className="text-xs text-[#8A8278]">Срок гарантии</div>
              <div className="mt-1 font-brand text-[30px] font-bold leading-none text-[#FF8C42]">
                3–6 мес.
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-[#171310] p-6 text-[#F3EEE7] shadow-[0_30px_90px_-55px_rgba(0,0,0,0.9)] lg:col-span-4">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex size-[48px] shrink-0 items-center justify-center rounded-[16px] border border-[#FF6A1F]/20 bg-[#FF6A1F]/10 text-[#FF8C42]">
                <SearchCheck className="size-5" />
              </div>

              <div>
                <h3 className="text-[17px] font-extrabold leading-6">
                  Диагностика без обязательств
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#8A8278]">
                  Проверим устройство и скажем, есть ли смысл ремонтировать.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-bold text-[#D9D2C6]">
              Если цена не подходит — вы ничего не платите.
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,#201A15,#141110)] p-6 text-[#F3EEE7] shadow-[0_30px_90px_-55px_rgba(0,0,0,0.9)] lg:col-span-5">
            <div className="pointer-events-none absolute -bottom-20 -right-20 size-56 rounded-full bg-[#FF6A1F]/10 blur-3xl" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex size-[64px] shrink-0 items-center justify-center rounded-[22px] border border-[#FF6A1F]/20 bg-[#FF6A1F]/10 text-[#FF8C42]">
                <PackageCheck className="size-7" />
              </div>

              <div>
                <h3 className="font-brand text-[23px] font-bold leading-tight tracking-[-0.02em]">
                  Запчасти под ваш бюджет
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#8A8278]">
                  Предложим оригинал или premium-аналог и заранее покажем
                  разницу по цене.
                </p>
              </div>
            </div>

            <div className="relative mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-[#131110]/70 p-4">
                <BatteryCharging className="mb-3 size-5 text-[#FF8C42]" />
                <div className="text-xs text-[#8A8278]">Батареи</div>
                <div className="mt-1 text-sm font-extrabold">проверенные</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#131110]/70 p-4">
                <PackageCheck className="mb-3 size-5 text-[#FF8C42]" />
                <div className="text-xs text-[#8A8278]">Дисплеи</div>
                <div className="mt-1 text-sm font-extrabold">с гарантией</div>
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-[#171310] p-6 text-[#F3EEE7] shadow-[0_30px_90px_-55px_rgba(0,0,0,0.9)] lg:col-span-3">
            <div className="mb-5 flex size-[52px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.04] text-[#FF8C42]">
              <Truck className="size-6" />
            </div>

            <h3 className="text-[17px] font-extrabold leading-6">
              Выезд и доставка
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#8A8278]">
              Можем забрать устройство и вернуть после ремонта в удобное место.
            </p>

            <div className="mt-5 inline-flex rounded-full bg-[#FF6A1F]/10 px-3 py-1.5 text-xs font-bold text-[#FF9D5C]">
              от 3000 ₽ бесплатно
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}