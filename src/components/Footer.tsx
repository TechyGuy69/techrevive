
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
              TECHREVIVE
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional computer and laptop support services in Ashoknagar. Fast, affordable, and reliable tech solutions.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/rubq3GgtkHcpYHsS8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Ashoknagar 4 No, Near Sherpur Kalibari
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:9593088017" className="hover:text-primary transition-colors">
                  +91 9593088017
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:banerjeeusnish2@gmail.com" className="hover:text-primary transition-colors">
                  banerjeeusnish2@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Working Hours</h3>
            <p className="text-sm text-muted-foreground">
              Monday - Sunday<br />
              9:00 AM - 9:00 PM<br />
              (Home Service Available)
            </p>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
          <p>© {year || '2025'} TECHREVIVE. All rights reserved. Owned by Usnish Banerjee.</p>
        </div>
      </div>
    </footer>
  );
}
