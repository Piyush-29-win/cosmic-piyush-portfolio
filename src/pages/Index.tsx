
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarBackground';
import SpaceScene from '@/components/SpaceScene';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.title = "Piyush - Full Stack Developer";
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-space-dark'}`}>
      {theme === 'dark' && <StarBackground />}
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className={`py-12 ${theme === 'light' ? 'bg-gray-50' : 'bg-space-darker'} relative z-10`}>
          <div className="container mx-auto px-4">
            <SpaceScene />
          </div>
        </div>
        
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
