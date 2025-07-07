import Image from "next/image";
import { socialLinks } from "./config";
import { PiToolboxDuotone } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
import {TbMailFilled} from "react-icons/tb";
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa6";
import React from "react";

function SocialLink({ href, icon: Icon }) {
  return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-60">
        <Icon />
      </a>
  );
}

function SocialLinks() {
  return (
      <div className="flex text-lg gap-3.5 text-zinc-300">
        <SocialLink href={socialLinks.email} icon={TbMailFilled} />
        <SocialLink href={socialLinks.github} icon={FaGithub} />
        <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
        <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      </div>
  );
}

export default function Page() {
  return (
      <section className="z-10">
        <div className="grid grid-cols-12 gap-6 items-start pb-8">
          {/* Left column (text) - 4/8 */}
          <div className="col-span-7">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Hey there, I'm{" "}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-amber-500">
                Nash Weissberg
              </span> !
            </h1>
            <div className="prose prose-neutral dark:prose-invert text-gray-500 dark:text-gray-400">
              <p>
                I'm a student at the University of Waterloo studying Computer Engineering.
                My current area of obsession is Embedded Systems & Firmware, but I have a diverse set of skills.
                See My Digital Tool Box and my<a href="/projects"> projects</a> for more!

              </p>
              <p>
                When I don't have my nose in a project or schoolwork, I like to get some exercise in,
                whether it's climbing, skiing, or simply working out.
                You can find some of my favorite projects below, or follow any of my links here to learn more!
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <SocialLinks/>
                <a
                    href="https://drive.google.com/file/d/1lya6ZIaoqMEnwbZr4LURWFglYkkqD0lp/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                >
                  <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                  <span
                      className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300 hover:text-teal-600 dark:hover:text-teal-400">
                    My Resume
                  </span>
                </a>
              </div>

            </div>
          </div>

          {/* Right column (image) - 4/8 */}
          <div className="col-span-5 flex justify-center md:justify-end">
            <a
                // href="#"
                className="block p-6 min-w-96 rounded-[17px] bg-[#e0e0e0] dark:bg-[#1d1d20] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] dark:shadow-[15px_15px_30px_#111212]"
            >
              <h5 className="mb-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 text-balance flex items-center gap-x-3">
                <PiToolboxDuotone className="text-2xl text-zinc-400 dark:text-zinc-600"/>
                My Digital Tool Box
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                Web Development
              </p>
              <hr className="h-px mb-2.5 mt-0.5 bg-zinc-300 border-0 dark:bg-zinc-700"/>
              {/* Grid of Tool Images */}
              <div className="grid grid-cols-8 gap-4">
                {[
                  {src: "/tools/javascript.png", label: "JavaScript"},
                  {src: "/tools/typescript.png", label: "TypeScript"},
                  {src: "/tools/html.png", label: "HTML5"},
                  {src: "/tools/css.svg", label: "CSS3"},
                  {src: "/tools/angular.png", label: "Angular"},
                  {src: "/tools/nextjs.png", label: "Next.js"},
                  {src: "/tools/tailwind.png", label: "Tailwind CSS"},
                  {src: "/tools/java.png", label: "Java"},
                  {src: "/tools/sql.png", label: "SQL"},
                  {src: "/tools/azure.png", label: "Azure"},
                  {src: "/tools/devops.png", label: "DevOps"},
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
              <div className="grid grid-cols-8 gap-4">
                {[
                  {src: "/tools/c.png", label: "C"},
                  {src: "/tools/cpp.png", label: "C++"},
                  {src: "/tools/verilog.png", label: "Verilog"},
                  {src: "/tools/kicad.png", label: "KiCAD"},
                  {src: "/tools/pic.png", label: "PICs"},
                  {src: "/tools/freertos.png", label: "FreeRTOS"},
                  {src: "/tools/stm32.png", label: "STM32"},
                  {src: "/tools/ti.png", label: "RM46"},
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
              <div className="grid grid-cols-8 gap-4">
                {[
                  {src: "/tools/cpp.png", label: "C++"},
                  {src: "/tools/python.png", label: "Python"},
                  {src: "/tools/matlab.png", label: "MATLAB"},
                  {src: "/tools/matplotlib.png", label: "Matplotlib"},
                  {src: "/tools/githubActions.png", label: "Github Actions"},
                  {src: "/tools/sql.png", label: "SQL"},
                  {src: "/tools/excel.png", label: "Excel"},
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
              <div className="grid grid-cols-8 gap-4">
                {[
                  {src: "/tools/oscilloscope.png", label: "Oscilloscope"},
                  {src: "/tools/nanovnaSaver.png", label: "NanoVNASaver"},
                  {src: "/tools/fusion360.png", label: "Fusion 360"},
                  {src: "/tools/soldering.png", label: "Soldering"},
                  {src: "/tools/pynec.png", label: "PyNEC"},
                  {src: "/tools/circuitDesign.jpg", label: "Circuit Design"},
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

        <div className="grid grid-cols-3 gap-0 mt-8">
          <div>

            <div
                className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">
              <a
                  href="https://github.com/waterloo-rocketry"
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
                            src="/projects/rocketry.jpg"
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
                        {src: "/tools/kicad.png", label: "KiCAD"},
                        {src: "/tools/pic.png", label: "PICs"},
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
                    Waterloo Rocketry
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                    Electrical subsystem focusing on <span
                      className="text-black dark:text-gray-300">C firmware</span> and <span
                      className="text-black dark:text-gray-300">KiCAD </span>
                    design + analysis that aligns with cross-functional requirements.

                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                    I'm currently writing Injector Sensor Hub firmware to handle healthchecks, sensor readings and <span
                      className="text-black dark:text-gray-300">CAN </span>
                    communication.
                  </p>

                  {/* Link row with hover effect */}
                  <div className="flex items-center space-x-2 mt-4">
                    <FiLink className="text-zinc-500 dark:text-zinc-400"/>
                    <span
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      github.com/waterloo-rocketry
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>


          <div>
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
                    Deep Genomics’ <span className="text-black dark:text-gray-200">Python</span> library with a <span
                      className="text-black dark:text-gray-200">highly-optimized C++</span> core for querying binary
                    genomic data.
                    Contributing to the C++ layer and Python unit tests.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                    I'm currently working on packaging the library
                    for distribution via <span className="text-black dark:text-gray-200">PyPI</span> using Python
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
          </div>
          <div>
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
                    Developed a model in <span className="text-black dark:text-gray-300">MATLAB</span> for dipole length
                    vs. radiation pattern, derived from{" "}
                    <span className="text-black dark:text-gray-300">4th-year Antenna Theory</span>.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                    Saved <span className="text-black dark:text-gray-300">$17,000</span> in equipment costs by using a
                    budget{" "}
                    <span className="text-black dark:text-gray-300">NanoVNA</span> on a <span
                      className="text-black dark:text-gray-300">3D-printed</span> rotating axis to measure radiation
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
          </div>


          {/*<div>*/}
          {/*  <div*/}
          {/*      className="group relative rounded-xl p-6 transition-transform duration-150 ease-out hover:scale-[1.015] overflow-visible max-h-[340px]">*/}
          {/*    <a*/}
          {/*        href="https://github.com/AidanTjKo/ECE198"*/}
          {/*        target="_blank"*/}
          {/*    >*/}
          {/*      /!* Background layer with less noticeable expansion *!/*/}
          {/*      <div*/}
          {/*          className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-150 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"*/}
          {/*      ></div>*/}

          {/*      <div className="relative z-10">*/}
          {/*        <div className="inline-flex items-center space-x-4">*/}
          {/*          /!* Profile image with double ring *!/*/}
          {/*          <div*/}
          {/*              className="inline-flex items-center justify-center rounded-full ring-1 ring-zinc-900/5 dark:ring-zinc-600/50 backdrop-blur p-2">*/}
          {/*            <div className="rounded-full ring-[8px] ring-white/90 dark:ring-zinc-800/95">*/}
          {/*              <Image*/}
          {/*                  src="/projects/stm.jpg"*/}
          {/*                  alt=""*/}
          {/*                  className="w-8 h-8 rounded-full"*/}
          {/*                  unoptimized*/}
          {/*                  width={8}*/}
          {/*                  height={8}*/}
          {/*                  priority*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*          </div>*/}

          {/*          /!* Tool icons with peer-hover tooltip *!/*/}
          {/*          <div className="flex items-center space-x-4">*/}
          {/*            {[*/}
          {/*              {src: "/tools/stm32.png", label: "STM32"},*/}
          {/*              {src: "/tools/cpp.png", label: "C++"},*/}
          {/*              {src: "/tools/soldering.png", label: "Soldering"},*/}
          {/*              {src: "/tools/circuitDesign.jpg", label: "Circuit Design"},*/}
          {/*            ].map((tool, i) => (*/}
          {/*                <div key={i} className="relative">*/}
          {/*                  <img*/}
          {/*                      src={tool.src}*/}
          {/*                      alt=""*/}
          {/*                      className="peer w-7 h-7 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:scale-105 transition-transform"*/}
          {/*                  />*/}
          {/*                  <div*/}
          {/*                      className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-opacity duration-300 px-2 py-1 text-xs font-medium text-black dark:text-white bg-zinc-100 dark:bg-zinc-700 rounded-lg whitespace-nowrap">*/}
          {/*                    {tool.label}*/}
          {/*                  </div>*/}
          {/*                </div>*/}
          {/*            ))}*/}
          {/*          </div>*/}
          {/*        </div>*/}

          {/*        <h2 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold mt-6">*/}
          {/*          Raised-Hand Detection System*/}
          {/*        </h2>*/}
          {/*        <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">*/}
          {/*          Developed real-time raised-hand detection in*/}
          {/*          <span className="text-black dark:text-gray-300"> C++</span> with*/}
          {/*          <span className="text-black dark:text-gray-300"> STM32</span> microcontrollers to enhance*/}
          {/*          classroom participation.*/}
          {/*        </p>*/}
          {/*        <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">*/}
          {/*          Used*/}
          {/*          <span className="text-black dark:text-gray-300"> HC-05</span> modules via the*/}
          {/*          <span className="text-black dark:text-gray-300"> USART protocol</span>, achieving*/}
          {/*          <span className="text-black dark:text-gray-300"> 80% accuracy</span> using edge detection*/}
          {/*          and image subtraction algorithms.*/}
          {/*        </p>*/}


          {/*        /!* Link row with hover effect *!/*/}
          {/*        <div className="flex items-center space-x-2 mt-4">*/}
          {/*          <FiLink className="text-zinc-500 dark:text-zinc-400"/>*/}
          {/*          <span*/}
          {/*              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">*/}
          {/*            github.com/AidanTjKo/ECE198*/}
          {/*          </span>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

        <div className="mt-6 ml-6">
          <a
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            See all my work
            <span className="ml-1">→</span>
          </a>
        </div>


      </section>
  );
}
