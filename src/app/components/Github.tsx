"use client";
export default function Github() {
  const username = "moshiurrahman202";
  const theme = "radical";
  
  // Using an alternative mirror to avoid rate-limiting issues
  const baseUrl = "https://github-readme-stats-three-wine-12.vercel.app"; 

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        GitHub Stats
      </h2>

      <div className="flex flex-col items-center gap-6 border bg-card border-border p-6 rounded-2xl max-w-xl mx-auto">
        
        {/* Stats Card */}
        <img
          className="w-full max-w-md hover:scale-105 transition"
          src={`${baseUrl}/api?username=${username}&show_icons=true&theme=${theme}`}
          alt="github stats"
        />

        {/* Top Languages Card */}
        <img
          className="w-full max-w-md hover:scale-105 transition"
          src={`${baseUrl}/api/top-langs/?username=${username}&layout=compact&theme=${theme}`}
          alt="top languages"
        />

        {/* Streak Card (Different Creator, usually more stable) */}
        <img
          className="w-full max-w-md hover:scale-105 transition"
          src={`https://streak-stats.demolab.com/?user=${username}&theme=${theme}`}
          alt="streak"
        />
      </div>
    </section>
  );
}