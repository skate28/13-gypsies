import { cn } from "@/lib/cn";

export function SectionHeading({ kicker, title, light, className }: { kicker: string; title: string; light?: boolean; className?: string }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className={cn("font-serif text-xl italic", light ? "text-saffron" : "text-coral-deep")}>{kicker}</p>
      <h2 className={cn("mt-1 font-slab text-4xl leading-[0.95] tracking-tight md:text-6xl", light ? "text-paper" : "text-ink")}>{title}</h2>
    </div>
  );
}
