import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import MermaidDiagram from "../../components/MermaidDiagram";
import Blog from "../../public/Blog.png";
import { FaArrowLeft, FaGithub } from "react-icons/fa";

const ARCHITECTURE_DIAGRAM = `
flowchart TB
    subgraph Input["📝 User Input & Config"]
        PROMPT["Topic / Keyword Prompt"]
        CONFIG["Tone, Target Length & Subheads Config"]
    end

    subgraph Engine["🧠 OpenAI Generation Pipeline"]
        LLM["OpenAI GPT API\\n(Structured Prompting)"]
        PARSER["Markdown Output Parser\\n(Format Validation)"]
    end

    subgraph Output["📁 Output Artifacts"]
        MD["Markdown Blog File"]
        META["SEO Title & Description Meta"]
    end

    PROMPT --> LLM
    CONFIG --> LLM
    LLM --> PARSER
    PARSER --> MD
    PARSER --> META
`;

const CHALLENGES = [
  {
    challenge: "Preventing model hallucinations and off-topic tangents",
    solution:
      "Engineered strict system prompts and few-shot templates enforcing outline constraints and factual topic boundaries.",
    tag: "Prompt Engineering",
    color: "blue",
  },
  {
    challenge: "Generating clean, publication-ready markdown output",
    solution:
      "Structured output schema validation to ensure headers, code snippets, lists, and metadata blocks are correctly formatted.",
    tag: "GenAI Workflow",
    color: "green",
  },
  {
    challenge: "Command-line automation & script portability",
    solution:
      "Built the tool using Python with standard CLI arguments, enabling fast local execution and integration with build pipelines.",
    tag: "Python Tooling",
    color: "purple",
  },
];

const METRICS = [
  { value: "< 5s", label: "Blog outline generation" },
  { value: "GPT-4", label: "OpenAI LLM Engine" },
  { value: "Markdown", label: "Output format" },
  { value: "Python", label: "Automation script" },
];

export default function AIBlogGeneratorCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>AI Blog Generator Case Study | Om Javia</title>
        <meta
          name="description"
          content="Deep-dive into AI Blog Generator — Om Javia's automated Python blog generation tool using OpenAI GPT models and prompt engineering."
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
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/40">
                Generative AI
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-md bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-900/40">
                Open Source
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95]">
              AI Blog Generator
            </h1>
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              An automated content generation tool exploring prompt engineering, structured GPT outputs, and publication-ready markdown blog workflows.
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
              src={Blog}
              alt="AI Blog Generator tool preview"
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/OmJavia/Generate_Blogs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950 shadow-sm"
            >
              <FaGithub className="text-sm" /> View Repository
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
              Automating consistent, structured technical blog writing.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              Generic LLM prompts often yield unstructured, repetitive text that requires heavy manual editing before publishing.
            </p>
            <p>
              This project demonstrates prompt templates and markdown parsers that turn simple topic inputs into well-formatted technical articles with proper section headers and metadata.
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
              GPT Prompting & Formatting Pipeline.
            </h2>
          </div>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            The script passes user parameters into structured prompt templates, invoking OpenAI API endpoints and validating output syntax before saving files locally.
          </p>
          <MermaidDiagram chart={ARCHITECTURE_DIAGRAM} className="max-w-4xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Prompt Engineering", desc: "Structured system messages for consistent formatting and tone." },
              { title: "OpenAI GPT Models", desc: "High-quality text generation for technical blog sections." },
              { title: "Markdown Export", desc: "Ready-to-publish `.md` file generation with SEO metadata." },
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
              GenAI Engineering.
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
                    "bg-purple-50 text-purple-600 border border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-900/50"
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
            Open Source
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Explore the Python script.
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400 leading-relaxed">
            The Python code and prompt templates are available on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/OmJavia/Generate_Blogs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 shadow-sm"
            >
              <FaGithub className="text-sm" /> Open GitHub Repository
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Discuss Generative AI Tooling
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
