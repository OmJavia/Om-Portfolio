import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import PickleImg from "../../public/Pickle.jpeg";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGamepad,
  FaWifi,
  FaMobileAlt,
  FaBolt,
  FaCheckCircle,
  FaUsers,
  FaSync,
  FaLightbulb,
  FaExclamationTriangle,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiKickstarter } from "react-icons/si";

// Architecture diagram distinguishing implemented data flow from conceptual expansions
const PICKLEBALL_ARCHITECTURE = `
flowchart TB
    subgraph Implemented_Hardware["🏓 Smart Hardware (Implemented)"]
        SENSORS["9-Axis Motion Sensors & Accelerometer\n(Embedded in Smart Paddle)"]
        BT["Bluetooth Low Energy Module\n(Low-Latency BLE Stream)"]
        HAPTIC["Handle Haptic Motor\n(Real-Time Hit Vibration)"]
    end

    subgraph Implemented_Software["📱 Connected App & Game Loop (Implemented)"]
        STREAM["BLE Ingestion & Packet Parsing\n(Mobile Runtime)"]
        INTERP["Kinematic Stroke Interpreter\n(Swing Velocity & Arc Detection)"]
        GAME["Interactive Gaming Engine\n(Solo, Practice & Match Modes)"]
        UI["Display Output\n(Device Screen / TV Mirroring)"]
    end

    subgraph Conceptual_Expansion["🌐 Conceptual Expansion (Planned / Future)"]
        CLOUD["Online Multiplayer & Leaderboards\n(Cloud Backend)"]
        MULTI_SPORT["Multi-Racket Expansion\n(Tennis, Squash, Table Tennis)"]
    end

    SENSORS --> BT
    BT --> STREAM
    STREAM --> INTERP
    INTERP --> GAME
    GAME --> UI
    GAME -.->|Hit Trigger| HAPTIC
    GAME -.->|Planned Sync| CLOUD
    INTERP -.->|Planned Models| MULTI_SPORT
`;

