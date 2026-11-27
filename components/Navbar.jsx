import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from "react-icons/fi";
import posthog from "posthog-js";
import { navigationItems, profile } from "@/data";
import GlassSurface from "./site/GlassSurface";

export default function Navbar({ onOpenCommand }) {
  const router = useRouter();
  const onHome = router.pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const firstLinkRef = useRef(null);
  const href = (id) => (onHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    if (!onHome) return;
    const sections = navigationItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [onHome]);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <GlassSurface as="nav" aria-label="Main" className="mx-auto flex max-w-[1160px] items-center justify-between rounded-2xl px-3 py-2 sm:px-4">
        <Link href="/" className="flex items-center gap-2.5 rounded-lg px-1 py-1" aria-label={`${profile.name}, home`}>
          <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-sm font-semibold text-white">
            OJ
          </span>
          <span className="text-sm font-semibold tracking-tight text-ink">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((n) => (
            <li key={n.id} className="relative">
              <Link
                href={href(n.id)}
                aria-current={active === n.id ? "location" : undefined}
                className={`relative z-10 block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === n.id ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                {n.label}
              </Link>
              {active === n.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg bg-accent-soft"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {onOpenCommand && (
            <button
              type="button"
              onClick={onOpenCommand}
              aria-label="Open command menu (Command + K)"
              className="hidden h-10 items-center gap-1.5 rounded-xl border border-line bg-surface px-3 text-xs font-medium text-muted transition-colors hover:border-ink/30 hover:text-ink xl:inline-flex"
            >
              <span>⌘K</span>
            </button>
          )}
          <a
            href={profile.resumeUrl}
            download="Om_Javia_Resume.pdf"
            onClick={() => posthog.capture("resume_downloaded", { source: "navbar_desktop" })}
            className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-line bg-surface px-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/30"
          >
            <FiDownload aria-hidden className="text-accent" />
            <span>Resume</span>
          </a>
          <Link
            href={href("contact")}
            className="hidden h-10 items-center gap-1.5 rounded-xl bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            Let&apos;s Talk <FiArrowUpRight aria-hidden />
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </GlassSurface>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-[1160px] rounded-2xl border border-line bg-surface p-3 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col">
              {navigationItems.map((n, i) => (
                <li key={n.id}>
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={href(n.id)}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] items-center rounded-xl px-4 text-base font-medium text-ink hover:bg-canvas"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-line pt-3">
              <Link href={href("contact")} onClick={() => setOpen(false)} className="flex h-12 items-center justify-center rounded-xl bg-accent text-sm font-medium text-white">
                Let&apos;s Talk
              </Link>
              <a
                href={profile.resumeUrl}
                download="Om_Javia_Resume.pdf"
                onClick={() => {
                  posthog.capture("resume_downloaded", { source: "navbar_mobile" });
                  setOpen(false);
                }}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-line text-sm font-medium text-ink"
              >
                <FiDownload aria-hidden className="text-accent" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
