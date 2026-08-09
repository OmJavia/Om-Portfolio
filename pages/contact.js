import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/Layout";
import contact from "../public/contact.svg";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaRegClock,
} from "react-icons/fa";

// --- CONFIGURATION ---
const FORMSPREE_ID = "xjgajbyk";
const CONTACT_EMAIL = "omjavia18@gmail.com";
const CAL_URL = "https://cal.com/Om-Javia";
// ---------------------

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const accentColor = "#3b82f6";
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || "a visitor"}`
  )}&body=${encodeURIComponent(formData.message)}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New portfolio message from ${formData.name}`,
          _gotcha: "",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Om Javia</title>
        <meta name="description" content="Contact Om Javia to book an AI product call or send a project inquiry." />
      </Head>

      <section className="mt-8 lg:mt-12">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00] shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80">
                Open to AI product work
              </span>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
                  Let&apos;s build the next useful thing.
                </h1>
                <p className="max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-300 sm:text-lg">
                  Share your AI, computer vision, RAG, or product idea. If it needs a real conversation, book a call directly.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-neutral-200 bg-neutral-950 p-5 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff6b00] dark:border-neutral-800"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg">
                  <FaCalendarAlt />
                </div>
                <p className="text-lg font-bold">Book a call</p>
                <p className="mt-2 text-sm leading-6 text-white/75 group-hover:text-white/90">
                  Best for project scoping, hiring conversations, or product strategy.
                </p>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group rounded-2xl border border-neutral-200 bg-white/80 p-5 text-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-white"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 text-lg text-blue-600 dark:text-blue-400">
                  <FaEnvelope />
                </div>
                <p className="text-lg font-bold">Send an email</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  Better for async queries, resume requests, or a quick intro.
                </p>
              </a>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white/60 p-5 dark:border-neutral-800 dark:bg-neutral-900/60">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <FaRegClock />
                </div>
                <div>
                  <p className="font-semibold text-neutral-950 dark:text-white">What happens next</p>
                  <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    I usually reply within 24 hours. For call bookings, add your context in the Cal.com notes so we can use the time well.
                  </p>
                </div>
              </div>
            </div>


          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white/85 p-5 shadow-2xl shadow-black/5 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/85 dark:shadow-black/40 sm:p-8">
            <div className="mb-7 flex flex-col justify-between gap-4 border-b border-neutral-200 pb-6 dark:border-neutral-800 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b00]">
                  Project inquiry
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
                  Tell me what you&apos;re building
                </h2>
              </div>
              <div className="flex items-center gap-3 text-xl text-neutral-500 dark:text-neutral-400">
                <a href="https://www.linkedin.com/in/omjavia/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[#ff6b00]">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/omjavia" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-[#ff6b00]">
                  <FaGithub />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={20}
                  rows="7"
                  placeholder="What are you building, what problem are you solving, and where can I help?"
                  className="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                style={{ backgroundColor: accentColor }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaPaperPlane className="text-sm" />
                {status === "submitting" ? "Sending..." : "Send project query"}
              </button>

              {status === "success" && (
                <p className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-center font-semibold text-emerald-600 dark:text-emerald-400">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <div className="rounded-2xl bg-red-500/10 px-4 py-3 text-center">
                  <p className="font-semibold text-red-500">
                    Something went wrong. Please try again or send the message directly.
                  </p>
                  <a
                    href={mailtoHref}
                    className="mt-2 inline-block font-bold text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Send via direct email
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
