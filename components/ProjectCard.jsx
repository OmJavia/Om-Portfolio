import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  category,
  description,
  bullets = [],
  image,
  tags = [],
  liveUrl,
  githubUrl,
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white/70 dark:bg-neutral-900/70 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/50">
      {/* Aspect Ratio Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800/50">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        <div className="absolute top-3 left-3 z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 shadow-sm backdrop-blur-md">
            {category}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-[#ff6b00] dark:group-hover:text-[#ff6b00] transition-colors">
              {title}
            </h3>
            
            <div className="flex items-center gap-2 shrink-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                  aria-label="View Source Code"
                >
                  <FaGithub className="text-xs" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 group-hover:bg-[#0a0a0a] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#0a0a0a] transition-all"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-4">
            {description}
          </p>

          {bullets.length > 0 && (
            <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1.5 list-disc pl-4 mb-4">
              {bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
