import { 
  User, 
  Brain, 
  ShieldCheck, 
  Code2, 
  Award,
  Sparkles,
  Layers
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const pillars = [
    {
      title: "AI & Threat Detection",
      desc: "Engineering defensive machine learning systems including browser phishing classifiers and automated women safety guardians.",
      icon: ShieldCheck,
      color: "from-cyan-500 to-sky-600"
    },
    {
      title: "NLP & Data Analytics",
      desc: "Building natural language classification pipelines (achieved 88.68% accuracy on IMDB sentiment) and interactive data dashboards.",
      icon: Brain,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Software Engineering",
      desc: "Crafting structured, maintainable code in Java, Python, and SQL with disciplined Git version control and software architecture principles.",
      icon: Code2,
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Cadet Discipline & Leadership",
      desc: "NCC 'A' Certificate holder (Air Wing, Grade B) and active NSS volunteer with hands-on experience in leadership camps and community initiatives.",
      icon: Award,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Intelligent Systems</span> with Real-World Purpose
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Undergraduate engineer at K S Institute of Technology combining foundational AI/ML research with robust software development to build dependable, data-driven applications.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Bio Story Box */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl p-7 sm:p-9 rounded-3xl border border-slate-800/80 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-sans">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Technical Journey & Focus
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                I am currently pursuing my <strong className="text-white font-semibold">Bachelor of Engineering in Artificial Intelligence & Machine Learning</strong> at K S Institute of Technology, Bangalore (graduating in March 2027). My technical focus spans machine learning classification, natural language processing, exploratory data analytics, and full-stack software systems.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                I believe software is most powerful when applied to critical security and social challenges. My hands-on projects—such as the <strong className="text-cyan-300 font-semibold">AI-Powered Browser-Based Phishing URL Detection System</strong> and the <strong className="text-cyan-300 font-semibold">AI-Powered Women Safety Guardian</strong>—demonstrate my focus on building proactive, low-latency detection solutions.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                Through my internship roles at <strong className="text-white font-semibold">Yuva Intern</strong> and <strong className="text-white font-semibold">InAmigos Foundation</strong>, I have worked directly on NLP sentiment modeling and researched enterprise AI tools (ChatGPT, Microsoft Copilot, Google Gemini) for social impact.
              </p>
            </div>

            {/* Currently Exploring & Focus Areas */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <Layers className="w-3.5 h-3.5" />
                <span>Primary Focus Areas & Exploration</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            {pillars.map((pillar, index) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={index} 
                  className="bg-slate-900/50 backdrop-blur-xl p-5 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200 flex items-start gap-3.5 group"
                >
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${pillar.color} text-slate-950 shadow-md shrink-0 group-hover:scale-105 transition-transform duration-200`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{pillar.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
