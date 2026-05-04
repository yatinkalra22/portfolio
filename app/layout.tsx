import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { personalInfo } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yatinkalra22-portfolio.vercel.app"),
  title: "Yatin Kalra — Senior Full Stack Engineer & Cloud Architect",
  description:
    "Portfolio of Yatin Rajkumar Kalra — Senior Full Stack Engineer with 8+ years architecting React, Node.js, and AWS systems across fintech, healthcare, and SaaS. 11 hackathon projects and counting.",
  keywords: [
    "Full Stack Engineer",
    "React",
    "Node.js",
    "AWS",
    "TypeScript",
    "Next.js",
    "DevOps",
    "DevSecOps",
    "Cloud Architect",
    "Tech Lead",
    "Hackathon",
    "AI Agents",
  ],
  authors: [{ name: "Yatin Kalra" }],
  creator: "Yatin Rajkumar Kalra",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Yatin Kalra — Senior Full Stack Engineer",
    description:
      "8+ years shipping cloud-native systems across fintech, healthcare, and SaaS. AI agents, distributed systems, hackathon-grade velocity.",
    type: "website",
    url: "/",
    siteName: "Yatin Kalra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatin Kalra — Senior Full Stack Engineer",
    description:
      "8+ years shipping cloud-native systems. AI agents, distributed systems, hackathon-grade velocity.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#030014" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  email: `mailto:${personalInfo.email}`,
  telephone: personalInfo.phone,
  url: "https://yatinkalra22-portfolio.vercel.app",
  address: {
    "@type": "PostalPlace",
    addressLocality: "Indiana",
    addressCountry: "USA",
  },
  sameAs: [personalInfo.linkedin, personalInfo.github, personalInfo.devpost],
  knowsAbout: [
    "React",
    "Node.js",
    "AWS",
    "TypeScript",
    "Next.js",
    "Microservices",
    "Cloud Architecture",
    "AI Agents",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
