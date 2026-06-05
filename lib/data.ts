export const personalInfo = {
  name: "Yatin Rajkumar Kalra",
  title: "Senior Full Stack Engineer",
  phone: "+1 (260) 363-7866",
  email: "yatin.kalra940@gmail.com",
  linkedin: "https://www.linkedin.com/in/yatin-rajkumar-kalra",
  github: "https://github.com/yatinkalra22",
  devpost: "https://devpost.com/yatin-kalra940",
  location: "Indiana, USA",
};

export const professionalSummary =
  "Senior Full Stack Engineer with 8+ years of experience architecting and scaling cloud-native, distributed systems across fintech, healthcare, and SaaS domains. Specialized in React, Node.js, AWS, and microservices architecture, delivering high-availability platforms capable of handling 10x production traffic growth. Strong background in API design (REST/GraphQL), performance optimization, secure system architecture, and CI/CD automation.";

export const education = [
  {
    degree: "Masters in Information Science",
    institution: "Indiana Institute of Technology",
    period: "March 2025 - May 2026 (expected)",
    location: "Indiana, USA",
  },
  {
    degree: "Bachelor of Engineering, Information Technology",
    institution: "University of Mumbai",
    period: "2016 - 2019",
    location: "Mumbai, India",
  },
  {
    degree: "Diploma, Information Technology",
    institution: "MSBTE",
    period: "2011 - 2014",
    location: "India",
  },
];

export const experience = [
  {
    title: "Lead Engineer",
    company: "Fluent Health",
    location: "Mumbai, India",
    period: "April 2024 – August 2025",
    highlights: [
      "Architected and led development of HIPAA-aligned, FHIR-compliant cloud-native healthcare platforms using Node.js, Java, and AWS.",
      "Designed and implemented microservices architecture supporting 10x traffic growth while maintaining high availability and system reliability.",
      "Led system design, API architecture, code reviews, and CI/CD automation to improve release stability and deployment efficiency.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Presidio",
    location: "Chennai, India (Remote)",
    period: "November 2021 - April 2024",
    highlights: [
      "Designed and maintained enterprise product solutions used across 1,400+ retail stores.",
      "Migrated monolithic systems to microservices architecture, improving maintainability and deployment efficiency.",
      "Built cross-platform applications (web, mobile, desktop) using React, React Native, and ElectronJS.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Brewhackers Technologies",
    location: "Hyderabad, India (Remote)",
    period: "May 2020 - October 2021",
    highlights: [
      "Built full-stack analytics and event-driven platforms processing high-volume social and financial data.",
      "Developed dynamic React interfaces and high-availability Node.js backend services.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Headstrait Softwares",
    location: "Mumbai, India",
    period: "June 2019 - May 2020",
    highlights: [
      "Developed secure APIs, dashboards, and content delivery systems for healthcare and banking clients.",
      "Delivered scalable backend services supporting real-time personalized user experiences.",
    ],
  },
  {
    title: "Technical Support Associate III",
    company: "Convergys",
    location: "Thane, India",
    period: "October 2014 - November 2018",
    highlights: [
      "Automated analytics and reporting systems, increasing uptime and KPI accuracy by 25%.",
      "Enhanced backend monitoring and reliability for enterprise messaging systems.",
    ],
  },
];

export const skills = {
  Frontend: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "ElectronJS",
    "Redux",
    "HTML5",
    "CSS3",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Java",
    "REST APIs",
    "GraphQL",
    "Microservices",
  ],
  "Cloud & DevOps": [
    "AWS (EC2, S3, Lambda)",
    "Docker",
    "CI/CD Pipelines",
    "Jenkins",
    "Serverless",
  ],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  Core: [
    "Distributed Systems",
    "System Design",
    "Scalability",
    "Performance Optimization",
    "Secure Architecture",
    "Agile/Scrum",
  ],
};

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    period: "2023 - 2026",
    icon: "aws",
  },
];

export const achievements = [
  "President of Cricket Club, Indiana Tech",
  "Vice President of International Club, Indiana Tech",
  "Campus environmental & cultural leader, Mumbai",
];

