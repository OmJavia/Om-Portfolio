<<<<<<< HEAD
import { useRef } from 'react';

export default function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null);

  const move = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${event.clientX - rect.left}px`);
    el.style.setProperty('--y', `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      className={`spotlight-card group relative overflow-hidden rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(500px circle at var(--x) var(--y), rgba(249,115,22,.13), transparent 42%)' }} />
      <div className="relative z-10">{children}</div>
    </div>
=======
"use client";
import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * SpotlightCard — A Vercel/Linear-inspired card with a
 * mouse-following radial gradient glow effect.
 *
 * Usage:
 *   <SpotlightCard className="p-6 rounded-3xl ...">
 *     {children}
 *   </SpotlightCard>
 */
export default function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(249, 115, 22, 0.12)",
  glowSize = 500,
  animationVariants = null,
  delay = 0,
}) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.setProperty("--glow-color", glowColor);
    card.style.setProperty("--glow-size", `${glowSize}px`);
  }, [glowColor, glowSize]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    // Smoothly fade glow when mouse leaves
    card.style.setProperty("--x", "50%");
    card.style.setProperty("--y", "50%");
  }, []);

  const defaultVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className={`spotlight-wrapper ${className}`}
      style={{
        "--x": "50%",
        "--y": "50%",
        "--glow-color": glowColor,
        "--glow-size": `${glowSize}px`,
        position: "relative",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={animationVariants || defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Mouse-following radial gradient overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: `radial-gradient(var(--glow-size) circle at var(--x) var(--y), var(--glow-color), transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Content sits above the glow layer */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </motion.div>
>>>>>>> b33423f (Updated Theme of the website)
  );
}
