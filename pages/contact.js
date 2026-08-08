import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import avatar1 from "../public/contact_avatar.png";
import contact from "../public/contact.svg";

// --- CONFIGURATION ---
const FORMSPREE_ID = "xjgajbyk";
const CONTACT_EMAIL = "omjavia18@gmail.com";
// ---------------------

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const [colorIndex, setColorIndex] = useState(0);
  const accentColors = [
    "#3b82f6"
  ];

  const tealAccent = accentColors[colorIndex];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      if (FORMSPREE_ID === "xjgajbyk") {
        console.warn("Using placeholder Formspree ID. Form submission will fail.");
      }

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
        <meta name="description" content="Contact Om Javia for collaborations and inquiries." />
      </Head>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
        {/* Left Column: Heading and Illustration */}
        <div className="flex-1 space-y-8">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white leading-none">
              Contact
            </h1>
            <div className="flex items-center gap-2 mt-[-10px] ml-1">
              <span className="text-4xl md:text-5xl font-bold" style={{ color: tealAccent }}>Me</span>
              <div className="w-20 h-20 md:w-20 md:h-20">
                <Image src={avatar1} alt="Avatar" width={80} height={80} style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </div>

          <div className="max-w-md">
            <Image src={contact} alt="Contact Illustration" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex-1 w-full max-w-xl">
          <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Om Javia"
                  className="w-full bg-blue-50/50 dark:bg-slate-800 border-none rounded-xl px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="omjavia18@gmail.com"
                  className="w-full bg-blue-50/50 dark:bg-slate-800 border-none rounded-xl px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Hey there! Let's connect"
                  className="w-full bg-blue-50/50 dark:bg-slate-800 border-none rounded-xl px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                style={{ backgroundColor: tealAccent }}
                className="w-full text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send email"}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center font-semibold mt-4 animate-bounce">
                  Message sent successfully! ✨
                </p>
              )}
              {status === "error" && (
                <div className="text-center mt-4 space-y-2">
                  <p className="text-red-500 font-semibold">
                    Something went wrong. Have you set your Formspree ID?
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Alternatively, click below to send via your email client:
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Portfolio Inquiry from ${formData.name}&body=${formData.message}`}
                    className="inline-block text-teal-600 dark:text-teal-400 font-bold hover:underline"
                  >
                    Send via Direct Email ✉️
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
