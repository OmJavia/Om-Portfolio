import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "../public/icon.png";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between gap-4 px-4 py-2.5 rounded-full border backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-neutral-300/80 dark:border-neutral-800/80 bg-white/85 dark:bg-neutral-900/85 shadow-lg shadow-black/5 dark:shadow-black/40"
            : "border-neutral-200/70 dark:border-neutral-800/70 bg-white/70 dark:bg-neutral-900/70 shadow-sm"
        }`}
      >
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-neutral-300/80 dark:border-neutral-700/80 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image src={Icon} alt="Om Javia" width={36} height={36} className="object-contain" />
          </div>
          <span className="font-semibold tracking-tight text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-[#ff6b00] dark:group-hover:text-[#ff6b00] transition-colors">
            Om Javia
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-1 font-medium text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="px-3.5 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-all"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              className="px-3.5 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-all"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="px-3.5 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume Pill */}
          <a
            href="https://drive.google.com/file/d/1piCpXUSJk7BZzov8hJe--R90HaqbKr5L/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-[510] tracking-[-0.011em] whitespace-nowrap transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 chroma-text-animate-parent border border-black/[0.08] bg-white text-[#1c1d1f] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_-2px_rgba(0,0,0,0.05)] [--foreground:#1c1d1f] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_8px_20px_-4px_rgba(0,0,0,0.08)] h-10 px-6 py-2.5 has-[>svg]:px-4"
          >
            <span className="chroma-text-out chroma-text-out-animate">Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-right"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
          </a>

          {/* Schedule Meeting CTA */}
          <a
            href="https://cal.com/Om-Javia"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-[510] tracking-[-0.011em] whitespace-nowrap transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 chroma-text-animate-parent border border-black/[0.08] bg-white text-[#1c1d1f] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_-2px_rgba(0,0,0,0.05)] [--foreground:#1c1d1f] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_8px_20px_-4px_rgba(0,0,0,0.08)] h-10 px-6 py-2.5 has-[>svg]:px-4"
          >
            <span className="chroma-text-out chroma-text-out-animate">Meeting</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-right"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <BsSunFill className="text-amber-400 text-sm" />
            ) : (
              <BsFillMoonStarsFill className="text-neutral-700 text-sm" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <HiX className="text-lg" /> : <HiMenuAlt3 className="text-lg" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-6xl rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl p-4 shadow-xl flex flex-col gap-3 font-medium text-sm text-neutral-800 dark:text-neutral-200">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Home
          </Link>
          <Link
            href="/#projects"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Experience
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Contact
          </Link>

          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
            <a
              href="https://drive.google.com/file/d/1piCpXUSJk7BZzov8hJe--R90HaqbKr5L/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-[510] tracking-[-0.011em] whitespace-nowrap transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 chroma-text-animate-parent border border-black/[0.08] bg-white text-[#1c1d1f] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_-2px_rgba(0,0,0,0.05)] [--foreground:#1c1d1f] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_8px_20px_-4px_rgba(0,0,0,0.08)] h-10 px-6 py-2.5 has-[>svg]:px-4"
            >
              <span className="chroma-text-out chroma-text-out-animate">Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-right"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
            </a>
            <a
              href="https://cal.com/Om-Javia"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl text-sm font-[510] tracking-[-0.011em] whitespace-nowrap transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 chroma-text-animate-parent border border-black/[0.08] bg-white text-[#1c1d1f] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_-2px_rgba(0,0,0,0.05)] [--foreground:#1c1d1f] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_8px_20px_-4px_rgba(0,0,0,0.08)] h-10 px-6 py-2.5 has-[>svg]:px-4"
            >
              <span className="chroma-text-out chroma-text-out-animate">Schedule a Meeting</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-right"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
