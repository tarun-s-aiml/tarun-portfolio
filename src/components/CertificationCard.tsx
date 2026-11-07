import { Calendar, ExternalLink, Hash, Eye, Award } from 'lucide-react';
import type { CertificationItem } from '../data/certifications';

interface CertificationCardProps {
  certification: CertificationItem;
  onPreview: (cert: CertificationItem) => void;
}

export default function CertificationCard({ certification, onPreview }: CertificationCardProps) {
  const isCognifyz = certification.id.includes('cognifyz');

  return (
    <div className={`bg-slate-900/60 backdrop-blur-xl rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between group text-left ${
      isCognifyz 
        ? 'border-indigo-500/50 hover:border-cyan-400 shadow-lg shadow-indigo-950/40 hover:shadow-cyan-500/10 hover:-translate-y-1' 
        : 'border-slate-800/80 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1'
    }`}>
      
      {/* Top Image Preview Banner */}
      <div 
        className="relative h-48 bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-800/80 group-hover:opacity-95 transition-opacity"
        onClick={() => onPreview(certification)}
      >
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/certificates/novitech-ai.png';
          }}
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-700/70 text-[10px] font-mono uppercase tracking-wider text-cyan-300 shadow-sm">
            {certification.category}
          </span>
          {isCognifyz && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950/90 backdrop-blur-md border border-emerald-500/50 text-[10px] font-mono text-emerald-300 font-semibold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              New Certificate
            </span>
          )}
        </div>

        {/* Hover Quick Preview Button */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-black/50 backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>Preview Certificate</span>
          </span>
        </div>
      </div>

      {/* Details Body */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <span className="font-semibold text-cyan-400 truncate flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              {certification.issuer}
            </span>
            <span className="flex items-center gap-1 shrink-0 text-[11px]">
              <Calendar className="w-3 h-3 text-indigo-400" />
              {certification.date}
            </span>
          </div>

          <h3 className="text-base font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors line-clamp-2">
            {certification.title}
          </h3>

          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
            {certification.description}
          </p>
        </div>

        {/* Credential ID if present */}
        {certification.credentialId && (
          <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-300">
            <Hash className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">ID: {certification.credentialId}</span>
          </div>
        )}

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-800/70">
          {certification.skills.slice(0, 4).map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-slate-800/70 border border-slate-700/50 text-[10px] font-mono text-slate-300"
            >
              {skill}
            </span>
          ))}
          {certification.skills.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
              +{certification.skills.length - 4}
            </span>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/70">
          <button
            onClick={() => onPreview(certification)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Full Details</span>
          </button>

          {certification.link ? (
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-indigo-400 hover:text-indigo-300 hover:underline"
            >
              <span>Verify</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-slate-500">Verified Document</span>
          )}
        </div>
      </div>

    </div>
  );
}
