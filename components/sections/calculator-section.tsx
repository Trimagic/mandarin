"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Laptop, Smartphone, Tablet } from "lucide-react";

import {
  DeviceKey,
  IssueKey,
  issueLabels,
  prices,
} from "@/components/sections/landing-data";
import { cn } from "@/lib/utils";

const deviceIcons: Record<DeviceKey, LucideIcon> = {
  phone: Smartphone,
  laptop: Laptop,
  tablet: Tablet,
};

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
      text: `от ${value[0].toLocaleString("ru-RU")} ₽`,
      note: `Обычно до ${value[1].toLocaleString(
        "ru-RU"
      )} ₽ · финальная цена зависит от модели`,
    };
  }, [device, issue]);

  return (
    <section
      id="calculator"
      className="px-4 pb-20 sm:px-6 sm:pb-[100px] lg:px-8"
    >
      <div className="mx-auto max-w-[1000px] overflow-hidden rounded-[28px] border border-[#FF6A1F]/20 bg-[linear-gradient(150deg,#1E1712,#181310)] p-5 text-[#F3EEE7] shadow-[0_30px_90px_-45px_rgba(0,0,0,0.9)] sm:p-8 lg:p-12">
        <div className="mb-8 text-center sm:mb-9">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">
            Калькулятор стоимости
          </div>

          <h2 className="m-0 font-brand text-[28px] font-bold leading-tight tracking-[-0.01em] sm:text-[32px]">
            Узнайте примерную цену за 10 секунд
          </h2>

          <p className="mx-auto mt-3 max-w-[560px] text-sm leading-6 text-[#8A8278]">
            Выберите тип устройства и проблему — покажем ориентир по стоимости
            до диагностики.
          </p>
        </div>

        <div className="mb-7">
          <div className="mb-3 text-[13.5px] font-bold uppercase tracking-[0.04em] text-[#8A8278]">
            1. Тип устройства
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Object.entries(prices).map(([key, item]) => {
              const Icon = deviceIcons[key as DeviceKey];

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setDevice(key as DeviceKey)}
                  className={cn(
                    "inline-flex h-12 items-center justify-center gap-2 rounded-xl border px-4 font-sans text-sm font-bold leading-none transition-colors",
                    device === key
                      ? "border-[#FF6A1F] bg-[#FF6A1F] text-[#131110] hover:bg-[#FF8C42]"
                      : "border-white/15 bg-[#131110] text-[#C9C2B8] hover:bg-white/10 hover:text-[#F3EEE7]"
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-3 text-[13.5px] font-bold uppercase tracking-[0.04em] text-[#8A8278]">
            2. Что случилось
          </div>

          <div className="flex flex-wrap gap-3">
            {Object.entries(issueLabels).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setIssue(key as IssueKey)}
                className={cn(
                  "inline-flex items-center justify-center rounded-xl border px-4 py-3 font-sans text-sm font-bold leading-none transition-colors",
                  issue === key
                    ? "border-[#FF6A1F] bg-[#FF6A1F] text-[#131110] hover:bg-[#FF8C42]"
                    : "border-white/15 bg-[#131110] text-[#C9C2B8] hover:bg-white/10 hover:text-[#F3EEE7]"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[22px] border border-white/10 bg-[#131110] p-5 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="mb-1.5 text-[13px] text-[#8A8278]">
                Ориентир по стоимости
              </div>

              <div className="font-brand text-[34px] font-bold leading-none tracking-[-0.02em] text-[#FF8C42] sm:text-[40px]">
                {estimate.text}
              </div>

              <div className="mt-2 text-[12.5px] leading-5 text-[#655F56]">
                {estimate.note}
              </div>
            </div>

            <a
              href="#form"
              className="inline-flex h-14 shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-[#FF6A1F] px-6 text-[15px] font-extrabold leading-none text-[#131110] transition-colors hover:bg-[#FF8C42]"
            >
              Оставить заявку на ремонт
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}