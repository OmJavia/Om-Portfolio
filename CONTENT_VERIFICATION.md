# Content and Claims Verification (Source of Truth)

This document tracks all claims, metrics, milestones, and credentials across Om Javia's portfolio. Unsubstantiated claims are recorded here with exact `TODO(Om)` items and are either omitted from the public site or clearly qualified according to evidence rules.

---

## 1. Claims Verification Matrix

| Claim / Item | Exact `TODO(Om)` Description | Affected Page / Component | Current Source | Evidence Needed to Resolve | Public Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Founding Manager & Employer** | `TODO(Om): verify legal employer entity name and corporate relationship between Metashot and MegaShot` | `pages/index.js`, `components/home/ExperienceContact.js`, `pages/about.js` | Metashot experience, resume | Official appointment letter or incorporation / parent entity documentation confirming if MegaShot is a brand of Metashot or separate entity | **Permitted with functional qualification**: Presented as single employer entry with two chronological headings (Founding Manager & AI Engineer) |
| **New York Toy Fair Beta-Showing** | `TODO(Om): confirm exact Toy Fair month, dates (e.g. Feb 14–17, 2026), booth 6619 details, and photographer/press artifact` | Hero Proof Strip, MegaShot Case Study (`pages/case-studies/megashot-pickl.js`) | People of Play blog article (*"Introducing Megashot Pickle+"* mentioning Booth 6619, NY Toy Fair) | Trade show exhibitor confirmation, event badge, or booth photography showing Pickl+ interactive demo | **Omitted from hero proof strip**; referenced conditionally in case study launch narrative as planned showing |
| **Kickstarter 500% in 24 Hours** | `TODO(Om): verify Kickstarter first 24-hour backer dashboard snapshot or company press release` | Hero Proof Strip, MegaShot Case Study (`pages/case-studies/megashot-pickl.js`), About (`pages/about.js`) | Company-reported milestone; Kickstarter project page `megashot-pickl-smart-pickleball-gaming-device` | First-day campaign dashboard screenshot or official company announcement verifying exact 24-hour milestone | **Permitted only with exact attribution**: *"Campaign reached 500% of its goal within 24 hours (company-reported)"* linking to live campaign |
| **185+ Players Sample** | `TODO(Om): confirm the player sample, product attribution, research location, date range and supporting feedback artifact` | MegaShot Case Study feedback section only | Metashot beta tests / player logs | Testing logbook, user interview notes, playtest session counts, and explicit confirmation that players tested MegaShot Pickl+ vs. MetaShot cricket | **Permitted strictly once** on entire site (MegaShot case study feedback section only) with exact required wording |
| **12+ Product Iterations** | `TODO(Om): confirm the 12+ iteration count and define what constituted an iteration (hardware firmware revisions, paddle prototypes, or app build releases)` | MegaShot Case Study feedback section only | Product sprint / hardware revision notes | Release notes, prototype revision changelog, or hardware revision history defining the 12 versions | **Permitted strictly once** on entire site (MegaShot case study feedback section only); omitted elsewhere |
| **ISRO 87.4% Metric Definition** | `TODO(Om): metric definition + baseline` | ISRO Case Study (`pages/case-studies/mars-rover.js`), Experience timeline | ISRO internship research notebook (Google Colab) | Formal definition of the efficiency metric, test simulation parameters, and baseline algorithm (e.g., straight-line distance vs. obstacle-circumvention ratio) | **Permitted only as reported research score**: *"87.4% navigation-efficiency score in simulated rover traversal"*; removed "improvement" claims |
| **<80ms Latency Benchmark** | `TODO(Om): verify hardware benchmark setup, camera frame rate, model quantization (FP16/INT8), and inference environment for <80ms claim` | MetaShot Project Card, About page | Metashot YOLO + OpenCV video pipeline | Benchmark script, profiler trace, or latency breakdown (frame capture, model inference, post-processing, dashboard transmission) | **Permitted as technical benchmark** in sports AI architecture notes |
| **Resume PDF Asset** | Resolved: the résumé previously linked from Google Drive is now served at `public/resume.pdf`. Contact chrome stays on email, Cal.com, and LinkedIn. | `Navbar.jsx`, `HeroSection.js`, `ExperienceContact.js`, `public/resume.pdf` | Same PDF previously linked from the navbar | Keep this file in sync when the résumé changes | **Published** at `/resume.pdf` |
| **Pickl+ UI & Gameplay Screenshots** | `TODO(Om): add high-resolution UI screenshots of companion mobile game and Kickstarter campaign graphics` | MegaShot Case Study (`pages/case-studies/megashot-pickl.js`) | `Pickle.jpeg` hardware photo currently in repository | High-resolution mobile gameplay screenshots, UI dashboard captures, or Kickstarter reward graphics | **Still omitted**. The case study points to the live product site and Kickstarter page instead of empty image slots |
| **Flagship LLM / Agent Showcase (5th Featured Project)** | `TODO(Om): build and evaluate flagship LLM/agent project with README, metrics and demo` | `components/home/ProjectsSection.js` | Conceptual | Public GitHub repository with evaluation benchmarks, system architecture, README, and live interactive demo | **Kept unpublished**: Only 4 verified featured projects rendered to avoid placeholder cards |
| **Client & Peer Recommendations** | `TODO(Om): add one or two genuine recommendations with attribution and permission to publish` | `components/home/ExperienceContact.js` | None currently verified | Written quotes with explicit permission, author's full name, title, organization, and LinkedIn profile verification | **Kept unpublished**: `RECOMMENDATIONS` is an empty list, so the section does not render |
| **Apoliums Infotech User Scale (7K+)** | `TODO(Om): verify platform analytics or active user logs for 7K+ users at Apoliums Infotech` | Experience timeline, About page | Previous portfolio claim | Production server logs, database user counts, or project metrics from Apoliums Infotech | **Removed from public About statistics**; described qualitatively in experience bullets |
| **Metashot Accuracy (+33%)** | `TODO(Om): verify baseline model and test dataset used to compute +33% shot detection accuracy` | Metashot SVG diagram in `ProjectCard.jsx` | Architecture SVG diagram | Validation dataset metrics comparing baseline YOLO vs fine-tuned cricket shot classifier | **Removed unverified percentage from diagram**; focused on verified sub-80ms real-time inference latency |

