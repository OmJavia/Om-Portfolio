import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import HeroSection from "../components/home/HeroSection";
import NowBuildingSection from "../components/home/NowBuildingSection";
import CapabilitiesSection from "../components/home/CapabilitiesSection";
import HowIBuildSection from "../components/home/HowIBuildSection";
import ProjectsSection from "../components/home/ProjectsSection";

const OpenSourceSection = dynamic(() => import("../components/home/OpenSourceSection"));
const TechnicalSkillsSection = dynamic(() => import("../components/home/TechnicalSkillsSection"));
const ExperienceContact = dynamic(() => import("../components/home/ExperienceContact"));

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Om Javia | AI Product Engineer — Computer Vision, RAG & Intelligent Products</title>
        <meta
          name="description"
          content="Om Javia is an AI Product Engineer building production-ready AI products across Computer Vision, LLMs, RAG, backend systems, and intelligent interactive products."
        />
        <meta name="keywords" content="Om Javia, AI Product Engineer, Computer Vision, RAG, LLMs, PyTorch, Sports AI, Metashot, MegaShot Pickl+, Intelligent Products, Bangalore" />
        <meta name="author" content="Om Javia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://omjavia.vercel.app" />

        {/* Open Graph */}
        <meta property="og:title" content="Om Javia | AI Product Engineer" />
        <meta
          property="og:description"
          content="Building production-ready AI products from idea to deployment across Computer Vision, LLMs, RAG, backend systems, and intelligent connected products."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omjavia.vercel.app" />
        <meta property="og:image" content="https://omjavia.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Om Javia — AI Product Engineer portfolio preview" />
        <meta property="og:site_name" content="Om Javia Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OmJavia1" />
        <meta name="twitter:creator" content="@OmJavia1" />
        <meta name="twitter:title" content="Om Javia | AI Product Engineer" />
        <meta
          name="twitter:description"
          content="Computer Vision · LLMs · RAG · Production AI · Intelligent Hardware. Turning emerging AI into products people actually use."
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
              jobTitle: "AI Product Engineer",
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
                "PyTorch",
                "FastAPI",
                "Product Engineering",
                "Intelligent Interactive Products",
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
