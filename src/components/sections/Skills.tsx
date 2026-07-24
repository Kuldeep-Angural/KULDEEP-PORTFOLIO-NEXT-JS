"use client";

import { skillCategories } from "@/src/constants/skills";
import MotionWrapper from "../common/MotionWrapper";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <MotionWrapper>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="border-primary/20 bg-primary/10 text-primary inline-flex rounded-full border px-4 py-2 text-sm">Skills</span>

            <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">Technical Expertise</h2>

            <p className="text-foreground-secondary mt-6 text-lg leading-8">Technologies and tools I use to design, develop, and deploy modern web applications.</p>
          </div>
        </MotionWrapper>

        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <MotionWrapper key={category.title} delay={index * 0.1}>
              <div className="card h-full p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{category.icon}</div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white">{category.title}</h3>

                      <p className="text-foreground-secondary mt-2">{category.description}</p>
                    </div>
                  </div>

                  <span className="text-primary font-bold">{category.level}%</span>
                </div>

                <div className="mt-6 h-2 rounded-full bg-white/10">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${category.level}%`,
                    }}
                  />
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-foreground-secondary hover:border-primary hover:text-primary rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
