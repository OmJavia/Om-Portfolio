import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/home/HeroSection";
import NowBuildingSection from "../components/home/NowBuildingSection";
import ProjectsSection from "../components/home/ProjectsSection";
import TechnicalSkillsSection from "../components/home/TechnicalSkillsSection";
import ExperienceContact from "../components/home/ExperienceContact";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Om Javia — Founding Manager &amp; AI Product Engineer</title>
        <meta
          name="description"
          content="Om Javia is Founding Manager at MegaShot, taking connected AI products from idea to launch. Experienced in computer vision, PyTorch, LLMs, and hardware-software systems."
        />
        <meta
          name="keywords"
          content="Om Javia, Founding Manager, MegaShot, AI Product Engineer, AI Product Manager, Go-to-Market, Computer Vision, LLMs, RAG, PyTorch, Sports AI, Metashot, MegaShot Pickl+, Bangalore"
        />
        <meta name="author" content="Om Javia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://omjavia.vercel.app" />

        {/* Open Graph */}
        <meta property="og:title" content="Om Javia — Founding Manager &amp; AI Product Engineer" />
        <meta
          property="og:description"
          content="I build AI products and connected systems — from early product decisions to production. Founding Manager at MegaShot."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omjavia.vercel.app" />
        <meta property="og:image" content="https://omjavia.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Om Javia — Founding Manager &amp; AI Product Engineer" />
        <meta property="og:site_name" content="Om Javia" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OmJavia1" />
        <meta name="twitter:creator" content="@OmJavia1" />
        <meta name="twitter:title" content="Om Javia — Founding Manager &amp; AI Product Engineer" />
        <meta
          name="twitter:description"
          content="I build AI products and connected systems — from early product decisions to production. Hands-on technical product execution across hardware and software."
        />
        <meta name="twitter:image" content="https://omjavia.vercel.app/og-image.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Om Javia",
              jobTitle: "Founding Manager",
              description: "Founding Manager at MegaShot (AI Product & Go-to-Market) and AI Product Engineer.",
              worksFor: {
                "@type": "Organization",
                name: "Metashot",
                url: "https://metashot.in/",
              },
              url: "https://omjavia.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/omjavia/",
                "https://twitter.com/OmJavia1",
                "https://github.com/omjavia",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Computer Vision",
                "Large Language Models",
                "Retrieval-Augmented Generation",
                "Product Strategy & Go-to-Market",
                "Hardware-Software Integration",
                "PyTorch",
                "FastAPI",
              ],
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      </Head>

      <Layout>
        {/* 1. WHO I AM: Personal introduction with portrait */}
        <HeroSection />

        {/* 2. WHAT I'M BUILDING: MegaShot Pickl+ Flagship Case Study */}
        <NowBuildingSection />

        {/* 3. WHAT I'VE SHIPPED: Selected Work (Metashot, Mars Rover, PDF Searcher, archive) */}
        <ProjectsSection />

        {/* 4. WHAT I USE: Scannable Technical Toolkit & Current Focus */}
        <TechnicalSkillsSection />

        {/* 6. WHERE I'VE WORKED & LET'S TALK: Career Timeline & Contact */}
        <ExperienceContact />
      </Layout>
    </>
  );
}
