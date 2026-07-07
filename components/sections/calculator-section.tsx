"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { DeviceKey, IssueKey, issueLabels, prices } from "@/components/sections/landing-data";
import { cn } from "@/lib/utils";

export function CalculatorSection() {
  const [device, setDevice] = useState<DeviceKey>("phone");
  const [issue, setIssue] = useState<IssueKey>("screen");

  const estimate = useMemo(() => {
    const value = prices[device][issue];

    if (!value) {
      return {
        text: "Уточним после диагностики",
        note: "Бесплатно и без обязательств — точная цена после осмотра",
      };
    }

    return {
      text: `${value[0].toLocaleString("ru-RU")} – ${value[1].toLocaleString("ru-RU")} ₽`,
      note: "Финальная цена зависит от модели устройства",
    };
  }, [device, issue]);

  return (
    <section id="calculator" className="px-8 pb-[100px]">
      <div className="mx-auto max-w-[1000px] rounded-[28px] border border-[#FF6A1F]/20 bg-[linear-gradient(150deg,#1E1712,#181310)] p-8 text-[#F3EEE7] sm:p-12">
        <div className="mb-9 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">Калькулятор стоимости</p>
          <h2 className="m-0 font-brand text-[32px] font-bold tracking-[-0.01em]">Узнайте примерную цену за 10 секунд</h2>
        </div>

        <div className="mb-7">
          <div className="mb-3 text-[13.5px] font-bold uppercase tracking-[0.04em] text-[#8A8278]">
            1. Тип устройства
          </div>
          <div className="flex flex-wrap gap-3">
            {Object.entries(prices).map(([key, item]) => (
              <Button
                key={key}
                type="button"
                onClick={() => setDevice(key as DeviceKey)}
                className={cn(
                  "h-auto rounded-[10px] border px-[18px] py-[11px] font-sans text-sm font-bold",
                  device === key
                    ? "border-[#FF6A1F] bg-[#FF6A1F] text-[#131110] hover:bg-[#FF8C42]"
                    : "border-white/15 bg-[#131110] text-[#C9C2B8] hover:bg-white/10 hover:text-[#F3EEE7]"
                )}
              >
                <span>{item.icon}</span>
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-3 text-[13.5px] font-bold uppercase tracking-[0.04em] text-[#8A8278]">
            2. Что случилось
          </div>
          <div className="flex flex-wrap gap-3">
            {Object.entries(issueLabels).map(([key, label]) => (
              <Button
                key={key}
                type="button"
                onClick={() => setIssue(key as IssueKey)}
                className={cn(
                  "h-auto rounded-[10px] border px-[18px] py-[11px] font-sans text-sm font-bold",
                  issue === key
                    ? "border-[#FF6A1F] bg-[#FF6A1F] text-[#131110] hover:bg-[#FF8C42]"
                    : "border-white/15 bg-[#131110] text-[#C9C2B8] hover:bg-white/10 hover:text-[#F3EEE7]"
                )}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[18px] border border-white/10 bg-[#131110] px-8 py-7">
          <div>
            <div className="mb-1.5 text-[13px] text-[#8A8278]">Примерная стоимость ремонта</div>
            <div className="font-brand text-[32px] font-bold text-[#FF8C42]">{estimate.text}</div>
            <div className="mt-1.5 text-[12.5px] text-[#655F56]">{estimate.note}</div>
          </div>
          <Button
            className="h-auto whitespace-nowrap rounded-xl bg-[#FF6A1F] px-[26px] py-[15px] text-[15px] font-extrabold text-[#131110] hover:bg-[#FF8C42]"
            asChild
          >
            <a href="#form">Оставить заявку на ремонт</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
