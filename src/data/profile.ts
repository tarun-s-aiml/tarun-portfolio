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
  roleSubtitle: "Software & AI Solutions Developer",
  summary: "Final-year B.E. student specializing in Artificial Intelligence and Machine Learning with hands-on experience in Python, Machine Learning, and NLP. Experienced in building AI-driven applications, developing classification models, and implementing data-driven software solutions.",
  bio: "Final-year B.E. student specializing in Artificial Intelligence and Machine Learning at K S Institute of Technology, Bangalore (Expected Graduation: March 2027). Hands-on experience across Python, Machine Learning, and NLP through software development and AI internships. Dedicated to building practical, AI-driven applications and solving real-world security and data problems.",
  email: "tarun.s.2027@gmail.com",
  phone: "+91-8660268127",
  location: "Bangalore, Karnataka, India",
  github: "https://github.com/tarun-s-aiml",
  linkedin: "https://linkedin.com/in/tarun-s-aiml",
  portfolioUrl: "https://tarun-portfolio-phi.vercel.app/",
  resumeUrl: "/resume.pdf",
  status: "Available for AI/ML & Software Engineering Roles",
  focusAreas: [
    "Machine Learning & Deep Learning",
    "Natural Language Processing (NLP)",
    "Python Software Engineering",
    "Threat & Emergency Detection Systems",
    "Exploratory Data Analysis (EDA)"
  ]
};
