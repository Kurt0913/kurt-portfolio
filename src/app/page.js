import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col pt-20">
      <Navbar />
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}