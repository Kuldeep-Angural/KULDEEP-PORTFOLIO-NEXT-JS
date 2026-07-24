export interface Education {
  degree: string;
  institute: string;
  duration: string;
  location: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  status: "Completed" | "In Progress" | "Planned";
}

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Lovely Professional University",
    duration: "2023 – 2025",
    location: "Punjab, India",
    description: "Currently pursuing a Master's degree with a focus on Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.",
  },

  {
    degree: "Full Stack Development",
    institute: "JSpiders / QSpiders",
    duration: "2022 – 2023",
    location: "Noida, India",
    description: "Completed intensive training in Java, Spring Boot, Servlets, Hibernate, SQL, HTML, CSS, JavaScript and modern web development.",
  },

  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Guru Nanak Dev University",
    duration: "2019 – 2022",
    location: "Punjab, India",
    description: "Studied Computer Programming, Database Management Systems, Networking, Java, C, C++, Web Technologies and Software Development.",
  },
];

export const certifications: Certification[] = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Planned",
  },

  {
    title: "Docker Essentials",
    issuer: "Docker",
    status: "Planned",
  },

  {
    title: "GitHub Actions",
    issuer: "GitHub",
    status: "Planned",
  },

  {
    title: "Google Analytics Certification",
    issuer: "Google",
    status: "Planned",
  },
];
