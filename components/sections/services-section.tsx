import {
  BatteryCharging,
  Check,
  Cpu,
  Droplets,
  Fan,
  HardDrive,
  Keyboard,
  Laptop,
  PlugZap,
  Smartphone,
  Sparkles,
  Tablet,
} from "lucide-react";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-[100px] lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,106,31,0.1),transparent_68%)] blur-2xl" />

      <div className="mandarin-container relative">
        <div className="mx-auto mb-12 max-w-[720px] text-center sm:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.08em] text-[#FF8C42]">
            Услуги и цены
          </p>

          <h2 className="mb-4 font-brand text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#F3EEE7] sm:text-[38px]">
            Ремонтируем технику без лишних доплат
          </h2>

          <p className="mx-auto max-w-[620px] text-[15.5px] leading-[1.65] text-[#B8B0A4] sm:text-[16.5px]">
            Сначала диагностика и согласование цены. Потом ремонт. Если
            стоимость не подходит — вы ничего не платите.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] p-5 text-[#F3EEE7] shadow-[0_24px_80px_-44px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-[#FF6A1F]/35 sm:p-6">
            <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-[#FF6A1F]/12 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 flex size-[58px] items-center justify-center rounded-[20px] border border-[#FF6A1F]/25 bg-[#FF6A1F]/15 text-[#FF8C42]">
                  <Smartphone className="size-7" />
                </div>

                <h3 className="font-brand text-[25px] font-bold tracking-[-0.02em]">
                  Смартфоны
                </h3>

                <p className="mt-2 text-sm leading-5 text-[#8A8278]">
                  iPhone, Samsung, Xiaomi, Honor и другие модели.
                </p>
              </div>

              <div className="rounded-full border border-[#FF6A1F]/25 bg-[#FF6A1F]/10 px-3 py-1.5 text-xs font-bold text-[#FF9D5C]">
                от 40 мин
              </div>
            </div>

            <div className="relative mt-7 rounded-[24px] border border-[#FF6A1F]/25 bg-[#FF6A1F]/10 p-5">
              <div className="text-xs font-bold uppercase tracking-[0.06em] text-[#8A8278]">
                Частый ремонт
              </div>

              <div className="mt-2 font-brand text-[26px] font-bold leading-none text-[#F3EEE7]">
                Замена экрана
              </div>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs text-[#8A8278]">Стоимость</div>
                  <div className="mt-1 font-brand text-[30px] font-bold leading-none text-[#FF8C42]">
                    от 140 BYN
                  </div>
                </div>

                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#131110]/70 text-[#FF8C42]">
                  <Sparkles className="size-5" />
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <ServiceRow
                icon={<BatteryCharging className="size-4" />}
                title="Замена батареи"
                price="от 70 BYN"
              />

              <ServiceRow
                icon={<PlugZap className="size-4" />}
                title="Разъём зарядки"
                price="от 60 BYN"
              />

              <ServiceRow
                icon={<Droplets className="size-4" />}
                title="После воды"
                price="от 90 BYN"
              />
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#171412] p-5 text-[#F3EEE7] shadow-[0_24px_80px_-44px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-[#FF6A1F]/35 sm:p-6">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,106,31,0.7),transparent)]" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 flex size-[58px] items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.04] text-[#FF8C42]">
                  <Laptop className="size-7" />
                </div>

                <h3 className="font-brand text-[25px] font-bold tracking-[-0.02em]">
                  Ноутбуки
                </h3>

                <p className="mt-2 text-sm leading-5 text-[#8A8278]">
                  Диагностика питания, охлаждения, матрицы и накопителей.
                </p>
              </div>

              <div className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#8A8278] ring-1 ring-white/10">
                service lab
              </div>
            </div>

            <div className="mt-7 rounded-[24px] border border-white/10 bg-[#0F0D0C] p-5">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.06em] text-[#8A8278]">
                    Техобслуживание
                  </div>

                  <div className="mt-2 font-brand text-[24px] font-bold leading-tight text-[#F3EEE7]">
                    Чистка и термопаста
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl bg-[#FF6A1F]/10 px-3 py-2 text-sm font-extrabold text-[#FF8C42]">
                  от 45 BYN
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full w-[86%] rounded-full bg-[#FF6A1F]" />
                </div>
                <div className="h-2 w-[74%] rounded-full bg-white/10" />
                <div className="h-2 w-[52%] rounded-full bg-white/10" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <LaptopMiniItem icon={<Fan className="size-4" />} label="Охлаждение" />
                <LaptopMiniItem icon={<Cpu className="size-4" />} label="Питание" />
                <LaptopMiniItem icon={<HardDrive className="size-4" />} label="Данные" />
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <LaptopServiceRow
                icon={<Laptop className="size-4" />}
                title="Замена матрицы"
                price="от 180 BYN"
              />

              <LaptopServiceRow
                icon={<Keyboard className="size-4" />}
                title="Замена клавиатуры"
                price="от 90 BYN"
              />
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,#201A15,#141110)] p-5 text-[#F3EEE7] shadow-[0_24px_80px_-44px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-[#FF6A1F]/35 sm:p-6">
            <div className="pointer-events-none absolute -bottom-24 -right-20 size-56 rounded-full bg-[#FF6A1F]/12 blur-3xl" />

            <div className="relative">
              <div className="mb-4 flex size-[58px] items-center justify-center rounded-[20px] border border-[#FF6A1F]/20 bg-[#FF6A1F]/12 text-[#FF8C42]">
                <Tablet className="size-7" />
              </div>

              <h3 className="font-brand text-[25px] font-bold tracking-[-0.02em]">
                Планшеты
              </h3>

              <p className="mt-2 text-sm leading-5 text-[#8A8278]">
                iPad и Android-планшеты: экран, батарея, разъём, корпус.
              </p>
            </div>

            <div className="relative mt-7 overflow-hidden rounded-[24px] border border-white/10 bg-[#131110] p-5">
              <div className="absolute -right-8 -top-8 size-28 rounded-full bg-[#FF6A1F]/10 blur-2xl" />

              <div className="relative flex items-center gap-4">
                <div className="flex h-[108px] w-[78px] shrink-0 items-center justify-center rounded-[18px] border-[6px] border-[#2A2520] bg-[#0C0B0A]">
                  <div className="h-[70px] w-[44px] rounded-xl bg-[linear-gradient(160deg,rgba(255,106,31,0.35),rgba(255,255,255,0.04))]" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-[0.06em] text-[#8A8278]">
                    Аккуратная замена
                  </div>

                  <div className="mt-2 font-brand text-[24px] font-bold leading-tight text-[#F3EEE7]">
                    Экран или стекло
                  </div>

                  <div className="mt-3 inline-flex rounded-full bg-[#FF6A1F]/10 px-3 py-1 text-sm font-extrabold text-[#FF8C42]">
                    от 120 BYN
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <TabletPriceCard
                icon={<BatteryCharging className="size-5" />}
                title="Батарея"
                price="от 80 BYN"
              />

              <TabletPriceCard
                icon={<PlugZap className="size-5" />}
                title="Разъём"
                price="от 60 BYN"
              />

              <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FF6A1F] text-[#131110]">
                    <Check className="size-3.5" />
                  </div>

                  <div>
                    <div className="text-sm font-bold text-[#F3EEE7]">
                      Проверяем перед выдачей
                    </div>

                    <div className="mt-1 text-[12.5px] leading-5 text-[#8A8278]">
                      Сенсор, зарядку, динамики, Wi-Fi и состояние корпуса.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-8 max-w-[760px] rounded-[22px] border border-white/10 bg-[#161311] p-5 text-center sm:mt-10 sm:p-6">
          <div className="font-brand text-xl font-bold text-[#F3EEE7]">
            Не знаете, что именно сломалось?
          </div>

          <p className="mx-auto mt-2 max-w-[560px] text-sm leading-6 text-[#8A8278]">
            Опишите симптомы мастеру — часто причину можно определить ещё до
            визита в сервис.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  icon,
  title,
  price,
}: {
  icon: React.ReactNode;
  title: string;
  price: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#131110]/70 px-4 py-3">
      <div className="flex min-w-0 items-center gap-3 text-[#FF8C42]">
        <span className="shrink-0">{icon}</span>
        <span className="truncate text-sm text-[#D9D2C6]">{title}</span>
      </div>

      <span className="whitespace-nowrap text-sm font-bold text-[#FF8C42]">
        {price}
      </span>
    </div>
  );
}

function LaptopMiniItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
      <div className="mx-auto mb-2 flex justify-center text-[#FF8C42]">
        {icon}
      </div>
      <div className="text-[11px] text-[#8A8278]">{label}</div>
    </div>
  );
}

function LaptopServiceRow({
  icon,
  title,
  price,
}: {
  icon: React.ReactNode;
  title: string;
  price: string;
}) {
  return (
    <div className="grid grid-cols-[32px_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
      <div className="flex size-8 items-center justify-center rounded-xl bg-[#FF6A1F]/10 text-[#FF8C42]">
        {icon}
      </div>

      <span className="min-w-0 truncate text-sm text-[#D9D2C6]">{title}</span>

      <span className="whitespace-nowrap text-sm font-bold text-[#FF8C42]">
        {price}
      </span>
    </div>
  );
}

function TabletPriceCard({
  icon,
  title,
  price,
}: {
  icon: React.ReactNode;
  title: string;
  price: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-3 text-[#FF8C42]">{icon}</div>
      <div className="text-xs text-[#8A8278]">{title}</div>
      <div className="mt-1 text-sm font-extrabold text-[#F3EEE7]">
        {price}
      </div>
    </div>
  );
}
