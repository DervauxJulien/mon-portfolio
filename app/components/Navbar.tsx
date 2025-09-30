// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, Sun, Moon, Home } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Activation du dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full z-50 p-5 flex justify-between items-center bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <a className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        href={""}
      >
        <Home className="" />
      </a>

      <ul
        className={`md:flex md:gap-6 md:items-center md:static absolute left-0 w-full md:w-auto transition-all duration-300 flex flex-col md:flex-row text-black dark:text-white
    ${open ? "top-16 bg-white dark:bg-black p-4 rounded-b-md shadow-md" : "-top-96"}
  `}
      >

        {["about", "exp", "project"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="px-4 py-2 rounded-md hover:bg-purple-500/20 dark:hover:bg-purple-400/20 transition-colors block text-center md:text-left"
            >
              {id === "about" ? "À propos" : id === "exp" ? "Expériences" : "Projet"}
            </a>
          </li>
        ))}
        <li className="px-4 py-2 flex justify-center">
          <Button variant="outline" asChild>
            <a href="/DERVAUX_JULIEN_CVALTERNANCE.pdf" download>
              Télécharger mon CV
            </a>
          </Button>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <Menu className="text-black dark:text-white" />
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800 dark:text-white" />}
        </button>
      </div>
    </nav>
  );
}
