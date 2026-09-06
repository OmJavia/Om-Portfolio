import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaGamepad, FaWifi, FaMobileAlt, FaBolt } from "react-icons/fa";
import posthog from 'posthog-js';

export default function NowBuildingSection() {
  return (
    <section id="now-building" className="py-12 scroll-mt-24">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-gradient-to-b from-white via-neutral-50 to-white dark:from-[#18181b] dark:via-[#121215] dark:to-[#18181b] p-8 sm:p-10 lg:p-12 shadow-lg"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ambient radial glow */}
        <div
          aria-hidden
          className="absolute -right-20 -top-20 w-[450px] h-[450px] pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Top Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                CURRENT WORK
              </span>
              <span className="font-mono text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                ACTIVE PRODUCT
              </span>
            </div>

            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                MegaShot Pickl+
              </h2>
              <p className="font-mono text-sm sm:text-base font-semibold text-[#f97316] mt-1">
                Smart At-Home Pickleball Gaming
              </p>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl">
              MegaShot Pickl+ is a motion-sensing smart pickleball paddle and connected gaming experience that brings real swings into interactive gameplay at home.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: "Motion Sensing", icon: FaBolt },
                { label: "Real-Time Swing Tracking", icon: FaGamepad },
                { label: "Connected Mobile Gameplay", icon: FaMobileAlt },
                { label: "Bluetooth Connectivity", icon: FaWifi },
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-700 dark:text-neutral-300 shadow-sm flex items-center gap-1.5"
                >
                  <item.icon className="text-[#f97316] text-xs" />
                  {item.label}
                </span>
              ))}
            </div>

            {/* Core Capability Tagline */}
            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold block mb-2">
                Intersection
              </span>
              <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-[#09090b]/80 border border-neutral-200 dark:border-[#27272a] px-4 py-2.5 rounded-2xl inline-block">
                Hardware <span className="text-[#f97316]">×</span> Software <span className="text-[#f97316]">×</span> Interactive Gaming <span className="text-[#f97316]">×</span> Intelligent Systems
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://pickleball.themegashot.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl text-sm font-semibold bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all shadow-amber-sm px-6 py-3"
                onClick={() => posthog.capture('view_megashot_project_clicked', { source: 'now_building_section' })}
              >
                <span>View Project</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>

              <Link
                href="/case-studies/megashot-pickl"
                className="inline-flex items-center gap-2 rounded-2xl text-sm font-semibold bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-900 dark:text-neutral-200 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white transition-all shadow-sm px-6 py-3"
              >
                <span>Explore Case Study</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-neutral-900 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/10 rounded-full blur-2xl" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#f97316] font-bold">
                    PRODUCT SCOPE
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400">
                    2025 - PRESENT
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#f97316] font-bold mt-0.5">01</span>
                    <p><strong className="text-white">Motion Data Integration:</strong> Translating sensor inputs from swings into gameplay actions.</p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-[#f97316] font-bold mt-0.5">02</span>
                    <p><strong className="text-white">Mobile Gameplay Experience:</strong> Building connected mobile interaction loops and UI.</p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-[#f97316] font-bold mt-0.5">03</span>
                    <p><strong className="text-white">Product Architecture:</strong> Bridging software, interactive gaming logic, and feedback systems.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Role: AI Product Engineer</span>
                  <a
                    href="https://pickleball.themegashot.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#f97316] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    pickleball.themegashot.com <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
