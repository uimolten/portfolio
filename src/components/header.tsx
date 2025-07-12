"use client";
import { useState } from 'react';
import { Twitter, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';
import Logo from './logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false); // Close menu on navigation
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-9 w-auto" />
            <span className="font-headline text-xl font-bold">UIMolten</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
          <Link href="/pricing" className="transition-colors hover:text-primary">Pricing</Link>
          <button onClick={() => scrollTo('faq')} className="transition-colors hover:text-primary">FAQ</button>
        </nav>
        <div className="flex items-center">
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://x.com/moltennn_" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
                </Button>
                <Button onClick={() => scrollTo('contact')} className="transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-primary">
                  Contact
                </Button>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <SheetHeader>
                           <SheetTitle>
                                <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2">
                                    <Logo className="h-9 w-auto" />
                                    <span className="font-headline text-xl font-bold">UIMolten</span>
                                </Link>
                           </SheetTitle>
                        </SheetHeader>
                        <nav className="mt-8 flex flex-col space-y-6">
                            <Link href="/portfolio" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">Portfolio</Link>
                            <Link href="/pricing" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">Pricing</Link>
                            <button onClick={() => scrollTo('faq')} className="text-left text-lg font-medium transition-colors hover:text-primary">FAQ</button>
                            <Button onClick={() => scrollTo('contact')} size="lg" className="w-full transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-primary">
                              Contact
                            </Button>
                            <div className="flex items-center justify-start gap-4 border-t border-border/40 pt-6">
                                 <a href="https://x.com/moltennn_" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Twitter className="h-6 w-6" />
                                </a>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
