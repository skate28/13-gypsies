"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { site } from "@/content/site";

import { ShopStatus } from "./shop-status";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (d: number) => (reduce ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] as const } });
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-coal text-paper">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      >
        <Image src={site.heroPhoto.src} alt={site.heroPhoto.alt} fill priority sizes="100vw" className="object-cover opacity-55" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-coal via-coal/60 to-coal/30" />
      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:pb-24">
        <motion.div {...rise(0.1)}>
          <ShopStatus className="bg-paper/10 text-paper backdrop-blur" />
        </motion.div>
        <motion.p {...rise(0.2)} className="mt-6 font-serif text-2xl italic text-saffron md:text-3xl">
          {site.tagline}
        </motion.p>
        <motion.h1 {...rise(0.3)} className="mt-2 font-slab text-[clamp(4rem,14vw,11rem)] leading-[0.85] tracking-tight">
          <span className="text-coral">13</span> GYPSIES
        </motion.h1>
        <motion.p {...rise(0.45)} className="mt-6 max-w-xl text-lg text-paper/85 md:text-xl">
          Spanish tapas and small plates, nearly all made from scratch, served at seven tables in a 1923 Spanish-style building in Riverside.
        </motion.p>
        <motion.div {...rise(0.6)} className="mt-8 flex flex-wrap gap-3">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-semibold text-paper shadow-lg shadow-coral/30 transition hover:-translate-y-0.5 hover:bg-coral-deep">
            <Phone className="size-5" aria-hidden /> Call to reserve
          </a>
          <a href={site.reserveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3.5 font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-paper hover:text-coal">
            <CalendarCheck className="size-5" aria-hidden /> Book on OpenTable
          </a>
          <a href="#visit" className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 font-semibold text-paper/85 transition hover:text-paper">
            <MapPin className="size-5" aria-hidden /> {site.address.street}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
