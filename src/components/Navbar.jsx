import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Certificates", to: "certificates" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg shadow-cyan-900/20 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Arjun<span className="text-[var(--color-neon-cyan)]">.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[var(--color-neon-cyan)]"
              className="text-gray-700 dark:text-gray-300 hover:text-[var(--color-neon-cyan)] transition-colors cursor-pointer text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass bg-white/95 dark:bg-[#0a0a0a]/95 py-4 flex flex-col items-center gap-4 border-t border-black/10 dark:border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[var(--color-neon-cyan)]"
              className="text-gray-700 dark:text-gray-300 hover:text-[var(--color-neon-cyan)] transition-colors cursor-pointer text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
