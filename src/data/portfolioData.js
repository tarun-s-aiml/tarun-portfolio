export const personalInfo = {
  name: "Tarun S",
  title: "AI & Machine Learning Engineer",
  subTitle: "Artificial Intelligence Student | Python & ML Developer | Security Innovations",
  bio: "Passionate B.E. student in Artificial Intelligence & Machine Learning at K S Institute of Technology, Bangalore. Proficient in Python, Java, Machine Learning algorithms, and data analytics tools. Creator of real-world impact projects including AI-Powered Women Safety Guardian and Browser Phishing Detection systems. NCC 'A' Certificate holder & active NSS volunteer with leadership experience.",
  location: "Bangalore, Karnataka, India",
  email: "tarun.s.2027@gmail.com",
  phone: "+91 8660268127",
  github: "https://github.com/tarun-s-aiml",
  linkedin: "https://linkedin.com/in/tarun-s-aiml",
  status: "Available for Internships & AI/ML Engineering Roles",
  stats: [
    { label: "CGPA (Up to 6th Sem)", value: "7.6" },
    { label: "Key AI Projects", value: "02+" },
    { label: "Certifications", value: "03" },
    { label: "Graduation Year", value: "2027" }
  ]
};

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90, icon: "Code2", description: "Primary language for Data Science, AI/ML models & scripting" },
      { name: "Java", level: 82, icon: "Coffee", description: "Object-Oriented Programming, Data Structures & Backend APIs" },
      { name: "SQL", level: 85, icon: "Database", description: "Relational Database queries, schema design & data management" },
      { name: "JavaScript / Web Basics", level: 75, icon: "Globe", description: "Browser extension scripting, UI integration & Web APIs" }
    ]
  },
  {
    category: "Concepts & Domains",
    items: [
      { name: "Machine Learning", level: 88, icon: "Brain", description: "Supervised/Unsupervised learning, classification & model evaluation" },
      { name: "AI Safety & Detection Systems", level: 85, icon: "ShieldCheck", description: "Emergency alert mechanisms, threat detection & URL analysis" },
      { name: "Data Visualization", level: 85, icon: "BarChart3", description: "Interactive dashboards, pattern discovery & visual analytics" },
      { name: "Real-World Problem Solving", level: 90, icon: "Zap", description: "Translating human security & safety challenges into AI software" }
    ]
  },
  {
    category: "Developer Tools & Software",
    items: [
      { name: "VS Code", level: 92, icon: "Terminal", description: "Primary IDE configured with Python, AI extensions & Git integration" },
      { name: "Git & GitHub", level: 88, icon: "GitBranch", description: "Version control, collaborative workflows & repository hosting" },
      { name: "Power BI", level: 85, icon: "PieChart", description: "Dashboard engineering, DAX modeling & business reporting" },
      { name: "Microsoft Excel", level: 82, icon: "FileSpreadsheet", description: "Data cleaning, pivot tables & mathematical analysis" }
    ]
  }
];

