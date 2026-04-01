"use client";

// import Image from "next/image";

export default function Github() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        GitHub Stats
      </h2>

      <div className="flex flex-col items-center gap-6  border bg-card border-border p-6 rounded-2xl max-w-xl mx-auto">
        
        {/* Stats */}
        <img
          className="w-full max-w-md hover:scale-105 transition"
          src="https://github-readme-stats.vercel.app/api?username=moshiurrahman202&show_icons=true&theme=radical"
          alt="github stats"
          onError={(e) => {
            e.currentTarget.src = "/github.png";
          }}
        />

        {/* Top Languages */}
        <img
          className="w-full max-w-md hover:scale-105 transition"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=moshiurrahman202&layout=compact&theme=radical"
          alt="top languages"
          onError={(e) => {
            e.currentTarget.src = "/lang.png";
          }}
        />

        {/* Streak (this one works already) */}
        <img
          className="w-full max-w-md hover:scale-105 transition"
          src="https://streak-stats.demolab.com/?user=moshiurrahman202&theme=radical"
          alt="streak"
        />
      </div>
    </section>
  );
}