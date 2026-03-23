
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import illustration from "../public/contact_illustration.png";
import avatar1 from "../public/contact_avatar.png";
import Logo from "../public/OJ_logo_new.png"
import contact from "../public/contact.svg"
import { MdPalette } from 'react-icons/md';

// --- CONFIGURATION ---
const FORMSPREE_ID = "xjgajbyk";
const CONTACT_EMAIL = "omjavia18@gmail.com";
// ---------------------

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
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

  const cycleColor = () => {
    setColorIndex((prev) => (prev + 1) % accentColors.length);
  };

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
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Contact | Om Javia</title>
        <meta name="description" content="Contact Om Javia for collaborations and inquiries." />
      </Head>

      <main className="min-h-screen pt-32 p-5 md:px-20 lg:px-40 dark:bg-black transition-colors duration-300">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center border-b bg-white/70 dark:bg-black/80 backdrop-blur-md dark:border-gray-800 transition-all duration-300">
          {/* Left Side: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/">
              <div className="flex items-center cursor-pointer transition-transform hover:scale-110" onMouseEnter={cycleColor}>
                <Image src={Logo} alt="Om Javia" width={60} height={60} className="object-contain" />
              </div>
            </Link>
          </div>

          {/* Center: Headings */}
          <div className="flex-none">
            <ul className="hidden lg:flex items-center gap-6 text-xl font-bold">
              <li><Link href="/" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Home</Link></li>
              <li><Link href="/#skills" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Skills</Link></li>
              <li><Link href="/#experience" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Experience</Link></li>
              <li><Link href="/#projects" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Projects</Link></li>
              <li><Link href="/contact" className="px-5 py-2 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200" onMouseEnter={(e) => { cycleColor(); e.target.style.color = accentColors[colorIndex]; e.target.style.backgroundColor = accentColors[colorIndex] + '15'; }} onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.backgroundColor = 'transparent'; }}>Contact</Link></li>
            </ul>
          </div>

          {/* Right Side Group: Resume, Meeting, Palette, Moon */}
          <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6">
            <Link href="https://drive.google.com/file/d/1piCpXUSJk7BZzov8hJe--R90HaqbKr5L/view?usp=sharing" target="_blank"
              className="hidden sm:block border-2 px-5 py-2 rounded-full font-bold text-sm transition-all"
              style={{ borderColor: accentColors[colorIndex], color: accentColors[colorIndex] }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = accentColors[colorIndex]; e.target.style.color = "white"; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = accentColors[colorIndex]; }}>
              Resume
            </Link>
            <a href="https://cal.com/Om-Javia" target="_blank" rel="noreferrer"
              className="hidden md:block text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all"
              style={{ backgroundColor: accentColors[colorIndex] }}>
              Schedule a Meeting
            </a>

            <div className="flex items-center gap-4 ml-2">
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl dark:text-white hover:opacity-70 transition-opacity" />
            </div>
          </div>
        </nav>

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

        <footer className="mt-20 py-10 text-center text-gray-500 text-sm">
          <p>© 2026 <Link href="/" className="hover:underline">Om Javia</Link>. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
