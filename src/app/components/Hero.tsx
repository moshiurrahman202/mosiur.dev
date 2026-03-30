"use client";

import { motion } from "framer-motion";
import Button from "./Button"; // We'll create a reusable Button later

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
      >
        Mosiur Rahman
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-lg md:text-2xl text-gray-300 max-w-xl"
      >
        MERN Stack Developer | Building modern & scalable web apps
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <Button href="#projects">View Projects</Button>
        <Button href="/resume.pdf" variant="outline" target="_blank">
          Download Resume
        </Button>
      </motion.div>
    </section>
  );
}