import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 p-3 rounded-full bg-white/90 dark:bg-[#18181b]/90 border border-neutral-200 dark:border-[#27272a] text-neutral-600 dark:text-neutral-300 hover:text-[#f97316] dark:hover:text-[#f97316] hover:border-[#f97316]/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
    >
      <FaArrowUp className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
