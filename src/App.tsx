import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  Code2, 
  Mail, 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Database,
  Terminal,
  Cpu,
  Layout,
  Layers,
  Server,
  Moon,
  Sun
} from 'lucide-react';

// --- Types ---
type Section = 'about' | 'projects' | 'skills' | 'contact' | null;

interface Project {
  title: string;
  description: string;
  role: string;
  tech: string[];
  period: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "PayTime – Attendance and Payroll Management",
    description: "A cloud-based system for companies to manage employee details, documents, leaves, attendance, claims, and payroll. It brings all HR-related tasks into one platform.",
    role: "Full Stack Java Developer",
    tech: ["Java", "Spring Boot", "Hibernate", "Angular", "MySQL"],
    period: "May 2024 – Present"
  },
  {
    title: "AI DocSense",
    description: "A smart document platform that uses AI to read, understand, and manage documents automatically. It helps reduce manual work and saves time for businesses.",
    role: "Full Stack Java Developer",
    tech: ["Java", "Spring Boot", "Hibernate", "Angular", "MySQL", "Git"],
    period: "Feb 2024 – May 2024"
  },
  {
    title: "RentAll – Software Platform",
    description: "An online system for rental businesses to manage equipment bookings, inventory, quotations, and returns. Includes online payment options for subscriptions.",
    role: "Full Stack Java Developer",
    tech: ["Java", "Spring Boot", "Hibernate", "Angular", "MySQL", "Git"],
    period: "Nov 2023 – Jan 2024"
  },
  {
    title: "Enterprise Platform Tech Upgrade",
    description: "Upgraded legacy web applications built using Struts, JSP, and Java to a modern Spring MVC framework to improve security and performance.",
    role: "Java Developer",
    tech: ["Java", "Spring MVC", "JSP", "SVN", "Tomcat"],
    period: "Nov 2022 – Nov 2023"
  }
];

const SKILLS = [
  { category: "Languages", items: ["Java"], icon: <Terminal className="w-5 h-5" /> },
  { category: "Frameworks", items: ["Spring Boot", "Spring MVC", "Hibernate"], icon: <Layers className="w-5 h-5" /> },
  { category: "Front-End", items: ["Angular", "HTML5", "CSS3"], icon: <Layout className="w-5 h-5" /> },
  { category: "Database", items: ["MySQL"], icon: <Database className="w-5 h-5" /> },
  { category: "Tools", items: ["Git", "SVN", "Eclipse", "VS Code", "Postman"], icon: <Cpu className="w-5 h-5" /> }
];

// --- Components ---

