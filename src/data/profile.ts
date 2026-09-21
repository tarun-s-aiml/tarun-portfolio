export interface ProfileData {
  name: string;
  headline: string;
  roleSubtitle: string;
  summary: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  portfolioUrl: string;
  resumeUrl: string;
  status: string;
  focusAreas: string[];
}

export const profileData: ProfileData = {
  name: "TARUN S",
  headline: "AI & Machine Learning Engineer",
  roleSubtitle: "Aspiring Software Engineer",
  summary: "Building practical AI, machine learning, and software solutions with a focus on intelligent applications and data-driven systems.",
  bio: "B.E. student in Artificial Intelligence and Machine Learning at K S Institute of Technology, Bangalore. Experienced with hands-on internship roles and a solid technical foundation in Machine Learning, Deep Learning, Natural Language Processing, Java, and SQL. Dedicated to building real-world software solutions that solve tangible human, security, and data challenges.",
  email: "tarun.s.2027@gmail.com",
  phone: "+91-8660268127",
  location: "Bangalore, Karnataka, India",
  github: "https://github.com/tarun-s-aiml",
  linkedin: "https://linkedin.com/in/tarun-s-aiml",
  portfolioUrl: "https://tarun-portfolio-phi.vercel.app/",
  resumeUrl: "/resume.pdf",
  status: "Open for AI/ML & Software Engineering Opportunities",
  focusAreas: [
    "Machine Learning & Deep Learning",
    "Natural Language Processing (NLP)",
    "Full-Stack AI Integrations",
    "Data Preprocessing & EDA",
    "Threat & Emergency Detection Systems"
  ]
};
