<<<<<<< HEAD
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaTools, FaBookOpen } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function ProjectCard({ title, category, description, architecture, hurdles, bullets = [], image, tags = [], liveUrl, githubUrl, caseStudyUrl }) {
  const [open, setOpen] = useState(false);
  const detailed = ['NirmanBook', 'Mars Rover Path Planning', 'Metashot'].includes(title);

  return (
    <>
      <SpotlightCard className="cursor-pointer" >
        <button onClick={() => setOpen(true)} className="block w-full text-left" aria-label={`Open ${title} project details`}>
          <div className="relative aspect-video overflow-hidden bg-black/30">
            {image && <Image src={image} alt={`${title} project preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-2 transition duration-700 group-hover:scale-[1.03]" />}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <span className="font-mono text-[10px] uppercase tracking-[.18em] text-electric">{category}</span>
            <h3 className="mt-2 font-heading text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-black/20 px-2.5 py-1 font-mono text-[9px] text-zinc-400">{tag}</span>)}</div>
          </div>
        </button>
      </SpotlightCard>

      <AnimatePresence>
        {open && <motion.div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-border bg-obsidian shadow-2xl" initial={{ y: 24, opacity: 0, scale: .98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 24, opacity: 0, scale: .98 }}>
            <button onClick={() => setOpen(false)} className="absolute right-5 top-5 z-20 rounded-full border border-border bg-black/50 p-2 text-zinc-400 hover:text-white" aria-label="Close project details"><FaTimes /></button>
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="border-b border-border bg-black/20 p-6 lg:border-b-0 lg:border-r"><div className="relative aspect-video overflow-hidden rounded-2xl border border-border">{image && <Image src={image} alt={`${title} project preview`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain p-3" priority={title === 'NirmanBook'} />}</div><div className="mt-4 flex gap-2">{caseStudyUrl && <Link href={caseStudyUrl} className="flex-1 rounded-xl bg-neural px-4 py-3 text-center text-sm font-semibold text-white"><FaBookOpen className="mr-2 inline" />Case Study</Link>}{liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" className="flex-1 rounded-xl border border-border px-4 py-3 text-center text-sm text-white"><FaExternalLinkAlt className="mr-2 inline" />Live</a>}{githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer" className="flex-1 rounded-xl border border-border px-4 py-3 text-center text-sm text-white"><FaGithub className="mr-2 inline" />GitHub</a>}</div></div>
              <div className="p-7 sm:p-10"><span className="font-mono text-[10px] uppercase tracking-widest text-electric">{category}</span><h2 className="mt-2 font-heading text-3xl font-extrabold text-white sm:text-4xl">{title}</h2><p className="mt-4 text-zinc-400 leading-7">{description}</p>{detailed && <div className="mt-8"><h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-white">System Architecture</h4><ArchitectureDiagram title={title} /></div>}<div className="mt-8"><h4 className="mb-3 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-white"><FaTools className="text-neural" /> Technical Challenges</h4><p className="rounded-2xl border border-neural/15 bg-neural/5 p-4 text-sm leading-6 text-zinc-400">{hurdles}</p></div><div className="mt-8"><h4 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Stack</h4><div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs text-zinc-300">{tag}</span>)}</div></div></div>
            </div>
          </motion.div>
        </motion.div>}
=======
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaLayerGroup, FaTools, FaBookOpen } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import SpotlightCard from "./SpotlightCard";

// System architecture SVG diagrams for featured projects
const ArchitectureDiagrams = {
  "NirmanBook": () => (
    <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="NirmanBook system architecture diagram">
      <defs>
        <marker id="nb-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
      {/* Next.js Frontend */}
      <rect x="10" y="60" width="80" height="36" rx="8" fill="#18181b" stroke="#f97316" strokeWidth="1.5" />
      <text x="50" y="74" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Next.js</text>
      <text x="50" y="86" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Frontend</text>
      {/* Arrow */}
      <line x1="90" y1="78" x2="118" y2="78" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#nb-arrow)" />
      {/* Node.js Backend */}
      <rect x="120" y="60" width="80" height="36" rx="8" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="160" y="74" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Node.js</text>
      <text x="160" y="86" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Backend API</text>
      {/* Arrow */}
      <line x1="200" y1="78" x2="228" y2="78" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#nb-arrow)" />
      {/* Database */}
      <rect x="230" y="60" width="80" height="36" rx="8" fill="#18181b" stroke="#a855f7" strokeWidth="1.5" />
      <text x="270" y="74" textAnchor="middle" fill="#a855f7" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">MongoDB</text>
      <text x="270" y="86" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Database</text>
      {/* Redux arrow from frontend */}
      <line x1="50" y1="96" x2="50" y2="120" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="10" y="122" width="80" height="28" rx="6" fill="#18181b" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
      <text x="50" y="138" textAnchor="middle" fill="#f97316" fontSize="7" fontFamily="JetBrains Mono, monospace">Redux State</text>
      {/* Vercel CDN */}
      <line x1="160" y1="96" x2="160" y2="120" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="120" y="122" width="80" height="28" rx="6" fill="#18181b" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,2" />
      <text x="160" y="138" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono, monospace">Vercel Edge CDN</text>
      {/* Labels */}
      <text x="180" y="20" textAnchor="middle" fill="#3f3f46" fontSize="9" fontFamily="JetBrains Mono, monospace">PropTech Platform Architecture</text>
    </svg>
  ),
  "Mars Rover Path Planning": () => (
    <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="Mars Rover path planning system architecture diagram">
      <defs>
        <marker id="mr-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
      {/* HiRISE Data */}
      <rect x="10" y="70" width="75" height="36" rx="8" fill="#18181b" stroke="#f97316" strokeWidth="1.5" />
      <text x="47" y="84" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">HiRISE</text>
      <text x="47" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Satellite Data</text>
      <line x1="85" y1="88" x2="110" y2="88" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#mr-arrow)" />
      {/* PyTorch CV */}
      <rect x="112" y="55" width="80" height="66" rx="8" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="152" y="75" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">PyTorch CV</text>
      <text x="152" y="87" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Segmentation</text>
      <text x="152" y="99" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">5 Terrain Types</text>
      <text x="152" y="111" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">800 Annotated Imgs</text>
      <line x1="192" y1="88" x2="217" y2="88" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#mr-arrow)" />
      {/* Path Planner */}
      <rect x="219" y="55" width="80" height="50" rx="8" fill="#18181b" stroke="#a855f7" strokeWidth="1.5" />
      <text x="259" y="72" textAnchor="middle" fill="#a855f7" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Path Planner</text>
      <text x="259" y="84" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">A* / Dijkstra</text>
      <text x="259" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="6.5" fontFamily="JetBrains Mono, monospace">+87.4% efficiency</text>
      {/* Result */}
      <line x1="259" y1="105" x2="259" y2="128" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="219" y="130" width="80" height="28" rx="6" fill="#18181b" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
      <text x="259" y="146" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="JetBrains Mono, monospace">Safe Traversal Route</text>
      <text x="180" y="22" textAnchor="middle" fill="#3f3f46" fontSize="9" fontFamily="JetBrains Mono, monospace">Rover Navigation Pipeline</text>
    </svg>
  ),
  "Metashot": () => (
    <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="Metashot sports AI system architecture diagram">
      <defs>
        <marker id="ms-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
      {/* Camera Feed */}
      <rect x="10" y="70" width="70" height="36" rx="8" fill="#18181b" stroke="#f97316" strokeWidth="1.5" />
      <text x="45" y="84" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Camera</text>
      <text x="45" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Video Feed</text>
      <line x1="80" y1="88" x2="105" y2="88" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#ms-arrow)" />
      {/* YOLO Detection */}
      <rect x="107" y="60" width="80" height="56" rx="8" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="147" y="77" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">YOLO + PyTorch</text>
      <text x="147" y="89" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Shot Detection</text>
      <text x="147" y="101" textAnchor="middle" fill="#10b981" fontSize="6.5" fontFamily="JetBrains Mono, monospace">{'<'}80ms latency</text>
      <text x="147" y="109" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">+33% accuracy</text>
      <line x1="187" y1="88" x2="212" y2="88" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#ms-arrow)" />
      {/* FastAPI + Redis */}
      <rect x="214" y="60" width="80" height="56" rx="8" fill="#18181b" stroke="#a855f7" strokeWidth="1.5" />
      <text x="254" y="77" textAnchor="middle" fill="#a855f7" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">FastAPI + Redis</text>
      <text x="254" y="89" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="JetBrains Mono, monospace">Backend Cache</text>
      <text x="254" y="101" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">Session Storage</text>
      <line x1="254" y1="116" x2="254" y2="135" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" />
      {/* Dashboard */}
      <rect x="194" y="137" width="120" height="28" rx="6" fill="#18181b" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
      <text x="254" y="150" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="JetBrains Mono, monospace">Player Dashboard</text>
      <text x="254" y="160" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="JetBrains Mono, monospace">185+ players · session insights</text>
      <text x="180" y="22" textAnchor="middle" fill="#3f3f46" fontSize="9" fontFamily="JetBrains Mono, monospace">Sports AI Real-Time Pipeline</text>
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
  const ArchDiagram = ArchitectureDiagrams[title];

  return (
    <>
      {/* Card with SpotlightCard wrapper */}
      <SpotlightCard
        className="group relative overflow-hidden rounded-2xl border border-[#27272a] bg-[#18181b] shadow-card transition-all duration-500 hover:border-[#f97316]/30 hover:shadow-card-hover cursor-pointer"
        glowColor="rgba(249, 115, 22, 0.1)"
        glowSize={400}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image area */}
        <div className="relative w-full aspect-video overflow-hidden bg-[#09090b]">
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
              <p className="text-sm leading-relaxed text-white/80">
                {description}
              </p>
              {bullets.length > 0 && (
                <ul className="mt-2.5 text-xs text-white/70 space-y-1 list-disc pl-4">
                  {bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#f97316]/20 text-[#fb923c] font-medium backdrop-blur-md border border-[#f97316]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* ---- Modal ---- */}
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
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal backdrop"
            />

            {/* Modal panel */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#09090b] rounded-3xl shadow-2xl border border-[#27272a] flex flex-col md:flex-row"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#27272a] hover:bg-[#3f3f46] text-neutral-300 hover:text-white transition-colors"
                aria-label="Close project modal"
              >
                <FaTimes className="text-xs" />
              </button>

              {/* ---- Left panel: Image + Links ---- */}
              <div className="w-full md:w-2/5 relative bg-[#18181b] border-r border-[#27272a] flex flex-col rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden">
                {/* Architecture SVG diagram (if available) OR image */}
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
                <div className="p-5 bg-[#09090b] flex flex-wrap gap-3 border-t border-[#27272a]">
                  {caseStudyUrl && (
                    <Link
                      href={caseStudyUrl}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f97316] text-white font-semibold text-sm hover:bg-[#ea6c0a] transition-colors shadow-amber-sm hover:shadow-amber-md"
                    >
                      <FaBookOpen /> Read Case Study
                    </Link>
                  )}
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-[#27272a] text-white font-semibold text-sm hover:bg-white/10 hover:border-[#f97316]/40 transition-all"
                    >
                      <FaExternalLinkAlt /> View Live
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-[#27272a] text-neutral-200 font-semibold text-sm hover:bg-white/10 hover:border-[#38bdf8]/40 transition-all"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* ---- Right panel: Content ---- */}
              <div className="w-full md:w-3/5 p-6 sm:p-10 flex flex-col gap-7">
                {/* Header */}
                <div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 mb-3">
                    <HiSparkles className="text-[10px]" />
                    {category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {title}
                  </h2>
                  <p className="text-base text-neutral-400 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Architecture text */}
                  {architecture && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-2 uppercase tracking-wider">
                        <FaLayerGroup className="text-[#38bdf8]" /> System Architecture
                      </h4>
                      <p className="text-neutral-400 text-sm leading-relaxed p-4 rounded-2xl bg-[#18181b] border border-[#27272a]">
                        {architecture}
                      </p>
                    </div>
                  )}

                  {/* Technical Challenges */}
                  {hurdles && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-2 uppercase tracking-wider">
                        <FaTools className="text-[#f97316]" /> Technical Challenges
                      </h4>
                      <div className="text-neutral-400 text-sm leading-relaxed p-4 rounded-2xl bg-[#f97316]/5 border border-[#f97316]/15">
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
                          className="font-mono text-xs font-medium px-3 py-1.5 rounded-lg bg-[#18181b] text-[#38bdf8] border border-[#27272a]"
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
>>>>>>> b33423f (Updated Theme of the website)
      </AnimatePresence>
    </>
  );
}
