import { useState } from "react";
import { FiArrowUpRight, FiCopy, FiCheck, FiGithub, FiLinkedin, FiMail, FiFileText, FiCalendar } from "react-icons/fi";
import posthog from "posthog-js";
import { stack, openSource, contact, site } from "@/data/content";
import { Reveal, SectionHeading } from "./primitives";

export function Stack() {
  return (
    <section id="stack" className="container-x py-20 sm:py-24">
      <SectionHeading eyebrow="Technical stack" title="Tools I have shipped with." />
      <div className="mt-12 divide-y divide-line border-y border-line">
        {stack.map((g) => (
          <Reveal key={g.group} className="grid gap-4 py-6 md:grid-cols-12">
            <h3 className="flex items-center gap-3 text-sm font-semibold text-ink md:col-span-4">
              <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
              {g.group}
            </h3>
            <ul className="flex flex-wrap gap-2 md:col-span-8">
              {g.items.map((s) => (
                <li key={s} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-ink transition-colors hover:border-ink/30">{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function OpenSource() {
  return (
    <section id="open-source" className="container-x pb-20 sm:pb-24">
      <SectionHeading eyebrow="Open source & experiments" title="Code you can read." />
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {openSource.map((r, i) => (
          <Reveal as="li" key={r.name} delay={i * 0.05}>
            <a
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink/30"
            >
              <div className="flex items-center justify-between text-xs font-medium text-muted">
                <span className="inline-flex items-center gap-1.5 text-accent"><FiGithub aria-hidden /> {r.kind}</span>
                <FiArrowUpRight aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.description}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {r.tags.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="border-t border-line bg-subtle py-20 sm:py-24">
      <div className="container-x">
        <div className="rounded-2xl border border-line bg-surface p-8 sm:p-12">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 max-w-3xl text-display-lg font-semibold text-ink">{contact.headline}</h2>
          <p className="mt-4 max-w-2xl text-body-lg text-muted">{contact.copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Let's talk")}`}
              onClick={() => posthog.capture("email_clicked", { source: "contact_section" })}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <FiMail aria-hidden /> Start a Conversation
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-surface px-6 text-sm font-medium text-ink transition-colors hover:border-ink/30"
            >
              <FiLinkedin aria-hidden /> Connect on LinkedIn
            </a>
          </div>
          <ul className="mt-10 grid gap-3 border-t border-line pt-7 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <button type="button" onClick={copy} className="inline-flex min-h-[44px] items-center gap-2 font-medium text-ink hover:text-accent">
                {copied ? <FiCheck aria-hidden className="text-accent" /> : <FiCopy aria-hidden className="text-muted" />}
                <span>{copied ? "Email copied" : site.email}</span>
              </button>
              <span className="sr-only" aria-live="polite">{copied ? "Email address copied to clipboard" : ""}</span>
            </li>
            <li><a href={site.links.github} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 font-medium text-ink hover:text-accent"><FiGithub aria-hidden className="text-muted" /> GitHub</a></li>
            <li><a href={site.resume} download="Om_Javia_Resume.pdf" onClick={() => posthog.capture("resume_clicked", { source: "contact_section" })} className="inline-flex min-h-[44px] items-center gap-2 font-medium text-ink hover:text-accent"><FiFileText aria-hidden className="text-muted" /> Résumé (PDF)</a></li>
            <li><a href={site.calendar} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 font-medium text-ink hover:text-accent"><FiCalendar aria-hidden className="text-muted" /> Book 15 minutes</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
