import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiCheck } from "react-icons/fi";
import { SiKickstarter } from "react-icons/si";
import PickleImg from "../../public/Pickle.jpeg";
import { Button } from "@/components/ui/button";
import posthog from "posthog-js";

export default function NowBuildingSection() {
  return (
    <section id="now-building" className="py-12 sm:py-20 border-t border-neutral-200/90 dark:border-neutral-800/80">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-[#ea580c] dark:text-[#f97316] font-medium block">
          Flagship Work · 2025 — Present
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2">
          MegaShot Pickl+
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
          Motion-sensing smart pickleball paddle and connected gaming system that brings real court swings into interactive gameplay at home.
        </p>
      </div>

      {/* Flagship Editorial Container */}
      <div className="space-y-10">
        {/* Large Product Visual */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 bg-neutral-900 shadow-md">
          <Image
            src={PickleImg}
            alt="MegaShot Pickl+ Smart Pickleball Device"
            fill
            className="object-cover object-center"
            priority
            quality={75}
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-sm text-[11px] font-mono text-neutral-200 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
            <span>pickleball.themegashot.com</span>
          </div>
        </div>

        {/* Asymmetric Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Context & Proof (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white tracking-tight">
                Physical Hardware Meets Digital Gaming
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mt-3">
                MegaShot Pickl+ bridges physical sports equipment with digital interaction. Players use an authentic-weight smart paddle equipped with motion sensors that track stroke type, swing velocity, and angle in real time, streaming via Bluetooth into a companion game loop with instant haptic feedback.
              </p>
            </div>

            {/* Proof Metric Callout */}
            <div className="p-5 rounded-xl border border-[#ea580c]/20 bg-[#f97316]/5 dark:bg-[#f97316]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#ea580c] dark:text-[#f97316] flex items-center gap-1.5">
                  <SiKickstarter className="text-sm" /> 500% Funded in 24 Hours
                </span>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                  Crowdfunding goal achieved within the first day of public launch (company-reported).
                </p>
              </div>
              <a
                href="https://www.kickstarter.com/projects/megashot/megashot-pickl-smart-pickleball-gaming-device"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-xs font-mono font-medium text-[#ea580c] dark:text-[#f97316] hover:underline flex items-center gap-1"
                onClick={() => posthog.capture("kickstarter_link_clicked", { source: "now_building" })}
              >
                <span>View Campaign</span>
                <FiExternalLink className="text-xs" />
              </a>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild className="bg-[#ea580c] hover:bg-[#c2410c] dark:bg-[#f97316] dark:hover:bg-[#ea580c] text-white rounded-xl">
                <Link
                  href="/case-studies/megashot-pickl"
                  onClick={() => posthog.capture("view_megashot_case_study", { source: "now_building" })}
                >
                  <span>Read case study</span>
                  <FiArrowRight className="ml-2 text-sm" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="rounded-xl border-neutral-300 dark:border-neutral-800">
                <a
                  href="https://pickleball.themegashot.com/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => posthog.capture("view_megashot_site", { source: "now_building" })}
                >
                  <span>Product site</span>
                  <FiExternalLink className="ml-2 text-xs" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: "What I Did" Breakdown (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/70 dark:bg-[#131316]/70 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-medium block">
              What I Did · Role &amp; Scope
            </span>

            <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-[#ea580c] dark:text-[#f97316] mt-0.5 shrink-0 text-sm" />
                <div>
                  <strong className="text-neutral-900 dark:text-white font-semibold">Product Definition:</strong>{" "}
                  Authored PRDs, feature milestones, and sensor capability roadmaps across hardware and software teams.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-[#ea580c] dark:text-[#f97316] mt-0.5 shrink-0 text-sm" />
                <div>
                  <strong className="text-neutral-900 dark:text-white font-semibold">Engineering Architecture:</strong>{" "}
                  Coordinated 9-axis motion sensor readings, BLE packet budgets, and low-latency stroke interpretations.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-[#ea580c] dark:text-[#f97316] mt-0.5 shrink-0 text-sm" />
                <div>
                  <strong className="text-neutral-900 dark:text-white font-semibold">UX &amp; Gameplay:</strong>{" "}
                  Refined pairing loops, calibration flows, and synchronous haptic response on ball contact.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-[#ea580c] dark:text-[#f97316] mt-0.5 shrink-0 text-sm" />
                <div>
                  <strong className="text-neutral-900 dark:text-white font-semibold">Go-to-Market &amp; Launch:</strong>{" "}
                  Formulated technical positioning, backer communications, and campaign narrative for public release.
                </div>
              </li>
            </ul>

            <div className="pt-3 border-t border-neutral-200/80 dark:border-neutral-800/80 text-[11px] font-mono text-neutral-500">
              Tags: Hardware × Software · BLE Sensors · Interactive Gaming · Product Management
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
