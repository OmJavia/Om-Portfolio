import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import NirmanHome from "../../public/nirmanbook.png";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ARCHITECTURE_DIAGRAM = `
flowchart TB
    subgraph Client["🌐 Client (Browser)"]
        UI["Next.js Pages\n(React Components)"]
        TW["Tailwind CSS\n(Styling & Responsive Layout)"]
    end

    subgraph CDN["⚡ Vercel Edge Network"]
        STATIC["Static Assets\n(Images, Fonts, CSS)"]
        API["Next.js API Routes\n(Serverless)"]
    end

    subgraph Data["📦 Data Layer"]
        FORM["Formspree\n(Contact Form)"]
        CMS["Content Objects\n(Hardcoded JSON)"]
    end

    UI -->|"Page Request"| CDN
    TW --> UI
    STATIC --> UI
    API -->|"Form Submission"| FORM
    CMS -->|"Build Time Hydration"| UI
`;

const CHALLENGES = [
  {
    challenge: "Multi-step service discovery flow on mobile",
    solution:
      "Implemented a step-by-step wizard pattern using React state, ensuring each step validated before advancing. Reduced drop-off by designing minimal-input forms with smart defaults.",
    tag: "UX Engineering",
    color: "blue",
  },
  {
    challenge: "Image-heavy pages causing slow Time to Interactive (TTI)",
    solution:
      "Leveraged Next.js Image component with lazy loading, blur placeholders, and Vercel's automatic WebP conversion. Achieved sub-2s LCP scores on mobile.",
    tag: "Performance",
    color: "green",
  },
  {
    challenge: "Clear service category taxonomy for construction verticals",
    solution:
      "Worked with the business team to map 20+ construction services into 5 clear top-level categories. Built a filterable grid using simple client-side state — no backend required.",
    tag: "Product Thinking",
    color: "purple",
  },
];

const METRICS = [
  { value: "< 2s", label: "LCP on mobile" },
  { value: "20+", label: "Service categories" },
  { value: "100%", label: "Production uptime" },
  { value: "Next.js", label: "Core framework" },
];

export default function NirmanBookCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>NirmanBook Case Study | Om Javia</title>
        <meta
          name="description"
          content="Deep-dive into NirmanBook — Om Javia's PropTech production platform. Architecture, engineering challenges, and quantifiable impact."
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
                PropTech
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/50">
                Production Live
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95]">
              NirmanBook
            </h1>
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A construction and real-estate platform engineered to make project discovery and service workflows reliable, fast, and intuitive for builders and contractors.
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
              src={NirmanHome}
              alt="NirmanBook platform screenshot"
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.nirmanbook.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> View Live Site
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
              Construction service discovery was broken.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              Finding reliable contractors, architects, and construction services in India is a largely fragmented, word-of-mouth process. There was no clean digital layer for discovery, service comparison, or booking.
            </p>
            <p>
              NirmanBook was built to change that — creating a production-grade web platform where service providers can list offerings and builders can discover them through a clear, structured interface.
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
              Built for speed at the edge.
            </h2>
          </div>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            The platform is a statically generated Next.js site deployed on Vercel's edge network, ensuring lightning-fast global performance with zero cold starts. Data is hydrated at build time, removing the need for a dedicated backend CMS.
          </p>
          <MermaidDiagram chart={ARCHITECTURE_DIAGRAM} className="max-w-4xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Next.js (SSG)", desc: "Static generation for instant page loads and perfect SEO scores." },
              { title: "Vercel Edge CDN", desc: "Global content delivery with automatic WebP image optimization." },
              { title: "Tailwind CSS", desc: "Utility-first styling for a fully responsive, mobile-first layout." },
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
              The hard problems we solved.
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
            See NirmanBook live.
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400 leading-relaxed">
            The platform is live and serving real users. Visit it to see the product flows, service discovery, and mobile UX in action.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.nirmanbook.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Visit NirmanBook
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
