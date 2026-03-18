
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import illustration from "../public/contact_illustration.png";
import avatar from "../public/contact_avatar.png";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const colorIndex = 0; // Default blue for contact page or share state
  const accentColors = [
    "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#ef4444", "#06b6d4", "#f97316",
  ];
  const tealAccent = "#2d9a9a"; // Matching the reference image

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Contact | Om Javia</title>
        <meta name="description" content="Contact Om Javia for collaborations and inquiries." />
      </Head>

      <main className="min-h-screen p-5 md:px-20 lg:px-40 dark:bg-black transition-colors duration-300">
        <nav className="px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold dark:text-white cursor-pointer">Om Javia</h1>
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <li><Link href="/#skills" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">Technical Skills</Link></li>
            <li><Link href="/#experience" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">Past Experiences</Link></li>
            <li><Link href="/#projects" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="text-blue-600 dark:text-amber-400 font-bold border-b-2 border-current">Contact</Link></li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-xl dark:text-white" />
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1piCpXUSJk7BZzov8hJe--R90HaqbKr5L/view?usp=sharing" target="_blank"
                style={{ backgroundColor: accentColors[colorIndex] }}
                className="text-white px-4 py-2 rounded-md font-semibold text-sm shadow-md dark:shadow-slate-400">Resume</Link>
            </li>
          </ul>
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
                <div className="w-16 h-16 md:w-20 md:h-20">
                  <Image src={avatar} alt="Avatar" width={80} height={80} layout="responsive" />
                </div>
              </div>
            </div>

            <div className="max-w-md">
              <Image src={illustration} alt="Contact Illustration" layout="responsive" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-blue-50/50 dark:bg-slate-800 border-none rounded-xl px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full bg-blue-50/50 dark:bg-slate-800 border-none rounded-xl px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Hey there! Let's connect"
                    className="w-full bg-blue-50/50 dark:bg-slate-800 border-none rounded-xl px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: tealAccent }}
                  className="w-full text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all active:scale-[0.98]"
                >
                  Send email
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-20 py-10 text-center text-gray-500 text-sm">
          <p>© 2025 <Link href="/" className="hover:underline">Om Javia</Link>. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
