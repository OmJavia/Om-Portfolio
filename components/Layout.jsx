import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CommandMenu from "./CommandMenu";

// `bare` lets the homepage own full-bleed sections; other pages keep the reading column.
export default function Layout({ children, bare = false }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow">
        Skip to content
      </a>
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <main id="main" className={bare ? "flex-1 w-full" : "flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20"}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  );
}
