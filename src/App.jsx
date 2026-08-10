import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CyberBackground from './components/CyberBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-[#0a0d14] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Interactive Background */}
      <CyberBackground isDarkMode={isDarkMode} />

      {/* Floating Glass Navigation Bar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Resume Viewer & Downloader Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />

    </div>
  );
}
