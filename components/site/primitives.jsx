import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};
export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

export const buttonVariants = {
  primary:
    "inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-hover",
  secondary:
    "inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-surface px-5 text-sm font-medium text-ink transition-colors hover:border-ink/30",
  ghost:
    "inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium text-muted transition-colors hover:text-ink",
};

export function TagList({ items, label = "Technologies", className }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Reveal({ as = "div", className, children, delay = 0, ...props }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } } }}
      {...props}
    >
      {children}
    </M>
  );
}

export function SectionHeading({ eyebrow, title, intro, dark = false, className }) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className={cn("eyebrow", dark && "text-white/65")}>{eyebrow}</p>
      <h2 className={cn("mt-3 text-display-lg font-semibold", dark ? "text-white" : "text-ink")}>{title}</h2>
      {intro && <p className={cn("mt-4 max-w-2xl text-body-lg", dark ? "text-white/75" : "text-muted")}>{intro}</p>}
    </Reveal>
  );
}

export function CountUp({ value, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [shown, setShown] = useState(value);
  const started = useRef(false);
  const still = useRef(true);

  useEffect(() => {
    still.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!still.current) setShown(0);
  }, []);

  useEffect(() => {
    if (!inView || started.current || still.current) return;
    started.current = true;
    const controls = animate(0, value, { duration: 1.2, ease, onUpdate: setShown });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden>{prefix}{shown.toFixed(decimals)}{suffix}</span>
      <span className="sr-only">{prefix}{value.toFixed(decimals)}{suffix}</span>
    </span>
  );
}
