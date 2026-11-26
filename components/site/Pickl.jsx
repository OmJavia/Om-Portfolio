import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";
import posthog from "posthog-js";
import { pickl, architecture } from "@/data/content";
import GlassSurface from "./GlassSurface";
import { Reveal } from "./primitives";

function Architecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);

  // The signal walks the six stages until the visitor picks one.
  useEffect(() => {
    if (!inView || touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % architecture.length), 2400);
    return () => clearInterval(id);
  }, [inView, touched]);

  const pick = (i) => { setTouched(true); setActive(i); };
  const stage = architecture[active];

  return (
    <div ref={ref} className="mt-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3 className="font-display text-h1 text-white">How a swing becomes gameplay</h3>
        <p className="font-mono text-[11px] text-white/50">Select a stage</p>
      </div>
      <div className="relative mt-8">
        <svg aria-hidden className="absolute left-0 right-0 top-7 hidden h-2 w-full lg:block" preserveAspectRatio="none" viewBox="0 0 1000 8">
          <line x1="40" y1="4" x2="960" y2="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <line x1="40" y1="4" x2="960" y2="4" stroke="#C8E879" strokeWidth="2.5" className="signal-line" strokeLinecap="round" />
        </svg>
        <ol className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {architecture.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  aria-pressed={on}
                  aria-controls="arch-detail"
                  onClick={() => pick(i)}
                  className={`group flex h-full w-full flex-col items-start rounded-2xl border p-4 text-left transition-colors ${on ? "border-signal-lime/60 bg-white/10" : "border-white/10 bg-white/[0.03] hover:border-white/30"}`}
                >
                  <span className={`grid h-7 w-7 place-items-center rounded-full font-mono text-[11px] transition-colors ${on ? "bg-signal-lime text-ink" : "bg-white/10 text-white/70"}`}>{s.id}</span>
                  <span className="mt-4 text-sm font-semibold text-white">{s.title}</span>
                  <span className="mt-1 text-xs text-white/55">{s.short}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <div id="arch-detail" aria-live="polite" className="mt-4 min-h-[88px] rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <AnimatePresence mode="wait">
          <motion.p key={stage.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }} className="text-white/80">
            <span className="mr-2 font-mono text-signal-lime">{stage.id} · {stage.title}</span>
            {stage.detail}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Telemetry() {
  const rows = [
    ["Swing type", "Forehand drive"],
    ["Contact timing", "On beat"],
    ["Shot class", "Dink → drive"],
    ["Rally streak", "7"],
    ["Feedback", "Haptic pulse sent"],
  ];
  return (
    <GlassSurface tone="dark" className="rounded-2xl p-5" role="figure" aria-label="Illustrative telemetry card with sample values, not live data">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">Swing readout</p>
        <span className="rounded-md bg-signal-coral/20 px-2 py-0.5 font-mono text-[10px] text-signal-coral">Illustrative · not live data</span>
      </div>
      <div className="mt-4">
        <div className="flex justify-between font-mono text-[11px] text-white/60"><span>Swing power</span><span>sample</span></div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-signal-teal to-signal-lime" />
        </div>
      </div>
      <dl className="mt-4 divide-y divide-white/10 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between py-2">
            <dt className="text-white/55">{k}</dt>
            <dd className="font-mono text-white">{v}</dd>
          </div>
        ))}
      </dl>
    </GlassSurface>
  );
}

export default function Pickl() {
  return (
    <section id="work" aria-labelledby="pickl-title" className="surface-night py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
          <span className="rounded-full bg-signal-lime px-2.5 py-1 text-ink">Flagship</span>
          <span>MegaShot Pickl+</span>
          <span aria-hidden>·</span>
          <span>{pickl.period}</span>
        </Reveal>
        <Reveal as="h2" id="pickl-title" className="mt-6 max-w-4xl font-display text-display-lg text-white">
          {pickl.title}
        </Reveal>
        <Reveal as="p" className="mt-4 font-mono text-meta text-signal-lime">{pickl.role}</Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-6">
            <Reveal>
              <p className="text-body-lg text-white/85">{pickl.intro}</p>
              <h3 className="mt-8 eyebrow text-white/50">The problem</h3>
              <p className="mt-3 text-white/70">{pickl.problem}</p>
            </Reveal>
            <Reveal>
              <h3 className="eyebrow text-white/50">Product execution</h3>
              <ul className="mt-4 space-y-3">
                {pickl.execution.map((e) => (
                  <li key={e} className="flex gap-3 text-white/80">
                    <FiCheck aria-hidden className="mt-1 shrink-0 text-signal-lime" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="flex flex-wrap gap-3">
              <Link
                href="/case-studies/megashot-pickl"
                onClick={() => posthog.capture("view_megashot_case_study", { source: "pickl_section" })}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Read the case study <FiArrowRight aria-hidden />
              </Link>
              <a href={pickl.site} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-5 text-sm font-medium text-white hover:border-white/50">
                Product site <FiArrowUpRight aria-hidden />
              </a>
              <a href={pickl.kickstarter} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-5 text-sm font-medium text-white hover:border-white/50">
                Kickstarter <FiArrowUpRight aria-hidden />
              </a>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <Reveal className="relative aspect-video overflow-hidden rounded-3xl border border-white/10">
              <Image src="/Pickle.jpeg" alt="MegaShot Pickl+ smart paddle, product photograph" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
            </Reveal>
            <div className="relative -mt-16 ml-auto w-[88%] sm:w-[70%]">
              <Telemetry />
            </div>
          </div>
        </div>

        <ol className="mt-20 grid gap-4 md:grid-cols-3">
          {pickl.story.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 0.08} className="rounded-2xl border border-white/10 p-6">
              <p className="font-mono text-[11px] text-signal-lime">State 0{i + 1}</p>
              <p className="mt-3 font-display text-h2 text-white">{s.step}</p>
              <p className="mt-2 text-sm text-white/65">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Architecture />

        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h3 className="font-display text-h1 text-white">From prototype to public launch</h3>
            <p className="mt-4 text-white/65">
              The same person who wrote the PRDs ran the go-to-market. That is the point: the launch story was built from what
              the product could actually do.
            </p>
            <a href={pickl.press} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm text-signal-lime hover:underline">
              Featured on Pickleball.com <FiArrowUpRight aria-hidden />
            </a>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {pickl.gtm.map((g, i) => (
              <Reveal as="li" key={g.title} delay={i * 0.06} className="rounded-2xl bg-white/[0.05] p-6">
                <p className="text-sm font-semibold text-white">{g.title}</p>
                <p className="mt-2 text-sm text-white/65">{g.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
