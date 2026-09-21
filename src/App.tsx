import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import type { ModalCertificate } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { certifications } from './data/certifications';

export const App: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<ModalCertificate | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenCertByRole = (roleTitle: string) => {
    if (roleTitle.includes('Yuva')) {
      const yuvaCert = certifications.find(c => c.id === 'yuvaintern-nlp');
      if (yuvaCert) setSelectedCertificate(yuvaCert);
    } else if (roleTitle.includes('InAmigos')) {
      const inamigosCert = certifications.find(c => c.id === 'inamigos-ai-intern');
      if (inamigosCert) setSelectedCertificate(inamigosCert);
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-200 selection:bg-brand-indigo/30 selection:text-brand-cyan relative">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience onViewCert={handleOpenCertByRole} />
        <Projects />
        <Certifications onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
        <Achievements onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
        <Education />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lightbox Modals */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
