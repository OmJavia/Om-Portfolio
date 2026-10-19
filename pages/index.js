import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/home/HeroSection";
import NowBuildingSection from "../components/home/NowBuildingSection";
import CapabilitiesSection from "../components/home/CapabilitiesSection";
import HowIBuildSection from "../components/home/HowIBuildSection";
import ProjectsSection from "../components/home/ProjectsSection";

import OpenSourceSection from "../components/home/OpenSourceSection";
import TechnicalSkillsSection from "../components/home/TechnicalSkillsSection";
import ExperienceContact from "../components/home/ExperienceContact";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Om Javia Founding Manager, MegaShot | AI Product &amp; Go-to-Market</title>
        <meta
          name="description"
          content="Om Javia is Founding Manager at MegaShot, taking connected AI products from idea to launch, and an AI Product Engineer experienced in computer vision, PyTorch, LLMs, and RAG."
        />
        <meta name="keywords" content="Om Javia, Founding Manager, MegaShot, AI Product Engineer, AI Product Manager, Go-to-Market, Computer Vision, LLMs, RAG, PyTorch, Sports AI, Metashot, MegaShot Pickl+, Bangalore" />
        <meta name="author" content="Om Javia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://omjavia.vercel.app" />

        {/* Open Graph */}
        <meta property="og:title" content="Om Javia — Founding Manager, MegaShot | AI Product &amp; Go-to-Market" />
        <meta
          property="og:description"
          content="I build computer-vision and LLM systems and take connected AI products from idea to launch. Founding Manager at MegaShot."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omjavia.vercel.app" />
        <meta property="og:image" content="https://omjavia.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Om Javia — Founding Manager, MegaShot | AI Product &amp; Go-to-Market" />
        <meta property="og:site_name" content="Om Javia Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OmJavia1" />
        <meta name="twitter:creator" content="@OmJavia1" />
        <meta name="twitter:title" content="Om Javia — Founding Manager, MegaShot | AI Product &amp; Go-to-Market" />
        <meta
          name="twitter:description"
          content="I build computer-vision and LLM systems and take connected AI products from idea to launch. Hands-on technical product execution across hardware and software."
        />
        <meta name="twitter:image" content="https://omjavia.vercel.app/og-image.jpg" />

        {/* Structured Data (JSON-LD) */}
        {/* TODO(Om): verify legal employer entity name and corporate relationship between Metashot and MegaShot */}
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
        {/* Hero Section */}
        <HeroSection />

        {/* 1. Currently Building Spotlight: MegaShot Pickl+ */}
        <NowBuildingSection />



        {/* 3. Core Capabilities: What I Build */}
        <CapabilitiesSection />

        {/* 4. Methodology: How I Build AI Products */}
        <HowIBuildSection />

        {/* 5. Projects Section: Featured & Categorized Catalog */}
        <ProjectsSection />

        {/* 6. Code Proof: Open Source & Experiments */}
        <OpenSourceSection />

        {/* 7. Stack: Grouped Technical Competencies */}
        <TechnicalSkillsSection />

        {/* 8. Experience Arc & Contact CTA */}
        <ExperienceContact />
      </Layout>
    </>
  );
}
