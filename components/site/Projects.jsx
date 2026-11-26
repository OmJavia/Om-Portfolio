import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { getAvailableCategories, getSortedProjects } from "@/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./primitives";

const TYPE_LABELS = {
  company: "Product",
  research: "Research",
  "open-source": "Open Source",
  personal: "Personal",
  experiment: "Experiment",
  client: "Client",
};

function ProjectCard({ project }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-ink/25 hover:shadow-xl hover:shadow-ink/5"
    >
      {/* Fixed 16:10 media frame for uniform grid height */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-canvas">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border-b border-line bg-canvas p-6">
            <span className="font-display text-2xl text-ink/50">{project.name}</span>
          </div>
        )}
      </div>

      {/* Uniform card body with flex-col + mt-auto footer */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.12em]">
          <span className="text-cobalt">{project.category}</span>
          <span className="text-muted">
            {project.featured ? "Featured · " : ""}
            {TYPE_LABELS[project.type] || project.type}
          </span>
        </div>

        <h3 className="mt-3 line-clamp-1 font-display text-h2 text-ink">
          {project.name}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        {project.associatedCompany && (
          <p className="mt-3 font-mono text-[11px] text-muted">
            Built at {project.associatedCompany}
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-line/70 pt-4 mt-5 text-sm font-medium">
          {project.caseStudyUrl && (
            <Link
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 text-ink hover:text-cobalt"
            >
              Case study <FiArrowRight aria-hidden />
              <span className="sr-only">: {project.name}</span>
            </Link>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-ink"
            >
              Live <FiArrowUpRight aria-hidden />
              <span className="sr-only">: {project.name}</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-ink"
            >
              <FiGithub aria-hidden /> Source
              <span className="sr-only">: {project.name}</span>
            </a>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export default function Projects() {
  const allProjects = useMemo(() => getSortedProjects(), []);
  const categories = useMemo(() => getAvailableCategories(allProjects), [allProjects]);
  const [filter, setFilter] = useState("All");

  const shown = useMemo(
    () => (filter === "All" ? allProjects : allProjects.filter((p) => p.categories.includes(filter))),
    [allProjects, filter]
  );

  return (
    <section id="projects" className="border-t border-line bg-[#EFEFE8] py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built across AI, hardware, and product."
          intro="Every project carries the same weight — from applied research and open-source tools to connected hardware launches."
        />

        <div
          role="group"
          aria-label="Filter projects"
          className="-mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "h-10 shrink-0 rounded-full border px-4 text-sm transition-colors",
                filter === cat
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-surface text-muted hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          {shown.length} projects shown
        </p>

        <motion.ul layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
