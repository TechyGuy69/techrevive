
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
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function ContactPage() {
  const { toast } = useToast();
  const db = useFirestore();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;
    
    setLoading(true);
    
    const requestData = {
      name: formData.name,
      phone: formData.phone,
      serviceType: formData.service,
      description: formData.message,
      createdAt: serverTimestamp(),
      status: 'pending'
    };

    addDoc(collection(db, 'serviceRequests'), requestData)
      .then(() => {
        setSubmitted(true);
        toast({
          title: "Request Sent Successfully!",
          description: "Usnish will contact you shortly at " + formData.phone,
        });
        setLoading(false);
      })
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: 'serviceRequests',
          operation: 'create',
          requestResourceData: requestData,
        });
        errorEmitter.emit('permission-error', permissionError);
        setLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <Card className="max-w-md w-full rounded-[2rem] md:rounded-[2.5rem] border-none shadow-2xl overflow-hidden animate-fade-in-up">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <div className="mx-auto h-16 w-16 md:h-20 md:w-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">Thank You!</h2>
              <p className="text-muted-foreground text-sm md:text-base">Your service request has been received. Usnish Banerjee will reach out to you within 30 minutes.</p>
            </div>
            <Button onClick={() => setSubmitted(false)} className="w-full rounded-xl h-12">Send Another Request</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">Get In Touch</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Expert computer support at your doorstep in Ashoknagar.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info & Details */}
          <div className="space-y-6 md:space-y-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="rounded-2xl md:rounded-3xl border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8 flex flex-col items-center text-center space-y-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center">
                    <Phone className="h-5 w-5 md:h-6 md:w-6" />
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

              <Card className="rounded-2xl md:rounded-3xl border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8 flex flex-col items-center text-center space-y-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">Instant Chat</p>
                  </div>
                  <Button variant="outline" className="w-full rounded-xl border-green-200 text-green-700 hover:bg-green-50" asChild>
                    <a href="https://wa.me/919593088017">Message Us</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3 md:space-y-6">
              <a 
                href="https://maps.app.goo.gl/rubq3GgtkHcpYHsS8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white shadow-sm border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all group"
              >
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Ashoknagar 4 No, Near Sherpur Kalibari</p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white shadow-sm border border-slate-100">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-sm text-muted-foreground">banerjeeusnish2@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white shadow-sm border border-slate-100">
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
            <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200 shadow-lg h-[200px] md:h-[300px]">
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
          <div className="rounded-[2rem] md:rounded-[2.5rem] bg-white p-6 md:p-10 shadow-2xl border border-slate-100 h-fit lg:sticky lg:top-24">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl font-bold mb-2">Book a Service</h2>
              <p className="text-sm text-muted-foreground">Fill out the form and we will get back to you within 30 minutes.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="Your Name" 
                    className="rounded-xl h-11 md:h-12" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    required 
                    type="tel"
                    placeholder="9593XXXXXX" 
                    className="rounded-xl h-11 md:h-12" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <select 
                  id="service" 
                  className="flex h-11 md:h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="Windows Installation">Windows Installation</option>
                  <option value="Software Setup">Software Setup / MS Office</option>
                  <option value="PC Optimization">PC Optimization</option>
                  <option value="Troubleshooting">PC / Laptop Troubleshooting</option>
                  <option value="Custom Assembly">Custom PC Assembly</option>
                  <option value="Other">Other / Custom Issue</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Problem Description</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us what's wrong with your computer..." 
                  className="min-h-[100px] md:min-h-[120px] rounded-xl" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 md:h-14 rounded-xl text-lg font-bold tech-gradient shadow-lg">
                {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <><Send className="mr-2 h-5 w-5" /> Send Request</>}
              </Button>
            </form>
            
            <div className="mt-6 pt-6 md:mt-8 md:pt-8 border-t text-center space-y-4">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Or Instant Connect</p>
              <div className="flex justify-center gap-6">
                <a href="tel:9593088017" className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <PhoneCall className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href="https://wa.me/919593088017" className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
