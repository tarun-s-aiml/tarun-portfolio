import { 
  ShieldAlert, 
  HeartHandshake, 
  BarChart2, 
  ExternalLink, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'phishing-detection':
        return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
      case 'women-safety-guardian':
        return <HeartHandshake className="w-6 h-6 text-indigo-400" />;
      case 'imdb-sentiment-analysis':
        return <BarChart2 className="w-6 h-6 text-sky-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between space-y-6 group text-left">
      
      {/* Top Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-md group-hover:scale-105 transition-transform duration-200">
              {getProjectIcon(project.id)}
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                {project.category}
              </span>
              {project.stats && (
                <div className="inline-block ml-2 px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[10px] font-mono text-indigo-300">
                  {project.stats}
                </div>
              )}
            </div>
          </div>

          {/* GitHub link button */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200"
              title="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 italic">
            {project.tagline}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Technical Highlights */}
        <div className="space-y-2 pt-2 border-t border-slate-800/70">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
            Technical Implementation Highlights:
          </span>
          {project.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div className="pt-4 border-t border-slate-800/70 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors group/link"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repository Access</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-400">Research & Core Architecture</span>
          )}
        </div>
      </div>

    </div>
  );
}
