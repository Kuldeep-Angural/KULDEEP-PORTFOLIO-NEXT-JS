import type { Metadata } from "next";
import MotionWrapper from "../components/common/MotionWrapper";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

export const metadata: Metadata = {
  title: "Kuldeep Kumar | Full Stack Software Engineer",
  description:
    "Explore the portfolio of Kuldeep Kumar, a Full Stack Software Engineer building scalable SaaS products, modern web applications, and AI-powered platforms.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div>
      <MotionWrapper>
        <Hero />
      </MotionWrapper>

      <MotionWrapper>
        <About />
      </MotionWrapper>

      <MotionWrapper>
        <Experience />
      </MotionWrapper>

      <Projects />

      <MotionWrapper>
        <Skills />
      </MotionWrapper>

      <MotionWrapper>
        <Education />
      </MotionWrapper>

      <MotionWrapper>
        <Contact />
      </MotionWrapper>
    </div>
  );
}
