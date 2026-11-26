import { useMemo, useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { formatRoleDates, getSortedExperiences, profile } from "@/data";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./primitives";

function Role({ role }) {
  const isCurrent = Boolean(role.isCurrent || role.endDate === null);
  const points = [
    ...(role.responsibilities || []),
    ...(role.achievements || []),
    ...(role.quantifiableResults || []),
  ];

  return (
    <div className="rounded-2xl border border-line/80 bg-canvas/45 p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-semibold text-ink">{role.title}</h4>
          {role.employmentType && (
            <span className="font-mono text-[11px] text-muted">· {role.employmentType}</span>
          )}
          {isCurrent && (
            <span className="rounded-md bg-cobalt px-1.5 py-0.5 font-mono text-[10px] text-white">
              Present
            </span>
          )}
        </div>
        <span className="font-mono text-meta text-muted">
          {formatRoleDates(role.startDate, role.endDate, role.isCurrent)}
        </span>
      </div>

      {points.length > 0 && (
        <ul className="mt-3 space-y-2 text-[15px] text-muted">
          {points.map((pt) => (
            <li key={pt} className="flex gap-2.5">
              <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}

      {role.technologies?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {role.technologies.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Experience() {
  const sorted = useMemo(() => getSortedExperiences(), []);
  const [showEarlier, setShowEarlier] = useState(false);
  const main = sorted.slice(0, 3);
  const earlier = sorted.slice(3);

  return (
    <section id="experience" className="border-t border-line bg-surface py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Experience"
            title="Career across research, AI engineering, and product."
          />
          <a
            href={profile.resumeUrl}
            className="mt-8 inline-flex h-11 items-center rounded-xl border border-line px-5 text-sm font-medium hover:border-ink"
          >
            Download résumé (PDF)
          </a>
        </div>

        <ol className="space-y-10 lg:col-span-8">
          {main.map((job) => (
            <Reveal as="li" key={job.id} className="border-t border-line pt-8 first:border-0 first:pt-0">
              <div className="flex items-center gap-3">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-line bg-white">
                  <Image src={job.logo} alt="" fill sizes="40px" className="object-contain p-1" />
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
                    {job.companyUrl && (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${job.company} website`}
                        className="text-muted hover:text-cobalt"
                      >
                        <FiArrowUpRight className="text-sm" />
                      </a>
                    )}
                  </div>
                  <p className="font-mono text-meta text-muted">{job.location}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {job.roles.map((r) => (
                  <Role key={`${r.title}-${r.startDate}`} role={r} />
                ))}
              </div>
            </Reveal>
          ))}

          {earlier.length > 0 && (
            <li className="border-t border-line pt-6">
              <button
                type="button"
                aria-expanded={showEarlier}
                aria-controls="earlier-roles"
                onClick={() => setShowEarlier((v) => !v)}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink"
              >
                Earlier internships: {earlier.map((e) => e.company).join(", ")}
                <FiChevronDown aria-hidden className={cn("transition-transform", showEarlier && "rotate-180")} />
              </button>
              <div id="earlier-roles" hidden={!showEarlier} className="mt-4 grid gap-4 sm:grid-cols-2">
                {earlier.map((job) => (
                  <div key={job.id} className="rounded-2xl border border-line p-5">
                    <h3 className="font-semibold text-ink">{job.company}</h3>
                    <p className="font-mono text-meta text-muted">
                      {job.roles[0]?.title} ·{" "}
                      {job.roles[0] &&
                        formatRoleDates(job.roles[0].startDate, job.roles[0].endDate, job.roles[0].isCurrent)}
                    </p>
                    {job.roles[0]?.responsibilities?.[0] && (
                      <p className="mt-2 text-sm text-muted">{job.roles[0].responsibilities[0]}</p>
                    )}
                  </div>
                ))}
              </div>
            </li>
          )}
        </ol>
      </div>
    </section>
  );
}
