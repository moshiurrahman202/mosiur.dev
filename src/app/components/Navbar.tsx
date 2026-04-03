"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

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
              <a
                href={link.href}
                className="relative group"
              >
                {/* {link.name} */}
                <span className="group-hover:text-white transition">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
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
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-foreground transition"
                >
                  {link.name}

                </a>
              </li>
            ))}
          </ul>

        </div>
        
      )}
      
    </nav>
  );
}