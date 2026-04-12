"use client";
import { motion } from "framer-motion";
import Button from "./Button";
export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">Let’s Work Together</h2>

      <p className="text-muted-foreground mb-4">
        Feel free to reach out for collaboration or job opportunities
      </p>




      <Button href="mailto:your@email.com">Send Email</Button>

    </motion.section>
  );
}