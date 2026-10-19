import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import posthog from 'posthog-js';
import { FaChevronDown, FaChevronUp, FaFolderOpen } from "react-icons/fa";
import Car from "../../public/Car.jpg";
import Blog from "../../public/Blog.png";
import NirmanHome from "../../public/nirmanbook.jpg";
import Mars from "../../public/Mars.jpg";
import Metashot from "../../public/Metashot.jpg";
import Pickle from "../../public/Pickle.jpeg";
import CodingShark from "../../public/Coding-Shark.jpg";
import netflix from "../../public/netflix.jpg";
import aerpace from "../../public/aerpace.jpg";
import PDF_Seacrher from "../../public/PDF_Searcher.jpg";
import ProjectCard from "../ProjectCard";

const FILTER_TABS = [
  "All",
  "Featured",
  "Current Work",
  "AI Systems",
  "Computer Vision",
  "LLM / RAG",
  "Product Engineering",
  "Research",
  "Experiments",
];

// 4 High-Signal Core Featured Projects
const FEATURED_PROJECTS = [
  {
    title: "MegaShot Pickl+",
    category: "Current Work",
    filterCategory: ["All", "Featured", "Current Work", "AI Systems", "Product Engineering"],
    description:
      "A motion-sensing smart pickleball paddle and connected gaming experience that brings real swings into interactive gameplay at home.",
    bullets: [
      "Real-time motion sensing and low-latency BLE swing tracking",
      "Connected mobile gameplay experience & handle haptics",
    ],
    architecture:
      "Hardware motion sensor integration feeding real-time swing tracking into a connected mobile gaming experience with haptic and interactive gameplay feedback.",
    hurdles:
      "Translating raw motion sensor data into instant, accurate digital swing interpretations for real-time multiplayer gaming.",
    image: Pickle,
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
      "Real-time cricket shot detection and player-facing AI feedback system deployed in production across active training and practice sessions.",
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
    // Note: No dedicated case study exists yet for MetaShot sports-AI; liveUrl links to official site.
    // TODO(Om): create dedicated MetaShot sports-AI case study
    isFeatured: true,
  },
  {
    title: "Mars Rover Path Planning",
    category: "AI Research",
    filterCategory: ["All", "Featured", "AI Systems", "Computer Vision", "Research"],
    description:
      "Computer vision and path-planning research for terrain understanding using satellite imagery and neural network workflows.",
    bullets: [
      "Obstacle-aware rover navigation experiments (87.4% efficiency score)",
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
    category: "Applied AI / RAG",
    filterCategory: ["All", "Featured", "AI Systems", "LLM / RAG"],
    description:
      "A document search utility focused on helping users find answers inside PDFs faster through a practical semantic retrieval workflow.",
    bullets: [
      "PDF ingestion and semantic search experience",
      "Vector retrieval foundation for document intelligence tools",
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
  // TODO(Om): build and evaluate flagship LLM/agent project with README, metrics and demo
];

// Additional Projects (Kept in accessible collapsible section)
const MORE_PROJECTS = [
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
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Filter logic
  const filteredFeatured = FEATURED_PROJECTS.filter((p) =>
    p.filterCategory.includes(activeFilter)
  );

  const filteredMore = MORE_PROJECTS.filter((p) =>
    p.filterCategory.includes(activeFilter)
  );

  // Auto-expand "More projects" if active filter selects only items in that section
  const handleFilterClick = (tab) => {
    setActiveFilter(tab);
    posthog.capture('project_filter_changed', { filter_tab: tab });
    const matchesMore = MORE_PROJECTS.some((p) => p.filterCategory.includes(tab));
    const matchesFeatured = FEATURED_PROJECTS.some((p) => p.filterCategory.includes(tab));
    if (matchesMore && !matchesFeatured) {
      setIsMoreOpen(true);
    }
  };

  return (
    <section id="featured-work" className="py-12 sm:py-20 scroll-mt-24">
      <motion.div
        className="text-center mb-8 sm:mb-10"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="neural-label">High-Signal Portfolio</span>
        <h2
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          Featured <span className="text-[#f97316]">Work</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
          Production AI systems, computer vision models, research pipelines, and connected hardware taking AI from concept to shipped product.
        </p>
      </motion.div>

      {/* ── Filter Tabs ── */}
      <motion.div
        className="flex justify-start md:justify-center mb-10 overflow-x-auto pb-2 px-2 sm:px-4 max-w-full"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="flex items-center gap-1 p-1 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] shadow-sm shrink-0">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleFilterClick(tab)}
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

      {/* ── Core Featured Grid (4 High-Signal Projects) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter + "-featured"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {filteredFeatured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Collapsible "More projects" Section ── */}
      <div className="mt-12 pt-8 border-t border-neutral-200/80 dark:border-[#27272a]">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div>
            <h3 className="font-bold text-lg text-neutral-950 dark:text-white flex items-center gap-2">
              <FaFolderOpen className="text-[#f97316]" /> Additional Projects &amp; Web Systems
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Earlier engineering projects, mobility web experiences, PropTech platforms, and frontend experiments.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const nextState = !isMoreOpen;
              setIsMoreOpen(nextState);
              posthog.capture('more_projects_toggled', { open: nextState });
            }}
            aria-expanded={isMoreOpen}
            aria-controls="more-projects-grid"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] text-neutral-800 dark:text-neutral-200 hover:border-[#f97316]/50 hover:text-[#f97316] transition-all shadow-sm"
          >
            <span>{isMoreOpen ? "Hide More Projects" : `More Projects (${MORE_PROJECTS.length})`}</span>
            {isMoreOpen ? <FaChevronUp className="text-[10px]" /> : <FaChevronDown className="text-[10px]" />}
          </button>
        </div>

        {/* Collapsible Container */}
        {isMoreOpen && (
          <motion.div
            id="more-projects-grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-2"
          >
            {filteredMore.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
