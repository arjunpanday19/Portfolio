import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
            <span className="text-[var(--color-neon-cyan)] text-2xl mr-2">02.</span> Technical Skills
          </h2>
          <div className="h-px bg-black/20 dark:bg-white/20 w-full max-w-xs"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 hover:shadow-[0_0_20px_rgba(0,245,255,0.1)] transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-black/10 dark:border-white/10 pb-2">
                {skillGroup.category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {skillGroup.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-14 h-14 rounded-xl glass flex items-center justify-center bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:bg-white/10 transition-colors duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <item.icon className={`text-3xl ${item.color} drop-shadow-lg group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:text-gray-200 transition-colors">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
