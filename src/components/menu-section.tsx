"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useState } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";

import { SectionHeading } from "./section-heading";

export function MenuSection() {
  const [active, setActive] = useState(site.menu[0].id);
  const group = site.menu.find((g) => g.id === active) ?? site.menu[0];
  return (
    <section id="menu" className="bg-paper py-20 md:py-28">
      <div className="harlequin-strip -mt-20 mb-20 md:-mt-28 md:mb-28" aria-hidden />
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading kicker="The menu" title="Tapas to share" className="mx-auto text-center" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">{site.menuNote}</p>
        <div role="tablist" aria-label="Menu sections" className="mt-10 flex flex-wrap justify-center gap-2">
          {site.menu.map((g) => (
            <button
              key={g.id}
              role="tab"
              type="button"
              aria-selected={g.id === active}
              onClick={() => setActive(g.id)}
              className={cn(
                "rounded-full border-2 border-coal px-5 py-2 font-semibold transition",
                g.id === active ? "bg-coal text-paper shadow-[3px_3px_0_var(--g-coral)]" : "bg-paper hover:bg-bone",
              )}
            >
              {g.title}
            </button>
          ))}
        </div>
        <div className="mt-10 min-h-[22rem] rounded-[2rem] border-4 border-coal bg-bone p-6 shadow-[8px_8px_0_var(--g-coal)] md:p-10">
          <AnimatePresence mode="wait">
            <motion.ul
              key={group.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-slab text-lg md:text-xl">{item.name}</h3>
                    <span className="leader" aria-hidden />
                    {item.price != null && <span className="font-slab text-lg text-coral-deep">${item.price}</span>}
                  </div>
                  {item.desc && <p className="mt-1 text-ink/70">{item.desc}</p>}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
        <div className="mt-8 text-center">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-paper transition hover:bg-coral-deep">
            <Phone className="size-4" aria-hidden /> Ask about tonight&apos;s menu
          </a>
        </div>
      </div>
    </section>
  );
}
