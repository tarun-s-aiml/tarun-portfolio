import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-mono border border-brand-cyan/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal engineering and foundational science education providing algorithmic rigor and computational foundations.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 group shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-brand-cyan transition-colors">
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6 text-brand-cyan" />
                    ) : (
                      <BookOpen className="w-6 h-6 text-brand-indigo" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-0.5">
                      {edu.degree} — <span className="text-brand-sky font-normal">{edu.field}</span>
                    </p>
                    <div className="flex items-center space-x-3 text-xs text-slate-400 mt-1.5">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-mono px-3 py-1 rounded-full bg-dark-950 text-brand-cyan border border-slate-800">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.timeline}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {edu.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 block mb-2 font-semibold">
                  Coursework & Academic Highlights:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
