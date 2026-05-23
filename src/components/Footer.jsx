import { portfolioData } from "../data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-black/10 dark:border-white/10 bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Designed & Built by <span className="text-[var(--color-neon-cyan)]">{portfolioData.hero.name}</span>
        </p>
        
        <div className="flex gap-4">
          <a
            href={portfolioData.contact.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-neon-cyan)] transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={portfolioData.contact.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-neon-purple)] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
