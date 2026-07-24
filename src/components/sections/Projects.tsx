"use client";

import { ArrowUpRight, Lock, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import MotionWrapper from "../common/MotionWrapper";
import { projects } from "@/src/constants/projects";
import React, { useEffect } from "react";

export default function Projects() {
  const [data, setData] = React.useState(projects);

  useEffect(() => {
    setData(projects);
  }, []);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="bg-primary/10 absolute top-40 left-0 h-72 w-72 rounded-full blur-[120px]" />

        <div className="absolute right-0 bottom-40 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="container-custom">
        {/* Heading */}

        <MotionWrapper>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="border-primary/20 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Sparkles size={16} />
              Featured Projects
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Building products that solve
              <span className="text-gradient"> real-world problems</span>
            </h2>

            <p className="text-foreground-secondary mt-6 text-lg leading-8">From AI-powered developer tools to enterprise SaaS platforms, analytics dashboards and desktop applications.</p>
          </div>
        </MotionWrapper>

        {/* Projects */}

        <div className="space-y-32">
          {data?.map((project, index) => (
            <MotionWrapper key={project.id} animation={index % 2 === 0 ? "right" : "left"}>
              <div key={project.id} className={`grid items-center gap-14 lg:grid-cols-2 ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Image */}

                <div className="group bg-card relative overflow-hidden rounded-3xl border border-white/10">
                  <div className="relative aspect-video">
                    <Image src={project?.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                </div>

                {/* Content */}

                <div>
                  <span className="color-white bg-primary/10 text-primary inline-flex rounded-full px-4 py-2 text-sm font-medium">{project.category}</span>

                  <h3 className="mt-5 text-4xl font-bold text-white">{project.title}</h3>

                  <p className="text-primary mt-2 text-lg">{project.subtitle}</p>

                  <p className="text-foreground-secondary mt-6 leading-8">{project.description}</p>

                  {/* Tech */}

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-foreground-secondary rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}

                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    {project.features.slice(0, 6).map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="bg-primary h-2 w-2 rounded-full" />

                        <span className="text-foreground-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="mt-10 flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" className="btn-primary inline-flex items-center gap-2">
                        Live Demo
                        <ArrowUpRight size={18} />
                      </Link>
                    )}

                    {project.privateRepo ? (
                      <div className="text-foreground-secondary inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm">
                        <Lock size={16} />
                        Private Repository
                      </div>
                    ) : (
                      <Link href={project.githubUrl || "#"} target="_blank" className="hover:border-primary hover:text-primary inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition">
                        <FaGithub size={18} />
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
