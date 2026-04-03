// "use client";

// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <motion.section
//       id="contact"
//       className="py-20 px-6 flex justify-center"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <div className="w-full max-w-xl bg-card border border-border p-8 rounded-2xl text-center shadow-xl">
        
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
//           Let’s Work Together
//         </h2>

//         <p className="text-muted-foreground mb-6">
//           I’m open to freelance, internships & full-time opportunities.
//         </p>

//         <a
//           href="mailto:your@email.com"
//           className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:scale-105 transition"
//         >
//           Send Email 🚀
//         </a>
//       </div>
//     </motion.section>
//   );
// }
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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Let’s Work Together</h2>

      <p className="text-muted-foreground mb-4">
        Feel free to reach out for collaboration or job opportunities
      </p>

      <a
        href="mailto:your@email.com"
      >
        <Button>Send Email</Button>
      </a>
    </motion.section>
  );
}