export const hackathons = [
  {
    name: "ProofVault-ZK",
    hackathon: "Midnight Hackathon",
    date: "May 17, 2026",
    publishedAt: "2026-05-17T12:00:00-05:00",
    description:
      "Prove your funds. Reveal nothing. A zero-knowledge proof-of-funds credential for students applying to visas, universities, and housing — built on Midnight Network with a 30-second end-to-end flow.",
    techStack: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "Midnight Network",
      "Compact",
      "Zero-Knowledge Proofs",
      "Lace Wallet",
      "Plaid",
      "Ed25519",
      "Fastify",
      "Turborepo",
      "Tailwind CSS",
      "Vitest",
      "Docker",
    ],
    highlights: [
      "Tiered balance proofs ($30K / $50K / $80K) without revealing accounts or transactions",
      "ZK circuit binds proofs to specific universities with built-in expiration",
      "30-second flow: tier → recipient → wallet → Plaid link → proof",
      "Wallet-free verifier portal so universities can confirm proofs instantly",
    ],
    links: {
      demo: "",
      github: "https://github.com/yatinkalra22/proofvault-zk",
      devpost: "https://devpost.com/software/proofvault-zk",
    },
    team: ["Yash Baing", "Holly Andrews"],
    likes: 2,
    comments: 0,
  },
  {
    name: "NexusTower",
    hackathon: "Synapse Innovation Hack",
    date: "May 3, 2026",
    publishedAt: "2026-05-03T11:00:00-05:00",
    description:
      "An AI agent monitoring live vessel positions, weather patterns, and geopolitical events to identify supply chain disruptions and propose mitigations — every mutation goes through a human-in-the-loop approval flow with full audit trail.",
    techStack: [
      "TypeScript",
      "Next.js",
      "AWS Bedrock",
      "Claude 3.5 Sonnet",
      "MCP",
      "Vercel AI SDK",
      "Drizzle ORM",
      "Turso (libSQL)",
      "Clerk",
      "MapLibre GL",
      "Server-Sent Events",
      "Tailwind CSS",
    ],
    highlights: [
      "Multi-source signal fusion across GDELT, Open-Meteo, World Bank WITS",
      "Human-in-the-loop approval flow with full audit trail for every action",
      "Real-time vessel/weather/geopolitical monitoring on a live map",
      "MCP-driven tool orchestration with streaming SSE updates",
    ],
    links: {
      demo: "https://nexus-tower-silk.vercel.app",
      github: "https://github.com/yatinkalra22/nexus-tower",
      devpost: "https://devpost.com/software/nexustower",
    },
    likes: 0,
    comments: 0,
  },
  {
    name: "CampusVault AI",
    hackathon: "Nexforge",
    date: "May 3, 2026",
    publishedAt: "2026-05-03T10:30:00-05:00",
    description:
      "Snap. Place. Find. Turns photos into a searchable inventory for university spaces with voice search, borrow tracking, and event planning — fully powered by Amazon Nova.",
    techStack: [
      "TypeScript",
      "React Native",
      "Expo",
      "NestJS",
      "Amazon Nova",
      "Amazon Bedrock",
      "Amazon Cognito",
      "DynamoDB",
      "Zustand",
      "AWS",
    ],
    highlights: [
      "Photo-to-inventory recognition powered by Amazon Nova Pro/Lite/Embeddings",
      "Voice-first search and event-planning flow with Nova Sonic & Nova Act",
      "Borrow tracking with role-based auth via Amazon Cognito",
      "Mobile-first React Native + Expo experience with cloud-native backend",
    ],
    links: {
      demo: "https://campusvault-ai.vercel.app",
      github: "https://github.com/yatinkalra22/campusvault-ai",
      devpost: "https://devpost.com/software/campusvault-ai",
    },
    likes: 0,
    comments: 0,
  },
  {
    name: "VoxAID",
    hackathon: "GNEC Hackathon 2026 Spring",
    date: "May 3, 2026",
    publishedAt: "2026-05-03T10:00:00-05:00",
    description:
      "Depression screening through a phone call using vocal biomarkers — works on any phone for ~$0.03 per assessment, designed for low-resource communities lacking psychiatric infrastructure.",
    techStack: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "FastAPI",
      "Python",
      "OpenAI Whisper",
      "Anthropic Claude",
      "ElevenLabs",
      "Twilio",
      "XGBoost",
      "Supabase",
      "Prisma",
      "Redis",
      "Clerk",
      "Mapbox",
    ],
    highlights: [
      "Voice-biomarker depression screening callable from any phone via Twilio",
      "XGBoost classifier on top of Whisper transcription + acoustic features",
      "Sub-$0.05 per assessment cost target for low-resource deployment",
      "Clinician dashboard with geographic risk mapping (Mapbox)",
    ],
    links: {
      demo: "https://voxaid-web.vercel.app",
      github: "https://github.com/yatinkalra22/voxaid",
      devpost: "https://devpost.com/software/voxaid",
    },
    likes: 0,
    comments: 0,
  },
  {
    name: "URLPulse",
    hackathon: "Production Engineering Hackathon",
    date: "Apr 5, 2026",
    publishedAt: "2026-04-05T12:00:00-05:00",
    description:
      "A production-grade URL shortener built to survive chaos — load-balanced across 3 instances with full observability, chaos engineering, and automated Discord alerting when things break.",
    techStack: [
      "Python",
      "Flask",
      "Gunicorn",
      "NGINX",
      "PostgreSQL",
      "Redis",
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Docker Compose",
      "k6",
      "GitHub Actions",
      "Google Cloud",
    ],
    highlights: [
      "Load-balanced across 3 instances behind NGINX with PostgreSQL + Redis",
      "Full Prometheus + Grafana + Alertmanager observability stack",
      "Chaos engineering tests with k6 load tests in CI",
      "Discord webhook alerting on SLO breach for closed-loop incident flow",
    ],
    links: {
      demo: "http://34.61.209.214",
      github: "https://github.com/jakeoldfield2-max/PE-Hackathon-Template-2026",
      devpost: "https://devpost.com/software/urlpulse",
    },
    likes: 0,
    comments: 0,
  },
  {
    name: "AIO - Autonomous Incident Operator",
    hackathon: "GitLab AI Hackathon",
    date: "Mar 25, 2026",
    publishedAt: "2026-03-25T12:00:00-05:00",
    description:
      "A 7-agent AI chain that automates incident response for pipeline failures — generating diagnoses, auto-fix merge requests, postmortems, and carbon impact metrics in ~14 seconds end-to-end.",
    techStack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "GitLab Duo",
      "Claude",
      "Gemini",
      "Turborepo",
      "Cloud Run",
      "Cloud Build",
      "Firestore",
      "BigQuery",
      "Pub/Sub",
      "NextAuth",
      "Recharts",
      "Tailwind CSS",
      "Zod",
    ],
    highlights: [
      "Seven-agent orchestration: triage → diagnose → fix → review → postmortem",
      "Auto-generates merge requests with patches and rollback plans",
      "End-to-end pipeline incident → fix MR in approximately 14 seconds",
      "Tracks carbon impact of failed pipelines alongside MTTR/MTTD",
    ],
    links: {
      demo: "https://aio-dashboard-sssi63udwa-uc.a.run.app",
      github: "https://gitlab.com/yatinkalra22/aio-operator",
      devpost: "https://devpost.com/software/aio-autonomous-incident-operator",
    },
    likes: 0,
    comments: 0,
  },
  {
    name: "AutoQA - AI Browser Testing Agent",
    hackathon: "Gemini Live Agent Challenge",
    date: "Mar 16, 2026",
    publishedAt: "2026-03-16T00:00:00-05:00",
    description:
      "An AI-powered browser testing platform that autonomously navigates websites, executes test scenarios from plain English prompts, and generates detailed pass/fail reports — no traditional test scripts needed.",
    techStack: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "Playwright",
      "Gemini 2.5 Flash",
      "PostgreSQL",
      "Drizzle ORM",
      "Google Cloud Run",
      "Firebase",
      "WebSocket",
      "Docker",
    ],
    highlights: [
      "Vision-based autonomous browser navigation and test execution",
      "WCAG 2.1 accessibility audits and visual regression detection",
      "Playwright TypeScript code export and shareable HTML reports",
      "Real-time WebSocket updates with Slack/webhook integration",
    ],
    links: {
      demo: "https://autoqa-web.vercel.app",
      github: "https://github.com/yatinkalra22/autoqa-api",
      devpost: "https://devpost.com/software/a-g5mbop",
    },
    likes: 0,
    comments: 0,
  },
  {
    name: "HealthSync App - Multi-Agent Prior Authorization Automation",
    hackathon: "Elasticsearch Agent Builder Hackathon",
    date: "Feb 27, 2026",
    publishedAt: "2026-02-27T07:20:30-05:00",
    description:
      "A multi-agent prior authorization platform that coordinates five AI agents across clinical and policy data sources to automate approvals, surface confidence, and keep full compliance traceability.",
    techStack: [
      "TypeScript",
      "Next.js",
      "Elasticsearch",
      "Gemini 2.0 Flash",
      "Tailwind CSS",
      "FHIR R4",
      "HAPI FHIR",
      "SWR",
      "Server-Sent Events",
      "Docker",
      "Vercel",
    ],
    highlights: [
      "Five-agent orchestration pipeline for end-to-end prior authorization",
      "Hybrid policy matching and ES|QL-based clinical data aggregation across 8 indices",
      "HIPAA-style audit log with full agent/action/query traceability",
      "Explainable workflow with confidence-based escalation and transparent decisioning",
    ],
    links: {
      demo: "https://health-sync-app-theta.vercel.app",
      github: "https://github.com/yatinkalra22/health-sync-app",
      devpost:
        "https://devpost.com/software/healthsync-app-multi-agent-prior-authorization-automation",
    },
    likes: 2,
    comments: 0,
  },
  {
    name: "Spatial Mentor AI - Precision MR Training",
    hackathon: "DevStudio 2026 by Logitech",
    date: "Feb 20, 2026",
    publishedAt: "2026-02-20T23:03:20-05:00",
    description:
      "A mixed-reality precision training prototype for Meta Quest that uses MX Ink stylus pressure input to simulate fine-motor tasks and deliver AI-assisted performance feedback.",
    techStack: [
      "Unity",
      "C#",
      "Meta Quest",
      "OpenXR",
      "Meta XR SDK",
      "Mixed Reality",
      "Gemini 3",
      "VR",
    ],
    highlights: [
      "Pressure-sensitive stylus input mapped to task-specific precision metrics",
      "Real-time validation and feedback loop for fine-motor training",
      "Built as a modular training framework for additional scenarios",
      "Explores MX Ink beyond creative workflows into technical instruction use cases",
    ],
    links: {
      demo: "https://docs.google.com/document/d/1G0683976K-N_UvZPlTx7WubAdlMQKjX3X8Slo0mwscY/edit?usp=sharing",
      github: "",
      devpost:
        "https://devpost.com/software/spatial-mentor-ai-precision-mr-training",
    },
    likes: 0,
    comments: 0,
  },
  {
    name: "CookLynx AI",
    hackathon: "RevenueCat Shipyard: Creator Contest",
    date: "Feb 12, 2026",
    publishedAt: "2026-02-12T22:54:19-05:00",
    description:
      "Turn food photos and reels into ingredient lists, grocery plans, and cooking ideas instantly. Upload a photo or share a recipe URL to extract ingredients, get recipe recommendations, and generate shareable grocery lists.",
    techStack: [
      "Expo",
      "React Native",
      "Node.js",
      "Express",
      "Firebase",
      "Google Gemini",
      "Google Cloud",
      "RevenueCat",
    ],
    highlights: [
      "Photo-to-ingredient detection with AI-powered recognition",
      "Three recipe recommendations per ingredient set",
      "URL and reel ingredient extraction",
      "Freemium model with RevenueCat subscription integration",
    ],
    links: {
      demo: "https://cooklynx-ai-app.vercel.app",
      github: "https://github.com/yatinkalra22/cooklynx-ai-app",
      devpost: "https://devpost.com/software/cooklynx-ai",
    },
    likes: 0,
    comments: 0,
  },
  {
    name: "SpaceSense AI",
    hackathon: "Gemini 3 Hackathon",
    date: "Feb 9, 2026",
    publishedAt: "2026-02-09T09:55:23-05:00",
    description:
      "Analyzes photos and videos of your space across six design dimensions — lighting, clutter, color harmony, spatial layout, feng shui, and biophilic design — scoring 0–100 with AI-generated redesign suggestions.",
    techStack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Express.js",
      "Google Gemini",
      "Firebase",
      "Redis",
      "Google Cloud",
      "Mixpanel",
      "Sentry",
    ],
    highlights: [
      "Six-dimension space analysis with letter grades and scores",
      "AI-generated redesign showing how to fix identified issues",
      "Video analysis via key frame extraction with per-frame fixes",
      "Full observability with Mixpanel, Google Analytics, and Sentry",
    ],
    links: {
      demo: "https://space-sense-ai-nine.vercel.app",
      github: "https://github.com/yatinkalra22/space-sense-ai",
      devpost: "https://devpost.com/software/space-sense-ai",
    },
    team: ["Ajinkya Palande"],
    likes: 0,
    comments: 0,
  },
  {
    name: "Decision Lag",
    hackathon: "Tableau Hackathon 2025",
    date: "Jan 12, 2026",
    publishedAt: "2026-01-12T14:33:13-05:00",
    description:
      "An automated execution system that detects high-risk decisions viewed repeatedly but not acted on, then triggers Slack alerts and creates Salesforce follow-up tasks — bridging the gap between insight and action.",
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Salesforce",
      "Slack API",
      "Tableau Next",
      "REST API",
      "OAuth 2.0",
    ],
    highlights: [
      "Tracks decision insights with view counts and risk/impact ratings",
      "Automated Salesforce Flow triggers alerts when thresholds are exceeded",
      "Slack notifications for high-risk, frequently-viewed decisions",
      "Analytics dashboard showing decision lag patterns",
    ],
    links: {
      demo: "https://decision-lag.vercel.app",
      github: "https://github.com/yatinkalra22/decision-lag",
      devpost: "https://devpost.com/software/decision-lag",
    },
    likes: 7,
    comments: 2,
  },
].sort((a, b) => {
  const getTimestamp = (value?: string) => {
    if (!value) return 0;
    const timestamp = new Date(value).getTime();
    return Number.isNaN(timestamp) ? 0 : timestamp;
  };

  const bTime = getTimestamp(b.publishedAt) || getTimestamp(b.date);
  const aTime = getTimestamp(a.publishedAt) || getTimestamp(a.date);
  return bTime - aTime;
});

