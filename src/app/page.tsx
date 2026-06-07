
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  Smartphone, 
  ArrowRight,
  MessageCircle,
  PhoneCall,
  House,
  Monitor
} from 'lucide-react';
import SmartTroubleshooter from '@/components/SmartTroubleshooter';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ServiceDialog from '@/components/ServiceDialog';

const quickServices = [
  { 
    title: "Windows Installation", 
    desc: "Clean setup of latest OS with drivers.", 
    iconName: "monitor",
    longDesc: "A complete professional setup of Windows 10 or 11. We don't just install the OS; we configure your BIOS, set up high-performance partition schemes, install every necessary hardware driver, and apply the latest security patches for a rock-solid foundation.",
    benefits: ["Latest Security Updates", "Verified Driver Compatibility", "Optimized Disk Partitions", "Basic Utility Pack"]
  },
  { 
    title: "Software Setup", 
    desc: "MS Office and essential apps configuration.", 
    iconName: "smartphone",
    longDesc: "Expert installation of the tools you use every day. From the full Microsoft Office suite to specialized browsers, PDF editors, and communication tools. We ensure all software is properly activated and settings are tuned for your specific workflow.",
    benefits: ["Full Office Activation", "Browser Optimization", "Essential Tools Pack", "Data Protection Setup"]
  },
  { 
    title: "PC Optimization", 
    desc: "Make your old PC run like new again.", 
    iconName: "zap",
    longDesc: "Is your computer feeling sluggish? We perform deep system cleanup, registry repair, and startup optimization. We also handle thermal management, ensuring your hardware isn't being throttled by heat or bloatware.",
    benefits: ["Faster Boot Times", "Increased FPS in Games", "Lower Operating Temps", "Bloatware Removal"]
  },
  { 
    title: "Troubleshooting", 
    desc: "Fix errors, blue screens, and crashes.", 
    iconName: "shield",
    longDesc: "Deep hardware and software diagnostics to identify exactly why your system is failing. We resolve Blue Screen of Death (BSOD) errors, frequent freezing, peripheral connectivity issues, and complex software conflicts.",
    benefits: ["Root Cause Identification", "BSOD Error Fixes", "Hardware Health Check", "Stable System Restore"]
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-tech');

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-6 pb-8 md:pt-32 md:pb-40">
        <div className="circuit-pattern absolute inset-0 opacity-40" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center self-center lg:self-start gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for Home Service
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                  Expert <span className="text-primary">Computer & Laptop</span> Support
                </h1>
                <p className="mx-auto max-w-[600px] text-lg text-muted-foreground md:text-xl lg:mx-0">
                  Fast, affordable tech solutions by TECHREVIVE. From Windows setup to hardware repairs, we've got you covered.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Button asChild size="lg" className="h-14 rounded-full px-8 text-lg tech-gradient shadow-lg text-white">
                  <Link href="/contact">Book Service</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="h-14 rounded-full px-8 text-lg border-primary/20 hover:bg-primary/5 group"
                >
                  <Link href="https://wa.me/919593088017" className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" />
                    <span className="text-foreground group-hover:text-primary transition-colors">WhatsApp Now</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                <Image
                  src={heroImage?.imageUrl || "https://picsum.photos/seed/tech-hero-revive/1200/800"}
                  alt="Tech Support"
                  width={800}
                  height={600}
                  className="w-full object-cover transition-transform hover:scale-105 duration-700"
                  data-ai-hint="computer repair"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="bg-slate-50 py-8 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-3">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base">
              Professional solutions for all your computer and laptop needs.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickServices.map((s, i) => (
              <div key={i} className="group relative rounded-2xl bg-white p-6 md:p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-primary/10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl tech-gradient text-white">
                   {s.iconName === "monitor" && <Monitor className="h-6 w-6" />}
                   {s.iconName === "smartphone" && <Smartphone className="h-6 w-6" />}
                   {s.iconName === "zap" && <Zap className="h-6 w-6" />}
                   {s.iconName === "shield" && <ShieldCheck className="h-6 w-6" />}
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                
                <ServiceDialog 
                  title={s.title}
                  description={s.desc}
                  longDescription={s.longDesc}
                  iconName={s.iconName}
                  benefits={s.benefits}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <Button asChild variant="link" className="text-primary font-bold">
              <Link href="/services">View All Services & Pricing <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Troubleshooting Section */}
      <section className="py-8 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-bold text-accent uppercase tracking-widest">
                AI Powered Help
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Troubleshoot Before You Book
              </h2>
              <p className="text-lg text-muted-foreground">
                Get instant diagnostic advice using our AI engine. Describe your issue and get a fix in seconds.
              </p>
              <ul className="space-y-2 md:space-y-4">
                {[
                  "Available 24/7 for instant help",
                  "Covers hardware and software issues",
                  "Expert-level diagnostics",
                  "Completely free to use"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SmartTroubleshooter />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-8 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-3">Why TechRevive?</h2>
            <p className="mx-auto max-w-[700px] text-blue-100 opacity-80 text-sm md:text-base">
              Trusted local technician providing premium quality service at local prices.
            </p>
          </div>
          <div className="grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Fast Service", desc: "Most software issues resolved within hours.", icon: Clock },
              { title: "Affordable Pricing", desc: "Transparent pricing starting from just ₹50.", icon: Zap },
              { title: "Remote Support", desc: "Safe remote assistance available anywhere.", icon: Smartphone },
              { title: "Home Service", desc: "We come to you. No need to carry your PC.", icon: House },
              { title: "Trusted Local Tech", desc: "Direct service by owner Usnish Banerjee.", icon: ShieldCheck },
              { title: "Free Diagnostic", desc: "Get a quote before we start any repair.", icon: Monitor },
            ].map((f, i) => (
              <div key={i} className="flex gap-4 rounded-2xl bg-white/10 p-5 md:p-6 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold">{f.title}</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-24 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-6 md:space-y-8 rounded-3xl bg-slate-50 p-6 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to Revive Your PC?</h2>
            <p className="text-lg text-muted-foreground">
              Don't wait for errors to get worse. Contact Usnish Banerjee today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a href="tel:9593088017" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-primary hover:underline transition-all">
                <PhoneCall className="h-6 w-6" />
                9593088017
              </a>
              <Button asChild size="lg" className="h-12 md:h-14 rounded-full px-8 md:px-10 tech-gradient shadow-xl text-white">
                <Link href="/contact">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
