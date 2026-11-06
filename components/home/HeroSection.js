import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin } from "react-icons/fi";
import OmPic from "../../public/Om_pic.jpg";
import { Button } from "@/components/ui/button";
import posthog from "posthog-js";

export default function HeroSection() {
  return (
    <section id="home" className="pt-6 sm:pt-10 pb-16 sm:pb-24">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10 md:gap-14">
        {/* Left Column: Personal introduction */}
        <div className="flex-1 max-w-2xl space-y-6">
          {/* Status & Location Pill */}
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for product &amp; engineering roles
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span className="inline-flex items-center gap-1 text-neutral-500">
              <FiMapPin className="text-[11px]" /> Bangalore
            </span>
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
              Om Javia
            </h1>
            <p className="text-lg sm:text-xl font-medium text-neutral-600 dark:text-neutral-300 mt-2">
              Founding Manager <span className="text-neutral-400 dark:text-neutral-600 font-light">&amp;</span> AI Product Engineer
            </p>
          </div>

          {/* Concise Human Positioning Statement */}
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            I build AI products and connected systems — from early product decisions to production.
          </p>

          {/* Understated Technical Credibility */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            Currently leading product execution for connected sports hardware at MegaShot. Background in real-time computer vision (PyTorch), LLM retrieval workflows, and taking hardware-software products to market.
          </p>

          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
            Now — Founding Manager at MegaShot, shipping Pickl+. Writing up the Metashot perception budget and the ISRO path-planning decisions.
          </p>

          {/* Clear CTA Hierarchy: 2 primary actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              asChild
              className="bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 h-11 px-5 rounded-xl font-medium"
            >
              <Link
                href="#featured-work"
                onClick={() => posthog.capture("view_work_clicked", { source: "hero" })}
              >
                <span>View my work</span>
                <FiArrowDown className="ml-2 text-sm" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-11 px-5 rounded-xl font-medium border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
            >
              <Link
                href="/contact"
                onClick={() => posthog.capture("contact_clicked", { source: "hero" })}
              >
                <span>Let&apos;s talk</span>
                <FiArrowRight className="ml-2 text-sm" />
              </Link>
            </Button>

            <a
              href="https://cal.com/Om-Javia"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white px-3 py-2 transition-colors ml-1"
              onClick={() => posthog.capture("book_call_clicked", { source: "hero" })}
            >
              Schedule a call →
            </a>
            <a
              href="/resume.pdf"
              className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white px-3 py-2 transition-colors"
              onClick={() => posthog.capture("resume_clicked", { source: "hero" })}
            >
              Resume →
            </a>
          </div>

          {/* Subtle Social Links */}
          <div className="flex items-center gap-4 pt-3 text-neutral-500 dark:text-neutral-400">
            <a
              href="https://github.com/omjavia"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/omjavia/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="text-lg" />
            </a>
            <a
              href="https://twitter.com/OmJavia1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors p-1"
              aria-label="Twitter Profile"
            >
              <FiTwitter className="text-lg" />
            </a>
            <a
              href="mailto:omjavia18@gmail.com"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors p-1"
              aria-label="Send Email"
            >
              <FiMail className="text-lg" />
            </a>
          </div>
        </div>

        {/* Right Column: Tasteful Profile Image */}
        <div className="shrink-0 self-start md:self-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 shadow-md bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={OmPic}
              alt="Om Javia"
              fill
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              sizes="192px"
              quality={75}
              priority
            />
          </div>
          <p className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400 mt-2.5 text-center">
            Om Javia · 2026
          </p>
        </div>
      </div>

      {/* ── Understated Proof Row (3 Clean Signal Facts) ── */}
      <div className="mt-14 pt-8 border-t border-neutral-200/90 dark:border-neutral-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <span className="font-mono text-xs text-[#ea580c] dark:text-[#f97316] font-medium block">
            01 / Flagship Launch
          </span>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
            MegaShot Pickl+
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
            Kickstarter reached 500% funded in 24 hours (company-reported).
          </p>
        </div>

        <div>
          <span className="font-mono text-xs text-[#ea580c] dark:text-[#f97316] font-medium block">
            02 / Production Vision
          </span>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
            Sub-80ms Inference
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
            Real-time cricket shot detection and player feedback pipeline at Metashot.
          </p>
        </div>

        <div>
          <span className="font-mono text-xs text-[#ea580c] dark:text-[#f97316] font-medium block">
            03 / Applied Research
          </span>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
            ISRO Satellite Research
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
            Rover path planning and 800+ annotated HiRISE Martian terrain datasets.
          </p>
        </div>
      </div>
    </section>
  );
}
