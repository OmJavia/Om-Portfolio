import { FiArrowUpRight } from "react-icons/fi";
import { metrics } from "@/data/content";
import { CountUp, Reveal } from "./primitives";

const tones = {
  coral: "bg-signal-coral",
  cobalt: "bg-cobalt",
  teal: "bg-signal-teal",
  lime: "bg-signal-lime",
};

export default function Proof() {
  return (
    <section aria-labelledby="proof-title" className="container-x pb-20 sm:pb-28">
      <h2 id="proof-title" className="eyebrow">Proof of execution</h2>
      <ul className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal as="li" key={m.project} delay={i * 0.06} className="flex flex-col bg-surface p-6 sm:p-7">
            <span aria-hidden className={`h-1 w-10 rounded-full ${tones[m.tone]}`} />
            <p className="mt-6 font-display text-[3.25rem] leading-none text-ink sm:text-6xl">
              <CountUp value={m.value} decimals={m.decimals} prefix={m.prefix} suffix={m.suffix} />
            </p>
            <p className="mt-3 text-sm font-medium text-ink">{m.measure}</p>
            <div className="mt-auto pt-6">
              <p className="text-sm text-muted">{m.project}</p>
              <p className="mt-1 font-mono text-[11px] text-muted">{m.context}</p>
              {m.href && (
                <a href={m.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cobalt hover:underline">
                  View campaign <FiArrowUpRight aria-hidden />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
