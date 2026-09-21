export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  location: string;
  timeline: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    institution: "K S Institute of Technology",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Artificial Intelligence & Machine Learning",
    location: "Bangalore, India",
    timeline: "Expected Graduation: March 2027",
    description: "Core technical curriculum covering Artificial Intelligence foundations, Machine Learning algorithms, Deep Learning models, Natural Language Processing, Relational Database Management Systems, and Object-Oriented Software Design.",
    highlights: [
      "Focused on practical machine learning applications and defensive cybersecurity architectures.",
      "Active participation in campus technical seminars, workshops, and student engineering bodies.",
      "Hands-on departmental project work in automated detection mechanisms and predictive modeling."
    ]
  },
  {
    institution: "Christ Junior College",
    degree: "Pre-University Course",
    field: "PCMC (Physics, Chemistry, Mathematics, Computer Science)",
    location: "Bangalore, India",
    timeline: "Completed",
    description: "Rigorous pre-university academic foundation emphasizing Higher Mathematics, Physics, Chemistry, and fundamentals of Computer Science and algorithmic problem-solving.",
    highlights: [
      "Built strong mathematical foundation for machine learning algorithms and linear algebra.",
      "Initial programming coursework in structured logic, algorithms, and computational principles."
    ]
  }
];
