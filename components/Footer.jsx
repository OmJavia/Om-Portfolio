import Link from "next/link";
import Image from "next/image";
import Icon from "../public/icon.png";
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800/80 py-12 mt-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <Image src={Icon} alt="Om Javia" width={24} height={24} className="object-contain" />
            </div>
            <span className="font-semibold tracking-tight text-sm text-neutral-900 dark:text-neutral-100">
              Om Javia
            </span>
            <span className="font-mono text-[11px] text-neutral-500">
              · Bangalore, India
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Om Javia. Taking connected AI products from idea to launch.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-base text-neutral-500 dark:text-neutral-400">
          <a
            href="https://www.linkedin.com/in/omjavia/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors p-1"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/omjavia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors p-1"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://twitter.com/OmJavia1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors p-1"
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>
          <a
            href="mailto:omjavia18@gmail.com"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors p-1"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        {/* Right: Quick Nav */}
        <nav className="flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <Link href="/#featured-work" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/notes" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Notes
          </Link>
          <Link href="/#how-i-work" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Approach
          </Link>
          <Link href="/#experience" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Experience
          </Link>
          <Link href="/about" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
