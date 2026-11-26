import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = ({
  variant = "default",
  className = "",
} = {}) => {
  const base =
    "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none";

  const variants = {
    default:
      "border border-transparent bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900",
    secondary:
      "border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300",
    outline:
      "border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300",
    accent:
      "border border-[#f97316]/20 bg-[#f97316]/10 text-[#ea580c] dark:text-[#fb923c]",
    subtle:
      "text-neutral-500 dark:text-neutral-400 font-mono text-[11px]",
  };

  return cn(base, variants[variant] || variants.default, className);
};

function Badge({ className, variant = "default", ...props }) {
  return (
    <div className={badgeVariants({ variant, className })} {...props} />
  );
}

export { Badge, badgeVariants };
