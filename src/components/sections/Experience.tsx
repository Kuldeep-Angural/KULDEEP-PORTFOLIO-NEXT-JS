"use client";

import { BriefcaseBusiness, CalendarDays, ChevronRight } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const experiences = [
 {
  company: "confidential",
  position: "Full Stack Software Engineer",
  duration: "August 2026 — Present",
  location: "Remote",

  description:
    "Working as a Full Stack Software Engineer, developing scalable web applications, enterprise SaaS platforms, modern CMS solutions, and cloud-native applications while delivering high-performance, maintainable, and user-centric software.",

  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GitHub Actions",
    "REST APIs",
    "Material UI"
  ],

  responsibilities: [
    "Develop scalable full-stack web applications using Next.js and Node.js.",
    "Design and implement secure RESTful APIs and backend services.",
    "Build reusable, responsive, and accessible React components.",
    "Optimize application performance and improve user experience.",
    "Integrate third-party APIs, authentication, and payment services.",
    "Work with MongoDB and PostgreSQL for efficient data management.",
    "Deploy and maintain applications using AWS and Docker.",
    "Implement CI/CD pipelines with GitHub Actions.",
    "Collaborate with cross-functional teams in an Agile development environment.",
    "Participate in code reviews and mentor junior developers."
  ],
},
{
  company: "INSONIX",
  position: "Software Engineer",
  duration: "June 2023 — August 2026",
  location: "Onsite, Chandigarh, India",

  description:
    "Worked as a Software Engineer, building enterprise SaaS applications, multi-tenant platforms, CMS solutions, analytics dashboards, and automation tools for international clients.",

  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "Payload CMS",
    "Storyblok",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GitHub Actions"
  ],

  responsibilities: [
    "Developed scalable multi-tenant SaaS applications.",
    "Built reusable React & Next.js component libraries.",
    "Designed secure REST APIs with Node.js & Express.",
    "Integrated Stripe, Webhooks, and third-party APIs.",
    "Worked with AWS S3, RDS, and Docker deployments.",
    "Implemented CI/CD pipelines using GitHub Actions.",
    "Collaborated with designers and product managers in Agile teams."
  ],
}

  // {
  //   company: "Infospectra",
  //   position: "Frontend Developer",
  //   duration: "Jul 2023 — Jan 2024",
  //   location: "Mohali",

  //   description:
  //     "Worked on a large-scale CRM & ERP platform used for sales, employee management, finance and inventory operations.",

  //   technologies: [
  //     "React",
  //     "Redux",
  //     "JavaScript",
  //     "Syncfusion",
  //     "Material UI",
  //     "REST API",
  //   ],

  //   responsibilities: [
  //     "Developed responsive business dashboards.",
  //     "Integrated REST APIs.",
  //     "Built reusable UI components.",
  //     "Optimized application performance.",
  //     "Worked closely with backend developers.",
  //     "Maintained enterprise-grade frontend architecture.",
  //   ],
  // },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Heading */}

        <MotionWrapper>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="border-primary/20 bg-primary/10 text-primary inline-flex rounded-full border px-4 py-2 text-sm">Experience</span>

            <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">Professional Experience</h2>

            <p className="text-foreground-secondary mt-6 text-lg leading-8">Building scalable SaaS platforms, enterprise software, cloud-native applications and modern web experiences.</p>
          </div>
        </MotionWrapper>

        <div className="relative mx-auto max-w-6xl">
          {/* Timeline */}

          <div className="absolute top-0 left-5 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-12">
            {experiences.map((job, index) => (
              <MotionWrapper key={job.company} delay={index * 0.15}>
                <div className="relative md:pl-20">
                  {/* Timeline Icon */}

                  <div className="bg-primary absolute top-2 left-0 hidden h-10 w-10 items-center justify-center rounded-full text-white md:flex">
                    <BriefcaseBusiness size={18} />
                  </div>

                  {/* Card */}

                  <div className="card p-8">
                    <div className="flex flex-col justify-between gap-6 lg:flex-row">
                      <div>
                        <h3 className="text-3xl font-bold text-white">{job.company}</h3>

                        <p className="text-primary mt-2 text-xl font-semibold">{job.position}</p>

                        <p className="text-foreground-muted mt-2">{job.location}</p>
                      </div>

                      <div className="text-foreground-secondary inline-flex h-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm">
                        <CalendarDays size={16} />

                        {job.duration}
                      </div>
                    </div>

                    <p className="text-foreground-secondary mt-8 leading-8">{job.description}</p>

                    {/* Tech */}

                    <div className="mt-8 flex flex-wrap gap-3">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="border-primary/20 bg-primary/10 text-primary rounded-full border px-4 py-2 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Responsibilities */}

                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                      {job.responsibilities.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <ChevronRight size={18} className="text-primary mt-1" />

                          <p className="text-foreground-secondary">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
