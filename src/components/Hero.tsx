import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  BrainCircuit, 
  Play, 
  Cpu
} from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'models' | 'status'>('pipeline');
  const [testResult, setTestResult] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateInference = () => {
    setIsSimulating(true);
    setTestResult(null);
    setTimeout(() => {
      setTestResult("Classification: Legitimate Domain (Confidence: 97.4%) • Latency: 18ms");
      setIsSimulating(false);
    }, 600);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-emerald/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-dark-900 border border-slate-700/80 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                {profileData.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hello, I'm <br />
                <span className="text-gradient-primary">
                  {profileData.name}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-slate-300 flex flex-wrap items-center gap-2 pt-1">
                <span>{profileData.headline}</span>
                <span className="hidden sm:inline text-slate-600">|</span>
                <span className="text-brand-cyan text-base sm:text-xl font-normal">
                  {profileData.roleSubtitle}
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {profileData.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-semibold hover:opacity-95 transition-all shadow-lg shadow-brand-indigo/25 hover:shadow-brand-cyan/25 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-dark-900 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-semibold border border-slate-700/90 transition-all hover:border-slate-500 hover:-translate-y-0.5 shadow-md shadow-black/30"
              >
                <FileText className="w-4 h-4 text-brand-cyan" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-brand-sky" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group"
                aria-label="Tarun S GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                <span>github.com/tarun-s-aiml</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group"
                aria-label="Tarun S LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                <span>linkedin.com/in/tarun-s-aiml</span>
              </a>

              <div className="flex items-center space-x-1.5 text-xs text-brand-emerald bg-brand-emerald/10 px-2.5 py-1 rounded-md border border-brand-emerald/20 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credentials</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer / AI Pipeline Interface */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl relative glow-indigo">
              {/* Terminal Window Header */}
              <div className="bg-dark-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">tarun.ai.runtime</span>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                      activeTab === 'pipeline' ? 'bg-slate-800 text-brand-cyan' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    pipeline
                  </button>
                  <button
                    onClick={() => setActiveTab('models')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                      activeTab === 'models' ? 'bg-slate-800 text-brand-cyan' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    models
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-4 bg-dark-900/90 text-slate-300">
                {activeTab === 'pipeline' ? (
                  <>
                    <div className="space-y-1 text-slate-400">
                      <p className="text-brand-cyan">$ tarun --inspect --runtime</p>
                      <p className="text-emerald-400">✓ System Status: ACTIVE</p>
                      <p className="text-slate-400">Target: Intelligent Systems & Full-Stack AI</p>
                    </div>

                    <div className="bg-dark-950 p-3.5 rounded-xl border border-slate-800/80 space-y-2">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between border-b border-slate-800 pb-1.5">
                        <span className="text-slate-300 font-semibold">Active Engineering Models</span>
                        <span className="text-brand-cyan">3 Production Pipelines</span>
                      </div>
                      
                      <div className="space-y-2 text-[11px]">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                            Phishing URL Classifier
                          </span>
                          <span className="text-brand-emerald bg-brand-emerald/10 px-1.5 py-0.5 rounded text-[10px]">Real-Time ML</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-brand-indigo" />
                            Women Safety Guardian
                          </span>
                          <span className="text-brand-indigo bg-brand-indigo/10 px-1.5 py-0.5 rounded text-[10px]">Emergency Trigger</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300 flex items-center gap-1.5">
                            <BrainCircuit className="w-3.5 h-3.5 text-brand-sky" />
                            IMDB Sentiment Analysis
                          </span>
                          <span className="text-brand-sky bg-brand-sky/10 px-1.5 py-0.5 rounded text-[10px]">88.68% Accuracy</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive simulation action */}
                    <div className="pt-1">
                      <button
                        onClick={simulateInference}
                        disabled={isSimulating}
                        className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center space-x-2 text-xs transition-colors"
                      >
                        <Play className={`w-3.5 h-3.5 text-brand-cyan ${isSimulating ? 'animate-spin' : ''}`} />
                        <span>{isSimulating ? 'Running Feature Extraction...' : 'Test Phishing Feature Inference'}</span>
                      </button>
                      {testResult && (
                        <div className="mt-2 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-[11px] animate-fadeIn">
                          {testResult}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="space-y-2">
                    <p className="text-brand-cyan">$ tarun --list-stack</p>
                    <div className="bg-dark-950 p-3 rounded-lg border border-slate-800 space-y-1.5 text-[11px]">
                      <p><span className="text-brand-indigo font-bold">Languages:</span> Java, Python, SQL</p>
                      <p><span className="text-brand-cyan font-bold">AI/ML:</span> Supervised ML, Deep Learning, NLP</p>
                      <p><span className="text-brand-emerald font-bold">Analytics:</span> Power BI, EDA, Scikit-learn</p>
                      <p><span className="text-slate-400 font-bold">Education:</span> KSIT (B.E. AIML, 2027)</p>
                    </div>
                  </div>
                )}

                {/* Footer status line */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Location: Bangalore, India</span>
                  <span>Branch: AIML 2027</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
