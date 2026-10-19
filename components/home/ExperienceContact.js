import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaDownload,
  FaLinkedin,
  FaCheckCircle,
  FaLightbulb,
  FaCogs,
  FaSyncAlt,
} from "react-icons/fa";
import Metashot from "../../public/Metashot.png";
import Sac from "../../public/sac.png";
import Ace from "../../public/ace-infoway.png";
import Apoliums from "../../public/Apoliums.png";
import Relcon from "../../public/relcon.png";
import MagneticButton from "../MagneticButton";
import posthog from 'posthog-js';

export default function ExperienceContact() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
            HOW I WORK (Working Practices)
        ══════════════════════════════════════════════════════ */}
      <section id="how-i-work" className="py-10 sm:py-16 scroll-mt-24 border-b border-neutral-200/80 dark:border-[#27272a]">
        <motion.div
          className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="neural-label">Execution Approach</span>
          <h2
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            How I <span className="text-[#f97316]">Work</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Practical operating principles demonstrated across early-stage AI products, computer vision pipelines, and connected hardware.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {/* Practice 1 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 text-[#f97316] flex items-center justify-center text-lg">
                <FaLightbulb />
              </div>
              <h3 className="font-bold text-base text-neutral-950 dark:text-white">
                Turning Ambiguous Problems into Structured Requirements
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Transforming loose product concepts into clear PRDs, prioritized engineering backlogs, and explicit success criteria before committing development resources.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-[#27272a] font-mono text-[10px] text-[#f97316]">
              Demonstrated in: MegaShot Pickl+ PRDs &amp; Sensor Scoping
            </div>
          </div>

          {/* Practice 2 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-lg">
                <FaCogs />
              </div>
              <h3 className="font-bold text-base text-neutral-950 dark:text-white">
                Connecting Technical Constraints with Delivery Decisions
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Evaluating hardware battery limitations, BLE packet budgets, and inference latencies alongside user experience goals to choose practical architectural trade-offs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-[#27272a] font-mono text-[10px] text-blue-500">
              Demonstrated in: Metashot &lt;80ms Inference &amp; Pickl+ BLE Architecture
            </div>
          </div>

          {/* Practice 3 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-lg">
                <FaSyncAlt />
              </div>
              <h3 className="font-bold text-base text-neutral-950 dark:text-white">
                Coordinating Execution &amp; Learning from Feedback
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Aligning cross-functional sprints across engineering, UX, and launch streams while using real player test telemetry to drive firmware and software revisions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-[#27272a] font-mono text-[10px] text-emerald-500">
              Demonstrated in: MegaShot Prototype Iterations &amp; GTM Launch
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
            EXPERIENCE TIMELINE
        ══════════════════════════════════════════════════════ */}
      <section id="experience" className="py-12 sm:py-20 scroll-mt-24">
        <motion.div
          className="mb-10 sm:mb-12"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="neural-label">Career Arc</span>
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Professional <span className="text-[#f97316]">Experience</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
            My career progression spans satellite research, production ML APIs, low-latency computer vision pipelines, and early-stage AI product execution.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto py-6 mt-4">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 border-l-2 border-dashed border-[#f97316]/20 hidden md:block" />

          {/* ── METASHOT (Single Employer with Two Headings) ── */}
          {/* TODO(Om): verify legal employer entity name and corporate relationship between Metashot and MegaShot */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
              <p className="font-mono text-sm font-bold text-neutral-800 dark:text-neutral-200">
                July 2025 - Present
              </p>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Bangalore, Karnataka · Full-time
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5 justify-start md:justify-end">
                <span className="font-mono text-[10px] bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 px-2 py-0.5 rounded-full font-semibold">
                  Two Roles
                </span>
                <span className="font-mono text-[10px] bg-neutral-100 dark:bg-[#18181b] text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-[#27272a] px-2 py-0.5 rounded-full">
                  Sports AI &amp; Hardware
                </span>
              </div>
            </div>

            <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-[#f97316] timeline-dot-amber border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xl" aria-hidden>
                💼
              </span>
            </div>

            <div className="order-1 md:order-2 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/40 p-5 sm:p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-amber-sm space-y-6">
                {/* Employer Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-neutral-100 dark:border-[#27272a]">
                  <Image
                    src={Metashot}
                    width={44}
                    height={44}
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
                    <p className="font-mono text-xs text-neutral-500">
                      Sports AI &amp; Connected Gaming Products
                    </p>
                  </div>
                </div>

                {/* Role 1: Founding Manager */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between flex-wrap gap-1">
                    <h4 className="font-bold text-sm text-[#f97316]">
                      Founding Manager
                    </h4>
                    <span className="font-mono text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                      November 2025 - Present
                    </span>
                  </div>
                  <ul className="text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-1.5 leading-relaxed">
                    <li>
                      <strong>Accelerated product readiness:</strong> Defined PRDs, feature roadmaps, and cross-functional milestones across firmware, mobile app, and hardware industrial design teams for connected sports tech products.
                    </li>
                    <li>
                      <strong>Streamlined motion integration:</strong> Coordinated translation of 9-axis sensor readings into low-latency mobile gaming mechanics and real-time stroke feedback.
                    </li>
                    <li>
                      <strong>Led go-to-market execution:</strong> Formulated technical product positioning, campaign page structure, and media narrative for product launches.
                    </li>
                  </ul>
                </div>

                {/* Role 2: AI Engineer */}
                <div className="space-y-2 pt-3 border-t border-neutral-100 dark:border-[#27272a]">
                  <div className="flex items-baseline justify-between flex-wrap gap-1">
                    <h4 className="font-bold text-sm text-emerald-500">
                      AI Engineer
                    </h4>
                    <span className="font-mono text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                      July - October 2025
                    </span>
                  </div>
                  <ul className="text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-1.5 leading-relaxed">
                    <li>
                      <strong>Optimized inference latency:</strong> Achieved sub-80ms real-time inference latency for cricket shot classification by profiling and optimizing PyTorch and OpenCV video pipelines.
                    </li>
                    <li>
                      <strong>Integrated gaming engine workflows:</strong> Deployed live video classification models into Unity engine pipelines for immediate player feedback on shot execution.
                    </li>
                    <li>
                      <strong>Structured session analytics:</strong> Engineered FastAPI and Redis backend services to cache and deliver player training session metrics.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── APOLIUMS INFOTECH ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="order-1 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/40 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-amber-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Apoliums}
                    width={44}
                    height={44}
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
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Python", "Pandas", "FastAPI", "Docker", "CI/CD"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-mono text-xs font-semibold text-neutral-500 mb-2">
                  May 2024 - June 2025
                </p>
                <ul className="text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2 leading-relaxed">
                  <li>
                    <strong>Accelerated model iteration:</strong> Architected feature engineering and data preprocessing pipelines in Python and Pandas for machine learning datasets.
                  </li>
                  <li>
                    <strong>Deployed production endpoints:</strong> Built and deployed RESTful FastAPI prediction services packaged with Docker, maintaining health checks and automated CI/CD validation.
                  </li>
                  <li>
                    <strong>Automated deployment workflows:</strong> Standardized continuous integration pipelines on GitHub Actions to test, package, and deploy backend microservices reliably.
                  </li>
                </ul>
              </div>
            </div>

            <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-[#f97316] timeline-dot-amber border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xl" aria-hidden>
                ⚙️
              </span>
            </div>

            <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
              <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">
                May 2024 - June 2025
              </p>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Indore, Madhya Pradesh
              </p>
            </div>
          </motion.div>

          {/* ── ISRO (Space Applications Centre) ── */}
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
              <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">
                February 2024 - May 2024
              </p>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Ahmedabad, Gujarat · Research Internship
              </p>
            </div>

            <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-red-500 timeline-dot-red border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xl" aria-hidden>
                🚀
              </span>
            </div>

            <div className="order-1 md:order-2 w-full md:w-5/12">
              <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-red-500/40 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(239,68,68,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={Sac}
                    width={44}
                    height={44}
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
                      Research &amp; Development Intern
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["PyTorch", "Computer Vision", "Satellite Data", "Path Planning"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-mono text-xs font-semibold text-neutral-500 mb-2">
                  February 2024 - May 2024
                </p>
                <ul className="text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2 leading-relaxed">
                  <li>
                    <strong>Rover path evaluation:</strong> Produced an 87.4% navigation-efficiency score in simulated rover traversal using PyTorch terrain segmentation models.
                  </li>
                  <li>
                    <strong>Satellite imagery curation:</strong> Preprocessed and annotated 800+ HiRISE satellite images, categorizing 5 distinct terrain types including craters and dune ridges.
                  </li>
                  <li>
                    <strong>Graph pathfinding integration:</strong> Combined semantic terrain segmentation outputs with A* and Dijkstra path planning algorithms to calculate obstacle-circumventing navigation routes.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── Earlier Internships: Ace Infoway & Relcon System ── */}
          <div className="pt-4 text-center">
            <details className="inline-block text-left group">
              <summary className="cursor-pointer font-mono text-xs text-neutral-500 dark:text-neutral-400 hover:text-[#f97316] list-none p-3 rounded-xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] shadow-sm">
                <span>View Earlier Internships (Ace Infoway, Relcon System) ↓</span>
              </summary>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="p-4 rounded-xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] text-xs space-y-1">
                  <p className="font-bold text-neutral-900 dark:text-white">Ace Infoway</p>
                  <p className="font-mono text-[10px] text-purple-400">Software Engineer Intern · Jul–Aug 2023</p>
                  <p className="text-neutral-600 dark:text-neutral-400">Frontend optimization, abandoned cart recovery workflows, responsive refactoring.</p>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] text-xs space-y-1">
                  <p className="font-bold text-neutral-900 dark:text-white">Relcon System</p>
                  <p className="font-mono text-[10px] text-blue-400">Software Engineer Intern · Jun–Aug 2022</p>
                  <p className="text-neutral-600 dark:text-neutral-400">Fuel dispensing monitoring dashboard, IoT station software tracking metrics.</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
            RECOMMENDATIONS PLACEHOLDER (Prepared & Unpublished)
        ══════════════════════════════════════════════════════ */}
      {/* TODO(Om): add one or two genuine recommendations with attribution and permission to publish */}
      {/*
      <section id="recommendations" className="py-12 border-t border-neutral-200/80 dark:border-[#27272a]">
        <h3 className="font-bold text-lg text-neutral-950 dark:text-white mb-4">Recommendations</h3>
      </section>
      */}

      {/* ══════════════════════════════════════════════════════
            CONTACT & CREDENTIALS SECTION
        ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-12 sm:py-20 scroll-mt-24">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] p-6 sm:p-8 md:p-12 text-center shadow-lg"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            <span className="neural-label block mb-3">Let&apos;s Connect</span>

            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white mb-4"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Hiring or building an <span className="text-[#f97316]">AI product</span>?
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
              Targeting product management and technical engineering opportunities across AI systems, computer vision, connected hardware, and launch execution.
            </p>

            {/* Direct Professional Actions (Replaced QR code with clean accessible credential card) */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] max-w-lg mx-auto mb-8 shadow-sm text-left space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-neutral-900 dark:text-white">Om Javia</p>
                  <p className="font-mono text-xs text-[#f97316]">Founding Manager · AI Product Engineer</p>
                </div>
                <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Available for Roles
                </span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Connect directly for hiring conversations, project scoping, or to request a full verified portfolio resume package.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {/* Primary CTA */}
              <MagneticButton
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all shadow-amber-sm hover:shadow-amber-md"
              >
                <span>Hiring? Let&apos;s talk</span>
                <FaArrowRight className="text-xs" />
              </MagneticButton>

              {/* Secondary CTA: Cal.com */}
              <MagneticButton
                href="https://cal.com/Om-Javia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-900 dark:text-neutral-200 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white transition-all shadow-sm"
              >
                <FaCalendarAlt className="text-xs text-[#f97316]" />
                <span>Schedule a Call</span>
              </MagneticButton>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/omjavia/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#09090b] text-neutral-800 dark:text-neutral-200 hover:border-blue-500/40 hover:text-blue-500 transition-all shadow-sm"
              >
                <FaLinkedin className="text-sm text-blue-500" />
                <span>LinkedIn Profile</span>
              </a>

              {/* Resume Button */}
              {/* TODO(Om): add current resume PDF to public/resume.pdf */}
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
          Founding Manager, MegaShot · AI Product Engineer © {new Date().getFullYear()}
        </p>
      </section>
    </>
  );
}
