export interface SkillItem {
  name: string;
  level?: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    iconName: "Code",
    description: "Languages used for core algorithms, object-oriented systems, and data pipelines.",
    skills: [
      { name: "Java", tag: "Primary" },
      { name: "Python", tag: "ML & Scripting" },
      { name: "SQL", tag: "Relational DBs" }
    ]
  },
  {
    title: "Machine Learning & AI",
    iconName: "BrainCircuit",
    description: "Model building, statistical analysis, and applied neural architectures.",
    skills: [
      { name: "Machine Learning", tag: "Supervised & Unsupervised" },
      { name: "Deep Learning", tag: "Neural Networks" },
      { name: "Natural Language Processing (NLP)", tag: "Text Classification & Sentiment" },
      { name: "Generative AI", tag: "LLMs & Tool Evaluation" }
    ]
  },
  {
    title: "Data & Analytical Concepts",
    iconName: "Layers",
    description: "End-to-end data workflows from raw ingestion to model verification.",
    skills: [
      { name: "Data Preprocessing", tag: "Data Cleaning" },
      { name: "Exploratory Data Analysis (EDA)", tag: "Statistical Patterns" },
      { name: "Feature Extraction & Engineering", tag: "TF-IDF & Lexical Features" },
      { name: "Model Evaluation", tag: "Metrics & Validation" }
    ]
  },
  {
    title: "Tools & Platforms",
    iconName: "Terminal",
    description: "Developer workflows, version control, and data visualization software.",
    skills: [
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "Collaboration" },
      { name: "VS Code", tag: "Primary IDE" },
      { name: "Power BI", tag: "Dashboards & DAX" },
      { name: "Microsoft Excel", tag: "Analysis & Reporting" }
    ]
  },
  {
    title: "Professional & Soft Skills",
    iconName: "Users",
    description: "Leadership and collaborative abilities verified through NCC & NSS service.",
    skills: [
      { name: "Leadership", tag: "NCC Cadet & Teams" },
      { name: "Discipline", tag: "Air Wing Training" },
      { name: "Teamwork", tag: "Project Collaboration" },
      { name: "Communication", tag: "Technical Documentation" },
      { name: "Problem-Solving", tag: "Real-world Engineering" }
    ]
  }
];
