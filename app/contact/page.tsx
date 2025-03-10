import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import React from "react";
import {
    FaXTwitter,
    FaGithub,
    FaInstagram,
    FaRss,
    FaLinkedinIn,
} from "react-icons/fa6";
import {socialLinks} from "../config";
import {TbMailFilled} from "react-icons/tb";

function SocialLinks() {
    return (
        <div className="flex flex-col items-start space-y-3 text-lg text-zinc-300">
            <a
                href={`mailto:${socialLinks.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
            >
                <TbMailFilled/>
                <span className="text-sm text-gray-700 dark:text-gray-400">nahshonweissberg@gmail.com</span>
            </a>

            <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
            >
                <FaGithub/>
                <span className="text-sm text-gray-700 dark:text-gray-400">@nahshon-weissberg</span>
            </a>

            <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
            >
                <FaLinkedinIn/>
                <span className="text-sm text-gray-700 dark:text-gray-400">@nweissberg</span>
            </a>

            <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
            >
                <FaInstagram/>
                <span className="text-sm text-gray-700 dark:text-gray-400">@nash.weissberg</span>
            </a>
        </div>

    );
}

export const metadata = {
    title: "Contact",
    description: "Nextfolio Blog",
};

export default function BlogPosts() {
    let allBlogs = getBlogPosts();

    return (
        <section className="z-10">
            <div className="pt-16 px-4 text-center bg-zinc-100 dark:bg-zinc-900">
                <h1 className="mb-4 text-5xl font-bold tracking-tight">
                Let's{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-600 from-orange-500">
                        Build
                      </span> Something
                </h1>
                <p className="prose prose-neutral dark:prose-invert text-gray-500 dark:text-gray-400">
                    I'm open to work, collaborations, or just a chat. Feel free to reach out!
                </p>

                <div className="mt-6 flex flex-col space-y-2 justify-center items-center">
                    <SocialLinks />
                </div>
            </div>

        </section>
    );
}
