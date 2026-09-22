import { 
  Code, 
  BrainCircuit, 
  Layers, 
  Terminal, 
  Users, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import type { SkillCategory } from '../data/skills';

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform duration-200">
            {getIcon(category.iconName)}
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">{category.title}</h3>
            <p className="text-xs text-slate-400">{category.description}</p>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800/70 flex flex-wrap gap-2">
          {category.skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/70 text-xs text-slate-200 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="font-medium">{skill.name}</span>
              {skill.tag && (
                <span className="text-[10px] text-slate-400 font-mono pl-1 border-l border-slate-700">
                  {skill.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
