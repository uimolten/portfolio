"use client"

import { Button } from '@/components/ui/button';
import AnimatedContent from '@/components/animated-content';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="hero" className="py-24 sm:py-32 md:py-40">
      <AnimatedContent>
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Crafting Digital Experiences for Roblox
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Specializing in modern, intuitive, and high-quality UI/UX design that captivates players and enhances gameplay.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button size="lg" onClick={() => scrollTo('portfolio')} className="transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_0px_hsl(var(--primary)/0.5)]">
              View My Work
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
