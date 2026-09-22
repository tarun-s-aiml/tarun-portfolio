import { useState } from 'react';
import { Shield } from 'lucide-react';
import { extracurricularAchievements } from '../data/achievements';
import AchievementCard from './AchievementCard';
import CertificateModal from './CertificateModal';
import type { CertificateModalData } from './CertificateModal';

export default function Achievements() {
  const [activeModalCert, setActiveModalCert] = useState<CertificateModalData | null>(null);

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>Leadership & Extracurricular</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Social Service</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Dedicated service across the National Cadet Corps (NCC Air Wing), National Service Scheme (NSS), community health campaigns, and civic drives.
          </p>
        </div>

        {/* Extracurricular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extracurricularAchievements.map((item) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              onPreview={(ach) =>
                setActiveModalCert({
                  title: ach.title,
                  issuer: ach.organization,
                  category: ach.category,
                  date: ach.date,
                  credentialId: ach.credentialId,
                  image: ach.image,
                  description: ach.description,
                  affiliation: ach.affiliation
                })
              }
            />
          ))}
        </div>

        {/* Certificate Modal Lightbox */}
        <CertificateModal
          certificate={activeModalCert}
          isOpen={!!activeModalCert}
          onClose={() => setActiveModalCert(null)}
        />

      </div>
    </section>
  );
}
