import { trustBadges } from "@/components/sections/landing-data";

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-[#161311]">
      <div className="mandarin-container grid gap-6 px-8 py-7 sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[11px] bg-[#FF6A1F]/10 text-[19px]">{item.icon}</div>
            <div>
              <div className="text-[14.5px] font-bold text-[#F3EEE7]">{item.title}</div>
              <div className="text-[12.5px] text-[#8A8278]">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
