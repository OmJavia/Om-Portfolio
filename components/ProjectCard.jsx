import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaLayerGroup, FaTools, FaBookOpen } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import SpotlightCard from "./SpotlightCard";
import posthog from 'posthog-js';

// System architecture SVG diagrams for featured projects
const ArchitectureDiagrams = {
  "NirmanBook": () => (
    <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="NirmanBook system architecture diagram">
      <defs>
        <marker id="nb-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
      <rect x="10" y="60" width="80" height="36" rx="8" fill="#18181b" stroke="#f97316" strokeWidth="1.5" />
      <text x="50" y="74" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Next.js</text>
      <text x="50" y="86" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Frontend</text>
      <line x1="90" y1="78" x2="118" y2="78" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#nb-arrow)" />
      <rect x="120" y="60" width="80" height="36" rx="8" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="160" y="74" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Node.js</text>
      <text x="160" y="86" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Backend API</text>
      <line x1="200" y1="78" x2="228" y2="78" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#nb-arrow)" />
      <rect x="230" y="60" width="80" height="36" rx="8" fill="#18181b" stroke="#a855f7" strokeWidth="1.5" />
      <text x="270" y="74" textAnchor="middle" fill="#a855f7" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">MongoDB</text>
      <text x="270" y="86" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Database</text>
      <line x1="50" y1="96" x2="50" y2="120" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="10" y="122" width="80" height="28" rx="6" fill="#18181b" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
      <text x="50" y="138" textAnchor="middle" fill="#f97316" fontSize="7" fontFamily="JetBrains Mono, monospace">Redux State</text>
      <line x1="160" y1="96" x2="160" y2="120" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="120" y="122" width="80" height="28" rx="6" fill="#18181b" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,2" />
      <text x="160" y="138" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono, monospace">Vercel Edge CDN</text>
      <text x="180" y="20" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="JetBrains Mono, monospace">PropTech Platform Architecture</text>
    </svg>
  ),
  "Mars Rover Path Planning": () => (
    <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="Mars Rover path planning system architecture diagram">
      <defs>
        <marker id="mr-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
      <rect x="10" y="70" width="75" height="36" rx="8" fill="#18181b" stroke="#f97316" strokeWidth="1.5" />
      <text x="47" y="84" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">HiRISE</text>
      <text x="47" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Satellite Data</text>
      <line x1="85" y1="88" x2="110" y2="88" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#mr-arrow)" />
      <rect x="112" y="55" width="80" height="66" rx="8" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="152" y="75" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">PyTorch CV</text>
      <text x="152" y="87" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Segmentation</text>
      <text x="152" y="99" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">5 Terrain Types</text>
      <text x="152" y="111" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">800 Annotated Imgs</text>
      <line x1="192" y1="88" x2="217" y2="88" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#mr-arrow)" />
      <rect x="219" y="55" width="80" height="50" rx="8" fill="#18181b" stroke="#a855f7" strokeWidth="1.5" />
      <text x="259" y="72" textAnchor="middle" fill="#a855f7" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Path Planner</text>
      <text x="259" y="84" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">A* / Dijkstra</text>
      <text x="259" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="6.5" fontFamily="JetBrains Mono, monospace">+87.4% efficiency</text>
      <line x1="259" y1="105" x2="259" y2="128" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="219" y="130" width="80" height="28" rx="6" fill="#18181b" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
      <text x="259" y="146" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="JetBrains Mono, monospace">Safe Traversal Route</text>
      <text x="180" y="22" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="JetBrains Mono, monospace">Rover Navigation Pipeline</text>
    </svg>
  ),
  "Metashot": () => (
    <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="Metashot sports AI system architecture diagram">
      <defs>
        <marker id="ms-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
      <rect x="10" y="70" width="70" height="36" rx="8" fill="#18181b" stroke="#f97316" strokeWidth="1.5" />
      <text x="45" y="84" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Camera</text>
      <text x="45" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Video Feed</text>
      <line x1="80" y1="88" x2="105" y2="88" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#ms-arrow)" />
      <rect x="107" y="60" width="80" height="56" rx="8" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="147" y="77" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">YOLO + PyTorch</text>
      <text x="147" y="89" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Shot Detection</text>
      <text x="147" y="101" textAnchor="middle" fill="#10b981" fontSize="6.5" fontFamily="JetBrains Mono, monospace">{'<'}80ms latency</text>
      <text x="147" y="109" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">+33% accuracy</text>
      <line x1="187" y1="88" x2="212" y2="88" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#ms-arrow)" />
      <rect x="214" y="60" width="80" height="56" rx="8" fill="#18181b" stroke="#a855f7" strokeWidth="1.5" />
      <text x="254" y="77" textAnchor="middle" fill="#a855f7" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">FastAPI + Redis</text>
      <text x="254" y="89" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Backend Cache</text>
      <text x="254" y="101" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">Session Storage</text>
      <line x1="254" y1="116" x2="254" y2="135" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="194" y="137" width="120" height="28" rx="6" fill="#18181b" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
      <text x="254" y="150" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="JetBrains Mono, monospace">Player Dashboard</text>
      <text x="254" y="160" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">185+ players · session insights</text>
      <text x="180" y="22" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="JetBrains Mono, monospace">Sports AI Real-Time Pipeline</text>
    </svg>
  ),
};

