"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="form" className="px-8 pb-[100px]">
      <div className="mandarin-container">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#FF6A1F]/20 bg-[linear-gradient(150deg,#1E1712,#181310)] p-8 sm:p-11">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">Заявка на ремонт</p>
            <h2 className="mb-2.5 font-brand text-[28px] font-bold tracking-[-0.01em] text-[#F3EEE7]">
              Оставьте заявку — перезвоним за 15 минут
            </h2>
            <p className="mb-7 text-[14.5px] text-[#8A8278]">
              Расскажем точную стоимость и запишем на удобное время.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-[#FF6A1F]/30 bg-[#FF6A1F]/10 p-6 text-center">
                <div className="mb-2 text-3xl">✓</div>
                <div className="text-lg font-extrabold text-[#F3EEE7]">Спасибо! Заявка принята</div>
                <div className="mt-1 text-sm text-[#B8B0A4]">Мы свяжемся с вами в ближайшее время</div>
              </div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                <div className="mb-3.5 grid gap-3.5 sm:grid-cols-2">
                  <Input className="h-[50px] rounded-[10px] border-white/15 bg-[#131110] px-4 text-[14.5px] text-[#F3EEE7] placeholder:text-[#655F56]" placeholder="Ваше имя" />
                  <Input className="h-[50px] rounded-[10px] border-white/15 bg-[#131110] px-4 text-[14.5px] text-[#F3EEE7] placeholder:text-[#655F56]" placeholder="Телефон" type="tel" />
                </div>
                <Input className="mb-3.5 h-[50px] rounded-[10px] border-white/15 bg-[#131110] px-4 text-[14.5px] text-[#F3EEE7] placeholder:text-[#655F56]" placeholder="Устройство (например, iPhone 13)" />
                <Textarea className="mb-5 min-h-[92px] resize-y rounded-[10px] border-white/15 bg-[#131110] px-4 py-3 text-[14.5px] text-[#F3EEE7] placeholder:text-[#655F56]" placeholder="Опишите проблему" />
                <Button className="h-[54px] w-full rounded-xl bg-[#FF6A1F] text-[15.5px] font-extrabold text-[#131110] hover:bg-[#FF8C42]">
                  Отправить заявку
                </Button>
                <p className="mt-4 text-center text-xs leading-5 text-[#655F56]">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки данных
                </p>
              </form>
            )}
          </div>

          <div id="contacts" className="grid gap-5">
            <div className="mandarin-card flex-1 rounded-3xl p-9">
              <div className="mb-5 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">Контакты</div>
              <div className="space-y-5">
                {[
                  ["📍", "г. Минск, ул. Примерная, 12", "Ежедневно, 09:00–21:00"],
                  ["📞", "+375 (29) 123-45-67", "Звонок или WhatsApp"],
                  ["✉️", "hello@mandarin-service.by", "Ответим в течение дня"],
                ].map(([icon, title, subtitle]) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#FF6A1F]/15 text-[17px]">{icon}</div>
                    <div>
                      <div className="font-bold text-[#F3EEE7]">{title}</div>
                      <div className="mt-1 text-sm text-[#8A8278]">{subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mandarin-gradient-card mandarin-grid-bg relative flex min-h-[180px] flex-1 items-center justify-center overflow-hidden rounded-3xl p-8">
              <div className="relative text-center text-[13.5px] text-[#8A8278]">
                <div className="mb-2 text-[26px]">🗺️</div>
                Карта проезда — уточняется
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
