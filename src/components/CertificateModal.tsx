import { useEffect } from 'react';
import { X, ExternalLink, Award, Calendar, Hash, CheckCircle2, Download } from 'lucide-react';

export interface CertificateModalData {
  title: string;
  issuer: string;
  category?: string;
  date?: string;
  credentialId?: string;
  image: string;
  link?: string;
  description?: string;
  skills?: string[];
  affiliation?: string;
}

interface CertificateModalProps {
  certificate: CertificateModalData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({ certificate, isOpen, onClose }: CertificateModalProps) {
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

  if (!isOpen || !certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-cyan-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1 font-sans">
                {certificate.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {certificate.issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Certificate Image Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center group">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[55vh] w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/certificates/novitech-ai.png';
              }}
            />
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            {certificate.category && (
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-slate-400 block text-[10px] uppercase">Category</span>
                <span className="text-cyan-300 font-semibold text-xs">{certificate.category}</span>
              </div>
            )}
            {certificate.date && (
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-slate-400 block text-[10px] uppercase">Issue Date</span>
                <span className="text-slate-200 font-semibold text-xs flex items-center gap-1.5 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {certificate.date}
                </span>
              </div>
            )}
            {certificate.credentialId && (
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 sm:col-span-2">
                <span className="text-slate-400 block text-[10px] uppercase">Credential / Verification ID</span>
                <span className="text-emerald-300 font-semibold text-xs flex items-center gap-1.5 mt-0.5">
                  <Hash className="w-3.5 h-3.5 text-emerald-400" />
                  {certificate.credentialId}
                </span>
              </div>
            )}
            {certificate.affiliation && (
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 sm:col-span-2">
                <span className="text-slate-400 block text-[10px] uppercase">Affiliation / Authority</span>
                <span className="text-slate-200 font-semibold text-xs mt-0.5 block">{certificate.affiliation}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {certificate.description && (
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {certificate.description}
            </div>
          )}

          {/* Skills Tags */}
          {certificate.skills && certificate.skills.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Validated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-3">
          <a
            href={certificate.image}
            download={`${certificate.title.toLowerCase().replace(/\s+/g, '-')}-certificate.png`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Open High-Res</span>
          </a>

          {certificate.link && (
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 text-xs font-semibold uppercase tracking-wider shadow-md transition-all"
            >
              <span>Verify Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
