import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { NOTES } from "../../lib/notes";

export default function NotesIndex() {
  return (
    <Layout>
      <Head>
        <title>Notes | Om Javia</title>
        <meta
          name="description"
          content="Short decision notes from Om Javia on MegaShot Pickl+, the Metashot perception budget, and ISRO rover path planning."
        />
        <link rel="canonical" href="https://omjavia.vercel.app/notes" />
        <meta property="og:title" content="Notes | Om Javia" />
        <meta
          property="og:description"
          content="Decision notes on Pickl+, Metashot latency, and the ISRO path planner."
        />
        <meta property="og:url" content="https://omjavia.vercel.app/notes" />
        <meta property="og:image" content="https://omjavia.vercel.app/og-image.jpg" />
      </Head>

      <div className="max-w-3xl space-y-10">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-[#ea580c] dark:text-[#f97316]">Notes</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Decisions, written down
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Short notes tied to work already on this site. They explain a decision. They do not add metrics that the case studies have not already qualified.
          </p>
        </div>

        <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
          {NOTES.map((note) => (
            <li key={note.slug} className="py-6">
              <p className="font-mono text-[11px] text-neutral-500">{note.date}</p>
              <h2 className="mt-1 text-xl font-bold text-neutral-950 dark:text-white">
                <Link href={`/notes/${note.slug}`} className="hover:text-[#ea580c] dark:hover:text-[#f97316]">
                  {note.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{note.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
