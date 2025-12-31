import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Aakash Kumar | Flutter Developer & Full-Stack Web Developer</title>
      <meta
        name="description"
        content="Aakash Kumar - Experienced Flutter Developer and Full-Stack Web Developer with 3+ years of experience. Building scalable, high-performance mobile and web applications."
      />
      <meta
        name="keywords"
        content="Flutter Developer, Full-Stack Developer, React Developer, Mobile App Developer, Web Developer, Firebase, Aakash Kumar"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
