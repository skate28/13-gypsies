import { cn } from "@/lib/cn";

export function Wordmark({ className, light }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-baseline gap-1.5 font-slab leading-none tracking-tight", light ? "text-paper" : "text-ink", className)}>
      <span className="text-coral">13</span>
      <span>GYPSIES</span>
    </span>
  );
}
