import React, { useState, useMemo } from 'react';
import { 
  Award, 
  Search, 
  ExternalLink, 
  Eye, 
  Building2, 
  Calendar, 
  Hash, 
  Filter
} from 'lucide-react';
import { certifications, certificationCategories } from '../data/certifications';
import type { ModalCertificate } from './CertificateModal';

interface CertificationsProps {
  onSelectCertificate: (cert: ModalCertificate) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCertificate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory = 
        selectedCategory === 'All' || cert.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        query === '' ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        cert.skills.some(s => s.toLowerCase().includes(query)) ||
        (cert.credentialId && cert.credentialId.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-mono border border-brand-emerald/20">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Courses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical & Course Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            All 10 certifications verified from official certificates and resume credentials, covering AI models, software development, data analytics, and programming.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search certifications by name, issuer, skill (e.g., Python, Power BI, IBM)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" />
              Filter:
            </span>
            {certificationCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-brand-indigo to-brand-cyan text-white shadow-md shadow-brand-indigo/20'
                    : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-xs text-slate-400 font-mono flex items-center justify-between px-1">
            <span>Showing {filteredCertifications.length} of {certifications.length} technical certifications</span>
            {selectedCategory !== 'All' && (
              <span className="text-brand-cyan">Active filter: {selectedCategory}</span>
            )}
          </div>
        </div>

        {/* Certifications Grid */}
        {filteredCertifications.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl border border-slate-800 p-8 max-w-md mx-auto">
            <p className="text-slate-300 font-medium text-sm">No certifications found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-brand-cyan hover:underline"
            >
              Reset filters & search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.id}
                className="glass-card rounded-2xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Certificate Image Preview with Overlay */}
                  <div 
                    className="relative h-44 bg-dark-950 overflow-hidden border-b border-slate-800 cursor-pointer"
                    onClick={() => onSelectCertificate(cert)}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate Preview`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-dark-950/90 text-brand-cyan border border-slate-700/80 backdrop-blur-md">
                        {cert.category}
                      </span>
                    </div>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark-950/50 backdrop-blur-xs">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-brand-cyan text-dark-950 text-xs font-bold shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Certificate</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <Building2 className="w-3.5 h-3.5 text-brand-indigo" />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.credentialId && (
                      <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-400 bg-dark-950 px-2.5 py-1 rounded border border-slate-800">
                        <Hash className="w-3 h-3 text-brand-cyan" />
                        <span className="truncate">ID: {cert.credentialId}</span>
                      </div>
                    )}

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-5 pt-0 border-t border-slate-800/60 mt-3 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectCertificate(cert)}
                    className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>View Certificate</span>
                  </button>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                      title="Verify at issuer"
                      aria-label={`Verify ${cert.title} at official URL`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
