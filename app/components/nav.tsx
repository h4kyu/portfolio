"use client"; // Required for usePathname to work in Next.js

import Link from "next/link";
import { usePathname } from "next/navigation"; // Get current path
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
    "/blog": { name: "Blog" },
    "/projects": { name: "Projects" },
    "/photos": { name: "Photos" },
    // More sections can be added dynamically
};

export function Navbar() {
    const pathname = usePathname(); // Get the current route

    return (
        <div className="fixed top-4 left-0 right-0 flex items-center justify-center p-2 z-50">
            {/* Dynamic Navigation Bar (Centered) */}
            <nav className="flex items-center justify-center rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-zinc-600/50">
                <div className="flex items-center gap-1">
                    {/* Home Page Title Link with Obvious Active & Hover Colors */}
                    <Link
                        href="/"
                        className={`transition px-2 py-1 ${
                            pathname === "/"
                                ? "text-rose-800 font-semibold dark:text-rose-400"  // Active page color (red in light, yellow in dark)
                                : "hover:text-rose-900 dark:hover:text-rose-300"
                        }`}
                    >
                        {metaData.title}
                    </Link>

                    {Object.entries(navItems).map(([path, { name }]) => (
                        <Link
                            key={path}
                            href={path}
                            className={`transition px-2 py-1 ${
                                pathname === path
                                    ? "text-rose-800 font-semibold dark:text-rose-400"  // Active page color persists
                                    : "hover:text-rose-900 dark:hover:text-rose-300"
                            }`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Theme Switch (Farther from Right) */}
            <div className="fixed top-5 right-48 z-50">
                <ThemeSwitch />
            </div>
        </div>
    );
}
