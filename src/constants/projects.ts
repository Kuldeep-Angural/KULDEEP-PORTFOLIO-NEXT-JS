export interface Project {
  id: string;
  featured: boolean;
  category: "SaaS" | "AI" | "Analytics" | "Desktop" | "Enterprise" | "Healthcare";

  title: string;

  subtitle: string;

  description: string;

  image: string;

  liveUrl?: string;

  githubUrl?: string;

  privateRepo: boolean;

  technologies: string[];

  features: string[];

  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "tenivio",

    featured: true,

    category: "SaaS",

    title: "Tenivio",

    subtitle: "Multi-Tenant Website Builder & Headless CMS",

    description:
      "Tenivio is a modern multi-tenant SaaS platform that enables businesses and agencies to create, manage, and deploy multiple websites from a single application. It provides authentication, subscription plans, reusable templates, media management, tenant isolation, and a flexible content management experience powered by Payload CMS.",

    image: "/tenivio.png",

    liveUrl: "https://tenivio.com",

    githubUrl: "",

    privateRepo: true,

    technologies: ["Next.js", "React", "TypeScript", "Payload CMS", "MongoDB", "AWS S3", "Docker", "Storyblok", "GitHub Actions"],

    features: ["Multi-Tenant Architecture", "Website Builder", "Reusable Components", "Authentication & Authorization", "Subscription Plans", "Media Library", "Role Based Access", "AWS Storage"],

    highlights: ["Built scalable multi-tenant architecture.", "Designed reusable page builder components.", "Integrated AWS cloud storage.", "Implemented subscription management."],
  },

  {
    id: "compilefusion",

    featured: true,

    category: "AI",

    title: "CompileFussion",

    subtitle: "AI Powered Developer Productivity Platform",

    description:
      "CompileFussion is an AI-powered web platform that combines developer utilities and business productivity tools into one modern workspace. It provides online coding tools, intelligent assistants, debugging utilities, and analytics dashboards to improve developer productivity.",

    image: "/compilefussion.png",

    liveUrl: "https://compilefussion.com",

    githubUrl: "",

    privateRepo: true,

    technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "OpenAI", "REST APIs"],

    features: ["AI Notepad", "JavaScript Playground", "HTML Preview", "JSON Diff Tool", "Regex Generator", "Regex Tester", "REST API Tester", "Code Formatter", "AI Assistant", "Business Tools"],

    highlights: ["Designed responsive developer workspace.", "Integrated AI-powered coding assistance.", "Created multiple online developer tools.", "Optimized performance for browser execution."],
  },

  {
    id: "fussion-analytics",

    featured: true,

    category: "Analytics",

    title: "Fussion Analytics",

    subtitle: "Google Analytics Dashboard",

    description: "Fussion Analytics transforms raw Google Analytics data into intuitive dashboards with interactive charts, KPIs, reports, traffic analysis, and business insights for better decision making.",

    image: "/fa.png",

    liveUrl: "",

    githubUrl: "",

    privateRepo: true,

    technologies: ["Next.js", "React", "TypeScript", "Google Analytics API", "MongoDB", "Chart.js", "Tailwind CSS"],

    features: ["Google Analytics Integration", "Interactive Charts", "Business KPIs", "Traffic Reports", "User Behaviour", "Device Analytics", "Country Reports", "Responsive Dashboard"],

    highlights: ["Visualized GA4 metrics beautifully.", "Created reusable analytics widgets.", "Built customizable dashboard layouts.", "Improved business reporting experience."],
  },

  {
    id: "target-profilo",

    featured: true,

    category: "SaaS",

    title: "Target Profilo",

    subtitle: "Marketing Automation Platform",

    description: "Enterprise marketing automation platform that enables businesses to manage Email, SMS, WhatsApp campaigns, landing pages, customer journeys, workflow automation, and online events from one platform.",

    image: "/tp.png",

    liveUrl: "",

    githubUrl: "",

    privateRepo: true,

    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Agenda", "AWS", "Cron Jobs", "Webhooks"],

    features: ["Email Marketing", "SMS Campaigns", "WhatsApp Messaging", "Workflow Builder", "Landing Pages", "Stripe Payments", "Event Management", "Automation"],

    highlights: ["Built scalable marketing modules.", "Integrated Stripe payments.", "Implemented workflow automation.", "Developed webhook integrations."],
  },

  {
    id: "kashflow",

    featured: false,

    category: "Desktop",

    title: "KashFlow",

    subtitle: "Desktop Accounting Management System",

    description: "Cross-platform accounting desktop application developed using Electron.js for managing invoices, financial transactions, reports, customer records, and day-to-day accounting operations.",

    image: "/kf.png",

    liveUrl: "",

    githubUrl: "",

    privateRepo: true,

    technologies: ["Electron.js", "React", "Material UI", "Node.js", "PostgreSQL", "TypeScript"],

    features: ["Invoice Management", "Accounting", "Financial Reports", "Customer Records", "Authentication", "Offline Desktop App"],

    highlights: ["Developed cross-platform desktop software.", "Integrated PostgreSQL database.", "Built responsive Material UI interface.", "Optimized desktop performance."],
  },

  {
    id: "meditrust",

    featured: false,

    category: "Healthcare",

    title: "Meditrust",

    subtitle: "Hospital Management System",

    description: "Hospital management application designed to simplify patient registration, appointments, staff management, medical records, and hospital administration with a responsive and intuitive interface.",

    image: "/meditrust.png",

    liveUrl: "https://meditrust-ui.vercel.app/",

    githubUrl: "",

    privateRepo: true,

    technologies: ["React", "Node.js", "Express", "MongoDB", "Material UI", "TypeScript"],

    features: ["Patient Management", "Appointments", "Staff Management", "Medical Records", "Hospital Dashboard", "Reports"],

    highlights: ["Designed responsive hospital dashboard.", "Managed patient workflow efficiently.", "Built reusable frontend components.", "Integrated REST APIs."],
  },

  {
    id: "crm-erp",

    featured: false,

    category: "Enterprise",

    title: "CRM & ERP Platform",

    subtitle: "Enterprise Business Management System",

    description: "Enterprise CRM and ERP platform used for sales management, accounting, inventory tracking, employee management, customer operations, and business reporting.",

    image: "/mro.png",

    liveUrl: "",

    githubUrl: "",

    privateRepo: true,

    technologies: ["React", "Redux", "JavaScript", "Syncfusion", "REST APIs", "Material UI"],

    features: ["Sales Management", "Employee Management", "Inventory", "Accounting", "Reporting", "Responsive Dashboard"],

    highlights: ["Developed enterprise dashboard.", "Created reusable UI components.", "Integrated REST APIs.", "Optimized frontend performance."],
  },
  {
    id: "safeaeon",

    featured: false,

    category: "Enterprise",

    title: "SafeAeon",

    subtitle: "Security Management Dashboard",

    description:
      "SafeAeon is an enterprise security management platform that helps organizations monitor security operations, manage personnel, track incidents, generate reports, and oversee day-to-day security activities through a centralized dashboard.",

    image: "/safeaeon.png",

    liveUrl: "https://safeaeon.ai",

    githubUrl: "",

    privateRepo: true,

    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Material UI", "REST APIs"],

    features: ["Security Dashboard", "Incident Management", "Guard Management", "Reports", "Real-time Monitoring", "Analytics", "Role Management"],

    highlights: ["Built enterprise dashboard modules.", "Created reusable React components.", "Integrated secure backend APIs.", "Optimized reporting interface."],
  },
  {
    id: "EasySpeak",

    featured: false,

    category: "AI",

    title: "EasySpeak",

    subtitle: "AI Powered English Learning Platform",

    description:
      "EasySpeak is an interactive English speaking and language learning platform designed to improve communication skills through AI-assisted conversations, vocabulary exercises, pronunciation practice, quizzes, and personalized learning experiences.",

    image: "/easyspeak.png",

    liveUrl: "",

    githubUrl: "",

    privateRepo: true,

    technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "OpenAI", "Tailwind CSS"],

    features: ["AI Conversations", "Vocabulary Practice", "Speaking Exercises", "Grammar Lessons", "Pronunciation Training", "Interactive Quizzes", "Learning Dashboard"],

    highlights: ["Designed engaging learning interface.", "Integrated AI-powered conversation features.", "Developed responsive dashboard.", "Improved user learning experience."],
  },
];
