import { Monitor, Cpu, Settings, Layout, FileText, CheckCircle, Wrench, Package, ArrowRight, ShieldCheck, Zap, Laptop, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const softwareServices = [
  { 
    name: "Windows Installation", 
    price: "₹100–₹200", 
    icon: Layout, 
    tag: "Essential",
    features: ["Clean OS Install", "Latest Updates", "Standard Apps"] 
  },
  { 
    name: "Complete Suite Setup", 
    price: "₹300–₹400", 
    icon: Monitor, 
    tag: "Popular",
    features: ["Windows + All Drivers", "MS Office Suite", "System Activation"] 
  },
  { 
    name: "Software Support", 
    price: "₹50", 
    icon: Settings, 
    tag: "Quick Fix",
    features: ["Custom App Installs", "Utility Tools", "Antivirus Setup"] 
  },
  { 
    name: "Office Professional", 
    price: "₹100–₹150", 
    icon: FileText, 
    tag: "Workforce",
    features: ["Word, Excel, PPT", "Outlook Configuration", "OneNote Setup"] 
  },
  { 
    name: "System Performance", 
    price: "₹200", 
    icon: Zap, 
    tag: "Tune-up",
    features: ["Cache & Temp Cleanup", "Registry Repair", "Boot Optimization"] 
  },
];

const hardwareServices = [
  { 
    name: "Custom PC Build", 
    price: "₹250", 
    icon: Package, 
    tag: "Expert",
    features: ["Full Assembly", "Cable Management", "Thermal Testing"] 
  },
  { 
    name: "System Repair", 
    price: "₹150", 
    icon: Wrench, 
    tag: "Repair",
    features: ["Hardware Diagnostics", "Part Replacement", "Deep Cleaning"] 
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="relative bg-white py-24 overflow-hidden border-b">
        <div className="circuit-pattern absolute inset-0 opacity-40" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary uppercase tracking-widest">
              Pricing & Plans
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Professional <span className="text-primary">Tech Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transparent, competitive pricing for expert computer care. No hidden fees, just pure technical excellence delivered to your doorstep.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        {/* Software Services */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-2">
              <Laptop className="h-8 w-8 text-primary" /> Software Excellence
            </h2>
            <div className="h-1 w-20 tech-gradient rounded-full" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {softwareServices.map((service, i) => (
              <div key={i} className="group flex flex-col rounded-[2.5rem] bg-white border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl tech-gradient text-white shadow-lg shadow-primary/20">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-black text-primary mb-1">{service.price}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 rounded-md text-slate-500">{service.tag}</span>
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{service.name}</h3>
                <ul className="mb-8 space-y-4 flex-1">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-2xl h-12 border-primary/20 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white transition-all font-bold">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Book Service <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Services */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-2">
              <Cpu className="h-8 w-8 text-primary" /> Hardware Precision
            </h2>
            <div className="h-1 w-20 tech-gradient rounded-full" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {hardwareServices.map((service, i) => (
              <div key={i} className="group flex flex-col rounded-[2.5rem] bg-white border border-slate-200 p-8 md:p-12 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 tech-gradient opacity-[0.03] rounded-bl-full translate-x-8 -translate-y-8" />
                <div className="mb-8 flex items-start justify-between relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl tech-gradient text-white shadow-lg shadow-primary/20">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-black text-primary mb-1">{service.price}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 rounded-md text-slate-500">{service.tag}</span>
                  </div>
                </div>
                <h3 className="mb-6 text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{service.name}</h3>
                <ul className="mb-10 space-y-4 flex-1">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-base text-slate-600">
                      <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="w-full rounded-2xl h-14 tech-gradient shadow-xl text-lg font-bold">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Start My Build <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Process/Guarantee */}
        <section className="mt-20 rounded-[3rem] bg-white border border-slate-200 p-12 md:p-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full circuit-pattern opacity-[0.02]" />
          <div className="grid gap-12 lg:grid-cols-2 relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Service Guarantee</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At TECHREVIVE, we don't just fix computers; we build lasting relationships through trust and technical integrity.
              </p>
              <div className="space-y-4">
                {[
                  { title: "No Fix, No Fee", desc: "If we can't solve your software issue, you don't pay a penny.", icon: ShieldCheck },
                  { title: "Direct Communication", desc: "Talk directly to Usnish Banerjee, no middleman or support agents.", icon: Terminal },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="h-10 w-10 rounded-xl tech-gradient text-white flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-8 rounded-[2rem] tech-gradient text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
              <p className="text-white/80 mb-8 max-w-sm">
                Book a service today and experience Ashoknagar's most reliable tech support.
              </p>
              <Button asChild size="lg" variant="secondary" className="h-16 rounded-2xl px-12 text-primary font-black text-xl hover:scale-105 transition-transform">
                <Link href="/contact">Book Service Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
