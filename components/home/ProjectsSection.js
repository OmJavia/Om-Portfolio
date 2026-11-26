import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiExternalLink, FiGithub, FiFileText, FiCode, FiLayers } from "react-icons/fi";
import MetashotImg from "../../public/Metashot.jpg";
import MarsImg from "../../public/Mars.jpg";
import PDFImg from "../../public/PDF_Searcher.jpg";
import posthog from "posthog-js";

const ARCHIVE_PROJECTS = [
  {
    title: "NirmanBook",
    type: "PropTech Platform",
    role: "Full-Stack & Product",
    desc: "Construction workflow and service discovery platform with polished customer booking journey.",
    tech: "Next.js · Node.js · Redux",
    link: "https://www.nirmanbook.com/",
    caseStudy: "/case-studies/nirmanbook",
  },
  {
    title: "Aerpace",
    type: "Mobility Web Experience",
    role: "Frontend Engineering",
    desc: "Future-mobility product website with high-performance responsive media and brand storytelling.",
    tech: "React · CSS Motion · Webpack",
    link: "https://www.aerpace.com/",
    caseStudy: "/case-studies/aerpace",
  },
  {
    title: "Apna Mechanic",
    type: "Service App Concept",
    role: "UX & Frontend",
    desc: "Automotive service booking and discovery interface optimized for mobile workflows.",
    tech: "React · Tailwind · Mobile-First",
    link: "https://apna-mechanic.vercel.app/",
    caseStudy: "/case-studies/apna-mechanic",
  },
  {
    title: "Movieflix",
    type: "Web Application",
    role: "Frontend Experiment",
    desc: "Media browsing and discovery interface demonstrating API caching and responsive carousel architecture.",
    tech: "React · TMDB API · Tailwind",
    link: "https://movieflix-om.vercel.app/",
    caseStudy: "/case-studies/movieflix",
  },
  {
    title: "AI Blog Generator",
    type: "LLM Utility",
    role: "Python Scripting",
    desc: "Prompt-driven automated technical blog writing tool utilizing OpenAI models.",
    tech: "Python · OpenAI API",
    link: "https://github.com/OmJavia/Generate_Blogs",
    caseStudy: "/case-studies/ai-blog-generator",
  },
  {
    title: "Coding Sharks",
    type: "Community Platform",
    role: "Web Design & Implementation",
    desc: "Education website for coding community with accessible navigation and fast static delivery.",
    tech: "HTML/CSS · JavaScript",
    link: "https://www.thecodingsharks.in/",
    caseStudy: "/case-studies/coding-sharks",
  },
];

