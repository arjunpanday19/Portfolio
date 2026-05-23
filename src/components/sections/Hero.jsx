import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { portfolioData } from "../../data/portfolio";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative pt-20">
      
      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-cyan-500/20"
        >
          <FaReact size={80} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-3/4 right-1/4 text-green-500/20"
        >
          <FaNodeJs size={100} />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/3 text-green-600/20"
        >
          <SiMongodb size={70} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-6 max-w-2xl flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[var(--color-neon-cyan)] font-medium mb-2 tracking-wide uppercase text-sm md:text-base">
                Hi, my name is
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                {portfolioData.hero.name}.
              </h1>
              <div className="text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-400 mb-6 h-20 md:h-auto flex items-center">
                <span className="mr-3">I am a</span>
                <span className="text-[var(--color-neon-purple)]">
                  <Typewriter
                    options={{
                      strings: portfolioData.hero.roles,
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-8"
            >
              {portfolioData.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a 
                href={portfolioData.hero.resumeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Profile Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 w-full flex justify-center lg:justify-end relative z-10 mt-10 lg:mt-0"
          >
            <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-purple)]/30 to-[var(--color-neon-cyan)]/30 rounded-full blur-3xl"></div>
              
              {/* Actual Profile Image */}
              <img 
                src="/profile.png" 
                alt={portfolioData.hero.name}
                className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
