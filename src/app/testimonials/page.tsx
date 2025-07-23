"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnimatedContent from "@/components/animated-content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Testimonial } from "@/types";
import SpotlightCard from "@/components/spotlight-card";

const testimonials: Testimonial[] = [
    {
        quote: "Vouch, @Molten  really good UI designer delivered on time with fair prices and flexible schedule.",
        client: "@Ovniman"
    }

];


export default function TestimonialsPage() {
  const scrollTo = (id: string) => {
    if (window.location.pathname !== '/') {
        window.location.href = `/#${id}`;
    } else {
        const targetElement = document.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section id="testimonials-hero" className="py-20 sm:py-24">
            <div className="container mx-auto text-center">
                 <AnimatedContent>
                    <h1 className="text-4xl font-bold font-headline text-center sm:text-5xl lg:text-6xl">Trusted by Developers</h1>
                    <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                        Building strong partnerships through quality design and clear communication.
                    </p>
                </AnimatedContent>
            </div>
        </section>

        <section id="testimonials-grid" className="pb-20 sm:pb-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                         <AnimatedContent key={index} className="h-full" style={{transitionDelay: `${index * 100}ms`}}>
                            <SpotlightCard spotlightColor="rgba(255, 69, 0, 0.15)" className="h-full">
                                <Card className="p-8 h-full flex flex-col justify-between text-left bg-transparent border-none transition-all duration-300">
                                    <div>
                                        <div className="quote-icon">“</div>
                                        <p className="italic text-foreground/80 mb-6">{testimonial.quote}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <Separator className="my-4 bg-border/40" />
                                        <p className="font-bold text-foreground">{testimonial.client}</p>
                                        {testimonial.projectUrl && (
                                            <Link href={testimonial.projectUrl} className="text-sm text-primary hover:underline mt-2 inline-block">
                                                View Project →
                                            </Link>
                                        )}
                                    </div>
                                </Card>
                            </SpotlightCard>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>

        <section id="cta" className="py-20 sm:py-24 bg-card/20">
             <AnimatedContent>
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold font-headline sm:text-4xl">
                        Ready to Elevate Your Game's Interface?
                    </h2>
                     <div className="mt-8">
                        <Button
                            size="lg"
                            className="transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-glow-primary"
                            onClick={() => scrollTo('contact')}
                        >
                           Let's Get Started
                        </Button>
                    </div>
                </div>
            </AnimatedContent>
        </section>

      </main>
      <Footer />
    </div>
  );
}
