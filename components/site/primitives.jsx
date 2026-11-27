import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};
export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

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
