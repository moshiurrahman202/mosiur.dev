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
    const sections = ["home", "about", "skills", "projects", "contact"];
    
    // ১. হাশ চেক করার ফাংশন
    const checkHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sections.includes(hash)) {
        setActive(hash);
        return true; // যদি হাশ থাকে তবে true রিটার্ন করবে
      }
      return false;
    };

    const hasHash = checkHash();

    // ২. Intersection Observer লজিক
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px", // এরিয়া আরও ন্যারো করা হয়েছে
      threshold: 0.05,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // যদি ইউআরএল এ হাশ থাকে এবং পেজ সবে লোড হয়, তবে অবজারভার ইগনোর করবে
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // ইউজার যখন নিজে স্ক্রল করবে তখনই কেবল স্টেট আপডেট হবে
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // হাশ চেঞ্জ ইভেন্ট
    window.addEventListener("hashchange", checkHash);

    // ৩. যদি হাশ থাকে তবে শুরুতে সেদিকে স্ক্রল করার জন্য সামান্য ডিলে দেওয়া ভালো
    if (hasHash) {
      setTimeout(() => {
        const hash = window.location.hash.replace("#", "");
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", checkHash);
    };
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
              <Link href={link.href} className="relative group">
                <span
                  className={`transition-colors duration-300 ${
                    active === link.id ? "text-primary font-semibold" : "text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  {link.name}
                </span>

                {/* Underline Animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-background/90 backdrop-blur-lg px-6 pb-4 border-b border-white/10">
          <ul className="flex flex-col gap-4 text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setOpen(false);
                    setActive(link.id);
                  }}
                  className={`block transition-colors ${
                    active === link.id ? "text-primary" : "hover:text-foreground"
                  }`}
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