"use client";

import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.querySelector(item.href));

      const current = sections.find((section) => {
        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActive(`#${current.id}`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/70 border-b border-white/10 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="container-custom flex h-20 items-center justify-between">
          {/* Logo */}

          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 font-bold text-white shadow-lg transition-transform duration-300 group-hover:rotate-6">KK</div>

            <div>
              <p className="text-lg font-bold text-white">Kuldeep Kumar</p>

              <p className="text-foreground-muted text-xs">Full Stack Engineer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`relative text-sm font-medium transition ${active === item.href ? "text-primary" : "text-foreground-secondary hover:text-white"}`}>
                {item.label}

                {active === item.href && <motion.div layoutId="nav" className="bg-primary absolute -bottom-2 left-0 h-[2px] w-full rounded-full" />}
              </a>
            ))}
          </nav>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="https://github.com/Kuldeep-Angural" target="_blank" className="text-foreground-secondary hover:border-primary hover:text-primary rounded-full border border-white/10 p-2 transition">
              <FaGithub />
            </Link>

            <Link href="https://www.linkedin.com/in/kuldeep-angural-485a13252" target="_blank" className="text-foreground-secondary hover:border-primary hover:text-primary rounded-full border border-white/10 p-2 transition">
              <FaLinkedin />
            </Link>

            <Link href="/resume.pdf" target="_blank" className="hover:border-primary hover:text-primary flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2 text-sm transition">
              Resume
              <Download size={16} />
            </Link>

            <a href="#contact" className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
              Hire Me
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile */}

          <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="bg-background/95 fixed top-20 z-40 w-full border-b border-white/10 backdrop-blur-xl lg:hidden"
          >
            <div className="container-custom flex flex-col py-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-foreground-secondary hover:text-primary border-b border-white/5 py-4 text-lg transition">
                  {item.label}
                </a>
              ))}

              <div className="mt-8 flex gap-4">
                <Link href="https://github.com/" target="_blank" className="rounded-full border border-white/10 p-3">
                  <FaGithub />
                </Link>

                <Link href="https://linkedin.com/" target="_blank" className="rounded-full border border-white/10 p-3">
                  <FaLinkedin />
                </Link>
              </div>

              <Link href="/resume.pdf" className="mt-8 rounded-xl border border-white/10 py-3 text-center">
                Download Resume
              </Link>

              <a href="#contact" onClick={() => setOpen(false)} className="mt-4 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 py-3 text-center font-semibold">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
