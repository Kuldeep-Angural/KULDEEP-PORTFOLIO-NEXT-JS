"use client";

import { certifications, education } from "@/src/constants/education";
import { Award, GraduationCap, MapPin } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        {/* Heading */}

        <MotionWrapper>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="border-primary/20 bg-primary/10 text-primary inline-flex rounded-full border px-4 py-2 text-sm">Education</span>

            <h2 className="mt-6 text-4xl font-bold text-white">Education & Continuous Learning</h2>

            <p className="text-foreground-secondary mt-6 text-lg leading-8">A strong academic foundation combined with a commitment to continuous learning and professional growth.</p>
          </div>
        </MotionWrapper>

        {/* Education */}

        <div className="space-y-8">
          {education.map((item, index) => (
            <MotionWrapper key={item.degree} delay={index * 0.1}>
              <div className="card p-8">
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="bg-primary/10 text-primary mb-4 inline-flex rounded-xl p-3">
                      <GraduationCap size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>

                    <p className="text-primary mt-2">{item.institute}</p>

                    <p className="text-foreground-secondary mt-6 leading-8">{item.description}</p>
                  </div>

                  {/* Right */}
                  <div className="flex shrink-0 flex-col items-start gap-4 lg:w-48 lg:items-end">
                    <span className="rounded-full border border-white/10 px-4 py-2 text-sm whitespace-nowrap">{item.duration}</span>

                    <div className="text-foreground-muted flex items-center gap-2 text-sm">
                      <MapPin size={16} className="shrink-0" />
                      <span className="whitespace-nowrap">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Certifications */}

        <MotionWrapper>
          <div className="mt-24">
            <h3 className="mb-10 text-3xl font-bold text-white">Certifications & Learning</h3>

            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert.title} className="card flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <Award className="text-primary" />

                    <div>
                      <h4 className="font-semibold text-white">{cert.title}</h4>

                      <p className="text-foreground-muted text-sm">{cert.issuer}</p>
                    </div>
                  </div>

                  <span className="border-primary/20 bg-primary/10 text-primary rounded-full border px-3 py-1 text-sm">{cert.status}</span>
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
