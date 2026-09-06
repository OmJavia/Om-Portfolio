import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import PickleImg from "../../public/Pickle.jpeg";
import { FaArrowLeft, FaExternalLinkAlt, FaGamepad, FaWifi, FaMobileAlt, FaBolt } from "react-icons/fa";

const PICKLEBALL_ARCHITECTURE = `
flowchart TB
    subgraph Hardware["🏓 Smart Hardware"]
        SENSORS["Motion Sensors & Accelerometers\n(Smart Paddle)"]
        BT["Bluetooth Low Energy\n(BLE Data Sync)"]
    end

    subgraph Data["⚡ Motion Processing"]
        STREAM["Motion Data Stream\n(Raw Sensor Reading)"]
        INTERP["Swing Motion Interpreter\n(Stroke Analysis)"]
    end

    subgraph Software["📱 Connected App & Game Engine"]
        MOBILE["Connected Mobile Application\n(React Native / Mobile UI)"]
        GAME["Interactive Gaming Logic\n(Real-Time Gameplay)"]
        FEEDBACK["Haptic & RGB Feedback\n(Real-Time Response)"]
    end

    SENSORS --> BT
    BT --> STREAM
    STREAM --> INTERP
    INTERP --> MOBILE
    MOBILE --> GAME
    GAME --> FEEDBACK
`;

export default function MegaShotPicklCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>MegaShot Pickl+ | Current Work | Om Javia</title>
        <meta
          name="description"
          content="MegaShot Pickl+ case study — Smart motion-sensing pickleball gaming paddle and connected interactive experience."
        />
      </Head>

      <article className="space-y-16 py-4">
        {/* Back navigation */}
        <Link
          href="/#now-building"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <FaArrowLeft className="text-xs" /> Back to portfolio
        </Link>

        {/* Hero Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              CURRENT WORK
            </span>
            <span className="font-mono text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              ACTIVE PRODUCT
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.98]">
            MegaShot Pickl+
          </h1>

          <p className="max-w-3xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            Smart motion-sensing pickleball gaming for at-home play. Bringing physical swings into interactive digital gameplay through connected sensors and intelligent software.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Motion Sensing",
              "Real-Time Swing Tracking",
              "Connected Mobile Gameplay",
              "Bluetooth Connectivity",
              "Multiplayer Gaming",
              "Haptic & RGB Feedback",
            ].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs font-semibold px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Product Image Banner */}
          <div className="pt-4 overflow-hidden rounded-3xl border border-neutral-200 dark:border-[#27272a] shadow-2xl">
            <Image
              src={PickleImg}
              alt="MegaShot Pickl+ Smart Pickleball Gaming Experience"
              className="w-full object-cover max-h-[500px]"
              priority
            />
          </div>

          <div className="pt-4">
            <a
              href="https://pickleball.themegashot.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#f97316] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#ea6c0a] shadow-amber-sm"
            >
              <span>Explore MegaShot Pickl+ Website</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>

        {/* 1. THE PRODUCT */}
        <section className="space-y-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#f97316]">
            The Product
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
            Bringing real pickleball swings into interactive digital gameplay.
          </h2>
          <p className="max-w-3xl text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            MegaShot Pickl+ bridges physical sports hardware with connected digital gaming. Users play interactive pickleball matches at home using a motion-sensing smart paddle that tracks swings, stroke power, and velocity in real time.
          </p>
        </section>

        {/* 2. THE SYSTEM */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              The System Architecture
            </p>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              From paddle sensors to real-time interactive response.
            </h2>
          </div>

          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            The product architecture coordinates motion data acquisition, low-latency Bluetooth transmission, swing interpretation logic, and mobile gameplay UI.
          </p>

          <MermaidDiagram chart={PICKLEBALL_ARCHITECTURE} className="max-w-4xl" />
        </section>

        {/* 3. MY CONTRIBUTION */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              My Role & Contributions
            </p>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              AI Product Engineer — Product & System Architecture.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Product Execution & Feature Strategy",
                desc: "Defined product requirements (PRDs) and prioritized features connecting motion tracking with gaming user journeys.",
              },
              {
                title: "Motion Data Integration Workflows",
                desc: "Collaborated on translating raw sensor data into meaningful digital swing actions and interactive game mechanics.",
              },
              {
                title: "User Feedback & Testing Loops",
                desc: "Analyzed player usage and stroke feedback during early user testing iterations to refine game responsiveness.",
              },
              {
                title: "Connected App System Integration",
                desc: "Contributed to software workflows connecting mobile UI, session tracking, and real-time player statistics.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl border border-neutral-200 dark:border-[#27272a] bg-white/80 dark:bg-[#18181b]/80 shadow-sm space-y-2"
              >
                <h3 className="font-bold text-neutral-950 dark:text-white text-base">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CURRENT STATUS & LIVE LINK */}
        <section className="rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-neutral-950 p-8 sm:p-10 text-white shadow-2xl space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#f97316]">
              Current Status
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Actively building and iterating on MegaShot Pickl+.
          </h2>

          <p className="max-w-xl text-neutral-400 leading-relaxed">
            The product is actively progressing through product development, user feedback loops, and gaming feature expansion.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="https://pickleball.themegashot.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              <span>Explore MegaShot Pickl+ Website</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <span>Discuss Intelligent Hardware & Product Work</span>
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
