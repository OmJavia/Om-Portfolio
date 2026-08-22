import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiOpencv,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiGithubactions,
  SiVercel,
  SiGit,
  SiPostman,
} from "react-icons/si";
import {
  FaBrain,
  FaEye,
  FaLanguage,
  FaDatabase,
  FaKeyboard,
  FaLink,
  FaRobot,
  FaSearchLocation,
  FaCubes,
  FaExternalLinkSquareAlt,
  FaProjectDiagram,
  FaCloudUploadAlt,
} from "react-icons/fa";
import SpotlightCard from "../SpotlightCard";

const skillsData = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Computer Vision", icon: FaEye, color: "#3b82f6" },
  { name: "Natural Language Processing", icon: FaLanguage, color: "#a855f7" },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    icon: FaCubes,
    color: "#6366f1",
  },
  { name: "Prompt Engineering", icon: FaKeyboard, color: "#64748b" },
  { name: "LangChain", icon: FaLink, color: "#475569" },
  { name: "Hugging Face", icon: FaRobot, color: "#eab308" },
  { name: "Deep Learning", icon: FaBrain, color: "#ec4899" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
  { name: "Detectron2", icon: FaExternalLinkSquareAlt, color: "#14b8a6" },
  { name: "YOLO (Object Detection)", icon: FaSearchLocation, color: "#f97316" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "ChromaDB", icon: FaDatabase, color: "#10b981" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonaws, color: "#232F3E" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

export default function AboutSkills() {
  return (
    <>
      <section id="stack" className="py-20 scroll-mt-24">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="neural-label">Capabilities</span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-4"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            <span className="text-neutral-900 dark:text-white font-serif italic font-medium pr-2">
              The Full
            </span>
            <span className="font-serif italic font-normal text-[#f97316]">
              AI Stack
            </span>
            .
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From architecting neural networks to deploying scalable production
            environments. I provide end-to-end AI design and engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Computer Vision */}
          <SpotlightCard
            className="p-7 rounded-3xl bg-white/90 dark:bg-[#18181b]/80 border border-neutral-200 dark:border-[#27272a] ai-glow-card flex flex-col items-center text-center transition-colors duration-300 hover:border-[#f97316]/30 dark:hover:border-[#27272a]/80 shadow-sm"
            delay={0}
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 text-2xl">
              <FaBrain aria-hidden />
            </div>
            <h3
              className="text-lg font-bold text-neutral-950 dark:text-white mb-2"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Computer Vision
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
              Real-time vision systems that track, segment, and understand the
              physical world with precision.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">
                OpenCV
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">
                YOLO
              </span>
            </div>
          </SpotlightCard>

          {/* NLP & LLMs */}
          <SpotlightCard
            className="p-7 rounded-3xl bg-white/90 dark:bg-[#18181b]/80 border border-neutral-200 dark:border-[#27272a] ai-glow-card flex flex-col items-center text-center transition-colors duration-300 hover:border-[#f97316]/30 dark:hover:border-[#27272a]/80 shadow-sm"
            delay={0.08}
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5 text-2xl">
              <FaProjectDiagram aria-hidden />
            </div>
            <h3
              className="text-lg font-bold text-neutral-950 dark:text-white mb-2"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              NLP & LLMs
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
              RAG pipelines, autonomous agents, and fine-tuned language models
              optimized for complex reasoning.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">
                LangChain
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">
                RAG
              </span>
            </div>
          </SpotlightCard>

          {/* Data Science */}
          <SpotlightCard
            className="p-7 rounded-3xl bg-white/90 dark:bg-[#18181b]/80 border border-neutral-200 dark:border-[#27272a] ai-glow-card flex flex-col items-center text-center transition-colors duration-300 hover:border-[#f97316]/30 dark:hover:border-[#27272a]/80 shadow-sm"
            delay={0.16}
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5 text-2xl">
              <FaDatabase aria-hidden />
            </div>
            <h3
              className="text-lg font-bold text-neutral-950 dark:text-white mb-2"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Data Science
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
              Extracting actionable intelligence and predictive patterns from
              complex data streams.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">
                Pandas
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">
                Scikit
              </span>
            </div>
          </SpotlightCard>

          {/* AI Deployment */}
          <SpotlightCard
            className="p-7 rounded-3xl bg-white/90 dark:bg-[#18181b]/80 border border-neutral-200 dark:border-[#27272a] ai-glow-card flex flex-col items-center text-center transition-colors duration-300 hover:border-[#f97316]/30 dark:hover:border-[#27272a]/80 shadow-sm"
            delay={0.24}
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#f97316] flex items-center justify-center mb-5 text-2xl">
              <FaCloudUploadAlt aria-hidden />
            </div>
            <h3
              className="text-lg font-bold text-neutral-950 dark:text-white mb-2"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              AI Deployment
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
              Production-ready cloud microservices engineered for low latency
              and high availability.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">
                AWS
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">
                Docker
              </span>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
            TECHNICAL SKILLS SECTION
        ══════════════════════════════════════════════════════ */}

      <section id="skills" className="py-20 scroll-mt-32">
        <motion.div
          className="text-center mb-12"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="neural-label">Toolkit</span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Technical <span className="text-[#f97316]">Skills</span>{" "}
            <span className="text-3xl">👨‍💻</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
            The tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center flex-wrap px-4"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="bg-white dark:bg-[#18181b] shadow-sm dark:shadow-card rounded-3xl p-10 max-w-5xl w-full border border-neutral-200 dark:border-[#27272a]">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 items-center">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/30 hover:scale-110 shadow-sm hover:shadow-amber-sm transition-all duration-300 cursor-pointer overflow-hidden"
                  title={skill.name}
                >
                  <skill.icon
                    className="text-5xl sm:text-6xl text-neutral-900 dark:text-white drop-shadow-md transition-transform duration-300 group-hover:-translate-y-4"
                    aria-label={`${skill.name} technology icon`}
                    style={{
                      color:
                        skill.name === "Vercel"
                          ? "currentColor"
                          : skill.name === "AWS"
                            ? "#ff9900"
                            : skill.color,
                    }}
                  />
                  <div className="absolute bottom-1 sm:bottom-2 w-full px-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="font-mono text-[8px] sm:text-[9px] font-bold leading-none text-neutral-900 dark:text-white"
                      style={{
                        color:
                          skill.name === "Vercel"
                            ? "currentColor"
                            : skill.name === "AWS"
                              ? "#ff9900"
                              : skill.color,
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
            EXPERIENCE SECTION
        ══════════════════════════════════════════════════════ */}
    </>
  );
}
