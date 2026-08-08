import Link from "next/link";
import Image from "next/image";
import Icon from "../public/icon.png";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800/80 bg-[#f5f4f2]/50 dark:bg-[#0a0a0a]/50 py-12 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand info */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <Image src={Icon} alt="Om Javia" width={28} height={28} className="object-contain" />
            </div>
            <span className="font-semibold tracking-tight text-sm text-neutral-900 dark:text-neutral-100">
              Om Javia
            </span>
            <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
              AI Product Engineer
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Om Javia. Building high-agency AI products.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-xl text-neutral-600 dark:text-neutral-400">
          <a
            href="https://www.linkedin.com/in/omjavia/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff6b00] dark:hover:text-[#ff6b00] transition-colors"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/omjavia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff6b00] dark:hover:text-[#ff6b00] transition-colors"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/OmJavia1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff6b00] dark:hover:text-[#ff6b00] transition-colors"
            aria-label="Twitter"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://instagram.com/om_javia_"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff6b00] dark:hover:text-[#ff6b00] transition-colors"
            aria-label="Instagram"
          >
            <AiFillInstagram />
          </a>
          <a
            href="mailto:omjavia18@gmail.com"
            className="hover:text-[#ff6b00] dark:hover:text-[#ff6b00] transition-colors"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>

        {/* Right: Quick Nav */}
        <nav className="flex items-center gap-4 text-xs font-medium text-neutral-600 dark:text-neutral-400">
          <Link href="/" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Home
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
