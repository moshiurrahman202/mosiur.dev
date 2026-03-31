"use client";
import { motion } from "framer-motion";
const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "Zod",
  "React Hook Form",
];

export default function Skills() {
  return (
    <motion.section
  id="skills"
  className="py-20 px-6 max-w-5xl mx-auto"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-2 hover:shadow-xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}