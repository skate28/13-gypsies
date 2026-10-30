import { site } from "@/content/site";

const TZ = "America/New_York";

function nowParts(date: Date) {
  const f = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
  const parts = Object.fromEntries(f.formatToParts(date).map((p) => [p.type, p.value]));
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday);
  return { day, minutes: Number(parts.hour) * 60 + Number(parts.minute) };
}
const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));

export function fmt12(t: string): string {
  const h = Number(t.slice(0, 2));
  const m = t.slice(3, 5);
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}${m === "00" ? "" : `:${m}`} ${h < 12 ? "AM" : "PM"}`;
}

export type Status = { open: boolean; label: string; today: number };

export function status(date = new Date()): Status {
  const { day, minutes } = nowParts(date);
  const today = site.hours[day];
  if (today.open && today.close && minutes >= toMin(today.open) && minutes < toMin(today.close)) {
    return { open: true, label: `Open now · until ${fmt12(today.close)}`, today: day };
  }
  if (today.open && minutes < toMin(today.open)) {
    return { open: false, label: `Opens today at ${fmt12(today.open)}`, today: day };
  }
  for (let i = 1; i <= 7; i++) {
    const d = site.hours[(day + i) % 7];
    if (d.open) return { open: false, label: `Closed · opens ${i === 1 ? "tomorrow" : d.label} at ${fmt12(d.open)}`, today: day };
  }
  return { open: false, label: "Closed", today: day };
}
