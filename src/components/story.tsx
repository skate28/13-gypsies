import Image from "next/image";

import { site } from "@/content/site";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Story() {
  return (
    <section id="story" className="grain bg-bone py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_1fr] md:items-center">
        <Reveal>
          <SectionHeading kicker="Our story" title={site.story.lead} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/85">
            {site.story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-4 gap-3">
            {site.facts.map((f) => (
              <div key={f.label} className="rounded-2xl border-2 border-coal bg-paper px-3 py-4 text-center shadow-[4px_4px_0_var(--g-coal)]">
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-slab text-2xl text-coral-deep md:text-3xl">{f.value}</dd>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink/70">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.15} className="relative">
          <div className="harlequin absolute -right-3 -top-3 h-full w-full rounded-[2rem] opacity-90" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-coal">
            <Image src="/images/bar-iconography.webp" alt="The bar beneath walls of eclectic religious iconography" width={1600} height={1204} sizes="(min-width: 768px) 45vw, 100vw" className="h-full w-full object-cover" />
          </div>
          <p className="relative mt-6 rounded-2xl bg-coal p-5 text-paper/90 shadow-xl">
            <span className="font-serif text-lg italic text-saffron">The building · </span>
            {site.story.building}
          </p>
        </Reveal>
      </div>
      <div className="mx-auto mt-16 max-w-6xl px-5">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-ink/60">Made in house</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {site.houseMade.map((h) => (
              <li key={h} className="rounded-full border-2 border-coal bg-paper px-4 py-2 font-medium transition hover:-rotate-2 hover:bg-coral hover:text-paper">
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
