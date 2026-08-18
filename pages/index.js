
import Head from "next/head";
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
  FaProjectDiagram, FaCloudUploadAlt
} from "react-icons/fa";

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


export default function Home() {
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
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" }
  ];
  const featuredProjects = [
    {
      title: "NirmanBook",
      category: "PropTech",
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
      description: "Real-time cricket shot detection and player-facing AI feedback system. Used by 185+ players across practice sessions at Metashot.",
      bullets: ["Real-time shot classification from video", "Player feedback dashboard with weak-shot analysis"],
      architecture: "YOLO-based shot detection pipeline feeding into a FastAPI + Redis backend, with a player-facing dashboard for session insights.",
      hurdles: "Achieving sub-80ms end-to-end inference latency while maintaining accuracy across varied lighting and camera angles in real-world practice environments.",
      image: Metashot,
      tags: ["PyTorch", "YOLO", "FastAPI", "Sports AI"],
      caseStudyUrl: "/case-studies/metashot",
    },
  ];

  return (
    <Layout>
      <Head>
        {/* Page Title */}
        <title>Om Javia Portfolio</title>
        <meta
          name="description"
          content="Om Javia is an AI Product Engineer building computer vision, RAG, NLP, and production-ready AI applications."
        />
        <meta property="og:title" content="Om Javia | AI Product Engineer" />
        <meta
          property="og:description"
          content="Explore Om Javia's AI engineering work across computer vision, LLMs, data systems, and product-focused web applications."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      </Head>

      <div>
        <section id="home" className="scroll-mt-24 pt-4 pb-12">
          {/* Hero Content - Two Column */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 select-none">

            {/* Left: Text */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">

              {/* Big Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
                I&apos;m{" "}
                <span className="text-[#ff6b00]">Om Javia,</span>
                <br />
                <span className="text-neutral-800 dark:text-neutral-200">AI Product</span>{" "}
                <span className="text-[#ff6b00]">Engineer</span>
              </h1>

              <p className="text-neutral-600 dark:text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-xl font-normal tracking-tight">
                I engineer intelligent, production-grade systems that synthesize artificial intelligence with robust software architecture to solve complex business challenges.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-[510] tracking-[-0.011em] whitespace-nowrap transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 chroma-text-animate-parent border border-black/[0.08] bg-white text-[#1c1d1f] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_-2px_rgba(0,0,0,0.05)] [--foreground:#1c1d1f] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_8px_20px_-4px_rgba(0,0,0,0.08)] h-10 px-6 py-2.5 has-[>svg]:px-4"
                >
                  <span className="chroma-text-out chroma-text-out-animate">Hire me</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-right"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
                </Link>
                <a
                  href="https://cal.com/Om-Javia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-[510] tracking-[-0.011em] whitespace-nowrap transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 chroma-text-animate-parent border border-black/[0.08] bg-white text-[#1c1d1f] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_-2px_rgba(0,0,0,0.05)] [--foreground:#1c1d1f] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_8px_20px_-4px_rgba(0,0,0,0.08)] h-10 px-6 py-2.5 has-[>svg]:px-4"
                >
                  <span className="chroma-text-out chroma-text-out-animate">Schedule a Meeting</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-right"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
                </a>
              </div>

              {/* Social Icons Badge Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/omjavia/", label: "LinkedIn" },
                  { icon: <AiFillTwitterCircle />, link: "https://twitter.com/OmJavia1", label: "Twitter" },
                  { icon: <AiFillGithub />, link: "https://github.com/omjavia", label: "GitHub" },
                  { icon: <AiFillInstagram />, link: "https://instagram.com/om_javia_", label: "Instagram" },
                  { icon: <MdEmail />, link: "mailto:omjavia18@gmail.com", label: "Email" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-xl text-neutral-700 dark:text-neutral-300 hover:text-[#ff6b00] dark:hover:text-[#ff6b00] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="flex-1 w-full max-w-lg lg:max-w-xl">
              <div className="p-2.5 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/70 shadow-xl backdrop-blur-sm">
                <Image
                  src={front}
                  width={700}
                  height={700}
                  alt="AI Engineer Workspace"
                  className="rounded-2xl object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        <section id="stack" className="py-16 scroll-mt-24">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-1 mb-4">
              The Full <span className="font-serif italic font-normal text-[#ff6b00]">AI Stack</span>.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              From architecting neural networks to deploying scalable production environments. I provide end-to-end AI design and engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CV */}
            <div className="ai-glow-card p-7 rounded-3xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 shadow-md hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 text-2xl">
                <FaBrain />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Computer Vision</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                Real-time vision systems that track, segment, and understand the physical world with precision.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">OpenCV</span>
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">YOLO</span>
              </div>
            </div>

            {/* NLP */}
            <div className="ai-glow-card p-7 rounded-3xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 shadow-md hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 text-2xl">
                <FaProjectDiagram />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">NLP & LLMs</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                RAG pipelines, autonomous agents, and fine-tuned language models optimized for complex reasoning.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">LangChain</span>
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">RAG</span>
              </div>
            </div>

            {/* Data */}
            <div className="ai-glow-card p-7 rounded-3xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 shadow-md hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5 text-2xl">
                <FaDatabase />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Data Science</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                Extracting actionable intelligence and predictive patterns from complex data streams.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">Pandas</span>
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">Scikit</span>
              </div>
            </div>

            {/* AI Ops */}
            <div className="ai-glow-card p-7 rounded-3xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 shadow-md hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5 text-2xl">
                <FaCloudUploadAlt />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">AI Deployment</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                Production-ready cloud microservices engineered for low latency and high availability.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">AWS</span>
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">Docker</span>
              </div>
            </div>
          </div>
        </section>



        <section id="skills" className="mt-20 mb-40 scroll-mt-32">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold py-1 dark:text-white inline-flex items-center gap-2">
              <span className="text-slate-800 dark:text-white">Technical</span>
              <span className="text-[#ff6b00]">Skills</span>
              <span className="text-3xl">👨‍💻</span>
            </h3>
            <p className="text-md py-2 leading-7 text-gray-400">
              The tools, languages, and frameworks I use to bring ideas to life.
            </p>
          </div>

          <div className="flex justify-center flex-wrap px-4">
            <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-10 max-w-5xl w-full border border-gray-100 dark:border-gray-800 hover:shadow-blue-500/10 transition-shadow duration-500">

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-gray-700 hover:scale-110 shadow-sm hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    <skill.icon
                      className={`text-5xl sm:text-6xl drop-shadow-md transition-transform duration-300 group-hover:-translate-y-4 ${skill.name === 'Vercel' ? 'text-black dark:text-white' : skill.name === 'AWS' ? 'text-[#232F3E] dark:text-white' : ''}`}
                      style={{ color: (skill.name !== 'Vercel' && skill.name !== 'AWS') ? skill.color : undefined }}
                    />
                    <div className="absolute bottom-1 sm:bottom-2 w-full px-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className={`text-[9px] sm:text-[10px] font-bold leading-none drop-shadow-sm ${skill.name === 'Vercel' ? 'text-black dark:text-white' : skill.name === 'AWS' ? 'text-[#232F3E] dark:text-white' : ''}`}
                        style={{ color: (skill.name !== 'Vercel' && skill.name !== 'AWS') ? skill.color : undefined }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-10 scroll-mt-24">
          <div className="mb-10">
            <h3 className="text-4xl font-bold py-1 dark:text-white inline-flex items-center gap-2">
              <span className="text-slate-800 dark:text-white">Past</span>
              <span className="text-[#ff6b00]">Experiences</span>
              <span className="text-3xl">💼</span>
            </h3>
            <p className="text-md py-2 leading-7 text-gray-400">
              I have always been eager to explore <span className="text-blue-600 dark:text-amber-300">development and analytics</span>, gaining hands-on experience by building projects,
              cloning websites, <br /> and working with data to uncover insights, refine skills, and solve real-world problems.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto py-10 mt-10">
            {/* The central line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 border-l-2 border-dashed border-teal-500 dark:border-teal-700 hidden md:block"></div>

            {/* Experience Item 2: Metashot  (Right side) */}
            <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group">
              {/* Left (Date/Location) */}
              <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
                <p className="text-lg font-bold text-gray-700 dark:text-gray-300">November 2025 - Present</p>
                <p className="text-sm text-gray-500 font-medium">Om Javia</p>
                <p className="text-sm text-gray-500">Bangalore, Karnataka</p>
              </div>

              {/* Center Dot */}
              <div className="z-20 flex items-center justify-center order-1 w-12 h-12 rounded-full bg-orange-500 shadow-xl border-4 border-white dark:border-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-0 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl">💼</span>
              </div>

              {/* Right (Card) */}
              <div className="order-1 md:order-2 w-full md:w-5/12">
                <div className="shadow-lg border border-gray-100 dark:border-gray-800 p-6 rounded-2xl dark:bg-slate-900 bg-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Metashot} width={60} height={60} alt="Metashot" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-xl font-bold dark:text-amber-300 text-slate-800">Metashot</h3>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-amber-500">AI Product Engineer</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 px-3 py-1 rounded-full font-medium">Product Strategy</span>
                    <span className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 px-3 py-1 rounded-full font-medium"> Roadmapping</span>
                    <span className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 px-3 py-1 rounded-full font-medium">FastAPI</span>
                    <span className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 px-3 py-1 rounded-full font-medium">GTM</span>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 text-left list-disc pl-4 space-y-2">
                    <li>Led cross-functional execution of a sports gaming product across 3 workstreams: Engineering, UX and Go-to-Market.</li>
                    <li>Translated user feedback into PRDs, prioritizing features for a Sport Tech product in the $9.1B global pickleball market.</li>
                    <li>Validated product-market fit through user feedback from 185+ players, driving 12+ iterative product improvements.</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Experience Item 1: Metashot (Left side) */}
            <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group">
              {/* Left (Card) */}
              <div className="order-1 w-full md:w-5/12">
                <div className="shadow-lg border border-gray-100 dark:border-gray-800 p-6 rounded-2xl dark:bg-slate-900 bg-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Metashot} width={60} height={60} alt="Metashot" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-xl font-bold dark:text-amber-300 text-slate-800">Metashot</h3>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-amber-500">AI Engineer</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 px-3 py-1 rounded-full font-medium">OpenCV</span>
                    <span className="text-xs bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 px-3 py-1 rounded-full font-medium">Deep Learning</span>
                    <span className="text-xs bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 px-3 py-1 rounded-full font-medium">PyTorch</span>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 text-left list-disc pl-4 space-y-2">
                    <li>Strengthened real-time cricket shot detection by 33% using OpenCV and deep learning, integrated into Unity engine.</li>
                    <li>Refined churn prediction and user segmentation models, increasing retention by 17% & repeat play frequency by 21%.</li>
                    <li>Optimized computer vision pipelines using PyTorch and OpenCV, reducing real-time prediction latency by 28%.</li>
                  </ul>
                </div>
              </div>

              {/* Center Dot */}
              <div className="z-20 flex items-center justify-center order-1 w-12 h-12 rounded-full bg-emerald-500 shadow-xl border-4 border-white dark:border-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-0 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl">🏏</span>
              </div>

              {/* Right (Date/Location) */}
              <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
                <p className="text-lg font-bold text-gray-700 dark:text-gray-300">July 2025 - October 2025</p>
                <p className="text-sm text-gray-500 font-medium">Om Javia</p>
                <p className="text-sm text-gray-500">Bangalore, Karnataka</p>
              </div>
            </div>

            {/* Experience Item 2: Apoliums Infotech (Right side) */}
            <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group">
              {/* Left (Date/Location) */}
              <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
                <p className="text-lg font-bold text-gray-700 dark:text-gray-300">May 2024 - July 2025</p>
                <p className="text-sm text-gray-500 font-medium">Om Javia</p>
                <p className="text-sm text-gray-500">Indore, Madhya Pradesh</p>
              </div>

              {/* Center Dot */}
              <div className="z-20 flex items-center justify-center order-1 w-12 h-12 rounded-full bg-orange-500 shadow-xl border-4 border-white dark:border-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-0 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl">💼</span>
              </div>

              {/* Right (Card) */}
              <div className="order-1 md:order-2 w-full md:w-5/12">
                <div className="shadow-lg border border-gray-100 dark:border-gray-800 p-6 rounded-2xl dark:bg-slate-900 bg-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Apoliums} width={60} height={60} alt="Apoliums" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-xl font-bold dark:text-amber-300 text-slate-800">Apoliums Infotech</h3>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-amber-500">Associate AI Engineer</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 px-3 py-1 rounded-full font-medium">Python</span>
                    <span className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 px-3 py-1 rounded-full font-medium">Pandas</span>
                    <span className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 px-3 py-1 rounded-full font-medium">FastAPI</span>
                    <span className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 px-3 py-1 rounded-full font-medium">CI/CD</span>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 text-left list-disc pl-4 space-y-2">
                    <li>Architected feature engineering and preprocessing pipelines in Python and Pandas, cutting model training time by 25%.</li>
                    <li>Deployed FastAPI endpoints for real-time ML model predictions, contributing to 7K+ user growth on the platform.</li>
                    <li>Automated model deployment workflows with CI/CD, shortening release cycles and boosting performance by 30%.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Item 3: ISRO (Left side) */}
            <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group">
              {/* Left (Card) */}
              <div className="order-1 w-full md:w-5/12">
                <div className="shadow-lg border border-gray-100 dark:border-gray-800 p-6 rounded-2xl dark:bg-slate-900 bg-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Sac} width={60} height={60} alt="ISRO" className="rounded-lg shadow-sm bg-white" />
                    <div>
                      <h3 className="text-xl font-bold dark:text-amber-300 text-slate-800 leading-tight">Indian Space Research Organisation (ISRO)</h3>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-amber-500 mt-1">Research & Development Intern</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300 px-3 py-1 rounded-full font-medium">PyTorch</span>
                    <span className="text-xs bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300 px-3 py-1 rounded-full font-medium">Neural Networks</span>
                    <span className="text-xs bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300 px-3 py-1 rounded-full font-medium">Path Planning</span>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 text-left list-disc pl-4 space-y-2">
                    <li>Preprocessed and annotated 800 HiRISE satellite image datasets and developed neural network models using PyTorch.</li>
                    <li>Engineered obstacle-aware path planning for rover, boosted navigation efficiency by 87.4% and ensured safe traversal.</li>
                    <li>Labeled 5 terrain types (including craters and boulders) to build high-quality datasets for rover navigation models.</li>
                  </ul>
                </div>
              </div>

              {/* Center Dot */}
              <div className="z-20 flex items-center justify-center order-1 w-12 h-12 rounded-full bg-red-500 shadow-xl border-4 border-white dark:border-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-0 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl">🚀</span>
              </div>

              {/* Right (Date/Location) */}
              <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
                <p className="text-lg font-bold text-gray-700 dark:text-gray-300">February 2024 - May 2024</p>
                <p className="text-sm text-gray-500 font-medium">Om Javia</p>
                <p className="text-sm text-gray-500">Ahmedabad, Gujarat</p>
              </div>
            </div>

            {/* Experience Item 4: Ace Infoway (Right side) */}
            <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group">
              {/* Left (Date/Location) */}
              <div className="order-2 md:order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-right mt-4 md:mt-0">
                <p className="text-lg font-bold text-gray-700 dark:text-gray-300">July 2023 - August 2023</p>
                <p className="text-sm text-gray-500 font-medium">Om Javia</p>
                <p className="text-sm text-gray-500">Rajkot, Gujarat</p>
              </div>

              {/* Center Dot */}
              <div className="z-20 flex items-center justify-center order-1 w-12 h-12 rounded-full bg-purple-500 shadow-xl border-4 border-white dark:border-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-0 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl">💻</span>
              </div>

              {/* Right (Card) */}
              <div className="order-1 md:order-2 w-full md:w-5/12">
                <div className="shadow-lg border border-gray-100 dark:border-gray-800 p-6 rounded-2xl dark:bg-slate-900 bg-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Ace} width={60} height={60} alt="Ace Infoway" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-xl font-bold dark:text-amber-300 text-slate-800">Ace Infoway</h3>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-amber-500">Software Engineer Intern</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 px-3 py-1 rounded-full font-medium">E-Commerce</span>
                    <span className="text-xs bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 px-3 py-1 rounded-full font-medium">Frontend</span>
                    <span className="text-xs bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 px-3 py-1 rounded-full font-medium">APIs</span>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 text-left list-disc pl-4 space-y-2">
                    <li>Introduced an abandoned cart push notification feature, boosting conversions by 25% on the eCommerce website.</li>
                    <li>Restructured Budgie Cart, integrating mobile-first eCommerce capabilities & enhancing the experience for 3M+ users.</li>
                    <li>Accelerated page load performance by optimizing frontend assets and APIs, reducing average load time by 30%.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Item 5: Relcon System (Left side) */}
            <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group">
              {/* Left (Card) */}
              <div className="order-1 w-full md:w-5/12">
                <div className="shadow-lg border border-gray-100 dark:border-gray-800 p-6 rounded-2xl dark:bg-slate-900 bg-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={Relcon} width={60} height={60} alt="Relcon System" className="rounded-lg shadow-sm" />
                    <div>
                      <h3 className="text-xl font-bold dark:text-amber-300 text-slate-800">Relcon System</h3>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-amber-500">Software Engineer Intern</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-full font-medium">Dashboard</span>
                    <span className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-full font-medium">Operations</span>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 text-left list-disc pl-4 space-y-2">
                    <li>Redefined the smart fuel mobile dispensing unit, ensuring compatibility across 5 OS platforms for improved versatility.</li>
                    <li>Constructed a dashboard to monitor fuel consumption and manage assignments, enhancing efficiency for 450+ stations.</li>
                    <li>Facilitated real-time monitoring of fuel dispensing operations, improving overall operational efficiency by 25%.</li>
                  </ul>
                </div>
              </div>

              {/* Center Dot */}
              <div className="z-20 flex items-center justify-center order-1 w-12 h-12 rounded-full bg-blue-500 shadow-xl border-4 border-white dark:border-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-0 hidden md:flex transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl">⚙️</span>
              </div>

              {/* Right (Date/Location) */}
              <div className="order-1 w-full md:w-5/12 px-6 py-4 flex flex-col text-left md:text-left mt-4 md:mt-0">
                <p className="text-lg font-bold text-gray-700 dark:text-gray-300">June 2022 - August 2022</p>
                <p className="text-sm text-gray-500 font-medium">Om Javia</p>
                <p className="text-sm text-gray-500">Vadodara, Gujarat</p>
              </div>
            </div>

          </div>
        </section>
        <br />

        <section id="projects" className="py-20 scroll-mt-22">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold py-1 dark:text-white inline-flex items-center gap-2">
              <span className="text-slate-800 dark:text-white">Recent</span>
              <span className="text-[#ff6b00]">Projects</span>
              <span className="text-3xl">🚀</span>
            </h3>
            <div>
              <p className="text-md py-2 leading-7 text-gray-400">
                Every project starts with an idea — something I wish existed or could work better.<br />
                I love <span className="text-blue-600 dark:text-amber-300"> building, breaking, and improving things</span> that turn ideas into meaningful, working solutions.<br />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
        <section id="contact">
          <div className="p-5 rounded-md text-center dark:text-white">
            <div className=" text-center">
              <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
                <h3 className="text-lg font-medium pt-5 pb-2 dark:text-amber-300">
                  For More Information Scan The Below QR-Code
                </h3>
                <Image src={QR} width={200} height={200} alt="" className="mx-auto" />
              </div>
            </div>
            <p className="font-bold">
              <span>
                <a href="#footer">Om Javia</a>
              </span>
              © 2026
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
