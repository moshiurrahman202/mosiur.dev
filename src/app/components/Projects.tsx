"use client";

const projects = [
  {
    title: "Recipe Finder",
    desc: "Search meals and save favorites",
  },
  {
    title: "Todo App",
    desc: "Manage daily tasks efficiently",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}