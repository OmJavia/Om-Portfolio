
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import peeps from "../public/peep-avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Html from "../public/Html.png";
import anvil from "../public/anvil.png";
import tesla from "../public/tesla.png";
import Ai from "../public/Ai.png"
import Car from "../public/Car.png"
import Dice from "../public/dice.png"
import Mapty from "../public/mapty.png"
import Bank_Account from "../public/bank_account.png"
import Guess_The_Number from "../public/guess_number.png"
import SignUp from "../public/SignUp.png";
import Medi from "../public/medi.jpg";
import Ehis from "../public/ehis.jpeg";
import Blog from "../public/Blog.png";
import coming from "../public/coming.jpg";
import NirmanHome from "../public/nirmanbook.png";
import Mars from "../public/Mars.png";
import { useState } from "react";
import QR from "../public/Download Resume.png";
import Link from "next/link";
import Dryer from "../public/Dryer.png";
import CodingShark from "../public/Coding-Shark.png";
import netflix from "../public/netflix.png";
import aerpace from "../public/aerpace.png";
import PDF_Seacrher from "../public/PDF_Searcher.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
  {/* Page Title */}
  <title>Om Javia Portfolio</title>
  <meta name="description" content="Portfolio of Om Javia showcasing skills and projects in full-stack development." />
  
  {/* Favicon */}
  <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
  
  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-5MH7V23HY7"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-5MH7V23HY7');
    `}
  </script>
</Head>


      <main className="p-5 md:px-20 lg:px-40 dark:bg-black">
        <section id="footer" className="min-h-screen">
          <nav className="p-10 flex justify-between rounded-md">
            <h1 className="text-2xl font-semibold dark:text-white">Om Javia</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white" />
              </li>
              <li> 
               <Link href="https://drive.google.com/file/d/1piCpXUSJk7BZzov8hJe--R90HaqbKr5L/view?usp=sharing " target="_blank" 
                className="font-bolder bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bolder px-4 py-2 rounded-md ml-8 font-semibold shadow-md dark:shadow-slate-400">Resume</Link>
              </li>
            </ul>
          </nav>
          <div className="text-center mt-10 p-10">
            <h2 className="text-6xl py-2 text-blue-600 dark:text-amber-400 font-medium md:text-6xl">
              Om Javia
            </h2>
            <h3 className="text-3xl py-2 md:text-4xl dark:text-white">
              Full-Stack Developer
            </h3>
            <p className="text-md py-2 leading-7 text-gray-500 md:text-xl max-w-lg mx-auto">
              I am a Developer who adores crafting user-friendly, responsive websites with Python. With a solid foundation in software engineering, my enthusiasm extends to Machine Learning and AI.
            </p>
            <br></br>
            <a
              className="font-bolder bg-gradient-to-r from-rose-700 to-rose-500 text-white font-bolder px-4 py-2 rounded-md ml-8 font-semibold shadow-md dar:shadow-slate-400"
              href="https://cal.com/Om-Javia">
              Schedule a Meeting
            </a>

          </div>

          <div className="text-5xl flex justify-center gap-10 text-gray-600">
            <a href="https://twitter.com/OmJavia1">
              <AiFillTwitterCircle className="hover:text-blue-500 dark:hover:text-amber-500" />
            </a>
            <a href="https://www.linkedin.com/in/omjavia/">
              <AiFillLinkedin className="hover:text-blue-500 dark:hover:text-amber-500" />
            </a>
            <a href="https://github.com/omjavia">
              <AiFillGithub className="hover:text-blue-500 dark:hover:text-amber-500" />
            </a>
            {/* <AiFillInstagram className= 'hover:text-pink-600'/> */}
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-blue-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={peeps} layout="fill" alt="" />
          </div>
        </section>
        <section className="mt-10">
          <div>
            <h3 className="text-3xl font-semibold py-1 dark:text-white">About Me </h3>
            <p className="text-md py-2 leading-7 text-gray-400">
              Lost in the symphony of circuits and code, I am{" "}
              <span className="text-blue-600 dark:text-amber-300">Om Javia</span> {" "}
              a digital voyager navigating the boundless realms of cyberspace with boundless fascination.
            </p>
          </div>
          <div className="lg:grid grid-cols-3 gap-10 text-center">
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
              <Image src={Ehis} width={100} height={100} alt="" className="mx-auto" />
              <h3 className="text-lg font-medium pt-5 pb-2 dark:text-amber-300">
                Higher Education
              </h3>
              <p className="py-2 dark:text-teal-50">
                Class 10th
              </p>
              <p className="py-2 dark:text-teal-50">
                CBSE
              </p>
              <h4 className="py-4 text-blue-600 dark:text-amber-500"> The Emerald Heights International School </h4>
              <ul className="space-y-1 dark:text-white">
                <li>CGPA - 8.6</li>
              </ul>
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
              <Image src={Ehis} width={100} height={100} alt="" className="mx-auto" />
              <h3 className="text-xl font-medium pt-5 pb-2 dark:text-amber-300">
                Secondary Education
              </h3>
              <p className="py-2 dark:text-teal-50">
                Class 12th
              </p>
              <p className="py-2 dark:text-teal-50">
                CBSE, Science (PCM)
              </p>
              <h4 className="py-4 text-blue-600 dark:text-amber-500">The Emerald Heights International School</h4>
              <ul className="tools space-y-1 dark:text-white" >
                <li>CGPA - 8.1</li>
              </ul>
            </div>

            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
              <Image src={Medi} width={100} height={50} alt="" className="mx-auto" />
              <h3 className="text-xl font-medium pt-5 pb-2 dark:text-amber-300">
                Senior Secondary Education
              </h3>
              <p className="py-2 dark:text-teal-50">
                Bachelor of Technology (B.Tech)
              </p>
              <p className="py-2 dark:text-teal-50">
                Computer Science and Engineering (CSE)
              </p>
              <h4 className="py-4 text-blue-600 dark:text-amber-500">Medi-Caps University</h4>
              <ul className="space-y-1 dark:text-white">
                <li>CGPA - 9</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div>
            <h3 className="text-3xl font-semibold py-1 dark:text-white">Skills I offer </h3>
            <p className="text-md py-2 leading-7 text-gray-400">
              Since the beginning of my college studies I had started as a
              Full-Stack Developer and I have been making clone of{" "}
              <span className="text-blue-600 dark:text-amber-300">certain websites.</span>
              <br />I offer a wide range of services, including design and
              programming.
            </p>
          </div>
          <div className="lg:grid grid-cols-3 gap-10 text-center">
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
              <Image src={design} width={100} height={100} alt="" className="mx-auto" />
              <h3 className="text-lg font-medium pt-5 pb-2 dark:text-amber-300">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-teal-50">
                where creativity meets functionality, crafting intuitive solutions that empower innovation.
              </p>
              <h4 className="py-4 text-blue-600 dark:text-amber-500"> Design Tools </h4>
              <ul className="space-y-1 dark:text-white" >
                <li>VS Code</li>
                <li>Shopify</li>
                <li>Figma</li>
                <li>Word Press</li>
              </ul>
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
              <Image src={code} width={100} height={100} alt="" className="mx-auto" />
              <h3 className="text-lg font-medium pt-5 pb-2 dark:text-amber-300">
                Programming
              </h3>
              <p className="py-2 dark:text-teal-50">
                where ideas take shape in syntax, bridging human creativity with computational power.
              </p>
              <h4 className="py-4 text-blue-600 dark:text-amber-500"> Programming Languages </h4>
              <ul className="space-y-1 dark:text-white">
                <li>Python</li>
                <li>Java</li>
                <li>Html</li>
                <li>C & C++</li>
              </ul>
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
              <Image src={consulting} width={100} height={100} alt="" className="mx-auto" />
              <h3 className="text-lg font-medium pt-5 pb-2 dark:text-amber-300">
                Coding of Design
              </h3>
              <p className="py-2 dark:text-teal-50">
                where development accelerates as powerful tools empower creativity and efficiency.
              </p>
              <h4 className="py-4 text-blue-600 dark:text-amber-500"> Libraries and Frameworks </h4>
              <ul className="space-y-1 dark:text-white">
                <li>React</li>
                <li>Next</li>
                <li>TailwindCSS</li>
                <li>Anvil</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 font-semibold dark:text-white">Projects</h3>
            <div>
              <p className="text-md py-2 leading-7 text-gray-400">
                Since the beginning of my college studies I had started as a
                Frontend Developer and i have been making clone of{" "}
                <span className="text-blue-600 dark:text-amber-300">certain websites.</span>
                <br />I offer a wide range of services, including design and
                programming.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
              <a href="https://www.aerpace.com/">
                <Image
                  src={aerpace}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://movieflix-om.vercel.app/">
                <Image
                  src={netflix}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing">
                <Image
                  src={Mars}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.thecodingsharks.in/">
                <Image
                  src={CodingShark}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/OmJavia/PDF_Searcher">
                <Image
                  src={PDF_Seacrher}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.nirmanbook.com/">
                <Image
                  src={NirmanHome}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://apna-mechanic.vercel.app/">
                <Image
                  src={Car}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/OmJavia/Generate_Blogs">
                <Image
                  src={Blog}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"50%"}
                  height={"50%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://tesla-552544.webflow.io/">
                <Image
                  src={tesla}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/portfolio/">
                <Image
                  src={Html}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://evo-dry.vercel.app/">
                <Image
                  src={Dryer}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/Bank_Account/">
                <Image
                  src={Bank_Account}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/Tracker/">
                <Image
                  src={Mapty}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/Dice_Game/">
                <Image
                  src={Dice}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/Guess_The_Number/">
                <Image
                  src={Guess_The_Number}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100px"}
                  height={"100px"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://physicon-360.anvil.app/">
                <Image
                  src={anvil}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/OmJavia/Open-AI/tree/main">
                <Image
                  src={Ai}
                  className="rounded-lg object-cover border shadow-md hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={SignUp}
                className="rounded-lg object-cover border shadow-md hover:scale-105"
                width={"50%"}
                height={"50%"}
                layout="responsive" alt="" />
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                src={coming}
                className="rounded-lg object-cover border shadow-md hover:scale-105"
                width={"50%"}
                height={"50%"}
                layout="responsive" alt="" />
            </div> */}
          </div>
        </section>
        <section>
          <div className="p-5 rounded-md text-center dark:text-white">
            <p className="font-bold">
              <span>
                <a href="#footer">Om Javia </a>
              </span>
              © 2024
            </p>
            <div className=" text-center">
              <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-slate-900 hover:scale-105">
                <h3 className="text-lg font-medium pt-5 pb-2 dark:text-amber-300">
                  For More Information Scan The Below QR-Code
                </h3>
                <Image src={QR} width={200} height={200} alt="" className="mx-auto" />
              </div>
            </div>
            <p className="mt-2">Created with NextJS and Tailwind 🚀</p>
          </div>
        </section>
      </main>
    </div>
  );
}
