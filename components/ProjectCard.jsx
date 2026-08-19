import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaTools, FaBookOpen } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function ProjectCard({ title, category, description, architecture, hurdles, bullets = [], image, tags = [], liveUrl, githubUrl, caseStudyUrl }) {
  const [open, setOpen] = useState(false);
  const detailed = ['NirmanBook', 'Mars Rover Path Planning', 'Metashot'].includes(title);

  return (
    <>
      <SpotlightCard className="cursor-pointer" >
        <button onClick={() => setOpen(true)} className="block w-full text-left" aria-label={`Open ${title} project details`}>
          <div className="relative aspect-video overflow-hidden bg-black/30">
            {image && <Image src={image} alt={`${title} project preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-2 transition duration-700 group-hover:scale-[1.03]" />}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <span className="font-mono text-[10px] uppercase tracking-[.18em] text-electric">{category}</span>
            <h3 className="mt-2 font-heading text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-black/20 px-2.5 py-1 font-mono text-[9px] text-zinc-400">{tag}</span>)}</div>
          </div>
        </button>
      </SpotlightCard>

      <AnimatePresence>
        {open && <motion.div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-border bg-obsidian shadow-2xl" initial={{ y: 24, opacity: 0, scale: .98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 24, opacity: 0, scale: .98 }}>
            <button onClick={() => setOpen(false)} className="absolute right-5 top-5 z-20 rounded-full border border-border bg-black/50 p-2 text-zinc-400 hover:text-white" aria-label="Close project details"><FaTimes /></button>
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="border-b border-border bg-black/20 p-6 lg:border-b-0 lg:border-r"><div className="relative aspect-video overflow-hidden rounded-2xl border border-border">{image && <Image src={image} alt={`${title} project preview`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain p-3" priority={title === 'NirmanBook'} />}</div><div className="mt-4 flex gap-2">{caseStudyUrl && <Link href={caseStudyUrl} className="flex-1 rounded-xl bg-neural px-4 py-3 text-center text-sm font-semibold text-white"><FaBookOpen className="mr-2 inline" />Case Study</Link>}{liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" className="flex-1 rounded-xl border border-border px-4 py-3 text-center text-sm text-white"><FaExternalLinkAlt className="mr-2 inline" />Live</a>}{githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer" className="flex-1 rounded-xl border border-border px-4 py-3 text-center text-sm text-white"><FaGithub className="mr-2 inline" />GitHub</a>}</div></div>
              <div className="p-7 sm:p-10"><span className="font-mono text-[10px] uppercase tracking-widest text-electric">{category}</span><h2 className="mt-2 font-heading text-3xl font-extrabold text-white sm:text-4xl">{title}</h2><p className="mt-4 text-zinc-400 leading-7">{description}</p>{detailed && <div className="mt-8"><h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-white">System Architecture</h4><ArchitectureDiagram title={title} /></div>}<div className="mt-8"><h4 className="mb-3 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-white"><FaTools className="text-neural" /> Technical Challenges</h4><p className="rounded-2xl border border-neural/15 bg-neural/5 p-4 text-sm leading-6 text-zinc-400">{hurdles}</p></div><div className="mt-8"><h4 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Stack</h4><div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs text-zinc-300">{tag}</span>)}</div></div></div>
            </div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
