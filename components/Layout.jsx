import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Load user preference or default to system dark mode preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
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
      <div className="min-h-screen flex flex-col bg-[#f5f4f2] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 noise-bg">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
