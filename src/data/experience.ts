export interface ExperienceItem {
  role: string;
  organization: string;
  type: string;
  duration?: string;
  location?: string;
  description: string;
  bullets: string[];
  technologies: string[];
  certificateRef?: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: "AI/ML Intern",
    organization: "Yuva Intern",
    type: "Internship",
    duration: "Tenure Completed 2026",
    location: "Remote",
    description: "Specialized in Natural Language Processing and text analytics pipelines for sentiment classification.",
    bullets: [
      "Developed an NLP-based sentiment classification model using the IMDB movie review dataset, achieving 88.68% test accuracy.",
      "Performed data preprocessing, exploratory data analysis (EDA), and text feature extraction to optimize model performance.",
      "Conducted extensive model evaluation and error analysis to ensure robust predictions across diverse sentiment expressions."
    ],
    technologies: ["Python", "NLP", "Machine Learning", "EDA", "Feature Extraction", "Scikit-learn"],
    certificateRef: "Data Analytics Specialist - Language Processing (Certificate No: YI/2026/184260/409356)"
  },
  {
    role: "Artificial Intelligence Intern",
    organization: "InAmigos Foundation",
    type: "Internship",
    duration: "August 2026",
    location: "Remote",
    description: "Evaluated practical applications of state-of-the-art AI systems and engineered social-impact solutions.",
    bullets: [
      "Researched and evaluated AI tools such as ChatGPT, Microsoft Copilot, and Google Gemini, analyzing practical applications across education, productivity, design, and communication.",
      "Analyzed real-world social-impact challenges and formulated AI-driven solutions for personalized learning, NGO operations, animal rescue, accessibility, and responsible AI awareness.",
      "Collaborated in team strategy discussions regarding ethical AI implementation and community technology adoption."
    ],
    technologies: ["Generative AI", "ChatGPT", "Google Gemini", "Microsoft Copilot", "Responsible AI", "Technical Analysis"],
    certificateRef: "Authorized Offer & Service (Reg No: U85300CT2020NPL010641)"
  }
];
