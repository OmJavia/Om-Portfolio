import type { ExperienceEntry } from "./types";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "metashot",
    company: "Metashot",
    companyUrl: "https://metashot.in/",
    companyDescription: "Interactive sports technology and connected gaming hardware.",
    logo: "/Metashot.png",
    location: "Bangalore, Karnataka",
    roles: [
      {
        title: "AI GTM Engineer",
        employmentType: "Full-time",
        startDate: "2026-01",
        endDate: null,
        isCurrent: true,
        responsibilities: [
          "Drove end-to-end Kickstarter GTM (positioning, campaign, creator outreach), achieving 900%+ of funding goal.",
          "Built an LLM-assisted distributor pipeline across 5 markets: account research, personalised cold email, 7-day follow-ups.",
          "Led 0→1 product development of MegaShot Pickl+, translating 185+ player insights into PRDs and 12+ iterations.",
        ],
        technologies: ["GTM Engineering", "LLM APIs", "Product Strategy", "PRDs", "Creator Outreach"],
        relatedProjects: ["megashot-pickl"],
      },
      {
        title: "AI Engineer",
        employmentType: "Full-time",
        startDate: "2025-07",
        endDate: "2025-12",
        isCurrent: false,
        responsibilities: [
          "Improved real-time cricket shot detection accuracy by 33% with OpenCV and deep learning, integrated into Unity.",
          "Cut real-time video prediction latency by 28% by optimising the PyTorch and OpenCV processing pipeline.",
          "Developed player segmentation from session data, informing changes that lifted retention by 17% and play by 21%.",
        ],
        technologies: ["PyTorch", "OpenCV", "Deep Learning", "Unity", "Computer Vision"],
        relatedProjects: ["metashot"],
      },
    ],
  },
  {
    id: "apoliums",
    company: "Apoliums Infotech",
    companyDescription: "Software and applied AI engineering studio.",
    logo: "/Apoliums.png",
    location: "Indore, Madhya Pradesh",
    roles: [
      {
        title: "Associate AI Engineer",
        employmentType: "Full-time",
        startDate: "2024-06",
        endDate: "2025-06",
        isCurrent: false,
        responsibilities: [
          "Optimised scalable Python & Pandas preprocessing pipelines for large ML datasets, cutting model training time by 25%.",
          "Deployed production-ready FastAPI endpoints for real-time ML predictions on a client platform serving 7K+ users.",
          "Automated end-to-end testing and deployment with GitHub Actions CI/CD, shortening software release cycles by 30%.",
        ],
        technologies: ["Python", "Pandas", "FastAPI", "GitHub Actions", "Docker"],
      },
    ],
  },
  {
    id: "isro-sac",
    company: "Indian Space Research Organisation (ISRO)",
    companyUrl: "https://www.sac.gov.in/",
    companyDescription: "Space Applications Centre — planetary & satellite research.",
    logo: "/sac.png",
    location: "Ahmedabad, Gujarat",
    roles: [
      {
        title: "Research and Development Intern",
        employmentType: "Internship",
        startDate: "2024-02",
        endDate: "2024-05",
        isCurrent: false,
        responsibilities: [
          "Preprocessed and annotated 800 HiRISE satellite image datasets and developed neural network models using PyTorch.",
          "Engineered obstacle-aware path planning for rover, boosted navigation efficiency by 87.4% and ensured safe traversal.",
          "Labeled 5 terrain types (including craters and boulders) to build high-quality datasets for rover navigation models.",
        ],
        technologies: ["PyTorch", "Detectron2", "OpenCV", "LabelMe", "Path Planning"],
        relatedProjects: ["mars-rover"],
      },
    ],
  },
  {
    id: "ace-infoway",
    company: "Ace Infoway",
    logo: "/ace-infoway.png",
    location: "Rajkot, Gujarat",
    roles: [
      {
        title: "Software Engineer Intern",
        employmentType: "Internship",
        startDate: "2023-07",
        endDate: "2023-08",
        isCurrent: false,
        responsibilities: [
          "Frontend optimisation, abandoned-cart recovery flows, and responsive refactoring.",
        ],
        technologies: ["JavaScript", "HTML/CSS"],
      },
    ],
  },
  {
    id: "relcon-system",
    company: "Relcon System",
    logo: "/relcon.png",
    location: "Vadodara, Gujarat",
    roles: [
      {
        title: "Software Engineer Intern",
        employmentType: "Internship",
        startDate: "2022-06",
        endDate: "2022-08",
        isCurrent: false,
        responsibilities: [
          "Fuel-dispensing monitoring dashboard and IoT station software for tracking metrics.",
        ],
        technologies: ["IoT Dashboards", "JavaScript"],
      },
    ],
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatYearMonth(ym: string | null): string {
  if (!ym) return "Present";
  const [year, month] = ym.split("-");
  const idx = Number(month) - 1;
  if (!year || Number.isNaN(idx) || idx < 0 || idx > 11) return ym;
  return `${MONTHS[idx]} ${year}`;
}

export function formatRoleDates(startDate: string, endDate: string | null, isCurrent?: boolean): string {
  const end = isCurrent || endDate === null ? "Present" : formatYearMonth(endDate);
  return `${formatYearMonth(startDate)} — ${end}`;
}

/** Sort experiences chronologically (newest role first). */
export function getSortedExperiences(entries: ExperienceEntry[] = experienceEntries): ExperienceEntry[] {
  return [...entries]
    .map((entry) => ({
      ...entry,
      roles: [...entry.roles].sort((a, b) => {
        const aCur = a.isCurrent || a.endDate === null ? 1 : 0;
        const bCur = b.isCurrent || b.endDate === null ? 1 : 0;
        if (aCur !== bCur) return bCur - aCur;
        return b.startDate.localeCompare(a.startDate);
      }),
    }))
    .sort((a, b) => {
      const aTop = a.roles[0];
      const bTop = b.roles[0];
      const aCur = aTop?.isCurrent || aTop?.endDate === null ? 1 : 0;
      const bCur = bTop?.isCurrent || bTop?.endDate === null ? 1 : 0;
      if (aCur !== bCur) return bCur - aCur;
      return (bTop?.startDate ?? "").localeCompare(aTop?.startDate ?? "");
    });
}
