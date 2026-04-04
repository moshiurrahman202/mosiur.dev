"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-background relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/10 dark:bg-pink-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500"
      >
        Moshiur Rahman
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-lg md:text-2xl text-muted-foreground max-w-xl"
      >
        MERN Stack Developer | Building modern & scalable web apps
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <Button href="#projects">View Projects</Button>

        <a href="/resume.pdf" download>
          <Button>Download Resume</Button>
        </a>
      </motion.div>

      {/* Status */}
      <p className="mt-2 text-green-500 text-sm">
        ● Available for opportunities
      </p>
      
    </section>
  );
}