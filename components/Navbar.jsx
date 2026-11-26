import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Icon from "../public/icon.png";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const goHome = (event) => {
    setIsMenuOpen(false);
    if (router.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        router.replace("/", undefined, { shallow: true, scroll: false });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`mx-auto max-w-5xl flex items-center justify-between px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-neutral-200/90 dark:border-neutral-800/80 bg-[#faf8f5]/90 dark:bg-[#0c0c0e]/90 backdrop-blur-md shadow-sm"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Brand / Name */}
        <Link href="/" onClick={goHome} className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7 rounded-full overflow-hidden border border-neutral-300/80 dark:border-neutral-700/80 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image src={Icon} alt="Om Javia" width={28} height={28} className="object-contain" priority />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-[#ea580c] dark:group-hover:text-[#f97316] transition-colors">
              Om Javia
            </span>
          </div>
        </Link>

        {/* Center Editorial Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <Link
            href="/#featured-work"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/notes"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
          >
            Notes
          </Link>
          <Link
            href="/#how-i-work"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
          >
            Approach
          </Link>
          <Link
            href="/#experience"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/about"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right Controls: Resume & Theme */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="/resume.pdf"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-medium px-3 py-1.5 rounded-lg border border-neutral-200/90 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 transition-all shadow-sm"
          >
            <span>Resume</span>
            <FiArrowUpRight className="text-xs opacity-70" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <BsSunFill className="text-amber-400 text-sm" />
            ) : (
              <BsFillMoonStarsFill className="text-neutral-700 text-sm" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX className="text-lg" /> : <HiMenuAlt3 className="text-lg" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-5xl rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-[#faf8f5]/95 dark:bg-[#0c0c0e]/95 backdrop-blur-xl p-5 shadow-xl flex flex-col gap-3 text-sm font-medium text-neutral-800 dark:text-neutral-200">
          <Link
            href="/#featured-work"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
          >
            Work
          </Link>
          <Link
            href="/notes"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
          >
            Notes
          </Link>
          <Link
            href="/#how-i-work"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
          >
            Approach
          </Link>
          <Link
            href="/#experience"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
          >
            Experience
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
            <a
              href="/resume.pdf"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-1.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200"
            >
              <span>Download Resume</span>
              <FiArrowUpRight className="text-xs" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
