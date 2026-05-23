import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark as requested initially

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else if (savedTheme === "dark" || prefersDark || !savedTheme) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass bg-black/10 dark:bg-white/10 dark:bg-black/20 hover:scale-110 transition-transform duration-300 shadow-lg text-[var(--color-neon-cyan)] dark:text-[var(--color-neon-purple)]"
      aria-label="Toggle Theme"
    >
      {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};

export default ThemeToggle;
