"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";

import { Wordmark } from "./wordmark";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open ? "bg-coal/95 shadow-lg backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-2xl" aria-label="13 Gypsies home">
          <Wordmark light />
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3 py-2 text-sm font-medium text-paper/85 transition hover:bg-paper/10 hover:text-paper">
              {l.label}
            </a>
          ))}
          <a href={site.phoneHref} className="ml-2 inline-flex items-center gap-2 rounded-full bg-coral px-4 py-2 text-sm font-semibold text-paper transition hover:bg-coral-deep">
            <Phone className="size-4" aria-hidden /> {site.phone}
          </a>
        </nav>
        <button
          type="button"
          className="rounded-full p-2 text-paper md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-paper/10 px-5 pb-5 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-paper/10 py-3 font-slab text-xl text-paper">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
