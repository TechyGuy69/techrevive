
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Loader2, 
  PhoneCall,
  Clock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call to Firestore
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Sent!",
      description: "Usnish will contact you shortly regarding your service.",
    });
    
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-slate-50 pt-16 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">Get In Touch</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Have a question or need to book a service? Contact us now.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info & Details */}
          <div className="space-y-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="rounded-3xl border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-sm text-muted-foreground">+91 9593088017</p>
                  </div>
                  <Button variant="outline" className="w-full rounded-xl" asChild>
                    <a href="tel:9593088017">Call Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">Click to Chat</p>
                  </div>
                  <Button variant="outline" className="w-full rounded-xl border-green-200 text-green-700 hover:bg-green-50" asChild>
                    <a href="https://wa.me/919593088017">Message Us</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white shadow-sm border border-slate-100">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-sm text-muted-foreground">Ashoknagar 4 No, Near Sherpur Kalibari</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white shadow-sm border border-slate-100">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-sm text-muted-foreground">banerjeeusnish2@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white shadow-sm border border-slate-100">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Availability</h4>
                  <p className="text-sm text-muted-foreground">Mon - Sun (9:00 AM - 9:00 PM)</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.34005081198!2d88.60835821738281!3d22.825946999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bc2142278917%3A0xc39f9976378e915!2sAshoknagar%204%20no.!5e0!3m2!1sen!2sin!4v1716120000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-10 shadow-2xl border border-slate-100 h-fit lg:sticky lg:top-24">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Book a Service</h2>
              <p className="text-sm text-muted-foreground">Fill out the form below and we will get back to you within 30 minutes.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" required placeholder="9593XXXXXX" className="rounded-xl h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <select 
                  id="service" 
                  className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="windows">Windows Installation</option>
                  <option value="software">Software Setup / MS Office</option>
                  <option value="optimization">PC Optimization</option>
                  <option value="troubleshooting">PC / Laptop Troubleshooting</option>
                  <option value="assembly">Custom PC Assembly</option>
                  <option value="other">Other Issue</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Problem Description</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your issue in detail..." 
                  className="min-h-[120px] rounded-xl" 
                  required
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-14 rounded-xl text-lg font-bold tech-gradient shadow-lg">
                {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <><Send className="mr-2 h-5 w-5" /> Send Request</>}
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t text-center space-y-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Or Instant Connect</p>
              <div className="flex justify-center gap-4">
                <a href="tel:9593088017" className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-all">
                  <PhoneCall className="h-5 w-5" />
                </a>
                <a href="https://wa.me/919593088017" className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
