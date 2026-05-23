import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save data to send and clear the form immediately
    const dataToSend = { ...formData };
    setFormData({ name: "", email: "", message: "" });
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/arjunpanday9369@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: dataToSend.name,
          email: dataToSend.email,
          message: dataToSend.message
        })
      });

      const result = await response.json();
      
      if (result.success === "true" || result.success === true) {
        alert("Message sent successfully!");
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-[var(--color-neon-cyan)]">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 glass p-8 h-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Info</h3>
            
            <div className="space-y-6">
              <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-[var(--color-neon-cyan)] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-neon-cyan)]/20 transition-colors border border-transparent group-hover:border-[var(--color-neon-cyan)]/50">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium break-all">{portfolioData.contact.email}</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium">{portfolioData.contact.phone}</div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Social Profiles</h4>
              <div className="flex gap-4">
                <a href={portfolioData.contact.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-black/10 dark:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all">
                  <FaGithub size={20} />
                </a>
                <a href={portfolioData.contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-all">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 glass p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-600 dark:text-gray-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-[var(--color-neon-cyan)] focus:ring-1 focus:ring-[var(--color-neon-cyan)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-[var(--color-neon-cyan)] focus:ring-1 focus:ring-[var(--color-neon-cyan)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-400">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-[var(--color-neon-cyan)] focus:ring-1 focus:ring-[var(--color-neon-cyan)] transition-all resize-none"
                  placeholder="Hello Arjun, I would like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
