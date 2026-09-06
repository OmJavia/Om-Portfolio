import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import MetashotImg from "../../public/Metashot.png";
import posthog from 'posthog-js';

export default function FeaturedCaseStudySection() {
  return (
    <section id="featured-case-study" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="neural-label">Featured Case Study</span>
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          MetaShot — <span className="text-[#f97316]">Real-Time Sports AI</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Deep-dive into how computer vision, low-latency inference pipelines, and FastAPI APIs deliver player-facing cricket analytics.
        </p>
      </motion.div>

      {/* Main Feature Container */}
      <motion.div
        className="rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 border-b border-neutral-200 dark:border-[#27272a]">
          {/* Left Description & Problem/Role */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "YOLO", "OpenCV", "FastAPI", "Sports AI"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white">
                Real-Time Cricket Shot Detection & Feedback Engine
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mt-2">
                Metashot brings objective, automated coaching analytics to cricket players by combining computer vision detection models with instant feedback loops.
              </p>
            </div>

            {/* Problem & Role Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#f97316] tracking-wider block mb-1">
                  THE PROBLEM
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Batting coaching feedback was expensive, subjective, and inaccessible for everyday practice sessions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#f97316] tracking-wider block mb-1">
                  MY ROLE
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Owned CV shot detection pipeline optimization, low-latency inference, FastAPI API design, and 185+ player feedback loops.
                </p>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-neutral-200 dark:border-[#27272a]">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-neutral-950 dark:text-white">185+</span>
                <span className="block text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Players in Feedback Loops</span>
              </div>
              <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-800" />
              <div>
                <span className="text-2xl sm:text-3xl font-black text-neutral-950 dark:text-white">&lt;80ms</span>
                <span className="block text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Inference Pipeline Latency</span>
              </div>
              <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-800" />
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#f97316]">Real-Time</span>
                <span className="block text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Shot Detection Speed</span>
              </div>
            </div>
          </div>

          {/* Right Preview Image */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-[#27272a] bg-neutral-900 shadow-md">
              <Image
                src={MetashotImg}
                alt="MetaShot Real-Time Cricket AI Platform"
                className="w-full object-cover h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/case-studies/metashot"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl text-sm font-semibold bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all shadow-amber-sm px-6 py-3"
                onClick={() => posthog.capture('view_metashot_case_study', { source: 'featured_section' })}
              >
                <span>View Full Case Study</span>
                <FaArrowRight className="text-xs" />
              </Link>
              <a
                href="https://metashot.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-semibold bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-800 dark:text-neutral-200 hover:text-[#f97316] transition-colors px-4 py-3"
              >
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>

        {/* Visual System Workflow Architecture */}
        <div className="p-8 sm:p-10 bg-neutral-50 dark:bg-[#09090b]/50">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#f97316] block mb-4">
            AI WORKFLOW ARCHITECTURE
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: "01", title: "Video Input", desc: "Camera / Practice Feed" },
              { step: "02", title: "Frame Processing", desc: "OpenCV Extraction" },
              { step: "03", title: "CV Pipeline", desc: "YOLO Detection Model" },
              { step: "04", title: "Classification", desc: "Cricket Shot Categories" },
              { step: "05", title: "Backend API", desc: "FastAPI + Redis Async" },
              { step: "06", title: "Player Feedback", desc: "Weak Shot Analytics" },
            ].map((node, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm relative group"
              >
                <span className="font-mono text-[10px] font-extrabold text-[#f97316]">
                  {node.step}
                </span>
                <h4 className="font-bold text-xs text-neutral-950 dark:text-white mt-1 leading-snug">
                  {node.title}
                </h4>
                <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
