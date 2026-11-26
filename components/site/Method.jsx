import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { methodStages } from "@/data";
import { Reveal, SectionHeading } from "./primitives";

export default function Method() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="method" className="container-x py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="How I build products"
              title="From problem discovery to production."
              intro="Six stages, each grounded in a real product decision."
            />
          </div>
        </div>
        <div ref={ref} className="relative lg:col-span-8">
          <div aria-hidden className="absolute bottom-2 left-[15px] top-2 w-px bg-line" />
          <motion.div
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-cobalt"
          />
          <ol className="space-y-10">
            {methodStages.map((m) => (
              <Reveal as="li" key={m.id} className="relative pl-14">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-line bg-surface font-mono text-[11px] text-cobalt">
                  {m.id}
                </span>
                <h3 className="font-display text-h2 text-ink">{m.title}</h3>
                <p className="mt-1 text-muted">{m.summary}</p>
                <p className="mt-4 rounded-2xl border border-line bg-surface p-4 text-sm text-ink">
                  <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.12em] text-signal-teal">
                    In practice
                  </span>
                  {m.example}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
