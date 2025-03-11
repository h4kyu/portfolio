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
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://github.com/h4kyu/GenomeKit"
                      target="_blank"
                  >
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
                                          alt=""
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
                                      {src: "/tools/cpp.png", label: "C++"},
                                      {src: "/tools/python.png", label: "Python"},
                                      {src: "/tools/githubActions.svg", label: "Github Actions"},
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
                              GenomeKit
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Deep Genomics’ <span className="text-black dark:text-gray-300">Python</span> library with
                              a <span
                              className="text-black dark:text-gray-300">highly-optimized C++</span> core for querying
                              binary
                              genomic data.
                              Contributing to the C++ layer and Python unit tests.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              I'm currently working on packaging the library
                              for distribution via <span className="text-black dark:text-gray-300">PyPI</span> using
                              Python
                              wheels.
                          </p>

                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      github.com/h4kyu/GenomeKit
                    </span>
                          </div>
                      </div>
                  </a>
              </div>

              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://drive.google.com/file/d/1ur8atBQIfAi-F2DCGxZ6B1qXduMdApll/view?usp=sharing"
                      target="_blank"
                  >
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
                                          src="/projects/dipole.png"
                                          alt=""
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
                                      {src: "/tools/matlab.png", label: "MATLAB"},
                                      {src: "/tools/fusion360.png", label: "Fusion 360"},
                                      {src: "/tools/pynec.png", label: "PyNEC"},
                                      {src: "/tools/nanovnaSaver.png", label: "NanoVNASaver"},
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
                              Antenna Theory Investigation
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Developed a model in <span className="text-black dark:text-gray-300">MATLAB</span> for
                              dipole length
                              vs. radiation pattern, derived from{" "}
                              <span className="text-black dark:text-gray-300">4th-year Antenna Theory</span>.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Saved <span className="text-black dark:text-gray-300">$17,000</span> in equipment costs by
                              using a
                              budget{" "}
                              <span className="text-black dark:text-gray-300">NanoVNA</span> on a <span
                              className="text-black dark:text-gray-300">3D-printed</span> rotating axis to measure
                              radiation
                              pattern.
                          </p>

                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      Dipole Geometry Investigation.pdf
                    </span>
                          </div>
                      </div>
                  </a>
              </div>

              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://github.com/AidanTjKo/ECE198"
                      target="_blank"
                  >
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
                                          src="/projects/stm.jpg"
                                          alt=""
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
                                      {src: "/tools/stm32.png", label: "STM32"},
                                      {src: "/tools/cpp.png", label: "C++"},
                                      {src: "/tools/soldering.png", label: "Soldering"},
                                      {src: "/tools/circuitDesign.jpg", label: "Circuit Design"},
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
                              Raised-Hand Detection System
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Developed real-time raised-hand detection in
                              <span className="text-black dark:text-gray-300"> C++</span> with
                              <span className="text-black dark:text-gray-300"> STM32</span> microcontrollers to enhance
                              classroom participation.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Used
                              <span className="text-black dark:text-gray-300"> HC-05</span> modules via the
                              <span className="text-black dark:text-gray-300"> USART protocol</span>, achieving
                              <span className="text-black dark:text-gray-300"> 80% accuracy</span> using edge detection
                              and image subtraction algorithms.
                          </p>


                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      github.com/AidanTjKo/ECE198
                    </span>
                          </div>
                      </div>
                  </a>
              </div>

              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://github.com/h4kyu/portfolio"
                      target="_blank"
                  >
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
                                          src="/mudkip.png"
                                          alt=""
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
                                      {src: "/tools/typescript.png", label: "TypeScript"},
                                      {src: "/tools/nextjs.png", label: "Next.js"},
                                      {src: "/tools/html.png", label: "HTML 5"},
                                      {src: "/tools/css.svg", label: "CSS 3"},
                                      {src: "/tools/tailwind.png", label: "Tailwind CSS"},
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
                              This Portfolio!
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Built this portfolio with <span className="text-black dark:text-gray-300"> Next.js</span>,
                              <span className="text-black dark:text-gray-300"> Tailwind CSS</span>, and
                              <span className="text-black dark:text-gray-300"> TypeScript</span>, focused on clean
                              layout.
                              The site is optimized for fast load times and responsiveness.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Features include theme toggling and minimal but expressive styling.
                          </p>


                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      github.com/h4kyu/portfolio
                    </span>
                          </div>
                      </div>
                  </a>
              </div>

              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://github.com/h4kyu/OBC-Firmware-Onboarding"
                      target="_blank"
                  >
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
                                          src="/projects/orbital.png"
                                          alt=""
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
                                      {src: "/tools/c.png", label: "C"},
                                      {src: "/tools/ti.png", label: "RM46"},
                                      {src: "/tools/freertos.png", label: "FreeRTOS"},
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
                              UW Orbital
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Wrote <span className="text-black dark:text-gray-300">C firmware</span> for the
                              <span className="text-black dark:text-gray-300"> Eternium-III CubeSat</span> and ground station on the
                              <span className="text-black dark:text-gray-300"> RM46</span> microcontroller.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Built <span className="text-black dark:text-gray-300">I2C driver</span> for a temperature sensor, a thermal task, and an OS interrupt handler.
                              Gained experience with <span className="text-black dark:text-gray-300">FreeRTOS</span>.
                          </p>



                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      github.com/h4kyu/OBC-Firmware
                    </span>
                          </div>
                      </div>
                  </a>
              </div>

              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://drive.google.com/file/d/1-lJJ1PmMLTDkdRYH3S9WP4pR9qXhpt80/view?usp=sharing"
                      target="_blank"
                  >
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
                                          src="/projects/lenna.png"
                                          alt=""
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
                                      {src: "/tools/python.png", label: "Python"},
                                      {src: "/tools/matplotlib.png", label: "Matplotlib"},
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
                              JPG Compression Optimization
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Optimized compression-to-quality ratio by<span
                              className="text-black dark:text-gray-300"> 165%</span> of average JPEG image file size
                              through varying DCT Quantization.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Analyzed against SSIM index in <span
                              className="text-black dark:text-gray-300"> Python</span> with
                              <span className="text-black dark:text-gray-300"> Matplotlib</span>, performing all matrix
                              computations and graphing.
                          </p>


                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                              JPG Compression Optimization.pdf
                            </span>
                          </div>
                      </div>
                  </a>
              </div>

              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://github.com/h4kyu/digital-stickynotes"
                      target="_blank"
                  >
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
                                          src="/projects/stickynote.png"
                                          alt=""
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
                                      {src: "/tools/html.png", label: "HTML 5"},
                                      {src: "/tools/css.svg", label: "CSS 3"},
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
                              Digital Sticky Notes
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              A Firefox Add-on for persistent sticky note elements using
                              <span className="text-black dark:text-gray-300"> vanilla JavaScript</span>,<span
                              className="text-black dark:text-gray-300"> HTML</span>, and
                              <span className="text-black dark:text-gray-300"> CSS</span>, with a focus on modular
                              programming.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Built error-resistant text highlighting using a custom <span
                              className="text-black dark:text-gray-300">Depth-First Search</span> algorithm.
                          </p>


                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      github.com/h4kyu/digital-stickynotes
                    </span>
                          </div>
                      </div>
                  </a>
              </div>

              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://drive.google.com/file/d/1p8PCI6ZhVCsRt2py8PiJLBYZCZZchaHd/view?usp=sharing"
                      target="_blank"
                  >
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
                                          src="/projects/zeta.png"
                                          alt=""
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
                                      {src: "/tools/oscilloscope.png", label: "Oscilloscope"},
                                      {src: "/tools/matplotlib.png", label: "Matplotlib"},
                                      {src: "/tools/soldering.png", label: "Soldering"},
                                      {src: "/tools/circuitDesign.jpg", label: "Circuit Design"},
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
                              LC Circuit Damping Coefficient
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Tested effect of internal resistance in <span className="text-black dark:text-gray-300">LC oscillators</span> on
                              energy efficiency using an
                              <span className="text-black dark:text-gray-300"> oscilloscope</span>, <span
                              className="text-black dark:text-gray-300"> soldering</span> own circuits.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Derived mathematical relation between internal resistance and damping coefficient, key to
                              optimizing radio system cost.
                          </p>


                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      LC Circuit Damping Coefficient.pdf
                    </span>
                          </div>
                      </div>
                  </a>
              </div>

              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://drive.google.com/file/d/1z4UJshpmPouEslBl_1zXY90PMK77uLqH/view?usp=sharing"
                      target="_blank"
                  >
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
                                          src="/projects/nylon.png"
                                          alt=""
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
                                      {src: "/tools/python.png", label: "Python"},
                                      {src: "/tools/matplotlib.png", label: "Matplotlib"},
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
                              Nylon Strength Optimization
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Optimized tensile strength of synthesized <span className="text-black dark:text-gray-300">Nylon 6/10</span> by
                              minimizing amorphous regions through controlled
                              <span className="text-black dark:text-gray-300"> annealing temperature</span>.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Used <span className="text-black dark:text-gray-300">Python</span> to generate graphs with
                              lines of best fit.
                          </p>


                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      Nylon Tensile Strength Optimization.pdf
                    </span>
                          </div>
                      </div>
                  </a>
              </div>

              <div
                  className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
                  <a
                      href="https://docs.google.com/document/d/1egHxs2TJcGf2Ki3Juq5oJV3q89cbawSMysSWOdtp5HM/edit?usp=sharing"
                      target="_blank"
                  >
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
                                          src="/projects/intercom.png"
                                          alt=""
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
                                      {src: "/tools/oscilloscope.png", label: "Oscilloscope"},
                                      {src: "/tools/soldering.png", label: "Soldering"},
                                      {src: "/tools/circuitDesign.jpg", label: "Circuit Design"},
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
                              Household Intercom System
                          </h2>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Built a one-way wireless <span
                              className="text-black dark:text-gray-300">intercom system</span> between floors of a
                              household using custom
                              <span className="text-black dark:text-gray-300"> RLC oscillators</span> and RF circuits.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              Self-taught the fundamentals of<span className="text-black dark:text-gray-300"> RF communication</span> through
                              reverse engineering and hands-on experimentation.
                          </p>


                          {/* Link row with hover effect */}
                          <div className="flex items-center space-x-2 mt-4">
                              <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                              <span
                                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      Household Intercom System.docx
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
