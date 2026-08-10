import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  FileText, 
  Terminal as TerminalIcon, 
  Sparkles, 
  CheckCircle2,
  Code2,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const TYPING_TITLES = [
  "AI & Machine Learning Engineer",
  "Python & Security Systems Innovator",
  "Browser Phishing Detection Creator",
  "Data Visualization Specialist",
  "NCC 'A' Cadet & Community Leader"
];

export default function Hero({ onOpenResume }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Interactive Terminal State
  const [terminalTab, setTerminalTab] = useState('bio');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'TarunOS v2.6.0 [AI-ML Environment Loaded]' },
    { type: 'sys', text: 'Type "help" or click tab buttons to explore console.' }
  ]);

  // Typing effect hook
  useEffect(() => {
    const currentFullText = TYPING_TITLES[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentFullText) {
      typingSpeed = 2200; // Pause at end
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentFullText.substring(0, prev.length - 1);
        } else {
          return currentFullText.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === currentFullText) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { type: 'cmd', text: `$ ${terminalInput}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({ type: 'res', text: 'Available commands: bio, skills, projects, cgpa, contact, clear' });
        break;
      case 'bio':
        newLogs.push({ type: 'res', text: `Name: ${personalInfo.name} | Institution: KSIT Bangalore | CGPA: 7.6` });
        break;
      case 'skills':
        newLogs.push({ type: 'res', text: 'Core: Python, Java, Machine Learning, SQL, Power BI, Git, VS Code' });
        break;
      case 'projects':
        newLogs.push({ type: 'res', text: '1. AI Women Safety Guardian\n2. Phishing URL Detection System' });
        break;
      case 'cgpa':
        newLogs.push({ type: 'res', text: 'Academic Status: 7.6 CGPA up to 6th Semester (Graduating March 2027)' });
        break;
      case 'contact':
        newLogs.push({ type: 'res', text: `Email: ${personalInfo.email} | Phone: ${personalInfo.phone}` });
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push({ type: 'err', text: `Command not recognized: "${cmd}". Type "help" for command list.` });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-lg shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{personalInfo.status}</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              
              {/* Dynamic Typing Subtitle */}
              <div className="h-12 flex items-center font-mono text-xl sm:text-2xl text-cyan-400">
                <span className="mr-2 text-slate-500">&gt;</span>
                <span>{displayText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 ml-1 inline-block animate-pulse" />
              </div>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalInfo.bio}
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl py-2">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="glass-panel p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">{stat.value}</div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white glass-panel hover:border-cyan-500/50 hover:text-cyan-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 relative group"
                title="Copy Email"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5" />}
              </button>

              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300"
                title="Call Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Interactive Developer Terminal Window */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl border border-slate-700/60 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
              
              {/* Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-400 text-xs font-mono">tarun-terminal — zsh</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <TerminalIcon className="w-4 h-4 text-cyan-400" />
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="bg-slate-950/80 px-2 py-1.5 border-b border-slate-800 flex items-center gap-1 overflow-x-auto">
                <button
                  onClick={() => setTerminalTab('bio')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                    terminalTab === 'bio' 
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  bio.json
                </button>
                <button
                  onClick={() => setTerminalTab('skills')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                    terminalTab === 'skills' 
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  skills.py
                </button>
                <button
                  onClick={() => setTerminalTab('projects')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                    terminalTab === 'projects' 
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  projects.sh
                </button>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 bg-slate-950/90 min-h-[260px] max-h-[340px] overflow-y-auto space-y-2 text-left">
                {terminalTab === 'bio' && (
                  <div className="text-slate-300 space-y-1">
                    <span className="text-slate-500">// Personal Information Schema</span>
                    <pre className="text-cyan-300/90 whitespace-pre-wrap font-mono text-[12px]">
{JSON.stringify({
  developer: personalInfo.name,
  degree: "B.E. Artificial Intelligence & Machine Learning",
  institution: "K S Institute of Technology",
  location: personalInfo.location,
  cgpa: "7.6 (6th Sem)",
  graduation: "March 2027",
  ncc_certified: true,
  nss_member: true
}, null, 2)}
                    </pre>
                  </div>
                )}

                {terminalTab === 'skills' && (
                  <div className="text-slate-300 space-y-2 font-mono text-xs">
                    <div className="text-slate-500"># Python & ML Engine initialization</div>
                    <div><span className="text-purple-400">import</span> <span className="text-yellow-300">machine_learning</span> <span className="text-purple-400">as</span> <span className="text-yellow-300">ml</span></div>
                    <div><span className="text-purple-400">import</span> <span className="text-yellow-300">security_ai</span> <span className="text-purple-400">as</span> <span className="text-yellow-300">sec</span></div>
                    <div className="pt-2 text-emerald-400">class TarunSkills:</div>
                    <div className="pl-4 text-cyan-300">languages = ["Python", "Java", "SQL", "JavaScript"]</div>
                    <div className="pl-4 text-cyan-300">tools = ["VS Code", "Git", "Power BI", "Excel"]</div>
                    <div className="pl-4 text-cyan-300">focus = ["Phishing URL Detection", "Women Safety AI"]</div>
                  </div>
                )}

                {terminalTab === 'projects' && (
                  <div className="text-slate-300 space-y-2 font-mono text-xs">
                    <div className="text-slate-500">#!/bin/bash — Active Project Deployments</div>
                    <div className="text-emerald-400">&gt; Executing safety_guardian.py ... [STATUS: ONLINE]</div>
                    <div className="text-slate-400 pl-4">→ Emergency alert trigger & contextual location broadcast.</div>
                    <div className="text-emerald-400 pt-2">&gt; Executing url_phishing_scanner.py ... [STATUS: ACTIVE]</div>
                    <div className="text-slate-400 pl-4">→ On-the-fly lexical feature extraction & ML URL classifier.</div>
                  </div>
                )}

                {/* Console History Output */}
                {terminalLogs.length > 0 && (
                  <div className="pt-3 border-t border-slate-800/80 space-y-1">
                    {terminalLogs.map((log, i) => (
                      <div key={i} className={`text-xs ${
                        log.type === 'cmd' ? 'text-cyan-300 font-semibold' :
                        log.type === 'err' ? 'text-rose-400' :
                        log.type === 'sys' ? 'text-slate-400 italic' :
                        'text-emerald-300 whitespace-pre-wrap'
                      }`}>
                        {log.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Terminal Interactive Input */}
              <form onSubmit={handleTerminalSubmit} className="bg-slate-900/90 px-4 py-2 border-t border-slate-800 flex items-center gap-2">
                <span className="text-cyan-400 font-bold">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type 'help', 'bio', 'skills', or 'projects'..."
                  className="w-full bg-transparent border-none outline-none text-slate-200 font-mono text-xs placeholder:text-slate-500"
                />
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
