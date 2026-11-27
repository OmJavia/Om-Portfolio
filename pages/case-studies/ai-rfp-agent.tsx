import CaseStudyTemplate from "../../components/site/CaseStudyTemplate";
import { projectEntries } from "../../data";

export default function AiRfpAgentCaseStudy() {
  const project = projectEntries.find((p) => p.slug === "ai-rfp-response-agent")!;
  const nextProject = projectEntries.find((p) => p.slug === "mars-rover");

  const sections = [
    {
      title: "1. Project Overview",
      body: "AI RFP Response Agent is a retrieval-augmented generation (RAG) workflow built with Python, LangChain, ChromaDB, and Streamlit that extracts RFP requirements, drafts answers from approved past responses and product documentation, and flags weakly supported claims.",
    },
    {
      title: "2. Problem & Context",
      body: "Enterprise RFPs contain hundreds of repetitive security, product, and compliance questions. Answering them manually across scattered docs is slow, while naive LLM generation risks inventing unsupported product capabilities.",
    },
    {
      title: "3. Target User",
      body: "Solutions engineers, GTM teams, and product managers responding to multi-requirement technical questionnaires and RFPs.",
    },
    {
      title: "4. Role & Ownership",
      bullets: [
        "Architected the document ingestion, ChromaDB vector indexing, requirement extraction, and citation-linking pipeline.",
        "Built the Streamlit review interface highlighting confidence and source support.",
      ],
    },
    {
      title: "5. System Architecture",
      bullets: [
        "Requirement Extraction: Parses incoming RFP documents into structured individual requirements (tested across 150+ requirements).",
        "Knowledge Base Indexing: Embeds past RFP responses and product documentation into ChromaDB via LangChain.",
        "Grounded Drafting: Retrieves relevant passages and generates draft answers linked directly to source documents.",
        "Support Verification: Evaluates retrieval grounding and flags weakly supported answers (20% flagged in tested runs) for human review.",
      ],
    },
    {
      title: "6. Key Technical & Product Decisions",
      bullets: [
        "Mandatory source linking: Every drafted answer carries references to the underlying requirement and retrieved source document.",
        "Explicit weak-support flagging: Rather than hiding low-confidence retrieval behind fluent text, the system surfaces weakly supported answers for human verification.",
      ],
    },
    {
      title: "7. Challenges & Trade-offs",
      body: "Strict grounding increases the proportion of answers flagged for manual completion when documentation is sparse, trading full automation for factual reliability.",
    },
    {
      title: "8. Evaluation & Measurement",
      bullets: [
        "Processed 150+ RFP requirements end-to-end.",
        "Linked answers to requirements and source documents, flagging 20% of weakly supported answers for human review.",
        "Formal precision/recall benchmark against a labelled gold dataset: Not measured.",
      ],
    },
    {
      title: "9. Results & Limitations",
      bullets: [
        "Reduces first-draft effort on well-documented requirements while isolating gaps where source docs lack evidence.",
        "Limitation: Answer quality depends directly on the currency and coverage of the indexed product documentation.",
      ],
    },
    {
      title: "10. What I Learned & Would Improve",
      body: "In enterprise RAG workflows, knowing when to abstain or flag weak support is more valuable than higher generation fluency. Next improvement would be adding automated eval sets for retrieval recall across different chunking strategies.",
    },
  ];

  return <CaseStudyTemplate project={project} sections={sections} nextProject={nextProject} />;
}
