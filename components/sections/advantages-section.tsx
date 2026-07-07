import { advantages } from "@/components/sections/landing-data";

export function AdvantagesSection() {
  return (
    <section className="px-8 pb-[100px]">
      <div className="mandarin-container rounded-[28px] border border-white/10 bg-[#171310] px-7 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">Преимущества</p>
          <h2 className="font-brand text-[34px] font-bold tracking-[-0.01em] text-[#F3EEE7]">
            Почему выбирают Mandarin
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div key={item.title} className="rounded-[18px] border border-white/10 bg-[#1E1914] p-6">
              <div className="mb-3.5 text-[22px]">{item.icon}</div>
              <h3 className="mb-1.5 text-base font-extrabold text-[#F3EEE7]">{item.title}</h3>
              <p className="text-[13.5px] leading-[1.5] text-[#8A8278]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
