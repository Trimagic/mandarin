import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories } from "@/components/sections/landing-data";

export function ServicesSection() {
  return (
    <section id="services" className="px-8 py-[100px]">
      <div className="mandarin-container">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">Услуги и цены</p>
          <h2 className="mb-4 font-brand text-[38px] font-bold tracking-[-0.01em] text-[#F3EEE7]">
            Что мы чиним
          </h2>
          <p className="text-[16.5px] leading-[1.6] text-[#B8B0A4]">
            Финальная цена зависит от модели устройства и сложности неисправности — точную стоимость назовём после
            бесплатной диагностики.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <Card key={category.title} className="mandarin-card rounded-[20px] p-0 text-[#F3EEE7]">
              <CardHeader className="p-8 pb-0">
                <div className="mb-5 flex size-[52px] items-center justify-center rounded-[14px] bg-[#FF6A1F]/15 text-2xl">{category.icon}</div>
                <CardTitle className="font-brand text-[21px] font-bold">{category.title}</CardTitle>
                <p className="text-sm text-[#8A8278]">{category.description}</p>
              </CardHeader>
              <CardContent className="p-8 pt-5">
                <div>
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between gap-4 border-t border-white/10 py-[11px]">
                      <span className="text-[14.5px] text-[#D9D2C6]">{item.name}</span>
                      <span className="shrink-0 whitespace-nowrap text-[14.5px] font-bold text-[#FF8C42]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
