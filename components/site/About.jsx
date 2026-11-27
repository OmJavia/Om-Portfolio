import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { profile } from "@/data";
import { Reveal, SectionHeading } from "./primitives";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-surface py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Background"
            title="Engineering depth paired with commercial ownership."
          />
          <div className="mt-6 rounded-2xl border border-line bg-canvas p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
              Education
            </p>
            <p className="mt-2 font-semibold text-ink">Medi-Caps University</p>
            <p className="mt-1 text-sm text-muted">
              B.Tech in Computer Science &amp; Engineering (Cloud Technology &amp; Information Security)
            </p>
            <p className="mt-2 text-xs font-medium text-muted">2020 — 2024 · CGPA 9.0 / 10</p>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="flex flex-col justify-center lg:col-span-7">
          <div className="space-y-4 text-body-lg text-muted">
            {profile.extendedIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium">
            <Link href="/about" className="inline-flex items-center gap-1.5 text-ink hover:text-accent">
              Full background <FiArrowRight aria-hidden />
            </Link>
            <Link href="/notes" className="inline-flex items-center gap-1.5 text-muted hover:text-ink">
              Engineering decision notes <FiArrowRight aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
