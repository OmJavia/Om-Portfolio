import { FiArrowUpRight } from "react-icons/fi";
import { getVisibleAchievements } from "@/data";
import { CountUp, Reveal } from "./primitives";

export default function Proof() {
  const items = getVisibleAchievements();

  return (
    <section aria-labelledby="proof-title" className="container-x pb-20 sm:pb-24">
      <h2 id="proof-title" className="eyebrow">Proof of execution</h2>
      <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {items.map((m, i) => (
          <Reveal as="li" key={m.id} delay={i * 0.05} className="flex flex-col bg-surface p-6 sm:p-7">
            <span aria-hidden className="h-0.5 w-8 bg-accent" />
            <p className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-[2.75rem]">
              <CountUp value={m.value} decimals={m.decimals} prefix={m.prefix} suffix={m.suffix} />
            </p>
            <p className="mt-2.5 text-sm font-medium text-ink">{m.label}</p>
            <div className="mt-auto pt-6">
              <p className="text-sm font-medium text-muted">{m.associatedItem}</p>
              <p className="mt-1 text-xs text-muted">{m.description}</p>
              {m.href && (
                <a href={m.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline">
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
