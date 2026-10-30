import { site } from "@/content/site";

export function Marquee() {
  const names = site.menu.flatMap((g) => g.items.map((i) => i.name)).slice(0, 16);
  const row = [...names, ...names];
  return (
    <div className="overflow-hidden border-y-4 border-coal bg-coral py-4 text-paper" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-slab text-2xl uppercase tracking-wide md:text-3xl">
        {row.map((n, i) => (
          <span key={i} className="flex items-center gap-10">
            {n} <span className="text-coal">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
