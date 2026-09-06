import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaDownload } from "react-icons/fa";
import QR from "../../public/Download Resume.png";
import Metashot from "../../public/Metashot.png";
import Sac from "../../public/sac.png";
import Ace from "../../public/ace-infoway.png";
import Apoliums from "../../public/Apoliums.png";
import Relcon from "../../public/relcon.png";
import MagneticButton from "../MagneticButton";

export default function ExperienceContact() {
  return (
    <>
      <section id="experience" className="py-20 scroll-mt-24">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="neural-label">Career Arc</span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Engineering <span className="text-[#f97316]">Experience</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            My career has evolved through satellite research, production machine learning APIs, computer vision systems, and AI product engineering.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto py-6 mt-4">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 border-l-2 border-dashed border-[#f97316]/20 hidden md:block" />

          {/* ── Metashot AI Product Engineer ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={{ opacity: 0, y: 24 }}
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
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/40 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-amber-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Metashot}
                    width={48}
                    height={48}
                    alt="Metashot logo"
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
                  {["Product Strategy", "FastAPI", "User Loops", "PRDs"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Led product execution across Engineering, UX, and Go-to-Market streams for smart sports gaming products.
                  </li>
                  <li>
                    Translated user feedback into actionable PRDs, prioritizing features for connected sports tech products.
                  </li>
                  <li>
                    Validated product-market fit through active feedback loops with 185+ players across real practice environments.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── Metashot AI Engineer ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <div className="order-1 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-emerald-500/40 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Metashot}
                    width={48}
                    height={48}
                    alt="Metashot logo"
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
                  {["PyTorch", "YOLO", "OpenCV", "FastAPI"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Optimized computer vision shot detection pipelines using PyTorch and OpenCV for sub-80ms real-time inference latency.
                  </li>
                  <li>
                    Integrated real-time shot classification models directly into Unity engine workflows for seamless video feedback.
                  </li>
                  <li>
                    Refined user session analytics and player retention models to improve repeat practice session engagement.
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
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
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/40 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-amber-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Apoliums}
                    width={48}
                    height={48}
                    alt="Apoliums Infotech logo"
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
                      className="font-mono text-[10px] bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Architected feature engineering and data preprocessing pipelines in Python and Pandas to accelerate model iteration cycles.
                  </li>
                  <li>
                    Deployed RESTful FastAPI inference endpoints for real-time machine learning predictions supporting 7K+ users on the platform.
                  </li>
                  <li>
                    Automated model deployment and validation workflows using CI/CD pipelines to ensure seamless updates and production stability.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── ISRO ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="order-1 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-red-500/40 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(239,68,68,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Sac}
                    width={48}
                    height={48}
                    alt="ISRO logo"
                    className="rounded-lg shadow-sm bg-white p-0.5"
                  />
                  <div>
                    <h3
                      className="text-lg font-bold text-neutral-950 dark:text-white leading-tight"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      ISRO Space Applications Centre
                    </h3>
                    <h4 className="font-mono text-xs font-semibold text-red-400">
                      Research & Development Intern
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["PyTorch", "Computer Vision", "Path Planning"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Preprocessed and annotated 800+ HiRISE satellite images, categorizing 5 distinct terrain types including craters and boulders.
                  </li>
                  <li>
                    Developed PyTorch neural network segmentation models and integrated obstacle-aware path planning algorithms (A*, Dijkstra).
                  </li>
                  <li>
                    Achieved an 87.4% navigation efficiency score in obstacle-aware rover traversal simulations.
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
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
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-purple-500/40 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(168,85,247,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Ace}
                    width={48}
                    height={48}
                    alt="Ace Infoway logo"
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
                      className="font-mono text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Implemented abandoned cart push notification workflows to recover lost customer intent.
                  </li>
                  <li>
                    Refactored Budgie Cart web application interfaces for mobile-first user experiences.
                  </li>
                  <li>
                    Optimized frontend assets and bundle delivery to improve page loading responsiveness.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── Relcon System ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <div className="order-1 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-blue-500/40 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Relcon}
                    width={48}
                    height={48}
                    alt="Relcon System logo"
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
                  {["Dashboard", "Operations", "IoT Software"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                  <li>
                    Contributed to smart fuel dispensing unit mobile applications with multi-OS compatibility.
                  </li>
                  <li>
                    Constructed operational monitoring dashboards for tracking real-time fuel dispensing metrics across 450+ stations.
                  </li>
                  <li>
                    Streamlined operational tracking workflows for field technicians and station operators.
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
            CONTACT & CTA SECTION
        ══════════════════════════════════════════════════════ */}

      <section id="contact" className="py-20 scroll-mt-24">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] p-8 sm:p-12 text-center shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(249,115,22,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="neural-label block mb-3">Let&apos;s Build Together</span>
            
            <h2
              className="text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white mb-4"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Have an <span className="text-[#f97316]">AI product</span> idea?
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg mb-8 leading-relaxed">
              Whether you&apos;re exploring an AI idea, building an intelligent product, experimenting with Computer Vision, or improving an existing system, I&apos;m always open to discussing interesting engineering challenges.
            </p>

            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] inline-block shadow-sm">
                <Image
                  src={QR}
                  width={150}
                  height={150}
                  alt="QR code to download Om Javia's resume"
                  className="mx-auto rounded-lg"
                />
                <p className="font-mono text-[10px] text-neutral-500 mt-2.5 uppercase tracking-widest font-bold">
                  Scan to Download Resume
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {/* Primary CTA */}
              <MagneticButton
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all shadow-amber-sm hover:shadow-amber-md"
              >
                <span>Let&apos;s Talk</span>
                <FaArrowRight className="text-xs" />
              </MagneticButton>

              {/* Secondary CTA */}
              <MagneticButton
                href="https://cal.com/Om-Javia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-900 dark:text-neutral-200 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white transition-all shadow-sm"
              >
                <FaCalendarAlt className="text-xs text-[#f97316]" />
                <span>Schedule a Call</span>
              </MagneticButton>

              {/* Download Resume */}
              <a
                href="https://drive.google.com/file/d/1piCpXUSJk7BZzov8hJe--R90HaqbKr5L/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                <FaDownload className="text-xs" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>

        <p className="text-center font-mono text-xs text-neutral-500 mt-10">
          <Link href="/" className="hover:text-[#f97316] transition-colors">
            Om Javia
          </Link>{" "}
          — AI Product Engineer © {new Date().getFullYear()}
        </p>
      </section>
    </>
  );
}
