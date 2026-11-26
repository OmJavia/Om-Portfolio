import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { profile } from "@/data";
import { Reveal, SectionHeading } from "./primitives";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-surface py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-3xl border border-line bg-canvas shadow-sm">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              sizes="(max-width: 1024px) 80vw, 320px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-8">
          <SectionHeading
            eyebrow="About"
            title="Engineering depth paired with commercial ownership."
          />
          <div className="mt-6 space-y-4 text-body-lg text-muted">
            {profile.extendedIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
            <Link href="/about" className="inline-flex items-center gap-1.5 text-ink hover:text-cobalt">
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
