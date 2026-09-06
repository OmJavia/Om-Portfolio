import { motion } from "framer-motion";
import {
  FaSearch,
  FaLightbulb,
  FaCode,
  FaChartLine,
  FaServer,
  FaSyncAlt,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "UNDERSTAND THE PROBLEM",
    description:
      "Understand users, workflows, constraints, and the actual problem before choosing AI.",
    icon: FaSearch,
  },
  {
    number: "02",
    title: "VALIDATE FEASIBILITY",
    description:
      "Determine whether AI is actually useful and identify the simplest viable technical approach.",
    icon: FaLightbulb,
  },
  {
    number: "03",
    title: "PROTOTYPE",
    description:
      "Build a working prototype to validate assumptions quickly.",
    icon: FaCode,
  },
  {
    number: "04",
    title: "EVALUATE",
    description:
      "Measure accuracy, latency, reliability, cost, retrieval quality, and user usefulness.",
    icon: FaChartLine,
  },
  {
    number: "05",
    title: "PRODUCTIONIZE",
    description:
      "Build APIs, infrastructure, deployment workflows, observability, and robust systems.",
    icon: FaServer,
  },
  {
    number: "06",
    title: "ITERATE",
    description:
      "Use real-world feedback and usage to improve the product.",
    icon: FaSyncAlt,
  },
];

export default function HowIBuildSection() {
  return (
    <section id="how-i-build" className="py-12 sm:py-20 scroll-mt-24">
      <motion.div
        className="text-center mb-10 sm:mb-14"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="neural-label">Methodology</span>
        <h2
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-4"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          How I Build <span className="text-[#f97316]">AI Products</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          AI product development is a complete lifecycle — from initial feasibility to production infrastructure and user-driven iteration.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm hover:border-[#f97316]/40 transition-all duration-300 relative group flex flex-col justify-between"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-black text-[#f97316]">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#f97316]/10 text-[#f97316] flex items-center justify-center text-lg">
                  <step.icon aria-hidden />
                </div>
              </div>

              <h3
                className="text-base font-bold tracking-tight text-neutral-950 dark:text-white mb-2"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                {step.title}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-[#27272a]/60 font-mono text-[10px] uppercase font-bold text-neutral-400">
              STAGE 0{idx + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
