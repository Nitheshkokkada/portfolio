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
  Sun,
  X
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
    className={`relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full flex flex-col items-center justify-center text-center overflow-hidden group ${color} shadow-lg shrink-0`}
    style={{ willChange: 'transform' }}
  >
    <div className="z-10 flex flex-col items-center">
      <div className="bg-white/20 p-2 sm:p-3.5 rounded-full mb-1 sm:mb-2 backdrop-blur-md group-hover:bg-white/30 transition-colors duration-300">
        <Icon className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
      </div>
      <h3 className="text-[8px] sm:text-[10px] lg:text-xs font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.25em]">{title}</h3>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.button>
);

const SectionWrapper = ({ children, onBack, title }: { children: React.ReactNode; onBack: () => void; title?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    className="min-h-screen pt-24 pb-12 px-6 max-w-5xl mx-auto"
    style={{ willChange: 'transform, opacity' }}
  >
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
      >
        <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center group-hover:bg-slate-50 dark:group-hover:bg-slate-700 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className="font-semibold uppercase tracking-widest text-xs">Back to Gallery</span>
      </button>
      {title && (
        <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
          {title}
        </h2>
      )}
    </div>
    {children}
  </motion.div>
);

const BackgroundAnimation = React.memo(({ isDarkMode }: { isDarkMode: boolean }) => {
  const particles = React.useMemo(() => {
    return [...Array(40)].map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      yStart: 40 + Math.random() * 60,
      yEnd1: 42 + Math.random() * 58,
      yEnd2: 40 + Math.random() * 60,
      opacity: Math.random() * 0.7,
      scale: Math.random() * 1.5,
      duration: 4 + Math.random() * 8,
      delay: Math.random() * 10,
      isLarge: i % 10 === 0
    }));
  }, []);

  return (
    <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isDarkMode ? 'opacity-100' : 'opacity-20'}`} 
         style={{ background: isDarkMode ? 'radial-gradient(circle at 50% 30%, #0c1e35 0%, #020617 100%)' : 'radial-gradient(circle at 50% 50%, #f8fafc 0%, #e2e8f0 100%)' }}>
      
      {/* SVG Waves Container with Perspective */}
      <div className="absolute inset-0 w-full h-full opacity-60" style={{ willChange: 'transform' }}>
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" style={{ display: 'block', minWidth: '100vw' }}>
          {[...Array(12)].map((_, i) => {
            const progress = i / 12;
            const baseY = 400 + Math.pow(progress, 1.5) * 400; 
            const amplitude = 20 + Math.pow(progress, 2) * 120; 
            const strokeWidth = 0.5 + progress * 2.5;
            const opacityValue = 0.05 + (1 - progress) * 0.4;
            
            const segments = 6;
            const segmentWidth = 1440 / segments;
            
            const generatePath = (ampMult: number) => {
              let d = `M-300,${baseY}`;
              for (let j = 0; j < segments; j++) {
                const x1 = j * segmentWidth + segmentWidth / 3;
                const x2 = j * segmentWidth + (segmentWidth * 2) / 3;
                const x3 = (j + 1) * segmentWidth;
                const y1 = baseY + (j % 2 === 0 ? -amplitude * ampMult : amplitude * ampMult);
                const y2 = baseY + (j % 2 === 0 ? -amplitude * ampMult : amplitude * ampMult);
                d += ` C${x1},${y1} ${x2},${y2} ${x3},${baseY}`;
              }
              d += ` L1740,${baseY}`;
              return d;
            };
            
            return (
              <motion.path
                key={`wave-${i}`}
                initial={{ d: generatePath(1), opacity: 0 }}
                animate={{
                  d: [
                    generatePath(1),
                    generatePath(-1),
                    generatePath(1)
                  ],
                  opacity: opacityValue
                }}
                transition={{
                  d: {
                    duration: 15 + (i % 6) * 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  },
                  opacity: {
                    duration: 2,
                    delay: i * 0.1
                  }
                }}
                fill="none"
                stroke={isDarkMode ? (i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#3b82f6" : "#1e40af") : "#6366f1"}
                strokeWidth={strokeWidth}
                strokeOpacity={opacityValue}
                style={{ willChange: 'd' }}
              />
            );
          })}
        </svg>
      </div>

      {/* Glowing Particles (Dust & Nodes) */}
      {particles.map((p) => (
        <motion.div
          key={`node-${p.id}`}
          initial={{ 
            x: p.x, 
            y: `${p.yStart}%`,
            opacity: 0 
          }}
          animate={{ 
            y: [`${p.yStart}%`, `${p.yEnd1}%`, `${p.yEnd2}%`],
            opacity: [0, p.opacity, 0],
            scale: [0, p.scale, 0]
          }}
          transition={{ 
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          className={`absolute rounded-full ${p.isLarge ? 'w-1 h-1 bg-white' : 'w-[1px] h-[1px] bg-cyan-400'}`}
          style={{ 
            willChange: 'transform, opacity',
            boxShadow: p.isLarge ? '0 0 12px rgba(34, 211, 238, 0.9)' : 'none'
          }}
        />
      ))}

      {/* Cinematic Lens Flare Streak (Horizon) */}
      <div className="absolute top-[50%] left-0 w-full flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            scaleX: [0.7, 1.5, 0.7],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_40px_rgba(34,211,238,0.6)]" 
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[65%] w-5 h-5 bg-white rounded-full blur-[10px] shadow-[0_0_30px_rgba(255,255,255,0.8)]" 
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      {/* Atmospheric Vignette & Glows */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 blur-[100px] ${isDarkMode ? 'bg-blue-900/5' : 'bg-indigo-100/5'}`} style={{ transform: 'translate3d(-50%, -50%, 0)' }} />
    </div>
  );
});

const AboutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="p-6 sm:p-10 overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-1">About Me</h2>
              <div className="h-1 w-16 bg-indigo-600 rounded-full" />
            </div>
            <button onClick={onClose} className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
              <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            </button>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-3">The Journey</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-sm max-w-3xl">
                I am a passionate Java Full Stack Developer with a deep love for building scalable systems. My expertise lies in bridging the gap between complex backend logic and intuitive frontend experiences. I thrive on solving challenging problems and optimizing performance.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-3">Experience</h3>
                <div className="space-y-3">
                  {[
                    { role: "Senior Java Developer", company: "Tech Solutions", period: "2023+" },
                    { role: "Full Stack Engineer", company: "Innovate Web", period: "2021-23" },
                    { role: "Junior Developer", company: "StartUp Hub", period: "2019-21" }
                  ].map((exp, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="font-bold text-xs text-slate-900 dark:text-white">{exp.role}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{exp.period}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">{exp.company}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-3">Projects</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: "E-Commerce Engine", desc: "Microservices for 10k+ daily transactions." },
                    { name: "Analytics Dashboard", desc: "Real-time visualization for enterprise metrics." }
                  ].map((project, i) => (
                    <div key={i} className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50">
                      <h4 className="font-bold text-xs text-indigo-900 dark:text-indigo-300 mb-1">{project.name}</h4>
                      <p className="text-[10px] text-indigo-700/70 dark:text-indigo-400/70 leading-tight">{project.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-1.5">
                  {['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'Microservices', 'Redis', 'GraphQL'].map((skill) => (
                    <span key={skill} className="px-2 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
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
          <SectionWrapper onBack={() => setActiveSection(null)} title="The Creative Journey">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    I am a dedicated Java Full Stack Developer with 3 years of experience in building scalable web applications. My expertise lies in the intersection of robust backend logic and fluid frontend interfaces.
                  </p>
                  <p>
                    Proficient in developing RESTful APIs, integrating complex components, and managing relational databases. I have a strong grasp of SDLC and agile methodologies, ensuring high-quality delivery at every stage.
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
          <SectionWrapper onBack={() => setActiveSection(null)} title="Digital Artifacts">
            <div className="space-y-12">
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
          <SectionWrapper onBack={() => setActiveSection(null)} title="Technical Arsenal">
            <div className="space-y-12">
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
          <SectionWrapper onBack={() => setActiveSection(null)} title="Let's Connect">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
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
          <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
            {/* Cinematic Cyber-Horizon Background (Optimized) */}
            <BackgroundAnimation isDarkMode={isDarkMode} />

            <div className="absolute top-8 right-8 z-50">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-slate-800 shadow-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border border-slate-200 dark:border-slate-700 active:scale-95"
              >
                {isDarkMode ? <Sun className="w-6 h-6 sm:w-7 sm:h-7" /> : <Moon className="w-6 h-6 sm:w-7 sm:h-7" />}
              </button>
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto z-10 -mt-12 sm:-mt-16 px-6">
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
                  onClick={() => setIsAboutModalOpen(true)} 
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

            <AnimatePresence>
              {isAboutModalOpen && (
                <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
              )}
            </AnimatePresence>
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
