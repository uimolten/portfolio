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
    const targetElement = document.getElementById(id);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If the element is on another page, navigate to it first.
        window.location.href = `/#${id}`;
    }
  };

  const handleLinkClick = (path?: string) => {
    setIsMenuOpen(false);
    if (path) {
        if (path.startsWith('/#')) {
             const id = path.substring(2);
             scrollTo(id);
        }
    }
  }

  const navLinks = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/#faq", label: "FAQ" }
  ];


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
            {navLinks.map(link => (
                link.href.startsWith('/') ?
                <Link key={link.label} href={link.href} onClick={() => handleLinkClick(link.href)} className="transition-colors hover:text-primary">{link.label}</Link> :
                <button key={link.label} onClick={() => scrollTo(link.href)} className="transition-colors hover:text-primary">{link.label}</button>
            ))}
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
                                <Link href="/" onClick={() => handleLinkClick()} className="flex items-center gap-2">
                                    <Logo className="h-9 w-auto" />
                                    <span className="font-headline text-xl font-bold">UIMolten</span>
                                </Link>
                           </SheetTitle>
                        </SheetHeader>
                        <nav className="mt-8 flex flex-col space-y-6">
                           {navLinks.map(link => (
                                link.href.startsWith('/') ?
                                <Link key={link.label} href={link.href} onClick={() => handleLinkClick(link.href)} className="text-lg font-medium transition-colors hover:text-primary">{link.label}</Link> :
                                <button key={link.label} onClick={() => scrollTo(link.href)} className="text-left text-lg font-medium transition-colors hover:text-primary">{link.label}</button>
                            ))}
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
