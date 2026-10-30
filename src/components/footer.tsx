import { site } from "@/content/site";

import { Wordmark } from "./wordmark";

export function Footer() {
  return (
    <footer className="bg-coal pb-28 pt-14 text-paper/80 md:pb-14">
      <div className="harlequin-strip -mt-14 mb-14 opacity-90" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between">
        <div>
          <Wordmark light className="text-4xl" />
          <p className="mt-2 font-serif text-lg italic text-saffron">{site.tagline}</p>
          <p className="mt-4 text-sm">
            {site.address.street}, {site.address.city}, {site.address.region} {site.address.postal} ·{" "}
            <a href={site.phoneHref} className="hover:text-coral">{site.phone}</a>
          </p>
          <p className="mt-1 text-sm">Tue–Thu 5–9 PM · Fri–Sat 5–10 PM · Sun–Mon closed</p>
        </div>
        <div className="text-sm text-paper/60">
          <p>Consuming raw or undercooked meat, poultry, seafood, eggs and shellfish may increase the risk of foodborne illness.</p>
          <p className="mt-1">© {new Date().getFullYear()} 13 Gypsies</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-paper/50">
        Built by <a href="https://nicklopacki.com" className="underline underline-offset-2 hover:text-coral">nicklopacki.com</a>
      </p>
    </footer>
  );
}
