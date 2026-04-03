"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Recipe Finder",
    desc: "Search meals and save favorites",
    image: "/project2.png",
    live: "https://smart-recipe-finder.netlify.app/",
    github: "https://github.com/moshiurrahman202",
  },
  {
    title: "Todo App",
    desc: "Manage daily tasks efficiently",
    image: "/project1.png",
    live: "https://smart-recipe-finder.netlify.app/",
    github: "https://github.com/moshiurrahman202",
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
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="group relative rounded-2xl overflow-hidden border border-border bg-card"
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <div className="overflow-hidden relative w-full h-52 sm:h-60 md:h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black rounded-full text-sm"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/20 text-white rounded-full text-sm border border-white/30"
              >
                Code
              </a>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground mt-2">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}