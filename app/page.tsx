import Image from "next/image";
import { socialLinks } from "./config";
import { PiToolboxDuotone } from "react-icons/pi";


export default function Page() {
  return (
      <section className="z-10">
        <div className="grid grid-cols-12 gap-6 items-start pb-8">
          {/* Left column (text) - 4/8 */}
          <div className="col-span-7">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Hey there, I'm{" "}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-amber-500">
                Nahshon Weissberg
              </span> !
            </h1>
            <div className="prose prose-neutral dark:prose-invert text-gray-500 dark:text-gray-400">
              <p>
                I'm a student at the University of Waterloo studying Computer Engineering.
                Praesent justo libero, ultrices sed vestibulum vestibulum, porttitor at ex.
                Integer dapibus justo in elit vulputate, ac venenatis mauris semper.
                Pellentesque et elit metus. Pellentesque consequat dictum nisi in efficitur.
              </p>
              <p>
                Nextfolio has everything you need for a portfolio: MDX blog, SEO, RSS,
                Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and{" "}
                <a
                    target="_blank"
                    href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
                >
                  more
                </a>
                .
                Nextfolio is{" "}
                <a href={socialLinks.github} target="_blank">
                  open-source
                </a>{" "}
                and fully customizable, making it easy to add more features.
              </p>
            </div>
          </div>

          {/* Right column (image) - 4/8 */}
          <div className="col-span-5 flex justify-center md:justify-end">
            <a
                href="#"
                className="block p-6 max-w-76 rounded-[17px] bg-[#e0e0e0] dark:bg-[#1d1d20] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] dark:shadow-[15px_15px_30px_#111212]"
            >
              <h5 className="mb-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 text-balance flex items-center gap-x-3">
                <PiToolboxDuotone className="text-2xl text-zinc-400 dark:text-zinc-600"/>
                My digital tool box
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                Web Development
              </p>
              <hr className="h-px mb-2.5 mt-0.5 bg-zinc-300 border-0 dark:bg-zinc-700"/>
              {/* Grid of Tool Images */}
              <div className="grid grid-cols-7 gap-4">
                {[
                  {src: "/tools/javascript.png", label: "JavaScript"},
                  {src: "/tools/github.png", label: "GitHub"},
                  {src: "/tools/figma.png", label: "Figma"},
                  {src: "/tools/html.png", label: "HTML5"},
                  {src: "/tools/css.png", label: "CSS3"},
                  {src: "/tools/js.png", label: "JS"},
                  {src: "/tools/github.png", label: "GitHub"},
                  {src: "/tools/figma.png", label: "Figma"},
                  {src: "/tools/github.png", label: "GitHub"},
                  {src: "/tools/figma.png", label: "Figma"},
                  {src: "/tools/nextjs.png", label: "Next.js"},
                  {src: "/tools/tailwind.png", label: "Tailwind CSS"},
                ].map((tool, i) => (
                    <div key={i} className="relative group">
                      {/* Tool icon */}
                      <img
                          src={tool.src}
                          alt={""}
                          className="w-7 h-7 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:scale-105 transition-transform"
                      />

                      {/* Tooltip (no arrow, animated) */}
                      <div
                          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 text-xs font-medium text-black dark:text-white bg-zinc-100 rounded-lg dark:bg-zinc-700 whitespace-nowrap">
                        {tool.label}
                      </div>
                    </div>
                ))}
              </div>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400 pt-3">
                Embedded Systems & Firmware
              </p>
              <hr className="h-px mb-2.5 mt-0.5 bg-zinc-300 border-0 dark:bg-zinc-700"/>
              {/* Grid of Tool Images */}
              <div className="grid grid-cols-7 gap-4">
                {[
                  {src: "/tools/javascript.png", label: "JavaScript"},
                  {src: "/tools/github.png", label: "GitHub"},
                  {src: "/tools/figma.png", label: "Figma"},
                ].map((tool, i) => (
                    <div key={i} className="relative group">
                      {/* Tool icon */}
                      <img
                          src={tool.src}
                          alt={""}
                          className="w-7 h-7 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:scale-105 transition-transform"
                      />

                      {/* Tooltip (no arrow, animated) */}
                      <div
                          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 text-xs font-medium text-black dark:text-white bg-zinc-100 rounded-lg dark:bg-zinc-700 whitespace-nowrap">
                        {tool.label}
                      </div>
                    </div>
                ))}
              </div>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400 pt-3">
                Hardware & Prototyping
              </p>
              <hr className="h-px mb-2.5 mt-0.5 bg-zinc-300 border-0 dark:bg-zinc-700"/>
              {/* Grid of Tool Images */}
              <div className="grid grid-cols-7 gap-4">
                {[
                  {src: "/tools/javascript.png", label: "JavaScript"},
                  {src: "/tools/github.png", label: "GitHub"},
                  {src: "/tools/figma.png", label: "Figma"},
                  {src: "/tools/html.png", label: "HTML5"},
                  {src: "/tools/css.png", label: "CSS3"},
                  {src: "/tools/tailwind.png", label: "Tailwind CSS"},
                ].map((tool, i) => (
                    <div key={i} className="relative group">
                      {/* Tool icon */}
                      <img
                          src={tool.src}
                          alt={""}
                          className="w-7 h-7 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:scale-105 transition-transform"
                      />

                      {/* Tooltip (no arrow, animated) */}
                      <div
                          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 text-xs font-medium text-black dark:text-white bg-zinc-100 rounded-lg dark:bg-zinc-700 whitespace-nowrap">
                        {tool.label}
                      </div>
                    </div>
                ))}
              </div>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400 pt-3">
                Data & Computation
              </p>
              <hr className="h-px mb-2.5 mt-0.5 bg-zinc-300 border-0 dark:bg-zinc-700"/>
              {/* Grid of Tool Images */}
              <div className="grid grid-cols-7 gap-4">
                {[
                  {src: "/tools/javascript.png", label: "JavaScript"},
                  {src: "/tools/github.png", label: "GitHub"},
                  {src: "/tools/figma.png", label: "Figma"},
                  {src: "/tools/html.png", label: "HTML5"},
                  {src: "/tools/css.png", label: "CSS3"},
                ].map((tool, i) => (
                    <div key={i} className="relative group">
                      {/* Tool icon */}
                      <img
                          src={tool.src}
                          alt={""}
                          className="w-7 h-7 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:scale-105 transition-transform"
                      />

                      {/* Tooltip (no arrow, animated) */}
                      <div
                          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 text-xs font-medium text-black dark:text-white bg-zinc-100 rounded-lg dark:bg-zinc-700 whitespace-nowrap">
                        {tool.label}
                      </div>
                    </div>
                ))}
              </div>


            </a>

          </div>
        </div>

        <hr className="h-px my-8 bg-zinc-300 border-0 dark:bg-zinc-700"/>

        <div className="flex justify-center w-full pt-5">
          <div className="inline-flex items-start justify-center space-x-2">
            <h1 className="text-4.5xl font-bold pt-2 text-right">
              <span className="inline-block relative leading-none">
                <span
                    className="relative px-1 underline underline-offset-2.5 decoration-8 decoration-amber-400 dark:decoration-amber-500">below</span>
              </span> are some of my favorite
            </h1>
            <h1 className="text-8.5xl font-bold tracking-tight text-transparent bg-clip-text
      [background-image:url('/highlights.png')] bg-cover bg-center px-4 py-2
      [text-shadow:rgba(252,192,0,0.35)_0px_0_15px;]">
              HIGHLIGHTS
            </h1>
          </div>
        </div>
      </section>
  );
}
