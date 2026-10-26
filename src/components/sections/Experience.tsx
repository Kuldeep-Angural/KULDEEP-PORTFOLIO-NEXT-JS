"use client";

import { BriefcaseBusiness, CalendarDays, ChevronRight } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

type ExperienceEntry = {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
};

const experiences: ExperienceEntry[] = [
  {
    company: "Xbyte Solutions",
    position: "Software Engineer",
    duration: "July 2026 — Present",
    description: "Working across .NET services and React/Next.js applications to deliver full-stack web product features.",
    technologies: [".NET", "React.js", "Next.js"],
    responsibilities: ["Develop application features using .NET.", "Build responsive user interfaces with React.js.", "Create web experiences and application pages with Next.js.", "Contribute across frontend and backend codebases."],
  },
  {
    company: "INSONIX",
    position: "Software Engineer",
    duration: "June 2023 — August 2026",
    location: "Onsite, Chandigarh, India",
    description: "Built enterprise SaaS applications, multi-tenant platforms, CMS solutions, analytics dashboards, and automation tools for international clients.",
    technologies: ["Next.js", "React", "Node.js", "Express", "Payload CMS", "Storyblok", "MongoDB", "PostgreSQL", "AWS", "Docker"],
    responsibilities: [
      "Developed scalable multi-tenant SaaS applications.",
      "Built reusable React and Next.js component libraries.",
      "Designed REST APIs with Node.js and Express.",
      "Integrated payment providers, webhooks, and third-party APIs.",
      "Worked with AWS services and Docker-based deployments.",
      "Collaborated with designers and product managers in Agile teams.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Heading */}

        <MotionWrapper>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="border-primary/20 bg-primary/10 text-primary inline-flex rounded-full border px-4 py-2 text-sm">Career</span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">Experience built in production</h2>

            <p className="text-foreground-secondary mt-6 text-lg leading-8">A record of shipping practical software across product teams, SaaS platforms, and modern web applications.</p>
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
                        <h3 className="text-2xl font-bold tracking-tight text-white">{job.company}</h3>

                        <p className="text-primary mt-2 text-lg font-semibold">{job.position}</p>

                        {job.location && <p className="text-foreground-muted mt-2">{job.location}</p>}
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
