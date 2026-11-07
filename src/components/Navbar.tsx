import { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? (isDarkMode 
              ? 'bg-slate-900/85 backdrop-blur-xl border border-slate-800/90 shadow-xl shadow-black/40 px-5 py-2.5' 
              : 'bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-lg px-5 py-2.5')
          : 'bg-transparent px-3 py-2'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-sky-400 p-[1.5px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                isDarkMode ? 'bg-slate-950' : 'bg-slate-900'
              }`}>
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-wide flex items-center gap-1.5 font-sans">
                {profileData.name}
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-cyan-400/90 -mt-0.5 tracking-wider uppercase">
                AI & ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden xl:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-slate-100/80 border-slate-200'
          }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? (isDarkMode 
                          ? 'text-cyan-300 bg-indigo-500/20 border border-indigo-500/30 shadow-sm font-semibold' 
                          : 'text-indigo-700 bg-indigo-100 border border-indigo-200 shadow-sm font-semibold')
                      : (isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60')
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40' 
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-indigo-600'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg border ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={`xl:hidden mt-2.5 p-4 rounded-2xl border backdrop-blur-2xl flex flex-col gap-1.5 shadow-2xl animate-in fade-in slide-in-from-top-3 ${
          isDarkMode ? 'bg-slate-950/95 border-slate-800 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-800'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? (isDarkMode ? 'bg-indigo-500/20 text-cyan-300 font-semibold' : 'bg-indigo-100 text-indigo-700 font-semibold')
                  : (isDarkMode ? 'hover:bg-slate-900 text-slate-300' : 'hover:bg-slate-100 text-slate-700')
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="flex items-center justify-center gap-2 w-full mt-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-xl shadow-md"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View & Download Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}
