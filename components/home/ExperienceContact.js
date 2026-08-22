import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import QR from "../../public/Download Resume.png";
import Metashot from "../../public/Metashot.png";
import Sac from "../../public/sac.png";
import Ace from "../../public/ace-infoway.png";
import Apoliums from "../../public/Apoliums.png";
import Relcon from "../../public/relcon.png";
import MagneticButton from "../MagneticButton";
import MetricCounter from "../MetricCounter";

export default function ExperienceContact() {
  return (
    <>
      <section id="experience" className="py-20 scroll-mt-24">
        <motion.div
          className="mb-12"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="neural-label">Career</span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Past <span className="text-[#f97316]">Experiences</span>{" "}
            <span className="text-3xl">💼</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-2xl">
            I have always been eager to explore{" "}
            <span className="text-[#38bdf8]">development and analytics</span>,
            gaining hands-on experience by building projects, cloning websites,
            and working with data to uncover insights, refine skills, and solve
            real-world problems.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto py-10 mt-6">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 border-l-2 border-dashed border-[#f97316]/20 hidden md:block" />

          {/* ── Metashot AI Product Engineer ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
              <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">
                November 2025 — Present
              </p>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Bangalore, Karnataka
              </p>
            </div>
            <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-[#f97316] timeline-dot-amber border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xl" aria-hidden>
                💼
              </span>
            </div>
            <div className="order-1 md:order-2 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-amber-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Metashot}
                    width={50}
                    height={50}
                    alt="Metashot company logo"
                    className="rounded-lg shadow-sm"
                  />
                  <div>
                    <h3
                      className="text-lg font-bold text-neutral-950 dark:text-white"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Metashot
                    </h3>
                    <h4 className="font-mono text-xs font-semibold text-[#f97316]">
                      AI Product Engineer
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Product Strategy", "Roadmapping", "FastAPI", "GTM"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Led cross-functional execution of a sports gaming product
                    across 3 workstreams: Engineering, UX and Go-to-Market.
                  </li>
                  <li>
                    Translated user feedback into PRDs, prioritizing features
                    for a Sport Tech product in the $9.1B global pickleball
                    market.
                  </li>
                  <li>
                    Validated product-market fit through user feedback from{" "}
                    <MetricCounter value={185} suffix="+" showPing={false} />{" "}
                    players, driving{" "}
                    <MetricCounter value={12} suffix="+" showPing={false} />{" "}
                    iterative product improvements.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── Metashot AI Engineer ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.05,
            }}
          >
            <div className="order-1 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-emerald-500/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Metashot}
                    width={50}
                    height={50}
                    alt="Metashot company logo"
                    className="rounded-lg shadow-sm"
                  />
                  <div>
                    <h3
                      className="text-lg font-bold text-neutral-950 dark:text-white"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Metashot
                    </h3>
                    <h4 className="font-mono text-xs font-semibold text-emerald-400">
                      AI Engineer
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["OpenCV", "Deep Learning", "PyTorch"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Strengthened real-time cricket shot detection by{" "}
                    <MetricCounter value={33} suffix="%" /> using OpenCV and
                    deep learning, integrated into Unity engine.
                  </li>
                  <li>
                    Refined churn prediction and user segmentation models,
                    increasing retention by{" "}
                    <MetricCounter value={17} suffix="%" /> & repeat play
                    frequency by <MetricCounter value={21} suffix="%" />.
                  </li>
                  <li>
                    Optimized computer vision pipelines using PyTorch and
                    OpenCV, reducing real-time prediction latency by{" "}
                    <MetricCounter value={28} suffix="%" />.
                  </li>
                </ul>
              </div>
            </div>
            <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-emerald-500 timeline-dot-emerald border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xl" aria-hidden>
                🏏
              </span>
            </div>
            <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
              <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">
                July 2025 — October 2025
              </p>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Bangalore, Karnataka
              </p>
            </div>
          </motion.div>

          {/* ── Apoliums Infotech ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
          >
            <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
              <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">
                May 2024 — July 2025
              </p>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Indore, Madhya Pradesh
              </p>
            </div>
            <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-[#f97316] timeline-dot-amber border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xl" aria-hidden>
                💼
              </span>
            </div>
            <div className="order-1 md:order-2 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-amber-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Apoliums}
                    width={50}
                    height={50}
                    alt="Apoliums Infotech company logo"
                    className="rounded-lg shadow-sm"
                  />
                  <div>
                    <h3
                      className="text-lg font-bold text-neutral-950 dark:text-white"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Apoliums Infotech
                    </h3>
                    <h4 className="font-mono text-xs font-semibold text-[#f97316]">
                      Associate AI Engineer
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "Pandas", "FastAPI", "CI/CD"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Architected feature engineering and preprocessing pipelines
                    in Python and Pandas, cutting model training time by{" "}
                    <MetricCounter value={25} suffix="%" />.
                  </li>
                  <li>
                    Deployed FastAPI endpoints for real-time ML model
                    predictions, contributing to 7K+ user growth on the
                    platform.
                  </li>
                  <li>
                    Automated model deployment workflows with CI/CD, shortening
                    release cycles and boosting performance by{" "}
                    <MetricCounter value={30} suffix="%" />.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── ISRO ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
          >
            <div className="order-1 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-red-500/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(239,68,68,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Sac}
                    width={50}
                    height={50}
                    alt="ISRO Space Applications Centre logo"
                    className="rounded-lg shadow-sm bg-white p-0.5"
                  />
                  <div>
                    <h3
                      className="text-lg font-bold text-neutral-950 dark:text-white leading-tight"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Indian Space Research Organisation (ISRO)
                    </h3>
                    <h4 className="font-mono text-xs font-semibold text-red-400">
                      Research & Development Intern
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["PyTorch", "Neural Networks", "Path Planning"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Preprocessed and annotated{" "}
                    <MetricCounter value={800} showPing={false} /> HiRISE
                    satellite image datasets and developed neural network models
                    using PyTorch.
                  </li>
                  <li>
                    Engineered obstacle-aware path planning for rover, boosted
                    navigation efficiency by{" "}
                    <MetricCounter value={87.4} suffix="%" decimals={1} /> and
                    ensured safe traversal.
                  </li>
                  <li>
                    Labeled 5 terrain types (including craters and boulders) to
                    build high-quality datasets for rover navigation models.
                  </li>
                </ul>
              </div>
            </div>
            <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-red-500 timeline-dot-red border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xl" aria-hidden>
                🚀
              </span>
            </div>
            <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
              <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">
                February 2024 — May 2024
              </p>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Ahmedabad, Gujarat
              </p>
            </div>
          </motion.div>

          {/* ── Ace Infoway ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
              <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">
                July 2023 — August 2023
              </p>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Rajkot, Gujarat
              </p>
            </div>
            <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-purple-500 timeline-dot-purple border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xl" aria-hidden>
                💻
              </span>
            </div>
            <div className="order-1 md:order-2 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-purple-500/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(168,85,247,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Ace}
                    width={50}
                    height={50}
                    alt="Ace Infoway company logo"
                    className="rounded-lg shadow-sm"
                  />
                  <div>
                    <h3
                      className="text-lg font-bold text-neutral-950 dark:text-white"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Ace Infoway
                    </h3>
                    <h4 className="font-mono text-xs font-semibold text-purple-400">
                      Software Engineer Intern
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["E-Commerce", "Frontend", "APIs"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Introduced an abandoned cart push notification feature,
                    boosting conversions by{" "}
                    <MetricCounter value={25} suffix="%" />.
                  </li>
                  <li>
                    Restructured Budgie Cart, integrating mobile-first eCommerce
                    capabilities & enhancing the experience for 3M+ users.
                  </li>
                  <li>
                    Accelerated page load performance by optimizing frontend
                    assets and APIs, reducing average load time by{" "}
                    <MetricCounter value={30} suffix="%" />.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── Relcon System ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.25,
            }}
          >
            <div className="order-1 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-blue-500/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Relcon}
                    width={50}
                    height={50}
                    alt="Relcon System company logo"
                    className="rounded-lg shadow-sm"
                  />
                  <div>
                    <h3
                      className="text-lg font-bold text-neutral-950 dark:text-white"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Relcon System
                    </h3>
                    <h4 className="font-mono text-xs font-semibold text-blue-400">
                      Software Engineer Intern
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Dashboard", "Operations"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Redefined the smart fuel mobile dispensing unit, ensuring
                    compatibility across 5 OS platforms for improved
                    versatility.
                  </li>
                  <li>
                    Constructed a dashboard to monitor fuel consumption and
                    manage assignments, enhancing efficiency for 450+ stations.
                  </li>
                  <li>
                    Facilitated real-time monitoring of fuel dispensing
                    operations, improving overall operational efficiency by{" "}
                    <MetricCounter value={25} suffix="%" />.
                  </li>
                </ul>
              </div>
            </div>
            <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-blue-500 timeline-dot-blue border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xl" aria-hidden>
                ⚙️
              </span>
            </div>
            <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
              <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">
                June 2022 — August 2022
              </p>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Vadodara, Gujarat
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
            PROJECTS SECTION
        ══════════════════════════════════════════════════════ */}

      <section id="contact" className="py-20">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] p-10 text-center shadow-sm"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(249,115,22,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <span className="neural-label block mb-3">Let&apos;s Connect</span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white mb-4"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Ready to build something{" "}
              <span className="text-[#f97316]">extraordinary</span>?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8 max-w-md mx-auto">
              Scan the QR code for my full resume, or reach out directly —
              always happy to discuss AI, product, and engineering challenges.
            </p>

            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] inline-block">
                <Image
                  src={QR}
                  width={160}
                  height={160}
                  alt="QR code to download Om Javia's resume"
                  className="mx-auto rounded-lg"
                />
                <p className="font-mono text-[10px] text-neutral-500 mt-2 uppercase tracking-widest">
                  Download Resume
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-colors shadow-amber-sm hover:shadow-amber-md"
              >
                Get In Touch <FaArrowRight className="text-xs" />
              </MagneticButton>
              <MagneticButton
                href="https://cal.com/Om-Javia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-900 dark:text-neutral-200 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white transition-all shadow-sm"
              >
                Schedule a Call
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        <p className="text-center font-mono text-xs text-neutral-600 mt-8">
          <a href="#footer" className="hover:text-[#f97316] transition-colors">
            Om Javia
          </a>{" "}
          © 2026
        </p>
      </section>
    </>
  );
}
