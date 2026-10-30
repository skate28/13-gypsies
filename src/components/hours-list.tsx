"use client";

import { useEffect, useState } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { fmt12, status } from "@/lib/hours";

export function HoursList() {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    const id = setTimeout(() => setToday(status().today), 0);
    return () => clearTimeout(id);
  }, []);
  const order = [2, 3, 4, 5, 6, 0, 1];
  return (
    <ul className="divide-y divide-paper/10">
      {order.map((d) => {
        const h = site.hours[d];
        return (
          <li key={d} className={cn("flex justify-between py-1.5", today === d && "font-semibold text-saffron")}>
            <span>{h.label}{today === d ? " · today" : ""}</span>
            <span>{h.open && h.close ? `${fmt12(h.open)} – ${fmt12(h.close)}` : "Closed"}</span>
          </li>
        );
      })}
    </ul>
  );
}
