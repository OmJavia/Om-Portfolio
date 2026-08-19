import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const answers = {
  experience: 'Om has shipped AI, computer-vision and product systems across research and production environments.',
  skills: 'Core strengths: Python, computer vision, RAG, LLM systems, React/Next.js and production APIs.',
  projects: 'Try asking about NirmanBook, Mars Rover, Metashot, RAG or frontend architecture.'
};

export default function AiAssistantModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState('Ready. Query Om\'s AI portfolio knowledge base.');

  const ask = (e) => {
    e.preventDefault();
    const key = Object.keys(answers).find((k) => query.toLowerCase().includes(k));
    setOutput(key ? answers[key] : 'Retrieval complete. Ask about Om\'s experience, skills, projects, or architecture.');
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="group mt-5 inline-flex items-center gap-3 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 font-mono text-xs text-electric backdrop-blur-xl"
        animate={{ boxShadow: ['0 0 0 rgba(56,189,248,0)', '0 0 28px rgba(56,189,248,.18)', '0 0 0 rgba(56,189,248,0)'] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_12px_rgba(56,189,248,.8)]" />
        Query Om&apos;s AI
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-obsidian shadow-2xl" initial={{ y: 24, scale: .97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 24, scale: .97 }}>
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div><p className="font-mono text-[10px] uppercase tracking-widest text-electric">RAG / portfolio-index</p><h3 className="mt-1 text-lg font-bold text-white">Om&apos;s AI Assistant</h3></div>
                <button onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white" aria-label="Close AI assistant">Esc</button>
              </div>
              <div className="p-5">
                <div className="min-h-32 rounded-2xl border border-border bg-black/40 p-4 font-mono text-xs leading-6 text-zinc-300"><span className="text-electric">$ retrieval</span> <span className="text-zinc-500">›</span><br />{output}</div>
                <form onSubmit={ask} className="mt-4 flex gap-2">
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask about Om..." className="min-w-0 flex-1 rounded-xl border border-border bg-surface px-4 py-3 font-mono text-xs text-white outline-none focus:border-electric" />
                  <button className="rounded-xl bg-neural px-4 py-3 font-mono text-xs font-bold text-white">Run</button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
