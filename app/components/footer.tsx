"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-60">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right text-zinc-300">
        <SocialLink href={socialLinks.email} icon={TbMailFilled} />
        <SocialLink href={socialLinks.github} icon={FaGithub} />
        <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
        <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-gray-700 dark:text-gray-400 z-10 w-full pb-8">
      <time>© {YEAR}</time>{" "}
      Nahshon Weissberg.
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
