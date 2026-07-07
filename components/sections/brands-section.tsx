import { brands } from "@/components/sections/landing-data";

export function BrandsSection() {
  return (
    <section className="px-8 pb-[100px]">
      <div className="mandarin-container text-center">
        <div className="mb-7 text-[13px] font-bold uppercase tracking-[0.08em] text-[#8A8278]">Часто ремонтируемые бренды</div>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {brands.map((brand) => (
            <span key={brand} className="font-brand text-xl font-bold text-[#5A544A]">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
