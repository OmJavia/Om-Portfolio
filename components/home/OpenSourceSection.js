import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";

const repos = [
  {
    name: "PDF_Searcher",
    description:
      "A document search utility that ingests multi-page PDFs and enables semantic query retrieval using LangChain and OpenAI embeddings.",
    tags: ["Python", "LangChain", "OpenAI", "RAG"],
    url: "https://github.com/OmJavia/PDF_Searcher",
    type: "GitHub Repository",
  },
  {
    name: "Generate_Blogs",
    description:
      "Automated prompt-driven writing project that uses structured templates with OpenAI models to produce formatted technical posts.",
    tags: ["Python", "OpenAI", "Generative AI", "Prompts"],
    url: "https://github.com/OmJavia/Generate_Blogs",
    type: "GitHub Repository",
  },
  {
    name: "Mars Rover Path Planning Colab",
    description:
      "Research notebook exploring terrain segmentation, satellite imagery preprocessing, and obstacle-aware pathfinding algorithms.",
    tags: ["PyTorch", "Pathfinding", "Satellite Imagery", "Colab"],
    url: "https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing",
    type: "Research Notebook",
  },
];

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="py-16 scroll-mt-24">
      <motion.div
        className="text-center mb-12"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="neural-label">Code Proof</span>
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          Open Source & <span className="text-[#f97316]">Experiments</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Public repositories, notebook research, and technical experiments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo, idx) => (
          <motion.div
            key={repo.name}
            className="p-7 rounded-3xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm hover:border-[#f97316]/40 transition-all duration-300 flex flex-col justify-between"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-[#09090b] text-[#f97316] border border-neutral-200 dark:border-[#27272a] flex items-center gap-1.5">
                  <FaCodeBranch className="text-[10px]" />
                  {repo.type}
                </span>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-neutral-500 hover:text-[#f97316] transition-colors"
                  aria-label={`View ${repo.name}`}
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>

              <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-2 font-mono">
                {repo.name}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                {repo.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {repo.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-[#09090b] text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-[#27272a]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:text-[#f97316] dark:hover:text-[#f97316] transition-colors"
              >
                <AiFillGithub className="text-base" />
                <span>View Code →</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
