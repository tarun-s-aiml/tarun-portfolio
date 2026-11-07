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
    title: "Programming Languages",
    iconName: "Code",
    description: "Languages used for machine learning models, backend workflows, and relational data querying.",
    skills: [
      { name: "Python", tag: "Primary / AI & ML" },
      { name: "SQL", tag: "Relational DBs & Queries" },
      { name: "Java", tag: "OOP & Systems" }
    ]
  },
  {
    title: "AI, Machine Learning & NLP",
    iconName: "BrainCircuit",
    description: "Model building, statistical analysis, text analytics, and predictive architectures.",
    skills: [
      { name: "Machine Learning", tag: "Classification & Supervised" },
      { name: "Deep Learning", tag: "Neural Networks" },
      { name: "Natural Language Processing (NLP)", tag: "Sentiment & Text Classification" },
      { name: "Scikit-Learn", tag: "Pipeline & Evaluation" }
    ]
  },
  {
    title: "Data Concepts & Engineering",
    iconName: "Layers",
    description: "End-to-end data processing pipelines from ingestion to evaluation.",
    skills: [
      { name: "Data Preprocessing", tag: "Cleaning & Normalization" },
      { name: "Exploratory Data Analysis (EDA)", tag: "Pattern Discovery" },
      { name: "Feature Extraction", tag: "Lexical & TF-IDF" },
      { name: "Model Evaluation", tag: "Metrics & Validation" }
    ]
  },
  {
    title: "Developer Tools & Analytics",
    iconName: "Terminal",
    description: "Modern developer environments, version control systems, and enterprise business intelligence tools.",
    skills: [
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "Collaboration & Repos" },
      { name: "VS Code", tag: "Primary IDE" },
      { name: "Power BI", tag: "Dashboards & DAX" },
      { name: "Microsoft Excel", tag: "Analytics & Reporting" }
    ]
  },
  {
    title: "Soft Skills & Leadership",
    iconName: "Users",
    description: "Collaboration and leadership demonstrated through NCC Air Wing service, NSS, and student engineering teamwork.",
    skills: [
      { name: "Leadership", tag: "NCC Cadet & Project Lead" },
      { name: "Teamwork", tag: "Collaborative Engineering" },
      { name: "Communication", tag: "Technical & Cross-Functional" },
      { name: "Problem-Solving", tag: "Real-world Practical Focus" }
    ]
  }
];
