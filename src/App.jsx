import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Navbar />
      <ThemeToggle />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
