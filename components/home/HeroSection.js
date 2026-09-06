import { motion } from "framer-motion";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
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
    <section id="home" className="scroll-mt-24 pt-4 pb-16 relative">
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

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 select-none">
        {/* ── Left: Text ── */}
        <motion.div
          className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          variants={staggerContainer}
          initial={false}
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUp} custom={0.04}>
            <span className="font-mono text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 shadow-sm">
              AI PRODUCT ENGINEER
            </span>
          </motion.div>

          {/* Big Heading */}
          <motion.h1
            variants={fadeUp}
            custom={0.08}
            className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Building{" "}
            <span className="text-[#f97316]">production-ready</span> AI
            products from idea to deployment.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            custom={0.16}
            className="text-neutral-600 dark:text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-xl font-normal tracking-tight"
          >
            I work across Computer Vision, LLMs, RAG, backend systems, and
            intelligent products to turn emerging AI capabilities into things
            people can actually use.
          </motion.p>

          {/* CTA Buttons — Clear Hierarchy */}
          <motion.div
            variants={fadeUp}
            custom={0.24}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mt-2"
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
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-200 bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] text-neutral-900 dark:text-neutral-200 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white shadow-sm h-11 px-6 py-2.5"
              strength={0.3}
              onClick={() => posthog.capture('contact_clicked', { source: 'hero_section' })}
            >
              <span>Let&apos;s Work Together</span>
              <FaArrowRight className="text-xs" />
            </MagneticButton>

            {/* Subtle CTA */}
            <a
              href="https://drive.google.com/file/d/1piCpXUSJk7BZzov8hJe--R90HaqbKr5L/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-xs sm:text-sm font-semibold tracking-tight text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white px-4 py-2.5 transition-colors"
              onClick={() => posthog.capture('resume_clicked', { source: 'hero_section' })}
            >
              <span>Download Resume</span>
              <FaArrowRight className="text-[10px]" />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            custom={0.32}
            className="flex flex-wrap gap-3 pt-2"
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
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
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
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
