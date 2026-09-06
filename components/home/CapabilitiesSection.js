import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard";
import {
  FaEye,
  FaCubes,
  FaServer,
  FaRocket,
  FaGamepad,
} from "react-icons/fa";

const capabilities = [
  {
    title: "COMPUTER VISION SYSTEMS",
    icon: FaEye,
    color: "#3b82f6",
    description:
      "Real-time perception, video intelligence, detection, classification, and visual analytics.",
    tags: ["OpenCV", "YOLO", "PyTorch", "Video Intelligence"],
  },
  {
    title: "LLM & RAG APPLICATIONS",
    icon: FaCubes,
    color: "#a855f7",
    description:
      "Systems that retrieve, reason, search, and generate useful outputs from complex information.",
    tags: ["LangChain", "RAG", "Vector DB", "Prompt Engineering"],
  },
  {
    title: "PRODUCTION AI SYSTEMS",
    icon: FaServer,
    color: "#10b981",
    description:
      "Inference APIs, backend services, scalable workflows, deployment, and system reliability.",
    tags: ["FastAPI", "Redis", "Docker", "CI/CD"],
  },
  {
    title: "AI PRODUCTS",
    icon: FaRocket,
    color: "#f97316",
    description:
      "Taking AI ideas from discovery and feasibility through prototype, evaluation, deployment, and iteration.",
    tags: ["PRDs", "Product Strategy", "User Feedback", "Iteration"],
  },
  {
    title: "INTELLIGENT INTERACTIVE PRODUCTS",
    icon: FaGamepad,
    color: "#ec4899",
    description:
      "Exploring products at the intersection of sensors, connected devices, software, gaming, and intelligent interaction.",
    tags: ["Sensors", "Motion Data", "Interactive Gaming", "Bluetooth"],
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 scroll-mt-24">
      {/* Section Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="neural-label">Core Capabilities</span>
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-4"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          What I <span className="text-[#f97316]">Build</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          I build at the intersection of AI engineering, software systems, product design, and intelligent connected devices.
        </p>
      </motion.div>

      {/* Grid of 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <SpotlightCard
            key={cap.title}
            className={`p-7 rounded-3xl bg-white/90 dark:bg-[#18181b]/80 border border-neutral-200 dark:border-[#27272a] flex flex-col justify-between transition-all duration-300 hover:border-[#f97316]/40 shadow-sm ${
              idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
            delay={idx * 0.08}
          >
            <div>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl"
                style={{
                  backgroundColor: `${cap.color}15`,
                  border: `1px solid ${cap.color}30`,
                  color: cap.color,
                }}
              >
                <cap.icon aria-hidden />
              </div>

              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-1">
                0{idx + 1} / CAPABILITY
              </span>

              <h3
                className="text-lg font-bold text-neutral-950 dark:text-white mb-2 leading-snug"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                {cap.title}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                {cap.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-[#27272a]/60">
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
