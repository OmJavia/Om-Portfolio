import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = ({
  variant = "default",
  size = "default",
  className = "",
} = {}) => {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 disabled:pointer-events-none disabled:opacity-50 select-none chroma-button";

  const variants = {
    default:
      "bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shadow-[0_2px_8px_rgba(0,0,0,0.15)] rounded-2xl font-bold",
    accent:
      "bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shadow-[0_2px_8px_rgba(0,0,0,0.15)] rounded-2xl font-bold",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200/80 dark:bg-neutral-800/80 dark:text-neutral-100 dark:hover:bg-neutral-800 rounded-xl",
    outline:
      "border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 rounded-2xl",
    ghost:
      "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:text-neutral-900 dark:hover:text-white rounded-2xl",
    link:
      "text-[#f97316] hover:text-[#ea580c] underline-offset-4 hover:underline p-0 h-auto font-medium",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-xs rounded-lg",
    lg: "h-12 px-6 text-base rounded-xl",
    icon: "h-9 w-9 p-0 rounded-lg",
  };

  return cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className);
};

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
