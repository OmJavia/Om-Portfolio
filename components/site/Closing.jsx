import { useState } from "react";
import { FiArrowUpRight, FiCopy, FiCheck, FiGithub, FiLinkedin, FiMail, FiFileText, FiCalendar } from "react-icons/fi";
import posthog from "posthog-js";
import { stack, openSource, contact, site } from "@/data/content";
import GlassSurface from "./GlassSurface";
import { Reveal, SectionHeading } from "./primitives";

const groupTone = ["bg-cobalt", "bg-signal-lime", "bg-signal-teal", "bg-signal-coral", "bg-ink"];

export function Stack() {
  return (
    <section id="stack" className="container-x py-20 sm:py-28">
      <SectionHeading eyebrow="Technical stack" title="Tools I have shipped with." />
      <div className="mt-12 divide-y divide-line border-y border-line">
        {stack.map((g, i) => (
          <Reveal key={g.group} className="grid gap-4 py-6 md:grid-cols-12">
            <h3 className="flex items-center gap-3 font-medium text-ink md:col-span-4">
              <span aria-hidden className={`h-2.5 w-2.5 rounded-sm ${groupTone[i]}`} />
              {g.group}
            </h3>
            <ul className="flex flex-wrap gap-2 md:col-span-8">
              {g.items.map((s) => (
                <li key={s} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-ink transition-colors hover:border-ink/40">{s}</li>
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
    <section id="open-source" className="container-x pb-20 sm:pb-28">
      <SectionHeading eyebrow="Open source & experiments" title="Code you can read." />
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {openSource.map((r, i) => (
          <Reveal as="li" key={r.name} delay={i * 0.06}>
            <a
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-ink/30"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                <span className="inline-flex items-center gap-1.5"><FiGithub aria-hidden /> {r.kind}</span>
                <FiArrowUpRight aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-5 font-mono text-lg font-medium text-ink">{r.name}</h3>
              <p className="mt-2 text-sm text-muted">{r.description}</p>
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
    <section id="contact" className="relative overflow-hidden border-t border-line py-20 sm:py-32">
      <div aria-hidden className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-signal-coral/25 blur-3xl" />
      <div aria-hidden className="absolute -right-10 bottom-0 h-96 w-96 rounded-full bg-cobalt/20 blur-3xl" />
      <div className="container-x relative">
        <GlassSurface className="rounded-[32px] p-8 sm:p-14">
          <h2 className="max-w-3xl font-display text-display-lg text-ink">{contact.headline}</h2>
          <p className="mt-5 max-w-2xl text-body-lg text-muted">{contact.copy}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Let's talk")}`}
              onClick={() => posthog.capture("email_clicked", { source: "contact_section" })}
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-ink px-6 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <FiMail aria-hidden /> Start a Conversation
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-line bg-white px-6 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              <FiLinkedin aria-hidden /> Connect on LinkedIn
            </a>
          </div>
          <ul className="mt-10 grid gap-3 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <button type="button" onClick={copy} className="inline-flex min-h-[44px] items-center gap-2 text-ink hover:text-cobalt">
                {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
                <span>{copied ? "Email copied" : site.email}</span>
              </button>
              <span className="sr-only" aria-live="polite">{copied ? "Email address copied to clipboard" : ""}</span>
            </li>
            <li><a href={site.links.github} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-ink hover:text-cobalt"><FiGithub aria-hidden /> GitHub</a></li>
            <li><a href={site.resume} onClick={() => posthog.capture("resume_clicked", { source: "contact_section" })} className="inline-flex min-h-[44px] items-center gap-2 text-ink hover:text-cobalt"><FiFileText aria-hidden /> Résumé (PDF)</a></li>
            <li><a href={site.calendar} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-ink hover:text-cobalt"><FiCalendar aria-hidden /> Book 15 minutes</a></li>
          </ul>
        </GlassSurface>
      </div>
    </section>
  );
}
