"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * MetricCounter — Animated number counter that fires when
 * scrolled into view. Uses JetBrains Mono for premium tech look.
 *
 * Usage:
 *   <MetricCounter value={87.4} suffix="%" decimals={1} />
 *   <MetricCounter value={33} suffix="%" prefix="+" />
 *
 * Props:
 *   - value: target number to count to
 *   - suffix: string appended after number (e.g., "%", "K+")
 *   - prefix: string prepended before number (e.g., "+")
 *   - decimals: number of decimal places (default: 0)
 *   - duration: animation duration in seconds (default: 1.8)
 *   - className: additional classes for the container
 *   - showPing: show amber pulse ring while counting (default: true)
 */
export default function MetricCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.8,
  className = "",
  showPing = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState("0");
  const [isCounting, setIsCounting] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      setIsCounting(true);

      const controls = animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // custom ease-out-expo
        onUpdate: (latest) => {
          setDisplayValue(latest.toFixed(decimals));
        },
        onComplete: () => {
          setIsCounting(false);
          setDisplayValue(value.toFixed(decimals));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, decimals, duration]);

  return (
    <span
      ref={ref}
      className={`relative inline-flex items-center gap-0.5 ${className}`}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {/* Pulsing amber ring while counting */}
      {showPing && isCounting && (
        <span
          aria-hidden
          className="absolute -inset-1 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)",
            animation: "ping-ring 1.2s cubic-bezier(0,0,0.2,1) infinite",
          }}
        />
      )}
      <span
        className="font-mono font-bold tabular-nums text-[#38bdf8] relative"
        style={{ fontFamily: '"JetBrains Mono", monospace' }}
      >
        {prefix}
        {displayValue}
        {suffix}
      </span>
    </span>
  );
}
