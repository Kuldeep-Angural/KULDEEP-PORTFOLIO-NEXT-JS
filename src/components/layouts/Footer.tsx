import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const technologies = ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Docker"];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-[#020617]">
      {/* CTA */}

      <div className="container-custom py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-10 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Let's Work Together</p>

          <h2 className="mt-4 text-4xl font-bold text-white">Ready to build something amazing?</h2>

          <p className="text-foreground-secondary mx-auto mt-5 max-w-2xl">I'm always interested in discussing new opportunities, challenging projects, and innovative ideas.</p>

          <a href="#contact" className="btn-primary mt-8 inline-flex items-center gap-2">
            Contact Me
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Main Footer */}

      <div className="container-custom grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        {/* About */}

        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-lg font-bold text-white">KK</div>

            <div>
              <h3 className="font-bold text-white">Kuldeep Kumar</h3>

              <p className="text-foreground-muted text-sm">Full Stack Engineer</p>
            </div>
          </div>

          <p className="text-foreground-secondary mt-6 leading-7">Passionate about building scalable SaaS applications, modern web experiences, and cloud-native solutions using Next.js, Node.js, .NET, AWS, and modern technologies.</p>

          <div className="mt-6 flex gap-4">
            <Link href="https://github.com/Kuldeep-Angural" target="_blank" className="hover:border-primary hover:text-primary rounded-full border border-white/10 p-3 transition">
              <FaGithub size={18} />
            </Link>

            <Link href="https://www.linkedin.com/in/kuldeep-angural-485a13252" target="_blank" className="hover:border-primary hover:text-primary rounded-full border border-white/10 p-3 transition">
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>

          <ul className="mt-6 space-y-4">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-foreground-secondary hover:text-primary transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}

        <div>
          <h3 className="text-lg font-semibold text-white">Tech Stack</h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-foreground-secondary rounded-full border border-white/10 px-3 py-1 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}

        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>

          <div className="mt-6 space-y-5">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />

              <a href="mailto:kuldeep.navv@gmail.com" className="text-foreground-secondary hover:text-primary">
                kuldeep.navv@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />

              <span className="text-foreground-secondary">+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" />

              <span className="text-foreground-secondary">Punjab, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">
        <div className="container-custom text-foreground-muted flex flex-col items-center justify-center gap-4 py-6 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} Kuldeep Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
