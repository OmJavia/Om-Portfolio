import type { CapabilityPillar, MethodStage, SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    group: "Programming Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    group: "GTM Engineering",
    items: ["ICP & Account Intelligence", "Outbound Sequencing", "Funnel Analytics", "Product Launch"],
  },
  {
    group: "AI & LLMs",
    items: ["LLM APIs", "RAG", "Prompt Engineering", "LangChain", "ChromaDB", "Computer Vision"],
  },
  {
    group: "Automation & Backend",
    items: ["REST APIs", "FastAPI", "Node.js", "GitHub Actions"],
  },
  {
    group: "Data & Cloud",
    items: ["MySQL", "MongoDB", "SQLite", "Pandas", "Docker", "Vercel"],
  },
  {
    group: "Tools",
    items: ["Git", "Postman", "Jira", "Notion", "Figma"],
  },
];

export const capabilityPillars: CapabilityPillar[] = [
  {
    title: "AI & Computer Vision",
    description: "Real-time detection pipelines that hold up on live video, not just on a test set.",
    tags: ["PyTorch", "OpenCV", "Detectron2", "Computer Vision"],
    tone: "cobalt",
    size: "wide",
  },
  {
    title: "LLM & RAG Applications",
    description: "Retrieval agents and grounded workflows that cite source documents and flag weak support.",
    tags: ["LLM APIs", "RAG", "LangChain", "ChromaDB"],
    tone: "lime",
  },
  {
    title: "Automation & Backend",
    description: "Production FastAPI endpoints, Pandas pipelines, and automated GitHub Actions CI/CD.",
    tags: ["FastAPI", "Node.js", "REST APIs", "GitHub Actions"],
    tone: "teal",
  },
  {
    title: "Product Strategy & Execution",
    description: "PRDs, roadmaps, and 0→1 iteration loops translating player insights into shipped hardware.",
    tags: ["PRDs", "Roadmapping", "Funnel Analytics"],
    tone: "ink",
  },
  {
    title: "Connected Hardware & Interactive Products",
    description: "Sensor data, Bluetooth, and gameplay stitched into one loop a player can feel.",
    tags: ["Motion Data", "BLE", "Unity", "Haptics"],
    tone: "coral",
    size: "tall",
  },
  {
    title: "GTM Engineering & Launch Execution",
    description: "ICP scoring, LLM-assisted outbound pipelines, positioning, and creator-led launches.",
    tags: ["ICP Intelligence", "Outbound Sequencing", "Product Launch"],
    tone: "coral",
    size: "wide",
  },
];

export const methodStages: MethodStage[] = [
  {
    id: "01",
    title: "Understand the Problem",
    summary: "Start from the user and the constraint.",
    example: "Translated 185+ player insights into PRDs and 12+ iterations for MegaShot Pickl+.",
  },
  {
    id: "02",
    title: "Validate Feasibility",
    summary: "Test the riskiest assumption before committing.",
    example: "Tested 10+ product features as campaign copy and FAQs with pickleball players before launch.",
  },
  {
    id: "03",
    title: "Prototype",
    summary: "Build the thinnest slice that a real person can use.",
    example: "Built SignalDesk to score ICP-fit accounts and save 100% of emails as Gmail drafts for review.",
  },
  {
    id: "04",
    title: "Evaluate",
    summary: "Measure the thing that decides whether it works.",
    example: "Improved cricket shot detection accuracy by 33% and cut video prediction latency by 28%.",
  },
  {
    id: "05",
    title: "Productionize",
    summary: "Make it reliable, observable, and shippable.",
    example: "Deployed FastAPI ML endpoints for 7K+ users and automated CI/CD, cutting release cycles by 30%.",
  },
  {
    id: "06",
    title: "Iterate",
    summary: "Treat launch as the start of the feedback loop.",
    example: "Used session segmentation at Metashot to lift player retention by 17% and play by 21%.",
  },
];
