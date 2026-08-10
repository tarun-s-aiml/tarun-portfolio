import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0a0d14] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Artificial Intelligence & Machine Learning Student | Python, Security & Visual Analytics.
            </p>
          </div>

          {/* Socials & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-900 transition-all flex items-center gap-1.5 text-xs font-mono"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>TOP</span>
            </button>
          </div>

        </div>

        {/* Copyright & Deployment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Tarun S. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Tailwind CSS & Framer Motion</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-cyan-400">Ready for Vercel / GitHub Pages</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
