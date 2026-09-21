import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/85 backdrop-blur-md transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Document Preview"
    >
      <div 
        className="relative w-full max-w-5xl h-[92vh] glass-card rounded-2xl border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-dark-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
              <FileText className="w-4 h-4 text-brand-cyan" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base">
                {profileData.name} — Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-400">
                Official Resume Document (PDF)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/resume.pdf"
              download="TARUN_S_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xs font-semibold hover:opacity-95 shadow-md shadow-brand-indigo/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="Open in new window"
              aria-label="Open resume in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-dark-950 p-2 sm:p-4 overflow-hidden relative">
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0"
            title="Tarun S Verified Resume"
            className="w-full h-full rounded-xl border border-slate-800 bg-white"
          />
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-dark-950 px-6 py-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Resume Document
          </span>
          <span className="font-mono text-[11px] text-slate-500">
            {profileData.email} • {profileData.phone}
          </span>
        </div>
      </div>
    </div>
  );
};
