import { AdvantagesSection } from "@/components/sections/advantages-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { CalculatorSection } from "@/components/sections/calculator-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustBar } from "@/components/sections/trust-bar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#131110] text-[#F3EEE7]">
      <SiteHeader />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <CalculatorSection />
      <ProcessSection />
      <AdvantagesSection />
      <BrandsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