const TileCard = ({ 
  title, 
  icon: Icon, 
  color, 
  onClick, 
}: { 
  title: string; 
  icon: any; 
  color: string; 
  onClick: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full flex flex-col items-center justify-center text-center transition-all hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] overflow-hidden group ${color} shadow-lg shrink-0`}
  >
    <div className="z-10 flex flex-col items-center">
      <div className="bg-white/20 p-2 sm:p-3.5 rounded-full mb-1 sm:mb-2 backdrop-blur-md group-hover:bg-white/30 transition-colors">
        <Icon className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
      </div>
      <h3 className="text-[8px] sm:text-[10px] lg:text-xs font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.25em]">{title}</h3>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.button>
);

const SectionWrapper = ({ children, onBack }: { children: React.ReactNode; onBack: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-screen pt-24 pb-12 px-6 max-w-5xl mx-auto"
  >
    <button 
      onClick={onBack}
      className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 group"
    >
      <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center group-hover:bg-slate-50 dark:group-hover:bg-slate-700 transition-colors">
        <ArrowLeft className="w-5 h-5" />
      </div>
      <span className="font-semibold uppercase tracking-widest text-xs">Back to Gallery</span>
    </button>
    {children}
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preference on initial state
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <SectionWrapper onBack={() => setActiveSection(null)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight dark:text-white">The Creative Journey</h2>
                <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    I am a dedicated Java Full Stack Developer with 3 years of experience in building scalable web applications. My expertise lies in the intersection of robust backend logic and fluid frontend interfaces.
                  </p>
                  <p>
                    Proficient in developing RESTful APIs, integrating complex components, and managing relational databases. I have a strong grasp of SDLC and agile methodologies, ensuring high-quality delivery at every stage.
                  </p>
                  <p>
                    My background in Civil Engineering gives me a unique perspective on structural integrity—a philosophy I apply to every line of code I write.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold dark:text-white">3+ Years Experience</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Full Stack Development</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-bold dark:text-white">Modern Stack</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Java, Spring, Angular</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                      <Server className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold dark:text-white">Scalable Systems</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Microservices & Cloud</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        );
      case 'projects':
        return (
          <SectionWrapper onBack={() => setActiveSection(null)}>
            <div className="space-y-12">
              <h2 className="text-4xl font-bold tracking-tight dark:text-white">Digital Artifacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 block">{project.period}</span>
                      <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-700">
                      <span className="text-sm font-medium text-slate-400 dark:text-slate-500">{project.role}</span>
                      <ExternalLink className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        );
      case 'skills':
        return (
          <SectionWrapper onBack={() => setActiveSection(null)}>
            <div className="space-y-12">
              <h2 className="text-4xl font-bold tracking-tight dark:text-white">Technical Arsenal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS.map((skill, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-md border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold dark:text-white">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <span key={item} className="px-4 py-2 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium border border-slate-100 dark:border-slate-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        );
      case 'contact':
        return (
          <SectionWrapper onBack={() => setActiveSection(null)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold tracking-tight dark:text-white">Let's Connect</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <a href="mailto:nitheshkokkada3@gmail.com" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                      <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Email</p>
                      <p className="font-bold dark:text-white">nitheshkokkada3@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/nithesha-k-49bb2a194" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">LinkedIn</p>
                      <p className="font-bold dark:text-white">nithesha-k-49bb2a194</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-slate-600 transition-colors">
                      <Github className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">GitHub</p>
                      <p className="font-bold dark:text-white">nithesh-k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Name</label>
                    <input type="text" className="w-full p-4 bg-slate-50 dark:bg-slate-700 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500/20 dark:text-white transition-all" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Email</label>
                    <input type="email" className="w-full p-4 bg-slate-50 dark:bg-slate-700 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500/20 dark:text-white transition-all" placeholder="hello@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea rows={4} className="w-full p-4 bg-slate-50 dark:bg-slate-700 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500/20 dark:text-white transition-all" placeholder="Tell me about your project..." />
                  </div>
                  <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </SectionWrapper>
        );
      default:
        return (
          <div className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
            {/* Background decorative elements with animation */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
                x: [0, 30, 0],
                y: [0, 20, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear" 
              }}
              className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none dark:bg-indigo-500/5" 
            />
            <motion.div 
              animate={{ 
                scale: [1.1, 1, 1.1],
                rotate: [0, -90, 0],
                x: [0, -30, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                ease: "linear" 
              }}
              className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none dark:bg-teal-500/5" 
            />

            {/* Floating particles animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, i % 2 === 0 ? 30 : -30, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1 h-1 bg-indigo-400 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 15}%`
                  }}
                />
              ))}
            </div>

            <div className="absolute top-8 right-8 z-50">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-slate-800 shadow-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border border-slate-200 dark:border-slate-700 active:scale-95"
              >
                {isDarkMode ? <Sun className="w-6 h-6 sm:w-7 sm:h-7" /> : <Moon className="w-6 h-6 sm:w-7 sm:h-7" />}
              </button>
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto z-10 -mt-12 sm:-mt-16">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 sm:mb-12 lg:mb-14 text-center"
              >
                <div className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-4 sm:mb-6 shadow-sm">
                  Java Full Stack Developer
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-4 sm:mb-6 text-slate-900 dark:text-white leading-none">
                  Nithesha <span className="text-indigo-600 dark:text-indigo-400">K.</span>
                </h1>
                <p className="text-xs sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl leading-relaxed mx-auto px-4">
                  Crafting scalable web applications with precision and modern architecture. Dedicated to building robust backend logic and fluid frontend interfaces.
                </p>
              </motion.div>

              <div className="flex flex-row flex-nowrap justify-center items-center gap-3 sm:gap-5 lg:gap-6 w-full overflow-x-auto no-scrollbar pt-10 pb-10 px-4">
                <TileCard 
                  title="About" 
                  icon={User} 
                  color="bg-teal-500" 
                  onClick={() => setActiveSection('about')} 
                />
                <TileCard 
                  title="Projects" 
                  icon={Briefcase} 
                  color="bg-amber-500" 
                  onClick={() => setActiveSection('projects')} 
                />
                <TileCard 
                  title="Skills" 
                  icon={Code2} 
                  color="bg-rose-500" 
                  onClick={() => setActiveSection('skills')} 
                />
                <TileCard 
                  title="Contact" 
                  icon={Mail} 
                  color="bg-indigo-600" 
                  onClick={() => setActiveSection('contact')} 
                />
              </div>
            </div>

            <footer className="absolute bottom-6 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center px-8 gap-4 z-10">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">© 2026 Nithesha K.</span>
              <div className="flex gap-6 sm:gap-10">
                <a href="https://linkedin.com/in/nithesha-k-49bb2a194" target="_blank" rel="noreferrer" className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a>
                <a href="mailto:nitheshkokkada3@gmail.com" className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Email</a>
              </div>
            </footer>
          </div>
        );
    }
  };

  return (
    <div className={`font-sans min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <AnimatePresence mode="wait">
        {renderSection()}
      </AnimatePresence>
    </div>
  );
}
