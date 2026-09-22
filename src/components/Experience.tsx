import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Internship Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on technical roles delivering real-world NLP models, text classification systems, and applied AI evaluations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mt-8 space-y-6">
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} experience={exp} />
          ))}
        </div>

      </div>
    </section>
  );
}
