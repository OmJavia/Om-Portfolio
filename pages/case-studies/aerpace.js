import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import aerpace from "../../public/aerpace.jpg";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const ARCHITECTURE_DIAGRAM = `
flowchart TB
    subgraph Client["🌐 Client (Browser)"]
        UI["React Frontend\\n(Cinematic UI)"]
        ANIM["Custom CSS Animations\\n(Fluid Transitions)"]
    end

    subgraph CDN["⚡ Asset Delivery"]
        MEDIA["Optimized Media Assets\\n(High-Res Showcase)"]
        EDGE["Edge CDN\\n(Low-Latency Delivery)"]
    end

    subgraph Perf["🚀 Performance Layer"]
        CWV["Core Web Vitals Optimization\\n(Lazy Loading & Preloading)"]
    end

    UI --> EDGE
    MEDIA --> EDGE
    EDGE --> CWV
    ANIM --> UI
`;

const CHALLENGES = [
  {
    challenge: "High-resolution media vs. Core Web Vitals budgets",
    solution:
      "Implemented selective asset preloading, image compression pipelines, and responsive srcsets to maintain 60fps rendering without degrading page load metrics.",
    tag: "Performance",
    color: "green",
  },
  {
    challenge: "Cinematic, luxury-brand aesthetic presentation",
    solution:
      "Designed dynamic visual hierarchies, dark-mode glassmorphic cards, and custom CSS micro-interactions that elevate brand positioning.",
    tag: "Frontend Design",
    color: "blue",
  },
  {
    challenge: "Responsive layout consistency across target screen sizes",
    solution:
      "Built fluid container layouts using Tailwind CSS breakpoints and flexible typography scales, ensuring seamless rendering from mobile up to 4K displays.",
    tag: "Responsive UX",
    color: "purple",
  },
];

const METRICS = [
  { value: "< 1.8s", label: "Mobile LCP speed" },
  { value: "60fps", label: "Animation frame rate" },
  { value: "100%", label: "Responsive layout score" },
  { value: "React", label: "Core framework" },
];

export default function AerpaceCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>Aerpace Case Study | Om Javia</title>
        <meta
          name="description"
          content="Deep-dive into Aerpace — Om Javia's high-performance future mobility product web platform. Frontend architecture, performance engineering, and visual design."
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
                Mobility
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/50">
                Production Live
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95]">
              Aerpace
            </h1>
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A future-mobility product web platform engineered for brand storytelling, performance-conscious media delivery, and sleek visual interactions.
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
              src={aerpace}
              alt="Aerpace platform screenshot"
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.aerpace.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Visit Aerpace Website
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
              Capturing high-consideration mobility innovation online.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              Future mobility products demand a web presence that balances premium visual storytelling with rigorous web performance standards. Heavy media assets often destroy loading metrics if unoptimized.
            </p>
            <p>
              Aerpace needed a clean, responsive digital platform capable of highlighting product aesthetics and technical vision while keeping asset delivery crisp and fast.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              Frontend Architecture
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Cinematic performance pipeline.
            </h2>
          </div>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            The web app is structured with modular React components, using CSS transform hardware acceleration for high-FPS micro-animations and edge network optimization for fast global media loading.
          </p>
          <MermaidDiagram chart={ARCHITECTURE_DIAGRAM} className="max-w-4xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "React Components", desc: "Modular, reusable component layout for clean code architecture." },
              { title: "CSS GPU Acceleration", desc: "Hardware-accelerated transitions to guarantee 60fps animations." },
              { title: "Edge Media CDN", desc: "Optimized image loading with responsive breakpoints." },
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
              Solutions built to scale.
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
            Explore the project
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Experience Aerpace live.
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400 leading-relaxed">
            Visit the live platform to see the product storytelling, media optimization, and responsive design in action.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.aerpace.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Visit Aerpace
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Discuss a similar project
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
