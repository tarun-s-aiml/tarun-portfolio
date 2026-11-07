import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Formal <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Education & Coursework</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured foundations in Artificial Intelligence, Machine Learning algorithms, and computational mathematics.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-slate-800/80 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 space-y-4 text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/70 pb-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-cyan-400 shrink-0 mt-0.5 shadow-sm">
                    {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-300 mt-0.5">
                      {edu.degree} — {edu.field}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 text-xs font-mono text-slate-400 pl-12 sm:pl-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-indigo-300 font-semibold shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {edu.timeline}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-400 text-[11px] pt-0.5">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="pt-2 space-y-2">
                {edu.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