export const professionalProjects = [
  {
    company: "Fluent Health",
    projects: [
      {
        name: "Fluent Health Website",
        description:
          "Led the redesign and migration of the marketing website with full SEO optimization and CRM migration, improving organic traffic and lead conversion.",
        techStack: ["Next.js", "React", "Node.js", "SEO", "CRM Integration"],
        url: "https://fluentinhealth.com",
      },
      {
        name: "Console App (Patient & Doctor Portal)",
        description:
          "Architected and built an internal application for patient management, doctor scheduling, and event coordination — a HIPAA-compliant platform powering day-to-day healthcare operations.",
        techStack: ["React", "Node.js", "FHIR R4", "AWS", "PostgreSQL"],
      },
    ],
  },
  {
    company: "Presidio",
    projects: [
      {
        name: "Ulta Beauty",
        description:
          "Worked on the guest-facing application and built new features for 1,400+ stores. Led a major migration from Kronos scheduling system — a critical success. Added week and month view schedules and appointment features.",
        techStack: ["React", "Node.js", "Java", "Microservices", "REST API"],
        url: "https://www.ulta.com",
      },
      {
        name: "Greenway Health",
        description:
          "Developed healthcare interoperability solutions using FHIR R4 standards, building ETL pipelines and integrating clinical data across systems.",
        techStack: ["Node.js", "Java", "FHIR R4", "ETL", "REST API"],
        url: "https://www.greenwayhealth.com",
      },
      {
        name: "Alianza",
        description:
          "Built a branded meeting application for web, mobile, and desktop using the Amazon Chime SDK, enabling white-label video conferencing.",
        techStack: ["React", "Amazon Chime SDK", "Node.js", "WebRTC"],
        url: "https://www.alianza.com",
      },
      {
        name: "Tenerity",
        description:
          "Added new features to the web application, collaborating directly with AWS professionals on cloud architecture and frontend performance.",
        techStack: ["React", "AWS", "Node.js", "REST API"],
        url: "https://www.tenerity.com",
      },
      {
        name: "PGA Tour",
        description:
          "Built automated reporting pipelines to generate and deliver tournament and performance report files using Jasper Reports.",
        techStack: ["Java", "Node.js", "Jasper Reports", "REST API"],
        url: "https://www.pgatour.com",
      },
    ],
  },
  {
    company: "Brewhackers Technologies",
    projects: [
      {
        name: "Pondr",
        description:
          "A mobile-first, text-based social media platform. Handled the entire backend, cloud infrastructure, and contributed to mobile app features.",
        techStack: [
          "Flutter",
          "Node.js",
          "GraphQL",
          "TypeScript",
          "AWS",
        ],
      },
      {
        name: "Gist",
        description:
          "A mobile app that condenses long-form articles into screen-sized summaries with references to original sources, curated by an expert content writing team.",
        techStack: [
          "Flutter",
          "Node.js",
          "GraphQL",
          "JavaScript",
          "AWS",
        ],
      },
    ],
  },
  {
    company: "Headstrait Softwares",
    projects: [
      {
        name: "HSDB Banking Application",
        description:
          "Developed a secure banking application with APIs, dashboards, and real-time transaction processing for financial clients.",
        techStack: ["React", "Node.js", "PostgreSQL", "REST API", "Security"],
      },
      {
        name: "CrickBuzz & StockIt",
        description:
          "Built a cricket live-score tracking platform and a real-time stock tracking application, delivering personalized experiences with integrated web and backend solutions.",
        techStack: ["React", "Node.js", "WebSocket", "REST API", "Redis"],
      },
    ],
  },
];
