
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

  // Base classes for the navbar to ensure stability during hydration
  const navBaseClasses = "glass-nav sticky top-0 w-full border-b bg-background/80 backdrop-blur-md z-[60]";

  return (
    <>
      <nav className={navBaseClasses}>
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

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-foreground p-2 rounded-lg hover:bg-slate-100 transition-colors relative z-[110]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {mounted && (isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />)}
              {!mounted && <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay - Higher Z-Index and Blur */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-white/90 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col",
          mounted && isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
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
          <div className="pt-8">
            <Button asChild className="w-full rounded-2xl h-16 text-xl font-bold tech-gradient shadow-xl text-white">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Book Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
