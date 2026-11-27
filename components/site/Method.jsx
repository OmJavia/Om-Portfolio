import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { methodStages } from "@/data";
import { Reveal, SectionHeading } from "./primitives";

export default function Method() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="method" className="container-x py-20 sm:py-24">
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
            className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-accent"
          />
          <ol className="space-y-8">
            {methodStages.map((m) => (
              <Reveal as="li" key={m.id} className="relative pl-12">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-xs font-semibold text-accent">
                  {m.id}
                </span>
                <h3 className="text-h2 font-semibold text-ink">{m.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{m.summary}</p>
                <p className="mt-3 rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-ink">
                  <span className="mr-2 text-xs font-semibold uppercase tracking-[0.06em] text-accent">
                    In practice:
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
