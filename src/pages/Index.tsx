import ThemeToggle from '@/components/ThemeToggle';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import TechnicalSkills from '@/components/TechnicalSkills';
import PersonalBranding from '@/components/PersonalBranding';
import CVModal from '@/components/CVModal';
import {useState} from 'react';

const Index = () => {
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);

    const openCVModal = () => setIsCVModalOpen(true);
    const closeCVModal = () => setIsCVModalOpen(false);

    return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
        <Navigation onOpenCV={openCVModal}/>
        <Hero onOpenCV={openCVModal}/>
      <About />
        <Experience onOpenCV={openCVModal}/>
      <Education />
      <TechnicalSkills />
      <Projects />
      <PersonalBranding />
        <Contact onOpenCV={openCVModal}/>

        <CVModal isOpen={isCVModalOpen} onClose={closeCVModal}/>
    </div>
  );
};

export default Index;