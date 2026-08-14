import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, Mail, Phone, MapPin, Github, Linkedin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, education, projects, skills, certifications, achievements, languages } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const Print = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const textContent = `
===================================================================
                              TARUN S
                  AI & MACHINE LEARNING ENGINEER
===================================================================
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}

-------------------------------------------------------------------
ACADEMIC EDUCATION
-------------------------------------------------------------------
- Bachelor of Engineering in Artificial Intelligence & Machine Learning
  K S Institute of Technology, Bangalore
  CGPA: 7.6 (up to 6th semester)
  Expected Graduation: March 2027

- Pre-University (PCMC)
  Christ Junior College, Bangalore (2021 - 2023)

-------------------------------------------------------------------
KEY PROJECTS
-------------------------------------------------------------------
1. AI-Powered Women Safety Guardian
   - Developed safety system using AI concepts for emergency situations.
   - Implemented real-time alert trigger mechanisms and location broadcast.

2. AI-Powered Browser Based Phishing URL Detection System
   - Web browser threat classifier parsing lexical URL features in real-time.

-------------------------------------------------------------------
SKILLS & PROFICIENCIES
-------------------------------------------------------------------
- Programming: Python, Java, SQL, JavaScript
- Concepts: Machine Learning, Computer Vision, Security Systems
- Developer Tools: VS Code, Git, GitHub, Power BI, Excel

-------------------------------------------------------------------
CERTIFICATIONS
-------------------------------------------------------------------
- Artificial Intelligence Masterclass - Novitech Learning Hub
- Power BI - Data Visualization
- Python Programming Course - Udemy

-------------------------------------------------------------------
ACHIEVEMENTS & LEADERSHIP
-------------------------------------------------------------------
- NCC 'A' Certificate Holder (National Cadet Corps)
- Active Member of NSS (National Service Scheme)
- Attended Multiple Youth Leadership & Camps
===================================================================
`;

    const blob = new Blob([textContent.trim()], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Tarun_S_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyContact = () => {
    navigator.clipboard.writeText(`Tarun S | ${personalInfo.email} | ${personalInfo.phone}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel w-full max-w-4xl max-h-[92vh] rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col">

        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-white text-base">Tarun S — Resume Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyContact}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Copy Contact Info"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Info'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-cyan-300 hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold hover:from-cyan-300 hover:to-emerald-300 transition-all flex items-center gap-1.5 text-xs shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Text</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body Container */}
        <div className="p-4 bg-white overflow-y-auto max-h-[80vh]">
          <img
            src="/resume.jpg"
            alt="Tarun Resume"
            className="block w-full h-auto"
          />
        </div>


      </div>
    </div>

  );
}
