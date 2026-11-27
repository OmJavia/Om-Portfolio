import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import peeps from "../public/Om_pic.jpg";
import {
  FaBrain,
  FaCalendarAlt,
  FaCode,
  FaDatabase,
  FaRocket,
  FaGamepad,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";

// Verified Proof Points per Phase 5 guidelines
// (185+ players, 7K+ users, and 87.4% improvement removed to prevent unverified or duplicated metrics)
const proofPoints = [
  { value: "500% in 24h", label: "Kickstarter goal reached in 24 hours (company-reported)" },
  { value: "<80ms", label: "Inference latency for sports AI video classification" },
  { value: "800+", label: "HiRISE satellite images annotated (ISRO research)" },
  { value: "9.0/10", label: "B.Tech CGPA in Computer Science" },
];

const focusAreas = [
  {
    icon: FaRocket,
    title: "AI Product & Go-to-Market",
    description:
      "Translating early-stage capabilities into clear PRDs, hardware-software milestones, backer engagement, and launch operations.",
  },
  {
    icon: FaBrain,
    title: "Computer Vision Systems",
    description:
      "Real-time perception, low-latency video intelligence pipelines, PyTorch CNNs, and game-aware vision systems.",
  },
  {
    icon: FaGamepad,
    title: "Connected Interactive Products",
    description:
      "Bridging 9-axis physical sensors, low-latency BLE transmission, mobile applications, and haptic gaming feedback.",
  },
  {
    icon: FaDatabase,
    title: "LLM & RAG Systems",
    description:
      "Semantic search utilities, vector retrieval, document intelligence workflows, and prompt-engineered tool pipelines.",
  },
];

const timeline = [
  {
    period: "Nov 2025 — Present",
    title: "Founding Manager, MegaShot (Metashot)",
    detail:
      "Leading AI product execution across hardware sensor integration, mobile gameplay workflows, user feedback loops, and Kickstarter go-to-market execution.",
  },
  {
    period: "Jul 2025 — Oct 2025",
    title: "AI Engineer, Metashot",
    detail:
      "Optimized real-time cricket shot detection for <80ms inference latency using PyTorch and OpenCV; integrated live video feedback into Unity engine workflows.",
  },
  {
    period: "May 2024 — Jun 2025",
    title: "Associate AI Engineer, Apoliums Infotech",
    detail:
      "Architected data preprocessing pipelines in Python/Pandas, deployed Dockerized FastAPI prediction microservices, and standardized CI/CD workflows.",
  },
  {
    period: "Feb 2024 — May 2024",
    title: "R&D Intern, ISRO (Space Applications Centre)",
    detail:
      "Annotated 800+ satellite images, built terrain segmentation models, and evaluated obstacle-aware path planning producing an 87.4% navigation-efficiency score in rover simulations.",
  },
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Om Javia | Founding Manager, MegaShot  AI Product &amp; GTM</title>
        <meta
          name="description"
          content="Learn about Om Javia's transition from AI and computer-vision engineering into early-stage product leadership and go-to-market execution."
        />
        <link rel="canonical" href="https://omjavia.vercel.app/about" />
      </Head>

      <section className="mt-8 space-y-16 lg:mt-12">
        {/* Intro Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] border border-[#1F5E4B]/20">
                ABOUT OM JAVIA
              </span>
            </div>

            <div className="space-y-5">
              <h1
                className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-neutral-950 dark:text-white"
                
              >
                Bridging technical AI depth with early-stage <span className="text-[#1F5E4B]">product execution</span>.
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal">
                I started my career writing computer vision models, satellite terrain segmentation pipelines, and production backend APIs. Over time, I transitioned into taking complete AI products from idea to launch combining technical understanding with PRD authorship, cross-functional engineering coordination, user testing loops, and go-to-market execution.
              </p>
              <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                What distinguishes me from a business-only product candidate is that I understand model constraints, latency bottlenecks, and sensor data physics firsthand. I can communicate with embedded engineers in firmware terms, talk to ML researchers in benchmark terms, and translate user feedback into actionable delivery priorities.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#featured-work"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#1F5E4B] text-white hover:bg-[#174839] px-6 py-3 text-sm font-semibold transition-all shadow-sm"
              >
                <span>View Featured Work</span>
                <FaArrowRight className="text-xs" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-neutral-200 hover:text-[#1F5E4B] transition-all shadow-sm"
              >
                <span>Hiring? Let&apos;s Talk</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#1F5E4B]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2 shadow-2xl dark:border-[#27272a] dark:bg-[#18181b]">
              <Image
                src={peeps}
                width={520}
                height={620}
                alt="Om Javia — Founding Manager, MegaShot"
                placeholder="blur"
                quality={85}
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/60 p-4 text-white shadow-xl backdrop-blur-md">
                <p className="text-sm font-semibold">Founding Manager, MegaShot (Metashot)</p>
                <p className="mt-1 text-xs leading-5 text-white/75">
                  AI product strategy, hardware-software integration, and GTM execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Proof Points Strip */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-[#27272a] dark:bg-[#18181b]/80"
            >
              <p className="text-2xl sm:text-3xl font-black tracking-tight text-[#1F5E4B]">{item.value}</p>
              <p className="mt-2 text-xs leading-5 font-medium text-neutral-600 dark:text-neutral-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Career Evolution Arc */}
        <div className="rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-neutral-50 dark:bg-[#09090b] p-6 sm:p-10 space-y-6">
          <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
            CAREER EVOLUTION ARC
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white">
            Engineering depth to product and go-to-market execution.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: "01", title: "Software Eng", desc: "APIs & Web" },
              { step: "02", title: "Space Research", desc: "ISRO Satellite CV" },
              { step: "03", title: "ML Pipelines", desc: "FastAPI & CI/CD" },
              { step: "04", title: "Sports AI", desc: "<80ms YOLO Models" },
              { step: "05", title: "Connected IoT", desc: "Motion BLE Rackets" },
              { step: "06", title: "Founding GTM", desc: "Kickstarter & Launch" },
            ].map((node) => (
              <div
                key={node.step}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm font-medium text-center font-semibold text-neutral-800 dark:text-neutral-200"
              >
                <span className="text-[#1F5E4B] text-[10px] block mb-1">STAGE {node.step}</span>
                <p className="text-xs font-bold">{node.title}</p>
                <p className="text-[10px] text-neutral-500 font-normal mt-0.5">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Technical Understanding Informs Product Decisions */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <p className="font-medium text-xs font-semibold uppercase tracking-[0.18em] text-[#1F5E4B]">
              Core Competencies
            </p>
            <h2 className="text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Connecting engineering feasibility with product value.
            </h2>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
              Technical capability without product alignment produces cool demos that don&apos;t ship; product ideas without technical depth produce unbuildable specs. I operate at the intersection:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm transition-all hover:-translate-y-1 dark:border-[#27272a] dark:bg-[#18181b]/80"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
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
            <p className="font-medium text-xs font-semibold uppercase tracking-[0.18em] text-[#1F5E4B]">
              Career History
            </p>
            <h2 className="text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              From satellite research to founding product management.
            </h2>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
              A track record grounded in verifiable engineering milestones, research datasets, low-latency models, and connected product launches.
            </p>
          </div>

          <div className="relative space-y-4">
            <div className="absolute bottom-5 left-[1.1rem] top-5 w-px bg-neutral-200 dark:bg-neutral-800" />
            {timeline.map((item) => (
              <div key={item.title} className="relative flex gap-4">
                <div className="mt-1 h-9 w-9 shrink-0 rounded-full border-4 border-[#f5f4f2] bg-[#1F5E4B] shadow-sm dark:border-[#09090b]" />
                <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-[#27272a] dark:bg-[#18181b]/80">
                  <p className="font-medium text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
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
              <p className="font-medium text-xs font-semibold uppercase tracking-[0.18em] text-[#1F5E4B]">
                Hiring &amp; Collaborations
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl sm:text-4xl font-extrabold tracking-tight">
                Looking for an AI product leader who can write code and lead launches?
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#1F5E4B] text-white hover:bg-[#174839] h-11 px-6 py-2.5 font-semibold text-sm shadow-sm"
            >
              <span>Hiring? Let&apos;s Talk</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
