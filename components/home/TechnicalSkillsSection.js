import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
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
  SiFastapi,
} from "react-icons/si";
import {
  FaBrain,
  FaCubes,
  FaServer,
  FaRocket,
  FaGamepad,
  FaProjectDiagram,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

const skillGroups = [
  {
    category: "AI & MACHINE LEARNING",
    icon: FaBrain,
    color: "#EE4C2C",
    skills: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Computer Vision", icon: FaBrain, color: "#3b82f6" },
      { name: "YOLO (Object Detection)", icon: FaProjectDiagram, color: "#f97316" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Deep Learning", icon: FaBrain, color: "#ec4899" },
      { name: "NLP", icon: FaRobot, color: "#a855f7" },
      { name: "Hugging Face", icon: FaRobot, color: "#eab308" },
    ],
  },
  {
    category: "LLM SYSTEMS",
    icon: FaCubes,
    color: "#a855f7",
    skills: [
      { name: "RAG Pipelines", icon: FaCubes, color: "#6366f1" },
      { name: "LangChain", icon: FaCubes, color: "#a855f7" },
      { name: "Prompt Engineering", icon: FaRobot, color: "#38bdf8" },
      { name: "Vector Search", icon: FaDatabase, color: "#10b981" },
      { name: "ChromaDB", icon: FaDatabase, color: "#10b981" },
    ],
  },
  {
    category: "BACKEND & INFRASTRUCTURE",
    icon: FaServer,
    color: "#2496ED",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
  {
    category: "PRODUCT & SYSTEM DESIGN",
    icon: FaRocket,
    color: "#f97316",
    skills: [
      { name: "Product Strategy", icon: FaRocket, color: "#f97316" },
      { name: "PRDs & Roadmaps", icon: FaRocket, color: "#f97316" },
      { name: "System Design", icon: FaServer, color: "#3b82f6" },
      { name: "AI Product Dev", icon: FaRocket, color: "#f97316" },
      { name: "Technical Prototyping", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "CONNECTED & INTERACTIVE PRODUCTS",
    icon: FaGamepad,
    color: "#ec4899",
    skills: [
      { name: "Sensors & Hardware Scope", icon: FaGamepad, color: "#ec4899" },
      { name: "Motion Data Processing", icon: FaGamepad, color: "#ec4899" },
      { name: "Hardware-Software Integration", icon: FaServer, color: "#38bdf8" },
      { name: "Real-Time Interactivity", icon: FaGamepad, color: "#f97316" },
    ],
  },
];

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      {/* Section Header */}
      <motion.div
        className="text-center mb-14"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="neural-label">Technical Stack</span>
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          Grouped <span className="text-[#f97316]">Competencies</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Grounded technical capabilities organized across machine learning, language models, backend infrastructure, product design, and interactive hardware.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.category}
            className={`p-7 rounded-3xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm hover:border-[#f97316]/30 transition-all duration-300 ${
              idx === 4 ? "lg:col-span-2" : ""
            }`}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-neutral-100 dark:border-[#27272a]">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg"
                style={{
                  backgroundColor: `${group.color}15`,
                  color: group.color,
                  border: `1px solid ${group.color}30`,
                }}
              >
                <group.icon aria-hidden />
              </div>
              <h3 className="font-mono text-xs uppercase font-extrabold tracking-wider text-neutral-900 dark:text-white">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-sm hover:scale-105 transition-transform"
                >
                  <skill.icon style={{ color: skill.color }} className="text-base" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
