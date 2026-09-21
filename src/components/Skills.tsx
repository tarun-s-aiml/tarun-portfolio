import React from 'react';
import { 
  Code, 
  BrainCircuit, 
  Layers, 
  Terminal, 
  Users, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-brand-cyan" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-brand-indigo" />;
      case 'Layers': return <Layers className="w-5 h-5 text-brand-emerald" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-brand-sky" />;
      case 'Users': return <Users className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-mono border border-brand-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified competencies directly applied in academic coursework, internship projects, and machine learning pipelines.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-slate-700/90 transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-dark-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Badges */}
              <div className="space-y-2 pt-2 border-t border-slate-800/70">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2 rounded-lg bg-dark-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors text-xs"
                  >
                    <span className="font-medium text-slate-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      {skill.name}
                    </span>
                    {skill.tag && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
