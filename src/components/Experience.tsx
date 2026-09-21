import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, Building } from 'lucide-react';
import { experiences } from '../data/experience';

interface ExperienceProps {
  onViewCert: (certTitle: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onViewCert }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-indigo/10 text-brand-indigo text-xs font-mono border border-brand-indigo/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on internship positions contributing directly to machine learning pipelines, natural language processing, and AI system evaluation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-brand-cyan before:via-brand-indigo before:to-transparent">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } group`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-brand-cyan flex items-center justify-center z-10 shadow-lg shadow-brand-cyan/20 group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse-slow" />
                </div>

                {/* Content Card */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                  <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 shadow-xl">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 font-semibold">
                        {exp.type}
                      </span>
                      {exp.duration && (
                        <div className="flex items-center space-x-1 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.duration}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center space-x-2 text-slate-300 text-sm font-medium mt-1 mb-3">
                      <Building className="w-4 h-4 text-brand-indigo" />
                      <span>{exp.organization}</span>
                      {exp.location && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span className="text-xs text-slate-400">{exp.location}</span>
                        </>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities Bullets */}
                    <ul className="space-y-2 mb-5 text-xs text-slate-300">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="pt-3 border-t border-slate-800/80">
                      <span className="text-[11px] font-mono text-slate-400 block mb-2 font-semibold">
                        Technologies & Methodologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] px-2.5 py-0.5 rounded-md bg-dark-950 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate reference if present */}
                    {exp.certificateRef && (
                      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                        <span className="text-slate-400 text-[11px] italic truncate max-w-[200px] sm:max-w-xs">
                          {exp.certificateRef}
                        </span>
                        <button
                          onClick={() => onViewCert(exp.role)}
                          className="text-brand-cyan hover:underline text-[11px] font-medium flex items-center gap-1 shrink-0"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>View Cert</span>
                        </button>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
