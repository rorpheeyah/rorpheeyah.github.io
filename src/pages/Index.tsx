
import ThemeToggle from '@/components/ThemeToggle';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Education from '@/components/Education';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />

      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
