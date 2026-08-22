import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/home/HeroSection";
import AboutSkills from "../components/home/AboutSkills";
import ProjectsSection from "../components/home/ProjectsSection";
import ExperienceContact from "../components/home/ExperienceContact";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Om Javia | AI Product Engineer — Computer Vision, RAG & LLMs</title>
        <meta
          name="description"
          content="Om Javia is an AI Product Engineer building production-grade computer vision, RAG, NLP, and LLM systems. Based in Bangalore. Available for AI/ML and product engineering roles."
        />
        <meta name="keywords" content="Om Javia, AI Product Engineer, Computer Vision, RAG, LLMs, PyTorch, NLP, Machine Learning, Bangalore, ISRO, Metashot" />
        <meta name="author" content="Om Javia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://omjavia.vercel.app" />

        {/* Open Graph */}
        <meta property="og:title" content="Om Javia | AI Product Engineer" />
        <meta
          property="og:description"
          content="Explore Om Javia's AI engineering work across computer vision, LLMs, data systems, and product-focused web applications."
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
          content="Computer Vision · LLMs · RAG · Production AI. Building at the intersection of AI and product."
        />
        <meta name="twitter:image" content="https://omjavia.vercel.app/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      </Head>

      <Layout>
        <HeroSection />
        <AboutSkills />
        <ProjectsSection />
        <ExperienceContact />
      </Layout>
    </>
  );
}
