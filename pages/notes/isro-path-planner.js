import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const TITLE = "What the ISRO path planner actually optimized";
const DESCRIPTION =
  "The rover work optimized a simulated route through terrain the model marked as traversable. The formal baseline behind the 87.4% score is not published.";

export default function IsroPlannerNote() {
  return (
    <Layout>
      <Head>
        <title>{TITLE} | Om Javia</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://omjavia.vercel.app/notes/isro-path-planner" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://omjavia.vercel.app/notes/isro-path-planner" />
        <meta property="og:image" content="https://omjavia.vercel.app/og-image.jpg" />
      </Head>

      <article className="max-w-3xl space-y-8">
        <Link href="/notes" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
          ← Notes
        </Link>
        <header className="space-y-3">
          <p className="font-medium text-xs text-neutral-500">2026-11-06 · ISRO Space Applications Centre</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">{TITLE}</h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">{DESCRIPTION}</p>
        </header>

        <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            The internship, February to May 2024, was simulated rover traversal from HiRISE satellite imagery. I annotated 800+ images across five terrain categories and trained PyTorch segmentation so the planner could tell traversable ground from obstacles such as craters and dune ridges.
          </p>
          <p>
            The planner’s job was the route, not the photograph. Segmentation became a cost grid. A* and Dijkstra searched that grid for a path that stays on ground the model treated as safe. The published result is an 87.4% navigation-efficiency score in simulated rover traversal.
          </p>
          <p>
            That sentence is a reported research score. It is not a claim that the route was 87.4% better than a named baseline. The definition of the score, the simulation parameters, and the comparison algorithm are not written up here yet. Until they are, I do not describe the number as an improvement.
          </p>
          <p>
            There was no physical rover in the loop. The score is from simulation on maps derived from the satellite masks. The Colab notebook linked from the case study is the working record of that research.
          </p>
        </div>

        <p>
          <Link href="/case-studies/mars-rover" className="text-sm font-medium text-[#1F5E4B] dark:text-[#1F5E4B] hover:underline">
            Mars rover case study →
          </Link>
        </p>
      </article>
    </Layout>
  );
}
