import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
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
  Server
} from 'lucide-react';

// --- Types ---
type Section = 'home' | 'about' | 'projects' | 'skills' | 'contact' | null;

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
  subtitle 
}: { 
  title: string; 
  icon: any; 
  color: string; 
  onClick: () => void;
  subtitle?: string;
}) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative aspect-square w-full rounded-2xl p-8 flex flex-col justify-between text-left transition-shadow hover:shadow-2xl overflow-hidden group ${color}`}
  >
    <div className="z-10">
      <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
    </div>
    {subtitle && (
      <p className="z-10 text-white/80 text-sm font-medium uppercase tracking-widest">{subtitle}</p>
    )}
    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
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
      className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group"
    >
      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-slate-50 transition-colors">
        <ArrowLeft className="w-5 h-5" />
      </div>
      <span className="font-semibold uppercase tracking-widest text-sm">Back to Gallery</span>
    </button>
    {children}
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(null);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <SectionWrapper onBack={() => setActiveSection(null)}>
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
                Welcome
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
                Nithesha <span className="text-indigo-600">K.</span>
              </h1>
              <p className="text-2xl md:text-3xl text-slate-500 font-light max-w-2xl leading-relaxed">
                Java Full Stack Developer crafting scalable web applications with precision and modern architecture.
              </p>
              <div className="pt-8 flex gap-4">
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </SectionWrapper>
        );
      case 'about':
        return (
          <SectionWrapper onBack={() => setActiveSection(null)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight">The Creative Journey</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
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
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">3+ Years Experience</h4>
                      <p className="text-sm text-slate-500">Full Stack Development</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">Modern Stack</h4>
                      <p className="text-sm text-slate-500">Java, Spring, Angular</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                      <Server className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">Scalable Systems</h4>
                      <p className="text-sm text-slate-500">Microservices & Cloud</p>
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
              <h2 className="text-4xl font-bold tracking-tight">Digital Artifacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">{project.period}</span>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-sm font-medium text-slate-400">{project.role}</span>
                      <ExternalLink className="w-5 h-5 text-slate-300" />
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
              <h2 className="text-4xl font-bold tracking-tight">Technical Arsenal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS.map((skill, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <span key={item} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium border border-slate-100">
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
                <h2 className="text-4xl font-bold tracking-tight">Let's Connect</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <a href="mailto:nitheshkokkada3@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                      <Mail className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                      <p className="font-bold">nitheshkokkada3@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/nithesha-k-49bb2a194" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">LinkedIn</p>
                      <p className="font-bold">nithesha-k-49bb2a194</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-slate-200 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                      <Github className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">GitHub</p>
                      <p className="font-bold">nithesh-k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                    <input type="text" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500/20 transition-all" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <input type="email" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500/20 transition-all" placeholder="hello@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea rows={4} className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500/20 transition-all" placeholder="Tell me about your project..." />
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
          <div className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto py-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
                Nithesha <span className="text-indigo-600">K.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl leading-relaxed">
                A digital curator crafting atmospheric web experiences through minimalist design and technical precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TileCard 
                title="Home" 
                icon={Home} 
                color="bg-indigo-600" 
                subtitle="Intro & Philosophy"
                onClick={() => setActiveSection('home')} 
              />
              <TileCard 
                title="About" 
                icon={User} 
                color="bg-teal-500" 
                subtitle="The Creative Journey"
                onClick={() => setActiveSection('about')} 
              />
              <TileCard 
                title="Projects" 
                icon={Briefcase} 
                color="bg-amber-500" 
                subtitle="Curated Artifacts"
                onClick={() => setActiveSection('projects')} 
              />
              <TileCard 
                title="Skills" 
                icon={Code2} 
                color="bg-rose-500" 
                subtitle="Tooling & Craft"
                onClick={() => setActiveSection('skills')} 
              />
              <TileCard 
                title="Contact" 
                icon={Mail} 
                color="bg-indigo-400" 
                subtitle="Let's Connect"
                onClick={() => setActiveSection('contact')} 
              />
              <div className="hidden lg:flex aspect-square border-2 border-dashed border-slate-200 rounded-2xl p-8 flex-col justify-center items-center text-center opacity-40 hover:opacity-100 transition-opacity">
                <p className="text-xs uppercase tracking-[0.2em] font-bold leading-relaxed text-slate-400">
                  Currently exploring<br/>the intersections of<br/>motion and code.
                </p>
              </div>
            </div>

            <footer className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">© 2026 Ethereal Gallery</span>
              <div className="flex gap-8">
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">LinkedIn</a>
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">GitHub</a>
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">Contact</a>
              </div>
            </footer>
          </div>
        );
    }
  };

  return (
    <div className="font-sans">
      <AnimatePresence mode="wait">
        {renderSection()}
      </AnimatePresence>
    </div>
  );
}
