import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { FaAward } from "react-icons/fa";

const Certificates = () => {
  return (
    <section id="certificates" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
            <span className="text-[var(--color-neon-cyan)] text-2xl mr-2">05.</span> Certifications
          </h2>
          <div className="h-px bg-black/20 dark:bg-white/20 w-full max-w-xs"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 text-center group hover:bg-black/5 dark:bg-white/5 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-[var(--color-neon-purple)] group-hover:opacity-20 group-hover:scale-125 transition-all duration-500">
                <FaAward size={60} />
              </div>
              
              <div className="w-12 h-12 rounded-full bg-[var(--color-neon-cyan)]/20 text-[var(--color-neon-cyan)] flex items-center justify-center mx-auto mb-4 border border-[var(--color-neon-cyan)]/30 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-shadow">
                <FaAward size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 leading-tight group-hover:text-gray-900 dark:hover:text-white transition-colors relative z-10">
                {cert.title}
              </h3>
              
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1 relative z-10">
                {cert.issuer}
              </div>
              
              <div className="text-xs font-semibold text-[var(--color-neon-purple)] bg-[var(--color-neon-purple)]/10 inline-block px-2 py-1 rounded relative z-10">
                {cert.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
