import React from 'react';
import { X, Github, ExternalLink, ShieldAlert, Cpu, CheckCircle2, Terminal, Code2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel w-full max-w-3xl max-h-[90vh] rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          
          {/* Narrative */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
              System Overview & Problem Statement
            </h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
              Key Features & Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
              Technologies & Libraries Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 text-cyan-300 text-xs font-mono border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code Execution Preview Box */}
          <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-400 border-b border-slate-800 pb-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Project Execution Pipeline</span>
            </div>
            <pre className="text-emerald-400 whitespace-pre-wrap font-mono text-[11px] pt-1">
{`$ python run_system.py --mode=production
[INFO] Initializing ${project.title}...
[INFO] Feature Extractor & Classification Pipeline: READY
[SUCCESS] Real-world response loops active.`}
            </pre>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Close
          </button>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md shadow-cyan-500/20 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>
        </div>

      </div>
    </div>
  );
}