export default function ProjectsSection() {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <section id="featured-work" className="py-12 sm:py-20 border-t border-neutral-200/90 dark:border-neutral-800/80">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#ea580c] dark:text-[#f97316] font-medium block">
          Selected Work
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2">
          Things I&apos;ve Shipped &amp; Researched
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
          A selection of production systems, applied research, and engineering utilities with measurable results.
        </p>
      </div>

      <div className="space-y-16 sm:space-y-24">
        {/* ── PROJECT 1: MetaShot (Split Image + Text Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 bg-neutral-900 shadow-sm">
            <Image
              src={MetashotImg}
              alt="Metashot Real-Time Sports AI Platform"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 512px"
              quality={75}
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#ea580c] dark:text-[#f97316] font-medium">Production AI</span>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <span className="text-neutral-500">Metashot · 2025</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white tracking-tight">
              Metashot: Sub-80ms Sports AI Perception
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Real-time cricket shot detection and player feedback system deployed in production. Engineered an optimized PyTorch/YOLO inference pipeline that processes live camera streams in under 80ms, connected to a FastAPI backend and Redis session cache for immediate player metrics.
            </p>

            {/* Key Technical Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/40">
                <span className="font-mono text-[11px] text-neutral-500 block">Latency</span>
                <span className="text-base font-bold text-neutral-900 dark:text-white font-mono">&lt;80ms</span>
                <span className="text-[11px] text-neutral-500 block">Live stream inference</span>
              </div>
              <div className="p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/40">
                <span className="font-mono text-[11px] text-neutral-500 block">Architecture</span>
                <span className="text-base font-bold text-neutral-900 dark:text-white font-mono">YOLO + FastAPI</span>
                <span className="text-[11px] text-neutral-500 block">Redis cached metrics</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/case-studies/metashot"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 dark:text-white hover:text-[#ea580c] dark:hover:text-[#f97316] transition-colors"
                onClick={() => posthog.capture("view_metashot_case_study", { source: "projects_section" })}
              >
                <span>Read case study</span>
                <FiArrowRight className="text-xs" />
              </Link>
              <a
                href="https://metashot.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                onClick={() => posthog.capture("metashot_site_clicked", { source: "projects_section" })}
              >
                <span>Visit Metashot site</span>
                <FiExternalLink className="text-xs" />
              </a>
              <span className="text-xs font-mono text-neutral-400">·</span>
              <span className="text-xs font-mono text-neutral-500">PyTorch · YOLO · Redis · OpenCV</span>
            </div>
          </div>
        </div>

        {/* ── PROJECT 2: Mars Rover Path Planning (Research Notebook Style) ── */}
        <div className="p-6 sm:p-8 rounded-2xl border border-neutral-300/80 dark:border-neutral-800 bg-[#f6f4ee]/70 dark:bg-[#121215] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <div>
              <span className="font-mono text-xs uppercase font-medium text-[#ea580c] dark:text-[#f97316]">
                ISRO Space Applications Centre · Applied Research
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white mt-1">
                Mars Rover Terrain Segmentation &amp; Obstacle Pathfinding
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-500 shrink-0">
              Feb 2024 — May 2024
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden border border-neutral-300/80 dark:border-neutral-700 bg-neutral-900">
              <Image
                src={MarsImg}
                alt="Mars Rover terrain segmentation research"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Computer vision research exploring semantic terrain understanding from HiRISE satellite imagery to assist autonomous rover traversal on the Martian surface.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-white/80 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">EFFICIENCY SCORE</span>
                  <span className="font-bold text-sm text-[#ea580c] dark:text-[#f97316]">87.4%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/80 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">ANNOTATED IMAGES</span>
                  <span className="font-bold text-sm text-neutral-900 dark:text-white">800+ HiRISE</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/80 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 col-span-2 sm:col-span-1">
                  <span className="text-neutral-500 block text-[10px]">TERRAIN CLASSES</span>
                  <span className="font-bold text-sm text-neutral-900 dark:text-white">5 Categories</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/case-studies/mars-rover"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-900 dark:text-white hover:text-[#ea580c] dark:hover:text-[#f97316] transition-colors"
                >
                  <FiFileText className="text-xs" />
                  <span>Read research breakdown →</span>
                </Link>

                <a
                  href="https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <FiCode className="text-xs" />
                  <span>Colab Notebook ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── PROJECT 3: PDF Searcher (Utility Card) ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-7 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131316] items-center">
          <div className="md:col-span-4 relative aspect-[16/10] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
            <Image
              src={PDFImg}
              alt="PDF Searcher RAG application"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>

          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#ea580c] dark:text-[#f97316] font-medium">Applied AI / Retrieval</span>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <span className="text-neutral-500">Open Source Utility</span>
            </div>

            <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
              PDF Searcher: Semantic Document Retrieval Workflow
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A pragmatic document search tool designed to help users find relevant answers inside large PDFs. Ingests and chunks multi-page documents, generates embeddings with OpenAI, and uses vector similarity search for exact passage grounding.
            </p>

            <div className="flex items-center gap-4 pt-1">
              <Link
                href="/case-studies/pdf-searcher"
                className="text-xs font-mono font-medium text-neutral-900 dark:text-white hover:text-[#ea580c] dark:hover:text-[#f97316] transition-colors"
              >
                View case study →
              </Link>
              <a
                href="https://github.com/OmJavia/PDF_Searcher"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <FiGithub className="text-xs" />
                <span>GitHub Repository ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── COMPACT LIST: Other Shipped Work & Projects ── */}
      <div className="mt-16 pt-10 border-t border-neutral-200/90 dark:border-neutral-800/80">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
              Other Shipped Work &amp; Web Systems
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              PropTech platforms, mobility experiences, service apps, and earlier experiments.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowArchive(!showArchive)}
            className="text-xs font-mono font-medium text-[#ea580c] dark:text-[#f97316] hover:underline"
          >
            {showArchive ? "Hide earlier work ↑" : `Earlier work (${ARCHIVE_PROJECTS.length}) ↓`}
          </button>
        </div>

        {/* Earlier client and experiment work stays collapsed so the flagship stories stay first. */}
        {showArchive && (
        <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80 border-y border-neutral-200/80 dark:border-neutral-800/80">
          {ARCHIVE_PROJECTS.map((proj) => (
            <div
              key={proj.title}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 group hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors px-2 rounded-lg"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#ea580c] dark:group-hover:text-[#f97316] transition-colors">
                    {proj.title}
                  </h4>
                  <span className="text-[11px] font-mono text-neutral-400">· {proj.type}</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-xl">
                  {proj.desc}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
                <span className="text-[11px] font-mono text-neutral-400 hidden md:inline-block">
                  {proj.tech}
                </span>
                {proj.caseStudy && (
                  <Link
                    href={proj.caseStudy}
                    className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
                  >
                    Case study →
                  </Link>
                )}
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
                    aria-label={`External link for ${proj.title}`}
                  >
                    <FiExternalLink className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
