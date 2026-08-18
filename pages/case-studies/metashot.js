import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import Metashot from "../../public/Metashot.png";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const ARCHITECTURE_DIAGRAM = `
flowchart TB
    subgraph Input["📹 Input Layer"]
        CAM["Camera / Video Feed\n(Live or Recorded)"]
    end

    subgraph CV["🧠 CV Inference Pipeline"]
        DET["Shot Detection Model\n(YOLO / Custom CNN)"]
        CLASS["Shot Classification\n(Cricket Shot Type)"]
        CONF["Confidence Scoring\n(Per-Frame)"]
    end

    subgraph Product["⚙️ Product Layer"]
        AGG["Result Aggregation\n(Session Summary)"]
        FB["Player Feedback Engine\n(Weak Shot Analysis)"]
        API["FastAPI Backend\n(REST Endpoints)"]
    end

    subgraph Output["📊 Output"]
        DASH["Player Dashboard\n(Stats & Feedback)"]
        COACH["Coach View\n(Analytics Panel)"]
    end

    CAM --> DET
    DET --> CLASS
    CLASS --> CONF
    CONF --> AGG
    AGG --> FB
    AGG --> API
    FB --> API
    API --> DASH
    API --> COACH
`;

const CHALLENGES = [
  {
    challenge: "Low-latency inference on real-time video streams",
    solution:
      "Optimized the detection model using TorchScript and hardware-accelerated inference. Frame batching and asynchronous queue processing reduced end-to-end pipeline latency to under 80ms, enabling smooth real-time feedback.",
    tag: "Inference Optimization",
    color: "blue",
  },
  {
    challenge: "Accurate shot classification across varied lighting and angles",
    solution:
      "Built a custom data collection pipeline using practice sessions with 185+ players. Applied augmentation for lighting variations and used a multi-angle ensemble approach to improve classification accuracy across edge cases.",
    tag: "Model Robustness",
    color: "orange",
  },
  {
    challenge: "Translating model output into actionable player feedback",
    solution:
      "Designed a 'Weak Shot Analysis' module that aggregates per-session confidence scores and identifies recurring shot-type weaknesses. Built a player-facing feedback card that communicates improvement areas in plain language, not probability scores.",
    tag: "Product Engineering",
    color: "purple",
  },
  {
    challenge: "Scalable API architecture for concurrent player sessions",
    solution:
      "Built the backend on FastAPI with async request handling and Redis-backed session state. This allowed multiple simultaneous player sessions without blocking, supporting the 185-player product feedback loop.",
    tag: "Backend Architecture",
    color: "green",
  },
];

const METRICS = [
  { value: "185+", label: "Players in feedback loops" },
  { value: "< 80ms", label: "End-to-end pipeline latency" },
  { value: "Real-time", label: "Shot detection speed" },
  { value: "Sports AI", label: "Domain" },
];

export default function MetashotCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>Metashot Case Study | Om Javia</title>
        <meta
          name="description"
          content="Deep-dive into Metashot — Om Javia's real-time cricket shot detection and player feedback AI system. Architecture, ML pipeline, and engineering hurdles."
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
                Sports AI
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/50">
                Production · 2025
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95]">
              Metashot
            </h1>
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A real-time AI system for cricket shot detection and player-facing feedback, deployed in production and used by 185+ players across practice sessions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-neutral-200 bg-white/80 p-5 text-center dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm"
              >
                <p className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-white">
                  {m.value}
                </p>
                <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/10">
            <Image
              src={Metashot}
              alt="Metashot cricket AI platform screenshot"
              className="w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Problem Statement */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              Problem Statement
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Elite cricket coaching was inaccessible to most players.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              Skilled coaching feedback — specifically on batting technique — is expensive and scarce. Most players practice without any objective insight into their shot quality or weaknesses.
            </p>
            <p>
              Metashot's mission: use computer vision to democratize high-quality coaching feedback. Players record or stream their practice, and the AI identifies exactly which shot type was played and where technique broke down.
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
              From camera feed to player dashboard.
            </h2>
          </div>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            The system is a multi-stage pipeline: a CV inference layer detects and classifies shots frame by frame, which feeds into a product layer that aggregates sessions, identifies weaknesses, and surfaces insights to players via a FastAPI backend.
          </p>
          <MermaidDiagram chart={ARCHITECTURE_DIAGRAM} className="max-w-4xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "YOLO / Custom CNN", desc: "Shot detection and classification on live or recorded video frames." },
              { title: "FastAPI + Redis", desc: "Async backend with session state management for concurrent players." },
              { title: "Weak Shot Analysis", desc: "Aggregation module that translates confidence scores into actionable coaching feedback." },
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
              Real-time AI with real-world constraints.
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
                    c.color === "orange" ? "bg-orange-50 text-orange-600 border border-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-900/40" :
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
            Currently building
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Metashot is live and growing.
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400 leading-relaxed">
            I'm currently serving as AI Product Engineer at Metashot, leading the product and engineering roadmap. If you're working on a Sports AI or Computer Vision product, let's talk.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              Discuss Sports AI / CV work
            </Link>
            <a
              href="https://cal.com/Om-Javia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <FaExternalLinkAlt className="text-xs" /> Schedule a call
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
