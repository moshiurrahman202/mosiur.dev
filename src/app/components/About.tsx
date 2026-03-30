"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-gray-400 text-lg text-center leading-relaxed"
      >
        I’m a MERN Stack Developer with experience building modern web
        applications using React, Next.js, Node.js, and MongoDB. I love solving
        real-world problems and creating clean, scalable, and user-friendly
        interfaces.
      </motion.p>
    </section>
  );
}