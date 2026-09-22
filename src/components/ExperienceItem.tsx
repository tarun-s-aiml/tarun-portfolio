import { Calendar, MapPin, Award, ChevronRight } from 'lucide-react';
import type { ExperienceItem as ExperienceItemType } from '../data/experience';

interface ExperienceItemProps {
  experience: ExperienceItemType;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-12 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute top-3 left-[11px] sm:left-[15px] bottom-0 w-[2px] bg-slate-800 group-last:hidden" />

      {/* Timeline Node */}
      <div className="absolute top-1.5 left-0 sm:left-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500/80 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-200">
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
      </div>

      {/* Experience Content Card */}
      <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 space-y-4 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/70 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                {experience.type}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mt-0.5">
              {experience.role}
            </h3>
            <p className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mt-0.5">
              <span>{experience.organization}</span>
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-slate-400">
            {experience.duration && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                {experience.duration}
              </span>
            )}
            {experience.location && (
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {experience.location}
              </span>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {experience.description}
        </p>

        {/* Responsibilities Bullets */}
        <div className="space-y-2">
          {experience.bullets.map((bullet, bIdx) => (
            <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
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
              className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Credential Reference */}
        {experience.certificateRef && (
          <div className="p-2.5 rounded-lg bg-indigo-950/20 border border-indigo-500/20 flex items-center gap-2 text-[11px] text-indigo-300 font-mono">
            <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span>{experience.certificateRef}</span>
          </div>
        )}
      </div>
    </div>
  );
}
