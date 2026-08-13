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
      { name: "SQL", level: 85, icon: "Database", description: "Relational Database queries, schema design & data management" },
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
    id: "nisvaarth-2-5k-run",
    title: "NISVAARTH-2 5K RUN Certificate of Participation",
    issuer: "Dept. of ECE, K.S. Institute of Technology",
    association: "IEEE, IEEE Bangalore Section, WIE & Gleneagles BGS Hospital",
    date: "15th June 2024",
    badge: "5K Run & Fitness",
    image: "/achievements/nisvaarth-2-5k-run.jpg",
    recipient: "TARUN.S",
    certId: "KSGI-5K-2024-ECE",
    description: "Certificate of Participation awarded to Tarun S for participating in the NISVAARTH-2 5K RUN organized by the Department of Electronics & Communication Engineering at K.S. Institute of Technology in association with IEEE Bangalore Section, WIE, and Gleneagles BGS Hospital.",
    signatories: ["Mr. B.R. Santhosh Kumar (IEEE Branch Chair)", "Dr. P. N. Sudha (Professor & Head ECE Dept)", "Dr. Dilip Kumar K. (Principal & Director)"],
    tags: ["5K Run", "ECE KSIT", "IEEE", "WIE"]
  },
  {
    id: "ncc-a-certificate",
    title: "NCC 'A' Certificate (National Cadet Corps)",
    issuer: "Ministry of Defence, Government of India",
    association: "2 KAR (T) AIR SQN NCC | Karnataka & Goa Directorate, Bangalore",
    date: "24 Feb 2020",
    badge: "Grade 'B' • Air Wing",
    image: "/achievements/ncc-a-certificate.jpg",
    recipient: "CDT TARUN.S",
    certId: "KAR A Cert AIR 2020 BB-4510",
    regNo: "KA/19/JD/F/121882",
    dob: "16-Jul-2005",
    description: "National Cadet Corps Certificate 'A' awarded to Cadet Tarun.S of 2 KAR (T) AIR SQN NCC under the authority of Ministry of Defence, Government of India, passing the examination held in 2020 with Grade 'B'.",
    signatories: ["Addl. Director General, National Cadet Corps", "Dy. Director General, National Cadet Corps"],
    tags: ["NCC Air Wing", "Grade B", "Ministry of Defence", "Leadership"]
  },
  {
    id: "anti-drugs-awareness",
    title: "Anti-Drugs Awareness Programme Certificate",
    issuer: "Smitam NGO",
    association: "Community Safety & Drug-Free Youth Initiative",
    date: "30th November 2024",
    badge: "Social Welfare & Drive",
    image: "/achievements/anti-drugs-awareness.jpg",
    recipient: "TARUN.S",
    certId: "SMITAM-ADAP-2024",
    description: "Certificate of Participation presented to Tarun.S by Smitam in recognition of participation and commitment towards creating a drug-free community during the Anti-Drugs Awareness Programme held on 30th November 2024.",
    signatories: ["Meghana Murthy (Founder & President, Smitam)"],
    tags: ["Social Service", "Smitam", "Drug-Free Drive", "Community"]
  },
  {
    id: "nss-swachhata-hi-seva",
    title: "NSS Swachhata hi Seva 2024 Certificate",
    issuer: "NSS Cell, K.S. Institute of Technology",
    association: "MYBharat Dept. of Youth Affairs, Ministry of Youth Affairs & Sports, Govt. of India",
    date: "27th September 2024",
    badge: "NSS Service & Swachhata",
    image: "/achievements/nss-swachhata-hi-seva.jpg",
    recipient: "Tarun S (USN: 1KS23AI060, AIML Dept)",
    certId: "NSS-SHS-2024-KSIT",
    usn: "1KS23AI060",
    description: "National Service Scheme (NSS) Certificate of Participation awarded to Tarun S (USN: 1KS23AI060, AIML Dept) for participating in Swachhata hi Seva 2024 organized by NSS Cell, KSIT in association with MYBharat Dept. of Youth Affairs, Ministry of Youth Affairs and Sports, Govt. of India.",
    signatories: ["Mr Naveen.V (NSS PO)", "Dr. Dilip Kumar K. (Principal / Director)"],
    tags: ["NSS", "MYBharat", "Youth Affairs", "Govt of India"]
  },
  {
    id: "nisvaarth-marathon-2k25",
    title: "NISVAARTH MARATHON 2K25 Certificate of Participation",
    issuer: "Dept. of ECE, K.S. Institute of Technology",
    association: "IEEE KSIT SB, WIE and SPS",
    date: "5th April 2025",
    badge: "Marathon & Community",
    image: "/achievements/nisvaarth-marathon-2k25.jpg",
    recipient: "TARUN.S (4th Sem AIML)",
    certId: "KSGI-MARATHON-2K25",
    description: "Certificate of Participation awarded to Tarun S (4th Sem AIML, KSIT) for participating in the NISVAARTH MARATHON 2K25 organized by the Department of Electronics and Communication Engineering, KSIT, in association with IEEE KSIT SB, WIE, and SPS.",
    signatories: ["B. R. Santhosh Kumar (Chair IEEE KSIT SB)", "Dr. P. N. Sudha (Chair WIE, IEEE KSIT SB)", "Dr. Dilip Kumar K. (Principal / Director)"],
    tags: ["Marathon 2K25", "IEEE KSIT", "WIE", "SPS"]
  }
];

export const languages = [
  { name: "English", fluency: "Professional Working Proficiency", level: 90 },
  { name: "Kannada", fluency: "Native / Full Professional", level: 100 },
  { name: "Hindi", fluency: "Professional Working Proficiency", level: 85 }
];
