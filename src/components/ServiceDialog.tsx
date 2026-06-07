
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceDialogProps {
  title: string;
  description: string;
  longDescription: string;
  icon: ReactNode;
  benefits?: string[];
  trigger?: ReactNode;
}

export default function ServiceDialog({
  title,
  description,
  longDescription,
  icon,
  benefits = [],
  trigger
}: ServiceDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <div className="mt-6 flex items-center text-primary text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline">
            Read more <ArrowRight className="ml-2 h-3 w-3" />
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-[2rem] border-none shadow-2xl">
        <DialogHeader className="space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl tech-gradient text-white shadow-xl">
            {icon}
          </div>
          <DialogTitle className="text-2xl font-bold text-center">{title}</DialogTitle>
          <DialogDescription className="text-base text-center leading-relaxed">
            {longDescription}
          </DialogDescription>
        </DialogHeader>
        
        {benefits.length > 0 && (
          <div className="py-4">
            <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Key Benefits</h4>
            <ul className="grid gap-2">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-3">
          <Button asChild className="h-12 rounded-xl tech-gradient font-bold">
            <Link href="/contact">Book This Service</Link>
          </Button>
          <DialogTrigger asChild>
            <Button variant="ghost" className="rounded-xl">Close Details</Button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
}
