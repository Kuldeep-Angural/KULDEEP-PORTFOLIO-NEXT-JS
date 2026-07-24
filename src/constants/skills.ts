export interface SkillCategory {
  title: string;
  icon: string;
  level: number;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "💻",
    level: 95,
    description: "Building responsive, accessible and high-performance user interfaces.",

    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Angular", "Tailwind CSS", "Material UI", "Syncfusion", "HTML5", "CSS3"],
  },

  {
    title: "Backend",
    icon: "⚙️",
    level: 90,
    description: "Developing scalable APIs, authentication and business logic.",

    skills: ["Node.js", "Express.js", ".NET", "REST APIs", "GraphQL", "JWT", "Cron Jobs", "Webhooks", "Agenda"],
  },

  {
    title: "Database",
    icon: "🗄️",
    level: 88,
    description: "Designing optimized relational and NoSQL databases.",

    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },

  {
    title: "Cloud & DevOps",
    icon: "☁️",
    level: 85,
    description: "Deploying applications using modern cloud infrastructure.",

    skills: ["AWS S3", "AWS RDS", "Docker", "Git", "GitHub", "GitHub Actions", "CI/CD"],
  },

  {
    title: "CMS & Integrations",
    icon: "🚀",
    level: 90,
    description: "Experience integrating headless CMS platforms and third-party services.",

    skills: ["Payload CMS", "Storyblok", "Stripe", "Google Analytics", "OpenAI", "REST APIs"],
  },
];
