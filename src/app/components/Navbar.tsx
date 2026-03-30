"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; // for dark/light icons
import Link from "next/link";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark/light mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          mosiur.dev
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Hire Me button */}
          <li>
            <a
              href="#contact"
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Hire Me
            </a>
          </li>

          {/* Dark/Light toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;