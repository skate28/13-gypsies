import { Star } from "lucide-react";

import { site } from "@/content/site";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Reviews() {
  const r = site.reviews;
  return (
    <section id="reviews" className="grain bg-oxblood py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <Reveal>
            <SectionHeading kicker="What diners say" title="A neighborhood gem" light />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-6 rounded-3xl bg-paper/10 p-6 backdrop-blur">
              <div>
                <p className="font-slab text-6xl text-saffron">{r.rating}</p>
                <div className="mt-1 flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-saffron text-saffron" aria-hidden />
                  ))}
                </div>
                <p className="mt-1 text-sm text-paper/75">{r.count} reviews on {r.source}</p>
              </div>
              <dl className="grid flex-1 grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {r.breakdown.map((b) => (
                  <div key={b.label} className="flex justify-between border-b border-paper/15 py-1">
                    <dt className="text-paper/75">{b.label}</dt>
                    <dd className="font-semibold">{b.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
        <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
          {r.quotes.map((q, i) => (
            <Reveal key={q.text} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid">
              <figure className="rounded-3xl bg-paper p-6 text-ink shadow-xl">
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-4 fill-coral text-coral" />
                  ))}
                </div>
                <blockquote className="mt-3 font-serif text-xl leading-snug">&ldquo;{q.text}&rdquo;</blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink/55">{q.source}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
