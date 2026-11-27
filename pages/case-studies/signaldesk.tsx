import CaseStudyTemplate from "../../components/site/CaseStudyTemplate";
import { projectEntries } from "../../data";

export default function SignalDeskCaseStudy() {
  const project = projectEntries.find((p) => p.slug === "signaldesk")!;
  const nextProject = projectEntries.find((p) => p.slug === "ai-rfp-response-agent");

  const sections = [
    {
      title: "1. Project Overview",
      body: "SignalDesk is an AI outbound signal engine built with Next.js, Supabase, LLM APIs, and HubSpot to score ICP-fit accounts, draft personalised outreach emails, and keep a human reviewer in control of every send.",
    },
    {
      title: "2. Problem & Context",
      body: "Automated cold-email tools often blast low-signal templates directly from an LLM, hurting domain reputation and sending off-brand copy. GTM teams need structured account qualification and signal-based drafting without giving up editorial review.",
    },
    {
      title: "3. Target User",
      body: "Founders, GTM engineers, and outbound operators who want LLM-assisted account scoring and personalisation while keeping 100% human approval before emails leave the inbox.",
    },
    {
      title: "4. Role & Ownership",
      bullets: [
        "Designed the end-to-end GTM workflow: ICP scoring criteria, prompt structure, draft persistence, and CRM sync.",
        "Built the Next.js application, Supabase data layer, LLM drafting pipeline, and HubSpot integration.",
      ],
    },
    {
      title: "5. System Architecture",
      bullets: [
        "Account & Signal Ingestion: Stores target accounts and buying signals in Supabase.",
        "ICP Scoring & Qualification: Evaluates account fit against configured ICP criteria before generating outreach.",
        "LLM Personalisation Layer: Drafts context-aware emails grounded in account signals.",
        "Human-in-the-Loop Gate: Saves 100% of generated emails as Gmail drafts rather than auto-sending.",
        "CRM Sync: Syncs accounts, signals, and draft status directly to HubSpot.",
      ],
    },
    {
      title: "6. Key Technical & Product Decisions",
      bullets: [
        "Draft-only delivery by design: Saving 100% of emails as Gmail drafts prevents unreviewed hallucinations from reaching prospects.",
        "HubSpot as system of record: Syncing accounts, signals, and draft state keeps outbound context visible alongside pipeline activity.",
      ],
    },
    {
      title: "7. Challenges & Trade-offs",
      body: "Requiring human review in Gmail trades raw send volume for message quality and deliverability safety. For targeted B2B outbound, higher relevance per account outweighs unreviewed mass automation.",
    },
    {
      title: "8. Evaluation & Measurement",
      bullets: [
        "Verified workflow behaviour: 100% of generated emails are saved as Gmail drafts for human review, with accounts, signals, and drafts synced to HubSpot.",
        "Reply rates, meeting conversion, and pipeline attribution: Not publicly measured in this repository.",
      ],
    },
    {
      title: "9. Results & Limitations",
      bullets: [
        "Operational outcome: Eliminates blind auto-sending while structuring ICP scoring, signal capture, and CRM logging in one workflow.",
        "Limitation: Downstream reply and conversion metrics depend on campaign deployment and are not claimed without live production tracking.",
      ],
    },
    {
      title: "10. What I Learned & Would Improve",
      body: "Building outbound tooling works best when CRM sync and human review are first-class constraints from day one. Next step would be adding closed-loop reply classification in HubSpot to measure which signals correlate with positive responses.",
    },
  ];

  return <CaseStudyTemplate project={project} sections={sections} nextProject={nextProject} />;
}
