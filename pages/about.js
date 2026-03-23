
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Icon from "../public/icon.png";
import peeps from "../public/Om_pic.jpg";


export default function About() {
  const [darkMode, setDarkMode] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const accentColors = ["#3b82f6"];

  const cycleColor = () => {
    setColorIndex((prev) => (prev + 1) % accentColors.length);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>About | Om Javia</title>
        <meta name="description" content="Learn more about Om Javia, an AI Engineer and Full-stack Developer." />
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
        <div className="flex-none">
          <ul className="hidden lg:flex items-center gap-6 text-xl font-bold">
            <li><Link href="/" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Home</Link></li>
            <li><Link href="/about" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" style={{ color: accentColors[colorIndex], backgroundColor: accentColors[colorIndex] + '15' }}>About</Link></li>
            <li><Link href="/#skills" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Skills</Link></li>
            <li><Link href="/#experience" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Experience</Link></li>
            <li><Link href="/#projects" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Projects</Link></li>
            <li><Link href="/contact" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Contact</Link></li>
          </ul>
        </div>

        {/* Right Side Group */}
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
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white hover:opacity-70" />
          </div>
        </div>
      </nav>

      <main className="min-h-screen pt-32 p-5 md:px-20 lg:px-40 dark:bg-black transition-colors duration-300">
        <section className="flex flex-col lg:flex-row items-start justify-between gap-12 mt-10">

          {/* Left Column: Image */}
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <Image src={peeps} width={400} height={500} alt="Om Javia" className="relative rounded-3xl shadow-2xl object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

          {/* Right Column: Bio & Info */}
          <div className="flex-[1.5] space-y-8">
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white leading-[0.8]">
                About
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-5xl md:text-7xl font-bold italic" style={{ color: accentColors[colorIndex] }}>ME</span>
                <span className="text-6xl animate-bounce">😜</span>
              </div>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              <p>
                🤵 I am <span className="font-bold underline decoration-2 decoration-blue-500" style={{ color: accentColors[colorIndex] }}>Om Javia</span>, an AI Engineer based in Bangalore, India. Currently, I am at <span className="font-bold italic">Metashot</span>, where I specialize in building real-time computer vision systems and scalable AI solutions.
              </p>
              <p>
                🚀 My expertise lies in <span className="font-bold" style={{ color: accentColors[colorIndex] }}>Computer Vision, Python, and Machine Learning</span>. From engineering obstacle-aware path planning for rovers at <span className="font-bold">ISRO</span> to deploying high-performance ML models at scale, I enjoy solving complex problems that bridge the gap between artificial intelligence and user experience.
              </p>
              <p>
                🎓 I hold a Bachelor of Technology in Computer Science from <span className="font-bold italic">Medi-Caps University</span> (CGPA 9.0/10), with a specialization in Cloud Technology and Information Security.
              </p>
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
        </section>

        <footer className="mt-24 py-10 text-center text-gray-500 text-sm border-t dark:border-gray-800">
          <p>© 2025 <Link href="/" className="hover:underline">Om Javia</Link>. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
