"use client";
import { motion } from "framer-motion";
const projects = [
  {
    title: "Recipe Finder",
    desc: "Search meals and save favorites",
  },
  {
    title: "Todo App",
    desc: "Manage daily tasks efficiently",
  },
];

export default function Projects() {
  return (
    <motion.section
  id="projects"
  className="py-20 px-6 max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text" >Projects</h2>
      <h3 className="text-xl font-semibold text-pink-400 mb-6">
  Featured Projects
</h3>
      <div className="grid md:grid-cols-2 gap-6">
  {projects.map((project) => (
    <div
      key={project.title}
      className="p-6 rounded-2xl border bg-card border-border hover:bg-white/10 transition transform hover:-translate-y-2 hover:shadow-xl"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.desc}</p>

      {/* Tech Stack */}
      <div className="flex gap-2 mt-3 flex-wrap">
        <span className="text-xs px-2 py-1 bg-white/10 rounded">
          React
        </span>
        <span className="text-xs px-2 py-1 bg-white/10 rounded">
          Node
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <a className="text-sm text-blue-400 hover:underline">Live</a>
        <a className="text-sm text-muted-foreground hover:underline">GitHub</a>
      </div>
    </div>
  ))}
</div>
    </motion.section>
  );
}