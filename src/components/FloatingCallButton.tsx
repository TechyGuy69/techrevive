
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:9593088017"
      className="fixed bottom-[104px] right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110 active:scale-95 md:h-16 md:w-16"
      aria-label="Call Us"
    >
      <Phone className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
