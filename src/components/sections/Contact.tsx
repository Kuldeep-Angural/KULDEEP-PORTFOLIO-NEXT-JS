"use client";

import { AtSign, FileText, Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react";
import { useState } from "react";
import MotionWrapper from "../common/MotionWrapper";
import Toast from "../common/Toast";
import { sendEmail } from "@/src/lib/email";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setToast({ message: "Please fill all required fields.", type: "error" });
      return;
    }

    try {
      setLoading(true);

      await sendEmail({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      setToast({ message: "Email sent successfully! I will get back to you soon.", type: "success" });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setToast({ message: "Failed to send email. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <MotionWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">Contact</span>

            <h2 className="mt-6 text-5xl font-bold">Let's Build Something Amazing</h2>

            <p className="text-foreground-secondary mt-6 text-lg">I'm open to Full-time opportunities, freelance projects and collaborations.</p>
          </div>
        </MotionWrapper>

        <div className="mt-20 grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="card p-6">
              <Mail />

              <h3>Email</h3>

              <p>kuldeep.navv@gmail.com</p>
            </div>

            <div className="card p-6">
              <Phone />

              <h3>Phone</h3>

              <p>+91 XXXXX XXXXX</p>
            </div>

            <div className="card p-6">
              <MapPin />

              <h3>Location</h3>

              <p>Punjab, India</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-6 p-8 lg:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div className="relative">
                <User size={18} className="text-foreground-muted absolute top-1/2 left-4 -translate-y-1/2" />

                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="border-border bg-background/50 placeholder:text-foreground-muted focus:border-primary focus:ring-primary/20 h-14 w-full rounded-xl border pr-4 pl-12 transition-all duration-300 outline-none focus:ring-4"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <AtSign size={18} className="text-foreground-muted absolute top-1/2 left-4 -translate-y-1/2" />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="border-border bg-background/50 placeholder:text-foreground-muted focus:border-primary focus:ring-primary/20 h-14 w-full rounded-xl border pr-4 pl-12 transition-all duration-300 outline-none focus:ring-4"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <FileText size={18} className="text-foreground-muted absolute top-1/2 left-4 -translate-y-1/2" />

              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm({
                    ...form,
                    subject: e.target.value,
                  })
                }
                className="border-border bg-background/50 placeholder:text-foreground-muted focus:border-primary focus:ring-primary/20 h-14 w-full rounded-xl border pr-4 pl-12 transition-all duration-300 outline-none focus:ring-4"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare size={18} className="text-foreground-muted absolute top-5 left-4" />

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="border-border bg-background/50 placeholder:text-foreground-muted focus:border-primary focus:ring-primary/20 w-full resize-none rounded-xl border py-4 pr-4 pl-12 transition-all duration-300 outline-none focus:ring-4"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary/90 flex h-14 w-full items-center justify-center rounded-xl font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
}
