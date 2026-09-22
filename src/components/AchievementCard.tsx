import { Calendar, Hash, Eye } from 'lucide-react';
import type { ExtracurricularItem } from '../data/achievements';

interface AchievementCardProps {
  achievement: ExtracurricularItem;
  onPreview: (item: ExtracurricularItem) => void;
}

export default function AchievementCard({ achievement, onPreview }: AchievementCardProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group text-left">
      
      {/* Certificate Image Preview */}
      <div 
        className="relative h-44 bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-800/80 group-hover:opacity-95 transition-opacity"
        onClick={() => onPreview(achievement)}
      >
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/achievements/ncc-a-certificate.jpg';
          }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/70 text-[10px] font-mono uppercase tracking-wider text-emerald-300">
            {achievement.category}
          </span>
        </div>

        {/* Hover Quick Preview Button */}
        <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/90 text-white text-xs font-semibold shadow-lg backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>View Certificate</span>
          </span>
        </div>
      </div>

      {/* Details Content */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <span className="font-semibold text-cyan-400 truncate">{achievement.organization}</span>
            <span className="flex items-center gap-1 shrink-0 text-[11px]">
              <Calendar className="w-3 h-3 text-indigo-400" />
              {achievement.date}
            </span>
          </div>

          <h3 className="text-base font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors line-clamp-2">
            {achievement.title}
          </h3>

          {achievement.affiliation && (
            <p className="text-[11px] font-mono text-slate-400 line-clamp-1">
              {achievement.affiliation}
            </p>
          )}

          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-normal">
            {achievement.description}
          </p>
        </div>

        {/* Credential ID if present */}
        {achievement.credentialId && (
          <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center gap-1.5 text-[11px] font-mono text-emerald-300">
            <Hash className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">Reg/ID: {achievement.credentialId}</span>
          </div>
        )}

        {/* Badge Pill & Preview trigger */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/70">
          <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-cyan-300">
            {achievement.badge}
          </span>

          <button
            onClick={() => onPreview(achievement)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview Certificate</span>
          </button>
        </div>
      </div>

    </div>
  );
}
