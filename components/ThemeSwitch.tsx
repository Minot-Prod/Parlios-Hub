"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("parlios-theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("parlios-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
    >
      {theme === "light" ? "??" : "??"}
    </button>
  );
}
