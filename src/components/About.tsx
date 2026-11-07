import { 
  User, 
  Brain, 
  ShieldCheck, 
  Code2, 
  Award,
  Sparkles,
  Layers
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const pillars = [
    {
      title: "AI & Threat Detection",
      desc: "Engineering defensive machine learning systems including browser phishing classifiers and automated women safety emergency alert mechanisms.",
      icon: ShieldCheck,
      color: "from-cyan-500 to-sky-600"
    },
    {
      title: "NLP & Data Analytics",
      desc: "Building natural language classification pipelines (achieving 92.68% accuracy on IMDB sentiment) and interactive Power BI analytical dashboards.",
      icon: Brain,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Software Engineering",
      desc: "Developing structured Python applications with CRUD architectures, file I/O persistence, input validation, and unit test suites.",
      icon: Code2,
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Cadet Discipline & Leadership",
      desc: "NCC 'A' Certificate holder (Air Wing, Grade B) and active NSS volunteer with recognized participation in leadership camps and civic drives.",
      icon: Award,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest shadow-sm">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Intelligent Systems</span> with Real-World Purpose
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Undergraduate engineer at K S Institute of Technology combining foundational AI/ML research with robust software development to build dependable, data-driven applications.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Bio Story Box */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl p-7 sm:p-9 rounded-3xl border border-slate-800/80 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-sans">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Technical Journey & Focus
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                I am a final-year B.E. student specializing in <strong className="text-white font-semibold">Artificial Intelligence & Machine Learning</strong> at K S Institute of Technology, Bangalore (Expected Graduation: March 2027). My technical competencies encompass Python, Machine Learning models, Natural Language Processing, data validation, and software architecture.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                I focus on applying technical skills to solve real-world problems. My projects—such as the <strong className="text-cyan-300 font-semibold">AI-Powered Browser-Based Phishing URL Detection System</strong> and the <strong className="text-cyan-300 font-semibold">AI-Powered Women Safety Guardian</strong>—emphasize real-time threat evaluation, feature engineering, and automated alert response mechanisms.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                Through my internship roles at <strong className="text-white font-semibold">Cognifyz IT Solutions</strong> (Software Development Intern), <strong className="text-white font-semibold">Yuva Intern</strong> (AI/ML Intern), and <strong className="text-white font-semibold">InAmigos Foundation</strong>, I have developed CRUD task managers with file I/O persistence, trained high-accuracy NLP sentiment classification models, and analyzed real-world AI applications.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <Layers className="w-3.5 h-3.5" />
                <span>Primary Focus Areas & Exploration</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 flex items-start gap-4 group text-left"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
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