export default function ProjectCard({
  title,
  category,
  description,
  architecture,
  hurdles,
  bullets = [],
  image,
  tags = [],
  liveUrl,
  githubUrl,
  caseStudyUrl,
  filterCategory,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickTimerRef = useRef(null);
  const router = useRouter();
  const ArchDiagram = ArchitectureDiagrams[title];

  const handleCardClick = (e) => {
    if (clickTimerRef.current) {
      // Double click detected -> Go to Case Study
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
      posthog.capture('project_card_double_clicked', { project_title: title, project_category: category });

      if (caseStudyUrl) {
        router.push(caseStudyUrl);
      } else {
        const targetUrl = liveUrl || githubUrl;
        if (targetUrl) {
          window.open(targetUrl, "_blank", "noopener,noreferrer");
        } else {
          setIsModalOpen(true);
        }
      }
    } else {
      // Single click -> Open Live Project Website
      clickTimerRef.current = setTimeout(() => {
        clickTimerRef.current = null;
        posthog.capture('project_card_single_clicked', { project_title: title, project_category: category });

        const targetUrl = liveUrl || githubUrl;
        if (targetUrl) {
          window.open(targetUrl, "_blank", "noopener,noreferrer");
        } else {
          setIsModalOpen(true);
        }
      }, 250);
    }
  };

  return (
    <>
      {/* Card with SpotlightCard wrapper */}
      <SpotlightCard
        className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] shadow-sm dark:shadow-card transition-all duration-500 hover:border-[#f97316]/40 hover:shadow-md dark:hover:shadow-card-hover cursor-pointer"
        glowColor="rgba(249, 115, 22, 0.08)"
        glowSize={400}
        onClick={handleCardClick}
      >
        {/* Image area */}
        <div className="relative w-full aspect-video overflow-hidden bg-neutral-100 dark:bg-[#09090b]">
          {image && (
            <Image
              src={image}
              alt={`${title} — ${category} project screenshot`}
              fill
              className="object-contain transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[0.35] group-hover:saturate-[0.8]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Category badge */}
          <div className="absolute left-4 right-4 top-4 z-10 flex translate-y-3 items-center justify-between gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-[#f97316]/90 text-white shadow-sm backdrop-blur-md">
              {category}
            </span>
          </div>

          {/* Hover content overlay */}
          <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full p-5 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight drop-shadow-sm" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              {title}
            </h3>
            <div className="mt-3">
              <p className="text-sm leading-relaxed text-white/80">{description}</p>
              {bullets.length > 0 && (
                <ul className="mt-2.5 text-xs text-white/70 space-y-1 list-disc pl-4">
                  {bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {tags.map((tag, idx) => (
                  <span key={idx} className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#f97316]/20 text-[#fb923c] font-medium backdrop-blur-md border border-[#f97316]/20">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Direct Action Buttons on Hover */}
              <div className="flex items-center gap-2 pt-4">
                {(liveUrl || githubUrl) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(liveUrl || githubUrl, "_blank", "noopener,noreferrer");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f97316] text-white text-xs font-semibold hover:bg-[#ea6c0a] transition-colors shadow-sm"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Visit Site
                  </button>
                )}
                {caseStudyUrl && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(caseStudyUrl);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md transition-colors border border-white/20"
                  >
                    <FaBookOpen className="text-[10px]" /> Case Study
                  </button>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white/90 text-xs font-semibold backdrop-blur-md transition-colors border border-white/10"
                >
                  Overview
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Info Strip (visible on mobile where hover does not exist) */}
        <div className="p-4 border-t border-neutral-100 dark:border-[#27272a] md:hidden">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="font-bold text-base text-neutral-950 dark:text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              {title}
            </h3>
            <span className="font-mono text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 shrink-0">
              {category}
            </span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {(liveUrl || githubUrl) && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(liveUrl || githubUrl, "_blank", "noopener,noreferrer");
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f97316] text-white text-xs font-semibold hover:bg-[#ea6c0a] transition-colors shadow-sm"
              >
                <FaExternalLinkAlt className="text-[10px]" /> Visit
              </button>
            )}
            {caseStudyUrl && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(caseStudyUrl);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 text-xs font-semibold border border-neutral-200 dark:border-neutral-700 transition-colors"
              >
                <FaBookOpen className="text-[10px]" /> Case Study
              </button>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white text-xs font-medium ml-auto"
            >
              Details →
            </button>
          </div>
        </div>
      </SpotlightCard>

      {/* ── Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal backdrop"
            />

            {/* Modal panel */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#09090b] rounded-3xl shadow-2xl border border-neutral-200 dark:border-[#27272a] flex flex-col md:flex-row"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-100 dark:bg-[#27272a] hover:bg-neutral-200 dark:hover:bg-[#3f3f46] text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="Close project modal"
              >
                <FaTimes className="text-xs" />
              </button>

              {/* Left panel: Image / Architecture + Links */}
              <div className="w-full md:w-2/5 relative bg-neutral-50 dark:bg-[#18181b] border-r border-neutral-200 dark:border-[#27272a] flex flex-col rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden">
                <div className="relative flex-1 p-6 flex items-center justify-center min-h-[200px]">
                  {ArchDiagram ? (
                    <div className="w-full">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-[#f97316] mb-3 text-center">
                        System Architecture
                      </p>
                      <ArchDiagram />
                    </div>
                  ) : (
                    image && (
                      <Image
                        src={image}
                        alt={`${title} project preview`}
                        fill
                        className="object-contain p-6"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    )
                  )}
                </div>

                {/* Links */}
                <div className="p-5 bg-neutral-50 dark:bg-[#09090b] flex flex-wrap gap-3 border-t border-neutral-200 dark:border-[#27272a]">
                  {caseStudyUrl && (
                    <Link
                      href={caseStudyUrl}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f97316] text-white font-semibold text-sm hover:bg-[#ea6c0a] transition-colors shadow-amber-sm hover:shadow-amber-md"
                      onClick={() => posthog.capture('project_case_study_clicked', { project_title: title, project_category: category })}
                    >
                      <FaBookOpen /> Read Case Study
                    </Link>
                  )}
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 dark:bg-white/5 border border-neutral-700 dark:border-[#27272a] text-white font-semibold text-sm hover:bg-neutral-700 dark:hover:bg-white/10 transition-all"
                      onClick={() => posthog.capture('project_live_demo_clicked', { project_title: title, project_category: category })}
                    >
                      <FaExternalLinkAlt /> View Live
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-[#27272a] text-neutral-800 dark:text-neutral-200 font-semibold text-sm hover:bg-neutral-200 dark:hover:bg-white/10 transition-all"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Right panel: Content */}
              <div className="w-full md:w-3/5 p-6 sm:p-10 flex flex-col gap-7">
                {/* Header */}
                <div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-orange-50 dark:bg-[#f97316]/10 text-[#f97316] border border-orange-200 dark:border-[#f97316]/20 mb-3">
                    <HiSparkles className="text-[10px]" />
                    {category}
                  </span>
                  <h2
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-3"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {title}
                  </h2>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Architecture */}
                  {architecture && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-800 dark:text-white mb-2 uppercase tracking-wider">
                        <FaLayerGroup className="text-[#0ea5e9] dark:text-[#38bdf8]" /> System Architecture
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed p-4 rounded-2xl bg-neutral-50 dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a]">
                        {architecture}
                      </p>
                    </div>
                  )}

                  {/* Technical Challenges */}
                  {hurdles && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-800 dark:text-white mb-2 uppercase tracking-wider">
                        <FaTools className="text-[#f97316]" /> Technical Challenges
                      </h4>
                      <div className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed p-4 rounded-2xl bg-orange-50 dark:bg-[#f97316]/5 border border-orange-200 dark:border-[#f97316]/15">
                        <p>{hurdles}</p>
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-bold text-neutral-500 mb-2.5 uppercase tracking-widest">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs font-medium px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-[#18181b] text-neutral-700 dark:text-[#38bdf8] border border-neutral-200 dark:border-[#27272a]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
