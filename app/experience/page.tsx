import type { Metadata } from "next";
import {socialLinks} from "../config";
import Image from "next/image";
import {FiLink} from "react-icons/fi";

export const metadata: Metadata = {
    title: "Experience",
    description: "Nextfolio Projects",
};

export default function Experience() {
    return (
        <section className="z-10">
            <div className="grid grid-cols-12 gap-6 items-start">
                {/* Left column (text) - 4/8 */}
                <div className="col-span-8">
                    <h1 className="mb-6 text-5xl font-bold tracking-tight">
                        Built on the clock putting skills to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-amber-500">
                        work
                      </span>
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


            <ol className="relative border-s-2 border-gray-200 dark:border-gray-700 max-w-[700px] pl-6">
                {/* Timeline Item 1 */}
                <li className="relative mb-10">
                    <div className="relative group transition-transform duration-150 ease-out hover:scale-[1.01]">
                        {/* Hover-only background layer */}
                        <div
                            className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"/>

                        {/* Clickable card content */}
                        <a href="/projects/tailwind-ui" className="relative z-10 block p-4 rounded-2xl">
                            {/* Vertical bar + date */}
                            <div className="flex items-center space-x-3 mb-4">
                                <div
                                    className="w-[3px] h-4 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full shadow-md dark:from-blue-400 dark:to-teal-300"/>
                                <time className="text-sm text-gray-400 dark:text-gray-500">February 2022
                                </time>
                            </div>

                            <h3 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold">
                                Application UI code in Tailwind CSS
                            </h3>
                            <p className="mb-4 mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                                Get access to over 20+ pages including a dashboard layout, charts, kanban board,
                                calendar, and pre-order E-commerce & Marketing pages.
                            </p>
                            <span
                                className="inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">
                              Read more →
                            </span>
                        </a>
                    </div>
                </li>

                {/* Timeline Item 2 */}
                <li className="relative mb-10">
                    <div className="relative group transition-transform duration-150 ease-out hover:scale-[1.01]">
                        <div className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"/>
                        <a href="/projects/design-tools" className="relative z-10 block p-4 rounded-2xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-[3px] h-4 bg-gradient-to-b from-pink-500 to-rose-400 rounded-full shadow-md dark:from-pink-400 dark:to-rose-300" />
                                <time className="text-sm text-gray-400 dark:text-gray-500">May 2022</time>
                            </div>
                            <h3 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold">
                                Prototyping with Figma & Framer
                            </h3>
                            <p className="mb-4 mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                                Rapid prototyping for product ideas using Figma components and Framer for interaction design.
                            </p>
                            <span className="inline-flex items-center text-sm font-medium text-rose-600 dark:text-rose-400 hover:underline">
                                Read more →
                            </span>
                        </a>
                    </div>
                </li>

                {/* Timeline Item 3 */}
                <li className="relative mb-10">
                    <div className="relative group transition-transform duration-150 ease-out hover:scale-[1.01]">
                        <div className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"/>
                        <a href="/projects/github-actions" className="relative z-10 block p-4 rounded-2xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-[3px] h-4 bg-gradient-to-b from-purple-500 to-indigo-400 rounded-full shadow-md dark:from-purple-400 dark:to-indigo-300" />
                                <time className="text-sm text-gray-400 dark:text-gray-500">August 2022</time>
                            </div>
                            <h3 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold">
                                Automating with GitHub Actions
                            </h3>
                            <p className="mb-4 mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                                Built workflows for CI/CD pipelines using GitHub Actions and integrated testing/linting stages.
                            </p>
                            <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                                Read more →
                            </span>
                        </a>
                    </div>
                </li>

                {/* Timeline Item 4 */}
                <li className="relative mb-10">
                    <div className="relative group transition-transform duration-150 ease-out hover:scale-[1.01]">
                        <div className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"/>
                        <a href="/projects/performance-boost" className="relative z-10 block p-4 rounded-2xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-[3px] h-4 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full shadow-md dark:from-yellow-300 dark:to-orange-300" />
                                <time className="text-sm text-gray-400 dark:text-gray-500">October 2022</time>
                            </div>
                            <h3 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold">
                                Site Performance Optimization
                            </h3>
                            <p className="mb-4 mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                                Refactored layouts and compressed assets to reduce initial load times by 60% across key pages.
                            </p>
                            <span className="inline-flex items-center text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline">
                                Read more →
                            </span>
                        </a>
                    </div>
                </li>

            </ol>


        </section>
    )
        ;
}
