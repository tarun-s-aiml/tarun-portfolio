# Tarun S — Developer Portfolio & AI/ML Showcase

A modern, high-performance developer portfolio built from scratch with **React 19, TypeScript, Vite, and Tailwind CSS**. Designed specifically for software engineering and AI/ML internship recruitment.

---

## 🚀 Live Demo & Repository
- **Local Dev Server:** `http://127.0.0.1:5174/`
- **Current Production Domain:** [tarun-portfolio-phi.vercel.app](https://tarun-portfolio-phi.vercel.app/)

---

## 📁 Project Architecture

```
tarun-dev-portfolio/
├── public/
│   ├── resume.pdf                       # Official candidate resume document
│   ├── favicon.svg                      # Custom TS monogram logo
│   ├── certificates/                    # 10 verified technical/course certifications
│   │   ├── hackerrank-swe.png
│   │   ├── ibm-genai.png
│   │   ├── deloitte-data-analytics.png
│   │   ├── codsoft-python.png
│   │   ├── simplilearn-powerbi.png
│   │   ├── yuvaintern-nlp.png
│   │   ├── inamigos-internship.png
│   │   ├── novitech-ai.png
│   │   └── udemy-java.png
│   └── extracurricular/                 # 6 verified activity & leadership certificates
│       ├── ncc-a-certificate.jpg        # NCC 'A' Cert (Ministry of Defence, Air Wing)
│       ├── nss-swachhata-hi-seva.jpg    # NSS Swachhata hi Seva 2024
│       ├── ncb-drug-awareness.jpg       # Narcotics Control Bureau Pledge
│       ├── red-cross-blood-donation.jpg # Indian Red Cross Blood Donation
│       ├── anti-drugs-awareness.jpg     # Smitam NGO Awareness
│       ├── nisvaarth-2-5k-run.jpg       # KSGI 5K Run
│       └── nisvaarth-marathon-2k25.jpg  # NISVAARTH Marathon
├── src/
│   ├── data/
│   │   ├── profile.ts                   # Personal details, headline, links
│   │   ├── skills.ts                    # Categorized technical & professional skills
│   │   ├── projects.ts                  # Phishing Detection, Safety Guardian, IMDB NLP
│   │   ├── experience.ts                # Yuva Intern, InAmigos Foundation
│   │   ├── certifications.ts            # 10 technical certifications (searchable)
│   │   ├── achievements.ts              # 6 extracurricular achievements
│   │   └── education.ts                 # KSIT & CJC (strictly zero CGPA displayed)
│   ├── components/
│   │   ├── Navbar.tsx                   # Sticky glass navbar with mobile drawer
│   │   ├── Hero.tsx                     # Headline, actions, and interactive AI terminal
│   │   ├── About.tsx                    # Split layout narrative & focus areas
│   │   ├── Skills.tsx                   # Categorized badges with verified tags
│   │   ├── Experience.tsx               # Career & internship timeline
│   │   ├── Projects.tsx                 # Project cards with metrics & repo links
│   │   ├── Certifications.tsx           # Searchable & filterable certificate gallery
│   │   ├── Achievements.tsx             # Extracurricular & leadership showcase
│   │   ├── Education.tsx                # Academic timeline (zero CGPA)
│   │   ├── ResumeSection.tsx            # PDF preview CTA & download triggers
│   │   ├── ResumeModal.tsx              # Fullscreen interactive resume viewer
│   │   ├── CertificateModal.tsx         # High-resolution image/cert lightbox
│   │   ├── Contact.tsx                  # Interactive contact form with mailto fallback
│   │   ├── Footer.tsx                   # Social links and copyright
│   │   └── SocialIcons.tsx              # Clean SVG icons for GitHub & LinkedIn
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🛠️ How the Modular Architecture Works

All content is decoupled from UI presentation via strongly-typed data files in `src/data/`. You can update content without modifying component JSX.

### 1. Adding a New Technical Certification
1. Save your certificate image or PDF render into `public/certificates/your-certificate.png`.
2. Open `src/data/certifications.ts`.
3. Add a new object to the `certifications` array:
   ```typescript
   {
     id: "aws-cloud-practitioner",
     title: "AWS Certified Cloud Practitioner",
     issuer: "Amazon Web Services",
     category: "Software Development", // or "AI & Machine Learning", "Data Analytics", etc.
     date: "October 2026",
     credentialId: "ABC123XYZ",
     image: "/certificates/your-certificate.png",
     link: "https://aws.amazon.com/verification",
     description: "Validated foundational cloud architecture, security, and computing models.",
     skills: ["AWS", "Cloud Computing", "Security"]
   }
   ```
4. The search, category filters, and modal lightbox will automatically support the new entry.

### 2. Adding a New Project
1. Open `src/data/projects.ts`.
2. Append a new object to the `projects` array:
   ```typescript
   {
     id: "new-project-id",
     title: "Project Name",
     tagline: "Short one-line architecture description",
     description: "Detailed summary of problem solved and engineering methodology.",
     technologies: ["Python", "PyTorch", "FastAPI"],
     highlights: [
       "Key technical highlight or architecture decision",
       "Validated quantitative benchmark or system capability"
     ],
     category: "Security & AI", // or "NLP & Analytics", "Safety Systems"
     githubUrl: "https://github.com/tarun-s-aiml/repo-name",
     stats: "Target Metric"
   }
   ```

### 3. Adding an Extracurricular / Leadership Achievement
1. Save the certificate file into `public/extracurricular/achievement-name.jpg`.
2. Open `src/data/achievements.ts`.
3. Append a new item to `extracurricularAchievements`:
   ```typescript
   {
     id: "new-achievement",
     title: "Leadership Camp / Activity Name",
     organization: "Issuing Organization",
     affiliation: "Affiliation details (optional)",
     date: "Date / Year",
     badge: "Recognition Title",
     credentialId: "Optional Certificate ID",
     image: "/extracurricular/achievement-name.jpg",
     description: "Summary of participation and impact.",
     category: "Community & Social Service" // or "National Cadet Corps", "Sports & Wellness"
   }
   ```

### 4. Updating Skills
1. Open `src/data/skills.ts`.
2. Add or modify skills inside the respective category in `skillCategories`.

### 5. Replacing the Resume
1. Export your latest resume PDF as `resume.pdf`.
2. Replace `public/resume.pdf` with your new file.
3. Both the in-browser PDF viewer and the download button will instantly use the updated file.

---

## 💻 Running Locally

### Prerequisites
- Node.js 18+ (tested on Node v20/v22)
- npm or yarn

### Steps
1. Navigate to the project directory:
   ```powershell
   cd C:\Users\HP\.gemini\antigravity-ide\scratch\tarun-dev-portfolio
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the Vite development server:
   ```powershell
   npm run dev
   ```
4. Open `http://localhost:5173/` (or the port displayed in your terminal) in your browser.

---

## 🚢 Deploying to Vercel

The project is pre-configured for instant zero-configuration deployment on Vercel:

### Method 1: Vercel CLI
1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. In the `tarun-dev-portfolio` directory, run:
   ```bash
   vercel
   ```
3. Follow the CLI prompts. When prompted for settings, Vercel will automatically detect **Vite** and use:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### Method 2: GitHub + Vercel Web Dashboard
1. Initialize git and commit:
   ```powershell
   git init
   git add .
   git commit -m "feat: modern developer portfolio for Tarun S"
   ```
2. Push to your GitHub repository `https://github.com/tarun-s-aiml/portfolio`.
3. Import the repository in [vercel.com/dashboard](https://vercel.com/dashboard).
4. Click **Deploy**. Vercel will build and deploy automatically on each `git push`.
