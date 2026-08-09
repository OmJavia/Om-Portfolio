import Head from "next/head";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import Layout from "../components/Layout";
import peeps from "../public/Om_pic.jpg";


export default function About() {
  const accentColor = "#3b82f6";

  return (
    <Layout>
      <Head>
        <title>About | Om Javia</title>
        <meta name="description" content="Learn more about Om Javia, an AI Engineer and Full-stack Developer." />
      </Head>

      <section className="flex flex-col lg:flex-row items-start justify-between gap-12 mt-10">

        {/* Left Column: Image */}
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image src={peeps} width={400} height={500} alt="Om Javia" className="relative rounded-3xl shadow-2xl object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>

        {/* Right Column: Bio & Info */}
        <div className="flex-[1.5] space-y-8">
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white leading-[0.8]">
              About
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-5xl md:text-7xl font-bold italic" style={{ color: accentColor }}>ME</span>
              <span className="text-6xl animate-bounce">😜</span>
            </div>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            <p>
              🤵 I am <span className="font-bold underline decoration-2 decoration-blue-500" style={{ color: accentColor }}>Om Javia</span>, an AI Engineer based in Bangalore, India. Currently, I am at <span className="font-bold italic">Metashot</span>, where I specialize in building real-time computer vision systems and scalable AI solutions.
            </p>
            <p>
              🚀 My expertise lies in <span className="font-bold" style={{ color: accentColor }}>Computer Vision, Python, and Machine Learning</span>. From engineering obstacle-aware path planning for rovers at <span className="font-bold">ISRO</span> to deploying high-performance ML models at scale, I enjoy solving complex problems that bridge the gap between artificial intelligence and user experience.
            </p>
            <p>
              🎓 I hold a Bachelor of Technology in Computer Science from <span className="font-bold italic">Medi-Caps University</span> (CGPA 9.0/10), with a specialization in Cloud Technology and Information Security.
            </p>
          </div>

          {/* Social Icons Badge Row */}
          <div className="flex flex-wrap gap-4 pt-4">
            {[
              { icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/omjavia/" },
              { icon: <AiFillTwitterCircle />, link: "https://twitter.com/OmJavia1" },
              { icon: <AiFillGithub />, link: "https://github.com/omjavia" },
              { icon: <AiFillInstagram />, link: "https://instagram.com/om_javia_" },
              { icon: <MdEmail />, link: "mailto:omjavia18@gmail.com" }
            ].map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noreferrer"
                className="p-3 rounded-xl bg-gray-100 dark:bg-slate-900 text-3xl shadow-sm text-gray-900 dark:text-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                onMouseEnter={(e) => { e.currentTarget.style.color = accentColor; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
