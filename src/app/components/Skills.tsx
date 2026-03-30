"use client";

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
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-white/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}