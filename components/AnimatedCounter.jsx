import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.7 });
  const [current, setCurrent] = useState(0);
  const target = parseFloat(String(value).replace(/[^0-9.]/g, ''));

  useEffect(() => {
    if (!visible) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1100, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, target]);

  const formatted = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
  return <motion.span ref={ref}>{formatted}{suffix}</motion.span>;
}
