"use client";

import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiDotnet, SiNextdotjs } from "react-icons/si";
import MotionWrapper from "../common/MotionWrapper";

const techStack = [
  { name: ".NET", icon: <SiDotnet /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[min(860px,100svh)] items-center overflow-hidden pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-[8%] h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.11] blur-[130px]" />
        <div className="absolute right-[-12rem] bottom-[-14rem] h-[38rem] w-[38rem] rounded-full bg-violet-500/[0.09] blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10 grid w-full items-center gap-14 py-14 lg:grid-cols-[1fr_0.82fr] lg:gap-20 lg:py-20">
        <MotionWrapper>
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/40 px-3.5 py-2 text-xs font-medium tracking-wide text-slate-300 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Full-stack engineer <span className="text-slate-600">/</span> Xbyte Solutions
            </div>

            <p className="text-primary text-xs font-semibold tracking-[0.24em] uppercase sm:text-sm">Thoughtful engineering. Useful outcomes.</p>

            <h1 className="mt-5 text-[clamp(3.5rem,8vw,6.25rem)] leading-[0.94] font-semibold tracking-[-0.075em] text-white">
              Kuldeep
              <br />
              <span className="text-gradient">Kumar.</span>
            </h1>

            <h2 className="mt-7 text-xl leading-8 font-medium text-slate-200 sm:text-2xl">I build full-stack products that make complex work feel simple.</h2>

            <p className="text-foreground-muted mx-auto mt-4 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 lg:mx-0">
              From dependable .NET services to polished React and Next.js experiences, I work across the stack to turn real product needs into software people can rely on.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400 lg:justify-start">
              <MapPin size={15} className="text-primary" />
              Punjab, India <span className="text-slate-700">·</span> Open to global collaboration
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#projects" className="btn-primary group flex items-center justify-center gap-2.5 px-5 py-3">
                Explore selected work
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <Download size={17} />
                Resume
              </a>
            </div>

            <div className="mt-9 border-t border-white/[0.08] pt-5">
              <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">Working across the stack</p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {techStack.map((item) => (
                  <span key={item.name} className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-medium text-slate-300 sm:text-sm">
                    <span className="text-base text-slate-400">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="left">
          <div className="relative mx-auto w-full max-w-[430px] lg:mr-4">
            <div aria-hidden="true" className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-400/10 blur-2xl" />

            <div className="glass relative rounded-[1.65rem] p-2.5 shadow-2xl shadow-black/30">
              <div className="relative aspect-[0.88] overflow-hidden rounded-[1.2rem] bg-slate-900">
                <Image src="/my.png" alt="Kuldeep Kumar" fill priority sizes="(max-width: 1024px) 85vw, 430px" className="object-cover object-center" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/5 to-slate-950/10" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
                  <span className="rounded-full border border-white/15 bg-slate-950/45 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-white/80 uppercase backdrop-blur-md">Engineer profile</span>
                  <span className="font-mono text-xs text-white/65">KK / 01</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-xs font-semibold tracking-[0.2em] text-blue-200 uppercase">Product-minded by design</p>
                  <p className="mt-2 max-w-xs text-2xl leading-tight font-semibold tracking-tight text-white sm:text-3xl">From first sketch to production.</p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Building at Xbyte Solutions
                  </div>
                </div>
              </div>
            </div>

            <a href="#about" className="text-foreground-muted mx-auto mt-6 inline-flex items-center gap-2 text-xs font-medium transition hover:text-white lg:absolute lg:top-1/2 lg:-right-12 lg:mt-0 lg:-translate-y-1/2 lg:[writing-mode:vertical-rl]">
              Discover how I work <ArrowDown size={14} className="lg:rotate-[-90deg]" />
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
