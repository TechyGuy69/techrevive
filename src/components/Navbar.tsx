
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <nav className="sticky top-0 w-full border-b bg-background/80 backdrop-blur-md z-[150]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tighter text-primary">TECHREVIVE</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="text-sm font-medium">{link.name}</div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav 
        className={cn(
          "sticky top-0 w-full border-b backdrop-blur-md transition-all duration-300",
          "z-[150]", 
          isOpen ? "bg-white shadow-none" : "bg-background/80"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <span className="text-xl font-bold tracking-tighter text-primary">TECHREVIVE</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="rounded-full px-6 tech-gradient">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden text-foreground p-2 rounded-lg hover:bg-slate-100 transition-colors relative z-[160]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-7 w-7 text-primary animate-in zoom-in duration-300" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[140] bg-white/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-4 p-8 pt-24 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center justify-between text-2xl font-bold tracking-tight py-4 border-b border-slate-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <ChevronRight className="h-6 w-6 text-primary" />
            </Link>
          ))}
          <div className="pt-8 pb-12">
            <Button asChild className="w-full rounded-2xl h-16 text-xl font-bold tech-gradient shadow-xl text-white">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Book Service
              </Link>
            </Button>
            
            <div className="mt-12 text-center space-y-2">
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">Expert Support by</p>
              <p className="text-xl font-bold text-foreground">Usnish Banerjee</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
