"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ১. টাইপ ডিফাইন করা (TypeScript এর জন্য ভালো)
interface Project {
  title: string;
  desc: string;
  image: string;
  live: string;
  github: string;
  tags?: string[]; // আপনি চাইলে টেক স্ট্যাকও দেখাতে পারেন
}

const projects: Project[] = [
  {
    title: "Recipe Finder",
    desc: "Search meals and save favorites with real-time API integration.",
    image: "/project2.png",
    live: "https://smart-recipe-finder.netlify.app/",
    github: "https://github.com/moshiurrahman202",
    tags: ["React", "API", "Tailwind"]
  },
  {
    title: "Todo App",
    desc: "Manage daily tasks efficiently with local storage and filter features.",
    image: "/project1.png",
    live: "https://smart-recipe-finder.netlify.app/",
    github: "https://github.com/moshiurrahman202",
    tags: ["Next.js", "Framer Motion"]
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
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="overflow-hidden relative w-full h-52 sm:h-60 md:h-64">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-black font-medium rounded-full text-sm hover:bg-pink-500 hover:text-white transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-transparent text-white font-medium rounded-full text-sm border border-white/50 hover:border-blue-500 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {project.desc}
              </p>
              
              {project.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-secondary text-secondary-foreground rounded-md border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}