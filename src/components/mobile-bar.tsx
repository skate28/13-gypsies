import { CalendarCheck, MapPin, Phone } from "lucide-react";

import { site } from "@/content/site";

export function MobileBar() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 overflow-hidden rounded-2xl border-2 border-coal bg-paper text-sm font-semibold shadow-2xl md:hidden" style={{ marginBottom: "env(safe-area-inset-bottom)" }}>
      <a href={site.phoneHref} className="flex flex-col items-center gap-1 bg-coral py-2.5 text-paper"><Phone className="size-5" aria-hidden />Call</a>
      <a href={site.reserveUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-2.5"><CalendarCheck className="size-5" aria-hidden />Reserve</a>
      <a href="#visit" className="flex flex-col items-center gap-1 py-2.5"><MapPin className="size-5" aria-hidden />Directions</a>
    </nav>
  );
}
