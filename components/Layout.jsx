import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AskOmWidget from "./AskOmWidget";

export default function Layout({ children }) {
  // Default to dark mode aggressively — Obsidian Neural is the primary experience
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check saved preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    } else {
      // Default: dark mode (Obsidian Neural)
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-[#f5f4f2] dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 noise-bg">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12">
          {children}
        </main>
        <Footer />
        <AskOmWidget />
      </div>
    </div>
  );
}
