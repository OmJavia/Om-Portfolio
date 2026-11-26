import { capabilities } from "@/data/content";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./primitives";

// Each tone is a distinct surface, so the grid reads as six different disciplines, not six copies.
const tones = {
  cobalt: "bg-cobalt text-white [--sub:rgba(255,255,255,0.75)] [--chip:rgba(255,255,255,0.16)]",
  lime: "bg-signal-lime text-ink [--sub:rgba(21,23,28,0.7)] [--chip:rgba(21,23,28,0.08)]",
  teal: "bg-surface text-ink border border-line [--sub:#626B78] [--chip:rgba(34,184,168,0.12)]",
  ink: "bg-night text-white [--sub:rgba(255,255,255,0.7)] [--chip:rgba(255,255,255,0.1)]",
  coral: "bg-[#FFE6E1] text-ink [--sub:rgba(21,23,28,0.7)] [--chip:rgba(255,130,110,0.25)]",
};
const sizes = { wide: "lg:col-span-2", tall: "lg:row-span-2" };

export default function Capabilities() {
  return (
    <section id="capabilities" className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="What I bring"
        title="Where technology meets product execution."
        intro="I work across AI engineering, product development, technical execution and go-to-market, taking products from early discovery to real-world deployment and launch."
      />
      <ul className="mt-12 grid auto-rows-[minmax(220px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal
            as="li"
            key={c.title}
            delay={(i % 3) * 0.06}
            whileHover={{ y: -4 }}
            className={cn(
              "group flex flex-col justify-between rounded-3xl p-7",
              tones[c.tone],
              sizes[c.size]
            )}
          >
            <div>
              <span className="font-mono text-[11px] opacity-60">0{i + 1}</span>
              <h3 className={cn("mt-3 font-display", c.size ? "text-h1" : "text-h2")}>{c.title}</h3>
              <p className="mt-3 max-w-md text-[15px] text-[color:var(--sub)]">{c.text}</p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={`${c.title} tools`}>
              {c.tags.map((t) => (
                <li key={t} className="rounded-md bg-[color:var(--chip)] px-2 py-1 font-mono text-[11px]">{t}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
