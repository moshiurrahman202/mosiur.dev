"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Recipe Finder",
    desc: "Search meals and save favorites",
    image: "/project1.png",
    live: "#",
    github: "#",
  },
  {
    title: "Todo App",
    desc: "Manage daily tasks efficiently",
    image: "/project1.png",
    live: "#",
    github: "#",
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
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <a
                href={project.live}
                className="px-4 py-2 bg-white text-black rounded-full text-sm"
              >
                Live
              </a>
              <a
                href={project.github}
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
// "use client";
// import { motion } from "framer-motion";
// const projects = [
//   {
//     title: "Recipe Finder",
//     desc: "Search meals and save favorites",
//   },
//   {
//     title: "Todo App",
//     desc: "Manage daily tasks efficiently",
//   },
// ];

// export default function Projects() {
//   return (
//     <motion.section
//   id="projects"
//   className="py-20 px-6 max-w-6xl mx-auto"
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
// >
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text" >Projects</h2>
//       <h3 className="text-xl font-semibold text-pink-400 mb-6">
//   Featured Projects
// </h3>
//       <div className="grid md:grid-cols-2 gap-6">
//   {projects.map((project) => (
//     <div
//       key={project.title}
//       className="p-6 rounded-2xl border bg-card border-border hover:bg-white/10 transition transform hover:-translate-y-2 hover:shadow-xl"
//     >
//       <h3 className="text-xl font-semibold">{project.title}</h3>
//       <p className="text-gray-400 mt-2">{project.desc}</p>

//       {/* Tech Stack */}
//       <div className="flex gap-2 mt-3 flex-wrap">
//         <span className="text-xs px-2 py-1 bg-white/10 rounded">
//           React
//         </span>
//         <span className="text-xs px-2 py-1 bg-white/10 rounded">
//           Node
//         </span>
//       </div>

//       {/* Buttons */}
//       <div className="mt-4 flex gap-3">
//         <a className="text-sm text-blue-400 hover:underline hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:rounded-2xl cursor-pointer">Live</a>
//         <a className="text-sm text-muted-foreground hover:underline hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:rounded-2xl cursor-pointer">GitHub</a>
//       </div>
//     </div>
//   ))}
// </div>
//     </motion.section>
//   );
// }