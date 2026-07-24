import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";
const metadataBase = new URL(siteUrl);

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kuldeep Kumar",
  jobTitle: "Full Stack Software Engineer",
  description: "Kuldeep Kumar is a Full Stack Software Engineer building scalable SaaS products, modern web applications, and AI-powered platforms.",
  url: metadataBase.toString(),
  mainEntityOfPage: metadataBase.toString(),
  knowsAbout: ["Next.js", "React", "Node.js", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "TypeScript", "SaaS Development"],
};

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Kuldeep Kumar | Full Stack Software Engineer",
    template: "%s | Kuldeep Kumar",
  },
  description: "Kuldeep Kumar is a Full Stack Software Engineer specializing in scalable SaaS products, modern web applications, and AI-powered platforms using Next.js, React, Node.js, .NET, PostgreSQL, MongoDB, AWS, and Docker.",
  keywords: ["Kuldeep Kumar", "Full Stack Software Engineer", "Next.js Developer", "React Developer", "Node.js Developer", ".NET Developer", "SaaS Developer", "Portfolio", "Software Engineer India"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Kuldeep Kumar | Full Stack Software Engineer",
    description: "Explore the portfolio of Kuldeep Kumar, a Full Stack Software Engineer building scalable SaaS products and modern web experiences.",
    siteName: "Kuldeep Kumar Portfolio",
    images: [{ url: "/my.png", width: 1200, height: 630, alt: "Kuldeep Kumar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Kumar | Full Stack Software Engineer",
    description: "Full Stack Software Engineer focused on scalable SaaS products, modern web applications, and AI-powered platforms.",
    images: ["/my.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
  other: {
    "theme-color": "#0f172a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
