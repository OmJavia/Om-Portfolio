import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import Mars from "../../public/Mars.png";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const ARCHITECTURE_DIAGRAM = `
flowchart LR
    A["🛰️ Satellite Imagery\n(Input Data)"] --> B["Pre-processing\n(Normalization, Resize)"]
    B --> C["Terrain Segmentation\n(PyTorch CNN)"]
    C --> D{"Obstacle\nDetection?"}
    D -->|"Yes"| E["Obstacle Masking\n(OpenCV)"]
    D -->|"No"| F["Traversable Zone\nMapping"]
    E --> F
    F --> G["Path Planner\n(A* / Dijkstra)"]
    G --> H["Optimal Route\n(87.4% efficiency)"]
    H --> I["🤖 Rover Navigation\nOutput"]
`;

const CHALLENGES = [
  {
    challenge: "Sparse, unlabeled satellite imagery training data",
    solution:
      "Applied data augmentation techniques (rotations, random cropping, synthetic noise) to expand the effective dataset size by 5×. Used transfer learning from pretrained torchvision models to compensate for limited labeled samples.",
    tag: "ML Engineering",
    color: "blue",
  },
  {
    challenge: "Real-time inference speed for path recalculation",
    solution:
      "Optimized the PyTorch model with TorchScript and half-precision (FP16) inference. Reduced single-frame inference time from ~420ms to ~95ms, enabling near-real-time path updates during simulated rover traversal.",
    tag: "Performance",
    color: "green",
  },
  {
    challenge: "Integrating segmentation output with path planning algorithms",
    solution:
      "Built a custom bridge layer that converts the segmentation probability map into a traversability cost grid, which is then consumed by the A* pathfinding algorithm. This decoupled the CV and planning components for independent optimization.",
    tag: "System Design",
    color: "orange",
  },
  {
    challenge: "Evaluating navigation efficiency without a real rover",
    solution:
      "Designed a simulation environment using OpenCV overlays on top of satellite imagery, comparing the AI-planned path against a naive straight-line baseline. This produced the 87.4% efficiency improvement metric.",
    tag: "Research Methodology",
    color: "purple",
  },
];

const METRICS = [
  { value: "87.4%", label: "Navigation efficiency improvement" },
  { value: "~95ms", label: "Optimized inference time" },
  { value: "5×", label: "Effective dataset expansion" },
  { value: "ISRO", label: "Research partnership" },
];

export default function MarsRoverCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>Mars Rover Path Planning Case Study | Om Javia</title>
        <meta
          name="description"
          content="Deep-dive into Om Javia's ISRO R&D project: Mars Rover terrain understanding and obstacle-aware path planning using PyTorch computer vision."
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
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-900/40">
                AI Research
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                ISRO R&D Internship · 2024
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95]">
              Mars Rover Path Planning
            </h1>
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Computer vision and AI-driven path planning for obstacle-aware rover navigation using satellite terrain imagery — built during my R&D internship at ISRO.
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

          <div className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/10 bg-neutral-950">
            <Image
              src={Mars}
              alt="Mars terrain satellite imagery used in the project"
              className="w-full object-cover opacity-90"
              priority
            />
          </div>

          <a
            href="https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950 shadow-sm"
          >
            <FaExternalLinkAlt className="text-xs" /> Open in Colab
          </a>
        </div>

        {/* Problem Statement */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              Problem Statement
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Autonomous navigation on unknown terrain.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              Rovers operating on planetary surfaces must navigate environments where traditional GPS and pre-mapped routes are unavailable. Every path decision must be made from satellite imagery alone, in real time.
            </p>
            <p>
              The core challenge: given a satellite image of terrain, can a computer vision system classify traversable vs. obstructed zones accurately enough to enable a rover to find an efficient, safe route to its destination?
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
              CV inference pipeline to path planner.
            </h2>
          </div>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            The pipeline is a two-stage system: first, a PyTorch CNN performs semantic segmentation on the satellite image to produce a traversability map; second, A* or Dijkstra's algorithm finds the optimal path through the traversable zones.
          </p>
          <MermaidDiagram chart={ARCHITECTURE_DIAGRAM} className="max-w-4xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "PyTorch CNN", desc: "Semantic segmentation model trained to classify terrain types from satellite imagery." },
              { title: "OpenCV", desc: "Obstacle masking and traversability cost grid generation from model output." },
              { title: "A* Path Planner", desc: "Graph-based pathfinding that finds the minimum-cost route through the traversability grid." },
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
              Four hard problems solved.
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
            See the research
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Explore the notebook.
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400 leading-relaxed">
            The full implementation — including model training, inference, and path visualization — is available as a runnable Colab notebook.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              <FaExternalLinkAlt className="text-xs" /> Open Colab Notebook
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Discuss AI/CV projects
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
