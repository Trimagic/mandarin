import { processSteps } from "@/components/sections/landing-data";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="px-4 pb-20 sm:px-6 sm:pb-[100px] lg:px-8"
    >
      <div className="mandarin-container">
        <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">
            Как мы работаем
          </p>

          <h2 className="font-brand text-[32px] font-bold leading-tight tracking-[-0.01em] text-[#F3EEE7] sm:text-[38px]">
            Четыре простых шага
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-[26px] z-0 hidden h-0.5 bg-[repeating-linear-gradient(90deg,rgba(255,106,31,0.36)_0_8px,transparent_8px_16px)] lg:block" />

          <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="text-left sm:text-center lg:px-4"
              >
                <div className="mb-5 flex size-[52px] items-center justify-center rounded-2xl bg-[#FF6A1F] font-brand text-xl font-extrabold text-[#131110] shadow-[0_16px_40px_-22px_rgba(255,106,31,0.95)] sm:mx-auto">
                  {step.number}
                </div>

                <h3 className="mb-2 text-[17px] font-extrabold leading-6 text-[#F3EEE7]">
                  {step.title}
                </h3>

                <p className="mx-auto max-w-[230px] text-sm leading-[1.6] text-[#8A8278] sm:max-w-[250px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}