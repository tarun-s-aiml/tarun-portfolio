import React from 'react';
import { FileText, Download, Eye, CheckCircle2, ExternalLink } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 relative bg-dark-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden shadow-2xl glow-indigo">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-indigo/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-mono border border-brand-cyan/20">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Recruiter Ready Resume
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Looking for a dedicated AI/ML engineer or software engineering intern? Download my official, verified one-page resume covering project architectures, technical internships, and skill competencies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                  <span>Verified Contact & Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                  <span>Hands-on Internship Outcomes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                  <span>Verified 88.68% NLP Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                  <span>Official PDF Document</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="md:col-span-4 flex flex-col space-y-3.5 justify-center">
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-bold hover:opacity-95 shadow-lg shadow-brand-indigo/25 transition-all hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="TARUN_S_Resume.pdf"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-semibold border border-slate-700 transition-all hover:-translate-y-0.5 shadow-md shadow-black/40"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>Download PDF</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-slate-400 hover:text-slate-300 flex items-center justify-center space-x-1 pt-1"
              >
                <span>Open in separate tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
