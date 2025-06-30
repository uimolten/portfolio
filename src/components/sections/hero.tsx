"use client"

import { Button } from '@/components/ui/button';
import AnimatedContent from '@/components/animated-content';
import Link from 'next/link';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="hero" className="py-24 sm:py-32 md:py-40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-primary/10 rounded-full blur-3xl" />
        <AnimatedContent>
            <div className="container mx-auto text-center relative z-10">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                    Crafting Digital Experiences for Roblox
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                    Specializing in modern, intuitive, and high-quality UI/UX design that captivates players and enhances gameplay.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                    <Button size="lg" asChild className="transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-glow-primary">
                      <Link href="/portfolio">View My Work</Link>
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => scrollTo('contact')} className="transition-colors duration-300 hover:border-primary hover:text-primary">
                        Get in Touch &rarr;
                    </Button>
                </div>
            </div>
        </AnimatedContent>
    </section>
  );
};
export default HeroSection;
