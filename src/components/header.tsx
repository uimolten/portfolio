"use client";
import { Twitter, Dribbble } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  const scrollTo = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-headline font-bold text-primary">
            UIMolten
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
          <Link href="/pricing" className="transition-colors hover:text-primary">Pricing</Link>
          <button onClick={() => scrollTo('faq')} className="transition-colors hover:text-primary">FAQ</button>
        </nav>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Dribbble" className="hover:text-primary"><Dribbble className="h-5 w-5" /></a>
            </Button>
            <Button onClick={() => scrollTo('contact')} className="hidden sm:inline-flex transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-primary">
              Contact
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
