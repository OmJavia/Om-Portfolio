import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaFileAlt,
  FaBriefcase,
  FaNewspaper,
} from "react-icons/fa";
import { SiKickstarter } from "react-icons/si";
import front from "../../public/front.png";
import MagneticButton from "../MagneticButton";
import posthog from 'posthog-js';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 pt-4 pb-12 sm:pb-16 relative">
      {/* Ambient amber glow blob behind hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(249,115,22,0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 select-none">
        {/* ── Left: Text ── */}
        <motion.div
          className="flex-1 flex flex-col gap-4 sm:gap-6 text-center lg:text-left items-center lg:items-start"
          variants={staggerContainer}
          initial={false}
          animate="visible"
        >

          {/* Primary Headline */}
          <motion.h1
            variants={fadeUp}
            custom={0.08}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Founding Manager,{" "}
            <span className="text-[#f97316]">AI Product &amp; Go-to-Market</span>
          </motion.h1>

          {/* Supporting statement */}
          <motion.p
            variants={fadeUp}
            custom={0.16}
            className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base lg:text-xl leading-relaxed max-w-xl font-normal tracking-tight"
          >
            I build computer-vision and LLM systems and take connected AI products from idea to launch.
          </motion.p>

          {/* Recruiter-friendly technical & execution differentiator */}
          <motion.p
            variants={fadeUp}
            custom={0.20}
            className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl"
          >
            Combining hands-on technical depth (computer vision, PyTorch, Python backend services, ML pipelines, and RAG) with product decisions, cross-functional execution, and launch operations.
          </motion.p>

          {/* CTA Buttons — Clear Hierarchy */}
          <motion.div
            variants={fadeUp}
            custom={0.24}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mt-1"
          >
            {/* Primary CTA */}
            <MagneticButton
              href="#featured-work"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-200 bg-[#f97316] text-white hover:bg-[#ea6c0a] shadow-amber-sm hover:shadow-amber-md h-11 px-6 py-2.5"
              strength={0.3}
              onClick={() => posthog.capture('view_work_clicked', { source: 'hero_section' })}
            >
              <span>View Featured Work</span>
              <FaArrowRight className="text-xs" />
            </MagneticButton>

            {/* Secondary CTA */}
            <MagneticButton
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-200 bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] text-neutral-900 dark:text-neutral-200 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white shadow-sm h-11 px-5 py-2.5"
              strength={0.3}
              onClick={() => posthog.capture('contact_clicked', { source: 'hero_section' })}
            >
              <span>Hiring? Let&apos;s talk</span>
              <FaArrowRight className="text-xs" />
            </MagneticButton>

            {/* Cal.com Scheduling */}
            <a
              href="https://cal.com/Om-Javia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-200 bg-neutral-100 dark:bg-[#121214] border border-neutral-200 dark:border-[#27272a] text-neutral-700 dark:text-neutral-300 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white h-11 px-4 py-2.5"
              onClick={() => posthog.capture('book_call_clicked', { source: 'hero_section' })}
            >
              <FaCalendarAlt className="text-xs text-[#f97316]" />
              <span>Schedule Call</span>
            </a>

            {/* Resume Action */}
            {/* TODO(Om): add current resume PDF to public/resume.pdf */}

          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            custom={0.32}
            className="flex flex-wrap gap-3 pt-1"
          >
            {[
              {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/omjavia/",
                label: "Om Javia on LinkedIn",
                platform: "linkedin",
              },
              {
                icon: <AiFillTwitterCircle />,
                link: "https://twitter.com/OmJavia1",
                label: "Om Javia on Twitter",
                platform: "twitter",
              },
              {
                icon: <AiFillGithub />,
                link: "https://github.com/omjavia",
                label: "Om Javia on GitHub",
                platform: "github",
              },
              {
                icon: <AiFillInstagram />,
                link: "https://instagram.com/om_javia_",
                label: "Om Javia on Instagram",
                platform: "instagram",
              },
              {
                icon: <MdEmail />,
                link: "mailto:omjavia18@gmail.com",
                label: "Email Om Javia",
                platform: "email",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-3 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] text-xl text-neutral-700 dark:text-neutral-400 hover:text-[#f97316] hover:border-[#f97316]/30 transition-all shadow-sm"
                onClick={() => posthog.capture('social_link_clicked', { platform: social.platform })}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Illustration ── */}
        <motion.div
          className="flex-1 w-full max-w-lg lg:max-w-xl"
          initial={false}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div
            className="p-2.5 rounded-3xl border border-neutral-300 dark:border-[#27272a] bg-white/80 dark:bg-[#18181b]/60 shadow-xl backdrop-blur-sm"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            <Image
              src={front}
              width={700}
              height={700}
              alt="Om Javia's AI engineering workspace — code editor, neural network visualization"
              className="rounded-2xl object-cover w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              placeholder="blur"
              quality={85}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* ── Compact Proof Strip (Max 4 items) ── */}
      <motion.div
        className="mt-10 sm:mt-12 pt-6 border-t border-neutral-200/80 dark:border-[#27272a]"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Proof 1: Kickstarter */}
          <a
            href="https://www.kickstarter.com/projects/megashot/megashot-pickl-smart-pickleball-gaming-device"
            target="_blank"
            rel="noreferrer"
            className="group p-4 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#05ce78]/50 shadow-sm transition-all flex flex-col justify-between"
            onClick={() => posthog.capture('proof_kickstarter_clicked', { source: 'hero_proof_strip' })}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#05ce78] flex items-center gap-1.5">
                <SiKickstarter className="text-sm" /> Kickstarter Launch
              </span>
              <FaExternalLinkAlt className="text-[10px] text-neutral-400 group-hover:text-[#05ce78] transition-colors" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
              Campaign reached 500% of its goal within 24 hours (company-reported).
            </p>
          </a>

          {/* Proof 2: Pickleball.com Product Coverage */}
          <a
            href="https://pickleball.com/news/worlds-first-smart-pickleball-game-launched-by-metashot"
            target="_blank"
            rel="noreferrer"
            className="group p-4 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/50 shadow-sm transition-all flex flex-col justify-between"
            onClick={() => posthog.capture('proof_pickleball_clicked', { source: 'hero_proof_strip' })}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#f97316] flex items-center gap-1.5">
                <FaNewspaper className="text-sm" /> Product Coverage
              </span>
              <FaExternalLinkAlt className="text-[10px] text-neutral-400 group-hover:text-[#f97316] transition-colors" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
              Pickleball.com: &quot;World’s first smart pickleball game launched by MetaShot&quot;
            </p>
          </a>

          {/* Proof 3: Metashot Role Progression */}
          <Link
            href="#experience"
            className="group p-4 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#38bdf8]/50 shadow-sm transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#38bdf8] flex items-center gap-1.5">
                <FaBriefcase className="text-sm" /> Role Progression
              </span>
              <span className="text-[10px] text-neutral-400 group-hover:text-[#38bdf8] transition-colors font-mono">
                View →
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
              Metashot: AI Engineer (July–Oct 2025) → Founding Manager (Nov 2025–Present).
            </p>
          </Link>

          {/* TODO(Om): New York Toy Fair beta-showing reference omitted from public strip pending confirmed dates, booth verification, and photo/press artifact. See CONTENT_VERIFICATION.md */}
        </div>
      </motion.div>
    </section>
  );
}
