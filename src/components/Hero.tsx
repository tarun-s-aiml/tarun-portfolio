import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import {
  ArrowRight,
  FileText,
  Terminal as TerminalIcon,
  Mail,
  Check,
  Download
} from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const TYPING_TITLES = [
  "AI & Machine Learning Engineer",
  "Software Development Intern (Cognifyz)",
  "Threat Detection & Security Systems Innovator",
  "Data Analytics & NLP Practitioner",
  "NCC 'A' Cadet & Community Volunteer"
];

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Interactive Terminal State
  const [terminalTab, setTerminalTab] = useState<'profile' | 'skills' | 'projects' | 'internships'>('profile');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ type: 'cmd' | 'res' | 'err' | 'sys'; text: string }>>([
    { type: 'sys', text: 'Tarun Terminal v2.5.0 [AI & Software Engineering Environment]' },
    { type: 'sys', text: 'Type "help" or switch tabs to inspect verified credentials & stack.' }
  ]);

  // Typing effect hook
  useEffect(() => {
    const currentFullText = TYPING_TITLES[titleIndex];
    let typingSpeed = isDeleting ? 30 : 65;

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
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { type: 'cmd' as const, text: `$ ${terminalInput}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({ type: 'res', text: 'Available commands: profile, skills, projects, internships, certs, contact, clear' });
        break;
      case 'profile':
      case 'bio':
        newLogs.push({ type: 'res', text: `Developer: ${profileData.name} | Degree: B.E. in AIML | Institution: KSIT Bangalore | Expected Grad: March 2027` });
        break;
      case 'skills':
        newLogs.push({ type: 'res', text: 'Languages: Python, SQL, Java | Tools: Git, GitHub, VS Code, Power BI, Excel | Domains: Machine Learning, NLP, Deep Learning' });
        break;
      case 'projects':
        newLogs.push({ type: 'res', text: '1. AI Phishing URL Detection System\n2. AI Women Safety Guardian\n3. IMDB Sentiment NLP (92.68% accuracy)' });
        break;
      case 'internships':
        newLogs.push({ type: 'res', text: '1. Cognifyz IT Solutions (Software Dev Intern - Python CRUD & File I/O)\n2. Yuva Intern (AI/ML Intern - 92.68% accuracy)\n3. InAmigos Foundation (AI Intern)' });
        break;
      case 'certs':
        newLogs.push({ type: 'res', text: '11 verified credentials including Cognifyz IT Solutions (05 Nov 2026), HackerRank SWE, IBM GenAI, Simplilearn Power BI.' });
        break;
      case 'contact':
        newLogs.push({ type: 'res', text: `Email: ${profileData.email} | Phone: ${profileData.phone} | GitHub: ${profileData.github} | LinkedIn: ${profileData.linkedin}` });
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push({ type: 'err', text: `Command not recognized: "${cmd}". Type "help" for commands.` });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.status}</span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
                  Software & AI/ML Engineer Portfolio
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
                {profileData.name}
              </h1>

              {/* Dynamic Typing Role */}
              <div className="h-10 flex items-center font-mono text-lg sm:text-2xl text-cyan-400">
                <span className="mr-2 text-indigo-400 font-bold">&gt;</span>
                <span className="font-semibold">{displayText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 ml-1 inline-block animate-pulse" />
              </div>
            </div>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {profileData.summary}
            </p>

            {/* Quick Metrics & Pillars Preview */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg py-1">
              <div className="bg-slate-900/70 p-3.5 rounded-2xl border border-slate-800 text-center hover:border-cyan-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">11</div>
                <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Certifications</div>
              </div>
              <div className="bg-slate-900/70 p-3.5 rounded-2xl border border-slate-800 text-center hover:border-indigo-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">03</div>
                <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Core Projects</div>
              </div>
              <div className="bg-slate-900/70 p-3.5 rounded-2xl border border-slate-800 text-center hover:border-emerald-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">03</div>
                <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Internships</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-indigo-500/60 hover:text-cyan-300 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="Tarun_S_Resume.pdf"
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                title="Direct Download PDF"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 w-full max-w-lg">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Socials:</span>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono transition-all duration-200"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 text-xs font-mono transition-all duration-200"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 text-xs font-mono transition-all duration-200"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Email'}</span>
              </button>
            </div>

          </div>

          {/* Right Developer Terminal Window */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-slate-950/85 backdrop-blur-xl rounded-2xl border border-slate-800/90 shadow-2xl shadow-black/60 overflow-hidden font-mono text-xs">

              {/* Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 text-xs">tarun-dev-shell — bash</span>
                </div>
                <div className="flex items-center gap-1 text-cyan-400">
                  <TerminalIcon className="w-4 h-4" />
                </div>
              </div>

              {/* File Tabs */}
              <div className="bg-slate-900/50 px-2 py-1.5 border-b border-slate-800 flex items-center gap-1 overflow-x-auto">
                <button
                  onClick={() => setTerminalTab('profile')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
                    terminalTab === 'profile'
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  profile.json
                </button>
                <button
                  onClick={() => setTerminalTab('internships')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
                    terminalTab === 'internships'
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  experience.ts
                </button>
                <button
                  onClick={() => setTerminalTab('skills')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
                    terminalTab === 'skills'
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  stack.ts
                </button>
                <button
                  onClick={() => setTerminalTab('projects')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
                    terminalTab === 'projects'
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  deployments.sh
                </button>
              </div>

              {/* Code / Content Area */}
              <div className="p-4 min-h-[260px] max-h-[320px] overflow-y-auto space-y-2 text-left bg-slate-950/70">
                {terminalTab === 'profile' && (
                  <div className="text-slate-300 space-y-1">
                    <span className="text-slate-500">// Developer Profile Metadata</span>
                    <pre className="text-cyan-300/90 whitespace-pre-wrap font-mono text-[11px] leading-relaxed">
{JSON.stringify({
  name: profileData.name,
  role: profileData.headline,
  focus: profileData.roleSubtitle,
  institution: "K S Institute of Technology",
  degree: "B.E. Artificial Intelligence & Machine Learning",
  expectedGraduation: "March 2027",
  location: profileData.location
}, null, 2)}
                    </pre>
                  </div>
                )}

                {terminalTab === 'internships' && (
                  <div className="text-slate-300 space-y-2 font-mono text-xs">
                    <div className="text-slate-500">// Verified Internship Track Record</div>
                    <div className="text-cyan-300 font-semibold">&gt; Cognifyz IT Solutions Pvt. Ltd.</div>
                    <div className="text-slate-400 pl-3">Role: Software Development Intern (Oct - Nov 2026)</div>
                    <div className="text-emerald-400 pl-3">→ Python CRUD task systems, File I/O persistence, Unit testing.</div>

                    <div className="text-indigo-300 font-semibold pt-1">&gt; Yuva Intern</div>
                    <div className="text-slate-400 pl-3">Role: AI/ML Intern</div>
                    <div className="text-emerald-400 pl-3">→ IMDB Sentiment Analysis NLP (Achieved 92.68% test accuracy).</div>

                    <div className="text-sky-300 font-semibold pt-1">&gt; InAmigos Foundation</div>
                    <div className="text-slate-400 pl-3">Role: Artificial Intelligence Intern</div>
                  </div>
                )}

                {terminalTab === 'skills' && (
                  <div className="text-slate-300 space-y-1.5 font-mono text-xs">
                    <div className="text-slate-500">// Technical Stack Registry</div>
                    <div><span className="text-indigo-400">export const</span> <span className="text-cyan-300">coreLanguages</span> = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"SQL"</span>, <span className="text-emerald-300">"Java"</span>];</div>
                    <div><span className="text-indigo-400">export const</span> <span className="text-cyan-300">aiDomains</span> = [<span className="text-emerald-300">"Machine Learning"</span>, <span className="text-emerald-300">"NLP"</span>, <span className="text-emerald-300">"Deep Learning"</span>];</div>
                    <div><span className="text-indigo-400">export const</span> <span className="text-cyan-300">devTools</span> = [<span className="text-emerald-300">"VS Code"</span>, <span className="text-emerald-300">"Git"</span>, <span className="text-emerald-300">"GitHub"</span>, <span className="text-emerald-300">"Power BI"</span>, <span className="text-emerald-300">"Excel"</span>];</div>
                    <div className="pt-2 text-slate-500">// Core Competency: Practical AI-Driven & Software Applications</div>
                  </div>
                )}

                {terminalTab === 'projects' && (
                  <div className="text-slate-300 space-y-2 font-mono text-xs">
                    <div className="text-slate-500">#!/bin/bash — Active Project Deployments</div>
                    <div className="text-emerald-400">&gt; phishing_url_detector.py ... [STATUS: READY]</div>
                    <div className="text-slate-400 pl-3">→ Real-time URL lexical feature extraction & ML classification.</div>
                    <div className="text-emerald-400 pt-1">&gt; women_safety_guardian.py ... [STATUS: READY]</div>
                    <div className="text-slate-400 pl-3">→ Emergency situation detection & rapid automated notifications.</div>
                    <div className="text-emerald-400 pt-1">&gt; imdb_sentiment_nlp.py ... [92.68% ACCURACY]</div>
                    <div className="text-slate-400 pl-3">→ Preprocessing, EDA, TF-IDF feature extraction & sentiment pipeline.</div>
                  </div>
                )}

                {/* Console Log History */}
                {terminalLogs.length > 0 && (
                  <div className="pt-2.5 border-t border-slate-800/80 space-y-1">
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

              {/* Terminal Interactive Prompt */}
              <form onSubmit={handleTerminalSubmit} className="bg-slate-900/90 px-4 py-2 border-t border-slate-800 flex items-center gap-2">
                <span className="text-cyan-400 font-bold">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type 'help', 'profile', 'internships', 'skills', or 'projects'..."
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
