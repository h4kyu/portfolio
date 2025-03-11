"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";

// Key to store user preference in localStorage
const storageKey = "theme-preference";

// ThemeProvider component
export function ThemeProvider(props: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{props.children}</div>;
  }

  return (
      <NextThemesProvider {...props}>
        {props.children}
      </NextThemesProvider>
  );
}


// ThemeSwitch component
export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const storedPreference = localStorage.getItem(storageKey) as "light" | "dark" | null;
      if (storedPreference) return storedPreference;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light"; // Default for SSR (avoids hydration mismatch)
  });

  // Reflects preference based on system or manual choice
  const reflectPreference = React.useCallback(
      (newTheme: "light" | "dark") => {
        document.documentElement.classList.remove("bg-light", "bg-dark");
        document.documentElement.classList.add(`bg-${newTheme}`);
        setCurrentTheme(newTheme);
        setTheme(newTheme);
      },
      [setTheme]
  );

  React.useEffect(() => {
    setMounted(true);
    const storedPreference = localStorage.getItem(storageKey) as "light" | "dark" | null;
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = storedPreference || systemPreference;

    reflectPreference(initialTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      reflectPreference(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [reflectPreference]);

  // Toggle between themes
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };

  // fixed hydration error, nly render after mounting
  if (!mounted) {
    return <div style={{ visibility: "hidden" }} />;
  }

  return (
      <button
          id="theme-toggle"
          aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
          onClick={toggleTheme}
          className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 rounded-full bg-white/90 px-4 py-3.5 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:dark:ring-zinc-600/50"
      >
        <FaCircleHalfStroke
            className={`h-[14px] w-[14px] ${currentTheme === "dark" ? "text-[#D4D4D4]" : "text-[#1c1c1c]"}`}
        />
      </button>
  );
};
