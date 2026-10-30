import { Plus } from "lucide-react";

import { site } from "@/content/site";

import { SectionHeading } from "./section-heading";

export function Faq() {
  return (
    <section id="faq" className="grain bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading kicker="Things you should know" title="Good to know" />
        <div className="mt-10 space-y-3">
          {site.faq.map((f) => (
            <details key={f.q} className="group rounded-2xl border-2 border-coal bg-paper px-5 py-4 shadow-[4px_4px_0_var(--g-coal)] open:bg-paper">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-slab text-lg">
                {f.q}
                <Plus className="size-5 shrink-0 text-coral transition group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 text-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
