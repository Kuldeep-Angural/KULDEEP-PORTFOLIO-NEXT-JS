"use client";

import { BriefcaseBusiness, Code2, Globe, Layers3, MapPin } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";
import AnimatedCounter from "../common/AnimationCounter";

const highlights = ["Scalable SaaS Applications", "Multi-Tenant Architecture", "CRM & ERP Platforms", "REST APIs & Microservices", "Cloud Deployment (AWS)", "Modern UI Development"];

const stats = [
  {
    title: "Experience",
    value: 3,
    suffix: "+ Years",
    icon: BriefcaseBusiness,
  },
  {
    title: "Projects",
    value: 20,
    suffix: "+",
    icon: Layers3,
  },
  {
    title: "Technologies",
    value: 20,
    suffix: "+",
    icon: Code2,
  },
  {
    title: "Location",
    value: "India",
    icon: MapPin,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <MotionWrapper>
            <div>
              <span className="border-primary/30 bg-primary/10 text-primary inline-flex rounded-full border px-4 py-2 text-sm font-medium">About Me</span>

              <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
                Building digital products
                <br />
                <span className="text-gradient">that solve real problems.</span>
              </h2>

              <p className="text-foreground-secondary mt-8 text-lg leading-8">
                I'm a Full Stack Software Engineer with professional experience developing scalable SaaS platforms, enterprise applications, multi-tenant CMS solutions, and cloud-native systems.
                <br />
                <br />I enjoy transforming complex ideas into elegant, high-performance applications using modern technologies like React, Next.js, Node.js, .NET, PostgreSQL, MongoDB, Docker, and AWS.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="bg-primary h-2 w-2 rounded-full" />

                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>

          {/* RIGHT */}

          <MotionWrapper animation="left">
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="card p-8">
                    <div className="bg-primary/10 text-primary mb-6 inline-flex rounded-xl p-4">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {typeof item.value === "number" ? (
                        <AnimatedCounter
                          end={item.value}
                          suffix={item.suffix}
                        />
                      ) : (
                        item.value
                      )}
                    </h3>
                    <p className="text-foreground-muted mt-2">{item.title}</p>
                  </div>
                );
              })}

              <div className="card col-span-full p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-violet-500/10 p-4 text-violet-400">
                    <Globe size={30} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">Currently Working</h3>

                    <p className="text-foreground-secondary mt-2">
                      Senior Software Engineer @ INSONIX
                      <br />
                      Building Multi-Tenant SaaS, Payload CMS and Modern Web Platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
