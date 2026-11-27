import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import posthog from "posthog-js";
import { profile } from "@/data";
import { ease, fadeUp, stagger } from "./primitives";

export default function Hero() {
  const emphasis = profile.headlineEmphasis;
  const hasEmphasis = emphasis && profile.headline.includes(emphasis);
  const [before, after] = hasEmphasis ? profile.headline.split(emphasis) : [profile.headline, ""];

  return (
    <section id="top" className="relative pt-28 sm:pt-36">
      <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-24">
        {/* Left Column: Personal Introduction */}
        <motion.div className="lg:col-span-7" initial="hidden" animate="show" variants={stagger}>
          <motion.p variants={fadeUp} className="eyebrow">
            Hello, I&apos;m {profile.name} · {profile.positioning}
          </motion.p>

          <motion.h1 variants={fadeUp} className="mt-4 text-display-xl font-semibold text-ink">
            {hasEmphasis ? (
              <>
                {before}
                <span className="text-accent">{emphasis}</span>
                {after}
              </>
            ) : (
              profile.headline
            )}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-body-lg text-muted">
            {profile.shortIntro}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              onClick={() => posthog.capture("view_work_clicked", { source: "hero" })}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Explore My Work <FiArrowDown aria-hidden />
            </Link>
            <Link
              href="#contact"
              onClick={() => posthog.capture("contact_clicked", { source: "hero" })}
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-surface px-6 text-sm font-medium text-ink transition-colors hover:border-ink/30"
            >
              Get in Touch <FiArrowRight aria-hidden />
            </Link>
            <a
              href={profile.resumeUrl}
              download="Om_Javia_Resume.pdf"
              onClick={() => posthog.capture("resume_downloaded", { source: "hero" })}
              className="inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <FiDownload aria-hidden className="text-accent" />
              <span>Resume</span>
            </a>
          </motion.div>

          {profile.availability.available && (
            <motion.div variants={fadeUp} className="mt-9">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{profile.availability.label}</span>
              </div>
            </motion.div>
          )}

          <motion.p variants={fadeUp} className="mt-4 inline-flex items-center gap-1.5 text-meta font-medium text-muted">
            <FiMapPin aria-hidden className="text-accent" />
            <span>{profile.location}</span>
            {profile.tagline && (
              <>
                <span aria-hidden>·</span>
                <span>{profile.tagline}</span>
              </>
            )}
          </motion.p>
        </motion.div>

        {/* Right Column: Editorial Portrait Composition */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[410px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
              <Image
                src={profile.profileImage}
                alt={`${profile.name}, ${profile.positioning}`}
                fill
                priority
                quality={85}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 380px, 410px"
                className="object-cover object-top"
              />
            </div>
            <p className="mt-3 flex items-center justify-between text-xs font-medium text-muted">
              <span>{profile.name}</span>
              <span>{profile.location}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
