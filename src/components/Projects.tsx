import React, { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  BrainCircuit, 
  Code2
} from 'lucide-react';
import { projects } from '../data/projects';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Security & AI', 'Safety Systems', 'NLP & Analytics'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Security & AI': return <ShieldCheck className="w-4 h-4 text-brand-cyan" />;
      case 'Safety Systems': return <Activity className="w-4 h-4 text-brand-indigo" />;
      case 'NLP & Analytics': return <BrainCircuit className="w-4 h-4 text-brand-emerald" />;
      default: return <Code2 className="w-4 h-4 text-brand-sky" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-dark-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-mono border border-brand-cyan/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Technical Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Directly implemented systems focusing on security threats, emergency alerting mechanisms, and natural language analytics.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-indigo to-brand-cyan text-white shadow-md shadow-brand-indigo/20'
                    : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-7 border border-slate-800 hover:border-slate-700 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl group glow-indigo"
            >
              <div>
                {/* Header: Category & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-dark-950 text-slate-300 border border-slate-800">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  {project.stats && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 font-semibold">
                      {project.stats}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug mb-2">
                  {project.title}
                </h3>
                
                <p className="text-xs text-brand-sky/90 font-mono mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-2 mb-6 bg-dark-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-semibold block">
                    Technical Highlights:
                  </span>
                  <ul className="space-y-1.5 text-[11px] text-slate-300">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Links Footer */}
              <div>
                <div className="pt-4 border-t border-slate-800/80 mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Code</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
