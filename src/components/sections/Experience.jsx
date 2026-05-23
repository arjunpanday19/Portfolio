import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-12 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center justify-center gap-4"
        >
          <div className="h-px bg-black/20 dark:bg-white/20 w-16 md:w-32"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
            <span className="text-[var(--color-neon-purple)] text-2xl mr-2">03.</span> Experience
          </h2>
          <div className="h-px bg-black/20 dark:bg-white/20 w-16 md:w-32"></div>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-neon-cyan)]/30 md:-translate-x-1/2"></div>

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-1.5 w-4 h-4 -translate-x-1/2 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--color-neon-cyan)] shadow-[0_0_10px_rgba(0,245,255,0.5)] z-10"></div>
              
              {/* Content Box */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} group`}>
                <div className="glass p-6 md:p-8 hover:border-[var(--color-neon-cyan)]/40 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[var(--color-neon-cyan)] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    {exp.company}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4 bg-black/5 dark:bg-white/5 inline-flex px-3 py-1.5 rounded-md">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {exp.duration}
                    </span>
                    <span>|</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {exp.location}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--color-neon-purple)] mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
