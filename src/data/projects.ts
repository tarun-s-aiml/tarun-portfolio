export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: "Security & AI" | "NLP & Analytics" | "Safety Systems";
  githubUrl?: string;
  demoUrl?: string;
  stats?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "phishing-detection",
    title: "AI-Powered Browser-Based Phishing URL Detection System",
    tagline: "Real-time machine learning threat classification for web navigation security",
    description: "An intelligent browser-integrated security solution that evaluates web URLs on-the-fly to prevent cyber spoofing and phishing attacks. It extracts lexical features, domain characteristics, and structural anomalies to classify URLs before users submit sensitive credentials.",
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Feature Engineering", "JavaScript", "Web API"],
    highlights: [
      "Engineered lexical and structural URL feature extraction routines to detect subtle deceptive patterns.",
      "Trained supervised machine learning classification models to distinguish legitimate domains from phishing threats.",
      "Designed for browser-level inspection to provide immediate threat alerts without hindering browsing performance.",
      "Analyzed heuristic indicators such as URL length, special characters, and host anomalies for robust detection."
    ],
    category: "Security & AI",
    githubUrl: "https://github.com/tarun-s-aiml",
    stats: "Real-Time Classification"
  },
  {
    id: "women-safety-guardian",
    title: "AI-Powered Women Safety Guardian",
    tagline: "Real-time emergency detection and automated alert response ecosystem",
    description: "An AI-powered emergency safety application designed to detect high-risk scenarios and trigger instant automated notifications to predefined emergency contacts, enabling rapid incident response during safety threats.",
    technologies: ["Python", "Machine Learning", "Emergency Trigger API", "Real-Time Alert Mechanism", "Location Services"],
    highlights: [
      "Engineered automated trigger pipelines to rapidly notify emergency contacts and authorities during critical incidents.",
      "Integrated emergency alert mechanisms built for swift and reliable response in high-stress scenarios.",
      "Designed situational threat evaluation principles using machine learning classification logic.",
      "Prioritized fault-tolerant notifications with minimal latency to ensure dependable personal security."
    ],
    category: "Safety Systems",
    githubUrl: "https://github.com/tarun-s-aiml",
    stats: "Automated Incident Alert"
  },
  {
    id: "imdb-sentiment-analysis",
    title: "IMDB Sentiment Analysis & Text Classification",
    tagline: "High-accuracy natural language processing model for sentiment interpretation",
    description: "A comprehensive NLP classification pipeline trained on the IMDB movie review dataset. Performs end-to-end exploratory data analysis, text cleaning, feature extraction, and supervised classification to accurately categorize sentiment polarities.",
    technologies: ["Python", "NLP", "Scikit-learn", "TF-IDF", "EDA", "Data Preprocessing"],
    highlights: [
      "Achieved 88.68% test accuracy on sentiment classification across thousands of diverse movie reviews.",
      "Implemented thorough text preprocessing pipelines including tokenization, stop-word removal, and normalization.",
      "Applied feature extraction methodologies (TF-IDF and frequency analysis) to identify strong sentiment indicators.",
      "Conducted extensive model evaluation and performance tuning using precision, recall, and confusion matrix analysis."
    ],
    category: "NLP & Analytics",
    githubUrl: "https://github.com/tarun-s-aiml",
    stats: "88.68% Test Accuracy"
  }
];
