import type { Metadata } from "next";
import {socialLinks} from "../config";
import Image from "next/image";
import {FiLink} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
      <section className="z-10">
          <div className="grid grid-cols-12 gap-6 items-start">
              {/* Left column (text) - 4/8 */}
              <div className="col-span-8">
                  <h1 className="mb-6 text-5xl font-bold tracking-tight">
                      Things I've built in the pursuit of{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r to-rose-600 from-amber-500">
                        purpose
                      </span>
                      <span className="text-3xl font-semibold ml-4 text-zinc-700"> ( and curing boredom )</span>
                  </h1>
                  <div className="prose prose-neutral dark:prose-invert text-gray-500 dark:text-gray-400">
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
              <div className="col-span-5 flex justify-center md:justify-end"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-4">
              {/* Each of these is one card, directly in the grid */}
              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible h-64">
                  <a href="#">
                      <div
                          className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-150 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"></div>

                      <div className="relative z-10">
                          <div className="inline-flex items-center space-x-4">
                              {/* Profile image */}
                              <div
                                  className="inline-flex items-center justify-center rounded-full ring-1 ring-zinc-900/5 dark:ring-zinc-600/50 backdrop-blur p-2">
                                  <div className="rounded-full ring-[8px] ring-white/90 dark:ring-zinc-800/95">
                                      <Image
                                          src="/projects/dgDark.jpg"
                                          alt="Profile"
                                          className="w-8 h-8 rounded-full"
                                          unoptimized
                                          width={8}
                                          height={8}
                                          priority
                                      />
                                  </div>
                              </div>

                              {/* Tool icons with tooltips */}
                              <div className="flex items-center space-x-4">
                                  {[
                                      {src: "/tools/javascript.png", label: "JavaScript"},
                                      {src: "/tools/github.png", label: "GitHub"},
                                      {src: "/tools/figma.png", label: "Figma"},
                                  ].map((tool, i) => (
                                      <div key={i} className="relative">
                                          <img
                                              src={tool.src}
                                              alt=""
                                              className="peer w-7 h-7 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:scale-105 transition-transform"
                                          />
                                          <div
                                              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-opacity duration-300 px-2 py-1 text-xs font-medium text-black dark:text-white bg-zinc-100 dark:bg-zinc-700 rounded-lg whitespace-nowrap">
                                              {tool.label}
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>

                          <h2 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold mt-6">
                              Card Title
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              This is a description that shows up inside the card.
                          </p>

                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
            github.com/your-project
          </span>
                          </div>
                      </div>
                  </a>
              </div>
              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible h-64">
                  <a href="#">
                      {/* Background layer with less noticeable expansion */}
                      <div
                          className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-150 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"
                      ></div>

                      <div className="relative z-10">
                          <div className="inline-flex items-center space-x-4">
                              {/* Profile image with double ring */}
                              <div
                                  className="inline-flex items-center justify-center rounded-full ring-1 ring-zinc-900/5 dark:ring-zinc-600/50 backdrop-blur p-2">
                                  <div className="rounded-full ring-[8px] ring-white/90 dark:ring-zinc-800/95">
                                      <Image
                                          src="/projects/dgDark.jpg"
                                          alt="Profile"
                                          className="w-8 h-8 rounded-full"
                                          unoptimized
                                          width={8}
                                          height={8}
                                          priority
                                      />
                                  </div>
                              </div>

                              {/* Tool icons with peer-hover tooltip */}
                              <div className="flex items-center space-x-4">
                                  {[
                                      {src: "/tools/javascript.png", label: "JavaScript"},
                                      {src: "/tools/github.png", label: "GitHub"},
                                      {src: "/tools/figma.png", label: "Figma"},
                                  ].map((tool, i) => (
                                      <div key={i} className="relative">
                                          <img
                                              src={tool.src}
                                              alt=""
                                              className="peer w-7 h-7 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:scale-105 transition-transform"
                                          />
                                          <div
                                              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-opacity duration-300 px-2 py-1 text-xs font-medium text-black dark:text-white bg-zinc-100 dark:bg-zinc-700 rounded-lg whitespace-nowrap">
                                              {tool.label}
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>

                          <h2 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold mt-6">
                              Card Title
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              This is a description that shows up inside the card.
                          </p>

                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      github.com/your-project
                    </span>
                          </div>
                      </div>
                  </a>
              </div>
              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible h-64">
                  <a href="#">
                      {/* Background layer with less noticeable expansion */}
                      <div
                          className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-150 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"
                      ></div>

                      <div className="relative z-10">
                          <div className="inline-flex items-center space-x-4">
                              {/* Profile image with double ring */}
                              <div
                                  className="inline-flex items-center justify-center rounded-full ring-1 ring-zinc-900/5 dark:ring-zinc-600/50 backdrop-blur p-2">
                                  <div className="rounded-full ring-[8px] ring-white/90 dark:ring-zinc-800/95">
                                      <Image
                                          src="/projects/dgDark.jpg"
                                          alt="Profile"
                                          className="w-8 h-8 rounded-full"
                                          unoptimized
                                          width={8}
                                          height={8}
                                          priority
                                      />
                                  </div>
                              </div>

                              {/* Tool icons with peer-hover tooltip */}
                              <div className="flex items-center space-x-4">
                                  {[
                                      {src: "/tools/javascript.png", label: "JavaScript"},
                                      {src: "/tools/github.png", label: "GitHub"},
                                      {src: "/tools/figma.png", label: "Figma"},
                                  ].map((tool, i) => (
                                      <div key={i} className="relative">
                                          <img
                                              src={tool.src}
                                              alt=""
                                              className="peer w-7 h-7 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:scale-105 transition-transform"
                                          />
                                          <div
                                              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-opacity duration-300 px-2 py-1 text-xs font-medium text-black dark:text-white bg-zinc-100 dark:bg-zinc-700 rounded-lg whitespace-nowrap">
                                              {tool.label}
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>

                          <h2 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold mt-6">
                              Card Title
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              This is a description that shows up inside the card.
                          </p>

                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      github.com/your-project
                    </span>
                          </div>
                      </div>
                  </a>
              </div>
              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible h-64">
                  <a href="#">
                      {/* Background layer with less noticeable expansion */}
                      <div
                          className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-150 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"
                      ></div>

                      <div className="relative z-10">
                          <div className="inline-flex items-center space-x-4">
                              {/* Profile image with double ring */}
                              <div
                                  className="inline-flex items-center justify-center rounded-full ring-1 ring-zinc-900/5 dark:ring-zinc-600/50 backdrop-blur p-2">
                                  <div className="rounded-full ring-[8px] ring-white/90 dark:ring-zinc-800/95">
                                      <Image
                                          src="/projects/dgDark.jpg"
                                          alt="Profile"
                                          className="w-8 h-8 rounded-full"
                                          unoptimized
                                          width={8}
                                          height={8}
                                          priority
                                      />
                                  </div>
                              </div>

                              {/* Tool icons with peer-hover tooltip */}
                              <div className="flex items-center space-x-4">
                                  {[
                                      {src: "/tools/javascript.png", label: "JavaScript"},
                                      {src: "/tools/github.png", label: "GitHub"},
                                      {src: "/tools/figma.png", label: "Figma"},
                                  ].map((tool, i) => (
                                      <div key={i} className="relative">
                                          <img
                                              src={tool.src}
                                              alt=""
                                              className="peer w-7 h-7 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:scale-105 transition-transform"
                                          />
                                          <div
                                              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-opacity duration-300 px-2 py-1 text-xs font-medium text-black dark:text-white bg-zinc-100 dark:bg-zinc-700 rounded-lg whitespace-nowrap">
                                              {tool.label}
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>

                          <h2 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold mt-6">
                              Card Title
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              This is a description that shows up inside the card.
                          </p>

                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      github.com/your-project
                    </span>
                          </div>
                      </div>
                  </a>
              </div>
          </div>
      </section>
  )
      ;
}
