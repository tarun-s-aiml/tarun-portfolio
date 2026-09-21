export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: "AI & Machine Learning" | "Software Development" | "Data Analytics" | "Programming" | "Virtual Experience";
  date: string;
  credentialId?: string;
  image: string;
  link?: string;
  description: string;
  skills: string[];
}

export const certifications: CertificationItem[] = [
  {
    id: "hackerrank-swe-intern",
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    category: "Software Development",
    date: "14 Sep, 2026",
    credentialId: "48A658C1D5DC",
    image: "/certificates/hackerrank-swe.png",
    link: "https://www.hackerrank.com/certificates/48A658C1D5DC",
    description: "Passed the HackerRank role certification test validating core software engineering competencies, data structures, algorithm design, and problem solving.",
    skills: ["Software Engineering", "Algorithms", "Data Structures", "Problem Solving"]
  },
  {
    id: "ibm-gen-ai",
    title: "Getting Started with Generative AI",
    issuer: "IBM SkillsBuild",
    category: "AI & Machine Learning",
    date: "14 Sep, 2026",
    image: "/certificates/ibm-genai.png",
    link: "https://www.credly.com/go/Zku0KAIv",
    description: "Verified credential issued by IBM SkillsBuild and hosted on Credly covering Generative AI foundational architectures, prompt engineering, and LLM mechanics.",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI Ethics"]
  },
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    category: "Data Analytics",
    date: "12 Aug, 2026",
    credentialId: "yv6o29xRjttyskdTb",
    image: "/certificates/deloitte-data-analytics.png",
    link: "https://www.theforage.com/simulations/deloitte/data-analytics",
    description: "Completed comprehensive enterprise simulation covering data analysis workflows, forensic technology methods, data investigation, and client presentation.",
    skills: ["Data Analysis", "Forensic Technology", "Data Interpretation", "Reporting"]
  },
  {
    id: "codsoft-python",
    title: "Python Programming (Virtual Internship)",
    issuer: "CodSoft",
    category: "Programming",
    date: "08 Sep, 2026",
    credentialId: "dedf88d",
    image: "/certificates/codsoft-python.png",
    link: "https://www.codsoft.in",
    description: "Completed 4 weeks of hands-on virtual internship in Python Programming, building data processing scripts, OOP modules, and software utilities.",
    skills: ["Python 3", "OOP", "Scripting", "Algorithm Implementation"]
  },
  {
    id: "yuvaintern-nlp",
    title: "Data Analytics Specialist - Language Processing",
    issuer: "YuvaIntern",
    category: "Data Analytics",
    date: "01 Sep, 2026",
    credentialId: "YI/2026/184260/409356",
    image: "/certificates/yuvaintern-nlp.png",
    link: "https://yuvaintern.com",
    description: "Formal internship certificate awarded for successful completion of Natural Language Processing and text analytics tasks, including sentiment classification on the IMDB dataset.",
    skills: ["Natural Language Processing", "Data Analytics", "EDA", "Text Classification"]
  },
  {
    id: "simplilearn-powerbi",
    title: "Power BI for Beginners",
    issuer: "Simplilearn SkillUp",
    category: "Data Analytics",
    date: "29 Oct, 2024",
    credentialId: "7507242",
    image: "/certificates/simplilearn-powerbi.png",
    link: "https://www.simplilearn.com/skillup-free-online-courses",
    description: "Professional credential demonstrating proficiency in interactive Power BI dashboard construction, DAX measures, data relationships, and visual analytics.",
    skills: ["Power BI", "DAX", "Business Intelligence", "Data Visualization"]
  },
  {
    id: "inamigos-ai-intern",
    title: "Artificial Intelligence Intern",
    issuer: "InAmigos Foundation",
    category: "Virtual Experience",
    date: "August 2026",
    credentialId: "CSR00083159 / U85300CT2020NPL010641",
    image: "/certificates/inamigos-internship.png",
    link: "https://inamigosfoundation.org.in",
    description: "Certified internship evaluation and research role assessing real-world applications of frontier AI models (ChatGPT, Copilot, Gemini) for non-profit and educational impact.",
    skills: ["Applied AI", "Tool Evaluation", "Social Impact Tech", "Research"]
  },
  {
    id: "novitech-ai-masterclass",
    title: "Artificial Intelligence Masterclass",
    issuer: "Novitech Learning Hub",
    category: "AI & Machine Learning",
    date: "Certified (Resume Listed)",
    image: "/certificates/novitech-ai.png",
    description: "Extensive masterclass covering modern Artificial Intelligence paradigms, neural network foundations, computer vision, and machine learning pipelines.",
    skills: ["Artificial Intelligence", "Neural Networks", "Computer Vision", "Machine Learning"]
  },
  {
    id: "udemy-java",
    title: "Java Programming Course",
    issuer: "Udemy",
    category: "Programming",
    date: "Certified (Resume Listed)",
    image: "/certificates/udemy-java.png",
    description: "In-depth course on Java fundamentals, object-oriented architecture, data structures, multithreading basics, and robust software implementation.",
    skills: ["Java", "Object-Oriented Programming", "Data Structures", "Exception Handling"]
  },
  {
    id: "simplilearn-powerbi-analytics",
    title: "Power BI Data Analysis",
    issuer: "Simplilearn",
    category: "Data Analytics",
    date: "Certified (Resume Listed)",
    image: "/certificates/simplilearn-powerbi.png",
    description: "Verified training covering business intelligence reports, data transformation, dashboard metrics, and analytical presentations.",
    skills: ["Power BI", "Data Modeling", "Dashboard Engineering", "Analytics"]
  }
];

export const certificationCategories = [
  "All",
  "AI & Machine Learning",
  "Software Development",
  "Data Analytics",
  "Programming",
  "Virtual Experience"
] as const;
