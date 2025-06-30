import Header from "@/components/header";
import Footer from "@/components/footer";
import PricingSection from "@/components/sections/pricing";
import AnimatedContent from "@/components/animated-content";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section id="pricing" className="py-20 sm:py-24">
            <div className="container mx-auto">
                <AnimatedContent>
                    <h1 className="text-4xl font-bold font-headline text-center sm:text-5xl lg:text-6xl">Pricing & Packages</h1>
                    <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                        Choose the perfect package for your project's needs. All prices are estimates and can be customized.
                    </p>
                </AnimatedContent>
                <PricingSection />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
