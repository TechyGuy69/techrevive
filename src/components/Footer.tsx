import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
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
                <span>Ashoknagar 4 No, Near Sherpur Kalibari</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 9593088017</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>banerjeeusnish2@gmail.com</span>
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
          <p>© {new Date().getFullYear()} TECHREVIVE. All rights reserved. Owned by Usnish Banerjee.</p>
        </div>
      </div>
    </footer>
  );
}
