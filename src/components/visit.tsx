import { CalendarCheck, Car, Clock, MapPin, Phone } from "lucide-react";

import { site } from "@/content/site";
import { fmt12 } from "@/lib/hours";

import { HoursList } from "./hours-list";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Visit() {
  const a = site.address;
  const q = encodeURIComponent(`13 Gypsies, ${a.street}, ${a.city}, ${a.region} ${a.postal}`);
  return (
    <section id="visit" className="tile py-20 text-paper md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
        <Reveal>
          <SectionHeading kicker="Come find us" title="Visit & reserve" light />
          <div className="mt-8 space-y-6 text-lg">
            <p className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-coral" aria-hidden />
              <span>
                {a.street}, {a.city}, {a.region} {a.postal}
                <span className="block text-base text-paper/70">{a.crossStreet}</span>
              </span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-coral" aria-hidden />
              <a className="underline decoration-coral underline-offset-4 hover:text-coral" href={site.phoneHref}>{site.phone}</a>
            </p>
            <p className="flex gap-3">
              <Car className="mt-1 size-5 shrink-0 text-coral" aria-hidden />
              <span>Street parking · patio & indoor seating</span>
            </p>
            <div className="flex gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-coral" aria-hidden />
              <div className="flex-1">
                <HoursList />
                <p className="mt-3 text-sm text-paper/70">Dinner only. Last seating is an hour and a half before closing ({fmt12("19:30")} Tue–Thu, {fmt12("20:30")} Fri–Sat).</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-paper transition hover:bg-coral-deep">
              <Phone className="size-4" aria-hidden /> Call to reserve
            </a>
            <a href={site.reserveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3 font-semibold transition hover:bg-paper hover:text-coal">
              <CalendarCheck className="size-4" aria-hidden /> OpenTable
            </a>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3 font-semibold transition hover:bg-paper hover:text-coal">
              <MapPin className="size-4" aria-hidden /> Directions
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="min-h-[360px] overflow-hidden rounded-[2rem] border-4 border-paper/80">
          <iframe
            title="Map to 13 Gypsies"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            className="h-full min-h-[360px] w-full grayscale-[35%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