---

## 2. Inconsistencies Audited & Resolved

1. **Role Title and Progression**:
   - *Previous state*: Varied between "AI Product Engineer", "AI Engineer", and ambiguous single Metashot entries.
   - *Resolution*: Established consistent identity: **Founding Manager, MegaShot — AI Product & Go-to-Market**, with secondary technical identity **AI Product Engineer**. Represented Metashot in Experience as one employer with two chronological headings: *Founding Manager (November 2025–present)* and *AI Engineer (July–October 2025)*.

2. **Metric Single-Use Rule**:
   - *Previous state*: "185+ players" was repeated in the homepage hero subtext, Experience bullets, About stats, and project cards.
   - *Resolution*: Confined strictly to the **MegaShot Pickl+ Case Study Feedback Loop** section. Removed from Hero, About stats, Experience bullets, and project catalog.

3. **Rover Efficiency Definition**:
   - *Previous state*: Described as "87.4% navigation efficiency improvement (ISRO)".
   - *Resolution*: Replaced with the exact reported score phrase: *"87.4% navigation-efficiency score in simulated rover traversal"*. Baseline improvement claims removed pending benchmark definition.

4. **Resume QR Code**:
   - *Previous state*: Rendered a low-resolution QR code image (`public/Download Resume.png`) claiming to download the resume.
   - *Resolution*: Removed the QR code box from the public site. Resume actions now download `public/resume.pdf`. Contact chrome stays on email, Cal.com, and LinkedIn.

5. **"Code Proof" Naming**:
   - *Previous state*: Labeled "Code Proof".
   - *Resolution*: Renamed to **"Experiments"** as specified.
