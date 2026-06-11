
import { Monitor, Layout, Settings, FileText, Wrench, Package, ArrowRight, ShieldCheck, Zap, Laptop, Cpu, CheckCircle, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ServiceDialog from '@/components/ServiceDialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const softwareServices = [
  { 
    id: "win-install",
    name: "Windows Installation", 
    price: "₹200–₹400", 
    iconName: "layout",
    tag: "Essential",
    features: ["Clean OS Install", "Latest Updates", "Standard Apps"],
    longDesc: "A complete professional setup of Windows 10 or 11. We don't just install the OS; we configure your BIOS, set up high-performance partition schemes, install every necessary hardware driver, and apply the latest security patches for a rock-solid foundation."
  },
  { 
    id: "suite-setup",
    name: "Complete Suite Setup", 
    price: "₹400–₹600", 
    iconName: "monitor",
    tag: "Popular",
    features: ["Windows + All Drivers", "MS Office Suite", "System Activation"],
    longDesc: "The ultimate 'New PC' experience. We handle everything from the base OS to the full productivity suite. Perfect for students and professionals who want their system ready for work immediately."
  },
  { 
    id: "soft-support",
    name: "Software Support", 
    price: "₹150", 
    iconName: "settings",
    tag: "Quick Fix",
    features: ["Custom App Installs", "Utility Tools", "Antivirus Setup"],
    longDesc: "Need a specific professional tool installed or an antivirus set up properly? This service covers individual software installations and general app support."
  },
  { 
    id: "office-pro",
    name: "Office Professional", 
    price: "₹200–₹350", 
    iconName: "file",
    tag: "Workforce",
    features: ["Word, Excel, PPT", "Outlook Configuration", "OneNote Setup"],
    longDesc: "Complete installation and configuration of Microsoft Office. We ensure Outlook is properly set up with your email and all Office tools are activated and optimized."
  },
  { 
    id: "sys-perf",
    name: "System Performance", 
    price: "₹250–₹400", 
    iconName: "zap",
    tag: "Tune-up",
    features: ["Cache & Temp Cleanup", "Registry Repair", "Boot Optimization"],
    longDesc: "Over time, PCs accumulate digital 'junk'. We deep clean your system, repair broken registry paths, and optimize your startup sequence to bring back that new-PC speed."
  },
];

const hardwareServices = [
  { 
    id: "custom-build",
    name: "Custom PC Build", 
    price: "₹500", 
    iconName: "package",
    tag: "Expert",
    features: ["Full Assembly", "Cable Management", "Thermal Testing"],
    longDesc: "Buying parts? Let us put them together with expert precision. We handle everything from CPU mounting to meticulous cable management and stress testing for stability."
  },
  { 
    id: "sys-repair",
    name: "System Repair", 
    price: "₹200–₹600", 
    iconName: "wrench",
    tag: "Repair",
    features: ["Hardware Diagnostics", "Part Replacement", "Deep Cleaning"],
    longDesc: "Hardware failure is stressful. We diagnose the exact point of failure, replace faulty parts, and perform a deep physical clean to keep your internals healthy."
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-12 md:pb-24">
      {/* Header */}
      <section className="relative bg-white py-8 md:py-20 overflow-hidden border-b">
        <div className="circuit-pattern absolute inset-0 opacity-40" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4 md:space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary uppercase tracking-widest">
              Pricing & Plans
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Professional <span className="text-primary">Tech Solutions</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Transparent pricing for expert computer care. No hidden fees, just technical excellence at your doorstep.
            </p>
            
            <Alert className="max-w-xl mx-auto border-blue-200 bg-blue-50/50 text-blue-900 rounded-2xl">
              <Gift className="h-5 w-5 text-primary" />
              <AlertTitle className="font-bold">Special Discounts Available!</AlertTitle>
              <AlertDescription className="text-sm">
                We frequently run promotional discounts. Please <strong>call us</strong> or <strong>fill out the form</strong> to know about current offers for your service!
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-6 md:mt-12">
        {/* Software Services */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col items-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-2">
              <Laptop className="h-6 md:h-8 w-6 md:w-8 text-primary" /> Software Excellence
            </h2>
            <div className="h-1 w-16 md:w-20 tech-gradient rounded-full" />
          </div>
          <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {softwareServices.map((service) => (
              <div key={service.id} className="group flex flex-col rounded-[2rem] bg-white border border-slate-200 p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
                <div className="mb-4 md:mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl tech-gradient text-white shadow-lg shadow-primary/20">
                    {service.iconName === "layout" && <Layout className="h-6 w-6" />}
                    {service.iconName === "monitor" && <Monitor className="h-6 w-6" />}
                    {service.iconName === "settings" && <Settings className="h-6 w-6" />}
                    {service.iconName === "file" && <FileText className="h-6 w-6" />}
                    {service.iconName === "zap" && <Zap className="h-6 w-6" />}
                  </div>
                  <div className="text-right">
                    <span className="block text-xl md:text-2xl font-black text-primary mb-1">{service.price}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 rounded-md text-slate-500">{service.tag}</span>
                  </div>
                </div>
                <h3 className="mb-2 md:mb-4 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{service.name}</h3>
                
                <ul className="mb-6 space-y-1.5 md:space-y-2 flex-1">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3">
                  <ServiceDialog 
                    title={service.name}
                    description={`Detailed service for ${service.name}`}
                    longDescription={service.longDesc}
                    iconName={service.iconName}
                    benefits={service.features}
                    trigger={
                      <Button variant="outline" className="w-full rounded-xl h-11 md:h-12 border-primary/20 font-bold">
                        Learn More
                      </Button>
                    }
                  />
                  <Button asChild className="w-full rounded-xl h-11 md:h-12 tech-gradient font-bold shadow-lg text-white border-none">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Book Service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Services */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col items-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-2">
              <Cpu className="h-6 md:h-8 w-6 md:w-8 text-primary" /> Hardware Precision
            </h2>
            <div className="h-1 w-16 md:w-20 tech-gradient rounded-full" />
          </div>
          <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            {hardwareServices.map((service) => (
              <div key={service.id} className="group flex flex-col rounded-[2rem] bg-white border border-slate-200 p-6 md:p-10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 tech-gradient opacity-[0.03] rounded-bl-full translate-x-8 -translate-y-8" />
                <div className="mb-4 md:mb-8 flex items-start justify-between relative z-10">
                  <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl tech-gradient text-white shadow-lg shadow-primary/20">
                    {service.iconName === "package" && <Package className="h-7 w-7" />}
                    {service.iconName === "wrench" && <Wrench className="h-7 w-7" />}
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl md:text-3xl font-black text-primary mb-1">{service.price}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 rounded-md text-slate-500">{service.tag}</span>
                  </div>
                </div>
                <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{service.name}</h3>
                <ul className="mb-6 md:mb-8 space-y-2 md:space-y-4 flex-1">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-slate-600">
                      <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <ShieldCheck className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-3">
                  <ServiceDialog 
                    title={service.name}
                    description={`Hardware service for ${service.name}`}
                    longDescription={service.longDesc}
                    iconName={service.iconName}
                    benefits={service.features}
                    trigger={
                      <Button variant="outline" className="w-full rounded-xl h-11 md:h-12 border-primary/20 font-bold">
                        Learn More
                      </Button>
                    }
                  />
                  <Button asChild className="w-full rounded-xl h-11 md:h-12 tech-gradient shadow-lg font-bold text-white border-none">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Book Service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
