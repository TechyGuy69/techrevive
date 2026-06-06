
import { Monitor, Cpu, Settings, Layout, FileText, CheckCircle, Wrench, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const softwareServices = [
  { name: "Windows Installation", price: "₹100–₹200", icon: Layout, features: ["Clean OS Install", "Latest Updates", "Standard Apps"] },
  { name: "Windows + Drivers + MS Office", price: "₹300–₹400", icon: Monitor, features: ["Complete Suite", "All Drivers", "Office Activation"] },
  { name: "Software Installation", price: "₹50", icon: Settings, features: ["Custom Apps", "Utility Software", "Antivirus"] },
  { name: "Microsoft Office Installation", price: "₹100–₹150", icon: FileText, features: ["Word, Excel, PPT", "Outlook Setup", "OneNote"] },
  { name: "PC Optimization", price: "₹200", icon: CheckCircle, features: ["Cleanup Cache", "Registry Repair", "Startup Boost"] },
];

const hardwareServices = [
  { name: "PC Assembly", price: "₹250", icon: Package, features: ["New PC Build", "Cable Management", "Component Testing"] },
  { name: "PC / Laptop Troubleshooting", price: "₹150", icon: Wrench, features: ["Hardware Diagnostic", "Part Replacement", "Cleaning"] },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 pt-16 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">Our Tech Solutions</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Transparent pricing, expert delivery. No hidden costs.
          </p>
        </div>

        {/* Software Services */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-slate-200" />
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Monitor className="h-6 w-6" /> Software Services
            </h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {softwareServices.map((service, i) => (
              <div key={i} className="group flex flex-col rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/20">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold tracking-tight">{service.name}</h3>
                <ul className="mb-8 space-y-3 flex-1">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-xl border-primary/20 hover:bg-primary hover:text-white transition-all">
                  <Link href="/contact">Choose Plan</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Services */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-slate-200" />
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Cpu className="h-6 w-6" /> Hardware Services
            </h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {hardwareServices.map((service, i) => (
              <div key={i} className="group flex flex-col rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/20">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold tracking-tight">{service.name}</h3>
                <ul className="mb-8 space-y-3 flex-1">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-xl border-primary/20 hover:bg-primary hover:text-white transition-all">
                  <Link href="/contact">Choose Plan</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Request CTA */}
        <div className="mt-20 text-center bg-primary rounded-3xl p-12 text-white overflow-hidden relative shadow-2xl">
          <div className="circuit-pattern absolute inset-0 opacity-10" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold">Need something specific?</h2>
            <p className="mx-auto max-w-[600px] text-blue-100/80">
              Custom requirements, bulk setups, or complex hardware issues? Talk to us for a custom quote.
            </p>
            <Button asChild size="lg" variant="secondary" className="h-14 rounded-full px-10 text-primary font-bold shadow-lg">
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
