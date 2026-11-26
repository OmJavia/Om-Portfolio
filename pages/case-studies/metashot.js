import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import MetashotImg from "../../public/Metashot.jpg";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const PIPELINE = `
flowchart LR
    CAM["Live camera stream"] --> CV["PyTorch / YOLO + OpenCV"]
    CV --> API["FastAPI"]
    API --> CACHE["Redis session cache"]
    API --> UNITY["Unity player feedback"]
`;

export default function MetashotCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>Metashot Sports AI Case Study | Om Javia</title>
        <meta
          name="description"
          content="How Om Javia worked on Metashot's real-time cricket shot detection: a PyTorch and YOLO pipeline, FastAPI, Redis, and Unity, with a published live-stream inference budget under 80ms."
        />
        <link rel="canonical" href="https://omjavia.vercel.app/case-studies/metashot" />
        <meta property="og:title" content="Metashot: sub-80ms sports AI perception" />
        <meta
          property="og:description"
          content="A case study of the Metashot cricket perception pipeline: role, architecture, latency budget, and claims that are not published."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://omjavia.vercel.app/case-studies/metashot" />
        <meta property="og:image" content="https://omjavia.vercel.app/og-image.jpg" />
      </Head>

      <article className="space-y-16 sm:space-y-20 py-4 max-w-4xl mx-auto">
        <Link
          href="/#featured-work"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <FaArrowLeft className="text-xs" /> Back to featured work
        </Link>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
              Case study · Production AI
            </span>
            <span className="font-mono text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
              AI Engineer · July–October 2025
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.02]">
            Metashot: sub-80ms sports perception
          </h1>
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            Real-time cricket shot detection for player feedback. The published technical budget is live-stream inference under 80ms.
          </p>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
            <Image
              src={MetashotImg}
              alt="Metashot real-time sports AI"
              className="w-full object-cover max-h-[480px]"
              priority
              quality={75}
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>

        <section className="space-y-4 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#f97316]">01 / Role</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white">What I owned</h2>
          <div className="space-y-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I was an AI Engineer at Metashot from July 2025 to October 2025, before the Founding Manager work on MegaShot Pickl+. This case study is the perception system, not the pickleball product.
            </p>
            <p>
              The work was to profile and tighten a PyTorch and OpenCV video pipeline for cricket shot detection, connect classification into Unity so a player could get feedback in the session, and serve session metrics through FastAPI with Redis as the cache.
            </p>
          </div>
        </section>

        <section className="space-y-4 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#f97316]">02 / Pipeline</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white">Camera to feedback</h2>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            A live camera stream feeds a YOLO and OpenCV inference path. Results land in a FastAPI service. Redis holds session metrics so the feedback loop does not recompute them on every read. Unity consumes the classification for in-session player feedback.
          </p>
          <MermaidDiagram chart={PIPELINE} />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Perception", "PyTorch, YOLO, and OpenCV on the live video path."],
              ["Service", "FastAPI endpoints for session metrics."],
              ["Cache", "Redis so repeated reads of a session do not rerun inference."],
              ["Feedback", "Unity workflows for the player-facing result."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
                <p className="font-semibold text-neutral-950 dark:text-white">{title}</p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#f97316]">03 / Latency budget</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white">The number that is published</h2>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            The site describes the optimized pipeline as processing live camera streams in under 80ms. That is the technical benchmark I am willing to state. A fuller note separates what that phrase covers from the setup details that are not on this site.
          </p>
          <Link href="/notes/sub-80ms" className="inline-flex text-sm font-medium text-[#ea580c] dark:text-[#f97316] hover:underline">
            Read the latency note →
          </Link>
        </section>

        <section className="space-y-4 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#f97316]">04 / What I will not claim</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white">Left out on purpose</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <li>No accuracy lift. A previous “+33% shot detection” figure is unpublished until the baseline model and test set are documented.</li>
            <li>No camera frame rate, quantization mode, or stage-by-stage trace. Those belong in a benchmark note once the setup is written down.</li>
            <li>No claim that this pipeline is the Pickl+ paddle. Pickl+ is a separate motion-sensor product with its own case study.</li>
          </ul>
          <a
            href="https://metashot.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white"
          >
            Metashot product site <FaExternalLinkAlt className="text-[10px]" />
          </a>
        </section>
      </article>
    </Layout>
  );
}
