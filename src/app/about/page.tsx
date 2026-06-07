import Image from 'next/image';
import { CheckCircle2, MapPin, Award, Zap, Heart, Shield, Cpu, Tool, Hammer } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const ownerImage = PlaceHolderImages.find(img => img.id === 'owner-portrait');
  const serviceAreaImage = PlaceHolderImages.find(img => img.id === 'pc-repair');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Intro Section */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="circuit-pattern absolute inset-0 opacity-40" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary uppercase tracking-widest border border-primary/20">
                Our Story
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Reviving Tech <br/>
                <span className="text-primary">Since 2021</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                TECHREVIVE is Ashoknagar's premier destination for affordable, high-quality computer support. We started with one mission: to treat your tech with the care it deserves.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Personalized Care", icon: Heart },
                  { title: "Expert Solutions", icon: Cpu },
                  { title: "Fast Turnaround", icon: Zap },
                  { title: "Quality Parts", icon: Shield },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl tech-gradient text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
              <Image
                src={serviceAreaImage?.imageUrl || "https://picsum.photos/seed/about/800/600"}
                alt="Tech Service"
                width={800}
                height={600}
                className="relative rounded-[2.5rem] border border-slate-200 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 tech-gradient opacity-[0.03] rounded-full -mr-32 -mt-32" />
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-3xl shadow-xl ring-8 ring-slate-50">
                <Image
                  src={ownerImage?.imageUrl || "https://picsum.photos/seed/owner/400/400"}
                  alt="Usnish Banerjee"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-2">Founder & Lead Technician</h2>
                  <h3 className="text-4xl font-bold tracking-tight">Usnish Banerjee</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a deep-seated passion for computer architecture and software optimization, Usnish launched TECHREVIVE to provide a reliable alternative to overpriced service centers. He combines technical precision with a commitment to honest, transparent customer service.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-xs font-bold text-primary border border-blue-100">
                    <Award className="h-4 w-4" /> PC ASSEMBLY EXPERT
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-xs font-bold text-primary border border-blue-100">
                    <Zap className="h-4 w-4" /> OS OPTIMIZATION PRO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Coverage */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-blue-100 text-primary flex items-center justify-center mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="text-2xl font-bold mb-3 tracking-tight">Integrity First</h4>
              <p className="text-muted-foreground leading-relaxed">
                We believe in honest diagnostics. We only recommend repairs or upgrades that are truly necessary for your system's health.
              </p>
            </div>
            {/* Value 2 */}
            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="text-2xl font-bold mb-3 tracking-tight">Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">
                From precision hardware assembly to meticulous software cleanup, every job is handled with expert-level attention to detail.
              </p>
            </div>
            {/* Area */}
            <div className="p-10 rounded-[2.5rem] tech-gradient text-white md:col-span-2 lg:col-span-1 shadow-2xl relative overflow-hidden group">
              <div className="circuit-pattern absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <MapPin className="h-6 w-6" />
                </div>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Local Focus</h4>
                <p className="text-white/80 leading-relaxed mb-6">
                  Serving Ashoknagar and all areas within a 15km radius with prompt home service.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Ashoknagar', 'Habra', 'Sherpur', 'Kalyangarh'].map(city => (
                    <span key={city} className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
