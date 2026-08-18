import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaLayerGroup, FaTools } from "react-icons/fa";

export default function ProjectCard({
  title,
  category,
  description,
  architecture,
  hurdles,
  bullets = [],
  image,
  tags = [],
  liveUrl,
  githubUrl,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group relative overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-sm transition-all duration-500 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/60 focus-within:border-neutral-300 dark:focus-within:border-neutral-700 focus-within:shadow-2xl cursor-pointer"
      >
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsModalOpen(false)} 
            aria-label="Close modal background"
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-950 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-neutral-900 dark:text-white transition-colors backdrop-blur-md"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            {/* Left side: Image & Links */}
            <div className="w-full md:w-2/5 relative bg-neutral-100 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex flex-col">
              <div className="relative w-full aspect-video md:aspect-auto md:flex-1 p-6 flex items-center justify-center">
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                )}
              </div>
              <div className="p-6 bg-white dark:bg-neutral-950 flex flex-wrap gap-3 border-t border-neutral-200 dark:border-neutral-800">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <FaExternalLinkAlt /> View Live
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    <FaGithub /> Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full md:w-3/5 p-6 sm:p-10 flex flex-col gap-8">
              <div>
                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 mb-4">
                  {category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white mb-4">
                  {title}
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="space-y-6">
                {architecture && (
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-neutral-900 dark:text-white mb-3">
                      <FaLayerGroup className="text-blue-500" /> Architecture
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800">
                      {architecture}
                    </p>
                  </div>
                )}

                {hurdles && (
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-neutral-900 dark:text-white mb-3">
                      <FaTools className="text-orange-500" /> Engineering Hurdles
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed p-4 rounded-2xl bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100/50 dark:border-orange-900/30">
                      {hurdles}
                    </p>
                  </div>
                )}
                
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-3 uppercase tracking-wider text-neutral-500">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs font-medium px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
