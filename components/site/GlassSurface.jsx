import { cn } from "@/lib/utils";

export default function GlassSurface({ as: Tag = "div", tone = "light", className, children, ...props }) {
  return (
    <Tag className={cn("glass", tone === "dark" && "glass-dark", className)} {...props}>
      {children}
    </Tag>
  );
}
