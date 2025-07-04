import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import profileImage from '../assets/images/profile.png';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ['Senior Android Developer', 'Sub-Leader Mobile Department', 'Enterprise Mobile Architect'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float-slow"></div>



      {/* Text Content Overlay - Centered */}
      <div className="w-full max-w-6xl mx-auto relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full text-center animate-fade-in-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent animate-gradient-x leading-tight">
              Math Rorpheeyah
            </h1>
            <div className="h-12 md:h-16 lg:h-20 flex items-center justify-center relative">
              {titles.map((title, index) => (
                <h2 
                  key={index}
                  className={`absolute text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-foreground transition-all duration-1000 ease-in-out ${
                    index === currentTitleIndex 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  {title}
                </h2>
              ))}
            </div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-6 animate-fade-in-up-delayed">
              Senior Android Developer with 5+ years of experience building enterprise-grade mobile applications. 
              Currently serving as Sub-Leader of the Mobile Department at KOSIGN, leading development initiatives and mentoring junior engineers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">📍 Phnom Penh, Cambodia</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">🏆 Best Rookie Award 2020</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">🇰🇷 International Experience</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delayed">
            <Link
              to="/cv"
              className="group px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden inline-flex items-center justify-center"
            >
              <span className="relative z-10">Review CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <button
              onClick={scrollToAbout}
              className="group px-8 py-3 border border-border rounded-full font-medium hover:bg-accent hover:border-primary transition-all duration-300 hover:scale-105 relative overflow-hidden inline-flex items-center justify-center"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Arrow positioned outside the main content container */}
      <div className="absolute bottom-8 left-0 right-0 z-20 animate-bounce">
        <div className="flex justify-center">
          <button
            onClick={scrollToAbout}
            className="p-3 rounded-full bg-primary/10 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-primary transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
