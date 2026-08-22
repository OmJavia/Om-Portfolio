import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Car from "../../public/Car.png";
import Blog from "../../public/Blog.png";
import NirmanHome from "../../public/nirmanbook.png";
import Mars from "../../public/Mars.png";
import Metashot from "../../public/Metashot.png";
import CodingShark from "../../public/Coding-Shark.png";
import netflix from "../../public/netflix.png";
import aerpace from "../../public/aerpace.png";
import PDF_Seacrher from "../../public/PDF_Searcher.png";
import ProjectCard from "../ProjectCard";

const FILTER_TABS = ["All", "AI/ML", "Fullstack", "Research"];

const featuredProjects = [
  {
    title: "NirmanBook",
    category: "PropTech",
    filterCategory: ["All", "Fullstack"],
    description:
      "A construction and real-estate focused platform built to make project discovery and service workflows feel cleaner and more reliable.",
    bullets: [
      "Production website with polished customer-facing flows",
      "Clear service discovery path for construction users",
    ],
    architecture:
      "Next.js frontend communicating with a scalable Node.js backend. State management via Redux, and optimized image delivery through Vercel's edge network.",
    hurdles:
      "Handling complex, multi-step service booking workflows while maintaining a highly responsive and polished UI on mobile devices.",
    image: NirmanHome,
    tags: ["Next.js", "Product", "UX"],
    liveUrl: "https://www.nirmanbook.com/",
    caseStudyUrl: "/case-studies/nirmanbook",
  },
  {
    title: "Mars Rover Path Planning",
    category: "AI Research",
    filterCategory: ["All", "AI/ML", "Research"],
    description:
      "Computer vision and path-planning research for terrain understanding using satellite imagery and neural network workflows.",
    bullets: [
      "Obstacle-aware rover navigation experiments",
      "Terrain labeling and model evaluation workflow",
    ],
    architecture:
      "PyTorch-based computer vision models for terrain segmentation, integrated with classic pathfinding algorithms (A*, Dijkstra) for optimal route calculation.",
    hurdles:
      "Training models on sparse satellite imagery datasets and optimizing inference times to simulate real-time rover decision making.",
    image: Mars,
    tags: ["PyTorch", "CV", "Research"],
    liveUrl:
      "https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing",
    caseStudyUrl: "/case-studies/mars-rover",
  },
  {
    title: "Aerpace",
    category: "Mobility",
    filterCategory: ["All", "Fullstack"],
    description:
      "A future-mobility product website with a clean, performance-conscious presentation for a high-consideration category.",
    bullets: [
      "Responsive public website",
      "Brand-forward product storytelling",
    ],
    architecture:
      "React-based architecture with highly optimized asset loading and custom CSS transitions to create a fluid, cinematic browsing experience.",
    hurdles:
      "Balancing high-resolution media and smooth micro-animations with strict performance budgets for Core Web Vitals.",
    image: aerpace,
    tags: ["Frontend", "Product", "Web"],
    liveUrl: "https://www.aerpace.com/",
  },
  {
    title: "PDF Searcher",
    category: "AI Utility",
    filterCategory: ["All", "AI/ML"],
    description:
      "A document search utility focused on helping users find answers inside PDFs faster through a practical retrieval workflow.",
    bullets: [
      "PDF ingestion and search experience",
      "Useful foundation for RAG-style document tools",
    ],
    architecture:
      "Python backend utilizing LangChain for document chunking, OpenAI embeddings for semantic search, and a lightweight vector store for fast retrieval.",
    hurdles:
      "Extracting clean text from highly formatted, multi-column PDFs and tuning chunk sizes to preserve semantic context for accurate answers.",
    image: PDF_Seacrher,
    tags: ["Python", "RAG", "PDF"],
    githubUrl: "https://github.com/OmJavia/PDF_Searcher",
  },
  {
    title: "Movieflix",
    category: "Frontend",
    filterCategory: ["All", "Fullstack"],
    description:
      "A streaming-inspired web interface that demonstrates API-driven UI patterns, browsing flows, and responsive layout work.",
    bullets: [
      "Movie discovery interface",
      "Responsive cards and media-first browsing",
    ],
    architecture:
      "React single-page application integrated with TMDB API. Uses custom hooks for data fetching and caching, styled with Tailwind CSS.",
    hurdles:
      "Managing complex asynchronous state across multiple carousels and handling infinite scroll pagination without degrading performance.",
    image: netflix,
    tags: ["React", "API", "UI"],
    liveUrl: "https://movieflix-om.vercel.app/",
  },
  {
    title: "Coding Sharks",
    category: "Community",
    filterCategory: ["All", "Fullstack"],
    description:
      "A public web experience for a coding education/community brand with a direct, approachable visual system.",
    bullets: [
      "Public website implementation",
      "Clear navigation for learners and visitors",
    ],
    architecture:
      "Static site generation (SSG) for high performance and SEO, using standard web technologies with a focus on accessibility.",
    hurdles:
      "Designing an intuitive content architecture that caters to both absolute beginners and advanced developers seeking community resources.",
    image: CodingShark,
    tags: ["Frontend", "Community", "Web"],
    liveUrl: "https://www.thecodingsharks.in/",
  },
  {
    title: "Apna Mechanic",
    category: "Service App",
    filterCategory: ["All", "Fullstack"],
    description:
      "A service-booking style web app concept for mechanic discovery and automotive support.",
    bullets: ["Service-focused landing flow", "Mobile-friendly user journey"],
    architecture:
      "Component-driven React UI focusing on mobile-first interaction patterns, mocking backend API responses for the service booking flow.",
    hurdles:
      "Creating a seamless mobile booking wizard that minimizes user friction during high-stress situations (like vehicle breakdowns).",
    image: Car,
    tags: ["React", "UX", "Services"],
    liveUrl: "https://apna-mechanic.vercel.app/",
  },
  {
    title: "AI Blog Generator",
    category: "Generative AI",
    filterCategory: ["All", "AI/ML"],
    description:
      "An AI writing project that explores automated blog generation and prompt-driven content workflows.",
    bullets: [
      "Prompt-based content generation",
      "Repository-ready AI workflow",
    ],
    architecture:
      "Python automation script that interfaces with OpenAI's GPT models, utilizing structured prompt templates to ensure consistent output formatting.",
    hurdles:
      "Engineering robust prompts that prevent the model from generating hallucinated content or straying from the requested tone and topic.",
    image: Blog,
    tags: ["OpenAI", "Python", "GenAI"],
    githubUrl: "https://github.com/OmJavia/Generate_Blogs",
  },
  {
    title: "Metashot",
    category: "Sports AI",
    filterCategory: ["All", "AI/ML", "Research"],
    description:
      "Real-time cricket shot detection and player-facing AI feedback system. Used by 185+ players across practice sessions at Metashot.",
    bullets: [
      "Real-time shot classification from video",
      "Player feedback dashboard with weak-shot analysis",
    ],
    architecture:
      "YOLO-based shot detection pipeline feeding into a FastAPI + Redis backend, with a player-facing dashboard for session insights.",
    hurdles:
      "Achieving sub-80ms end-to-end inference latency while maintaining accuracy across varied lighting and camera angles in real-world practice environments.",
    image: Metashot,
    tags: ["PyTorch", "YOLO", "FastAPI", "Sports AI"],
    caseStudyUrl: "/case-studies/metashot",
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = featuredProjects.filter((p) =>
    p.filterCategory.includes(activeFilter),
  );

  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <motion.div
        className="text-center mb-10"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="neural-label">Work</span>
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          Recent <span className="text-[#f97316]">Projects</span>{" "}
          <span className="text-3xl">🚀</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-xl mx-auto">
          Every project starts with an idea — something I wish existed or could
          work better. I love{" "}
          <span className="text-[#38bdf8]">
            building, breaking, and improving things
          </span>{" "}
          that turn ideas into meaningful, working solutions.
        </p>
      </motion.div>

      {/* ── Filter Tabs ── */}
      <motion.div
        className="flex justify-center mb-10"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="flex items-center gap-1 p-1 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`relative px-4 py-2 rounded-xl font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeFilter === tab
                  ? "text-white"
                  : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-neutral-300"
              }`}
              aria-pressed={activeFilter === tab}
              aria-label={`Filter projects by ${tab}`}
            >
              {activeFilter === tab && (
                <motion.span
                  layoutId="filter-indicator"
                  className="absolute inset-0 rounded-xl bg-[#f97316]"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ── Project Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
