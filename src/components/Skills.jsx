import React, { useState } from 'react';
import { 
  Code2, 
  Coffee, 
  Database, 
  Globe, 
  Brain, 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  Terminal, 
  GitBranch, 
  PieChart, 
  FileSpreadsheet,
  Search,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Code2,
  Coffee,
  Database,
  Globe,
  Brain,
  ShieldCheck,
  BarChart3,
  Zap,
  Terminal,
  GitBranch,
  PieChart,
  FileSpreadsheet
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skills.map(s => s.category)];

  // Flatten and filter skills
  const allSkills = skills.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Core programming languages, machine learning concepts, data visualization tools, and development software.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/60 p-1.5 rounded-2xl border border-white/10 w-full sm:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Python, SQL)..."
              className="w-full bg-slate-900/80 border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div 
                key={index} 
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed font-normal">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-mono text-sm">
            No skills found matching "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
