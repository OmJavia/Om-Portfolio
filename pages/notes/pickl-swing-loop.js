import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const TITLE = "How the Pickl+ swing-to-game loop was scoped";
const DESCRIPTION =
  "The smallest MegaShot Pickl+ loop that had to work: a physical swing, a stroke reading, and feedback the player can feel.";

export default function PicklSwingNote() {
  return (
    <Layout>
      <Head>
        <title>{TITLE} | Om Javia</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://omjavia.vercel.app/notes/pickl-swing-loop" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://omjavia.vercel.app/notes/pickl-swing-loop" />
        <meta property="og:image" content="https://omjavia.vercel.app/og-image.jpg" />
      </Head>

      <article className="max-w-3xl space-y-8">
        <Link href="/notes" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
          ← Notes
        </Link>
        <header className="space-y-3">
          <p className="font-medium text-xs text-neutral-500">2026-11-06 · MegaShot Pickl+</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">{TITLE}</h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">{DESCRIPTION}</p>
        </header>

        <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            Pickl+ is a motion-sensing pickleball paddle and a companion game. The product question was not “how much software can we add.” It was whether a swing in a living room could become a game event without a court, a headset, or a console.
          </p>
          <p>
            The loop I treated as the product was short. Sensors in the paddle read the swing. Bluetooth carries stroke type, swing velocity, and angle into the phone. The game uses that reading. The handle can answer with haptic feedback on a hit. If that loop feels late or wrong, extra modes do not matter.
          </p>
          <p>
            Scoping it this way kept hardware, firmware, and the mobile game on the same milestone: a player can swing, see the result, and feel it. Campaign creative, multiplayer, and other racket sports sat outside that loop. They are launch or later-expansion work, not the first proof.
          </p>
          <p>
            Companion-app screenshots are not on this site yet. The product site and the Kickstarter page are the public references for how the game looks. Player-count and iteration-count figures stay in the case study, and only with the wording already qualified there.
          </p>
        </div>

        <p>
          <Link href="/case-studies/megashot-pickl" className="text-sm font-medium text-[#1F5E4B] dark:text-[#1F5E4B] hover:underline">
            Full Pickl+ case study →
          </Link>
        </p>
      </article>
    </Layout>
  );
}
