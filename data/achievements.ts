import type { AchievementEntry } from "./types";

export const achievementEntries: AchievementEntry[] = [
  {
    id: "pickl-kickstarter",
    label: "of Kickstarter funding goal achieved",
    value: 900,
    suffix: "%+",
    unit: "%",
    description: "End-to-end Kickstarter GTM · Jan 2026–Present",
    source: "Resume · Metashot AI GTM Engineer",
    associatedItem: "MegaShot Pickl+",
    priority: 1,
    visible: true,
    href: "https://www.kickstarter.com/projects/megashot/megashot-pickl-smart-pickleball-gaming-device",
    tone: "coral",
  },
  {
    id: "metashot-accuracy",
    label: "cricket shot detection accuracy improvement",
    value: 33,
    prefix: "+",
    suffix: "%",
    unit: "%",
    description: "OpenCV & deep learning · Jul–Dec 2025",
    source: "Resume · Metashot AI Engineer",
    associatedItem: "Metashot Sports AI",
    priority: 2,
    visible: true,
    tone: "cobalt",
  },
  {
    id: "isro-efficiency",
    label: "rover navigation efficiency boost",
    value: 87.4,
    decimals: 1,
    suffix: "%",
    unit: "%",
    description: "Obstacle-aware path planning · Feb–May 2024",
    source: "Resume · ISRO R&D Intern",
    associatedItem: "ISRO Space Applications Centre",
    priority: 3,
    visible: true,
    tone: "teal",
  },
  {
    id: "rfp-requirements",
    label: "RFP requirements extracted & drafted via RAG",
    value: 150,
    suffix: "+",
    unit: "requirements",
    description: "LangChain & ChromaDB · AI RFP Agent",
    source: "Resume · AI RFP Response Agent",
    associatedItem: "AI RFP Response Agent",
    priority: 4,
    visible: true,
    tone: "lime",
  },
];

export function getVisibleAchievements(entries: AchievementEntry[] = achievementEntries): AchievementEntry[] {
  return [...entries].filter((a) => a.visible).sort((a, b) => a.priority - b.priority);
}

