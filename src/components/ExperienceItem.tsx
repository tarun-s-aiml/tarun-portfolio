import { Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import type { ExperienceItem as ExperienceItemType } from '../data/experience';

interface ExperienceItemProps {
  experience: ExperienceItemType;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const isCognifyz = experience.organization.includes('Cognifyz');

  return (
    <div className="relative pl-6 sm:pl-10 pb-12 last:pb-2 group text-left">
      {/* Timeline Line */}
      <div className="absolute top-3 left-[11px] sm:left-[19px] bottom-0 w-[2px] bg-slate-800 group-last:hidden" />

      {/* Timeline Node */}
      <div className={`absolute top-1.5 left-0 sm:left-2 w-6 h-6 rounded-full bg-slate-900 border-2 flex items-center justify-center group-hover:scale-110 transition-all duration-200 ${
        isCognifyz 
          ? 'border-emerald-400 shadow-md shadow-emerald-500/20' 
          : 'border-indigo-500/80 group-hover:border-cyan-400'
      }`}>
        <div className={`w-2 h-2 rounded-full ${isCognifyz ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
      </div>

      {/* Experience Content Card */}
      <div className={`bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border transition-all duration-300 space-y-4 ${
        isCognifyz 
          ? 'border-indigo-500/30 hover:border-cyan-400/60 shadow-lg shadow-indigo-950/20 hover:-translate-y-0.5' 
          : 'border-slate-800/80 hover:border-indigo-500/40 hover:-translate-y-0.5'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-800/70 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                {experience.type}
              </span>
              {isCognifyz && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 font-medium">
                  Latest Internship
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mt-1">
              {experience.role}
            </h3>
            <p className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mt-0.5">
              <span className="text-indigo-300">{experience.organization}</span>
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 text-xs font-mono text-slate-400">
            {experience.duration && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/70 text-slate-200">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                {experience.duration}
              </span>
            )}
            {experience.location && (
              <span className="inline-flex items-center gap-1 text-slate-400 text-[11px] pt-0.5">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {experience.location}
              </span>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {experience.description}
        </p>

        {/* Responsibilities Bullets */}
        <div className="space-y-2 pt-1">
          {experience.bullets.map((bullet, bIdx) => (
            <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Technologies used */}
        <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono text-slate-400 mr-1">Skills:</span>
          {experience.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Credential Reference */}
        {experience.certificateRef && (
          <div className="p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-500/25 flex items-center gap-2 text-[11px] text-indigo-300 font-mono">
            <Award className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>{experience.certificateRef}</span>
          </div>
        )}
      </div>
    </div>
  );
}
