
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import {
  SiPython, SiJavascript, SiNumpy, SiPandas, SiPytorch,
  SiOpencv, SiMysql, SiMongodb, SiRedis, SiDocker, SiAmazonaws,
  SiGithubactions, SiVercel, SiGit, SiPostman
} from "react-icons/si";

import {
  FaBrain, FaEye, FaLanguage, FaDatabase, FaKeyboard,
  FaLink, FaRobot, FaSearchLocation, FaCubes, FaExternalLinkSquareAlt
} from "react-icons/fa";

import Image from "next/image";
import peeps from "../public/Om_pic.jpg";

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
import Medi from "../public/medi.jpg";
import Ehis from "../public/ehis.jpeg";
import Blog from "../public/Blog.png";
import coming from "../public/coming.jpg";
import NirmanHome from "../public/nirmanbook.png";
import Mars from "../public/Mars.png";
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
import avatar1 from "../public/contact_avatar.png";
import Script from "next/script";
import Logo from "../public/OJ_logo_new.png"
import { MdPalette } from 'react-icons/md';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
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
              <Image src={Logo} alt="Om Javia" width={60} height={60} className="object-contain" />
            </div>
          </Link>
        </div>

        {/* Center: Headings */}
        <ul className="hidden lg:flex items-center gap-6 text-xl font-bold">
          <li><a href="#home" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Home</a></li>
          <li><a href="#skills" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Skills</a></li>
          <li><a href="#experience" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Experience</a></li>
          <li><a href="#projects" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Projects</a></li>
          <li><Link href="/contact" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Contact</Link></li>
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

          <div className="flex items-center gap-4 ml-2">
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-white hover:opacity-70 transition-opacity" />
          </div>
        </div>
      </nav >

      <main className="pt-24 p-5 md:px-20 lg:px-40 dark:bg-black">
        <section id="home" className="scroll-mt-24">
          {/* Hero Content - Two Column */}
          <div
            className="flex flex-col-reverse md:flex-row items-center justify-between px-4 pt-6 pb-12 gap-10 select-none"
          >

            {/* Left: Text */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Badge */}
              {/* <div className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-1 w-fit text-sm text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Hello, I&apos;m an AI Engineer based in India
              </div> */}

              {/* Big Heading */}
              <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                I&apos;m{" "}
                <span style={{ color: accentColors[colorIndex] }}>Om Javia,</span>
                <br />
                <span style={{ color: accentColors[colorIndex] }}>AI</span>{" "}
                Engineer
              </h2>

              <p className="text-gray-500 dark:text-gray-300 text-md md:text-lg leading-7 max-w-lg">
                I build{" "}
                <span style={{ color: accentColors[colorIndex] }}>intelligent systems</span>{" "}
                and scalable AI solutions with a focus on Computer Vision, NLP, and Machine Learning.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 mt-10" onClick={(e) => e.stopPropagation()}>
                <Link
                  href="/contact"
                  className="border-2 font-bold px-8 py-3 rounded-full transition-all"
                  style={{ borderColor: accentColors[colorIndex], color: accentColors[colorIndex], "--hover-bg": accentColors[colorIndex] }}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = accentColors[colorIndex]; e.target.style.color = "white"; }}
                  onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = accentColors[colorIndex]; }}>
                  Hire me
                </Link>
                <a
                  href="https://cal.com/Om-Javia"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white font-bold px-8 py-3.5 rounded-full shadow-xl hover:opacity-90 transition-all"
                  style={{ backgroundColor: accentColors[colorIndex], boxShadow: `0 10px 15px -3px ${accentColors[colorIndex]}66` }}>
                  Schedule a Meeting
                </a>
              </div>

              {/* Social Icons */}
              <div
                className="flex gap-6 text-4xl mt-8 text-gray-600 dark:text-gray-400"
                onClick={(e) => e.stopPropagation()}
                style={{ '--hover-accent': accentColors[colorIndex] }}
              >
                <a href="https://twitter.com/OmJavia1" className="hover:text-[var(--hover-accent)] transition-colors duration-300">
                  <AiFillTwitterCircle />
                </a>
                <a href="https://www.linkedin.com/in/omjavia/" className="hover:text-[var(--hover-accent)] transition-colors duration-300">
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/omjavia" className="hover:text-[var(--hover-accent)] transition-colors duration-300">
                  <AiFillGithub />
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <Image src={peeps} width={380} height={480} alt="Om Javia"
                style={{ borderColor: accentColors[colorIndex], objectFit: 'cover' }}
                className="rounded-2xl shadow-2xl border-4 transition-all duration-500" />
            </div>

          </div>
        </section>
        <section id="about" className="mt-10">
          <div>
            <h3 className="text-3xl font-semibold py-1 dark:text-white">About Me </h3>
            <p className="text-md py-2 leading-7 text-gray-400">
              Hey, I am
              <span style={{ color: accentColors[colorIndex] }}> Om Javia</span> {" "}
              - an AI Engineer who loves building smart, scalable, and impactful AI models.<br />
              I enjoy blending deep learning, computer vision, and backend systems to solve real-world problems and build intelligent products.
            </p>
          </div>
          <div className="lg:grid grid-cols-3 gap-10 text-center">
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
              <Image src={Ehis} width={100} height={100} alt="" className="mx-auto" />
              <h3 className="text-lg font-medium pt-5 pb-2" style={{ color: accentColors[colorIndex] }}>
                Higher Education
              </h3>
              <p className="py-2 dark:text-teal-50">
                Class 10th
              </p>
              <p className="py-2 dark:text-teal-50">
                CBSE
              </p>
              <h4 className="py-4 font-bold" style={{ color: accentColors[colorIndex] }}> The Emerald Heights International School </h4>
              <ul className="space-y-1 dark:text-white">
                <li>CGPA - 8.6</li>
              </ul>
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
              <Image src={Ehis} width={100} height={100} alt="" className="mx-auto" />
              <h3 className="text-xl font-medium pt-5 pb-2 dark:text-amber-300">
                Secondary Education
              </h3>
              <p className="py-2 dark:text-teal-50">
                Class 12th
              </p>
              <p className="py-2 dark:text-teal-50">
                CBSE, Science (PCM)
              </p>
              <h4 className="py-4 text-blue-600 dark:text-amber-500">The Emerald Heights International School</h4>
              <ul className="tools space-y-1 dark:text-white" >
                <li>CGPA - 8.1</li>
              </ul>
            </div>

            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
              <Image src={Medi} width={100} height={50} alt="" className="mx-auto" />
              <h3 className="text-xl font-medium pt-5 pb-2 dark:text-amber-300">
                Senior Secondary Education
              </h3>
              <p className="py-2 dark:text-teal-50">
                Bachelor of Technology (B.Tech)
              </p>
              <p className="py-2 dark:text-teal-50">
                Computer Science and Engineering (CSE)
              </p>
              <h4 className="py-4 text-blue-600 dark:text-amber-500">Medi-Caps University</h4>
              <ul className="space-y-1 dark:text-white">
                <li>CGPA - 9 </li>
              </ul>
            </div>
          </div>
        </section>


        <section id="skills" className="mt-10 mb-20 scroll-mt-24">
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
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 sm:gap-8 items-center">

                {/* Languages */}
                <SiPython className="text-6xl sm:text-7xl text-[#3776AB] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Python" />
                <SiJavascript className="text-6xl sm:text-7xl text-[#F7DF1E] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="JavaScript" />

                {/* AI & ML */}
                <FaEye className="text-6xl sm:text-7xl text-blue-500 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Computer Vision" />
                <FaLanguage className="text-6xl sm:text-7xl text-purple-500 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="NLP" />
                <FaCubes className="text-6xl sm:text-7xl text-indigo-500 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="RAG" />
                <FaKeyboard className="text-6xl sm:text-7xl text-gray-600 dark:text-gray-300 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Prompt Engineering" />
                <FaLink className="text-6xl sm:text-7xl text-slate-700 dark:text-slate-400 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="LangChain" />
                <FaRobot className="text-6xl sm:text-7xl text-yellow-500 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Hugging Face" />
                <FaBrain className="text-6xl sm:text-7xl text-pink-500 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Deep Learning" />
                <SiNumpy className="text-6xl sm:text-7xl text-[#013243] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="NumPy" />
                <SiPandas className="text-6xl sm:text-7xl text-[#150458] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Pandas" />
                <SiPytorch className="text-6xl sm:text-7xl text-[#EE4C2C] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="PyTorch" />
                <SiOpencv className="text-6xl sm:text-7xl text-[#5C3EE8] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="OpenCV" />
                <FaExternalLinkSquareAlt className="text-6xl sm:text-7xl text-teal-500 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Detectron2" />
                <FaSearchLocation className="text-6xl sm:text-7xl text-orange-500 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="YOLO" />

                {/* Databases */}
                <SiMysql className="text-6xl sm:text-7xl text-[#4479A1] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="MySQL" />
                <SiMongodb className="text-6xl sm:text-7xl text-[#47A248] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="MongoDB" />
                <FaDatabase className="text-6xl sm:text-7xl text-emerald-500 hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="ChromaDB" />
                <SiRedis className="text-6xl sm:text-7xl text-[#DC382D] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Redis" />

                {/* DevOps & Tools */}
                <SiDocker className="text-6xl sm:text-7xl text-[#2496ED] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Docker" />
                <SiAmazonaws className="text-6xl sm:text-7xl text-[#232F3E] dark:text-white hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="AWS" />
                <SiGithubactions className="text-6xl sm:text-7xl text-[#2088FF] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="GitHub Actions" />
                <SiVercel className="text-6xl sm:text-7xl text-black dark:text-white hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Vercel" />
                <SiGit className="text-6xl sm:text-7xl text-[#F05032] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Git" />
                <SiPostman className="text-6xl sm:text-7xl text-[#FF6C37] hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-md" title="Postman" />
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-10 scroll-mt-24">
          <div>
            <h3 className="text-3xl font-semibold py-1 dark:text-white">Past Experiences </h3>
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

        <section id="projects" className="scroll-mt-24">
          <div>
            <h3 className="text-3xl py-1 font-semibold dark:text-white">Projects</h3>
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
