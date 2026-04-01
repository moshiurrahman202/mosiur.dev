
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Github from "./components/Github";
// import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Github /> 
      <Contact />
    </main>
  );
}
