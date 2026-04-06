"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Contact", href: "/#contact", id: "contact" },

  ];
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-foreground">
          moshiur.dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-muted-foreground">
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* Use Link instead of <a> */}
              <Link href={link.href} className="relative group">
                <span
                  className={`transition ${active === link.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`}
                >
                  {link.name}
                </span>

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>


      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-background/90 backdrop-blur-lg px-6 pb-4">
          <ul className="flex flex-col gap-4 text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-foreground transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
}