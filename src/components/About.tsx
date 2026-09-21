import React from 'react';
import { Brain, Code2, Database, ShieldAlert, Sparkles, Compass, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const focusCards = [
    {
      title: "Machine Learning & AI",
      description: "Designing classification models, neural workflows, and predictive algorithms using Python and Scikit-learn.",
      icon: Brain,
      color: "text-brand-indigo",
      bg: "bg-brand-indigo/10",
      border: "border-brand-indigo/20"
    },
    {
      title: "Natural Language Processing",
      description: "Extracting insights from textual corpora, text preprocessing, TF-IDF vectorization, and sentiment classification.",
      icon: Code2,
      color: "text-brand-cyan",
      bg: "bg-brand-cyan/10",
      border: "border-brand-cyan/20"
    },
    {
      title: "Data Analytics & Pipelines",
      description: "Performing exploratory data analysis (EDA), metric tracking in Power BI, and SQL schema transformations.",
      icon: Database,
      color: "text-brand-emerald",
      bg: "bg-brand-emerald/10",
      border: "border-brand-emerald/20"
    },
    {
      title: "Emergency & Threat Systems",
      description: "Developing automated alerting mechanisms and real-time malicious URL detection architectures.",
      icon: ShieldAlert,
      color: "text-brand-sky",
      bg: "bg-brand-sky/10",
      border: "border-brand-sky/20"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-indigo/10 text-brand-cyan text-xs font-mono border border-brand-indigo/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A background rooted in Artificial Intelligence, structured software engineering, and community-driven discipline.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-2xl p-7 sm:p-8 border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-cyan" />
                <span>Engineering Mindset & Approach</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a B.E. student specializing in <strong className="text-white">Artificial Intelligence and Machine Learning</strong> at K S Institute of Technology, Bangalore. My technical journey is driven by an ambition to translate algorithmic AI models into practical, dependable software tools.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Through hands-on internships at <strong className="text-white">Yuva Intern</strong> and <strong className="text-white">InAmigos Foundation</strong>, I have worked directly on natural language processing pipelines—achieving <span className="text-brand-emerald font-semibold">88.68% accuracy</span> in sentiment classification—and conducted extensive evaluations on state-of-the-art AI systems for non-profit and educational impact.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-brand-indigo pl-4 italic">
                "Focused on building dependable, efficient applications that address critical concerns like digital security, personal safety, and data-driven intelligence."
              </p>

              <div className="pt-2">
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Primary Language</span>
                    <span className="text-white font-semibold text-sm">Java & Python</span>
                  </div>
                  <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Expected Graduation</span>
                    <span className="text-brand-cyan font-semibold text-sm">March 2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas Cards Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold">
                Core Domains & Focus Areas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${card.bg} ${card.border} border flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform`}>
                      <IconComponent className={`w-5 h-5 ${card.color}`} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Currently Exploring */}
            <div className="glass-card rounded-xl p-4 sm:p-5 border border-slate-800/90 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 mt-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-brand-cyan mb-2">
                <CheckCircle className="w-4 h-4 text-brand-emerald" />
                <span className="font-semibold">Currently Exploring</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.focusAreas.map((area, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-lg bg-dark-950 text-slate-300 border border-slate-800"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
