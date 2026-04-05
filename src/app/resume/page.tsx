"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          Mosiur Rahman
        </motion.h1>

        <p className="mt-3 text-lg text-muted-foreground">
          MERN Stack Developer
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          📍 Khulna, Bangladesh • 📧 mosiurrahman123654@gmail.com
        </p>

        {/* CTA */}
        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <a href="/resume.pdf" target="_blank">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:scale-105 transition">
              View Resume
            </button>
          </a>

          <a href="/resume.pdf" download>
            <button className="px-6 py-3 border border-border rounded-full hover:bg-accent transition">
              Download PDF
            </button>
          </a>
        </div>
      </section>

      {/* SUMMARY */}
      <motion.section
        className="mb-12 bg-card border border-border rounded-2xl p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-semibold mb-3">Summary</h2>
        <p className="text-muted-foreground leading-relaxed">
          MERN Stack Developer with strong experience in building modern,
          scalable, and user-friendly web applications. Skilled in React,
          Next.js, Node.js, Express, and MongoDB. Passionate about clean UI,
          smooth UX, and solving real-world problems.
        </p>
      </motion.section>

      {/* TECH STACK */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-semibold mb-6">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "React",
            "Next.js",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Zod",
            "React Hook Form",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-background border border-border rounded-xl p-3 text-center hover:scale-105 transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Project Card */}
          <div className="bg-card border border-border rounded-2xl p-5 hover:shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-lg font-semibold">Smart Recipe Finder</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Search meals, view recipes, and manage favorites with real-time API.
            </p>

            <div className="flex gap-3 mt-4 text-sm">
              <a href="#" target="_blank" className="text-blue-400 hover:underline">
                Live
              </a>
              <a href="#" target="_blank" className="text-gray-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-5 hover:shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-lg font-semibold">Dragon News</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Auth-based news platform with protected routes.
            </p>

            <div className="flex gap-3 mt-4 text-sm">
              <a href="#" target="_blank" className="text-blue-400 hover:underline">
                Live
              </a>
              <a href="#" target="_blank" className="text-gray-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        className="mb-12 bg-card border border-border rounded-2xl p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-semibold mb-3">Education</h2>
        <p className="text-muted-foreground">
          Diploma in Computer Science
        </p>
      </motion.section>

      {/* LANGUAGES */}
      <motion.section
        className="mb-12 bg-card border border-border rounded-2xl p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-semibold mb-3">Languages</h2>
        <p className="text-muted-foreground">
          Bangla (Native), English (Intermediate)
        </p>
      </motion.section>

    </main>
  );
}