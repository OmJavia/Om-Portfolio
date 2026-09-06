import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import CodingShark from "../../public/Coding-Shark.jpg";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const ARCHITECTURE_DIAGRAM = `
flowchart TB
    subgraph SSG["⚡ Static Generator"]
        PAGES["Next.js / HTML Pages\\n(Pre-rendered at Build Time)"]
        ASSETS["Optimized Graphic Assets\\n(Brand Imagery & SVG)"]
    end

    subgraph Edge["🌐 Edge Distribution"]
        CDN["Global CDN Network\\n(Zero Cold Starts)"]
    end

    subgraph User["📱 Visitor Experience"]
        DESK["Desktop View"]
        MOB["Mobile Responsive View"]
    end

    PAGES --> CDN
    ASSETS --> CDN
    CDN --> DESK
    CDN --> MOB
`;

const CHALLENGES = [
  {
    challenge: "Designing intuitive content hierarchy for learners & visitors",
    solution:
      "Structured navigation around distinct student persona paths, making course discovery and community links immediately accessible.",
    tag: "Information Architecture",
    color: "blue",
  },
  {
    challenge: "Optimizing static generation for instant global page loads",
    solution:
      "Utilized pre-rendered static HTML builds with edge caching, achieving top performance benchmark scores across mobile devices.",
    tag: "Web Performance",
    color: "green",
  },
  {
    challenge: "Accessible & brand-aligned visual design system",
    solution:
      "Created a high-contrast dark theme with bold typography and clear interactive states adhering to WCAG accessibility guidelines.",
    tag: "Design System",
    color: "purple",
  },
];

const METRICS = [
  { value: "100%", label: "SEO & Accessibility score" },
  { value: "< 1.5s", label: "Page load speed" },
  { value: "SSG", label: "Static architecture" },
  { value: "Community", label: "Focus vertical" },
];

export default function CodingSharksCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>Coding Sharks Case Study | Om Javia</title>
        <meta
          name="description"
          content="Deep-dive into Coding Sharks — Om Javia's education and community platform web presence. Architecture, accessibility, and content design."
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
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/40">
                Community
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/50">
                Production Live
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95]">
              Coding Sharks
            </h1>
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A public web experience for a coding education and community brand, engineered with an approachable visual system and high-performance static rendering.
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
              src={CodingShark}
              alt="Coding Sharks website preview"
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.thecodingsharks.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Visit Coding Sharks Website
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
              Building trust with aspiring developers online.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              Coding communities require transparent, easy-to-navigate landing flows that clearly communicate learning paths, mentorship offerings, and community resources.
            </p>
            <p>
              The platform was designed to give Coding Sharks a bold, trustworthy web identity focused on developer growth and accessibility.
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
              Static Site Generation (SSG).
            </h2>
          </div>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Built using static site generation to guarantee fast initial loads, high SEO search rankings, and reliable edge uptime.
          </p>
          <MermaidDiagram chart={ARCHITECTURE_DIAGRAM} className="max-w-4xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Static Pre-rendering", desc: "Build-time HTML generation for maximum search visibility." },
              { title: "Edge CDN", desc: "Global asset delivery with zero server overhead." },
              { title: "Responsive Layouts", desc: "Mobile-first CSS grid and flexbox structure." },
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
              Key outcomes.
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
            Live Platform
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Visit Coding Sharks live.
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400 leading-relaxed">
            Click below to explore the Coding Sharks website and community portal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.thecodingsharks.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Visit Website
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Discuss Community Tech
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
