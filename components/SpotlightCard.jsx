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
  );
}
