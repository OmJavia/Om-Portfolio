import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import netflix from "../../public/netflix.jpg";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const ARCHITECTURE_DIAGRAM = `
flowchart TB
    subgraph Client["🌐 Client (React Single Page App)"]
        UI["Movie Catalog UI\\n(Carousels & Search)"]
        HOOKS["Custom Fetch Hooks\\n(Data Caching & Debouncing)"]
    end

    subgraph API["📡 External API"]
        TMDB["TMDB REST Endpoints\\n(Trending, Search, Genres)"]
    end

    subgraph State["⚡ Application State"]
        CACHE["Client-side Query Cache"]
        SCROLL["Infinite Scroll State"]
    end

    UI --> HOOKS
    HOOKS --> TMDB
    TMDB --> CACHE
    CACHE --> UI
    SCROLL --> HOOKS
`;

const CHALLENGES = [
  {
    challenge: "Managing complex asynchronous state across multiple carousels",
    solution:
      "Built custom React data fetching hooks that cached API responses per category, eliminating redundant network calls during tab switches.",
    tag: "State Management",
    color: "blue",
  },
  {
    challenge: "Handling infinite scroll pagination smoothly",
    solution:
      "Implemented IntersectionObserver API triggers for background page fetching, maintaining 60fps scrolling without DOM jank.",
    tag: "Frontend Performance",
    color: "green",
  },
  {
    challenge: "Responsive media card grids for mobile and desktop screens",
    solution:
      "Designed dynamic CSS grid layouts with flexible image aspect ratios and Tailwind breakpoint utilities for seamless device adaptability.",
    tag: "UI Engineering",
    color: "purple",
  },
];

const METRICS = [
  { value: "60fps", label: "Smooth carousel scroll" },
  { value: "< 200ms", label: "Cached query response" },
  { value: "TMDB", label: "REST API integration" },
  { value: "React", label: "Frontend stack" },
];

export default function MovieflixCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>Movieflix Case Study | Om Javia</title>
        <meta
          name="description"
          content="Deep-dive into Movieflix — Om Javia's streaming-inspired web app built with React, TMDB API, custom data fetching hooks, and Tailwind CSS."
        />
      </Head>

      <article className="space-y-20 py-4">
        {/* Back nav */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <FaArrowLeft className="text-xs" /> Back to projects
        </Link>

        {/* Hero */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50">
                Frontend
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/50">
                Production Live
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95]">
              Movieflix
            </h1>
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A streaming-inspired web interface demonstrating API-driven UI patterns, movie discovery carousels, and responsive layout design.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-neutral-200 bg-white/80 p-5 text-center dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm"
              >
                <p className="text-3xl font-black tracking-tight text-neutral-950 dark:text-white">
                  {m.value}
                </p>
                <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/10">
            <Image
              src={netflix}
              alt="Movieflix web interface preview"
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://movieflix-om.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Visit Movieflix Website
            </a>
          </div>
        </div>

        {/* Problem Statement */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              Problem Statement
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Delivering a responsive, media-first browsing experience.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              Modern streaming platforms require smooth browsing, dynamic genre filtering, and high-density image grids that load gracefully across devices.
            </p>
            <p>
              Movieflix was built as a clean frontend showcase, consuming TMDB REST APIs to power real-time search, genre feeds, and detail modals.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              System Architecture
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              API-driven React Architecture.
            </h2>
          </div>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            The application structures client data fetching through custom React hooks, caching TMDB query results locally to minimize network roundtrips.
          </p>
          <MermaidDiagram chart={ARCHITECTURE_DIAGRAM} className="max-w-4xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "React SPA", desc: "Single page architecture for fluid view transitions." },
              { title: "TMDB REST API", desc: "Real-time movie metadata, posters, and category discovery." },
              { title: "Tailwind CSS", desc: "Responsive layout system with custom carousel scrollbars." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white/80 p-5 dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm">
                <p className="font-bold text-neutral-950 dark:text-white">{item.title}</p>
                <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              Engineering Challenges
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              UI & Data challenges solved.
            </h2>
          </div>
          <div className="space-y-4">
            {CHALLENGES.map((c) => (
              <div
                key={c.challenge}
                className="grid gap-6 rounded-2xl border border-neutral-200 bg-white/80 p-6 dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm sm:grid-cols-[1fr_2fr]"
              >
                <div>
                  <span className={`inline-block font-mono text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md mb-3 ${
                    c.color === "blue" ? "bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/50" :
                    c.color === "green" ? "bg-green-50 text-green-700 border border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50" :
                    "bg-purple-50 text-purple-600 border border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-900/50"
                  }`}>
                    {c.tag}
                  </span>
                  <p className="font-bold text-neutral-950 dark:text-white leading-snug text-sm sm:text-base">
                    {c.challenge}
                  </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed self-center">
                  {c.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-neutral-200 bg-neutral-950 p-8 text-white shadow-2xl sm:p-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Live Web Application
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Explore Movieflix live.
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400 leading-relaxed">
            The application is live on Vercel. Click below to browse movies, test search queries, and view category carousels.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://movieflix-om.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Visit Movieflix
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Discuss Frontend / API projects
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
