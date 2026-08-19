import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({ children, href, ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const move = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.18);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.18);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={move}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
