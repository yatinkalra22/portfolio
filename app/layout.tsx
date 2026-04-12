import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Yatin Kalra - Senior Full Stack Engineer",
  description:
    "Portfolio of Yatin Rajkumar Kalra - Senior Full Stack Engineer with 8+ years of experience in React, Node.js, AWS, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "AWS",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Yatin Kalra" }],
  openGraph: {
    title: "Yatin Kalra - Senior Full Stack Engineer",
    description:
      "Portfolio showcasing my work in web development, cloud architecture, and modern JavaScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
