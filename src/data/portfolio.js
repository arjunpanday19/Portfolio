import {
  FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin
} from 'react-icons/fa';
import {
  SiJavascript, SiExpress, SiPandas, SiNumpy, SiMongodb, SiMysql, SiGit, SiTailwindcss
} from 'react-icons/si';

export const portfolioData = {
  hero: {
    name: "Arjun Panday",
    roles: ["MERN Stack Developer", "CSE Undergraduate", "AI/ML Enthusiast"],
    tagline: "Building scalable web applications and exploring the fascinating world of AI & Machine Learning. Let's create something amazing together.",
    resumeLink: "https://drive.google.com/file/d/1-1TtfGD2Bg_c8ip7zdCHKLUaNYNXOBAh/view?usp=drivesdk",
  },
  about: {
    bio: "I am a passionate Computer Science Engineering undergraduate specializing in MERN stack development and AI/ML technologies. My goal is to build impactful, scalable, and user-centric applications while continuously learning and pushing the boundaries of what's possible in tech.",
    education: [
      {
        degree: "B.Tech in Computer Science Engineering",
        institution: "BBDITM",
        duration: "2022 – 2026",
        score: "CGPA 7.3",
      },
      {
        degree: "Class XII",
        institution: "Higher Secondary School",
        duration: "Completed in 2022",
        score: "81.2%",
      },
      {
        degree: "Class X",
        institution: "Secondary School",
        duration: "Completed in 2020",
        score: "85.6%",
      }
    ],
    stats: [
      { label: "Years of Learning", value: "3+" },
      { label: "Projects Built", value: "10+" },
      { label: "Certifications", value: "4+" }
    ]
  },
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: FaReact, color: "text-cyan-400" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-300" }
      ]
    },
    {
      category: "ML & Data",
      items: [
        { name: "Pandas", icon: SiPandas, color: "text-purple-600" },
        { name: "NumPy", icon: SiNumpy, color: "text-blue-400" },
        { name: "Matplotlib", icon: FaPython, color: "text-blue-300" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-700" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, color: "text-white" }
      ]
    }
  ],
  experience: [
    {
      role: "AI/ML Technical Intern",
      company: "NIELIT",
      duration: "Feb 2026 – Present",
      location: "Lucknow",
      description: [
        "Developing AI and Machine Learning models.",
        "Collaborating on advanced data analysis projects.",
        "Exploring state-of-the-art algorithms."
      ]
    },
    {
      role: "Core Java Intern",
      company: "ShapemySkill / DUCAT",
      duration: "July 2025 – Aug 2025",
      location: "On-site",
      description: [
        "Deepened understanding of object-oriented programming.",
        "Built robust backend systems using Java.",
        "Participated in agile development cycles."
      ]
    },
    {
      role: "Web Development Intern",
      company: "IBM",
      duration: "June 2025 – July 2025",
      location: "Remote",
      description: [
        "Designed and implemented responsive web interfaces.",
        "Optimized frontend performance.",
        "Integrated APIs with client-side applications."
      ]
    }
  ],
  projects: [
    {
      title: "Aurelyf Care",
      description: "A comprehensive healthcare application integrating ML for heart attack prediction and a streamlined appointment booking system.",
      techStack: ["React.js", "Node.js", "REST APIs", "MongoDB", "ML"],
      status: "Completed",
      github: "https://github.com/arjunpanday19/smart-heartAttack-prediction-system-online-appointment-system",
      live: "https://smart-heart-attack-prediction-syste.vercel.app/"
    },
    {
      title: "Zayka Express",
      description: "A modern, responsive food ordering platform with context API for state management and multi-page routing.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js"],
      status: "Completed",
      github: "https://github.com/arjunpanday19",
      live: "https://zayka-express-seven.vercel.app/"
    }
  ],
  certificates: [
    { title: "MERN Stack Development", issuer: "Apna College", year: "2024" },
    { title: "DSA in Java", issuer: "Apna College", year: "2024" },
    { title: "Core Java Training", issuer: "ShapeMySkills", year: "2025" },
    { title: "Internship Completion", issuer: "IBM", year: "2025" }
  ],
  contact: {
    email: "arjunpanday9369@gmail.com",
    phone: "+91 9369904802",
    social: {
      github: "https://github.com/arjunpanday19",
      linkedin: "https://www.linkedin.com/in/arjunpanday19",
    }
  }
};
