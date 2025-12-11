import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yatin Kalra - Senior Full Stack Engineer",
  description: "Portfolio of Yatin Rajkumar Kalra - Senior Full Stack Engineer with 8+ years of experience in React, Node.js, AWS, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Node.js", "AWS", "TypeScript", "Next.js"],
  authors: [{ name: "Yatin Kalra" }],
  openGraph: {
    title: "Yatin Kalra - Senior Full Stack Engineer",
    description: "Portfolio showcasing my work in web development, cloud architecture, and modern JavaScript.",
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
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
