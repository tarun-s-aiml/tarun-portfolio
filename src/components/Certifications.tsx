import { useState, useMemo } from 'react';
import { Award, Filter } from 'lucide-react';
import { certifications } from '../data/certifications';
import CertificationCard from './CertificationCard';
import CertificationFilter from './CertificationFilter';
import CertificateModal from './CertificateModal';
import type { CertificateModalData } from './CertificateModal';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalCert, setActiveModalCert] = useState<CertificateModalData | null>(null);

  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.category.toLowerCase().includes(query) ||
        (cert.credentialId && cert.credentialId.toLowerCase().includes(query)) ||
        cert.skills.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Technical & Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified course completions, role skill assessments, and enterprise virtual simulations in AI, Machine Learning, Data Analytics, and Software Engineering.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <CertificationFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={filteredCertifications.length}
        />

        {/* Certification Cards Grid */}
        {filteredCertifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                onPreview={(c) => setActiveModalCert(c)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-900/40 rounded-2xl border border-slate-800 p-12 text-center space-y-3">
            <Filter className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-slate-300 text-sm font-semibold">No certifications found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-mono text-cyan-400 hover:underline"
            >
              Reset filters & search
            </button>
          </div>
        )}

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
