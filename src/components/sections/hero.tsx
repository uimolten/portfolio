"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import DarkVeil from '../dark-veil';
import BlurText from '../blur-text';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="hero" className="py-24 sm:py-32 md:py-40 relative overflow-hidden">
        <DarkVeil
          hueShift={-130}
          noiseIntensity={0.03}
          scanlineIntensity={0.05}
          warpAmount={0.8}
          speed={0.3}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto text-center relative z-10">
            <BlurText
                text="Crafting Digital Experiences for Roblox"
                className="font-headline text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            />
            <BlurText
                text="Specializing in modern, intuitive, and high-quality UI/UX design that captivates players and enhances gameplay."
                className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
                delay={25}
            />
            <div className="mt-10 flex items-center justify-center gap-x-4">
                <Button size="lg" asChild className="transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-glow-primary">
                  <Link href="/portfolio">View My Work</Link>
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollTo('contact')} className="transition-colors duration-300 hover:border-primary hover:text-primary">
                    Get in Touch &rarr;
                </Button>
            </div>
        </div>
    </section>
  );
};
export default HeroSection;
