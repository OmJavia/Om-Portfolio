import { capabilities } from "@/data/content";
import { Reveal, SectionHeading } from "./primitives";

export default function Capabilities() {
  return (
    <section id="capabilities" className="container-x py-20 sm:py-24">
      <SectionHeading
        eyebrow="Capabilities"
        title="Where AI engineering meets GTM execution."
        intro="I work across applied AI, product definition, and go-to-market systems—connecting technical implementation directly to market adoption."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal
            as="li"
            key={c.title}
            delay={(i % 3) * 0.05}
            className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-6 sm:p-7 transition-colors hover:border-ink/25"
          >
            <div>
              <span className="text-xs font-semibold text-accent">0{i + 1}</span>
              <h3 className="mt-2.5 text-h2 font-semibold text-ink">{c.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{c.text}</p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-line/70 pt-4" aria-label={`${c.title} tools`}>
              {c.tags.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
