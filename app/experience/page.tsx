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
                            This is where I take the skills I've learned over the years and apply them in real-world roles.
                            There's only so much I can do on my own, and I've learned that working as part of a team among
                            colleagues is the key to efficient, fulfilling and meaningful work.
                        </p>
                    </div>
                </div>

                {/* Right column (image) - 4/8 */}
                <div className="col-span-5 flex justify-center md:justify-end"></div>
            </div>


            <ol className="relative border-s border-zinc-900/15 dark:border-zinc-600/30 max-w-[700px] pl-6">
                {/* Timeline Item 1 */}
                <li className="relative mb-10">
                    <div className="relative group transition-transform duration-150 ease-out hover:scale-[1.01]">
                        {/* Hover-only background layer */}
                        <div
                            className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"/>

                        {/* Clickable card content */}
                        <a href="https://www.linkedin.com/in/nweissberg/" target="_blank" className="relative z-10 block p-4 rounded-2xl">
                            {/* Vertical bar + date */}
                            <div className="flex items-center space-x-3 mb-4">
                                <div
                                    className="w-[3px] h-4 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full shadow-md dark:from-blue-400 dark:to-teal-300"/>
                                <time className="text-sm text-gray-400 dark:text-gray-500">January - April 2025
                                </time>
                                <div className="flex items-center pl-2 space-x-4">
                                    {[
                                        {src: "/tools/azure.png", label: "Azure"},
                                        {src: "/tools/devops.png", label: "DevOps"},
                                        {src: "/tools/sql.png", label: "SQL"},
                                        {src: "/tools/excel.png", label: "Excel"},
                                        {src: "/tools/python.png", label: "Python"},
                                        {src: "/tools/java.png", label: "Java"},
                                        {src: "/tools/typescript.png", label: "TypeScript"},
                                        {src: "/tools/html.png", label: "HTML 5"},
                                        {src: "/tools/css.svg", label: "CSS 3"},
                                        {src: "/tools/angular.png", label: "Angular"},
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

                            <h3 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold">
                                Technical Analyst @ Ontario Ministry of Transportation
                            </h3>
                            <div className="mt-2 pb-4 text-sm font-normal text-gray-700 dark:text-gray-400">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>
                                        Developed and deployed the <span
                                        className="text-blue-600 dark:text-blue-400 underline">Labour Market Information Public Website</span>,
                                        implementing <span
                                        className="text-black dark:text-gray-300">backend Java APIs</span>,
                                        <span className="text-black dark:text-gray-300"> SQL queries</span>, and
                                        <span className="text-black dark:text-gray-300"> Angular frontend</span> to
                                        display Ontario job posting data, managed through
                                        <span className="text-black dark:text-gray-300"> Azure DevOps</span> pipelines.
                                    </li>
                                    <li>
                                        Built automated <span
                                        className="text-black dark:text-gray-300"> ETL pipeline</span> with
                                        <span className="text-black dark:text-gray-300"> Python</span> on
                                        <span className="text-black dark:text-gray-300"> Azure Functions</span> to
                                        extract job posting data from the Vicinity API and load it into
                                        Labour Market Information databases, with versioning and CI handled in
                                        <span className="text-black dark:text-gray-300"> Azure DevOps</span>.
                                    </li>
                                    <li>
                                        Tested and developed the TSO Internal Website, configuring
                                        <span
                                            className="text-black dark:text-gray-300"> Azure-hosted</span> infrastructure
                                        and performing pre-deployment regression testing.
                                    </li>
                                    <li>
                                        Communicated effectively with cross-functional teams, improving coordination on
                                        LMI feature development and streamlining
                                        <span className="text-black dark:text-gray-300"> bug triaging</span> and sprint
                                        planning.
                                    </li>
                                    <li>
                                        Handled daily work orders, CRQs, and incidents; improved workflow clarity by
                                        updating internal wiki with procedures for eSLM reports,
                                        CRQ classification, and routing.
                                    </li>
                                </ul>
                            </div>
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
                        <div
                            className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"/>
                        <a href="https://www.linkedin.com/in/nweissberg/" target="_blank"
                           className="relative z-10 block p-4 rounded-2xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <div
                                    className="w-[3px] h-4 bg-gradient-to-b from-pink-500 to-rose-400 rounded-full shadow-md dark:from-pink-400 dark:to-rose-300"/>
                                <time className="text-sm text-gray-400 dark:text-gray-500">June 2024 - Present</time>
                            </div>
                            <h3 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold">
                                Private Academic Tutor
                            </h3>
                            <div className="mt-2 pb-4 text-sm font-normal text-gray-700 dark:text-gray-400">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>
                                        Taught <span className="text-black dark:text-gray-300"> +300 hours</span> of
                                        1-on-1 online lessons in introductory university-level
                                        <span className="text-black dark:text-gray-300"> Calculus</span>,
                                        <span className="text-black dark:text-gray-300"> Physics</span>, and
                                        <span className="text-black dark:text-gray-300"> Chemistry</span>.
                                    </li>
                                    <li>
                                        Resulted in an average score increase of
                                        <span className="text-black dark:text-gray-300"> 30% </span>
                                        on my students' assessments.
                                    </li>
                                    <li>
                                        Enabled long-term retention of material by emphasizing
                                        <span className="text-black dark:text-gray-300"> conceptual and intuitive </span>
                                        understanding.
                                    </li>
                                    <li>
                                        Mastered
                                        <span className="text-black dark:text-gray-300"> scheduling and time management</span> in
                                        balancing my own learning with teaching others.
                                    </li>
                                </ul>
                            </div>
                            <span
                                className="inline-flex items-center text-sm font-medium text-rose-600 dark:text-rose-400 hover:underline">
                                Read more →
                            </span>
                        </a>
                    </div>
                </li>

                {/* Timeline Item 3 */}
                <li className="relative mb-10">
                    <div className="relative group transition-transform duration-150 ease-out hover:scale-[1.01]">
                        <div
                            className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"/>
                        <a href="https://www.linkedin.com/in/nweissberg/" target="_blank" className="relative z-10 block p-4 rounded-2xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <div
                                    className="w-[3px] h-4 bg-gradient-to-b from-purple-500 to-indigo-400 rounded-full shadow-md dark:from-purple-400 dark:to-indigo-300"/>
                                <time className="text-sm text-gray-400 dark:text-gray-500">October 2021 - June 2024</time>
                            </div>
                            <h3 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold">
                                KUMON Centre Assistant
                            </h3>
                            <div className="mt-2 pb-4 text-sm font-normal text-gray-700 dark:text-gray-400">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>
                                        Taught students of ages preschool to K–12
                                        <span className="text-black dark:text-gray-300"> +1,000 hours </span>
                                        of
                                        <span className="text-black dark:text-gray-300"> Mathematics and English</span>,
                                        helping them build strong problem-solving foundations.
                                    </li>
                                    <li>
                                        Frequently worked with up to <span className="text-black dark:text-gray-300"> 6 students simultaneously</span>,
                                        recognizing individual needs to best facilitate growth.
                                    </li>
                                    <li>
                                        Assessed and leveraged <span className="text-black dark:text-gray-300">co-workers’ strengths and weaknesses </span>to
                                        delegate tasks and foster a cohesive learning environment.
                                    </li>
                                    <li>
                                        Strengthened my value of <span className="text-black dark:text-gray-300"> teamwork and shared purpose </span>
                                        through collaborative teaching and support at the centre.
                                    </li>
                                </ul>
                            </div>
                            <span
                                className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                                Read more →
                            </span>
                        </a>
                    </div>
                </li>

                {/* Timeline Item 4 */}
                <li className="relative mb-10">
                    <div className="relative group transition-transform duration-150 ease-out hover:scale-[1.01]">
                        <div
                            className="absolute inset-0 scale-98 opacity-0 rounded-2xl bg-[#ededed] dark:bg-[#1f1f22] transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"/>
                        <a href="https://www.linkedin.com/in/nweissberg/" target="_blank" className="relative z-10 block p-4 rounded-2xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <div
                                    className="w-[3px] h-4 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full shadow-md dark:from-yellow-300 dark:to-orange-300"/>
                                <time className="text-sm text-gray-400 dark:text-gray-500">October 2021 - May 2024</time>
                            </div>
                            <h3 className="text-base text-zinc-800 dark:text-zinc-100 font-semibold">
                                Variety Club Vice President
                            </h3>
                            <div className="mt-2 pb-4 text-sm font-normal text-gray-700 dark:text-gray-400">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>
                                        Led nearly <span
                                        className="text-black dark:text-gray-300">100 student members</span>, providing
                                        them with meaningful opportunities to support and engage with their
                                        community.
                                    </li>
                                    <li>
                                        Raised
                                        <span className="text-black dark:text-gray-300"> $29,800.00 </span>
                                        for the <span
                                        className="text-blue-600 dark:text-blue-400 underline"> Variety Children’s Charity </span>
                                        to support life-changing programs for disadvantaged children around
                                        the world.
                                    </li>
                                    <li>
                                        Organized <span className="text-black dark:text-gray-300">interactive school events</span> and
                                        participated in <span className="text-black dark:text-gray-300">community cleanups</span> as
                                        part of fundraising initiatives.
                                    </li>
                                </ul>
                            </div>
                            <span
                                className="inline-flex items-center text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline">
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
