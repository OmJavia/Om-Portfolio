import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const TITLE = "What “under 80ms” included and left out";
const DESCRIPTION =
  "The Metashot live-stream inference budget, and the benchmark details this site does not publish.";

export default function Sub80Note() {
  return (
    <Layout>
      <Head>
        <title>{TITLE} | Om Javia</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://omjavia.vercel.app/notes/sub-80ms" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://omjavia.vercel.app/notes/sub-80ms" />
        <meta property="og:image" content="https://omjavia.vercel.app/og-image.jpg" />
      </Head>

      <article className="max-w-3xl space-y-8">
        <Link href="/notes" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
          ← Notes
        </Link>
        <header className="space-y-3">
          <p className="font-medium text-xs text-neutral-500">2026-11-06 · Metashot</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">{TITLE}</h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">{DESCRIPTION}</p>
        </header>

        <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            During the AI Engineer stretch at Metashot, July to October 2025, I profiled a cricket shot-detection pipeline. The public benchmark is that the optimized PyTorch and OpenCV path processes a live camera stream in under 80ms.
          </p>
          <p>What that description includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Live video in, shot classification out, for player feedback.</li>
            <li>YOLO-style detection with PyTorch and OpenCV on that video path.</li>
            <li>A FastAPI service and a Redis cache for session metrics.</li>
            <li>Unity as the place the classification becomes in-session feedback.</li>
          </ul>
          <p>What this site does not publish, because the benchmark write-up is not finished:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Camera frame rate and the machine the number was measured on.</li>
            <li>Whether weights ran in FP16, INT8, or full precision.</li>
            <li>How the 80ms splits across capture, inference, post-processing, and the hop to the dashboard or game.</li>
            <li>Any accuracy percentage versus a named baseline model.</li>
          </ul>
          <p>
            Until those pieces exist, “under 80ms” means the live-stream inference budget stated above. It is not a full latency trace, and it is not an accuracy claim.
          </p>
        </div>

        <p>
          <Link href="/case-studies/metashot" className="text-sm font-medium text-[#1F5E4B] dark:text-[#1F5E4B] hover:underline">
            Metashot case study →
          </Link>
        </p>
      </article>
    </Layout>
  );
}
