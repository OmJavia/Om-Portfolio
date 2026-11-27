import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import Layout from "../Layout";
import { buttonVariants, TagList } from "./primitives";
import type { ProjectEntry } from "@/data/types";

interface CaseStudySectionBlock {
  title: string;
  body?: string;
  bullets?: string[];
}

interface CaseStudyTemplateProps {
  project: ProjectEntry;
  sections?: CaseStudySectionBlock[];
  nextProject?: ProjectEntry;
}

export default function CaseStudyTemplate({ project, sections = [], nextProject }: CaseStudyTemplateProps) {
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
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
          >
            <FiArrowLeft aria-hidden /> Back to projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
            <span>{project.category}</span>
            {project.associatedCompany && (
              <>
                <span className="text-muted">·</span>
                <span className="text-muted">{project.associatedCompany}</span>
              </>
            )}
          </div>

          <h1 className="mt-3 text-display-lg font-semibold text-ink">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-body-lg text-muted">{project.fullDescription}</p>

          <TagList items={project.technologies} className="mt-5" />

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants.primary}
              >
                Visit live project <FiArrowUpRight aria-hidden />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants.secondary}
              >
                <FiGithub aria-hidden /> View source
              </a>
            )}
          </div>
        </div>

        {project.thumbnail && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface">
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
          {sections.map((section) => {
            if (!section.body && (!section.bullets || section.bullets.length === 0)) return null;
            return (
              <section key={section.title} className="space-y-3">
                <h2 className="text-h1 font-semibold text-ink">{section.title}</h2>
                {section.body && (
                  <p className="max-w-3xl text-base leading-relaxed text-muted">{section.body}</p>
                )}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="max-w-3xl space-y-2 text-base leading-relaxed text-ink">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>

        {nextProject?.caseStudyUrl && (
          <div className="border-t border-line pt-8">
            <Link
              href={nextProject.caseStudyUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent"
            >
              Next case study: {nextProject.name} <FiArrowRight aria-hidden />
            </Link>
          </div>
        )}
      </article>
    </Layout>
  );
}
