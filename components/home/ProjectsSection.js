import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import posthog from 'posthog-js';
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

const FILTER_TABS = [
  "All",
  "Current Work",
  "Featured",
  "AI Systems",
  "Computer Vision",
  "LLM / RAG",
  "Product Engineering",
  "Research",
  "Experiments",
];

const projectsData = [
  {
    title: "MegaShot Pickl+",
    category: "Current Work",
    filterCategory: ["All", "Current Work", "Featured", "AI Systems", "Product Engineering"],
    description:
      "A motion-sensing smart pickleball paddle and connected gaming experience that brings real swings into interactive gameplay at home.",
    bullets: [
      "Real-time motion sensing and swing tracking",
      "Connected mobile gameplay experience & Bluetooth connectivity",
    ],
    architecture:
      "Hardware motion sensor integration feeding real-time swing tracking into a connected mobile gaming experience with haptic and interactive gameplay feedback.",
    hurdles:
      "Translating raw motion sensor data into instant, accurate digital swing interpretations for real-time multiplayer gaming.",
    tags: ["Hardware x Software", "Sensors", "Interactive Gaming", "Product"],
    liveUrl: "https://pickleball.themegashot.com/",
    caseStudyUrl: "/case-studies/megashot-pickl",
    isFeatured: true,
  },
  {
    title: "Metashot",
    category: "Sports AI",
    filterCategory: ["All", "Featured", "AI Systems", "Computer Vision", "Product Engineering"],
    description:
      "Real-time cricket shot detection and player-facing AI feedback system deployed in production and used by 185+ players across practice sessions.",
    bullets: [
      "Real-time shot classification from video streams (<80ms latency)",
      "Player feedback dashboard with weak-shot analysis module",
    ],
    architecture:
      "YOLO-based shot detection pipeline feeding into a FastAPI + Redis backend, with a player-facing dashboard for session insights.",
    hurdles:
      "Achieving sub-80ms end-to-end inference latency while maintaining accuracy across varied lighting and camera angles in real-world practice environments.",
    image: Metashot,
    tags: ["PyTorch", "YOLO", "FastAPI", "Sports AI"],
    liveUrl: "https://metashot.in/",
    caseStudyUrl: "/case-studies/metashot",
    isFeatured: true,
  },
  {
    title: "Mars Rover Path Planning",
    category: "AI Research",
    filterCategory: ["All", "Featured", "AI Systems", "Computer Vision", "Research"],
    description:
      "Computer vision and path-planning research for terrain understanding using satellite imagery and neural network workflows.",
    bullets: [
      "Obstacle-aware rover navigation experiments",
      "Terrain labeling (5 categories) and 800+ annotated image datasets",
    ],
    architecture:
      "PyTorch-based computer vision models for terrain segmentation, integrated with classic pathfinding algorithms (A*, Dijkstra) for optimal route calculation.",
    hurdles:
      "Training models on sparse satellite imagery datasets and optimizing inference times to simulate real-time rover decision making.",
    image: Mars,
    tags: ["PyTorch", "CV", "Pathfinding", "Research"],
    liveUrl:
      "https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing",
    caseStudyUrl: "/case-studies/mars-rover",
    isFeatured: true,
  },
  {
    title: "PDF Searcher",
    category: "AI Utility",
    filterCategory: ["All", "Featured", "AI Systems", "LLM / RAG"],
    description:
      "A document search utility focused on helping users find answers inside PDFs faster through a practical retrieval workflow.",
    bullets: [
      "PDF ingestion and semantic search experience",
      "Useful foundation for RAG-style document intelligence tools",
    ],
    architecture:
      "Python backend utilizing LangChain for document chunking, OpenAI embeddings for semantic search, and a lightweight vector store for fast retrieval.",
    hurdles:
      "Extracting clean text from highly formatted, multi-column PDFs and tuning chunk sizes to preserve semantic context for accurate answers.",
    image: PDF_Seacrher,
    tags: ["Python", "LangChain", "OpenAI", "RAG"],
    githubUrl: "https://github.com/OmJavia/PDF_Searcher",
    caseStudyUrl: "/case-studies/pdf-searcher",
    isFeatured: true,
  },
  {
    title: "NirmanBook",
    category: "PropTech",
    filterCategory: ["All", "Product Engineering"],
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
    title: "Aerpace",
    category: "Mobility",
    filterCategory: ["All", "Product Engineering"],
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
    caseStudyUrl: "/case-studies/aerpace",
  },
  {
    title: "Apna Mechanic",
    category: "Service App",
    filterCategory: ["All", "Product Engineering"],
    description:
      "A service-booking style web app concept for mechanic discovery and automotive support.",
    bullets: ["Service-focused landing flow", "Mobile-friendly user journey"],
    architecture:
      "Component-driven React UI focusing on mobile-first interaction patterns, mocking backend API responses for the service booking flow.",
    hurdles:
      "Creating a seamless mobile booking wizard that minimizes user friction during high-stress situations.",
    image: Car,
    tags: ["React", "UX", "Services"],
    liveUrl: "https://apna-mechanic.vercel.app/",
    caseStudyUrl: "/case-studies/apna-mechanic",
  },
  {
    title: "Movieflix",
    category: "Frontend",
    filterCategory: ["All", "Experiments"],
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
    caseStudyUrl: "/case-studies/movieflix",
  },
  {
    title: "Coding Sharks",
    category: "Community",
    filterCategory: ["All", "Experiments"],
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
    caseStudyUrl: "/case-studies/coding-sharks",
  },
  {
    title: "AI Blog Generator",
    category: "Generative AI",
    filterCategory: ["All", "AI Systems", "LLM / RAG", "Experiments"],
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
    caseStudyUrl: "/case-studies/ai-blog-generator",
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = projectsData.filter((p) =>
    p.filterCategory.includes(activeFilter),
  );

  return (
    <section id="featured-work" className="py-20 scroll-mt-24">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="neural-label">Projects & Portfolio</span>
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          Featured <span className="text-[#f97316]">Work</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Explore production AI products, computer vision pipelines, research work, and engineering applications built across the full product lifecycle.
        </p>
      </motion.div>

      {/* ── Filter Tabs ── */}
      <motion.div
        className="flex justify-center mb-10 overflow-x-auto pb-2 px-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="flex items-center gap-1 p-1 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm shrink-0">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveFilter(tab);
                posthog.capture('project_filter_changed', { filter_tab: tab });
              }}
              className={`relative px-3.5 py-2 rounded-xl font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                activeFilter === tab
                  ? "text-white"
                  : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
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
          initial={{ opacity: 0, y: 16 }}
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
