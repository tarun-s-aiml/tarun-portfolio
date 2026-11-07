import { useEffect, useState } from 'react';
import { X, Download, FileText, ExternalLink, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { profileData } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(100);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                {profileData.name} — Official Resume
              </h3>
              <p className="text-xs text-cyan-400 font-mono">
                {profileData.headline} • Latest Version
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded-xl border border-slate-700/60 text-slate-300">
              <button
                onClick={() => setZoomLevel((prev) => Math.max(70, prev - 15))}
                className="p-1 hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono px-1 min-w-[3rem] text-center">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((prev) => Math.min(150, prev + 15))}
                className="p-1 hover:text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                className="p-1 hover:text-white transition-colors border-l border-slate-700 pl-1.5 ml-0.5"
                title="Reset Zoom"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Preview Body */}
        <div className="overflow-y-auto overflow-x-auto p-4 sm:p-6 flex-1 bg-slate-950/60 flex flex-col items-center">
          <div 
            className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-700 transition-all duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            <img
              src="/resume.jpg"
              alt="Tarun S Official Resume Document"
              className="w-full h-auto object-contain block"
              onError={(e) => {
                // Fallback display if jpg is missing
                (e.target as HTMLImageElement).src = '/achievements/resume.jpg';
              }}
            />
          </div>
        </div>

        {/* Actions Footer */}
        <div className="px-5 sm:px-6 py-4 border-t border-slate-800 bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-400">
            TARUN-S-RESUME1.pdf • Verified & Updated
          </span>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in Tab</span>
            </a>

            <a
              href="/resume.pdf"
              download="Tarun_S_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 text-xs font-semibold uppercase tracking-wider shadow-md shadow-indigo-500/20 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
