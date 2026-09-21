import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-gradient">& Degrees</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Foundational computer science, machine learning specializations, and academic milestones.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {education.map((edu, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-8 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                {/* Grade Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                  <Award className="w-4 h-4" />
                  <span>{edu.grade}</span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {edu.details}
                </p>

              </div>

              {/* Verified Accent */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Verified Academic Credentials</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
