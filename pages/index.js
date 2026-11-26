import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/site/Hero";
import Proof from "../components/site/Proof";
import Pickl from "../components/site/Pickl";
import Capabilities from "../components/site/Capabilities";
import Projects from "../components/site/Projects";
import Method from "../components/site/Method";
import Experience from "../components/site/Experience";
import About from "../components/site/About";
import { Stack, OpenSource, Contact } from "../components/site/Closing";
import { profile, siteConfig } from "../data";

const SECTION_COMPONENTS = {
  hero: Hero,
  proof: Proof,
  projects: Projects,
  flagship: Pickl,
  capabilities: Capabilities,
  experience: Experience,
  method: Method,
  stack: Stack,
  openSource: OpenSource,
  about: About,
  contact: Contact,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.positioning,
      description: profile.seo.description,
      url: profile.seo.siteUrl,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Medi-Caps University" },
      sameAs: [profile.links.linkedin, profile.links.github, profile.links.x],
      knowsAbout: [
        "Artificial Intelligence",
        "Computer Vision",
        "Retrieval-Augmented Generation",
        "Product Strategy",
        "Go-to-Market",
        "Connected Hardware",
      ],
    },
    { "@type": "WebSite", name: profile.seo.siteName, url: profile.seo.siteUrl },
  ],
};

export default function Home() {
  const orderedSections = [...siteConfig.sections]
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <Head>
        <title>{profile.seo.title}</title>
        <meta name="description" content={profile.seo.description} />
        <link rel="canonical" href={profile.seo.siteUrl} />
        <meta property="og:title" content={profile.seo.title} />
        <meta property="og:description" content={profile.shortIntro} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={profile.seo.siteUrl} />
        <meta property="og:image" content={profile.seo.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={profile.seo.siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={profile.seo.twitterHandle} />
        <meta name="twitter:title" content={profile.seo.title} />
        <meta name="twitter:description" content={profile.headline} />
        <meta name="twitter:image" content={profile.seo.ogImage} />
        <meta name="theme-color" content="#F5F5F0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Layout bare>
        {orderedSections.map(({ id }) => {
          const Section = SECTION_COMPONENTS[id];
          return Section ? <Section key={id} /> : null;
        })}
      </Layout>
    </>
  );
}
