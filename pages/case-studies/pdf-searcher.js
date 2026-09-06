import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import PDF_Searcher from "../../public/PDF_Searcher.jpg";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ARCHITECTURE_DIAGRAM = `
flowchart TB
    subgraph Input["📄 Document Input"]
        PDF["PDF Documents\\n(Multi-page & Multi-column)"]
    end

    subgraph Preprocessing["⚙️ Processing Engine"]
        EXTRACT["Text Extraction\\n(PyPDF / Unstructured)"]
        CHUNK["Recursive Chunking\\n(LangChain Token Splitting)"]
    end

    subgraph VectorDB["🧠 Vector & Embedding Store"]
        EMBED["OpenAI Embeddings\\n(text-embedding-3-small)"]
        INDEX["Vector Index\\n(FAISS / Chroma Store)"]
    end

    subgraph Query["🔍 Retrieval & Response"]
        USER["User Search Query"] --> EMBED_Q["Query Vectorization"]
        EMBED_Q --> SEARCH["Similarity Search (Top K)"]
        SEARCH --> INDEX
        INDEX --> CONTEXT["Retrieved Context Chunks"]
        CONTEXT --> LLM["GPT Response Synthesizer"]
    end

    PDF --> EXTRACT
    EXTRACT --> CHUNK
    CHUNK --> EMBED
    EMBED --> INDEX
`;

const CHALLENGES = [
  {
    challenge: "Multi-column layout text extraction accuracy",
    solution:
      "Implemented structure-aware text extraction pipelines to prevent text from adjacent columns from merging into broken sentences during parsing.",
    tag: "Data Ingestion",
    color: "blue",
  },
  {
    challenge: "Preserving semantic context during document chunking",
    solution:
      "Tuned recursive text splitters with overlapping boundaries (500 token chunks + 50 token overlap), maintaining entity references across chunk breaks.",
    tag: "RAG Architecture",
    color: "orange",
  },
  {
    challenge: "Fast vector search latency on large multi-page PDFs",
    solution:
      "Utilized optimized local vector indexing with fast cosine distance calculations, reducing query retrieval latency to under 120ms.",
    tag: "Vector Search",
    color: "green",
  },
];

const METRICS = [
  { value: "< 120ms", label: "Vector retrieval latency" },
  { value: "500 Token", label: "Chunk size tuning" },
  { value: "OpenAI", label: "Embeddings API" },
  { value: "Python", label: "Core language" },
];

export default function PDFSearcherCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>PDF Searcher Case Study | Om Javia</title>
        <meta
          name="description"
          content="Deep-dive into PDF Searcher — Om Javia's RAG-based document intelligence tool using Python, LangChain, OpenAI embeddings, and vector stores."
        />
      </Head>

      <article className="space-y-20 py-4">
        {/* Back nav */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <FaArrowLeft className="text-xs" /> Back to projects
        </Link>

        {/* Hero */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-900/40">
                AI Utility
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/40">
                RAG Pipeline
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95]">
              PDF Searcher
            </h1>
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              An AI document search utility designed to help users instantly locate, query, and extract answers from dense PDF files via semantic vector retrieval.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-neutral-200 bg-white/80 p-5 text-center dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm"
              >
                <p className="text-3xl font-black tracking-tight text-neutral-950 dark:text-white">
                  {m.value}
                </p>
                <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/10">
            <Image
              src={PDF_Searcher}
              alt="PDF Searcher tool interface"
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/OmJavia/PDF_Searcher"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950 shadow-sm"
            >
              <FaGithub className="text-sm" /> View Source Code
            </a>
          </div>
        </div>

        {/* Problem Statement */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              Problem Statement
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Keyword search fails on complex documents.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              Standard Ctrl+F search relies on exact keyword matching, which fails when searching for concepts, synonyms, or paraphrased answers inside lengthy PDF reports or manuals.
            </p>
            <p>
              PDF Searcher uses semantic embeddings and vector stores to understand context rather than exact words, delivering precise context snippets to the user.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              System Architecture
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              RAG & Retrieval Pipeline.
            </h2>
          </div>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            The processing flow ingests PDFs, splits content recursively, computes embeddings with OpenAI models, and executes nearest-neighbor similarity search to answer user questions accurately.
          </p>
          <MermaidDiagram chart={ARCHITECTURE_DIAGRAM} className="max-w-4xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "LangChain Chunking", desc: "Recursive text splitting with overlap to maintain semantic continuity." },
              { title: "OpenAI Embeddings", desc: "High-dimensional vector representations for deep text similarity search." },
              { title: "Vector Indexing", desc: "Sub-second nearest-neighbor similarity retrieval across indexed chunks." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white/80 p-5 dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm">
                <p className="font-bold text-neutral-950 dark:text-white">{item.title}</p>
                <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="space-y-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
              Engineering Challenges
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Document intelligence hurdles.
            </h2>
          </div>
          <div className="space-y-4">
            {CHALLENGES.map((c) => (
              <div
                key={c.challenge}
                className="grid gap-6 rounded-2xl border border-neutral-200 bg-white/80 p-6 dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm sm:grid-cols-[1fr_2fr]"
              >
                <div>
                  <span className={`inline-block font-mono text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md mb-3 ${
                    c.color === "blue" ? "bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/50" :
                    c.color === "green" ? "bg-green-50 text-green-700 border border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50" :
                    "bg-orange-50 text-orange-600 border border-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-900/40"
                  }`}>
                    {c.tag}
                  </span>
                  <p className="font-bold text-neutral-950 dark:text-white leading-snug text-sm sm:text-base">
                    {c.challenge}
                  </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed self-center">
                  {c.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-neutral-200 bg-neutral-950 p-8 text-white shadow-2xl sm:p-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Open source repository
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Check out the repository.
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400 leading-relaxed">
            The full source code, python scripts, and vector store configuration are available on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/OmJavia/PDF_Searcher"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              <FaGithub className="text-sm" /> View on GitHub
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Discuss AI RAG tools
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