export const projects = [
  {
    id: "women-safety-guardian",
    title: "AI-Powered Women Safety Guardian",
    shortDesc: "Comprehensive safety platform utilizing AI concepts and emergency alert mechanisms for real-world women's security.",
    fullDesc: "Developed an intelligent, real-time safety ecosystem engineered to enhance women's security. The system integrates real-time trigger mechanisms, emergency contact notification loops, and contextual danger assessment using AI classification concepts. Focused on low-latency response and robust reliability in critical situations.",
    highlights: [
      "Real-time emergency alert mechanism with instant location broadcasting",
      "AI-driven contextual threat detection and situational analysis",
      "User-friendly trigger interface designed for swift, high-stress interaction",
      "Built with focus on real-world deployment and scalability"
    ],
    techStack: ["Python", "Machine Learning", "Emergency Trigger API", "OpenCV", "Location Services"],
    category: "AI & Security",
    featured: true,
    github: "https://github.com/tarun-s-aiml/AI-Women-Safety-Guardian",
    demo: "#"
  },
  {
    id: "phishing-url-detector",
    title: "AI-Powered Browser-Based Phishing URL Detection System",
    shortDesc: "Real-time browser threat detection model identifying malicious phishing URLs using machine learning classification.",
    fullDesc: "Engineered a browser-integrated security solution that evaluates web URLs on-the-fly to detect phishing and cyber spoofing attempts. Extracts lexical features, domain age indicators, and structural anomalies to classify URLs before users submit sensitive credentials.",
    highlights: [
      "In-browser real-time lexical & heuristic URL feature parsing",
      "Supervised ML classification model trained on malicious URL datasets",
      "Low overhead response time preventing seamless user disruption",
      "Interactive visual indicator highlighting website risk scores"
    ],
    techStack: ["Python", "Machine Learning", "JavaScript", "NLP / Lexical Parsing", "Web API"],
    category: "Cybersecurity & ML",
    featured: true,
    github: "https://github.com/tarun-s-aiml/Phishing-URL-Detection-System",
    demo: "#"
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
    institution: "K S Institute of Technology, Bangalore",
    period: "2023 - March 2027 (Expected)",
    grade: "CGPA: 7.6 (up to 6th semester)",
    details: "Specializing in core Artificial Intelligence paradigms, Machine Learning algorithms, Data Structures, Database Systems, and Neural Networks. Active participant in technical workshops and departmental initiatives.",
    icon: "GraduationCap"
  },
  {
    degree: "Pre-University (PCMC - Physics, Chemistry, Math, Computer Science)",
    institution: "Christ Junior College, Bangalore",
    period: "2021 - 2023",
    grade: "Distinction Grade",
    details: "Rigorous coursework in Higher Mathematics, Physics, Chemistry, and foundational Computer Science concepts.",
    icon: "BookOpen"
  }
];

export const certifications = [
  {
    title: "Artificial Intelligence Masterclass",
    issuer: "Novitech Learning Hub",
    date: "Certified",
    badge: "AI Specialist",
    description: "In-depth masterclass covering modern AI paradigms, neural network architectures, computer vision, and hands-on Python AI workflows.",
    skills: ["AI Algorithms", "Neural Networks", "Python"]
  },
  {
    title: "Power BI - Data Visualization",
    issuer: "Specialized Certification",
    date: "Certified",
    badge: "Data Analyst",
    description: "Comprehensive hands-on training in business intelligence dashboards, complex DAX formulas, interactive data transformation, and visual reporting.",
    skills: ["Power BI", "DAX", "Data Storytelling"]
  },
  {
    title: "Python Programming Course",
    issuer: "Udemy",
    date: "Certified",
    badge: "Python Developer",
    description: "Advanced Python programming concepts including Object-Oriented Design, data structures, automation scripts, and library integrations.",
    skills: ["Python 3", "OOP", "Scripting"]
  }
];

export const achievements = [
  {
    title: "NCC 'A' Certificate Holder",
    organization: "National Cadet Corps (NCC)",
    description: "Successfully earned the prestigious NCC 'A' Certificate demonstrating rigorous physical endurance, military drill precision, team discipline, and national service leadership.",
    badge: "National Defense Leadership"
  },
  {
    title: "Active Member of NSS (National Service Scheme)",
    organization: "National Service Scheme (NSS)",
    description: "Engaged in community development projects, youth leadership forums, environmental sustainability initiatives, and social upliftment drives.",
    badge: "Community Leadership"
  },
  {
    title: "Attended Multiple Camps & Leadership Activities",
    organization: "Youth & Cadet Leadership Forums",
    description: "Selected to participate in intensive multi-day leadership, outdoor crisis management, and team-building training camps.",
    badge: "Leadership & Teamwork"
  }
];

export const languages = [
  { name: "English", fluency: "Professional Working Proficiency", level: 90 },
  { name: "Kannada", fluency: "Native / Full Professional", level: 100 },
  { name: "Hindi", fluency: "Professional Working Proficiency", level: 85 }
];
