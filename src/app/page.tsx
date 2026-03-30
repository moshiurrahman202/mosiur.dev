import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Later we'll add About, Skills, Projects, Contact */}
    </main>
  );
}
