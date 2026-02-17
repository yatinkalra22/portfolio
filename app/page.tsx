import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const AboutBento = dynamic(() => import("@/components/AboutBento"));
const Experience = dynamic(() => import("@/components/Experience"));
const Work = dynamic(() => import("@/components/Work"));
const Education = dynamic(() => import("@/components/Education"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutBento />
      <Experience />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
