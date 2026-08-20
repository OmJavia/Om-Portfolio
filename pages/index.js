import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  SiPython, SiJavascript, SiNumpy, SiPandas, SiPytorch,
  SiOpencv, SiMysql, SiMongodb, SiRedis, SiDocker, SiAmazonaws,
  SiGithubactions, SiVercel, SiGit, SiPostman
} from "react-icons/si";
import {
  FaBrain, FaEye, FaLanguage, FaDatabase, FaKeyboard,
  FaLink, FaRobot, FaSearchLocation, FaCubes, FaExternalLinkSquareAlt,
  FaProjectDiagram, FaCloudUploadAlt, FaArrowRight
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import Image from "next/image";
import Car from "../public/Car.png";
import Blog from "../public/Blog.png";
import NirmanHome from "../public/nirmanbook.png";
import Mars from "../public/Mars.png";
import QR from "../public/Download Resume.png";
import Link from "next/link";
import Metashot from "../public/Metashot.png";
import CodingShark from "../public/Coding-Shark.png";
import netflix from "../public/netflix.png";
import aerpace from "../public/aerpace.png";
import PDF_Seacrher from "../public/PDF_Searcher.png";
import Sac from "../public/sac.png";
import Ace from "../public/ace-infoway.png";
import Apoliums from "../public/Apoliums.png";
import Relcon from "../public/relcon.png";
import front from "../public/front.png";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import SpotlightCard from "../components/SpotlightCard";
import MagneticButton from "../components/MagneticButton";
import MetricCounter from "../components/MetricCounter";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Project Filter Categories ────────────────────────────────────────────────
const FILTER_TABS = ["All", "AI/ML", "Fullstack", "Research"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const skillsData = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Computer Vision", icon: FaEye, color: "#3b82f6" },
    { name: "Natural Language Processing", icon: FaLanguage, color: "#a855f7" },
    { name: "Retrieval-Augmented Generation (RAG)", icon: FaCubes, color: "#6366f1" },
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
    { name: "Postman", icon: SiPostman, color: "#FF6C37" }
  ];

  const featuredProjects = [
    {
      title: "NirmanBook",
      category: "PropTech",
      filterCategory: ["All", "Fullstack"],
      description: "A construction and real-estate focused platform built to make project discovery and service workflows feel cleaner and more reliable.",
      bullets: ["Production website with polished customer-facing flows", "Clear service discovery path for construction users"],
      architecture: "Next.js frontend communicating with a scalable Node.js backend. State management via Redux, and optimized image delivery through Vercel's edge network.",
      hurdles: "Handling complex, multi-step service booking workflows while maintaining a highly responsive and polished UI on mobile devices.",
      image: NirmanHome,
      tags: ["Next.js", "Product", "UX"],
      liveUrl: "https://www.nirmanbook.com/",
      caseStudyUrl: "/case-studies/nirmanbook",
    },
    {
      title: "Mars Rover Path Planning",
      category: "AI Research",
      filterCategory: ["All", "AI/ML", "Research"],
      description: "Computer vision and path-planning research for terrain understanding using satellite imagery and neural network workflows.",
      bullets: ["Obstacle-aware rover navigation experiments", "Terrain labeling and model evaluation workflow"],
      architecture: "PyTorch-based computer vision models for terrain segmentation, integrated with classic pathfinding algorithms (A*, Dijkstra) for optimal route calculation.",
      hurdles: "Training models on sparse satellite imagery datasets and optimizing inference times to simulate real-time rover decision making.",
      image: Mars,
      tags: ["PyTorch", "CV", "Research"],
      liveUrl: "https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing",
      caseStudyUrl: "/case-studies/mars-rover",
    },
    {
      title: "Aerpace",
      category: "Mobility",
      filterCategory: ["All", "Fullstack"],
      description: "A future-mobility product website with a clean, performance-conscious presentation for a high-consideration category.",
      bullets: ["Responsive public website", "Brand-forward product storytelling"],
      architecture: "React-based architecture with highly optimized asset loading and custom CSS transitions to create a fluid, cinematic browsing experience.",
      hurdles: "Balancing high-resolution media and smooth micro-animations with strict performance budgets for Core Web Vitals.",
      image: aerpace,
      tags: ["Frontend", "Product", "Web"],
      liveUrl: "https://www.aerpace.com/",
    },
    {
      title: "PDF Searcher",
      category: "AI Utility",
      filterCategory: ["All", "AI/ML"],
      description: "A document search utility focused on helping users find answers inside PDFs faster through a practical retrieval workflow.",
      bullets: ["PDF ingestion and search experience", "Useful foundation for RAG-style document tools"],
      architecture: "Python backend utilizing LangChain for document chunking, OpenAI embeddings for semantic search, and a lightweight vector store for fast retrieval.",
      hurdles: "Extracting clean text from highly formatted, multi-column PDFs and tuning chunk sizes to preserve semantic context for accurate answers.",
      image: PDF_Seacrher,
      tags: ["Python", "RAG", "PDF"],
      githubUrl: "https://github.com/OmJavia/PDF_Searcher",
    },
    {
      title: "Movieflix",
      category: "Frontend",
      filterCategory: ["All", "Fullstack"],
      description: "A streaming-inspired web interface that demonstrates API-driven UI patterns, browsing flows, and responsive layout work.",
      bullets: ["Movie discovery interface", "Responsive cards and media-first browsing"],
      architecture: "React single-page application integrated with TMDB API. Uses custom hooks for data fetching and caching, styled with Tailwind CSS.",
      hurdles: "Managing complex asynchronous state across multiple carousels and handling infinite scroll pagination without degrading performance.",
      image: netflix,
      tags: ["React", "API", "UI"],
      liveUrl: "https://movieflix-om.vercel.app/",
    },
    {
      title: "Coding Sharks",
      category: "Community",
      filterCategory: ["All", "Fullstack"],
      description: "A public web experience for a coding education/community brand with a direct, approachable visual system.",
      bullets: ["Public website implementation", "Clear navigation for learners and visitors"],
      architecture: "Static site generation (SSG) for high performance and SEO, using standard web technologies with a focus on accessibility.",
      hurdles: "Designing an intuitive content architecture that caters to both absolute beginners and advanced developers seeking community resources.",
      image: CodingShark,
      tags: ["Frontend", "Community", "Web"],
      liveUrl: "https://www.thecodingsharks.in/",
    },
    {
      title: "Apna Mechanic",
      category: "Service App",
      filterCategory: ["All", "Fullstack"],
      description: "A service-booking style web app concept for mechanic discovery and automotive support.",
      bullets: ["Service-focused landing flow", "Mobile-friendly user journey"],
      architecture: "Component-driven React UI focusing on mobile-first interaction patterns, mocking backend API responses for the service booking flow.",
      hurdles: "Creating a seamless mobile booking wizard that minimizes user friction during high-stress situations (like vehicle breakdowns).",
      image: Car,
      tags: ["React", "UX", "Services"],
      liveUrl: "https://apna-mechanic.vercel.app/",
    },
    {
      title: "AI Blog Generator",
      category: "Generative AI",
      filterCategory: ["All", "AI/ML"],
      description: "An AI writing project that explores automated blog generation and prompt-driven content workflows.",
      bullets: ["Prompt-based content generation", "Repository-ready AI workflow"],
      architecture: "Python automation script that interfaces with OpenAI's GPT models, utilizing structured prompt templates to ensure consistent output formatting.",
      hurdles: "Engineering robust prompts that prevent the model from generating hallucinated content or straying from the requested tone and topic.",
      image: Blog,
      tags: ["OpenAI", "Python", "GenAI"],
      githubUrl: "https://github.com/OmJavia/Generate_Blogs",
    },
    {
      title: "Metashot",
      category: "Sports AI",
      filterCategory: ["All", "AI/ML", "Research"],
      description: "Real-time cricket shot detection and player-facing AI feedback system. Used by 185+ players across practice sessions at Metashot.",
      bullets: ["Real-time shot classification from video", "Player feedback dashboard with weak-shot analysis"],
      architecture: "YOLO-based shot detection pipeline feeding into a FastAPI + Redis backend, with a player-facing dashboard for session insights.",
      hurdles: "Achieving sub-80ms end-to-end inference latency while maintaining accuracy across varied lighting and camera angles in real-world practice environments.",
      image: Metashot,
      tags: ["PyTorch", "YOLO", "FastAPI", "Sports AI"],
      caseStudyUrl: "/case-studies/metashot",
    },
  ];

  const filteredProjects = featuredProjects.filter((p) =>
    p.filterCategory.includes(activeFilter)
  );

  return (
    <Layout>
      <Head>
        {/* Primary SEO */}
        <title>Om Javia | AI Product Engineer — Computer Vision, RAG & LLMs</title>
        <meta
          name="description"
          content="Om Javia is an AI Product Engineer building production-grade computer vision, RAG, NLP, and LLM systems. Based in Bangalore. Available for AI/ML and product engineering roles."
        />
        <meta name="keywords" content="Om Javia, AI Product Engineer, Computer Vision, RAG, LLMs, PyTorch, NLP, Machine Learning, Bangalore, ISRO, Metashot" />
        <meta name="author" content="Om Javia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://omjavia.vercel.app" />

        {/* Open Graph */}
        <meta property="og:title" content="Om Javia | AI Product Engineer" />
        <meta
          property="og:description"
          content="Explore Om Javia's AI engineering work across computer vision, LLMs, data systems, and product-focused web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omjavia.vercel.app" />
        <meta property="og:image" content="https://omjavia.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Om Javia — AI Product Engineer portfolio preview" />
        <meta property="og:site_name" content="Om Javia Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OmJavia1" />
        <meta name="twitter:creator" content="@OmJavia1" />
        <meta name="twitter:title" content="Om Javia | AI Product Engineer" />
        <meta
          name="twitter:description"
          content="Computer Vision · LLMs · RAG · Production AI. Building at the intersection of AI and product."
        />
        <meta name="twitter:image" content="https://omjavia.vercel.app/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      </Head>

      <div>
        {/* ══════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section id="home" className="scroll-mt-24 pt-4 pb-16 relative">
          {/* Ambient amber glow blob behind hero */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-30"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(249,115,22,0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 select-none">

            {/* ── Left: Text ── */}
            <motion.div
              className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Status badge */}
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] bg-[#38bdf8]/8 border border-[#38bdf8]/20 rounded-full px-3.5 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                  Available for AI Roles
                </span>
              </motion.div>

              {/* Big Heading */}
              <motion.h1
                variants={fadeUp}
                custom={0.08}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.05]"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                I&apos;m{" "}
                <span className="text-[#f97316]">Om Javia,</span>
                <br />
                <span className="text-neutral-700 dark:text-neutral-300">AI Product</span>{" "}
                <span className="text-[#f97316]">Engineer</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={fadeUp}
                custom={0.16}
                className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl leading-relaxed max-w-xl font-normal tracking-tight"
              >
                I engineer intelligent, production-grade systems that synthesize artificial intelligence with robust software architecture to solve complex business challenges.
              </motion.p>

              {/* CTA Buttons — Magnetic */}
              <motion.div
                variants={fadeUp}
                custom={0.24}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2"
              >
                <MagneticButton
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-200 bg-[#f97316] text-white hover:bg-[#ea6c0a] shadow-amber-sm hover:shadow-amber-md h-11 px-6 py-2.5"
                  strength={0.3}
                >
                  <span className="chroma-text-out chroma-text-out-animate">Hire me</span>
                  <FaArrowRight className="text-xs" />
                </MagneticButton>

                <MagneticButton
                  href="https://cal.com/Om-Javia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-200 bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] text-neutral-900 dark:text-neutral-200 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white shadow-sm h-11 px-6 py-2.5"
                  strength={0.3}
                >
                  <span>Schedule a Meeting</span>
                  <FaArrowRight className="text-xs" />
                </MagneticButton>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                variants={fadeUp}
                custom={0.32}
                className="flex flex-wrap gap-3 pt-2"
              >
                {[
                  { icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/omjavia/", label: "Om Javia on LinkedIn" },
                  { icon: <AiFillTwitterCircle />, link: "https://twitter.com/OmJavia1", label: "Om Javia on Twitter" },
                  { icon: <AiFillGithub />, link: "https://github.com/omjavia", label: "Om Javia on GitHub" },
                  { icon: <AiFillInstagram />, link: "https://instagram.com/om_javia_", label: "Om Javia on Instagram" },
                  { icon: <MdEmail />, link: "mailto:omjavia18@gmail.com", label: "Email Om Javia" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] text-xl text-neutral-700 dark:text-neutral-400 hover:text-[#f97316] hover:border-[#f97316]/30 transition-all shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: Illustration ── */}
            <motion.div
              className="flex-1 w-full max-w-lg lg:max-w-xl"
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <div className="p-2.5 rounded-3xl border border-neutral-300 dark:border-[#27272a] bg-white/80 dark:bg-[#18181b]/60 shadow-xl backdrop-blur-sm" style={{ animation: "float 4s ease-in-out infinite" }}>
                <Image
                  src={front}
                  width={700}
                  height={700}
                  alt="Om Javia's AI engineering workspace — code editor, neural network visualization"
                  className="rounded-2xl object-cover w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            AI STACK / CAPABILITIES SECTION
        ══════════════════════════════════════════════════════ */}
        <section id="stack" className="py-20 scroll-mt-24">
          {/* Section header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="neural-label">Capabilities</span>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-4"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              The Full{" "}
              <span className="font-serif italic font-normal text-[#f97316]">AI Stack</span>.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From architecting neural networks to deploying scalable production environments. I provide end-to-end AI design and engineering.
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
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Computer Vision</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                Real-time vision systems that track, segment, and understand the physical world with precision.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">OpenCV</span>
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">YOLO</span>
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
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>NLP & LLMs</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                RAG pipelines, autonomous agents, and fine-tuned language models optimized for complex reasoning.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">LangChain</span>
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">RAG</span>
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
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Data Science</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                Extracting actionable intelligence and predictive patterns from complex data streams.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">Pandas</span>
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">Scikit</span>
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
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>AI Deployment</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                Production-ready cloud microservices engineered for low latency and high availability.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">AWS</span>
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-[#0369a1] dark:text-[#38bdf8]">Docker</span>
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="neural-label">Toolkit</span>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Technical{" "}
              <span className="text-[#f97316]">Skills</span>{" "}
              <span className="text-3xl">👨‍💻</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
              The tools, languages, and frameworks I use to bring ideas to life.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center flex-wrap px-4"
            initial={{ opacity: 0, y: 32 }}
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
        <section id="experience" className="py-20 scroll-mt-24">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="neural-label">Career</span>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Past{" "}
              <span className="text-[#f97316]">Experiences</span>{" "}
              <span className="text-3xl">💼</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-2xl">
              I have always been eager to explore{" "}
              <span className="text-[#38bdf8]">development and analytics</span>, gaining hands-on experience by building projects, cloning websites,
              and working with data to uncover insights, refine skills, and solve real-world problems.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto py-10 mt-6">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 border-l-2 border-dashed border-[#f97316]/20 hidden md:block" />

            {/* ── Metashot AI Product Engineer ── */}
            <motion.div
              className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
                <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">November 2025 — Present</p>
                <p className="font-mono text-xs text-neutral-500 mt-0.5">Bangalore, Karnataka</p>
              </div>
              <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-[#f97316] timeline-dot-amber border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl" aria-hidden>💼</span>
              </div>
              <div className="order-1 md:order-2 w-full md:w-5/12">
                <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-amber-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Metashot} width={50} height={50} alt="Metashot company logo" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950 dark:text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Metashot</h3>
                      <h4 className="font-mono text-xs font-semibold text-[#f97316]">AI Product Engineer</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Product Strategy", "Roadmapping", "FastAPI", "GTM"].map(tag => (
                      <span key={tag} className="font-mono text-[10px] bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                    <li>Led cross-functional execution of a sports gaming product across 3 workstreams: Engineering, UX and Go-to-Market.</li>
                    <li>Translated user feedback into PRDs, prioritizing features for a Sport Tech product in the $9.1B global pickleball market.</li>
                    <li>Validated product-market fit through user feedback from <MetricCounter value={185} suffix="+" showPing={false} /> players, driving <MetricCounter value={12} suffix="+" showPing={false} /> iterative product improvements.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ── Metashot AI Engineer ── */}
            <motion.div
              className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              <div className="order-1 w-full md:w-5/12">
                <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-emerald-500/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Metashot} width={50} height={50} alt="Metashot company logo" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950 dark:text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Metashot</h3>
                      <h4 className="font-mono text-xs font-semibold text-emerald-400">AI Engineer</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["OpenCV", "Deep Learning", "PyTorch"].map(tag => (
                      <span key={tag} className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                    <li>Strengthened real-time cricket shot detection by <MetricCounter value={33} suffix="%" /> using OpenCV and deep learning, integrated into Unity engine.</li>
                    <li>Refined churn prediction and user segmentation models, increasing retention by <MetricCounter value={17} suffix="%" /> & repeat play frequency by <MetricCounter value={21} suffix="%" />.</li>
                    <li>Optimized computer vision pipelines using PyTorch and OpenCV, reducing real-time prediction latency by <MetricCounter value={28} suffix="%" />.</li>
                  </ul>
                </div>
              </div>
              <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-emerald-500 timeline-dot-emerald border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl" aria-hidden>🏏</span>
              </div>
              <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
                <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">July 2025 — October 2025</p>
                <p className="font-mono text-xs text-neutral-500 mt-0.5">Bangalore, Karnataka</p>
              </div>
            </motion.div>

            {/* ── Apoliums Infotech ── */}
            <motion.div
              className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
                <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">May 2024 — July 2025</p>
                <p className="font-mono text-xs text-neutral-500 mt-0.5">Indore, Madhya Pradesh</p>
              </div>
              <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-[#f97316] timeline-dot-amber border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl" aria-hidden>💼</span>
              </div>
              <div className="order-1 md:order-2 w-full md:w-5/12">
                <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-[#f97316]/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-amber-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Apoliums} width={50} height={50} alt="Apoliums Infotech company logo" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950 dark:text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Apoliums Infotech</h3>
                      <h4 className="font-mono text-xs font-semibold text-[#f97316]">Associate AI Engineer</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "Pandas", "FastAPI", "CI/CD"].map(tag => (
                      <span key={tag} className="font-mono text-[10px] bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                    <li>Architected feature engineering and preprocessing pipelines in Python and Pandas, cutting model training time by <MetricCounter value={25} suffix="%" />.</li>
                    <li>Deployed FastAPI endpoints for real-time ML model predictions, contributing to 7K+ user growth on the platform.</li>
                    <li>Automated model deployment workflows with CI/CD, shortening release cycles and boosting performance by <MetricCounter value={30} suffix="%" />.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ── ISRO ── */}
            <motion.div
              className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <div className="order-1 w-full md:w-5/12">
                <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-red-500/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(239,68,68,0.15)]">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Sac} width={50} height={50} alt="ISRO Space Applications Centre logo" className="rounded-lg shadow-sm bg-white p-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950 dark:text-white leading-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Indian Space Research Organisation (ISRO)</h3>
                      <h4 className="font-mono text-xs font-semibold text-red-400">Research & Development Intern</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["PyTorch", "Neural Networks", "Path Planning"].map(tag => (
                      <span key={tag} className="font-mono text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                    <li>Preprocessed and annotated <MetricCounter value={800} showPing={false} /> HiRISE satellite image datasets and developed neural network models using PyTorch.</li>
                    <li>Engineered obstacle-aware path planning for rover, boosted navigation efficiency by <MetricCounter value={87.4} suffix="%" decimals={1} /> and ensured safe traversal.</li>
                    <li>Labeled 5 terrain types (including craters and boulders) to build high-quality datasets for rover navigation models.</li>
                  </ul>
                </div>
              </div>
              <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-red-500 timeline-dot-red border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl" aria-hidden>🚀</span>
              </div>
              <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
                <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">February 2024 — May 2024</p>
                <p className="font-mono text-xs text-neutral-500 mt-0.5">Ahmedabad, Gujarat</p>
              </div>
            </motion.div>

            {/* ── Ace Infoway ── */}
            <motion.div
              className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
                <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">July 2023 — August 2023</p>
                <p className="font-mono text-xs text-neutral-500 mt-0.5">Rajkot, Gujarat</p>
              </div>
              <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-purple-500 timeline-dot-purple border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl" aria-hidden>💻</span>
              </div>
              <div className="order-1 md:order-2 w-full md:w-5/12">
                <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-purple-500/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(168,85,247,0.15)]">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Ace} width={50} height={50} alt="Ace Infoway company logo" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950 dark:text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Ace Infoway</h3>
                      <h4 className="font-mono text-xs font-semibold text-purple-400">Software Engineer Intern</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["E-Commerce", "Frontend", "APIs"].map(tag => (
                      <span key={tag} className="font-mono text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                    <li>Introduced an abandoned cart push notification feature, boosting conversions by <MetricCounter value={25} suffix="%" />.</li>
                    <li>Restructured Budgie Cart, integrating mobile-first eCommerce capabilities & enhancing the experience for 3M+ users.</li>
                    <li>Accelerated page load performance by optimizing frontend assets and APIs, reducing average load time by <MetricCounter value={30} suffix="%" />.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ── Relcon System ── */}
            <motion.div
              className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
              <div className="order-1 w-full md:w-5/12">
                <div className="bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-[#27272a] hover:border-blue-500/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Relcon} width={50} height={50} alt="Relcon System company logo" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950 dark:text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Relcon System</h3>
                      <h4 className="font-mono text-xs font-semibold text-blue-400">Software Engineer Intern</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Dashboard", "Operations"].map(tag => (
                      <span key={tag} className="font-mono text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <ul className="font-mono text-xs text-neutral-600 dark:text-neutral-400 text-left list-disc pl-4 space-y-2">
                    <li>Redefined the smart fuel mobile dispensing unit, ensuring compatibility across 5 OS platforms for improved versatility.</li>
                    <li>Constructed a dashboard to monitor fuel consumption and manage assignments, enhancing efficiency for 450+ stations.</li>
                    <li>Facilitated real-time monitoring of fuel dispensing operations, improving overall operational efficiency by <MetricCounter value={25} suffix="%" />.</li>
                  </ul>
                </div>
              </div>
              <div className="z-20 items-center justify-center order-1 w-12 h-12 rounded-full bg-blue-500 timeline-dot-blue border-4 border-[#09090b] absolute left-1/2 transform -translate-x-1/2 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl" aria-hidden>⚙️</span>
              </div>
              <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
                <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300">June 2022 — August 2022</p>
                <p className="font-mono text-xs text-neutral-500 mt-0.5">Vadodara, Gujarat</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PROJECTS SECTION
        ══════════════════════════════════════════════════════ */}
        <section id="projects" className="py-20 scroll-mt-24">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="neural-label">Work</span>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-2 mb-3"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Recent{" "}
              <span className="text-[#f97316]">Projects</span>{" "}
              <span className="text-3xl">🚀</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-xl mx-auto">
              Every project starts with an idea — something I wish existed or could work better.{" "}
              I love <span className="text-[#38bdf8]">building, breaking, and improving things</span> that turn ideas into meaningful, working solutions.
            </p>
          </motion.div>

          {/* ── Filter Tabs ── */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 16 }}
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

        {/* ══════════════════════════════════════════════════════
            CONTACT / CTA SECTION
        ══════════════════════════════════════════════════════ */}
        <section id="contact" className="py-20">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] p-10 text-center shadow-sm"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Ambient glow */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(249,115,22,0.12) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <span className="neural-label block mb-3">Let&apos;s Connect</span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white mb-4"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                Ready to build something{" "}
                <span className="text-[#f97316]">extraordinary</span>?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8 max-w-md mx-auto">
                Scan the QR code for my full resume, or reach out directly — always happy to discuss AI, product, and engineering challenges.
              </p>

              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] inline-block">
                  <Image
                    src={QR}
                    width={160}
                    height={160}
                    alt="QR code to download Om Javia's resume"
                    className="mx-auto rounded-lg"
                  />
                  <p className="font-mono text-[10px] text-neutral-500 mt-2 uppercase tracking-widest">Download Resume</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <MagneticButton
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-colors shadow-amber-sm hover:shadow-amber-md"
                >
                  Get In Touch <FaArrowRight className="text-xs" />
                </MagneticButton>
                <MagneticButton
                  href="https://cal.com/Om-Javia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] text-neutral-900 dark:text-neutral-200 hover:border-[#f97316]/40 hover:text-[#f97316] dark:hover:text-white transition-all shadow-sm"
                >
                  Schedule a Call
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          <p className="text-center font-mono text-xs text-neutral-600 mt-8">
            <a href="#footer" className="hover:text-[#f97316] transition-colors">Om Javia</a> © 2026
          </p>
        </section>
      </div>
    </Layout>
  );
}
