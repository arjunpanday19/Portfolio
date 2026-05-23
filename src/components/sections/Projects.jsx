import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
            <span className="text-[var(--color-neon-purple)] text-2xl mr-2">04.</span> Featured Projects
          </h2>
          <div className="h-px bg-black/20 dark:bg-white/20 w-full max-w-xs"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-cyan)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[var(--color-neon-cyan)]">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-neon-cyan)] transition-colors">
                        <FaGithub size={22} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-neon-cyan)] transition-colors">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-gray-900 dark:hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                {project.status && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-neon-purple)] bg-[var(--color-neon-purple)]/10 rounded-full border border-[var(--color-neon-purple)]/20">
                      {project.status}
                    </span>
                  </div>
                )}
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-gray-500 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="hover:text-[var(--color-neon-cyan)] transition-colors">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
