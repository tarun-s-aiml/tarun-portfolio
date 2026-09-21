import React from 'react';
import { Award, ShieldCheck, Flag, Users, Calendar, Sparkles, CheckCircle } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Leadership & Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            National Cadet Corps certification, community leadership drives, and team leadership camps.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glow Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-400 to-emerald-500 opacity-30 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                
                {/* Timeline Box */}
                <div className="w-full sm:w-1/2 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 glass-panel-hover space-y-3 relative">
                  
                  {/* Badge Pill */}
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full inline-block">
                    {item.badge}
                  </span>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Flag className="w-3.5 h-3.5" />
                    <span>{item.organization}</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                </div>

                {/* Center Node Icon */}
                <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shrink-0 z-10 shadow-lg shadow-cyan-500/30 hidden sm:flex">
                  <Sparkles className="w-4 h-4" />
                </div>

                {/* Empty Balancing Spacer */}
                <div className="w-full sm:w-1/2 hidden sm:block" />

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
