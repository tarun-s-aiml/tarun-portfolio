import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a 
            href="#home"
            className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-cyan rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-indigo via-brand-cyan to-brand-emerald flex items-center justify-center font-mono font-bold text-white shadow-md shadow-brand-indigo/30 group-hover:scale-105 transition-transform">
              TS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                AI / ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/80'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-medium border border-slate-700/80 transition-all hover:border-brand-cyan/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            >
              <FileText className="w-3.5 h-3.5 text-brand-cyan" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xs font-medium hover:opacity-90 transition-opacity shadow-md shadow-brand-indigo/20"
            >
              <span>Get In Touch</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="sm:hidden inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs border border-slate-700"
              aria-label="View Resume"
            >
              <FileText className="w-3 h-3 text-brand-cyan" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-dark-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-1.5 shadow-2xl">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-indigo/20 to-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
            >
              <FileText className="w-4 h-4 text-brand-cyan" />
              <span>View Verified Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xs font-medium text-center shadow-lg shadow-brand-indigo/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Contact Tarun</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
