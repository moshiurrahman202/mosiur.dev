"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, ExternalLink, GiftIcon, Download } from "lucide-react";

export default function ResumePage() {
  const techStack = [
    "React", "Next.js", "JavaScript", "TypeScript", 
    "Tailwind CSS", "Node.js", "Express.js", 
    "MongoDB", "Firebase", "Zod", "React Hook Form"
  ];

  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      
      {/* 1. BACK NAVIGATION - Crucial for UX since you removed Resume from Navbar */}
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-10 transition-colors">
        <ArrowLeft size={18} />
        Back to Portfolio
      </Link>

      {/* HERO / HEADER */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          Moshiur Rahman
        </motion.h1>

        <p className="mt-3 text-xl font-medium text-foreground">
          MERN Stack Developer
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin size={14} /> Khulna, Bangladesh</span>
          <a href="mailto:mosiurrahman123654@gmail.com" className="flex items-center gap-1 hover:text-primary">
            <Mail size={14} /> mosiurrahman123654@gmail.com
          </a>
        </div>

        {/* 2. ENHANCED CTA - Clear primary and secondary actions */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a href="/resume.pdf" download className="group px-6 py-3 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center gap-2">
            <Download size={18} className="group-hover:animate-bounce" />
            Download PDF
          </a>
          <Link href="/#contact" className="px-6 py-3 border border-border rounded-full hover:bg-accent transition">
            Hire Me
          </Link>
        </div>
      </section>

      {/* SUMMARY */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Professional Summary</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Results-driven MERN Stack Developer. I specialize in building 
          high-performance web applications with a focus on **User Experience** and **Scalable Architecture**. 
          Proficient in modern frontend frameworks and robust backend systems.
        </p>
      </motion.section>

      {/* 3. TECH STACK - Using Badges for better scannability */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS - More descriptive */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Key Projects</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border bg-card hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Smart Recipe Finder</h3>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary"><GiftIcon size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><ExternalLink size={20} /></a>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">A full-stack application utilizing a Recipe API, featuring real-time search, user favorites, and a responsive UI built with Tailwind CSS.</p>
            <div className="flex gap-2">
              <span className="text-xs font-mono bg-muted px-2 py-1 rounded">React</span>
              <span className="text-xs font-mono bg-muted px-2 py-1 rounded">API Integration</span>
            </div>
          </div>
          
          {/* Add more projects here following the same pattern */}
        </div>
      </section>

      {/* EDUCATION & LANGUAGES */}
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Education</h2>
          <div>
            <h3 className="font-bold">Diploma in Computer Science</h3>
            <p className="text-muted-foreground">Institue Name / Board Name</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Languages</h2>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Bangla:</span> Native<br/>
            <span className="font-semibold text-foreground">English:</span> Intermediate
          </p>
        </section>
      </div>

    </main>
  );
}