export default function TechnicalSkillsSection() {
  const stack = [
    {
      group: "AI & Computer Vision",
      items: "PyTorch · YOLO (Object Detection) · OpenCV · Video Intelligence · Satellite Terrain Segmentation",
    },
    {
      group: "LLM & Retrieval",
      items: "LangChain · RAG Workflows · Vector Search · OpenAI API · ChromaDB · Prompt Architecture",
    },
    {
      group: "Backend & Systems",
      items: "Python · FastAPI · Redis Cache · Docker · REST APIs · MongoDB · MySQL",
    },
    {
      group: "Cloud & Delivery",
      items: "AWS · GitHub Actions · Vercel · CI/CD Pipelines · Linux",
    },
    {
      group: "Product Execution",
      items: "PRDs & Roadmaps · 9-Axis Motion Sensors · BLE Latency Scoping · User Testing Loops · System Design",
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 border-t border-neutral-200/90 dark:border-neutral-800/80">
      <div className="mb-10 sm:mb-14">
        <span className="font-mono text-xs uppercase tracking-widest text-[#ea580c] dark:text-[#f97316] font-medium block">
          Technical Toolkit
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2">
          Tools I Actually Use
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
          Technologies and operating competencies grounded in production deployments and active systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Grouped Scannable Typography List (7 cols) */}
        <div className="lg:col-span-8 divide-y divide-neutral-200/80 dark:divide-neutral-800/80 border-y border-neutral-200/80 dark:border-neutral-800/80">
          {stack.map((item) => (
            <div key={item.group} className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 font-mono text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-neutral-100">
                {item.group}
              </span>
              <p className="sm:col-span-8 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono">
                {item.items}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Personal Current Focus & Exploring (4 cols) */}
        <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-[#f7f5ef]/60 dark:bg-[#121215] space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ea580c] dark:text-[#f97316] font-medium block">
            Current Focus
          </span>

          <div className="space-y-3 text-xs leading-relaxed">
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">Currently Building:</p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">
                MegaShot Pickl+ — smart motion-sensing paddle hardware &amp; low-latency BLE game loop.
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <p className="font-semibold text-neutral-900 dark:text-white">Currently Exploring:</p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">
                Connected sports tech, real-time edge vision inference, and deterministic LLM evaluation pipelines.
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <p className="font-semibold text-neutral-900 dark:text-white">Base &amp; Timezone:</p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">
                Bangalore, India (IST / UTC+5:30) · Open to global distributed teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
