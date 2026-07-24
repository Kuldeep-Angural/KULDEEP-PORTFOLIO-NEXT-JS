"use client";

import { ArrowRight, Download } from "lucide-react";
import { FaAws, FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDotnet, SiMongodb, SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import MotionWrapper from "../common/MotionWrapper";

const techStack = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "AWS",
    icon: <FaAws />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-20 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute right-0 bottom-20 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[150px]" />

      <div className="container-custom relative z-10 grid items-center gap-16 py-24 lg:grid-cols-2">
        {/* Left */}

        <MotionWrapper>
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for opportunities
            </div>

            <p className="text-foreground-secondary text-lg">Hello, I'm</p>

            <h1 className="mt-3 text-5xl leading-tight font-black text-white md:text-7xl">
              Kuldeep <span className="text-gradient">Kumar</span>
            </h1>

            <h2 className="text-foreground-secondary mt-6 text-2xl font-semibold md:text-3xl">Full Stack Software Engineer</h2>

            <p className="text-foreground-secondary mt-8 max-w-2xl text-lg leading-8">
              I build scalable SaaS applications, multi-tenant platforms, and modern web experiences using Next.js, React, Node.js, .NET, PostgreSQL, MongoDB, Docker, and AWS.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/resume.pdf" target="_blank" className="btn-primary flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </a>

              <a href="#contact" className="hover:border-primary hover:text-primary flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold transition">
                Let's Talk
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Tech */}

            <div className="mt-14 flex flex-wrap gap-3">
              {techStack.map((item) => (
                <div key={item.name} className="text-foreground-secondary hover:border-primary flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition">
                  <span className="text-lg">{item.icon}</span>

                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Right */}

        <MotionWrapper animation="left">
          <div className="relative mx-auto flex h-[500px] w-[500px] items-center justify-center">
            <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-3xl" />

            <div className="glass relative flex h-[380px] w-[380px] items-center justify-center rounded-full border border-white/10">
              <img src="/my.png" alt="Kuldeep Kumar" className="h-[340px] w-[340px] rounded-full object-cover" />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
