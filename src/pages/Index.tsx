import Navigation from "@/components/retro/Navigation";
import HeroSection from "@/components/retro/HeroSection";
import AboutSection from "@/components/retro/AboutSection";
import ProjectsSection from "@/components/retro/ProjectsSection";
import SkillsSection from "@/components/retro/SkillsSection";
import ContactSection from "@/components/retro/ContactSection";
import Footer from "@/components/retro/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";
import CursorGlow from "@/components/retro/CursorGlow";
import FloatingParticles from "@/components/retro/FloatingParticles";
import ScrollProgress from "@/components/retro/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scrollbar-hidden crt-screen">
      {/* Interactive overlay effects */}
      <CursorGlow />
      <FloatingParticles />
      <ScrollProgress />
      
      <Navigation />
      <BackgroundMusic />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
