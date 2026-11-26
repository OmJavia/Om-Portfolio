import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import Layout from "../Layout";
import type { ProjectEntry } from "@/data/types";

interface CaseStudyTemplateProps {
  project: ProjectEntry;
  nextProject?: ProjectEntry;
}

const SECTION_ORDER: Array<{ key: keyof NonNullable<ProjectEntry["caseStudySections"]>; title: string }> = [
  { key: "overview", title: "Project Overview" },
  { key: "problem", title: "Problem" },
  { key: "opportunity", title: "Opportunity" },
  { key: "research", title: "Research & Discovery" },
  { key: "solution", title: "Solution" },
  { key: "architecture", title: "Architecture" },
  { key: "implementation", title: "Implementation" },
  { key: "gtm", title: "Go-to-Market Strategy" },
];

export default function CaseStudyTemplate({ project, nextProject }: CaseStudyTemplateProps) {
  const sections = project.caseStudySections || {};
  const results = sections.results || project.results;
  const learnings = sections.learnings;

  return (
    <Layout>
      <Head>
        <title>{project.name} | Om Javia</title>
        <meta name="description" content={project.shortDescription} />
      </Head>

      <article className="space-y-12">
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink"
          >
            <FiArrowLeft aria-hidden /> Back to projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-cobalt">
            <span>{project.category}</span>
            {project.associatedCompany && (
              <>
                <span className="text-muted">·</span>
                <span className="text-muted">{project.associatedCompany}</span>
              </>
            )}
          </div>

          <h1 className="mt-3 font-display text-display-lg text-ink">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-body-lg text-muted">{project.fullDescription}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-medium text-white"
              >
                Visit live project <FiArrowUpRight aria-hidden />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-surface px-5 text-sm font-medium text-ink"
              >
                <FiGithub aria-hidden /> View source
              </a>
            )}
          </div>
        </div>

        {project.thumbnail && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-surface">
            <Image
              src={project.thumbnail}
              alt={`${project.name} visual`}
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="space-y-10 border-t border-line pt-10">
          {SECTION_ORDER.map(({ key, title }) => {
            const body = sections[key];
            if (!body) return null;
            return (
              <section key={key} className="space-y-2">
                <h2 className="font-display text-h1 text-ink">{title}</h2>
                <p className="max-w-3xl text-base leading-relaxed text-muted">{body}</p>
              </section>
            );
          })}

          {results && results.length > 0 && (
            <section className="space-y-3">
              <h2 className="font-display text-h1 text-ink">Results</h2>
              <ul className="space-y-2 text-base text-ink">
                {results.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {learnings && learnings.length > 0 && (
            <section className="space-y-3">
              <h2 className="font-display text-h1 text-ink">Learnings</h2>
              <ul className="space-y-2 text-base text-muted">
                {learnings.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {nextProject?.caseStudyUrl && (
          <div className="border-t border-line pt-8">
            <Link
              href={nextProject.caseStudyUrl}
              className="inline-flex items-center gap-2 font-medium text-ink hover:text-cobalt"
            >
              Next case study: {nextProject.name} <FiArrowRight aria-hidden />
            </Link>
          </div>
        )}
      </article>
    </Layout>
  );
}
