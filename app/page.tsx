import dynamic from "next/dynamic";

const LoadingScreen = dynamic(
  () => import("@/components/immersive/LoadingScreen")
);
const NavigationImmersive = dynamic(
  () => import("@/components/immersive/NavigationImmersive")
);
const HeroSection = dynamic(
  () => import("@/components/immersive/HeroSection")
);
const AboutSection = dynamic(
  () => import("@/components/immersive/AboutSection")
);
const ExperienceSection = dynamic(
  () => import("@/components/immersive/ExperienceSection")
);
const WorkSection = dynamic(
  () => import("@/components/immersive/WorkSection")
);
const EducationSection = dynamic(
  () => import("@/components/immersive/EducationSection")
);
const ContactSection = dynamic(
  () => import("@/components/immersive/ContactSection")
);
const FooterSection = dynamic(
  () => import("@/components/immersive/FooterSection")
);

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#faf9ff] dark:bg-[#030014] transition-colors">
      <LoadingScreen />
      <NavigationImmersive />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
