import React, { useState } from 'react';
import { 
  Trophy, 
  Eye, 
  Calendar, 
  Building2, 
  HeartHandshake, 
  Medal,
  Activity
} from 'lucide-react';
import { extracurricularAchievements } from '../data/achievements';
import type { ModalCertificate } from './CertificateModal';

interface AchievementsProps {
  onSelectCertificate: (cert: ModalCertificate) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onSelectCertificate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'National Cadet Corps', 'Community & Social Service', 'Sports & Wellness'];

  const filteredItems = selectedCategory === 'All'
    ? extracurricularAchievements
    : extracurricularAchievements.filter(item => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'National Cadet Corps': return <Medal className="w-4 h-4 text-amber-400" />;
      case 'Community & Social Service': return <HeartHandshake className="w-4 h-4 text-brand-emerald" />;
      case 'Sports & Wellness': return <Activity className="w-4 h-4 text-brand-cyan" />;
      default: return <Trophy className="w-4 h-4 text-brand-indigo" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Extracurricular & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Social Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified leadership, discipline, and community initiatives including NCC Air Wing military training, NSS social service, and health drives.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Certificate Image Preview */}
                <div 
                  className="relative h-48 bg-dark-950 overflow-hidden border-b border-slate-800 cursor-pointer"
                  onClick={() => onSelectCertificate({
                    title: item.title,
                    issuer: item.organization,
                    date: item.date,
                    badge: item.badge,
                    credentialId: item.credentialId,
                    image: item.image,
                    description: item.description,
                    category: item.category
                  })}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} Certificate`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-dark-950/90 text-amber-300 border border-slate-700/80 backdrop-blur-md flex items-center gap-1">
                      {getCategoryIcon(item.category)}
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Hover Inspect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark-950/50 backdrop-blur-xs">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-dark-950 text-xs font-bold shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Certificate</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-start space-x-2 text-xs text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{item.organization}</span>
                  </div>

                  {item.affiliation && (
                    <p className="text-[11px] text-slate-400 font-mono italic">
                      {item.affiliation}
                    </p>
                  )}

                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.date}</span>
                  </div>

                  {item.credentialId && (
                    <div className="text-[11px] font-mono text-slate-400 bg-dark-950 px-2.5 py-1 rounded border border-slate-800">
                      ID: {item.credentialId}
                    </div>
                  )}

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0 border-t border-slate-800/60 mt-3">
                <button
                  onClick={() => onSelectCertificate({
                    title: item.title,
                    issuer: item.organization,
                    date: item.date,
                    badge: item.badge,
                    credentialId: item.credentialId,
                    image: item.image,
                    description: item.description,
                    category: item.category
                  })}
                  className="w-full inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>View Official Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
