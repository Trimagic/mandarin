import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/components/sections/landing-data";

export function FaqSection() {
  return (
    <section id="faq" className="px-8 pb-[100px]">
      <div className="mx-auto max-w-[840px]">
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">FAQ</p>
          <h2 className="font-brand text-4xl font-bold tracking-[-0.01em] text-[#F3EEE7]">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" defaultValue="0" collapsible className="space-y-3">
          {faqData.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={String(index)}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A1613] px-0"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-[15.5px] font-bold text-[#F3EEE7] hover:text-[#FF8C42] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-[22px] text-[14.5px] leading-[1.6] text-[#A8A29B]">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
