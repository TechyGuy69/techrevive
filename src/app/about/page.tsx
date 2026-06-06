
import Image from 'next/image';
import { CheckCircle2, MapPin, Award, Zap, Heart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const ownerImage = PlaceHolderImages.find(img => img.id === 'owner-portrait');
  const serviceAreaImage = PlaceHolderImages.find(img => img.id === 'pc-repair');

  return (
    <div className="flex flex-col">
      {/* Intro Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-bold text-primary uppercase tracking-widest">
                Since 2021
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Giving Your Tech a <span className="text-primary">New Lease on Life</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TECHREVIVE is a local computer and laptop service provider offering affordable and reliable tech solutions. Based in Ashoknagar, we bridge the gap between expensive corporate service centers and unprofessional local repair shops.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { title: "Home Service", icon: CheckCircle2 },
                  { title: "Remote Support", icon: CheckCircle2 },
                  { title: "Quick Response", icon: CheckCircle2 },
                  { title: "Affordable Rates", icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-accent" />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-blue-100/50 blur-xl" />
              <Image
                src={serviceAreaImage?.imageUrl || "https://picsum.photos/seed/about/800/600"}
                alt="Tech Service"
                width={800}
                height={600}
                className="relative rounded-3xl border border-slate-200 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
            <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl md:h-64 md:w-64">
              <Image
                src={ownerImage?.imageUrl || "https://picsum.photos/seed/owner/400/400"}
                alt="Usnish Banerjee"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Founder & Lead Tech</h2>
                <h3 className="text-3xl font-bold tracking-tight">Usnish Banerjee</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                With years of hands-on experience in computer hardware and software architecture, Usnish started TECHREVIVE with a simple mission: to make technical assistance accessible to everyone in Ashoknagar. He specializes in optimizing Windows environments and troubleshooting complex system bottlenecks that others miss.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase">
                  <Award className="h-4 w-4 text-primary" /> Expert Hardware Assembly
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase">
                  <Zap className="h-4 w-4 text-primary" /> OS Optimization Guru
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area & Values */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8 p-10 rounded-3xl bg-blue-50/50 border border-blue-100">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" /> Service Area
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We are proud to serve the community of <strong>Ashoknagar</strong> and all nearby areas within a 10-15km radius. Whether you are in Kalyani, Habra, or nearby townships, our technician is just a call away for home visits.
              </p>
              <div className="space-y-3">
                <p className="text-sm font-bold text-primary">Key Coverage Areas:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>• Ashoknagar (All Wards)</li>
                  <li>• Habra</li>
                  <li>• Sherpur</li>
                  <li>• Kalyani Area</li>
                </ul>
              </div>
            </div>
            <div className="space-y-8 p-10 rounded-3xl bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Heart className="h-6 w-6 text-red-500" /> Our Values
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-1">Integrity</h4>
                  <p className="text-sm text-muted-foreground">We never recommend parts you don't need. Honest pricing is our trademark.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Excellence</h4>
                  <p className="text-sm text-muted-foreground">Every screw tightened, every driver updated. We care about the tiny details.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Reliability</h4>
                  <p className="text-sm text-muted-foreground">Available 9am to 9pm. When your work stops due to tech issues, we start.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
