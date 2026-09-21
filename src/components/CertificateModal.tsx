import React, { useEffect } from 'react';
import { X, ExternalLink, Award, Calendar, Hash, Building2 } from 'lucide-react';

export interface ModalCertificate {
  title: string;
  issuer: string;
  date: string;
  category?: string;
  credentialId?: string;
  image: string;
  link?: string;
  description: string;
  skills?: string[];
  badge?: string;
}

interface CertificateModalProps {
  certificate: ModalCertificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-950/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-card rounded-2xl border border-slate-700/80 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Certificate Image View */}
          <div className="lg:col-span-7 bg-dark-950 rounded-xl overflow-hidden border border-slate-800 p-2 flex items-center justify-center shadow-inner">
            <img
              src={certificate.image}
              alt={`${certificate.title} Certificate Document`}
              className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Certificate Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono tracking-wide text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full w-fit border border-brand-cyan/20">
                <Award className="w-3.5 h-3.5" />
                <span>{certificate.category || certificate.badge || "Verified Credential"}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-3 leading-snug">
                {certificate.title}
              </h3>

              <div className="flex items-center space-x-2 text-slate-300 mt-2">
                <Building2 className="w-4 h-4 text-brand-indigo" />
                <span className="text-sm font-medium">{certificate.issuer}</span>
              </div>

              <div className="flex items-center space-x-2 text-slate-400 text-xs mt-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Issued / Completed: {certificate.date}</span>
              </div>

              {certificate.credentialId && (
                <div className="flex items-center space-x-2 text-slate-300 text-xs mt-2 bg-dark-950 px-3 py-1.5 rounded-lg border border-slate-800 font-mono">
                  <Hash className="w-3.5 h-3.5 text-brand-cyan" />
                  <span className="truncate">Credential ID: {certificate.credentialId}</span>
                </div>
              )}

              <p className="text-sm text-slate-300 mt-4 leading-relaxed bg-dark-850/50 p-3.5 rounded-xl border border-slate-800/60">
                {certificate.description}
              </p>

              {certificate.skills && certificate.skills.length > 0 && (
                <div className="mt-4">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {certificate.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-brand-indigo/10 text-brand-sky border border-brand-indigo/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-medium hover:opacity-95 transition-opacity shadow-lg shadow-brand-indigo/20"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors border border-slate-700"
              >
                <span>Full Image</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
