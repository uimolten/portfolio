import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import FaqSection from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";
import PortfolioCta from "@/components/sections/portfolio-cta";
import PricingCta from "@/components/sections/pricing-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PortfolioCta />
        <PricingCta />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
