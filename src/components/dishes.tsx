import Image from "next/image";

import { site } from "@/content/site";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Dishes() {
  return (
    <section className="tile py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading kicker="From the kitchen" title="Small plates, big flavor" light />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.signatureDishes.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <figure className="group overflow-hidden rounded-3xl bg-paper text-ink shadow-2xl transition duration-300 hover:-translate-y-1.5 hover:rotate-[-0.6deg]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={d.photo.src} alt={d.photo.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <figcaption className="p-5">
                  <h3 className="font-slab text-xl leading-tight">{d.name}</h3>
                  <p className="mt-2 text-sm text-ink/75">{d.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
