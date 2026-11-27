import type { ProjectCategory, ProjectEntry } from "./types";

export const projectCategories: ProjectCategory[] = [
  "All",
  "AI & Machine Learning",
  "Product Engineering",
  "Computer Vision",
  "LLM & RAG",
  "GTM & Launches",
  "Research & Experiments",
];

export const projectEntries: ProjectEntry[] = [
  {
    slug: "megashot-pickl",
    name: "MegaShot Pickl+",
    shortDescription:
      "Positioned Pickl+ for 3 segments (casual players, families, gamers), turning 10+ features into Kickstarter copy, FAQs, and 900%+ funding.",
    fullDescription:
      "Led 0→1 product development and end-to-end Kickstarter GTM for MegaShot Pickl+, translating 185+ player insights into PRDs, 12+ iterations, campaign messaging, and reward tiers.",
    category: "GTM & Launches",
    categories: ["GTM & Launches", "Product Engineering"],
    type: "company",
    associatedCompany: "Metashot",
    thumbnail: "/Pickle.jpeg",
    technologies: ["Product Strategy", "Roadmapping", "GTM", "BLE"],
    results: [
      "900%+ of Kickstarter funding goal achieved.",
      "Positioned for 3 segments (casual players, families, gamers) with 10+ features tested before launch.",
    ],
    liveDemoUrl: "https://pickleball.themegashot.com/",
    caseStudyUrl: "/case-studies/megashot-pickl",
    featured: true,
    publicationDate: "2026-01",
  },
  {
    slug: "signaldesk",
    name: "SignalDesk: AI Outbound Signal Engine",
    shortDescription:
      "AI outbound engine that scores ICP-fit accounts and generates personalised emails, saving 100% as Gmail drafts synced to HubSpot.",
    fullDescription:
      "Built an AI outbound engine to score ICP-fit accounts and generate personalised emails. Saves 100% of emails as Gmail drafts for human review, with accounts, signals, and drafts synced to HubSpot.",
    category: "GTM & Launches",
    categories: ["GTM & Launches", "LLM & RAG", "Product Engineering"],
    type: "personal",
    thumbnail: "/Signal_Desk.png",
    technologies: ["Next.js", "Supabase", "LLM APIs", "HubSpot"],
    results: [
      "Scores ICP-fit accounts and generates personalised outreach.",
      "Saves 100% of emails as Gmail drafts for human review with HubSpot sync.",
    ],
    githubUrl: "https://github.com/OmJavia",
    caseStudyUrl: "/case-studies/signaldesk",
    featured: true,
    publicationDate: "2026-02",
  },
  {
    slug: "ai-rfp-response-agent",
    name: "AI RFP Response Agent",
    shortDescription:
      "AI agent extracting 150+ RFP requirements and drafting answers using RAG over past responses and product docs, flagging weak support.",
    fullDescription:
      "Built an AI agent extracting 150+ RFP requirements and drafting answers using RAG over past responses and product docs. Linked answers to requirements and source documents, flagging 20% of weakly supported answers for review.",
    category: "LLM & RAG",
    categories: ["LLM & RAG", "AI & Machine Learning"],
    type: "personal",
    thumbnail: "/AI_Response_Agent.png",
    technologies: ["Python", "LangChain", "ChromaDB", "Streamlit"],
    results: [
      "Extracts 150+ RFP requirements and drafts grounded answers via RAG.",
      "Links answers to source documents and flags 20% of weakly supported answers for review.",
    ],
    githubUrl: "https://github.com/OmJavia",
    caseStudyUrl: "/case-studies/ai-rfp-agent",
    featured: true,
    publicationDate: "2026-01",
  },
  {
    slug: "mars-rover",
    name: "Mars Terrain Classification",
    shortDescription:
      "Processed 800 HiRISE images with pixel-level LabelMe terrain labels and trained Detectron2 models for Martian surface analysis and pathfinding.",
    fullDescription:
      "Processed 800 HiRISE images with pixel-level terrain labels across 5 terrain types using LabelMe and trained Detectron2-based deep learning models, achieving an 87.4% rover navigation efficiency boost in ISRO simulations.",
    category: "Computer Vision",
    categories: ["Computer Vision", "Research & Experiments", "AI & Machine Learning"],
    type: "research",
    associatedCompany: "ISRO",
    thumbnail: "/Mars.jpg",
    technologies: ["OpenCV", "Detectron2", "LabelMe", "PyTorch"],
    results: [
      "800 HiRISE images processed with pixel-level terrain labels.",
      "87.4% boost in rover navigation efficiency.",
    ],
    githubUrl: "https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing",
    caseStudyUrl: "/case-studies/mars-rover",
    featured: true,
    publicationDate: "2024-05",
  },
  {
    slug: "metashot",
    name: "MetaShot Sports AI",
    shortDescription:
      "Real-time cricket shot detection improving accuracy by 33% and cutting video prediction latency by 28%, integrated into Unity.",
    fullDescription:
      "Improved real-time cricket shot detection accuracy by 33% with OpenCV and deep learning, cut video prediction latency by 28% by optimising the PyTorch and OpenCV pipeline, and developed player segmentation lifting retention by 17%.",
    category: "Computer Vision",
    categories: ["AI & Machine Learning", "Computer Vision"],
    type: "company",
    associatedCompany: "Metashot",
    thumbnail: "/Metashot.jpg",
    technologies: ["PyTorch", "OpenCV", "Deep Learning", "Unity"],
    results: [
      "+33% cricket shot detection accuracy; -28% video prediction latency.",
      "Session segmentation lifted retention by 17% and play by 21%.",
    ],
    liveDemoUrl: "https://metashot.in/",
    caseStudyUrl: "/case-studies/metashot",
    featured: false,
    publicationDate: "2025-12",
  },
  {
    slug: "pdf-searcher",
    name: "PDF Searcher",
    shortDescription:
      "Semantic document retrieval tool that chunks multi-page PDFs, builds vector embeddings, and grounds answers in exact passages.",
    fullDescription:
      "Open-source retrieval-augmented workflow built with Python, LangChain, and OpenAI embeddings for querying dense technical PDFs with passage-level grounding.",
    category: "LLM & RAG",
    categories: ["LLM & RAG", "AI & Machine Learning"],
    type: "open-source",
    thumbnail: "/PDF_Searcher.jpg",
    technologies: ["Python", "LangChain", "OpenAI", "Vector Search"],
    githubUrl: "https://github.com/OmJavia/PDF_Searcher",
    caseStudyUrl: "/case-studies/pdf-searcher",
    featured: false,
    publicationDate: "2024-03",
  },
  {
    slug: "nirmanbook",
    name: "NirmanBook",
    shortDescription:
      "Construction workflow and service-discovery platform featuring a responsive customer booking journey.",
    fullDescription:
      "Full-stack PropTech web platform built with React and D3.js to streamline construction service discovery and customer booking.",
    category: "Product Engineering",
    categories: ["Product Engineering"],
    type: "client",
    thumbnail: "/nirmanbook.jpg",
    technologies: ["React", "D3.js", "JavaScript"],
    liveDemoUrl: "https://www.nirmanbook.com/",
    caseStudyUrl: "/case-studies/nirmanbook",
    featured: false,
    publicationDate: "2023-11",
  },
  {
    slug: "aerpace",
    name: "Aerpace",
    shortDescription:
      "Future-mobility product web experience with responsive media galleries and interactive brand storytelling.",
    fullDescription:
      "Frontend engineering for a future-mobility showcase built with React and custom responsive media layouts.",
    category: "Product Engineering",
    categories: ["Product Engineering"],
    type: "client",
    thumbnail: "/aerpace.jpg",
    technologies: ["React", "JavaScript", "CSS Motion"],
    liveDemoUrl: "https://www.aerpace.com/",
    caseStudyUrl: "/case-studies/aerpace",
    featured: false,
    publicationDate: "2023-09",
  },
];

export function getSortedProjects(entries: ProjectEntry[] = projectEntries): ProjectEntry[] {
  return [...entries].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.publicationDate.localeCompare(a.publicationDate);
  });
}

export function getAvailableCategories(entries: ProjectEntry[] = projectEntries): ProjectCategory[] {
  const used = new Set<ProjectCategory>(["All"]);
  entries.forEach((p) => p.categories.forEach((c) => used.add(c)));
  return projectCategories.filter((c) => used.has(c));
}
