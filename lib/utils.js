import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the custom type scale, otherwise `text-display-lg` is read as a colour and dropped.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display-xl", "display-lg", "h1", "h2", "h3", "body-lg", "eyebrow", "meta"] }],
    },
  },
});

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
