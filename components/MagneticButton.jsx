"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * MagneticButton — A physics-based button component that
 * creates a magnetic pull effect toward the cursor.
 *
 * Usage:
 *   <MagneticButton className="...">Click me</MagneticButton>
 *
 * Props:
 *   - strength: how strong the magnetic pull is (default: 0.35)
 *   - children: button content
 *   - className: additional Tailwind classes
 *   - onClick: click handler
 *   - href: if provided, renders as an <a> tag wrapper
 *   - target: _blank for external links
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  onClick,
  href,
  target,
  rel,
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
}) {
  const ref = useRef(null);

  // Raw motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth snap-back
  const springConfig = { stiffness: 180, damping: 18, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const motionProps = {
    ref,
    style: { x: springX, y: springY, display: "inline-flex" },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.96 },
  };

  // If href is provided, wrap with an anchor tag
  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={className}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
