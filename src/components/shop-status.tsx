"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { status, type Status } from "@/lib/hours";

export function ShopStatus({ className }: { className?: string }) {
  const [s, setS] = useState<Status | null>(null);
  useEffect(() => {
    const tick = () => setS(status());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide", className)}>
      <span className={cn("size-2 rounded-full", s?.open ? "bg-emerald-400 animate-pulse" : "bg-coral")} aria-hidden />
      {s ? s.label : "Tue–Sat from 5 PM"}
    </span>
  );
}
