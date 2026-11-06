import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiCalendar, FiMail, FiMapPin } from "react-icons/fi";
import MetashotLogo from "../../public/Metashot.png";
import ApoliumsLogo from "../../public/Apoliums.png";
import SacLogo from "../../public/sac.png";
import posthog from "posthog-js";

// TODO(Om): add one or two genuine recommendations with attribution and permission to publish.
// The section stays out of the page while this list is empty.
const RECOMMENDATIONS = [];

export default function ExperienceContact() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <>
      {/* ══════════════════════════════════════════════════════
            EXPERIENCE TIMELINE (Career Story)
        ══════════════════════════════════════════════════════ */}
      <section id="experience" className="py-12 sm:py-20 border-t border-neutral-200/90 dark:border-neutral-800/80">
        <div className="mb-10 sm:mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ea580c] dark:text-[#f97316] font-medium block">
            Career Story
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2">
            Where I&apos;ve Worked
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
            From Martian terrain research to low-latency computer vision pipelines and early-stage AI product ownership.
          </p>
        </div>

        {/* Clean Editorial Timeline */}
        <div className="space-y-12 max-w-3xl">
          {/* ── 1. Metashot (Progression highlighted) ── */}
          <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-6">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#ea580c] dark:bg-[#f97316]" />

            {/* Company Header */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 shrink-0">
                <Image src={MetashotLogo} alt="Metashot Logo" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white leading-tight">
                  Metashot
                </h3>
                <p className="text-xs font-mono text-neutral-500">
                  Sports AI &amp; Connected Devices · Bangalore, India
                </p>
              </div>
            </div>

            {/* Progression Box */}
            <div className="space-y-6 pl-2">
              {/* Role 1: Founding Manager */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#ea580c] dark:text-[#f97316]">
                      Founding Manager
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#f97316]/10 text-[#ea580c] dark:text-[#f97316] border border-[#f97316]/20">
                      Promotion
                    </span>
                  </div>
                  <span className="font-mono text-xs text-neutral-500">
                    Nov 2025 — Present
                  </span>
                </div>
                <ul className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>
                    <strong className="text-neutral-900 dark:text-neutral-200">Product Ownership:</strong> Directed cross-functional milestones across hardware, firmware, and mobile app teams for connected pickleball gaming.
                  </li>
                  <li>
                    <strong className="text-neutral-900 dark:text-neutral-200">Sensor Integration:</strong> Coordinated translation of 9-axis motion sensor readings into low-latency mobile gaming mechanics.
                  </li>
                  <li>
                    <strong className="text-neutral-900 dark:text-neutral-200">Go-to-Market:</strong> Formulated product positioning, backer communications, and campaign narrative for public Kickstarter release.
                  </li>
                </ul>
              </div>

              {/* Role 2: AI Engineer */}
              <div className="space-y-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-bold text-sm text-neutral-800 dark:text-neutral-200">
                    AI Engineer
                  </span>
                  <span className="font-mono text-xs text-neutral-500">
                    July 2025 — Oct 2025
                  </span>
                </div>
                <ul className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>
                    <strong className="text-neutral-900 dark:text-neutral-200">Sub-80ms Latency:</strong> Profiled and optimized PyTorch &amp; OpenCV video pipelines for real-time cricket shot detection.
                  </li>
                  <li>
                    <strong className="text-neutral-900 dark:text-neutral-200">Game Engine Integration:</strong> Deployed live video classification models into Unity engine workflows for instantaneous player feedback.
                  </li>
                  <li>
                    <strong className="text-neutral-900 dark:text-neutral-200">Backend Infrastructure:</strong> Engineered FastAPI and Redis backend services to cache training metrics and session analytics.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── 2. Apoliums Infotech ── */}
          <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />

            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 shrink-0">
                <Image src={ApoliumsLogo} alt="Apoliums Logo" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white leading-tight">
                  Apoliums Infotech
                </h3>
                <p className="text-xs font-mono text-neutral-500">
                  Indore, India
                </p>
              </div>
            </div>

            <div className="space-y-2 pl-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <span className="font-bold text-sm text-neutral-800 dark:text-neutral-200">
                  Associate AI Engineer
                </span>
                <span className="font-mono text-xs text-neutral-500">
                  May 2024 — June 2025
                </span>
              </div>
              <ul className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>
                  <strong className="text-neutral-900 dark:text-neutral-200">Data Pipelines:</strong> Architected feature engineering and data preprocessing pipelines in Python and Pandas.
                </li>
                <li>
                  <strong className="text-neutral-900 dark:text-neutral-200">Production APIs:</strong> Built and deployed RESTful FastAPI prediction services packaged with Docker and health check observability.
                </li>
                <li>
                  <strong className="text-neutral-900 dark:text-neutral-200">CI/CD:</strong> Standardized continuous deployment pipelines with GitHub Actions to test and package backend microservices.
                </li>
              </ul>
            </div>
          </div>

          {/* ── 3. ISRO Space Applications Centre ── */}
          <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />

            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 shrink-0 bg-white p-0.5">
                <Image src={SacLogo} alt="ISRO Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white leading-tight">
                  ISRO Space Applications Centre
                </h3>
                <p className="text-xs font-mono text-neutral-500">
                  Ahmedabad, India · Research Internship
                </p>
              </div>
            </div>

            <div className="space-y-2 pl-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <span className="font-bold text-sm text-neutral-800 dark:text-neutral-200">
                  Research &amp; Development Intern
                </span>
                <span className="font-mono text-xs text-neutral-500">
                  Feb 2024 — May 2024
                </span>
              </div>
              <ul className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>
                  <strong className="text-neutral-900 dark:text-neutral-200">Simulated Traversal:</strong> Delivered 87.4% navigation efficiency using PyTorch terrain segmentation models.
                </li>
                <li>
                  <strong className="text-neutral-900 dark:text-neutral-200">Satellite Curation:</strong> Preprocessed and annotated 800+ HiRISE satellite images, classifying craters and dune ridges.
                </li>
                <li>
                  <strong className="text-neutral-900 dark:text-neutral-200">Pathfinding:</strong> Integrated segmentation outputs with A* and Dijkstra algorithms to generate safe traversal paths.
                </li>
              </ul>
            </div>
          </div>

          {/* ── Earlier Internships: Ace Infoway & Relcon System ── */}
          <div className="pt-2 pl-6 sm:pl-8">
            <button
              type="button"
              onClick={() => setShowEarlier(!showEarlier)}
              className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {showEarlier ? "Hide earlier internships ↑" : "Earlier internships (Ace Infoway, Relcon System) ↓"}
            </button>

            {showEarlier && (
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-neutral-900 dark:text-white">Ace Infoway</h4>
                  <p className="font-mono text-[11px] text-neutral-500">Software Engineer Intern · Jul–Aug 2023</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Frontend optimization, abandoned cart recovery flows, responsive refactoring.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-neutral-900 dark:text-white">Relcon System</h4>
                  <p className="font-mono text-[11px] text-neutral-500">Software Engineer Intern · Jun–Aug 2022</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Fuel dispensing monitoring dashboard, IoT station software tracking metrics.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {RECOMMENDATIONS.length > 0 && (
          <div className="mt-14 max-w-3xl space-y-4">
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white">Recommendations</h3>
            <div className="space-y-4">
              {RECOMMENDATIONS.map((item) => (
                <blockquote
                  key={item.name}
                  className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  <p>{item.quote}</p>
                  <footer className="mt-3 font-mono text-xs text-neutral-500">
                    {item.name}, {item.title}
                    {item.href ? (
                      <>
                        {" "}
                        · <a href={item.href} className="underline">{item.org}</a>
                      </>
                    ) : null}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════
            CONTACT & COLLABORATION
        ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-16 sm:py-24 border-t border-neutral-200/90 dark:border-neutral-800/80">
        <div className="max-w-2xl space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ea580c] dark:text-[#f97316] font-medium block">
            Let&apos;s Connect
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Looking for a product builder or technical engineer?
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I&apos;m based in Bangalore and open to product management and engineering opportunities across connected hardware, computer vision, and applied AI systems.
          </p>

          {/* Simple Contact Information */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-medium">
            <a
              href="mailto:omjavia18@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-colors shadow-sm"
              onClick={() => posthog.capture("email_clicked", { source: "contact_section" })}
            >
              <FiMail className="text-sm" />
              <span>omjavia18@gmail.com</span>
            </a>

            <a
              href="https://cal.com/Om-Javia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all shadow-sm"
              onClick={() => posthog.capture("cal_clicked", { source: "contact_section" })}
            >
              <FiCalendar className="text-sm text-[#ea580c] dark:text-[#f97316]" />
              <span>Schedule 15 mins</span>
              <FiArrowUpRight className="text-xs opacity-60" />
            </a>

            <a
              href="/resume.pdf"
              className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white px-2 py-2 transition-colors"
              onClick={() => posthog.capture("resume_clicked", { source: "contact_section" })}
            >
              Resume →
            </a>

            <Link
              href="/contact"
              className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white px-2 py-2 transition-colors"
            >
              Leave a message →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
