import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isDarkMode, setIsDarkMode, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel px-6 py-3 shadow-2xl border-white/10' 
          : 'bg-transparent px-4 py-2'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0a0d14] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wide text-white flex items-center gap-1.5">
                {personalInfo.name}
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[11px] font-mono text-cyan-400/80 -mt-1 tracking-wider uppercase">
                AI & ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 relative ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-3 p-5 rounded-2xl glass-panel border border-white/10 flex flex-col gap-3 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="flex items-center justify-center gap-2 w-full mt-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span>View & Download Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}
