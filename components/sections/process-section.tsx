import { processSteps } from "@/components/sections/landing-data";

export function ProcessSection() {
  return (
    <section id="process" className="px-8 pb-[100px]">
      <div className="mandarin-container">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">Как мы работаем</p>
          <h2 className="font-brand text-[38px] font-bold tracking-[-0.01em] text-[#F3EEE7]">
            Четыре простых шага
          </h2>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-[26px] z-0 hidden h-0.5 bg-[repeating-linear-gradient(90deg,rgba(255,106,31,0.3)_0_8px,transparent_8px_16px)] lg:block" />
          {processSteps.map((step) => (
            <div key={step.number} className="relative z-10">
              <div className="mb-5 flex size-[52px] items-center justify-center rounded-2xl bg-[#FF6A1F] font-brand text-xl font-extrabold text-[#131110]">
                {step.number}
              </div>
              <h3 className="mb-2 text-[17px] font-extrabold text-[#F3EEE7]">{step.title}</h3>
              <p className="text-sm leading-[1.55] text-[#8A8278]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
