import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navigationItems, profile, siteConfig } from "@/data";

export default function Footer() {
  return (
    <footer className="surface-night border-t border-line/20">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-xl font-semibold tracking-tight text-white">{profile.name}</p>
          <p className="mt-1 text-sm font-medium text-white/60">{profile.positioning}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            {siteConfig.footerTagline}
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-2.5 text-sm text-white/75">
            {navigationItems.map((n) => (
              <li key={n.id}>
                <Link href={`/#${n.id}`} className="transition-colors hover:text-white">{n.label}</Link>
              </li>
            ))}
            <li><Link href="/notes" className="transition-colors hover:text-white">Notes</Link></li>
          </ul>
        </nav>
        <div className="md:col-span-3">
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><FiLinkedin aria-hidden /> LinkedIn</a></li>
            <li><a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><FiGithub aria-hidden /> GitHub</a></li>
            <li><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white"><FiMail aria-hidden /> {profile.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="container-x flex flex-col gap-2 border-t border-white/10 py-6 text-xs font-medium text-white/55 sm:flex-row sm:justify-between">
        <span>© {siteConfig.copyrightYear} {profile.name}</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
