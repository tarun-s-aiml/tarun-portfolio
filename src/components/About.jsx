import React from 'react';
import { 
  User, 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Languages as LanguageIcon,
  Brain,
  Code2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { personalInfo, languages } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "AI & Security Innovation",
      desc: "Architecting real-world threat detection models such as Women Safety Guardians and Phishing URL classifiers.",
      icon: ShieldCheck,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Machine Learning & Analytics",
      desc: "Proficient in Python ML pipelines, supervised algorithms, feature engineering, and data storytelling via Power BI.",
      icon: Brain,
      color: "from-teal-400 to-emerald-500"
    },
    {
      title: "Clean Software Engineering",
      desc: "Writing modular, maintainable Python and Java code with strong adherence to Git version control and OOP design.",
      icon: Code2,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Leadership & Community Action",
      desc: "NCC 'A' Certificate cadet and active NSS volunteer with proven experience leading youth camps and civic initiatives.",
      icon: Award,
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Driven by <span className="text-gradient">Artificial Intelligence</span> & Practical Problem Solving
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering student at K S Institute of Technology passionate about leveraging data science, machine learning, and software design to solve critical safety and cybersecurity challenges.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Bio Story Box */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Background & Aspirations
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-base">
                Currently pursuing my <strong className="text-cyan-300">Bachelor of Engineering in Artificial Intelligence & Machine Learning</strong> at K S Institute of Technology, Bangalore. With an academic record of <strong>7.6 CGPA</strong>, I bridge theoretical computer science concepts with hands-on software development.
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                My software journey centers on developing proactive safety technology. Projects like the <strong className="text-cyan-300">AI-Powered Women Safety Guardian</strong> and <strong className="text-cyan-300">Browser Phishing URL Detector</strong> reflect my conviction that technology should safeguard individuals in real-time.
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                Beyond coding, my discipline and teamwork are honed through military cadet training as an <strong className="text-emerald-400">NCC 'A' Certificate Holder</strong> and active participation in <strong>NSS community leadership camps</strong>.
              </p>
            </div>

            {/* Language Fluency Section */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 uppercase tracking-wider">
                <LanguageIcon className="w-4 h-4" />
                <span>Multilingual Capabilities</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white text-sm">{lang.name}</span>
                      <span className="text-xs font-mono text-cyan-400">{lang.level}%</span>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1">{lang.fluency}</span>
                    <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, index) => {
              const IconComp = pillar.icon;
              return (
                <div key={index} className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-slate-950 shadow-md shrink-0`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{pillar.title}</h4>
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
