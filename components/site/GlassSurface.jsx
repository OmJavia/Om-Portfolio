import { cn } from "@/lib/utils";

// Design-system glass. Visual tiers + fallbacks live in globals.css (.glass).
// The pointer only moves a CSS variable, so hover response costs no React renders.
export default function GlassSurface({ as: Tag = "div", tone = "light", className, children, ...props }) {
  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
  };
  return (
    <Tag onPointerMove={onPointerMove} className={cn("glass", tone === "dark" && "glass-dark", className)} {...props}>
      {children}
    </Tag>
  );
}
