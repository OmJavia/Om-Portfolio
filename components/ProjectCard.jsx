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
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-sm transition-all duration-500 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/60 focus-within:border-neutral-300 dark:focus-within:border-neutral-700 focus-within:shadow-2xl">
      <div className="relative w-full aspect-video overflow-hidden bg-neutral-950">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[0.38] group-hover:saturate-[0.85] group-focus-within:scale-[1.03] group-focus-within:brightness-[0.38] group-focus-within:saturate-[0.85]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

        <div className="absolute left-4 right-4 top-4 z-10 flex translate-y-3 items-center justify-between gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-white/90 text-neutral-800 border border-white/50 shadow-sm backdrop-blur-md">
            {category}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors"
                aria-label={`View ${title} source code`}
              >
                <FaGithub className="text-xs" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors"
                aria-label={`Open ${title}`}
              >
                <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full p-5 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight drop-shadow-sm">
            {title}
          </h3>
          <div className="mt-4">
            <p className="text-sm leading-relaxed text-white/85">
              {description}
            </p>

            {bullets.length > 0 && (
              <ul className="mt-3 text-xs sm:text-sm text-white/80 space-y-1.5 list-disc pl-4">
                {bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-1.5 pt-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/15 text-white/85 font-medium backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
