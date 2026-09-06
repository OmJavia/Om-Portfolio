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
  FaGamepad,
} from "react-icons/fa";

const proofPoints = [
  { value: "87.4%", label: "Rover navigation efficiency improvement (ISRO)" },
  { value: "185+", label: "Players in Metashot active feedback loops" },
  { value: "7K+", label: "Users supported through production ML APIs" },
  { value: "9.0", label: "B.Tech CGPA in Computer Science" },
];

const focusAreas = [
  {
    icon: FaBrain,
    title: "Computer Vision Systems",
    description: "Real-time perception, detection models, video intelligence pipelines, and game-aware CV systems.",
  },
  {
    icon: FaDatabase,
    title: "LLM & RAG Applications",
    description: "Semantic search, vector retrieval, document intelligence workflows, and prompt-engineered tools.",
  },
  {
    icon: FaRocket,
    title: "AI Product Execution",
    description: "Taking ambiguous ideas from feasibility and prototyping to user testing, PRDs, and shipped features.",
  },
  {
    icon: FaGamepad,
    title: "Intelligent Interactive Products",
    description: "Bridging hardware sensors, motion data, mobile applications, and interactive digital gaming.",
  },
];

const timeline = [
  {
    period: "2025 - Present",
    title: "AI Product Engineer, Metashot & MegaShot Pickl+",
    detail: "Leading AI product execution across engineering, UX, motion sensing, user feedback, and go-to-market loops.",
  },
  {
    period: "2025",
    title: "AI Engineer, Metashot",
    detail: "Optimized real-time cricket shot detection (<80ms latency), Unity engine video integration, and player analytics.",
  },
  {
    period: "2024 - 2025",
    title: "Associate AI Engineer, Apoliums Infotech",
    detail: "Architected feature engineering pipelines, FastAPI prediction endpoints for 7K+ users, and automated CI/CD workflows.",
  },
  {
    period: "2024",
    title: "R&D Intern, ISRO (Space Applications Centre)",
    detail: "Preprocessed 800+ satellite images, built terrain segmentation models, and evaluated obstacle-aware path planning.",
  },
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Om Javia | AI Product Engineer</title>
        <meta
          name="description"
          content="I'm Om Javia, an AI Product Engineer building computer vision, LLM/RAG systems, and intelligent interactive products."
        />
      </Head>

      <section className="mt-8 space-y-16 lg:mt-12">
        {/* Intro Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                ABOUT OM JAVIA
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight text-neutral-950 dark:text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                Turning emerging AI capabilities into products people actually use.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal">
                I&apos;m Om, an AI Product Engineer interested in the space between emerging technology and real products. I enjoy taking ambiguous problems, experimenting with AI and software approaches, and turning the ideas that work into reliable products people can actually use.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#featured-work"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#f97316] text-white hover:bg-[#ea6c0a] px-6 py-3 text-sm font-semibold transition-all shadow-amber-sm"
              >
                <span>View Featured Work</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-neutral-200 hover:text-[#f97316] transition-all shadow-sm"
              >
                <span>Let&apos;s Work Together</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#f97316]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2 shadow-2xl dark:border-[#27272a] dark:bg-[#18181b]">
              <Image
                src={peeps}
                width={520}
                height={620}
                alt="Om Javia"
                priority
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/60 p-4 text-white shadow-xl backdrop-blur-md">
                <p className="text-sm font-semibold">Currently building at Metashot & MegaShot Pickl+</p>
                <p className="mt-1 text-xs leading-5 text-white/75">
                  Sports AI, motion sensing, interactive gaming, and product execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Proof Points */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-[#27272a] dark:bg-[#18181b]/80"
            >
              <p className="text-3xl font-black tracking-tight text-[#f97316]">{item.value}</p>
              <p className="mt-2 text-xs leading-5 font-mono text-neutral-600 dark:text-neutral-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Progression Arc */}
        <div className="rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-neutral-50 dark:bg-[#09090b] p-8 sm:p-10 space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#f97316]">
            CAREER EVOLUTION ARC
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white">
            Engineering growth built across multiple domains.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Software Engineering",
              "AI Engineering",
              "Space Research",
              "Computer Vision",
              "AI Products",
              "Intelligent Interactive Products",
            ].map((node, i) => (
              <div
                key={node}
                className="p-4 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm font-mono text-xs text-center font-semibold text-neutral-800 dark:text-neutral-200"
              >
                <span className="text-[#f97316] text-[10px] block mb-1">STEP 0{i + 1}</span>
                {node}
              </div>
            ))}
          </div>
        </div>

        {/* How I Create Value */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              Core Capabilities
            </p>
            <h2 className="text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Connecting research, software systems, and product judgment.
            </h2>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
              I operate across technical depth and product execution: building computer vision models, scalable backend services, document search systems, and smart interactive hardware products.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm transition-all hover:-translate-y-1 dark:border-[#27272a] dark:bg-[#18181b]/80"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f97316]/10 text-[#f97316]">
                  <area.icon />
                </div>
                <h3 className="text-base font-bold text-neutral-950 dark:text-white">{area.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              Experience History
            </p>
            <h2 className="text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              From space research to intelligent products.
            </h2>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
              My journey spans satellite dataset annotation, ML prediction endpoints, real-time sports AI, and connected gaming products.
            </p>
          </div>

          <div className="relative space-y-4">
            <div className="absolute bottom-5 left-[1.1rem] top-5 w-px bg-neutral-200 dark:bg-neutral-800" />
            {timeline.map((item) => (
              <div key={item.title} className="relative flex gap-4">
                <div className="mt-1 h-9 w-9 shrink-0 rounded-full border-4 border-[#f5f4f2] bg-[#f97316] shadow-sm dark:border-[#09090b]" />
                <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-[#27272a] dark:bg-[#18181b]/80">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-neutral-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner */}
        <div className="rounded-3xl border border-neutral-200 bg-neutral-950 p-6 text-white shadow-2xl dark:border-[#27272a] sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#f97316]">
                Collaborations & Engineering Opportunities
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Have an AI product idea, CV system, or intelligent product to build?
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#f97316] text-white hover:bg-[#ea6c0a] h-11 px-6 py-2.5 font-semibold text-sm shadow-amber-sm"
            >
              <span>Let&apos;s Work Together</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
