import Image from "next/image";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Gallery() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading kicker="Inside 887 Stockton" title="Original tile & iconography" />
        </Reveal>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
          {site.gallery.map((p, i) => (
            <Reveal
              key={p.src}
              delay={(i % 4) * 0.06}
              className={cn(
                "relative overflow-hidden rounded-3xl border-4 border-coal",
                i === 0 && "col-span-2 row-span-2",
                i >= 3 && "md:col-span-2",
              )}
            >
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 hover:scale-105" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
