import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle2, ExternalLink, Sparkles, FileBadge } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <FileBadge className="w-3.5 h-3.5" />
            <span>Credentials & Licenses</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industry <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Specialized training courses completed in Artificial Intelligence, Python programming, and Power BI visualization.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                    {cert.badge}
                  </span>
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    Issuer: {cert.issuer}
                  </p>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800">
                      {s}
                    </span>
                  ))}
                </div>

              </div>

              {/* Verified Footer Trigger */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential Verified</span>
                </span>
                
                <button
                  onClick={() => setActiveCert(cert)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="glass-panel w-full max-w-lg rounded-3xl border border-cyan-500/40 p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-white text-base">Certificate Verification</span>
                </div>
                <button onClick={() => setActiveCert(null)} className="text-slate-400 hover:text-white">✕</button>
              </div>

              <div className="space-y-2 text-center py-4 bg-slate-900/60 rounded-2xl border border-slate-800">
                <h4 className="text-xl font-bold text-cyan-300">{activeCert.title}</h4>
                <p className="text-xs font-mono text-slate-400">Issued to Tarun S by {activeCert.issuer}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-mono border border-emerald-500/30 mt-2">
                  Status: Verified & Authenticated
                </div>
              </div>

              <button
                onClick={() => setActiveCert(null)}
                className="w-full py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
