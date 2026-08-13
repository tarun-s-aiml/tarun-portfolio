import React, { useState } from 'react';
import { Award, CheckCircle2, Eye, Maximize2, X, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Calendar, Building2, Tag } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);

  const openModal = (index) => {
    setSelectedCertIndex(index);
  };

  const closeModal = () => {
    setSelectedCertIndex(null);
  };

  const nextCert = () => {
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((prev) => (prev + 1) % achievements.length);
    }
  };

  const prevCert = () => {
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    }
  };

  const activeCert = selectedCertIndex !== null ? achievements[selectedCertIndex] : null;

  return (
    <section id="achievements" className="py-24 relative z-10 bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Certificates & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient">Achievements</span> & Activities
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Verified certificates of participation, NCC defence air wing cadet credentials, NSS youth service drives, and marathon recognitions.
          </p>
        </div>

        {/* Dynamic 5-Card Responsive Grid Layout that fills the page naturally */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-stretch max-w-7xl mx-auto">
          {achievements.map((item, idx) => {
            // First 3 cards take 2/6 = 1/3 width on lg screens
            // Last 2 cards take 3/6 = 1/2 width on lg screens
            // On md screens: 1st 4 take 1/2 width, 5th takes full width (span 2)
            const lgSpanClass = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            const mdSpanClass = idx === 4 ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-1';

            return (
              <div 
                key={item.id}
                className={`${lgSpanClass} ${mdSpanClass} glass-panel p-6 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-5 group transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  
                  {/* Top Badge & Date Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30 font-medium">
                      {item.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  {/* Certificate Image Preview Container */}
                  <div 
                    onClick={() => openModal(idx)}
                    className="relative aspect-[16/11] bg-slate-950/90 border border-slate-800 rounded-2xl overflow-hidden group/img cursor-pointer shadow-md"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover/img:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="w-4 h-4" />
                        <span>View Certificate</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1.5">
                    <h3 
                      onClick={() => openModal(idx)}
                      className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer leading-snug"
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-start gap-1.5 text-xs font-mono text-cyan-400/90">
                      <Building2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item.issuer}</span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800 flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5 text-cyan-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                  
                  <button
                    onClick={() => openModal(idx)}
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-400 text-cyan-300 hover:text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 border border-cyan-500/20 hover:border-cyan-400"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* High-Resolution Certificate Modal Lightbox */}
        {activeCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200"
            onClick={closeModal}
          >
            <div 
              className="glass-panel w-full max-w-4xl max-h-[92vh] rounded-3xl border border-cyan-500/40 p-4 sm:p-6 flex flex-col justify-between space-y-4 shadow-2xl overflow-y-auto relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 gap-4">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-base sm:text-lg truncate">
                      {activeCert.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 truncate">
                      Issued to {activeCert.recipient} • {activeCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Prev / Next controls */}
                  <button
                    onClick={prevCert}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Previous Certificate"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextCert}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Next Certificate"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Certificate Image Display Container */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800/80 p-2 sm:p-4 flex items-center justify-center min-h-[300px] max-h-[55vh] overflow-auto shadow-inner relative group">
                <img 
                  src={activeCert.image} 
                  alt={activeCert.title} 
                  className="max-h-[50vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Details & Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800 text-xs">
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">Issuing Authority / Host</span>
                  <p className="font-semibold text-white">{activeCert.issuer}</p>
                  <p className="text-slate-400 text-[11px]">{activeCert.association}</p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">Certificate Details</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 font-mono border border-emerald-500/30">
                      ID: {activeCert.certId}
                    </span>
                    {activeCert.regNo && (
                      <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 font-mono border border-cyan-500/30">
                        Reg: {activeCert.regNo}
                      </span>
                    )}
                    {activeCert.usn && (
                      <span className="px-2.5 py-1 rounded-full bg-purple-950 text-purple-300 font-mono border border-purple-500/30">
                        USN: {activeCert.usn}
                      </span>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2 space-y-1 border-t border-slate-800/60 pt-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">Description</span>
                  <p className="text-slate-300 leading-relaxed">{activeCert.description}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <a 
                  href={activeCert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Resolution Image</span>
                </a>

                <button
                  onClick={closeModal}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
