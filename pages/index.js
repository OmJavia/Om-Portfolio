
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
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
  FaLink, FaRobot, FaSearchLocation, FaCubes, FaExternalLinkSquareAlt
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Image from "next/image";
import Html from "../public/Html.png";
import anvil from "../public/anvil.png";
import tesla from "../public/tesla.png";
import Ai from "../public/Ai.png"
import Car from "../public/Car.png"
import Dice from "../public/dice.png"
import Mapty from "../public/mapty.png"
import Bank_Account from "../public/bank_account.png"
import Guess_The_Number from "../public/guess_number.png"
import SignUp from "../public/SignUp.png";
import Blog from "../public/Blog.png";
import coming from "../public/coming.jpg";
import NirmanHome from "../public/nirmanbook.png";
import Mars from "../public/Mars.png";
import Icon from "../public/icon.png";
import { useState } from "react";
import QR from "../public/Download Resume.png";
import Link from "next/link";
import Dryer from "../public/Dryer.png";
import Metashot from "../public/Metashot.png";
import CodingShark from "../public/Coding-Shark.png";
import netflix from "../public/netflix.png";
import aerpace from "../public/aerpace.png";
import PDF_Seacrher from "../public/PDF_Searcher.png";
import Tennis from "../public/Tennis.png";
import Sac from "../public/sac.png"
import Ace from "../public/ace-infoway.png"
import Apoliums from "../public/Apoliums.png"
import Relcon from "../public/relcon.png"
import heroAI from "../public/hero_ai.png";
import hero from "../public/hero.gif"
import { FaProjectDiagram, FaCloudUploadAlt } from 'react-icons/fa';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState("");

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
  const accentColors = [
    "#3b82f6", // blue
  ];

  const cycleColor = () => {
    setColorIndex((prev) => (prev + 1) % accentColors.length);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        {/* Page Title */}
        <title>Om Javia Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Om Javia showcasing skills and projects in full-stack development."
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      </Head>



      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center border-b bg-white/70 dark:bg-black/80 backdrop-blur-md dark:border-gray-800 transition-all duration-300">
        {/* Left Side: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/">
            <div className="flex items-center cursor-pointer transition-transform hover:scale-110" onMouseEnter={cycleColor}>
              <Image src={Icon} alt="Om Javia" width={60} height={60} className="object-contain" />
            </div>
          </Link>
        </div>

        {/* Center: Headings */}
        <ul className="hidden lg:flex items-center gap-6 text-xl font-bold">
          <li><a href="#home" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Home</a></li>
          <li><Link href="/about" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>About</Link></li>
          <li><a href="#skills" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Skills</a></li>
          <li><a href="#experience" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Experience</a></li>
          <li><a href="#projects" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Projects</a></li>
          <li><Link href="/contact" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Contact</Link></li>
        </ul>

        {/* Right Side Group: Resume, Meeting, Palette, Moon */}
        <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6">
          <Link href="https://drive.google.com/file/d/1piCpXUSJk7BZzov8hJe--R90HaqbKr5L/view?usp=sharing" target="_blank"
            className="hidden sm:block border-2 px-5 py-2 rounded-full font-bold text-sm transition-all"
            style={{ borderColor: accentColors[colorIndex], color: accentColors[colorIndex] }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = accentColors[colorIndex]; e.target.style.color = "white"; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = accentColors[colorIndex]; }}>
            Resume
          </Link>
          <a href="https://cal.com/Om-Javia" target="_blank" rel="noreferrer"
            className="hidden md:block text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all"
            style={{ backgroundColor: accentColors[colorIndex] }}>
            Schedule a Meeting
          </a>

          {/* Hamburger Menu Toggle (Mobile) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-3xl dark:text-white focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

          <div className="flex items-center gap-4 ml-2">
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-white hover:opacity-70 transition-opacity" />
          </div>
        </div>
      </nav >

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold p-6">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="px-8 py-3 rounded-xl transition-all duration-300 text-gray-800 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Home</a>
          <Link href="/about"><span onClick={() => setIsMenuOpen(false)} className="px-8 py-3 rounded-xl transition-all duration-300 text-gray-800 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>About</span></Link>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="px-8 py-3 rounded-xl transition-all duration-300 text-gray-800 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Skills</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className="px-8 py-3 rounded-xl transition-all duration-300 text-gray-800 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Experience</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="px-8 py-3 rounded-xl transition-all duration-300 text-gray-800 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Projects</a>
          <Link href="/contact"><span onClick={() => setIsMenuOpen(false)} className="px-8 py-3 rounded-xl transition-all duration-300 text-gray-800 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '30'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Contact</span></Link>

          <div className="flex flex-col gap-4 mt-4 w-full max-w-xs">
            <Link href="https://drive.google.com/file/d/1piCpXUSJk7BZzov8hJe--R90HaqbKr5L/view?usp=sharing" target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="border-2 text-center py-3 rounded-full font-bold text-lg transition-all"
              style={{ borderColor: accentColors[colorIndex], color: accentColors[colorIndex] }}>
              Resume
            </Link>
            <a href="https://cal.com/Om-Javia" target="_blank" rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-center py-3.5 rounded-full font-bold text-lg shadow-lg"
              style={{ backgroundColor: accentColors[colorIndex] }}>
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>

      <main className="pt-24 p-5 md:px-20 lg:px-40 dark:bg-black">
        <section id="home" className="scroll-mt-24">
          {/* Hero Content - Two Column */}
          <div
            className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 pt-10 pb-20 gap-12 select-none"
          >

            {/* Left: Text */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-slate-900/50 rounded-full px-5 py-2 w-fit text-sm font-medium text-gray-600 dark:text-gray-300 backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                Available for new AI opportunities
              </div>

              {/* Big Heading */}
              <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                I&apos;m{" "}
                <span style={{ color: accentColors[colorIndex] }}>Om Javia,</span>
                <br />
                <span className="text-slate-800 dark:text-slate-200">AI</span>{" "}
                <span style={{ color: accentColors[colorIndex] }}>Engineer</span>
              </h2>

              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                I design and build <span className="font-semibold text-slate-800 dark:text-slate-200">functional and beautiful</span> AI applications with a focus on user experience and high quality.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6" onClick={(e) => e.stopPropagation()}>
                <Link
                  href="/contact"
                  className="font-bold px-10 py-3.5 rounded-full transition-all border-2"
                  style={{ borderColor: accentColors[colorIndex], color: accentColors[colorIndex] }}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = accentColors[colorIndex]; e.target.style.color = "white"; }}
                  onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = accentColors[colorIndex]; }}>
                  Hire me
                </Link>
                <a
                  href="https://cal.com/Om-Javia"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition-all"
                  style={{ backgroundColor: accentColors[colorIndex], boxShadow: `0 15px 30px -5px ${accentColors[colorIndex]}66` }}>
                  Schedule a Meeting
                </a>
              </div>

              {/* Social Icons Badge Row */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/omjavia/" },
                  { icon: <AiFillTwitterCircle />, link: "https://twitter.com/OmJavia1" },
                  { icon: <AiFillGithub />, link: "https://github.com/omjavia" },
                  { icon: <AiFillInstagram />, link: "https://instagram.com/om_javia_" },
                  { icon: <MdEmail />, link: "mailto:omjavia18@gmail.com" }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer"
                    className="p-3 rounded-xl bg-gray-100 dark:bg-slate-900 text-3xl shadow-sm text-gray-900 dark:text-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                    onMouseEnter={(e) => { e.currentTarget.style.color = accentColors[colorIndex]; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="flex-1 w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <Image src={hero} width={700} height={700} alt="AI Engineer Workspace"
                  className="relative rounded-2xl shadow-2xl transition-all duration-700 hover:scale-[1.02]"
                  priority />
              </div>
            </div>

          </div>
        </section>

        <section id="stack" className="py-20 scroll-mt-24">
          <div className="text-center mb-16 px-4">
            <h3 className="text-4xl md:text-5xl font-bold dark:text-white mb-6">
              The full <span style={{ color: accentColors[colorIndex] }}>AI development</span> stack.
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              From architecting neural networks to deploying scalable production environments — I provide the full depth of AI design and implementation, powered by state-of-the-art technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* CV */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaBrain className="text-3xl text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-3">Computer Vision</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                I build functional, beautiful and responsive vision systems that understand and track the real world.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">OpenCV</span>
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">YOLO</span>
              </div>
            </div>

            {/* NLP */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/10 hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaProjectDiagram className="text-3xl text-cyan-600 dark:text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-3">NLP & LLMs</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                I build high-quality RAG pipelines and language models tailored to search and conversational needs.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">LangChain</span>
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">RAG</span>
              </div>
            </div>

            {/* Data */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaDatabase className="text-3xl text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-3">Data Science</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                I create meaningful insights from raw data to match user needs and expectations, and solve their problems.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Pandas</span>
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Scikit</span>
              </div>
            </div>

            {/* AI Ops */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-purple-50/50 dark:hover:bg-purple-900/10 hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaCloudUploadAlt className="text-3xl text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-3">AI Deployment</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                I design beautiful, cloud-ready services for applications to work on all sizes, optimized for low latency.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">AWS</span>
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Docker</span>
              </div>
            </div>
          </div>
        </section>



        <section id="skills" className="mt-20 mb-40 scroll-mt-32">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold py-1 dark:text-white inline-flex items-center gap-2">
              <span className="text-slate-800 dark:text-white">Technical</span>
              <span style={{ color: accentColors[colorIndex] }}>Skills</span>
              <span className="text-3xl">👨‍💻</span>
            </h3>
            <p className="text-md py-2 leading-7 text-gray-400">
              The tools, languages, and frameworks I use to bring ideas to life.
            </p>
          </div>

          <div className="flex justify-center flex-wrap px-4">
            <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-10 max-w-5xl w-full border border-gray-100 dark:border-gray-800 hover:shadow-blue-500/10 transition-shadow duration-500">
              
              {/* Dynamic Skill Name Display */}
              <div className="h-12 mb-8 flex flex-col items-center justify-center text-center">
                <p 
                  className={`text-2xl font-bold transition-all duration-300 ${hoveredSkill ? 'opacity-100 scale-110' : 'opacity-40 scale-100'}`}
                  style={{ color: hoveredSkill ? accentColors[colorIndex] : '' }}
                >
                  {hoveredSkill || "Hover over any skill to see more"}
                </p>
                <div 
                  className="h-1 mt-1 rounded-full transition-all duration-500"
                  style={{ 
                    width: hoveredSkill ? '100px' : '0px', 
                    backgroundColor: accentColors[colorIndex],
                    opacity: hoveredSkill ? 1 : 0 
                  }}
                ></div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-10 sm:gap-8 items-center">
                {skillsData.map((skill, index) => (
                  <skill.icon 
                    key={index}
                    className={`text-6xl sm:text-7xl hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md ${skill.name === 'Vercel' ? 'text-black dark:text-white' : skill.name === 'AWS' ? 'text-[#232F3E] dark:text-white' : ''}`}
                    style={{ color: (skill.name !== 'Vercel' && skill.name !== 'AWS') ? skill.color : undefined }}
                    title={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill("")}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-10 scroll-mt-24">
          <div className="mb-10">
            <h3 className="text-4xl font-bold py-1 dark:text-white inline-flex items-center gap-2">
              <span className="text-slate-800 dark:text-white">Past</span>
              <span style={{ color: accentColors[colorIndex] }}>Experiences</span>
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
                <p className="text-lg font-bold text-gray-700 dark:text-gray-300">July 2025 - Present</p>
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
              <span style={{ color: accentColors[colorIndex] }}>Projects</span>
              <span className="text-3xl">🚀</span>
            </h3>
            <div>
              <p className="text-md py-2 leading-7 text-gray-400">
                Every project starts with an idea — something I wish existed or could work better.<br />
                I love <span className="text-blue-600 dark:text-amber-300"> building, breaking, and improving things</span> that turn ideas into meaningful, working solutions.<br />
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a href="https://www.nirmanbook.com/">
                <Image
                  src={NirmanHome}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing">
                <Image
                  src={Mars}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.aerpace.com/">
                <Image
                  src={aerpace}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.tennisshop.ae/">
                <Image
                  src={Tennis}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://movieflix-om.vercel.app/">
                <Image
                  src={netflix}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a href="https://www.thecodingsharks.in/">
                <Image
                  src={CodingShark}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/OmJavia/PDF_Searcher">
                <Image
                  src={PDF_Seacrher}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a href="https://apna-mechanic.vercel.app/">
                <Image
                  src={Car}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/OmJavia/Generate_Blogs">
                <Image
                  src={Blog}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"50%"}
                  height={"50%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://tesla-552544.webflow.io/">
                <Image
                  src={tesla}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/portfolio/">
                <Image
                  src={Html}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://evo-dry.vercel.app/">
                <Image
                  src={Dryer}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/Bank_Account/">
                <Image
                  src={Bank_Account}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/Tracker/">
                <Image
                  src={Mapty}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/Dice_Game/">
                <Image
                  src={Dice}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/Guess_The_Number/">
                <Image
                  src={Guess_The_Number}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://physicon-360.anvil.app/">
                <Image
                  src={anvil}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/OmJavia/Open-AI/tree/main">
                <Image
                  src={Ai}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={SignUp}
                className="rounded-lg object-cover border shadow-md hover:scale-105"
                width={"50%"}
                height={"50%"}
                layout="responsive" alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={coming}
                className="rounded-lg object-cover border shadow-md hover:scale-105"
                width={"50%"}
                height={"50%"}
                layout="responsive" alt="" />
            </div>
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
      </main>
    </div >
  );
}