export default function MegaShotPicklCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>MegaShot Pickl+ Case Study | Founding Manager &amp; AI Product</title>
        <meta
          name="description"
          content="In-depth case study on MegaShot Pickl+: smart motion-sensing pickleball paddle, product decisions, launch execution, and user feedback loops by Om Javia."
        />
        <link rel="canonical" href="https://omjavia.vercel.app/case-studies/megashot-pickl" />
      </Head>

      <article className="space-y-16 sm:space-y-20 py-4 max-w-4xl mx-auto">
        {/* Navigation */}
        <Link
          href="/#featured-work"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <FaArrowLeft className="text-xs" /> Back to featured work
        </Link>

        {/* Hero Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-medium text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] border border-[#1F5E4B]/20 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1F5E4B] animate-pulse" />
              CASE STUDY · CURRENT WORK
            </span>
            <span className="font-medium text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              ACTIVE PRODUCT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.02]" >
            MegaShot Pickl+
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed">
            Taking an interactive connected sports product from hardware prototyping to global launch.
          </p>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A motion-sensing smart pickleball paddle with connected software for interactive at-home gaming. Combining physical sensor data, low-latency mobile software, and go-to-market execution.
          </p>

          {/* Product Image */}
          <div className="pt-2 overflow-hidden rounded-3xl border border-neutral-200 dark:border-[#27272a] shadow-xl bg-neutral-900">
            <Image
              src={PickleImg}
              alt="MegaShot Pickl+ smart pickleball paddle hardware prototype"
              className="w-full object-cover max-h-[480px]"
              priority
              placeholder="blur"
            />
            <div className="p-3 bg-neutral-950 text-center font-medium text-[11px] text-neutral-400 border-t border-neutral-800">
              MegaShot Pickl+ physical smart paddle hardware · Active production initiative
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            1. OVERVIEW
        ══════════════════════════════════════════════════════ */}
        <section className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-[#27272a]">
          <div className="space-y-1">
            <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
              01 / OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white" >
              The Product &amp; Target User
            </h2>
          </div>

          <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
            <p>
              <strong>MegaShot Pickl+</strong> is a motion-sensing smart pickleball paddle with connected software designed for interactive at-home gaming. It bridges physical sports hardware with digital gameplay, allowing players of all skill levels to play real pickleball swings in their living room without requiring VR headsets, dedicated gaming consoles, or specialized court access.
            </p>
            <p>
              <strong>The Target User:</strong> Recreational pickleball enthusiasts, families, and gamers seeking active at-home play, as well as players who want to practice stroke mechanics, swing velocity, and shot timing when outdoor courts are inaccessible due to weather, distance, or court congestion.
            </p>
            <p>
              <strong>The Value Proposition:</strong> Bringing real physical racket sports into the living room at a fraction of the cost and setup friction of traditional console setups. A player picks up a lightweight, authentic paddle, pairs it via Bluetooth to a smartphone, tablet, or TV, and immediately steps into interactive drills, target games, or head-to-head matches.
            </p>
            <p>
              <strong>Why Cross-Functional Coordination Is Critical:</strong> Building Pickl+ required tight synchronization across four distinct disciplines:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-medium text-xs">
              <li className="p-3 rounded-xl bg-neutral-100 dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a]">
                <strong className="text-[#1F5E4B] block mb-1">Physical Hardware</strong>
                Sensor placement, 300g weight balance, battery layout, and handle haptic vibration mechanics.
              </li>
              <li className="p-3 rounded-xl bg-neutral-100 dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a]">
                <strong className="text-[#1F5E4B] block mb-1">Connected Software</strong>
                Low-latency BLE streaming, packet buffering, and stroke classification algorithms.
              </li>
              <li className="p-3 rounded-xl bg-neutral-100 dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a]">
                <strong className="text-[#1F5E4B] block mb-1">Gameplay Experience</strong>
                Hit detection windows, game modes (practice, streak, career), and tactile visual feedback.
              </li>
              <li className="p-3 rounded-xl bg-neutral-100 dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a]">
                <strong className="text-[#1F5E4B] block mb-1">Launch &amp; GTM</strong>
                Crowdfunding campaign structure, product positioning, media coverage, and early backer engagement.
              </li>
            </ul>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. PROBLEM AND USERS
        ══════════════════════════════════════════════════════ */}
        <section className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-[#27272a]">
          <div className="space-y-1">
            <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
              02 / PROBLEM AND USERS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white" >
              The Problem Space &amp; Experience Constraints
            </h2>
          </div>

          <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
            <p>
              Pickleball is among the fastest-growing sports globally, yet players face real access constraints: overcrowded public courts, weather dependencies, and a lack of engaging solo practice solutions. Traditional video games offer button-mashing or camera-based tracking that lacks tactile racket feel, while VR headsets cause disorientation, isolate the player from family members in the room, and carry high entry costs ($400+).
            </p>
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] space-y-3">
              <h3 className="font-bold text-neutral-950 dark:text-white text-sm sm:text-base">
                Critical Experience Constraints:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Latency Sensitivity:</strong> A physical swing takes under 300ms from backswing to follow-through. Any perceptual lag over ~80ms between the physical wrist snap and digital ball strike destroys the immersion.
                </li>
                <li>
                  <strong>Living Room Ergonomics:</strong> The device had to be safe for typical apartment ceilings and living rooms without requiring complex optical calibration cameras.
                </li>
                <li>
                  <strong>True-Feel Weight &amp; Balance:</strong> Unlike lightweight plastic game controllers, the paddle needed the genuine weight (~300 grams) and weight distribution of an actual USAP pickleball paddle.
                </li>
                <li>
                  <strong>Zero-Console Barrier:</strong> Users should not need an Xbox, PlayStation, or gaming PC; pairing directly with everyday smartphones, tablets, or laptops was essential for adoption.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. MY ROLE
        ══════════════════════════════════════════════════════ */}
        <section className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-[#27272a]">
          <div className="space-y-1">
            <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
              03 / MY ROLE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white" >
              Responsibilities Breakdown
            </h2>
            <p className="text-xs text-neutral-500 font-medium">
              Working across cross-functional streams does not mean individual sole authorship; contributions are strictly delineated below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Owned */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F5E4B]" />
                <h3 className="font-medium text-xs font-bold uppercase tracking-wider text-[#1F5E4B]">
                  Owned
                </h3>
              </div>
              <p className="text-xs text-neutral-500 mb-3 font-medium">
                Decisions &amp; deliverables with direct individual ownership:
              </p>
              <ul className="text-xs text-neutral-700 dark:text-neutral-300 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Authoring functional product requirement documents (PRDs) for swing classification and user feedback states.</li>
                <li>Designing user flow specifications connecting BLE pairing directly into gameplay rounds.</li>
                <li>Structuring user testing protocols and recording stroke response telemetry during test sessions.</li>
                <li>Formulating technical positioning and core capability claims across public communication materials.</li>
              </ul>
            </div>

            {/* Led */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="font-medium text-xs font-bold uppercase tracking-wider text-emerald-500">
                  Led
                </h3>
              </div>
              <p className="text-xs text-neutral-500 mb-3 font-medium">
                Workstreams led collaboratively across disciplines:
              </p>
              <ul className="text-xs text-neutral-700 dark:text-neutral-300 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Sprint prioritization aligning hardware sensor firmware milestones with mobile client releases.</li>
                <li>Evaluation of stroke classification thresholds between drives, volleys, and drop shots.</li>
                <li>Crowdfunding page content structure, feature storytelling, and backer FAQ architecture.</li>
                <li>Product review sessions translating user friction into concrete engineering backlog tickets.</li>
              </ul>
            </div>

            {/* Contributed to */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h3 className="font-medium text-xs font-bold uppercase tracking-wider text-blue-500">
                  Contributed to
                </h3>
              </div>
              <p className="text-xs text-neutral-500 mb-3 font-medium">
                Work performed collaboratively with wider team:
              </p>
              <ul className="text-xs text-neutral-700 dark:text-neutral-300 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Physical paddle balance testing, industrial grip ergonomics, and weight distribution reviews.</li>
                <li>Haptic vibration curve tuning to match virtual ball contact sensation.</li>
                <li>Creator outreach lists, community engagement, and launch day campaign monitoring.</li>
                <li>Hardware Bill of Materials (BOM) cost sensitivity analyses and packaging specifications.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            4. KEY PRODUCT DECISIONS
        ══════════════════════════════════════════════════════ */}
        <section className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-[#27272a]">
          <div className="space-y-1">
            <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
              04 / KEY PRODUCT DECISIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white" >
              Product Decision Stories
            </h2>
            <p className="text-xs text-neutral-500 font-medium">
              Real engineering and product trade-offs evaluated during prototype development.
            </p>
          </div>

          <div className="space-y-4">
            {/* Decision 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-neutral-950 dark:text-white text-base">
                  1. Direct-to-Device BLE Connection vs. Dedicated TV Console Hub
                </h3>
                <span className="font-medium text-[10px] uppercase font-bold text-[#1F5E4B] bg-[#1F5E4B]/10 px-2 py-0.5 rounded">
                  Architecture &amp; BOM
                </span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 space-y-2 leading-relaxed">
                <p>
                  <strong>The Problem:</strong> How to transmit motion sensor readings to the player&apos;s screen with low latency while avoiding high retail hardware costs.
                </p>
                <p>
                  <strong>Options Considered:</strong> (A) Building a dedicated HDMI receiver/console plug for the TV, or (B) Direct Bluetooth Low Energy (BLE) pairing to user phones/tablets/laptops with HDMI/AirPlay screen mirroring.
                </p>
                <p>
                  <strong>Constraints:</strong> Hardware BOM targets ($175–$249 retail ceiling), regulatory certifications for proprietary receivers, and cross-platform mobile compatibility.
                </p>
                <p>
                  <strong>Why Selected:</strong> Direct BLE pairing removed the cost and supply-chain risk of manufacturing custom TV dongles. Users could download the companion application onto their existing devices immediately.
                </p>
                <p>
                  <strong>Outcome &amp; Remaining Uncertainty:</strong> Successfully lowered barrier to entry; ongoing optimization is required for BLE packet consistency across varied Android hardware chipsets.
                </p>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-neutral-950 dark:text-white text-base">
                  2. Edge Microcontroller Feature Streaming vs. On-Paddle Model Inference
                </h3>
                <span className="font-medium text-[10px] uppercase font-bold text-[#1F5E4B] bg-[#1F5E4B]/10 px-2 py-0.5 rounded">
                  Embedded vs Runtime
                </span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 space-y-2 leading-relaxed">
                <p>
                  <strong>The Problem:</strong> Deciding where kinematic stroke interpretation should occur inside the paddle firmware or in the host mobile application.
                </p>
                <p>
                  <strong>Options Considered:</strong> (A) Running full classification models on an embedded MCU on the paddle, or (B) Streaming calibrated sensor streams to the connected smartphone runtime.
                </p>
                <p>
                  <strong>Constraints:</strong> Battery capacity (2000 mAh target for 4+ hours gameplay), paddle thermal limits, and firmware update complexity.
                </p>
                <p>
                  <strong>Why Selected:</strong> Streaming filtered sensor packages over BLE allowed the paddle firmware to remain lightweight, thermally cool, and power-efficient, while enabling rapid over-the-air updates to the swing classification algorithms in the mobile app.
                </p>
                <p>
                  <strong>Outcome &amp; Test:</strong> Preserved 4–5 hour continuous battery endurance while enabling rapid algorithm iteration without requiring risky hardware firmware re-flashes.
                </p>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-neutral-950 dark:text-white text-base">
                  3. Synchronized Handle Haptics for Tactile Hit Confirmation
                </h3>
                <span className="font-medium text-[10px] uppercase font-bold text-[#1F5E4B] bg-[#1F5E4B]/10 px-2 py-0.5 rounded">
                  User Experience
                </span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 space-y-2 leading-relaxed">
                <p>
                  <strong>The Problem:</strong> In initial digital swings, players felt a sensory disconnect without physical ball resistance, reducing immersion and timing accuracy.
                </p>
                <p>
                  <strong>Options Considered:</strong> (A) Audio and screen effects only, vs. (B) Integrating a dedicated vibration actuator in the paddle handle triggered upon stroke contact.
                </p>
                <p>
                  <strong>Constraints:</strong> Microcontroller actuation delay (&lt;40ms), motor power draw, and physical vibration dampening through the paddle handle wrap.
                </p>
                <p>
                  <strong>Why Selected:</strong> Immediate tactile handle feedback simulated the physical impact of a ball, significantly enhancing player immersion and swing rhythm.
                </p>
                <p>
                  <strong>Outcome:</strong> Marked improvement in perceived realism during testing; calibration of vibration amplitude between soft dinks and power smashes remains an active tuning area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            5. LAUNCH
        ══════════════════════════════════════════════════════ */}
        <section className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-[#27272a]">
          <div className="space-y-1">
            <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
              05 / LAUNCH
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white" >
              Launch Execution &amp; Timeline
            </h2>
          </div>

          <div className="space-y-4">
            <div className="relative pl-6 border-l-2 border-[#1F5E4B]/30 space-y-6">
              {/* Timeline item 1 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#1F5E4B] border-2 border-white dark:border-[#09090b]" />
                <span className="font-medium text-[10px] uppercase font-bold text-[#1F5E4B] tracking-wider">
                  Phase 1 · Beta Validation &amp; System Prototyping
                </span>
                <h3 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white mt-0.5">
                  Motion Sensor Integration &amp; Gameplay Feasibility
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                  Conducted early player feedback rounds, testing sensor latency, paddle grip ergonomics, and stroke interpreter accuracy across prototype revisions.
                </p>
              </div>

              {/* Timeline item 2 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#09090b]" />
                <span className="font-medium text-[10px] uppercase font-bold text-emerald-500 tracking-wider">
                  Phase 2 · Industry Preview
                </span>
                <h3 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white mt-0.5">
                  New York Toy Fair Showing
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                  Premiered MegaShot Pickl+ on the sidelines of the New York Toy Fair (Booth 6619, covered by People of Play), presenting live interactive paddle demos to industry reviewers and retail partners.
                </p>
                {/* TODO(Om): confirm exact Toy Fair month, dates, and supporting photo/press artifact */}
              </div>

              {/* Timeline item 3 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#1F5E4B] border-2 border-white dark:border-[#09090b]" />
                <span className="font-medium text-[10px] uppercase font-bold text-[#1F5E4B] tracking-wider">
                  Phase 3 · Crowdfunding Launch
                </span>
                <h3 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white mt-0.5">
                  Kickstarter Campaign Launch
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                  Launched the public Kickstarter campaign with tiered backer rewards, product explainer videos, and interactive gameplay breakdowns.
                </p>
              </div>

              {/* Timeline item 4 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-white dark:border-[#09090b]" />
                <span className="font-medium text-[10px] uppercase font-bold text-blue-500 tracking-wider">
                  Phase 4 · Official Media &amp; Industry Coverage
                </span>
                <h3 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white mt-0.5">
                  Featured on Pickleball.com
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                  Featured on Pickleball.com highlighting the world’s first smart pickleball game combining real-world gameplay mechanics with connected digital interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            6. OUTCOMES
        ══════════════════════════════════════════════════════ */}
        <section className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-[#27272a]">
          <div className="space-y-1">
            <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
              06 / OUTCOMES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white" >
              Attributable Launch Results
            </h2>
            <p className="text-xs text-neutral-500 font-medium">
              Results are reported based on verified company milestones and public documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-medium text-[10px] uppercase font-bold text-[#1F5E4B] tracking-wider block mb-2">
                  Crowdfunding Milestone
                </span>
                <p className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white leading-snug">
                  Campaign reached 500% of its goal within 24 hours (company-reported).
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-[#27272a]">
                <a
                  href="https://www.kickstarter.com/projects/megashot/megashot-pickl-smart-pickleball-gaming-device"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F5E4B] hover:underline"
                >
                  <SiKickstarter /> View Live Kickstarter Campaign →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-medium text-[10px] uppercase font-bold text-[#1F5E4B] tracking-wider block mb-2">
                  Official Industry Coverage
                </span>
                <p className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white leading-snug">
                  Featured on Pickleball.com: &quot;World’s first smart pickleball game launched by MetaShot&quot;.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-[#27272a]">
                <a
                  href="https://pickleball.com/news/worlds-first-smart-pickleball-game-launched-by-metashot"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F5E4B] hover:underline"
                >
                  <FaExternalLinkAlt className="text-[10px]" /> Read Pickleball.com Coverage →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            7. FEEDBACK LOOP (Single-use metrics section)
        ══════════════════════════════════════════════════════ */}
        <section className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-[#27272a]">
          <div className="space-y-1">
            <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
              07 / FEEDBACK LOOP
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white" >
              User Testing &amp; Iteration Cycle
            </h2>
            <p className="text-xs text-neutral-500 font-medium">
              {/* TODO(Om): confirm the player sample, product attribution, research location, date range and supporting feedback artifact */}
              {/* TODO(Om): confirm the 12+ iteration count and define what counted as an iteration */}
              Documenting concrete changes driven by early tester feedback.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-medium text-xs font-bold px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] border border-[#1F5E4B]/20">
                Validated demand and usability with 185+ players.
              </span>
              <span className="font-medium text-xs font-bold px-3 py-1 rounded-full bg-neutral-200/70 dark:bg-[#27272a] text-neutral-700 dark:text-neutral-300">
                12+ iterations across hardware balance &amp; stroke sensitivity.
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Early testing sessions revealed critical usability friction points that directly altered our product requirements and firmware logic:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] space-y-1.5">
                <span className="font-medium text-[10px] uppercase font-bold text-red-500 block">
                  Before: Soft Shot Dropouts
                </span>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Gentle drop shots and kitchen dinks were initially discarded by the stroke classifier as incomplete swings due to high velocity threshold cutoffs.
                </p>
                <span className="font-medium text-[10px] uppercase font-bold text-emerald-500 block pt-1">
                  After: Dynamic Velocity Floor
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Introduced an adaptive acceleration curve that recognizes low-amplitude wrist angles, reliably detecting delicate dinks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] space-y-1.5">
                <span className="font-medium text-[10px] uppercase font-bold text-red-500 block">
                  Before: Paddle Handle Weight Fatigue
                </span>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Testers reported forearm strain after 15 minutes of continuous play because early battery placement leaned heavily toward the handle base.
                </p>
                <span className="font-medium text-[10px] uppercase font-bold text-emerald-500 block pt-1">
                  After: Center-of-Mass Rebalancing
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Shifted the internal 2000 mAh battery pack closer to the paddle neck, establishing balance identical to regulation paddles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            8. WHAT I'D DO DIFFERENTLY
        ══════════════════════════════════════════════════════ */}
        <section className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-[#27272a]">
          <div className="space-y-1">
            <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
              08 / WHAT I&apos;D DO DIFFERENTLY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white" >
              Retrospective &amp; Engineering Lessons
            </h2>
            <p className="text-xs text-neutral-500 font-medium">
              Honest operational reflections from early-stage connected hardware development.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm space-y-1.5">
              <h3 className="font-bold text-neutral-950 dark:text-white text-sm sm:text-base">
                1. Earlier Cross-Manufacturer Android Bluetooth Benchmarking
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                While iOS BLE connections operated with uniform latency, varied Android chipsets and OEM battery optimization profiles introduced intermittent packet buffering. In future hardware projects, I would build an automated multi-device BLE test matrix earlier in the prototype phase.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm space-y-1.5">
              <h3 className="font-bold text-neutral-950 dark:text-white text-sm sm:text-base">
                2. Automated Robotic Swing Rig for Continuous Regression Testing
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Relying solely on manual human swings during early testing caused variability when comparing firmware revisions. Building a standardized mechanical pendulum or robotic test arm would have eliminated human swing inconsistency during calibration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm space-y-1.5">
              <h3 className="font-bold text-neutral-950 dark:text-white text-sm sm:text-base">
                3. Tighter Pre-Launch Telemetry Instrumentation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Instrumenting detailed anonymous swing error logging in early alpha builds would have accelerated identifying edge cases like left-handed topspin slices prior to broad beta playtesting.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            9. LINKS & ARCHITECTURE
        ══════════════════════════════════════════════════════ */}
        <section className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-[#27272a]">
          <div className="space-y-1">
            <span className="font-medium text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
              09 / LINKS &amp; ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white" >
              System Architecture &amp; Verified Resources
            </h2>
            <p className="text-xs text-neutral-500 font-medium">
              Implemented runtime architecture distinguished from planned multi-sport expansion.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="space-y-3">
            <MermaidDiagram
              chart={PICKLEBALL_ARCHITECTURE}
              accessibleDescription="System architecture showing smart paddle motion sensors transmitting via BLE to the mobile app swing interpreter and game engine, triggering handle haptic feedback, with conceptual cloud sync and multi-sport modules."
            />
          </div>

          {/* Verified External Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <a
              href="https://pickleball.themegashot.com/"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#1F5E4B]/50 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-medium text-[10px] uppercase font-bold text-[#1F5E4B] tracking-wider block mb-1">
                  Product Site
                </span>
                <p className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                  pickleball.themegashot.com
                </p>
              </div>
              <span className="text-xs text-[#1F5E4B] font-semibold mt-3 inline-flex items-center gap-1">
                Visit Website <FaExternalLinkAlt className="text-[10px]" />
              </span>
            </a>

            <a
              href="https://www.kickstarter.com/projects/megashot/megashot-pickl-smart-pickleball-gaming-device"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#1F5E4B]/50 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-medium text-[10px] uppercase font-bold text-[#1F5E4B] tracking-wider block mb-1">
                  Crowdfunding
                </span>
                <p className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                  Live Kickstarter Campaign
                </p>
              </div>
              <span className="text-xs text-[#1F5E4B] font-semibold mt-3 inline-flex items-center gap-1">
                View Campaign <FaExternalLinkAlt className="text-[10px]" />
              </span>
            </a>

            <a
              href="https://pickleball.com/news/worlds-first-smart-pickleball-game-launched-by-metashot"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-blue-500/50 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-medium text-[10px] uppercase font-bold text-blue-500 tracking-wider block mb-1">
                  Official Press Coverage
                </span>
                <p className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                  Pickleball.com Feature
                </p>
              </div>
              <span className="text-xs text-blue-500 font-semibold mt-3 inline-flex items-center gap-1">
                Read Article <FaExternalLinkAlt className="text-[10px]" />
              </span>
            </a>
          </div>

          {/* TODO(Om): add high-resolution UI screenshots of companion mobile game and Kickstarter campaign graphics once official design export assets are available */}
          <div className="p-5 rounded-2xl border border-neutral-200 dark:border-[#27272a] bg-neutral-50 dark:bg-[#18181b] space-y-3">
            <p className="font-medium text-xs uppercase tracking-widest font-bold text-[#1F5E4B]">
              Product interface
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Companion-app and campaign stills are not published on this site yet. The live product site and Kickstarter page are the current references for gameplay and campaign creative. The photo above is the paddle hardware.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a
                href="https://pickleball.themegashot.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#1F5E4B] inline-flex items-center gap-1"
              >
                Product site <FaExternalLinkAlt className="text-[10px]" />
              </a>
              <a
                href="https://www.kickstarter.com/projects/megashot/megashot-pickl-smart-pickleball-gaming-device"
                target="_blank"
                rel="noreferrer"
                className="text-[#1F5E4B] inline-flex items-center gap-1"
              >
                Kickstarter <FaExternalLinkAlt className="text-[10px]" />
              </a>
              <Link href="/notes/pickl-swing-loop" className="text-neutral-700 dark:text-neutral-200 underline-offset-4 hover:underline">
                Note: how the swing loop was scoped
              </Link>
            </div>
          </div>

          {/* Action banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-medium text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">
                Connect on AI &amp; Connected Hardware
              </p>
              <h3 className="text-xl font-bold mt-1">
                Interested in early-stage product development or AI execution?
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#1F5E4B] text-white hover:bg-[#174839] px-6 py-3 font-semibold text-sm transition-all shadow-sm"
            >
              <span>Hiring? Let&apos;s talk</span>
              <FaExternalLinkAlt className="text-xs" />
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
