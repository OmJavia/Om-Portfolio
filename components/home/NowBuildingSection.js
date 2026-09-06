import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaGamepad, FaWifi, FaMobileAlt, FaBolt } from "react-icons/fa";
import PickleImg from "../../public/Pickle.jpeg";
import posthog from 'posthog-js';

const SYSTEM_STEPS = [
  { step: "01", title: "Motion Sensors", desc: "Smart Paddle Hardware" },
  { step: "02", title: "BLE Sync",       desc: "Low-Latency Data Stream" },
  { step: "03", title: "Swing Logic",    desc: "Stroke Interpreter" },
  { step: "04", title: "Mobile UI",      desc: "Connected App Loop" },
  { step: "05", title: "Game Engine",    desc: "Interactive Gameplay" },
  { step: "06", title: "Feedback",       desc: "Haptic & RGB Response" },
];

export default function NowBuildingSection() {
  return (
    <section id="now-building" className="py-12 scroll-mt-24">
      {/* Section label */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="neural-label">Current Work</span>
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          MegaShot Pickl+ —{" "}
          <span className="text-[#f97316]">Smart At-Home Gaming</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Motion sensors, Bluetooth sync, and a connected gaming app — bringing real pickleball swings into interactive digital gameplay at home.
        </p>
      </motion.div>

      {/* Main card */}
      <motion.div
        className="rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] overflow-hidden shadow-xl relative"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="absolute -right-24 -top-24 w-[500px] h-[500px] pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* ── Top grid: info left + image right ── */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 border-b border-neutral-200 dark:border-[#27272a]">

          {/* Left — description, pills, role cards, CTA */}
          <div className="lg:col-span-7 space-y-6">

            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                CURRENT WORK
              </span>
              <span className="font-mono text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                ACTIVE PRODUCT
              </span>
            </div>

            {/* Title */}
            <div>
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                Motion-Sensing Pickleball Paddle &amp; Connected Gaming
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mt-2">
                MegaShot Pickl+ bridges physical sports hardware with connected digital gaming. Players use a smart paddle that tracks swings, stroke power, and velocity in real time — turning every hit into interactive gameplay at home.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Motion Sensing",           icon: FaBolt },
                { label: "Real-Time Swing Tracking", icon: FaGamepad },
                { label: "Connected Mobile Gameplay", icon: FaMobileAlt },
                { label: "Bluetooth Connectivity",   icon: FaWifi },
              ].map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="font-mono text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-700 dark:text-neutral-300 shadow-sm flex items-center gap-1.5"
                >
                  <Icon className="text-[#f97316] text-xs" />
                  {label}
                </span>
              ))}
            </div>

            {/* Innovation & Role cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#f97316] tracking-wider block mb-1">
                  THE INNOVATION
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Transforming at-home physical sports practice into an immersive, connected digital gaming experience with instant feedback.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#f97316] tracking-wider block mb-1">
                  MY ROLE
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  AI Product Engineer — motion data integration, mobile gameplay workflows, product architecture, and user testing loops.
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-[#09090b]/80 border border-neutral-200 dark:border-[#27272a] px-4 py-2.5 rounded-2xl inline-block">
              Hardware <span className="text-[#f97316]">×</span> Software <span className="text-[#f97316]">×</span> Interactive Gaming <span className="text-[#f97316]">×</span> Intelligent Systems
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://pickleball.themegashot.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl text-sm font-semibold bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all px-6 py-3"
                onClick={() => posthog.capture('view_megashot_project_clicked', { source: 'now_building_section' })}
              >
                <span>View Project</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
              <Link
                href="/case-studies/megashot-pickl"
                className="inline-flex items-center gap-2 rounded-2xl text-sm font-semibold bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-900 dark:text-neutral-200 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white transition-all px-6 py-3"
                onClick={() => posthog.capture('view_megashot_case_study', { source: 'now_building_section' })}
              >
                <span>Deep-Dive Case Study</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Right — product image */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-[#27272a] bg-neutral-900 shadow-lg">
              <Image
                src={PickleImg}
                alt="MegaShot Pickl+ Smart Pickleball Gaming Platform"
                className="w-full object-cover h-auto hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 480px"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
              pickleball.themegashot.com · 2025 – Present
            </p>
          </div>
        </div>

        {/* ── Bottom strip: product system architecture ── */}
        <div className="relative z-10 p-8 sm:p-10 bg-neutral-50 dark:bg-[#09090b]/50">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#f97316] block mb-4">
            PRODUCT SYSTEM ARCHITECTURE
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SYSTEM_STEPS.map((node, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm"
              >
                <span className="font-mono text-[10px] font-extrabold text-[#f97316]">{node.step}</span>
                <h4 className="font-bold text-xs text-neutral-950 dark:text-white mt-1 leading-snug">{node.title}</h4>
                <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
