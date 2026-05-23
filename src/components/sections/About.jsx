import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
            <span className="text-[var(--color-neon-purple)] text-2xl mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-black/20 dark:bg-white/20 w-full max-w-xs"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-cyan)]/10 rounded-full blur-3xl group-hover:bg-[var(--color-neon-cyan)]/20 transition-all duration-500"></div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
              {portfolioData.about.bio}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/10 dark:border-white/10">
              {portfolioData.about.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-neon-cyan)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Education Timeline</h3>
            <div className="space-y-6 border-l-2 border-[var(--color-neon-purple)]/30 ml-3 pl-6 relative">
              {portfolioData.about.education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--color-neon-purple)]"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">{edu.degree}</h4>
                  <div className="text-[var(--color-neon-cyan)] text-sm mb-2">{edu.institution}</div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm bg-black/5 dark:bg-white/5 inline-flex px-3 py-1 rounded-md glass">
                    <span>{edu.duration}</span>
                    <span className="mx-2">|</span>
                    <span className="text-gray-900 dark:text-white font-medium">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
