import {
  Car,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Гарантия 6 месяцев",
    subtitle: "На все виды ремонта",
  },
  {
    icon: SearchCheck,
    title: "Бесплатная диагностика",
    subtitle: "Без скрытых платежей",
  },
  {
    icon: Wrench,
    title: "Качественные запчасти",
    subtitle: "Оригинал или premium-аналог",
  },
  {
    icon: Car,
    title: "Выезд и доставка",
    subtitle: "По Минску от 120 BYN бесплатно",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-[#161311]/95">
      <div className="mandarin-container grid gap-x-6 gap-y-5 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-6">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex min-w-0 items-center gap-3 lg:justify-center"
            >
              <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[13px] border border-[#FF6A1F]/20 bg-[#FF6A1F]/10 text-[#FF8C42] shadow-[0_10px_30px_-18px_rgba(255,106,31,0.9)]">
                <Icon className="size-[20px]" />
              </div>

              <div className="min-w-0">
                <div className="text-[14px] font-extrabold leading-5 text-[#F3EEE7]">
                  {item.title}
                </div>

                <div className="mt-0.5 text-[12.5px] leading-4 text-[#8A8278]">
                  {item.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
