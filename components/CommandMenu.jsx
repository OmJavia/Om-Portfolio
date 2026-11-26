import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiCode,
  FiCopy,
  FiFileText,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiSearch,
  FiUser,
  FiX,
} from "react-icons/fi";
import { site } from "@/data/content";

export default function CommandMenu({ open, onOpenChange }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);

  const actions = useMemo(() => {
    const go = (href) => {
      onOpenChange(false);
      router.push(href);
    };
    const openExternal = (url) => {
      onOpenChange(false);
      window.open(url, "_blank", "noopener,noreferrer");
    };
    const copyEmail = async () => {
      try {
        await navigator.clipboard.writeText(site.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onOpenChange(false);
        }, 900);
      } catch {
        window.location.href = `mailto:${site.email}`;
        onOpenChange(false);
      }
    };

    return [
      { id: "work", group: "Navigate", label: "Go to Flagship Work (Pickl+)", icon: FiLayers, run: () => go("/#work") },
      { id: "projects", group: "Navigate", label: "Go to Featured Projects", icon: FiCode, run: () => go("/#projects") },
      { id: "experience", group: "Navigate", label: "Go to Experience", icon: FiBriefcase, run: () => go("/#experience") },
      { id: "stack", group: "Navigate", label: "Go to Technical Stack", icon: FiCode, run: () => go("/#stack") },
      { id: "about", group: "Navigate", label: "Go to About", icon: FiUser, run: () => go("/about") },
      { id: "notes", group: "Navigate", label: "Go to Engineering Notes", icon: FiFileText, run: () => go("/notes") },
      { id: "contact", group: "Navigate", label: "Contact Om", icon: FiMail, run: () => go("/#contact") },
      { id: "resume", group: "Actions", label: "Open Résumé (PDF)", icon: FiFileText, run: () => openExternal(site.resume) },
      { id: "copy-email", group: "Actions", label: copied ? "Email copied!" : `Copy Email (${site.email})`, icon: copied ? FiCheck : FiCopy, run: copyEmail },
      { id: "calendar", group: "Actions", label: "Book 15 minutes (Cal.com)", icon: FiCalendar, run: () => openExternal(site.calendar) },
      { id: "linkedin", group: "Links", label: "Open LinkedIn", icon: FiLinkedin, run: () => openExternal(site.links.linkedin) },
      { id: "github", group: "Links", label: "Open GitHub", icon: FiGithub, run: () => openExternal(site.links.github) },
    ];
  }, [copied, onOpenChange, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) => a.label.toLowerCase().includes(q) || a.group.toLowerCase().includes(q)
    );
  }, [actions, query]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const target = e.target;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        if (isInput && !open) return;
        e.preventDefault();
        onOpenChange(!open);
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const onInputKeyDown = (e) => {
    if (!filtered.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => (s + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => (s - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[selected]?.run();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
        >
          <div
            aria-hidden
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-ink/35 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <FiSearch aria-hidden className="shrink-0 text-muted" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Jump to a section, open résumé, or copy email…"
                aria-label="Filter commands"
                className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
              />
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Close command menu"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-muted hover:bg-canvas hover:text-ink"
              >
                <FiX />
              </button>
            </div>

            <ul
              role="listbox"
              aria-label="Available commands"
              className="max-h-[340px] overflow-y-auto p-2"
            >
              {filtered.length === 0 ? (
                <li className="px-3 py-8 text-center text-sm text-muted">
                  No matching commands.
                </li>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  const active = idx === selected;
                  return (
                    <li key={item.id} role="option" aria-selected={active}>
                      <button
                        type="button"
                        onMouseEnter={() => setSelected(idx)}
                        onClick={item.run}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                          active ? "bg-canvas text-ink" : "text-muted hover:text-ink"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <Icon aria-hidden className={active ? "text-cobalt" : "text-muted"} />
                          <span className="font-medium text-ink">{item.label}</span>
                        </span>
                        <span className="flex items-center gap-2 font-mono text-[11px] text-muted">
                          {item.group}
                          {active && <FiArrowRight aria-hidden className="text-cobalt" />}
                        </span>
                      </button>
                    </li>
                  );
                })
              )}
            </ul>

            <div className="flex items-center justify-between border-t border-line bg-canvas/60 px-4 py-2 font-mono text-[11px] text-muted">
              <span>↑↓ navigate · ↵ select</span>
              <span>ESC to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
