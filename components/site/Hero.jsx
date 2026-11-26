import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowRight, FiMapPin } from "react-icons/fi";
import posthog from "posthog-js";
import { profile } from "@/data";
import GlassSurface from "./GlassSurface";
import PaddleStage from "../three/PaddleStage";
import { fadeUp, stagger } from "./primitives";

const callouts = [
  { label: "Motion sensing", pos: "left-[2%] top-[18%]", dot: "bg-cobalt" },
  { label: "BLE connectivity", pos: "right-[0%] top-[30%]", dot: "bg-signal-teal" },
  { label: "Swing interpretation", pos: "left-[0%] top-[52%]", dot: "bg-signal-lime" },
  { label: "Mobile gameplay", pos: "right-[4%] top-[64%]", dot: "bg-signal-coral" },
  { label: "Haptic feedback", pos: "left-[10%] bottom-[10%]", dot: "bg-ink" },
];

export default function Hero() {
  const emphasis = profile.headlineEmphasis;
  const hasEmphasis = emphasis && profile.headline.includes(emphasis);
  const [before, after] = hasEmphasis ? profile.headline.split(emphasis) : [profile.headline, ""];

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden className="grid-paper absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,#000_10%,transparent_70%)]" />
      <div aria-hidden className="absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-cobalt/15 blur-3xl" />
      <div aria-hidden className="absolute right-[30%] top-[55%] h-72 w-72 rounded-full bg-signal-lime/30 blur-3xl" />

      <div className="container-x relative grid items-center gap-10 pb-16 lg:grid-cols-12 lg:gap-6 lg:pb-24">
        <motion.div className="lg:col-span-7" initial="hidden" animate="show" variants={stagger}>
          <motion.p variants={fadeUp} className="eyebrow text-cobalt">{profile.positioning}</motion.p>
          <motion.h1 variants={fadeUp} className="mt-5 font-display text-display-xl text-ink">
            {hasEmphasis ? (
              <>
                {before}
                <em className="text-cobalt">{emphasis}</em>
                {after}
              </>
            ) : (
              profile.headline
            )}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-body-lg text-muted">
            {profile.shortIntro}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              onClick={() => posthog.capture("view_work_clicked", { source: "hero" })}
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-ink px-6 text-sm font-medium text-white shadow-lg shadow-ink/20 transition-transform hover:-translate-y-0.5"
            >
              Explore My Work <FiArrowDown aria-hidden />
            </Link>
            <Link
              href="#contact"
              onClick={() => posthog.capture("contact_clicked", { source: "hero" })}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-line bg-white px-6 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s Connect <FiArrowRight aria-hidden />
            </Link>
          </motion.div>

          {profile.availability.available && (
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <GlassSurface className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-teal opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-teal" />
                </span>
                {profile.availability.label}
              </GlassSurface>
            </motion.div>
          )}
          <motion.p variants={fadeUp} className="mt-4 inline-flex items-center gap-1.5 font-mono text-meta text-muted">
            <FiMapPin aria-hidden /> {profile.tagline ? `${profile.tagline} · ${profile.location}` : profile.location}
          </motion.p>
        </motion.div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px]">
            <PaddleStage className="absolute inset-0" />
            {callouts.map((c) => (
              <span
                key={c.label}
                aria-hidden
                className={`glass pointer-events-none absolute hidden items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] text-ink sm:inline-flex ${c.pos}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                {c.label}
              </span>
            ))}
          </div>
          <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden" aria-label="Paddle capabilities">
            {callouts.map((c) => (
              <li key={c.label} className="tag">{c.label}</li>
            ))}
          </ul>
          <p className="mt-3 text-center font-mono text-[11px] text-muted">
            Stylised hardware model · drag to rotate · scroll to inspect sensor module
          </p>
        </div>
      </div>
    </section>
  );
}
