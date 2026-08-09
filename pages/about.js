import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import peeps from "../public/Om_pic.jpg";
import {
  FaBrain,
  FaCalendarAlt,
  FaCloudUploadAlt,
  FaCode,
  FaDatabase,
  FaMapMarkerAlt,
  FaRocket,
} from "react-icons/fa";

const proofPoints = [
  { value: "87.4%", label: "rover navigation efficiency improvement" },
  { value: "185+", label: "players used for product feedback loops" },
  { value: "7K+", label: "users supported through ML endpoints" },
  { value: "9.0", label: "B.Tech CGPA in Computer Science" },
];

const focusAreas = [
  {
    icon: FaBrain,
    title: "Computer Vision",
    description: "Real-time detection, segmentation, model optimization, and gameplay-aware CV systems.",
  },
  {
    icon: FaDatabase,
    title: "LLM & RAG Systems",
    description: "Document intelligence, retrieval workflows, prompt engineering, and practical AI utilities.",
  },
  {
    icon: FaRocket,
    title: "Product Execution",
    description: "Turning user feedback into PRDs, roadmaps, shipped features, and measurable iteration.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "AI Deployment",
    description: "FastAPI services, CI/CD workflows, Dockerized systems, and production-ready ML delivery.",
  },
];

const timeline = [
  {
    period: "2025 - Present",
    title: "AI Product Engineer, Metashot",
    detail: "Leading AI product execution across engineering, UX, product feedback, and go-to-market loops.",
  },
  {
    period: "2025",
    title: "AI Engineer, Metashot",
    detail: "Improved real-time cricket shot detection, retention models, and low-latency vision pipelines.",
  },
  {
    period: "2024 - 2025",
    title: "Associate AI Engineer, Apoliums",
    detail: "Built data pipelines, ML prediction APIs, and deployment workflows for production products.",
  },
  {
    period: "2024",
    title: "R&D Intern, ISRO",
    detail: "Worked on terrain understanding and obstacle-aware rover path planning with satellite imagery.",
  },
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Om Javia</title>
        <meta
          name="description"
          content="Learn about Om Javia, an AI Product Engineer building computer vision, RAG, and production-ready AI systems."
        />
      </Head>

      <section className="mt-8 space-y-16 lg:mt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00] shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80">
                AI Product Engineer
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-300">
                <FaMapMarkerAlt className="text-[10px]" />
                Bangalore, India
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
                I build AI systems that move from model to product.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300 sm:text-lg">
                I&apos;m Om Javia, an AI Product Engineer focused on computer vision, LLM applications, and product execution. My work sits where models meet messy user behavior, real latency constraints, and business decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#ff6b00] dark:bg-white dark:text-neutral-950 dark:hover:bg-[#ff6b00] dark:hover:text-white"
              >
                <FaCode className="text-xs" />
                View projects
              </Link>
              <a
                href="https://cal.com/Om-Javia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:border-[#ff6b00] hover:text-[#ff6b00] dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-100"
              >
                <FaCalendarAlt className="text-xs" />
                Book a call
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#ff6b00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2 shadow-2xl shadow-black/10 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/50">
              <Image
                src={peeps}
                width={520}
                height={620}
                alt="Om Javia"
                priority
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/60 p-4 text-white shadow-xl backdrop-blur-md">
                <p className="text-sm font-semibold">Currently building at Metashot</p>
                <p className="mt-1 text-xs leading-5 text-white/75">
                  Real-time sports AI, product feedback systems, and player-facing intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div
              key={item.value}
              className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80"
            >
              <p className="text-3xl font-black tracking-tight text-[#ff6b00]">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              How I create value
            </p>
            <h2 className="text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              I connect research, engineering, and product judgment.
            </h2>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
              The strongest portfolios now prove decision-making quickly: what problem was owned, what shipped, and how tradeoffs were handled. That is the signal I want this page to communicate.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/80"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff6b00]/10 text-[#ff6b00]">
                  <area.icon />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              Experience arc
            </p>
            <h2 className="text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              From space research to sports AI products.
            </h2>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
              My path has moved through research datasets, ML APIs, real-time vision, and product leadership. The common thread is building systems that survive contact with real users.
            </p>
          </div>

          <div className="relative space-y-4">
            <div className="absolute bottom-5 left-[1.1rem] top-5 w-px bg-neutral-200 dark:bg-neutral-800" />
            {timeline.map((item) => (
              <div key={item.title} className="relative flex gap-4">
                <div className="mt-1 h-9 w-9 shrink-0 rounded-full border-4 border-[#f5f4f2] bg-[#ff6b00] shadow-sm dark:border-[#0a0a0a]" />
                <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-neutral-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-neutral-950 p-6 text-white shadow-2xl shadow-black/10 dark:border-neutral-800 sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ffb27a]">
                Available for focused collaborations
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Have an AI product, CV pipeline, or RAG workflow to build?
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-950 transition-all hover:bg-[#ff6b00] hover:text-white"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
