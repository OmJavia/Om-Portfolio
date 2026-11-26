import type { NavItem } from "./types";

export const navigationItems: NavItem[] = [
  { id: "projects", label: "Projects" },
  { id: "capabilities", label: "Capabilities" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const openSourceItems = [
  {
    name: "PDF_Searcher",
    description: "Semantic search over multi-page PDFs with LangChain and OpenAI embeddings.",
    tags: ["Python", "LangChain", "RAG"],
    url: "https://github.com/OmJavia/PDF_Searcher",
    kind: "GitHub",
  },
  {
    name: "Generate_Blogs",
    description: "Template-driven technical blog generation with OpenAI models.",
    tags: ["Python", "OpenAI", "Prompts"],
    url: "https://github.com/OmJavia/Generate_Blogs",
    kind: "GitHub",
  },
  {
    name: "Mars Rover Path Planning",
    description: "Notebook covering satellite preprocessing, terrain segmentation, and obstacle-aware pathfinding.",
    tags: ["PyTorch", "Colab", "Path planning"],
    url: "https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing",
    kind: "Notebook",
  },
];

export const contactContent = {
  headline: "Have a product worth building?",
  copy: "Whether you're building an AI product, scaling an intelligent system, or looking for someone who understands both technology and go-to-market, I'd love to connect.",
};
