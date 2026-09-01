import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import Car from "../../public/Car.png";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const ARCHITECTURE_DIAGRAM = `
flowchart TB
    subgraph UI["📱 Mobile UI Layer"]
        WIZARD["Multi-step Booking Wizard\\n(Step Validation State)"]
        LOC["Location & Service Selection\\n(Interactive Map/Form)"]
    end

    subgraph Logic["⚙️ App Logic Layer"]
        STATE["React State Manager\\n(Booking Draft Storage)"]
        MOCK["Service API Handlers\\n(Mechanic Dispatch Mock)"]
    end

    subgraph Delivery["⚡ Web Layer"]
        VERCEL["Vercel Deployment\\n(Mobile Edge Delivery)"]
    end

    WIZARD --> STATE
    LOC --> STATE
    STATE --> MOCK
    MOCK --> VERCEL
`;

const CHALLENGES = [
  {
    challenge: "Minimizing user friction during high-stress breakdown scenarios",
    solution:
      "Engineered a 3-step mobile booking wizard requiring minimal text input, auto-detecting breakdown categories for faster dispatch requests.",
    tag: "Mobile UX",
    color: "blue",
  },
  {
    challenge: "Handling multi-step form state cleanly without global bloat",
    solution:
      "Utilized custom React form hooks to validate user inputs at each wizard step while holding draft state locally in memory.",
    tag: "React State",
    color: "green",
  },
  {
    challenge: "Ensuring high-speed load times on 3G/4G mobile networks",
    solution:
      "Optimized asset weight and CSS bundles for fast mobile execution, achieving rapid First Contentful Paint (FCP) scores.",
    tag: "Mobile Optimization",
    color: "purple",
  },
];

const METRICS = [
  { value: "3 Steps", label: "Streamlined booking flow" },
  { value: "< 1.6s", label: "Mobile FCP speed" },
  { value: "Mobile-1st", label: "UX Architecture" },
  { value: "React", label: "Core framework" },
];

export default function ApnaMechanicCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>Apna Mechanic Case Study | Om Javia</title>
        <meta
          name="description"
          content="Deep-dive into Apna Mechanic — Om Javia's mobile-first service booking web app for vehicle repair and roadside assistance."
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
                Service App
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/50">
                Production Prototype
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95]">
              Apna Mechanic
            </h1>
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A mobile-first automotive service app concept engineered for rapid mechanic discovery, roadside booking, and hassle-free assistance.
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
              src={Car}
              alt="Apna Mechanic app preview"
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://apna-mechanic.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Visit Apna Mechanic Prototype
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
              Roadside automotive help needs immediate, zero-friction UI.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              When a vehicle breaks down on the road, users need assistance within seconds. Complex signups or cluttered navigation create immense user frustration.
            </p>
            <p>
              Apna Mechanic solves this by prioritising a direct, 3-step booking flow designed specifically for mobile screen interactions.
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
              Mobile-First React Workflow.
            </h2>
          </div>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            The application separates UI wizard views from state handlers, providing instant feedback as the user navigates service selections.
          </p>
          <MermaidDiagram chart={ARCHITECTURE_DIAGRAM} className="max-w-4xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "React Wizard", desc: "Step-by-step form layout with real-time validation." },
              { title: "Mobile Optimized", desc: "Touch-friendly tap targets and responsive layout." },
              { title: "Vercel Edge", desc: "Ultra-fast global static asset serving." },
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
              UX Solutions.
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
            Live Web App
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Try Apna Mechanic.
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400 leading-relaxed">
            Click below to test the mobile booking journey and service flow.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://apna-mechanic.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Launch App
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Discuss Service Apps
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
