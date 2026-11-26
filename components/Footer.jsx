import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { nav, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="surface-night">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-display text-3xl">Om Javia</p>
          <p className="mt-1 font-mono text-meta text-white/60">{site.role}</p>
          <p className="mt-6 max-w-sm text-white/75">
            Building products at the intersection of intelligence, technology and execution.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-2 text-sm text-white/75">
            {nav.map((n) => (
              <li key={n.id}>
                <Link href={`/#${n.id}`} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
            <li><Link href="/notes" className="hover:text-white">Notes</Link></li>
          </ul>
        </nav>
        <div className="md:col-span-3">
          <ul className="space-y-2 text-sm text-white/75">
            <li><a href={site.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><FiLinkedin aria-hidden /> LinkedIn</a></li>
            <li><a href={site.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><FiGithub aria-hidden /> GitHub</a></li>
            <li><a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white"><FiMail aria-hidden /> {site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="container-x flex flex-col gap-2 border-t border-white/10 py-6 font-mono text-meta text-white/50 sm:flex-row sm:justify-between">
        <span>© 2026 Om Javia</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
